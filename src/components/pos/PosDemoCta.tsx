import React from "react";
import { Utensils, ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function PosDemoCta() {
  return (
    <section id="book-demo" className="py-24 bg-[#020C2B] border-t border-[#020C2B]/10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E58145]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E58145]/10 border border-[#E58145]/30 text-[#E58145] text-xs font-mono font-medium">
          <Sparkles className="w-3.5 h-3.5" /> High-Performance Restaurant POS
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          Your restaurant runs every day. <br />
          <span className="text-[#E58145]">
            Your software should keep up.
          </span>
        </h2>

        <p className="text-[#F8F3EB]/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Upgrade your venue operations with WebRajya POS today. Sub-3 second billing, real-time KOT routing, and complete inventory control.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="/contact?product=pos"
            variant="cta"
            size="xl"
            icon={<ArrowRight className="w-5 h-5" />}
            className="w-full sm:w-auto"
          >
            Get Started
          </Button>

          <Button
            href="/contact?product=pos&demo=true"
            variant="outline"
            size="xl"
            icon={<Play className="w-4 h-4 fill-[#E58145] text-[#E58145]" />}
            iconPosition="left"
            className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10"
          >
            Book a Demo
          </Button>
        </div>

        <p className="text-xs text-[#F8F3EB]/60 font-mono pt-4">
          Setup menus &amp; thermal printers in under 15 minutes • No mandatory lock-in contract
        </p>

      </div>
    </section>
  );
}
