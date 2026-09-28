"use client";

import React from "react";
import { Utensils, ArrowRight, ShieldCheck, Zap, Wifi, CheckCircle2, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { PosDashboardMockup } from "@/components/mockups/PosDashboardMockup";

interface PosHeroProps {
  onBookDemoClick?: () => void;
}

export function PosHero({ onBookDemoClick }: PosHeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F8F3EB]">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <Badge variant="pos" icon={<Zap className="w-3.5 h-3.5 text-[#E58145]" />}>
            WEBRAJYA POS • SUB-3 SECOND RESTAURANT OPERATING SYSTEM
          </Badge>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#020C2B] tracking-tight leading-[1.08]">
            The Lightning-Fast Restaurant POS <br />
            <span className="text-[#E58145]">
              Built for Zero-Lag Cashier Speed.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#525866] max-w-3xl mx-auto leading-relaxed font-normal">
            Process orders, dispatch KOTs, and settle bills in under 3 seconds. Complete 100% keyboard control engineered natively for Mac and Windows.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button href="/demo" variant="cta" size="xl" icon={<ArrowRight className="w-5 h-5" />}>
              Start Free Trial — No Credit Card
            </Button>
            
            <Button
              href="#pos-hotkeys"
              variant="outline"
              size="xl"
              icon={<Play className="w-4 h-4 text-[#020C2B]" />}
              iconPosition="left"
            >
              Try Hotkey Simulator
            </Button>
          </div>

          {/* Trust badges */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#525866] font-mono">
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#E58145]" /> Sub-3s Cashier Billing
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#E58145]" /> Mac (⌘) & Win (Alt) Native Hotkeys
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#020C2B]" /> 100% Local Timezone Revenue Accuracy
            </span>
          </div>
        </div>

        {/* Realistic POS UI Dashboard Component */}
        <div className="pt-6 max-w-6xl mx-auto">
          <div className="text-center space-y-2 mb-4">
            <span className="text-[11px] font-mono text-[#020C2B] uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-[#020C2B]/10 font-semibold shadow-sm">
              Live Terminal Interface Preview
            </span>
          </div>
          <PosDashboardMockup />
        </div>

      </div>
    </section>
  );
}
