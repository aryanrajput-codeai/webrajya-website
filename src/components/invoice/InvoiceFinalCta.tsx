import React from "react";
import { FileText, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function InvoiceFinalCta() {
  return (
    <section className="py-24 bg-[#020C2B] border-t border-[#020C2B]/10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E58145]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E58145]/10 border border-[#E58145]/30 text-[#E58145] text-xs font-mono font-medium">
          <Sparkles className="w-3.5 h-3.5" /> Simple &amp; Fast Invoicing
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          Spend less time managing invoices. <br />
          <span className="text-[#E58145]">
            Spend more time growing your business.
          </span>
        </h2>

        <p className="text-[#F8F3EB]/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Join growing businesses using WebRajya Invoice to streamline customer billing, track payments, and get paid faster.
        </p>

        {/* Action Button */}
        <div className="pt-4 flex items-center justify-center">
          <Button
            href="/contact?product=invoice"
            variant="cta"
            size="xl"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            Start with WebRajya Invoice
          </Button>
        </div>

        <p className="text-xs text-[#F8F3EB]/60 font-mono pt-4">
          Create your first invoice in under 30 seconds • No credit card required for trial
        </p>

      </div>
    </section>
  );
}
