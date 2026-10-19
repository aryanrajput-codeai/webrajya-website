"use client";

import React from "react";
import { ArrowRight, Keyboard, Boxes, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { InvoiceCounterMockup } from "@/components/invoice/InvoiceCounterMockup";
import { INVOICE_PRICING } from "@/config/pricing";

export function InvoiceHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F8FAFC]">
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#2563EB]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/25 text-[#2563EB] text-xs font-mono font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            WEBRAJYA INVOICE · SMART BILLING SOFTWARE
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#0F172A] tracking-tight leading-[1.08]">
            Billing That Keeps Your <br />
            <span className="text-[#2563EB]">
              Business Moving.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed font-normal">
            Create bills faster, manage your inventory, track customer payments and stay in control of your business—all from one simple platform.
          </p>

          <p className="text-xs sm:text-sm font-semibold text-[#0F172A] bg-white inline-block px-4 py-2 rounded-2xl border border-[#E2E8F0] shadow-xs">
            Designed for Indian retailers, stationery shops, wholesalers and growing businesses.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              href={INVOICE_PRICING.ctaPrimary.href}
              variant="primary"
              size="xl"
              className="bg-[#2563EB] hover:bg-[#1D4ED8] border-[#2563EB] text-white shadow-lg shadow-[#2563EB]/20"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started
            </Button>
            
            <Button
              href={INVOICE_PRICING.ctaSecondary.href}
              variant="outline"
              size="xl"
              className="border-[#0F172A]/20 hover:bg-[#0F172A]/5 text-[#0F172A]"
            >
              Book a Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-[#0F172A]/80 font-mono">
            <span className="flex items-center gap-2">
              <Keyboard className="w-4 h-4 text-[#2563EB]" /> Fast, keyboard-friendly billing
            </span>
            <span className="flex items-center gap-2">
              <Boxes className="w-4 h-4 text-[#2563EB]" /> Integrated inventory management
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A]" /> GST &amp; non-GST billing options
            </span>
          </div>
        </div>

        {/* Hero Visual: Realistic Counter Mockup */}
        <div className="pt-4 max-w-6xl mx-auto">
          <div className="text-center mb-3">
            <span className="text-[11px] font-mono text-[#2563EB] uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-[#E2E8F0] font-bold shadow-xs">
              Live Retail Billing Counter Interface
            </span>
          </div>
          <InvoiceCounterMockup />
        </div>

      </div>
    </section>
  );
}
