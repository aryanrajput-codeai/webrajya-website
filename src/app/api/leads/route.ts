import { NextRequest, NextResponse } from "next/server";
import { LAUNCH_CONFIG } from "@/config/launch";
import { COMPANY_CONFIG } from "@/config/company";

// In-memory rate limiting map for basic spam mitigation
const submissionLog = new Map<string, { count: number; lastTime: number }>();

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();
    const windowMs = 60 * 60 * 1000; // 1 hour

    // Check rate limit (max 8 requests per IP per hour)
    const userLog = submissionLog.get(ip) || { count: 0, lastTime: now };
    if (now - userLog.lastTime < windowMs && userLog.count >= 8) {
      return NextResponse.json(
        { error: "Too many submissions from this connection. Please reach out to us directly on WhatsApp." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Spam honeypot check: If the hidden honeypot field has a value, silently reject
    if (body.website_url && body.website_url.trim() !== "") {
      return NextResponse.json({ success: true, message: "Request received" });
    }

    const {
      fullName,
      shopName,
      shopType,
      phone,
      state,
      city,
      areaInNagpur,
      productInterest,
      planInterest,
      preferredTime,
      demoType,
      languagePreference,
      utmSource,
      utmCampaign,
      source,
      legalConsent,
      consentTimestamp,
      marketingConsent
    } = body;

    // Validate legal consent
    const hasLegalConsent = legalConsent === true || body.agreedToTerms === true;
    if (!hasLegalConsent) {
      return NextResponse.json(
        { error: "You must agree to the Privacy Policy and Terms and Conditions to proceed." },
        { status: 400 }
      );
    }

    // Validate Indian phone number (10 digits starting with 6-9)
    const cleanPhone = String(phone || "").replace(/\D/g, "");
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      return NextResponse.json(
        { error: "Please enter a valid 10-digit Indian mobile number." },
        { status: 400 }
      );
    }

    if (!fullName || fullName.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter your name." },
        { status: 400 }
      );
    }

    if (!state || state.trim().length === 0) {
      return NextResponse.json(
        { error: "Please select your state." },
        { status: 400 }
      );
    }

    if (!city || city.trim().length === 0) {
      return NextResponse.json(
        { error: "Please enter your city or town." },
        { status: 400 }
      );
    }

    // Update rate limit counter
    submissionLog.set(ip, {
      count: now - userLog.lastTime < windowMs ? userLog.count + 1 : 1,
      lastTime: now
    });

    const isNagpurCity = city.trim().toLowerCase() === "nagpur";

    const leadPayload = {
      fullName: fullName.trim(),
      shopName: (shopName || "").trim(),
      shopType: shopType || "Retail Store",
      phone: cleanPhone,
      state: state.trim(),
      city: city.trim(),
      areaInNagpur: isNagpurCity ? (areaInNagpur || "").trim() : undefined,
      productInterest: productInterest || "WebRajya Invoice",
      planInterest: planInterest || "Not sure",
      preferredTime: preferredTime || "Morning",
      demoType: demoType || "Video Call",
      languagePreference: languagePreference || "Hindi",
      utmSource: utmSource || undefined,
      utmCampaign: utmCampaign || undefined,
      source: source || "website_demo_form",
      legalConsent: true,
      consentTimestamp: consentTimestamp || new Date().toISOString(),
      marketingConsent: Boolean(marketingConsent),
      submittedAt: new Date().toISOString(),
      ownerNotifyEmail: LAUNCH_CONFIG.OWNER_NOTIFICATION_EMAIL
    };

    // Forward to CRM Webhook if configured and not local endpoint
    if (
      LAUNCH_CONFIG.CRM_WEBHOOK_URL &&
      LAUNCH_CONFIG.CRM_WEBHOOK_URL.startsWith("http")
    ) {
      try {
        await fetch(LAUNCH_CONFIG.CRM_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadPayload)
        });
      } catch (crmErr) {
        console.error("[CRM Webhook Forwarding Error]", crmErr);
      }
    }

    console.log("[WebRajya Nationwide Lead Captured]", leadPayload);

    return NextResponse.json({
      success: true,
      message: "Demo request booked successfully",
      redirectUrl: "/thank-you",
      lead: {
        fullName: leadPayload.fullName,
        city: leadPayload.city,
        state: leadPayload.state,
        demoType: leadPayload.demoType
      }
    });
  } catch (error) {
    console.error("[Lead Submission API Error]", error);
    return NextResponse.json(
      { error: "Failed to process demo request. Please message us directly on WhatsApp." },
      { status: 500 }
    );
  }
}
