"use client";

import React from "react";
import { Car, ShieldCheck } from "lucide-react";

export function MyGarageFinalCta() {
  return (
    <section className="py-20 bg-[#020C2B] text-white relative overflow-hidden">
      {/* Background Cyan Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0EA5E9]/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="w-16 h-16 rounded-2xl bg-[#0EA5E9] text-white flex items-center justify-center mx-auto shadow-lg shadow-[#0EA5E9]/30">
          <Car className="w-8 h-8" />
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight max-w-3xl mx-auto leading-tight">
          Take Full Control of Your Vehicles Today with MyGarage SaaS.
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Start tracking RC, Insurance, PUC expiries, service ledgers, and maintenance expenses in one sleek digital dashboard.
        </p>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#0EA5E9]" /> Production Ready v1.0.0
          </span>
          <span>•</span>
          <span>Developed by WebRajya Technologies</span>
        </div>
      </div>
    </section>
  );
}
