"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  CalendarCheck,
  MessageCircle,
  Phone,
  ShieldCheck,
  Store,
  MapPin,
  Clock,
  Video,
  Languages,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { COMPANY_CONFIG } from "@/config/company";
import { trackEvent, getUtmParams } from "@/lib/analytics";

export const INDIAN_STATES_AND_UTS = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi (NCR)",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
];

const SHOP_CATEGORIES = [
  "Mobile & Accessories",
  "Consumer Electronics & Appliances",
  "Clothing & Garment Retail",
  "Footwear & Shoes",
  "Stationery & Books",
  "Furniture & Home Decor",
  "Supermarket & Provision Store",
  "Hardware & Sanitary",
  "Restaurant / Cafe / Food",
  "Automotive / Spare Parts",
  "Other Retail Shop"
];

const LANGUAGE_OPTIONS = [
  { value: "Hindi", label: "Hindi (हिंदी)" },
  { value: "English", label: "English" },
  { value: "Marathi", label: "Marathi (मराठी)" },
  { value: "Gujarati", label: "Gujarati (ગુજરાતી)" },
  { value: "Punjabi", label: "Punjabi (ਪੰਜਾਬੀ)" },
  { value: "Bengali", label: "Bengali (বাংলা)" },
  { value: "Tamil", label: "Tamil (தமிழ்)" },
  { value: "Telugu", label: "Telugu (తెలుగు)" },
  { value: "Kannada", label: "Kannada (ಕನ್ನಡ)" },
  { value: "Malayalam", label: "Malayalam (മലയാളം)" },
  { value: "Other", label: "Other Indian Language" }
];

interface DemoFormProps {
  initialCity?: string;
  initialState?: string;
  initialProduct?: string;
}

export function NagpurRetailDemoForm({ initialCity, initialState, initialProduct }: DemoFormProps = {}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Query parameter pre-selection (?product=, ?plan=, ?city=)
  const queryProduct = initialProduct || searchParams.get("product") || "";
  const queryPlan = searchParams.get("plan") || "";
  const queryCity = initialCity || searchParams.get("city") || "";

  const [formData, setFormData] = useState({
    fullName: "",
    shopName: "",
    shopType: "",
    phone: "",
    state: initialState || "",
    city: queryCity || "",
    areaInNagpur: "",
    productInterest: queryProduct || "",
    planInterest: queryPlan || "",
    preferredTime: "",
    demoType: "",
    languagePreference: "",
    agreedToTerms: false,
    marketingConsent: false,
    website_url: "" // Honeypot trap
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [successLead, setSuccessLead] = useState<{ fullName: string; city: string; demoType: string } | null>(null);

  const isNagpurCity = formData.city.trim().toLowerCase() === "nagpur";

  // Pre-fill or adjust demoType based on city
  useEffect(() => {
    if (queryCity && !formData.city) {
      setFormData((prev) => ({ ...prev, city: queryCity }));
    }
  }, [queryCity, formData.city]);

  useEffect(() => {
    if (isNagpurCity) {
      if (!formData.demoType) {
        setFormData((prev) => ({ ...prev, demoType: "In-Shop Visit (Nagpur)" }));
      }
    } else {
      if (formData.demoType === "In-Shop Visit (Nagpur)") {
        setFormData((prev) => ({ ...prev, demoType: "Video Call (Google Meet / Zoom)" }));
      }
    }
  }, [isNagpurCity, formData.demoType]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setError("Please enter a valid 10-digit Indian mobile number (e.g., 9823012345).");
      return;
    }

    if (formData.fullName.trim().length < 2) {
      setError("Please enter your name.");
      return;
    }

    if (!formData.state) {
      setError("Please select your state.");
      return;
    }

    if (!formData.city.trim()) {
      setError("Please enter your city or town.");
      return;
    }

    if (!formData.shopType) {
      setError("Please select your business / shop category.");
      return;
    }

    if (!formData.productInterest) {
      setError("Please select which product you are interested in.");
      return;
    }

    if (!formData.demoType) {
      setError("Please choose how you would like to take the demo.");
      return;
    }

    if (!formData.languagePreference) {
      setError("Please choose your preferred language for the demo.");
      return;
    }

    if (!formData.agreedToTerms) {
      setError("Please agree to the Privacy Policy and Terms and Conditions to proceed.");
      return;
    }

    setLoading(true);
    const utm = getUtmParams();
    const consentTimestamp = new Date().toISOString();

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          shopName: formData.shopName,
          shopType: formData.shopType,
          phone: cleanPhone,
          state: formData.state,
          city: formData.city,
          areaInNagpur: isNagpurCity ? formData.areaInNagpur : undefined,
          productInterest: formData.productInterest,
          planInterest: formData.planInterest || "Not sure",
          preferredTime: formData.preferredTime || "Flexible",
          demoType: formData.demoType,
          languagePreference: formData.languagePreference,
          legalConsent: true,
          consentTimestamp,
          marketingConsent: formData.marketingConsent,
          utmSource: utm.utm_source,
          utmCampaign: utm.utm_campaign,
          source: utm.src || searchParams.get("src") || "nationwide_demo_form",
          website_url: formData.website_url
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit demo request.");
      }

      trackEvent("demo_form_submit", {
        shopType: formData.shopType,
        state: formData.state,
        city: formData.city,
        demoType: formData.demoType,
        product: formData.productInterest
      });

      setSuccessLead({
        fullName: formData.fullName,
        city: formData.city,
        demoType: formData.demoType
      });
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : "Submission failed. Please reach us directly on WhatsApp.";
      setError(errMsg);
      setLoading(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hi WebRajya, I requested a demo of ${formData.productInterest || "WebRajya"} for my ${formData.shopType || "retail"} business in ${formData.city || "India"}.`
  );
  const whatsappUrl = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${whatsappMessage}`;

  if (successLead) {
    return (
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-8 sm:p-12 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-[#020C2B]">
            Demo Request Confirmed, {successLead.fullName}!
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto">
            Our onboarding team will contact you within 2 business hours to schedule your {successLead.demoType} in {successLead.city}.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 max-w-md mx-auto space-y-1">
          <p className="font-bold text-[#020C2B]">Next Steps:</p>
          <p>1. We will verify your barcode scanner &amp; printer model over WhatsApp/phone.</p>
          <p>2. We will import your product catalog (Excel/CSV).</p>
          <p>3. You begin your 3-day full-feature trial on your counter.</p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-sm hover:bg-[#1ebe57] transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Connect on WhatsApp Now</span>
          </a>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 text-slate-800 font-bold text-sm hover:bg-slate-200 transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-10 space-y-8">
      {/* Form Header */}
      <div className="space-y-2 border-b border-slate-100 pb-5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono uppercase text-slate-500 font-bold tracking-wider">
            All-India Onboarding
          </span>
          <span className="text-xs font-mono text-emerald-700 font-bold flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5" /> 3-Day Free Trial
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#020C2B] tracking-tight">
          Book a Free 20-Minute Live Demo
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm">
          See how WebRajya works with your real products and printers. Setup help by video call and WhatsApp across India, with in-shop visits available in Nagpur.
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-start gap-2.5 animate-in fade-in">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      {/* Demo Booking Form */}
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Spam Honeypot Field (Hidden) */}
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="website_url"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website_url}
            onChange={(e) => setFormData({ ...formData, website_url: e.target.value })}
          />
        </div>

        {/* 1. Name & Shop Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="fullName" className="text-xs font-bold text-slate-800">
              Your Full Name <span className="text-rose-600">*</span>
            </Label>
            <Input
              id="fullName"
              placeholder="e.g. Ramesh Sharma"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
              className="bg-slate-50/70"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="shopName" className="text-xs font-bold text-slate-800">
              Business / Shop Name
            </Label>
            <Input
              id="shopName"
              placeholder="e.g. Sharma Mobile &amp; Electronics"
              value={formData.shopName}
              onChange={(e) => setFormData({ ...formData, shopName: e.target.value })}
              className="bg-slate-50/70"
            />
          </div>
        </div>

        {/* 2. Mobile Number & Shop Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="phone" className="text-xs font-bold text-slate-800 flex items-center justify-between">
              <span>WhatsApp / Mobile Number <span className="text-rose-600">*</span></span>
              <span className="text-[10px] text-slate-400 font-mono font-normal">10 digits</span>
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-xs text-slate-500 font-mono font-semibold">
                +91
              </span>
              <Input
                id="phone"
                type="tel"
                maxLength={10}
                placeholder="9823012345"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="pl-11 bg-slate-50/70 font-mono"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="shopType" className="text-xs font-bold text-slate-800">
              Business Category <span className="text-rose-600">*</span>
            </Label>
            <select
              id="shopType"
              value={formData.shopType}
              onChange={(e) => setFormData({ ...formData, shopType: e.target.value })}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 bg-slate-50/70 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              required
            >
              <option value="" disabled>Select your business category...</option>
              {SHOP_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* 3. State & City (Nationwide) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="state" className="text-xs font-bold text-slate-800">
              State / UT <span className="text-rose-600">*</span>
            </Label>
            <select
              id="state"
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 bg-slate-50/70 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              required
            >
              <option value="" disabled>Select your state...</option>
              {INDIAN_STATES_AND_UTS.map((st) => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="city" className="text-xs font-bold text-slate-800">
              City / Town <span className="text-rose-600">*</span>
            </Label>
            <Input
              id="city"
              placeholder="e.g. Pune, Indore, Nagpur, Jaipur"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              required
              className="bg-slate-50/70"
            />
          </div>
        </div>

        {/* Conditional Nagpur Area / Locality Input */}
        {isNagpurCity && (
          <div className="space-y-1.5 p-3.5 rounded-2xl bg-orange-50/60 border border-orange-100">
            <Label htmlFor="areaInNagpur" className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#E58145]" />
              <span>Nagpur Locality / Area (Optional for In-Shop Visit)</span>
            </Label>
            <Input
              id="areaInNagpur"
              placeholder="e.g. Sitabuldi, Dharampeth, Itwari, Sadar"
              value={formData.areaInNagpur}
              onChange={(e) => setFormData({ ...formData, areaInNagpur: e.target.value })}
              className="bg-white"
            />
            <p className="text-[11px] text-slate-600">
              Our Nagpur onboarding specialist visits your shop directly in person.
            </p>
          </div>
        )}

        {/* 4. Product & Plan Interest */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="productInterest" className="text-xs font-bold text-slate-800">
              Product Interest <span className="text-rose-600">*</span>
            </Label>
            <select
              id="productInterest"
              value={formData.productInterest}
              onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 bg-slate-50/70 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              required
            >
              <option value="" disabled>Select product...</option>
              <option value="WebRajya Invoice">WebRajya Invoice (Retail Store Billing &amp; Khata)</option>
              <option value="WebRajya POS">WebRajya POS (Restaurant, Cafe &amp; KOT)</option>
              <option value="Both">Both (Invoice + POS)</option>
              <option value="Not sure">Not sure yet / Need guidance</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="planInterest" className="text-xs font-bold text-slate-800">
              Plan Interest (Optional)
            </Label>
            <select
              id="planInterest"
              value={formData.planInterest}
              onChange={(e) => setFormData({ ...formData, planInterest: e.target.value })}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 bg-slate-50/70 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
            >
              <option value="">Select plan if decided...</option>
              <option value="monthly">Monthly (₹599 / month)</option>
              <option value="yearly">Annual (₹5,999 / year - Recommended)</option>
              <option value="early_lifetime">Early Lifetime (₹19,999 one-time)</option>
              <option value="lifetime">Regular Lifetime (₹25,999 one-time)</option>
              <option value="not_sure">Not sure yet</option>
            </select>
          </div>
        </div>

        {/* 5. Demo Method & Language */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="demoType" className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Video className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>How would you like the demo? <span className="text-rose-600">*</span></span>
            </Label>
            <select
              id="demoType"
              value={formData.demoType}
              onChange={(e) => setFormData({ ...formData, demoType: e.target.value })}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 bg-slate-50/70 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              required
            >
              <option value="" disabled>Select demo method...</option>
              <option value="Video Call (Google Meet / Zoom)">Video Call (Google Meet / Zoom Screen Share)</option>
              <option value="Phone / WhatsApp Call">Phone &amp; WhatsApp Walkthrough</option>
              {isNagpurCity && (
                <option value="In-Shop Visit (Nagpur)">In-Shop Visit (Our Specialist Visits Your Nagpur Shop)</option>
              )}
            </select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="languagePreference" className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Languages className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Preferred Language <span className="text-rose-600">*</span></span>
            </Label>
            <select
              id="languagePreference"
              value={formData.languagePreference}
              onChange={(e) => setFormData({ ...formData, languagePreference: e.target.value })}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 bg-slate-50/70 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              required
            >
              <option value="" disabled>Select preferred language...</option>
              {LANGUAGE_OPTIONS.map((lang) => (
                <option key={lang.value} value={lang.value}>{lang.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* 6. Legal & Marketing Consent Checkboxes */}
        <div className="space-y-3 pt-3 border-t border-slate-100">
          <div className="flex items-start gap-2.5">
            <input
              id="legalConsent"
              type="checkbox"
              required
              checked={formData.agreedToTerms}
              onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
            />
            <label htmlFor="legalConsent" className="text-xs text-slate-700 leading-snug cursor-pointer select-none">
              I agree to the{" "}
              <Link href="/privacy-policy" target="_blank" className="text-emerald-700 underline font-semibold hover:text-emerald-800">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms" target="_blank" className="text-emerald-700 underline font-semibold hover:text-emerald-800">
                Terms and Conditions
              </Link>
              . <span className="text-rose-600 font-bold">*</span>
            </label>
          </div>

          <div className="flex items-start gap-2.5">
            <input
              id="marketingConsent"
              type="checkbox"
              checked={formData.marketingConsent}
              onChange={(e) => setFormData({ ...formData, marketingConsent: e.target.checked })}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
            />
            <label htmlFor="marketingConsent" className="text-xs text-slate-600 leading-snug cursor-pointer select-none">
              (Optional) Send me product updates, retail tips, and offers via WhatsApp or SMS.
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="cta"
            size="xl"
            disabled={loading}
            className="w-full font-bold shadow-md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            {loading ? "Scheduling Demo..." : "Confirm & Book Free Live Demo"}
          </Button>
          <p className="text-[11px] text-center text-slate-500 mt-2 font-mono">
            3-Day Free Trial • Setup Assistance Across India • In-Shop Visits in Nagpur
          </p>
        </div>
      </form>

      {/* WhatsApp Fallback */}
      <div className="pt-4 border-t border-slate-100 text-center space-y-2">
        <span className="text-xs text-slate-500 font-mono">Prefer to chat directly?</span>
        <div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "demo_form_fallback" })}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold hover:bg-emerald-100 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Message Us on WhatsApp (+91 96300 13483)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
