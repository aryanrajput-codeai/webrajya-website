import React from "react";
import { Utensils, ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PosDemoCta() {
  return (
    <section id="book-demo" className="py-24 bg-[#020C2B] border-t border-[#020C2B]/10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E58145]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          Restaurant Har Din Non-Stop Chalta Hai. <br />
          <span className="text-[#E58145]">
            Software Bhi Utna Hi Tez Hona Chahiye.
          </span>
        </h2>

        <p className="text-[#F8F3EB]/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          WebRajya POS ke saath counter aur kitchen dono tez karein. 3 second se kam mein billing, direct KOT routing aur recipe-level stock hisaab.
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
            Free Trial Shuru Karein
          </Button>

          <Button
            href="/contact?product=pos&demo=true"
            variant="outline"
            size="xl"
            icon={<Play className="w-4 h-4 fill-[#E58145] text-[#E58145]" />}
            iconPosition="left"
            className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10"
          >
            Free Demo Book Karein
          </Button>
        </div>

        <p className="text-xs text-[#F8F3EB]/60 font-mono pt-4">
          15 minute mein menu aur thermal printer setup • Koi lock-in contract nahi
        </p>

      </div>
    </section>
  );
}
