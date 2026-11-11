"use client";

import React, { useState, useEffect } from "react";
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
  AlertCircle
} from "lucide-react";
import { LAUNCH_CONFIG } from "@/config/launch";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { trackEvent, getUtmParams } from "@/lib/analytics";

const SHOP_TYPES = [
  "Mobile & Accessories",
  "Consumer Electronics",
  "Clothing & Garments",
  "Footwear & Shoes",
  "Stationery & Books",
  "Furniture & Showroom",
  "Supermarket / Grocery",
  "Hardware & Sanitary",
  "General Retail Shop"
];

const NAGPUR_AREAS = [
  "Sitabuldi",
  "Dharampeth",
  "Sadar",
  "Itwari / Gandhibagh",
  "Wardhaman Nagar",
  "Mahal",
  "Pratap Nagar",
  "Manish Nagar",
  "Ramdaspeth",
  "MIDC Hingna / Wadi",
  "Nandanvan",
  "Other Area in Nagpur"
];

export function NagpurRetailDemoForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const urlShopType = searchParams.get("shopType") || "";
  const initialShopType = SHOP_TYPES.find((s) =>
    s.toLowerCase().includes(urlShopType.toLowerCase())
  ) || "Mobile & Accessories";

  const [formData, setFormData] = useState({
    fullName: "",
    shopName: "",
    shopType: initialShopType,
    phone: "",
    areaInNagpur: "Sitabuldi",
    preferredTime: "Evening (5:00 PM – 8:00 PM)",
    demoType: "In-Shop Visit (Nagpur)",
    languagePreference: "Hindi",
    website_url: "" // Honeypot spam trap
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    trackEvent("demo_page_view", {
      shopType: formData.shopType,
      src: searchParams.get("src") || "direct"
    });
  }, [searchParams, formData.shopType]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setError("Please enter a valid 10-digit Indian mobile number (e.g. 9823012345).");
      return;
    }

    if (formData.fullName.trim().length < 2) {
      setError("Please enter your name.");
      return;
    }

    setLoading(true);
    const utm = getUtmParams();

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          phone: cleanPhone,
          utmSource: utm.utm_source,
          utmCampaign: utm.utm_campaign,
          source: utm.src || searchParams.get("src") || "demo_page"
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit request.");
      }

      trackEvent("demo_form_submit", {
        shopType: formData.shopType,
        area: formData.areaInNagpur,
        demoType: formData.demoType
      });

      router.push("/thank-you");
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : "Submission failed. Please try again or reach us on WhatsApp.";
      setError(errMsg);
      setLoading(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hi, I want a demo of WebRajya Invoice for my ${formData.shopType} shop in Nagpur.`
  );
  const whatsappUrl = `https://wa.me/${LAUNCH_CONFIG.WHATSAPP}?text=${whatsappMessage}`;

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-10 space-y-8">
      {/* Form Header */}
      <div className="space-y-2 border-b border-slate-100 pb-5">
        <div className="flex items-center justify-between">
          <Badge variant="invoice">Free In-Shop Demo</Badge>
          <span className="text-xs font-mono text-emerald-700 font-bold flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600" /> 3-Day Free Trial
          </span>
        </div>
        <h2 className="text-2xl font-black text-[#020C2B]">Book Your Nagpur Demonstration</h2>
        <p className="text-xs sm:text-sm text-slate-600">
          We will visit your shop in Nagpur or connect over video call to show live billing on your own counter.
        </p>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Honeypot field (hidden from genuine users) */}
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="website_url"
            value={formData.website_url}
            onChange={(e) => setFormData({ ...formData, website_url: e.target.value })}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* 1. Full Name & Shop Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="fullName" className="text-xs font-bold text-slate-800">
              Your Name *
            </Label>
            <Input
              id="fullName"
              type="text"
              required
              placeholder="e.g. Rajesh Sharma"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="shopName" className="text-xs font-bold text-slate-800">
              Shop / Business Name
            </Label>
            <Input
              id="shopName"
              type="text"
              placeholder="e.g. Sharma Mobile &amp; Electronics"
              value={formData.shopName}
              onChange={(e) => setFormData({ ...formData, shopName: e.target.value })}
            />
          </div>
        </div>

        {/* 2. Shop Type & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="shopType" className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Store className="w-3.5 h-3.5 text-[#2563EB]" /> Shop Type *
            </Label>
            <select
              id="shopType"
              value={formData.shopType}
              onChange={(e) => setFormData({ ...formData, shopType: e.target.value })}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
            >
              {SHOP_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="phone" className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#2563EB]" /> WhatsApp / Mobile Number *
            </Label>
            <div className="flex rounded-xl border border-slate-300 overflow-hidden focus-within:ring-2 focus-within:ring-[#2563EB]">
              <span className="bg-slate-100 px-3 py-2 text-xs font-mono font-bold text-slate-600 flex items-center border-r border-slate-200">
                +91
              </span>
              <input
                id="phone"
                type="tel"
                required
                maxLength={10}
                placeholder="10-digit number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })}
                className="w-full px-3 py-2 text-sm font-mono focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* 3. Area in Nagpur & Preferred Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="areaInNagpur" className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#2563EB]" /> Locality / Area in Nagpur *
            </Label>
            <select
              id="areaInNagpur"
              value={formData.areaInNagpur}
              onChange={(e) => setFormData({ ...formData, areaInNagpur: e.target.value })}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
            >
              {NAGPUR_AREAS.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="preferredTime" className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#2563EB]" /> Preferred Demo Time
            </Label>
            <select
              id="preferredTime"
              value={formData.preferredTime}
              onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
            >
              <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
              <option value="Afternoon (1:00 PM – 5:00 PM)">Afternoon (1:00 PM – 5:00 PM)</option>
              <option value="Evening (5:00 PM – 8:00 PM)">Evening (5:00 PM – 8:00 PM)</option>
            </select>
          </div>
        </div>

        {/* 4. Demo Type & Language */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="demoType" className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Video className="w-3.5 h-3.5 text-[#2563EB]" /> How Would You Like the Demo?
            </Label>
            <select
              id="demoType"
              value={formData.demoType}
              onChange={(e) => setFormData({ ...formData, demoType: e.target.value })}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
            >
              <option value="In-Shop Visit (Nagpur)">In-Shop Visit by Nagpur Team</option>
              <option value="WhatsApp Video Call">WhatsApp Video Walkthrough</option>
              <option value="Google Meet Screen Share">Google Meet Screen Share</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="languagePreference" className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Languages className="w-3.5 h-3.5 text-[#2563EB]" /> Preferred Language
            </Label>
            <select
              id="languagePreference"
              value={formData.languagePreference}
              onChange={(e) => setFormData({ ...formData, languagePreference: e.target.value })}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
            >
              <option value="Hindi">Hindi (हिंदी)</option>
              <option value="English">English</option>
              <option value="Marathi">Marathi (मराठी)</option>
            </select>
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
            {loading ? "Scheduling Demo..." : "Confirm & Book Free In-Shop Demo"}
          </Button>
          <p className="text-[11px] text-center text-slate-500 mt-2 font-mono">
            3-Day Free Trial • Free Personal Setup Help in Nagpur • Zero Commitment
          </p>
        </div>
      </form>

      {/* WhatsApp Click-to-Chat Fallback */}
      <div className="pt-4 border-t border-slate-100 text-center space-y-3">
        <span className="text-xs text-slate-500 font-mono">Prefer instant chat?</span>
        <div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "demo_form_fallback" })}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold hover:bg-emerald-100 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Chat Directly on WhatsApp: &ldquo;Hi, I want a demo...&rdquo;</span>
          </a>
        </div>
      </div>
    </div>
  );
}

