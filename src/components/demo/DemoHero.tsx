import React from "react";
import { Sparkles, Utensils, FileText, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export function DemoHero() {
  return (
    <div className="space-y-6 font-sans">
      <div className="space-y-4">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E58145]/10 border border-[#E58145]/20 text-[#E58145] text-xs font-mono font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#E58145]" />
          BOOK A DEMO
        </span>

        <h1 className="text-4xl sm:text-5xl font-black text-[#020C2B] tracking-tight leading-tight">
          See WebRajya in action.
        </h1>

        <p className="text-base sm:text-lg text-[#525866] leading-relaxed">
          Tell us a little about your business and we&apos;ll help you explore the WebRajya product that fits your workflow.
        </p>
      </div>

      {/* Product Highlights */}
      <div className="space-y-4 pt-4 border-t border-[#020C2B]/10">
        <div className="p-4 rounded-2xl bg-white border border-[#020C2B]/10 shadow-sm space-y-2">
          <div className="flex items-center gap-2 text-[#020C2B] font-bold text-sm">
            <Utensils className="w-4 h-4 text-[#E58145]" />
            <span>WebRajya POS</span>
          </div>
          <p className="text-xs text-[#525866] leading-relaxed">
            Billing, orders, kitchen KDS, payments and restaurant inventory management.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-[#020C2B]/10 shadow-sm space-y-2">
          <div className="flex items-center gap-2 text-[#020C2B] font-bold text-sm">
            <FileText className="w-4 h-4 text-[#E58145]" />
            <span>WebRajya Invoice</span>
          </div>
          <p className="text-xs text-[#525866] leading-relaxed">
            Professional invoicing, customer directory, payment tracking and receivables.
          </p>
        </div>
      </div>

      {/* Trust Callouts */}
      <div className="pt-2 space-y-2 font-mono text-xs text-[#525866]">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#E58145] shrink-0" />
          <span>Tailored 1-on-1 walkthrough with software specialists</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#020C2B] shrink-0" />
          <span>No credit card required • Dedicated setup guidance</span>
        </div>
      </div>
    </div>
  );
}
