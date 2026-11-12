import React from "react";
import type { Metadata } from "next";
import { Sparkles, ShieldCheck, Layers, Cpu, CheckCircle2, ArrowRight, MapPin } from "lucide-react";
import { COMPANY_INFO, WEBRAJYA_PRINCIPLES } from "@/data/company";
import { LAUNCH_CONFIG } from "@/config/launch";
import { Button } from "@/components/ui/button";
import { NagpurLocationMap } from "@/components/ui/NagpurLocationMap";

export const metadata: Metadata = {
  title: "About WebRajya — Affordable, Complete Retail Billing Software",
  description:
    "WebRajya engineers fast, offline-first billing and inventory management software with personal onboarding support for retailers across India.",
  alternates: {
    canonical: "https://webrajya.com/about",
  },
  openGraph: {
    title: "About WebRajya — Retail Technology Platform",
    description: "Built for Indian retail shop owners with hands-on setup support across India and head office in Nagpur.",
    url: "https://webrajya.com/about",
    siteName: "WebRajya",
    locale: "en_IN",
    type: "website"
  }
};

export default function AboutPage() {
  return (
    <div className="w-full bg-[#F8F3EB] text-[#020C2B] min-h-screen pt-32 pb-24 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* HERO Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            Dukaan Ke Asli Kaam Ke Liye Bana Software
          </h1>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
            Aasaan, kifaayati aur complete billing &amp; stock management software — personal customer support ke saath. Poore Bharat ke dukaandaaron, wholesalers aur vyapariyon ke liye.
          </p>
        </div>

        {/* MISSION & VISION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#E58145] border border-orange-100 flex items-center justify-center font-bold">
              <Layers className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-[#020C2B]">WebRajya Ka Vision</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Dukaan ki billing na toh kathin honi chahiye aur na hi kisi mehenge consultant ki zaroorat honi chahiye. Hum aise saral tools banate hain jo counter ki bheed tez karein, stock ki galti rokein aur dukaan ke hisaab-kitaab par aapko poora control dein.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] border border-blue-100 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-[#020C2B]">Personal Setup &amp; Support</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Software tabhi kaam ka hai jab counter par smoothly chale. Poore India mein hamari team video call aur WhatsApp par personal setup aur staff training karwati hai, aur Nagpur mein head office se direct in-shop visit uplabdh hai.
            </p>
          </div>
        </div>

        {/* PRINCIPLES */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono uppercase text-[#2563EB] tracking-wider font-bold">
              Engineering Commitments
            </span>
            <h2 className="text-3xl font-extrabold text-[#020C2B]">Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WEBRAJYA_PRINCIPLES.map((p) => (
              <div key={p.title} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <h3 className="font-bold text-[#020C2B] text-base">{p.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* NAGPUR ONBOARDING HUB LOCATION MAP */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono uppercase text-[#E58145] tracking-wider font-bold">
              Local Presence
            </span>
            <h2 className="text-3xl font-extrabold text-[#020C2B]">Nagpur Launch &amp; Onboarding Hub</h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              {LAUNCH_CONFIG.NAGPUR_ADDRESS}
            </p>
          </div>
          <NagpurLocationMap />
        </div>

        {/* BOTTOM CTA */}
        <div className="p-10 rounded-3xl bg-[#020C2B] text-white text-center space-y-6 shadow-xl">
          <h2 className="text-3xl font-extrabold text-white">WebRajya Invoice Chala Kar Dekhein</h2>
          <p className="text-slate-300 text-sm max-w-lg mx-auto">
            20-minute ka live online demo dekhein ya apne counter par 3 din free trial chala kar dekhein.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/demo" variant="cta" size="md">
              Free Demo Book Karein
            </Button>
            <Button
              href="/pricing"
              variant="outline"
              size="md"
              className="text-white border-white/20 hover:bg-white/10"
            >
              Plans &amp; Pricing Dekhein
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
