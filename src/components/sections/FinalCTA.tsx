import React from "react";
import { ArrowRight, Utensils, FileText, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/data/company";

export function FinalCTA() {
  return (
    <section className="py-24 bg-[#F8F3EB] text-[#020C2B] border-t border-[#020C2B]/10 relative overflow-hidden font-sans">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[#E58145]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#020C2B]/5 border border-[#020C2B]/15 text-[#020C2B] text-xs font-mono font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#E58145]" /> Choose Your Business Platform
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight leading-tight">
          {COMPANY_INFO.finalCtaTitle}
        </h2>

        <p className="text-[#525866] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {COMPANY_INFO.finalCtaSubtext}
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="/pos"
            variant="cta"
            size="lg"
            icon={<Utensils className="w-4 h-4" />}
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            Explore WebRajya POS
          </Button>

          <Button
            href="/invoice"
            variant="secondary"
            size="lg"
            icon={<FileText className="w-4 h-4" />}
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            Explore WebRajya Invoice
          </Button>
        </div>

        <p className="text-xs text-[#525866] font-mono pt-4">
          No credit card required for initial walkthrough • Instant Setup
        </p>

      </div>
    </section>
  );
}
