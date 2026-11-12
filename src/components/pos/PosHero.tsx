"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Zap, CheckCircle2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#020C2B] tracking-tight leading-[1.08]">
            Super-Fast Restaurant POS <br />
            <span className="text-[#E58145]">
              Rush Hours Mein Zero-Lag Speed.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#525866] max-w-3xl mx-auto leading-relaxed font-normal">
            Order lo, kitchen mein KOT bhejo, aur 3 second mein bill settle karo. 100% keyboard shortcuts — mouse chhoone ki bhi zaroorat nahi.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button href="/demo" variant="cta" size="xl" icon={<ArrowRight className="w-5 h-5" />}>
              Free Demo Book Karein
            </Button>
            
            <Button
              href="#pos-hotkeys"
              variant="outline"
              size="xl"
              icon={<Play className="w-4 h-4 text-[#020C2B]" />}
              iconPosition="left"
            >
              Hotkey Simulator Dekhein
            </Button>
          </div>

          {/* Trust badges */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#525866] font-mono">
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#E58145]" /> 3 Second Mein Tez Billing
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Kitchen KOT Turant Print
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#2563EB]" /> 100% Offline Chalta Hai
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

