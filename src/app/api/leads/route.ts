import { NextRequest, NextResponse } from "next/server";
import { LAUNCH_CONFIG } from "@/config/launch";

// In-memory rate limiting map for basic spam mitigation
const submissionLog = new Map<string, { count: number; lastTime: number }>();

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();
    const windowMs = 60 * 60 * 1000; // 1 hour

    // Check rate limit (max 5 requests per IP per hour)
    const userLog = submissionLog.get(ip) || { count: 0, lastTime: now };
    if (now - userLog.lastTime < windowMs && userLog.count >= 5) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again after an hour or contact us on WhatsApp." },
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
      areaInNagpur,
      preferredTime,
      demoType,
      languagePreference,
      utmSource,
      utmCampaign,
      source
    } = body;

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

    // Update rate limit counter
    submissionLog.set(ip, {
      count: now - userLog.lastTime < windowMs ? userLog.count + 1 : 1,
      lastTime: now
    });

    const leadPayload = {
      fullName: fullName.trim(),
      shopName: (shopName || "").trim(),
      shopType: shopType || "Retail Store",
      phone: cleanPhone,
      areaInNagpur: areaInNagpur || "Nagpur",
      preferredTime: preferredTime || "Morning",
      demoType: demoType || "In-Shop Visit",
      languagePreference: languagePreference || "Hindi",
      utmSource: utmSource || undefined,
      utmCampaign: utmCampaign || undefined,
      source: source || "website_demo_form",
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
        console.error("[CRM Webhook Error]", crmErr);
      }
    }

    console.log("[WebRajya New Nagpur Lead]", leadPayload);

    return NextResponse.json({
      success: true,
      message: "Demo request booked successfully",
      redirectUrl: "/thank-you"
    });
  } catch (error) {
    console.error("[Lead Submission API Error]", error);
    return NextResponse.json(
      { error: "Failed to process demo request. Please message us directly on WhatsApp." },
      { status: 500 }
    );
  }
}

