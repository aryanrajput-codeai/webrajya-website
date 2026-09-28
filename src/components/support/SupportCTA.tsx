import React from "react";
import Link from "next/link";
import { MessageSquare, ArrowRight, Play, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function SupportCTA() {
  return (
    <div className="p-8 sm:p-10 rounded-3xl bg-[#020C2B] text-white border border-[#E58145]/30 space-y-6 shadow-xl text-center max-w-4xl mx-auto relative overflow-hidden font-sans">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#E58145]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="space-y-3 relative z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#F8F3EB] text-xs font-mono font-semibold">
          <MessageSquare className="w-3.5 h-3.5 text-[#E58145]" /> Direct Team Support
        </span>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Need more help?
        </h2>

        <p className="text-sm sm:text-base text-[#F8F3EB]/80 max-w-xl mx-auto leading-relaxed">
          Can&apos;t find what you&apos;re looking for? Our team can help you get unstuck.
        </p>
      </div>

      <div className="pt-2 flex flex-wrap justify-center gap-4 relative z-10">
        <Button href="/contact" variant="cta" size="md" icon={<ArrowRight className="w-4 h-4" />}>
          Contact Support
        </Button>

        <Button
          href="/demo"
          variant="outline"
          size="md"
          className="text-white border-white/20 hover:bg-white/10"
          icon={<Play className="w-3.5 h-3.5 text-white" />}
          iconPosition="left"
        >
          Book a Demo
        </Button>
      </div>

      <p className="text-xs text-[#F8F3EB]/60 font-mono relative z-10">
        Connect with our sales &amp; product specialists directly via WebRajya support channels.
      </p>
    </div>
  );
}
