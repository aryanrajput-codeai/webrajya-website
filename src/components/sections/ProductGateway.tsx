"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Utensils,
  FileText,
  Car,
  CheckCircle2,
  Sparkles,
  Layers,
  ShieldCheck,
  Zap,
  Printer,
  Barcode,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DotPattern } from "@/components/ui/dot-pattern";
import { NumberTicker } from "@/components/ui/number-ticker";
import { PRICING_CONFIG } from "@/config/pricing";

export function ProductGateway() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#F8F3EB]">
      {/* Magic UI Subtle Dot Pattern Background */}
      <DotPattern
        width={24}
        height={24}
        cx={1}
        cy={1}
        cr={1}
        className="opacity-35 [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* Parent Brand Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#020C2B]/10 shadow-xs text-xs font-semibold text-[#020C2B]">
            <Sparkles className="w-3.5 h-3.5 text-[#E58145]" />
            <span>Built for Indian Retailers, Wholesalers &amp; Restaurants</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#020C2B] tracking-tight leading-[1.15] sm:leading-[1.1]">
            Connected Software That <br />
            <span className="text-[#E58145] drop-shadow-xs">Runs Your Business.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#525866] max-w-2xl mx-auto leading-relaxed font-normal">
            Fast, offline-resilient point of sale and invoicing. Process customer queues in seconds with WebRajya Invoice (lead platform) and WebRajya POS for dining venues.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button
              href="/demo?product=invoice"
              variant="cta"
              size="lg"
              className="w-full sm:w-auto rounded-2xl bg-[#E58145] hover:bg-[#d47035] text-white font-bold shadow-md shadow-[#E58145]/20 px-7 py-3 text-sm"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Book a Free Demo
            </Button>
            <Button
              href="/pricing"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-2xl border-[#020C2B]/15 bg-white hover:bg-[#020C2B]/5 text-[#020C2B] font-semibold px-6 py-3 text-sm"
            >
              View Transparent Pricing (from ₹599)
            </Button>
          </div>

          {/* Real Metrics Pill Strip with Magic UI Number Ticker */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-[#525866] font-mono">
            <span className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-[#020C2B]/10 shadow-xs">
              <Zap className="w-4 h-4 text-[#E58145]" />
              <strong className="text-[#020C2B] font-bold font-sans">
                &lt; <NumberTicker value={3} /> Sec
              </strong>{" "}
              Cashier Billing
            </span>

            <span className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-[#020C2B]/10 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#E58145]" />
              <strong className="text-[#020C2B] font-bold font-sans">
                <NumberTicker value={100} />%
              </strong>{" "}
              Offline Resilience
            </span>

            <span className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-[#020C2B]/10 shadow-xs">
              <Layers className="w-4 h-4 text-[#020C2B]" />
              <strong className="text-[#020C2B] font-bold font-sans">
                <NumberTicker value={2} /> Core
              </strong>{" "}
              Business Engines
            </span>
          </div>
        </div>

        {/* 2 Focused Product Cards: Invoice (Lead) and POS (Second) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch pt-4">
          
          {/* Card 1: WebRajya Invoice (Lead Product) */}
          <div className="rounded-3xl p-6 sm:p-8 md:p-10 bg-white border-2 border-[#2563EB]/80 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            {/* Lead Flag Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-mono uppercase font-bold tracking-wider bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20">
              Lead Platform
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#2563EB] text-white flex items-center justify-center font-bold shadow-md">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#020C2B] group-hover:text-[#2563EB] transition-colors">
                    WebRajya Invoice
                  </h2>
                  <p className="text-xs font-mono text-[#525866]">
                    Retail Billing, Inventory &amp; Khata Ledger
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#525866] leading-relaxed">
                Smart counter billing engineered for Indian retailers, stationery shops, supermarkets, and distributors. Generates GST-compliant thermal receipts, updates inventory, and tracks customer credit in one screen.
              </p>

              {/* Feature highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#020C2B]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Instant Barcode Scanning</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>GST &amp; Non-GST Tax Invoicing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Customer Khata Ledger</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>58mm &amp; 80mm Thermal Printing</span>
                </div>
              </div>

              {/* Pricing Teaser Pill */}
              <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between text-xs font-mono">
                <span className="text-[#64748B]">Starting from:</span>
                <span className="font-bold text-[#0F172A] text-sm">
                  ₹599/mo <span className="text-[#2563EB] text-xs font-normal">or ₹5,999/yr</span>
                </span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row gap-3">
              <Button
                href="/demo?product=invoice"
                variant="primary"
                size="md"
                className="flex-1 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl font-bold"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Book Invoice Demo
              </Button>
              <Button
                href="/invoice"
                variant="outline"
                size="md"
                className="flex-1 border-[#020C2B]/15 hover:bg-[#020C2B]/5 text-[#020C2B] rounded-xl font-semibold"
              >
                Explore Modules
              </Button>
            </div>
          </div>

          {/* Card 2: WebRajya POS (Second Product) */}
          <div className="rounded-3xl p-6 sm:p-8 md:p-10 bg-white border border-[#020C2B]/10 shadow-sm hover:border-[#E58145]/60 hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#020C2B] text-[#E58145] flex items-center justify-center font-bold shadow-md group-hover:bg-[#E58145] group-hover:text-white transition-colors">
                  <Utensils className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#020C2B] group-hover:text-[#E58145] transition-colors">
                    WebRajya POS
                  </h2>
                  <p className="text-xs font-mono text-[#525866]">
                    Zero-Lag Restaurant, Cafe &amp; KOT Billing
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#525866] leading-relaxed">
                Sub-3 second restaurant cashier control with 100% keyboard hotkeys, thermal kitchen KOT dispatch, visual floor table maps, and food ingredient recipe costing. Runs uninterrupted even during internet outages.
              </p>

              {/* Feature highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#020C2B]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E58145] shrink-0" />
                  <span>Sub-3 Sec Keyboard Hotkeys</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E58145] shrink-0" />
                  <span>Kitchen Order Ticket (KOT)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E58145] shrink-0" />
                  <span>Visual Table &amp; Floor Maps</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E58145] shrink-0" />
                  <span>Offline Local Network Fallback</span>
                </div>
              </div>

              {/* Pricing Teaser Pill */}
              <div className="p-3.5 rounded-2xl bg-[#F8F3EB] border border-[#020C2B]/10 flex items-center justify-between text-xs font-mono">
                <span className="text-[#525866]">Starting from:</span>
                <span className="font-bold text-[#020C2B] text-sm">
                  ₹599/mo <span className="text-[#E58145] text-xs font-normal">or ₹5,999/yr</span>
                </span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#020C2B]/10 flex flex-col sm:flex-row gap-3">
              <Button
                href="/demo?product=pos"
                variant="cta"
                size="md"
                className="flex-1 bg-[#E58145] hover:bg-[#d47035] text-white rounded-xl font-bold"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Book POS Demo
              </Button>
              <Button
                href="/pos"
                variant="outline"
                size="md"
                className="flex-1 border-[#020C2B]/15 hover:bg-[#020C2B]/5 text-[#020C2B] rounded-xl font-semibold"
              >
                Explore Modules
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
