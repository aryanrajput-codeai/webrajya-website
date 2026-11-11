import React, { Suspense } from "react";
import type { Metadata } from "next";
import { CheckCircle2, ShieldCheck, MapPin, Store, MessageCircle, Phone, Loader2 } from "lucide-react";
import { NagpurRetailDemoForm } from "@/components/demo/NagpurRetailDemoForm";
import { LAUNCH_CONFIG } from "@/config/launch";

export const metadata: Metadata = {
  title: "Book Free In-Shop Demo in Nagpur | WebRajya Invoice",
  description:
    "Schedule a 20-minute live demonstration of WebRajya Invoice for your shop in Nagpur. 3-day free trial after live demo with personal setup assistance.",
  alternates: {
    canonical: "https://webrajya.com/demo",
  },
  keywords: [
    "Billing Software Demo Nagpur",
    "Retail Billing Trial Nagpur",
    "Shop Software Setup Nagpur",
    "WebRajya Free Demo"
  ],
  openGraph: {
    title: "Book Free In-Shop Demo in Nagpur | WebRajya Invoice",
    description: "3-day free trial after live demo. Free personal setup assistance by our Nagpur team.",
    url: "https://webrajya.com/demo",
    siteName: "WebRajya",
    locale: "en_IN",
    type: "website"
  }
};

export default function DemoPage() {
  return (
    <div className="w-full bg-[#F8F3EB] text-[#020C2B] min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#2563EB]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Nagpur Launch Value & Trust */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight leading-tight">
                See WebRajya on Your Counter.
              </h1>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Affordable, easy-to-use, complete billing and inventory software with personal customer support.
              </p>
              <p className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-200 inline-block">
                3-day free trial after live demo. Personal setup help.
              </p>
            </div>

            {/* Target Shop Types */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <span className="text-xs font-mono uppercase text-slate-500 font-bold block">
                Targeted Retail Workflows:
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-800">
                <span className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-50">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" /> Mobile Shops
                </span>
                <span className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-50">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" /> Electronics
                </span>
                <span className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-50">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" /> Clothing / Garments
                </span>
                <span className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-50">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" /> Footwear Stores
                </span>
                <span className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-50">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" /> Stationery &amp; Books
                </span>
                <span className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-50">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" /> Furniture Stores
                </span>
              </div>
            </div>

            {/* Local Trust Badges */}
            <div className="space-y-3 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E58145] shrink-0" />
                <span>Local Nagpur Team: In-shop visits across Dharampeth, Sitabuldi, Sadar &amp; all areas</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E58145] shrink-0" />
                <span>Call our desk directly: {LAUNCH_CONFIG.PHONE_DISPLAY}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>Zero deposit, zero credit card requirement during evaluation</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Converting Demo Form */}
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="p-12 rounded-3xl bg-white border border-slate-200 flex items-center justify-center text-xs font-mono text-slate-500 gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-[#2563EB]" />
                  <span>Loading Nagpur Demo Booking Form...</span>
                </div>
              }
            >
              <NagpurRetailDemoForm />
            </Suspense>
          </div>

        </div>
      </div>
    </div>
  );
}
