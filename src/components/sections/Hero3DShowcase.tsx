"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Utensils,
  FileText,
  Car,
  ArrowRight,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Printer,
  Sparkles,
  Layers,
  Share2
} from "lucide-react";
import { Tilt3DCard, FloatZ, Motion3DStage } from "@/components/ui/motion3d";

export function Hero3DShowcase() {
  const [activeHoverCard, setActiveHoverCard] = useState<string | null>("invoice");

  return (
    <div className="w-full py-6 md:py-10">
      <Motion3DStage perspective={1400} className="max-w-6xl mx-auto px-4">
        
        {/* Floating Indicator */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#020C2B]/5 border border-[#020C2B]/10 text-[11px] font-mono text-[#525866] font-semibold uppercase tracking-wider backdrop-blur-sm">
            <Sparkles className="w-3 h-3 text-[#E58145]" />
            Interactive 3D Spatial Triad · Hover to Explore Depth
          </span>
        </div>

        {/* 3D Product Triad Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* ============================================================ */}
          {/* CARD 1: WEBRAJYA POS (ORANGE ACCENT / TILT LEFT) */}
          {/* ============================================================ */}
          <Tilt3DCard
            maxTilt={12}
            scale={1.03}
            onMouseEnter={() => setActiveHoverCard("pos")}
            onMouseLeave={() => setActiveHoverCard(null)}
            className="rounded-3xl cursor-pointer"
          >
            <div className="h-full rounded-3xl bg-white/95 backdrop-blur-md border border-[#020C2B]/10 hover:border-[#E58145] p-6 sm:p-7 shadow-3d-floating transition-colors duration-300 flex flex-col justify-between relative overflow-hidden group">
              
              {/* Dynamic Top Ambient Glow Accent */}
              <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#E58145]/15 rounded-full blur-2xl pointer-events-none transition-opacity group-hover:opacity-100" />
              
              <div className="space-y-4">
                {/* Header Badge & Icon */}
                <div className="flex items-center justify-between">
                  <FloatZ z={35}>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E58145]/10 border border-[#E58145]/30 text-xs font-mono font-bold text-[#E58145]">
                      <Utensils className="w-3.5 h-3.5" />
                      WEBRAJYA POS
                    </span>
                  </FloatZ>
                  
                  <FloatZ z={45}>
                    <div className="w-10 h-10 rounded-2xl bg-[#020C2B] text-[#E58145] flex items-center justify-center font-bold shadow-md transition-transform group-hover:scale-110">
                      <Utensils className="w-5 h-5" />
                    </div>
                  </FloatZ>
                </div>

                {/* Title & Micro-Copy */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#020C2B] tracking-tight group-hover:text-[#E58145] transition-colors">
                    Zero-Lag Dining &amp; KOT
                  </h3>
                  <p className="text-xs text-[#525866] mt-1.5 leading-relaxed">
                    Sub-second thermal receipt dispatch and keyboard-driven billing for fast-paced kitchens.
                  </p>
                </div>

                {/* 3D FLOATING TACTILE TICKET (REAL TRANSLATE-Z POP-OUT) */}
                <FloatZ z={55} hoverZDelta={18} className="my-3">
                  <div className="p-3.5 rounded-2xl bg-[#020C2B] text-white shadow-xl border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono border-b border-white/10 pb-1.5">
                      <span className="flex items-center gap-1 text-[#E58145] font-bold">
                        <Printer className="w-3.5 h-3.5" /> Table T-04 · KOT #108
                      </span>
                      <span className="text-emerald-400 font-bold bg-emerald-500/15 px-2 py-0.5 rounded">0.4s Printed</span>
                    </div>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between text-white/90 font-medium">
                        <span>Butter Chicken Combo</span>
                        <span className="font-mono text-[#E58145]">₹340</span>
                      </div>
                      <div className="flex justify-between text-white/70 text-[11px]">
                        <span>Crispy Garlic Naan × 2</span>
                        <span className="font-mono">₹150</span>
                      </div>
                    </div>
                  </div>
                </FloatZ>

                {/* Feature Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["100% Offline Ready", "Multi-KOT Dispatch", "Thermal USB/LAN"].map((cap) => (
                    <span
                      key={cap}
                      className="inline-flex items-center gap-1 text-[10px] font-mono text-[#020C2B] bg-[#F8F3EB] px-2.5 py-1 rounded-lg border border-[#020C2B]/10 font-medium"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#E58145]" />
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action CTA with 3D Pop */}
              <div className="pt-6 border-t border-[#020C2B]/10 mt-4 flex items-center justify-between">
                <FloatZ z={40}>
                  <span className="text-xs font-mono text-[#525866]">For Cafes &amp; QSRs</span>
                </FloatZ>
                <FloatZ z={60}>
                  <Link
                    href="/pos"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#E58145] text-white text-xs font-bold hover:bg-[#d67032] transition-colors shadow-md hover:shadow-lg"
                  >
                    <span>Launch POS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </FloatZ>
              </div>

            </div>
          </Tilt3DCard>

          {/* ============================================================ */}
          {/* CARD 2: WEBRAJYA INVOICE (NAVY ACCENT / CENTER ELEVATED) */}
          {/* ============================================================ */}
          <Tilt3DCard
            maxTilt={12}
            scale={1.05}
            onMouseEnter={() => setActiveHoverCard("invoice")}
            onMouseLeave={() => setActiveHoverCard(null)}
            className="rounded-3xl cursor-pointer md:-translate-y-2"
          >
            <div className="h-full rounded-3xl bg-[#020C2B] text-white border-2 border-[#E58145]/40 hover:border-[#E58145] p-6 sm:p-7 shadow-3d-invoice transition-colors duration-300 flex flex-col justify-between relative overflow-hidden group">
              
              {/* Dynamic Top Ambient Glow Accent */}
              <div className="absolute -top-16 -right-16 w-44 h-44 bg-[#E58145]/20 rounded-full blur-3xl pointer-events-none transition-opacity group-hover:opacity-100" />
              
              <div className="space-y-4">
                {/* Header Badge & Icon */}
                <div className="flex items-center justify-between">
                  <FloatZ z={40}>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold text-[#E58145]">
                      <FileText className="w-3.5 h-3.5" />
                      WEBRAJYA INVOICE
                    </span>
                  </FloatZ>
                  
                  <FloatZ z={50}>
                    <div className="w-10 h-10 rounded-2xl bg-white text-[#020C2B] flex items-center justify-center font-bold shadow-md transition-transform group-hover:scale-110">
                      <FileText className="w-5 h-5 text-[#E58145]" />
                    </div>
                  </FloatZ>
                </div>

                {/* Title & Micro-Copy */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-[#E58145] transition-colors">
                    GST Billing &amp; PDF Share
                  </h3>
                  <p className="text-xs text-white/70 mt-1.5 leading-relaxed">
                    Automated tax calculation, payment ledgers, and 1-click WhatsApp PDF sharing for distributors and shops.
                  </p>
                </div>

                {/* 3D FLOATING INVOICE SLAB (REAL TRANSLATE-Z POP-OUT) */}
                <FloatZ z={65} hoverZDelta={22} className="my-3">
                  <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md text-white shadow-2xl border border-white/20 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono border-b border-white/10 pb-1.5">
                      <span className="flex items-center gap-1 text-white font-bold">
                        <Share2 className="w-3.5 h-3.5 text-[#E58145]" /> INV #WR-2026-894
                      </span>
                      <span className="text-[#E58145] font-bold bg-[#E58145]/20 px-2 py-0.5 rounded border border-[#E58145]/30">Auto GST 18%</span>
                    </div>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between text-white font-semibold">
                        <span>Total Due</span>
                        <span className="font-mono text-emerald-400">₹70,800</span>
                      </div>
                      <div className="flex justify-between text-white/70 text-[11px]">
                        <span>Client: Acme Enterprise</span>
                        <span className="text-[#E58145] font-mono">WhatsApp Sent ✓</span>
                      </div>
                    </div>
                  </div>
                </FloatZ>

                {/* Feature Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Auto Tax Breakdown", "Aging Receivables", "WhatsApp PDF Link"].map((cap) => (
                    <span
                      key={cap}
                      className="inline-flex items-center gap-1 text-[10px] font-mono text-white/90 bg-white/10 px-2.5 py-1 rounded-lg border border-white/10 font-medium"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#E58145]" />
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action CTA with 3D Pop */}
              <div className="pt-6 border-t border-white/10 mt-4 flex items-center justify-between">
                <FloatZ z={40}>
                  <span className="text-xs font-mono text-white/70">For Retail &amp; Agencies</span>
                </FloatZ>
                <FloatZ z={70}>
                  <Link
                    href="/invoice"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#020C2B] text-xs font-bold hover:bg-[#E58145] hover:text-white transition-colors shadow-lg hover:shadow-xl"
                  >
                    <span>Launch Invoice</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </FloatZ>
              </div>

            </div>
          </Tilt3DCard>

          {/* ============================================================ */}
          {/* CARD 3: MYGARAGE SAAS (SKY BLUE ACCENT / TILT RIGHT) */}
          {/* ============================================================ */}
          <Tilt3DCard
            maxTilt={12}
            scale={1.03}
            onMouseEnter={() => setActiveHoverCard("mygarage")}
            onMouseLeave={() => setActiveHoverCard(null)}
            className="rounded-3xl cursor-pointer"
          >
            <div className="h-full rounded-3xl bg-white/95 backdrop-blur-md border border-[#020C2B]/10 hover:border-[#0EA5E9] p-6 sm:p-7 shadow-3d-floating transition-colors duration-300 flex flex-col justify-between relative overflow-hidden group">
              
              {/* Dynamic Top Ambient Glow Accent */}
              <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#0EA5E9]/15 rounded-full blur-2xl pointer-events-none transition-opacity group-hover:opacity-100" />
              
              <div className="space-y-4">
                {/* Header Badge & Icon */}
                <div className="flex items-center justify-between">
                  <FloatZ z={35}>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 text-xs font-mono font-bold text-[#0EA5E9]">
                      <Car className="w-3.5 h-3.5" />
                      MYGARAGE SAAS
                    </span>
                  </FloatZ>
                  
                  <FloatZ z={45}>
                    <div className="w-10 h-10 rounded-2xl bg-[#020C2B] text-[#0EA5E9] flex items-center justify-center font-bold shadow-md transition-transform group-hover:scale-110">
                      <Car className="w-5 h-5 text-[#0EA5E9]" />
                    </div>
                  </FloatZ>
                </div>

                {/* Title & Micro-Copy */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#020C2B] tracking-tight group-hover:text-[#0EA5E9] transition-colors">
                    Vehicle Locker &amp; Expiry
                  </h3>
                  <p className="text-xs text-[#525866] mt-1.5 leading-relaxed">
                    Digital RC, Insurance &amp; PUC countdown ledgers with emergency QR access for owners &amp; fleets.
                  </p>
                </div>

                {/* 3D FLOATING VEHICLE EXPIRY SLAB (REAL TRANSLATE-Z POP-OUT) */}
                <FloatZ z={55} hoverZDelta={18} className="my-3">
                  <div className="p-3.5 rounded-2xl bg-[#020C2B] text-white shadow-xl border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono border-b border-white/10 pb-1.5">
                      <span className="flex items-center gap-1 text-[#0EA5E9] font-bold">
                        <ShieldCheck className="w-3.5 h-3.5" /> MH 12 AB 4920
                      </span>
                      <span className="text-amber-400 font-bold bg-amber-500/15 px-2 py-0.5 rounded">14 Days PUC</span>
                    </div>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between text-white/90 font-medium">
                        <span>BMW 330i M-Sport</span>
                        <span className="font-mono text-emerald-400">Insurance Valid</span>
                      </div>
                      <div className="flex justify-between text-white/70 text-[11px]">
                        <span>Emergency QR Status</span>
                        <span className="text-[#0EA5E9] font-mono">Active (1-Scan)</span>
                      </div>
                    </div>
                  </div>
                </FloatZ>

                {/* Feature Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Smart Expiry Alarms", "Maintenance Log", "Digital QR Card"].map((cap) => (
                    <span
                      key={cap}
                      className="inline-flex items-center gap-1 text-[10px] font-mono text-[#020C2B] bg-[#F8F3EB] px-2.5 py-1 rounded-lg border border-[#020C2B]/10 font-medium"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#0EA5E9]" />
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action CTA with 3D Pop */}
              <div className="pt-6 border-t border-[#020C2B]/10 mt-4 flex items-center justify-between">
                <FloatZ z={40}>
                  <span className="text-xs font-mono text-[#525866]">For Car/Bike &amp; Fleets</span>
                </FloatZ>
                <FloatZ z={60}>
                  <Link
                    href="/mygarage"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#020C2B] text-white text-xs font-bold hover:bg-[#0EA5E9] transition-colors shadow-md hover:shadow-lg"
                  >
                    <span>Launch Garage</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </FloatZ>
              </div>

            </div>
          </Tilt3DCard>

        </div>

      </Motion3DStage>
    </div>
  );
}
