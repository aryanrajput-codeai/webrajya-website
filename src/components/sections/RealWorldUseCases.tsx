"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Utensils,
  Store,
  Briefcase,
  Truck,
  UserCheck,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Zap,
  ShieldCheck,
  Sliders
} from "lucide-react";
import { USE_CASES, UseCase } from "@/data/useCases";

export function RealWorldUseCases() {
  const [selectedCaseId, setSelectedCaseId] = useState<UseCase["id"]>("restaurant");

  const currentCase = USE_CASES.find(c => c.id === selectedCaseId) || USE_CASES[0];

  const categoryIcons: Record<UseCase["id"], React.ReactNode> = {
    restaurant: <Utensils className="w-4 h-4" />,
    retail: <Store className="w-4 h-4" />,
    agency: <Briefcase className="w-4 h-4" />,
    distributor: <Truck className="w-4 h-4" />,
    freelancer: <UserCheck className="w-4 h-4" />
  };

  return (
    <section
      id="real-world-use-cases"
      className="py-24 bg-[#F8F3EB] border-t border-b border-[#020C2B]/10 relative overflow-hidden font-sans"
      aria-labelledby="use-cases-title"
    >
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#020C2B]/5 border border-[#020C2B]/15 text-[#020C2B] text-xs font-mono font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#E58145]" />
            BUILT FOR REAL BUSINESS
          </span>

          <h2
            id="use-cases-title"
            className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight leading-tight"
          >
            Different businesses. Different workflows. One connected platform.
          </h2>

          <p className="text-base sm:text-lg text-[#525866] leading-relaxed max-w-2xl mx-auto">
            WebRajya adapts to the way businesses actually work — from taking restaurant orders to sending invoices, tracking payments and understanding what&apos;s happening across the business.
          </p>
        </div>

        {/* INTERACTIVE USE-CASE SELECTOR BAR */}
        <div className="flex justify-center">
          <div
            role="tablist"
            aria-label="Business Category Selector"
            className="p-1.5 rounded-2xl bg-white border border-[#020C2B]/10 shadow-sm flex flex-wrap items-center justify-center gap-1.5 max-w-4xl w-full"
          >
            {USE_CASES.map(useCase => {
              const isSelected = selectedCaseId === useCase.id;
              return (
                <button
                  key={useCase.id}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`usecase-panel-${useCase.id}`}
                  tabIndex={0}
                  onClick={() => setSelectedCaseId(useCase.id)}
                  onKeyDown={e => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedCaseId(useCase.id);
                    }
                  }}
                  className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold flex items-center gap-2 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E58145] ${
                    isSelected
                      ? "bg-[#E58145] text-white shadow-sm scale-105"
                      : "text-[#020C2B]/70 hover:text-[#020C2B] hover:bg-[#020C2B]/5"
                  }`}
                >
                  {categoryIcons[useCase.id]}
                  <span>{useCase.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* SELECTED USE-CASE DISPLAY PANEL */}
        <div
          id={`usecase-panel-${currentCase.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${currentCase.id}`}
          className="p-6 sm:p-10 rounded-3xl bg-white border border-[#020C2B]/10 shadow-xl space-y-10 transition-all duration-300"
        >
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#020C2B]/10">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E58145]/15 text-[#020C2B] border border-[#E58145]/30 text-xs font-mono font-bold uppercase">
                {currentCase.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#020C2B]">
                {currentCase.headline}
              </h3>
              <p className="text-sm text-[#525866] leading-relaxed">
                {currentCase.description}
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="p-3.5 rounded-2xl bg-[#020C2B] text-white font-mono text-xs">
                <span className="text-[#E58145] font-bold block">{currentCase.productName}</span>
                <span className="text-[11px] text-slate-300">Targeted Operating Software</span>
              </div>

              <Link
                href={currentCase.ctaRoute}
                className="px-5 py-3 rounded-2xl bg-[#E58145] hover:bg-[#020C2B] text-white text-xs font-bold font-mono transition-all flex items-center gap-2 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#E58145]"
              >
                <span>{currentCase.ctaText}</span>
              </Link>
            </div>
          </div>

          {/* WORKFLOW VISUALIZATION PIPELINE */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#020C2B] uppercase tracking-wider font-bold flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#E58145]" />
                {currentCase.workflowTitle}
              </span>
              <span className="text-[11px] font-mono text-[#525866]">
                End-to-End Operational Sequence
              </span>
            </div>

            {/* Desktop Horizontal Pipeline */}
            <div className="hidden md:flex items-center justify-between p-4 rounded-2xl bg-[#020C2B] text-white shadow-inner font-mono text-xs">
              {currentCase.workflow.map((step, idx) => (
                <React.Fragment key={step}>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#E58145] text-white flex items-center justify-center text-[10px] font-bold">
                      {idx + 1}
                    </span>
                    <span
                      className={`font-bold tracking-wide transition-colors ${
                        idx === currentCase.workflow.length - 1
                          ? "text-[#E58145]"
                          : "text-white"
                      }`}
                    >
                      {step}
                    </span>
                  </div>

                  {idx < currentCase.workflow.length - 1 && (
                    <ChevronRight className="w-4 h-4 text-[#E58145] shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Mobile Vertical Pipeline */}
            <div className="md:hidden p-4 rounded-2xl bg-[#020C2B] text-white space-y-2 font-mono text-xs">
              {currentCase.workflow.map((step, idx) => (
                <div key={step} className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#E58145] text-white flex items-center justify-center text-[10px] font-bold">
                      {idx + 1}
                    </span>
                    <span className="font-bold text-white">{step}</span>
                  </div>
                  {idx < currentCase.workflow.length - 1 ? (
                    <ArrowRight className="w-3.5 h-3.5 text-[#E58145]" />
                  ) : (
                    <span className="text-[10px] text-[#E58145] font-bold uppercase">Target Output</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* FEATURE CAPABILITY GRID */}
          <div className="space-y-4 pt-2">
            <span className="text-xs font-mono text-[#020C2B] uppercase tracking-wider font-bold block">
              Key Capabilities Implemented for {currentCase.label}
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentCase.features.map(feat => (
                <div
                  key={feat.title}
                  className="p-4 rounded-2xl bg-[#F8F3EB] border border-[#020C2B]/10 space-y-1.5 hover:border-[#E58145]/40 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E58145] shrink-0" />
                    <h4 className="font-bold text-[#020C2B] text-xs">{feat.title}</h4>
                  </div>
                  <p className="text-[11px] text-[#525866] leading-relaxed pl-6">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
