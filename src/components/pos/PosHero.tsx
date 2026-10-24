"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Zap, CheckCircle2, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { PosDashboardMockup } from "@/components/mockups/PosDashboardMockup";
import { Isometric3DStage } from "@/components/ui/Isometric3DStage";
import { Canvas3DScene } from "@/components/ui/Canvas3DScene";

interface PosHeroProps {
  onBookDemoClick?: () => void;
}

export function PosHero({ onBookDemoClick }: PosHeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F8F3EB]">
      {/* 3D Constellation Mesh Background */}
      <Canvas3DScene className="absolute inset-0 pointer-events-none w-full h-full z-0 opacity-70" />

      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
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
              <CheckCircle2 className="w-4 h-4 text-[#E58145]" /> Mac (⌘) &amp; Win (Alt) Native Hotkeys
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#020C2B]" /> 100% Local Timezone Revenue Accuracy
            </span>
          </div>
        </div>

        {/* 3D Realistic POS UI Dashboard Component */}
        <div className="pt-4 max-w-6xl mx-auto">
          <Isometric3DStage
            title="Live WebRajya POS Terminal Simulator"
            badge="Interactive 3D Cashier Stage"
            accentColor="pos"
          >
            <PosDashboardMockup />
          </Isometric3DStage>
        </div>

      </div>
    </section>
  );
}

