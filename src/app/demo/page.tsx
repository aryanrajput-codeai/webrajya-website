import React, { Suspense } from "react";
import type { Metadata } from "next";
import { CheckCircle2, ShieldCheck, MapPin, Store, MessageCircle, Phone, Loader2, Video } from "lucide-react";
import { NagpurRetailDemoForm } from "@/components/demo/NagpurRetailDemoForm";
import { COMPANY_CONFIG } from "@/config/company";

export const metadata: Metadata = {
  title: "Book Free Demo | WebRajya Billing & Inventory Software",
  description:
    "Schedule a 20-minute live demonstration of WebRajya Invoice for your retail store. Free 3-day counter trial with personal setup assistance via video call, WhatsApp, or in-shop (Nagpur).",
  alternates: {
    canonical: "https://webrajya.com/demo",
  },
  keywords: [
    "Billing Software Demo",
    "Retail Billing Trial",
    "Shop Software Setup",
    "WebRajya Free Demo",
    "Billing Software India"
  ],
  openGraph: {
    title: "Book Free Demo | WebRajya Billing & Inventory Software",
    description: "3-day free counter trial after live demo. Free personal setup assistance via video call or in-shop in Nagpur.",
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
          
          {/* Left Column: Nationwide Value & Trust */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight leading-tight">
                See WebRajya on Your Counter.
              </h1>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Affordable, easy-to-use, complete billing and inventory software with personal customer onboarding across India.
              </p>
              <p className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-200 inline-block">
                3-day free trial after live demo • Personal setup help
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

            {/* Local & All-India Support Badges */}
            <div className="space-y-3 text-xs text-slate-600 font-medium">
              <div className="flex items-start gap-2">
                <Video className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span>All India: 1-on-1 screen share demo and WhatsApp video setup</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E58145] shrink-0 mt-0.5" />
                <span>Nagpur (Head Office): In-person shop visits across Sitabuldi, Dharampeth, Itwari &amp; all areas</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E58145] shrink-0" />
                <span>Call our desk directly: {COMPANY_CONFIG.phone}</span>
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
                  <span>Loading Demo Booking Form...</span>
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
