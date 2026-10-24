"use client";

import React from "react";
import { Car, ShieldCheck, Zap, Download } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { MyGarageDashboardMockup } from "@/components/mockups/MyGarageDashboardMockup";
import { Isometric3DStage } from "@/components/ui/Isometric3DStage";
import { Canvas3DScene } from "@/components/ui/Canvas3DScene";

export function MyGarageHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F8F3EB]">
      {/* 3D Constellation Mesh Background */}
      <Canvas3DScene className="absolute inset-0 pointer-events-none w-full h-full z-0 opacity-70" />

      {/* Background Cyan Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#0EA5E9]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <Badge variant="mygarage" icon={<Car className="w-3.5 h-3.5" />}>
            WEBRAJYA MYGARAGE • AUTOMOTIVE SAAS PLATFORM
          </Badge>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#020C2B] tracking-tight leading-[1.08]">
            Never Miss RC, Insurance or <br />
            <span className="text-[#0EA5E9]">
              PUC Expiries Ever Again.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#525866] max-w-2xl mx-auto leading-relaxed font-normal">
            Manage your cars &amp; bikes, track document expiries, maintenance invoices, fuel logs, and traffic challans in one sleek digital dashboard.
          </p>

          {/* Trust Highlights */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#020C2B]/70 font-mono">
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#0EA5E9]" /> Real-Time Expiry Counters
            </span>
            <span className="flex items-center gap-2">
              <Download className="w-4 h-4 text-[#0EA5E9]" /> Vector PDF Service Reports
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0EA5E9]" /> LocalStorage &amp; Supabase Ready
            </span>
          </div>
        </div>

        {/* 3D Interactive Dashboard Preview */}
        <div className="pt-4 max-w-6xl mx-auto">
          <Isometric3DStage
            title="Live Vehicle Locker & Expiry Simulator"
            badge="Interactive 3D Fleet Stage"
            accentColor="garage"
          >
            <MyGarageDashboardMockup />
          </Isometric3DStage>
        </div>
      </div>
    </section>
  );
}

