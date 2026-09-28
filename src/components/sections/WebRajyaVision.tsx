import React from "react";
import { Layers, ShieldCheck, Cpu, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export function WebRajyaVision() {
  return (
    <section className="py-24 bg-[#F8F3EB] text-[#020C2B] border-t border-b border-[#020C2B]/10 relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#020C2B]/5 border border-[#020C2B]/15 text-[#020C2B] text-xs font-mono font-semibold">
              <Layers className="w-3.5 h-3.5 text-[#E58145]" /> Parent Brand Architecture
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#020C2B] tracking-tight leading-tight">
              {COMPANY_INFO.visionTitle}
            </h2>

            <p className="text-[#525866] text-base sm:text-lg leading-relaxed font-normal">
              {COMPANY_INFO.visionDescription}
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#E58145]/15 border border-[#E58145]/30 text-[#E58145] flex items-center justify-center shrink-0 mt-1">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-[#020C2B] text-sm">Unified Software Engine</h4>
                  <p className="text-xs text-[#525866] leading-relaxed">
                    Common authentication, consistent design principles, and reliable cloud sync across all WebRajya products.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#E58145]/15 border border-[#E58145]/30 text-[#E58145] flex items-center justify-center shrink-0 mt-1">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-[#020C2B] text-sm">Pragmatic Product Development</h4>
                  <p className="text-xs text-[#525866] leading-relaxed">
                    We focus on solving real operational friction for active venue owners and finance managers without unnecessary feature bloat.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Architecture Box */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#020C2B]/10 shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#E58145]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-[#020C2B]/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#020C2B]/10 p-1 flex items-center justify-center shadow-xs">
                    <img src="/webrajya-logo.svg" alt="WebRajya Logo" className="w-full h-full object-contain" />
                  </div>
                  <span className="font-bold text-[#020C2B] font-mono text-sm">WEBRAJYA PLATFORM</span>
                </div>
                <span className="text-[10px] text-[#E58145] font-mono bg-[#E58145]/15 px-2 py-0.5 rounded border border-[#E58145]/30 font-semibold">Core System</span>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#F8F3EB] border border-[#E58145]/40 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-[#020C2B] text-sm block">WEBRAJYA POS</span>
                    <span className="text-xs text-[#525866]">Restaurant &amp; Food Business POS Operating System</span>
                  </div>
                  <span className="text-xs font-mono text-white font-semibold px-2.5 py-1 rounded bg-[#E58145]">Active</span>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F3EB] border border-[#020C2B]/15 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-[#020C2B] text-sm block">WEBRAJYA INVOICE</span>
                    <span className="text-xs text-[#525866]">Financial Billing &amp; Payment Tracking System</span>
                  </div>
                  <span className="text-xs font-mono text-white font-semibold px-2.5 py-1 rounded bg-[#E58145]">Active</span>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F3EB]/50 border border-dashed border-[#020C2B]/20 flex items-center justify-between opacity-75">
                  <div>
                    <span className="font-medium text-[#020C2B]/80 text-xs block font-mono">+ Future Business Solutions</span>
                    <span className="text-[11px] text-[#525866]">Planned WebRajya product modules</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#525866]">Roadmap</span>
                </div>
              </div>

              <p className="text-xs text-[#525866] font-mono text-center pt-2">
                Designed to run independently or synchronized together.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
