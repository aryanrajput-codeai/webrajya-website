import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { INVOICE_PRICING } from "@/config/pricing";

export function InvoiceFinalCta() {
  return (
    <section className="py-24 bg-[#0F172A] border-t border-white/10 relative overflow-hidden text-white">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#2563EB]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2563EB]/20 border border-[#2563EB]/40 text-[#60A5FA] text-xs font-mono font-bold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          Smart Billing Software
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          Ready to Make <br className="hidden sm:inline" />
          <span className="text-[#60A5FA]">
            Billing Simpler?
          </span>
        </h2>

        <p className="text-[#CBD5E1] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Spend less time navigating complicated software and more time running your business. Bring your billing, inventory and customer records into one organized workflow with WebRajya Invoice.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Button
            href={INVOICE_PRICING.ctaPrimary.href}
            variant="primary"
            size="xl"
            className="bg-[#2563EB] hover:bg-[#1D4ED8] border-[#2563EB] text-white shadow-xl shadow-[#2563EB]/30"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            Get Started
          </Button>

          <Button
            href={INVOICE_PRICING.ctaSecondary.href}
            variant="outline"
            size="xl"
            className="text-white border-white/30 hover:bg-white/10"
          >
            Book a Demo
          </Button>
        </div>

        <div className="pt-6 border-t border-white/10">
          <p className="font-mono text-xs text-[#94A3B8] tracking-widest uppercase">
            <span className="font-bold text-white">WEBRAJYA</span> · Technology that runs your business.
          </p>
        </div>

      </div>
    </section>
  );
}
