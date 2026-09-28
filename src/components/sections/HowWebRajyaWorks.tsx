"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Layers,
  Sliders,
  Network,
  BarChart3,
  ArrowRight,
  ArrowDown,
  Utensils,
  FileText,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Zap,
  TrendingUp,
  Cpu
} from "lucide-react";
import {
  HOW_WEBRJYA_WORKS_HEADER,
  PRODUCT_WORKFLOWS,
  FOUR_STEP_STORY,
  ProductWorkflow,
  FourStepStory
} from "@/data/howWebRajyaWorksData";

export function HowWebRajyaWorks() {
  const [activeProduct, setActiveProduct] = useState<"pos" | "invoice" | null>(null);

  const iconMap: Record<FourStepStory["iconName"], React.ReactNode> = {
    Layers: <Layers className="w-5 h-5 text-[#E58145]" />,
    Sliders: <Sliders className="w-5 h-5 text-[#E58145]" />,
    Network: <Network className="w-5 h-5 text-[#020C2B]" />,
    BarChart3: <BarChart3 className="w-5 h-5 text-[#E58145]" />
  };

  const posData = PRODUCT_WORKFLOWS.find(p => p.id === "pos")!;
  const invoiceData = PRODUCT_WORKFLOWS.find(p => p.id === "invoice")!;

  return (
    <section
      id="how-webrajya-works"
      className="py-24 bg-[#F8F3EB] border-t border-b border-[#020C2B]/10 relative overflow-hidden font-sans"
      aria-labelledby="how-webrajya-works-title"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#020C2B]/5 border border-[#020C2B]/15 text-[#020C2B] text-xs font-mono font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#E58145]" />
            {HOW_WEBRJYA_WORKS_HEADER.eyebrow}
          </span>

          <h2
            id="how-webrajya-works-title"
            className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight leading-tight"
          >
            {HOW_WEBRJYA_WORKS_HEADER.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#525866] leading-relaxed max-w-2xl mx-auto">
            {HOW_WEBRJYA_WORKS_HEADER.supportingCopy}
          </p>
        </div>

        {/* ECOSYSTEM ARCHITECTURE DIAGRAM */}
        <div className="space-y-10">
          
          {/* CENTRAL WEBRAJYA NODE */}
          <div className="flex flex-col items-center justify-center">
            <div
              tabIndex={0}
              role="button"
              aria-label="WebRajya Central Business Software Platform"
              onMouseEnter={() => setActiveProduct(null)}
              onClick={() => setActiveProduct(null)}
              className="group p-5 sm:p-6 rounded-3xl bg-white text-[#020C2B] border-2 border-[#E58145]/40 shadow-xl max-w-md w-full text-center space-y-2 cursor-pointer transition-all duration-300 hover:border-[#E58145] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#E58145]"
            >
              <div className="flex items-center justify-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#020C2B]/10 p-1 flex items-center justify-center shadow-sm shrink-0">
                  <img
                    src="/webrajya-logo.svg"
                    alt="WebRajya Official Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xl font-black tracking-tight text-[#020C2B] font-sans">
                  {HOW_WEBRJYA_WORKS_HEADER.centralNode.title}
                </span>
              </div>
              <p className="text-xs text-[#525866] font-mono tracking-wide uppercase">
                {HOW_WEBRJYA_WORKS_HEADER.centralNode.subtitle}
              </p>
              <div className="pt-1 flex justify-center items-center gap-2 text-[10px] font-mono text-[#E58145] opacity-90">
                <Cpu className="w-3 h-3" /> Unified Authentication &amp; Core Engine
              </div>
            </div>

            {/* Connecting Stem Line for Desktop & Tablet */}
            <div className="hidden lg:flex flex-col items-center my-2">
              <div className="w-0.5 h-6 bg-gradient-to-b from-[#020C2B] to-[#E58145]/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#E58145] shadow-sm animate-pulse" />
            </div>
          </div>

          {/* TWO PRIMARY BRANCHES - DESKTOP LAYOUT */}
          <div className="hidden lg:block relative">
            
            {/* Top Branch Connecting Line */}
            <div className="relative max-w-5xl mx-auto h-8 pointer-events-none mb-6">
              <svg className="w-full h-full" overflow="visible">
                <path
                  d="M 500,0 L 500,12 M 500,12 L 250,12 L 250,30 M 500,12 L 750,12 L 750,30"
                  fill="none"
                  stroke={activeProduct === "pos" ? "#E58145" : activeProduct === "invoice" ? "#E58145" : "#020C2B"}
                  strokeWidth="2"
                  strokeDasharray={activeProduct ? "none" : "4 4"}
                  className="transition-colors duration-300"
                />
              </svg>
            </div>

            {/* Split Grid for Products */}
            <div className="grid grid-cols-2 gap-10 items-stretch">
              
              {/* POS BRANCH CONTAINER */}
              <div
                tabIndex={0}
                role="region"
                aria-label="WebRajya POS Connected Workflow"
                onMouseEnter={() => setActiveProduct("pos")}
                onFocus={() => setActiveProduct("pos")}
                className={`rounded-3xl p-6 sm:p-8 bg-white border-2 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-sm ${
                  activeProduct === "pos"
                    ? "border-[#E58145] shadow-xl ring-2 ring-[#E58145]/20 scale-[1.01]"
                    : "border-[#020C2B]/10 hover:border-[#E58145]/60"
                }`}
              >
                <div className="space-y-6">
                  {/* Branch Header Node */}
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E58145]/15 text-[#020C2B] border border-[#E58145]/30 text-xs font-mono font-bold uppercase">
                        <Utensils className="w-3.5 h-3.5 text-[#E58145]" /> {posData.title}
                      </span>
                      <h3 className="text-xl font-extrabold text-[#020C2B] mt-2.5">
                        Restaurant Operating System
                      </h3>
                      <p className="text-xs text-[#525866] mt-0.5 font-mono">{posData.tagline}</p>
                    </div>

                    <span className="px-3 py-1 rounded-xl bg-[#020C2B] text-white text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
                      {posData.actionLabel}
                    </span>
                  </div>

                  {/* Capabilities Tags */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-[#525866] uppercase tracking-wider block font-semibold">
                      Connected POS Modules
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {posData.capabilities.map(cap => (
                        <span
                          key={cap}
                          className={`text-xs px-2.5 py-1 rounded-lg border font-medium transition-colors ${
                            activeProduct === "pos"
                              ? "bg-[#F8F3EB] border-[#E58145]/40 text-[#020C2B] font-semibold"
                              : "bg-[#F8F3EB]/60 border-[#020C2B]/10 text-[#525866]"
                          }`}
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Operational Flow Pipeline */}
                  <div className="p-4 rounded-2xl bg-[#020C2B] text-white space-y-3 shadow-inner">
                    <span className="text-[10px] font-mono text-[#E58145] uppercase tracking-wider block font-bold flex items-center gap-1.5">
                      <Zap className="w-3 h-3" /> Continuous Floor-to-Kitchen Flow
                    </span>

                    <div className="flex items-center justify-between text-[11px] font-mono gap-1">
                      {posData.sequentialFlow.map((step, idx) => (
                        <React.Fragment key={step}>
                          <span
                            className={`px-2 py-1 rounded font-bold transition-all ${
                              step === "INSIGHTS"
                                ? "bg-[#E58145] text-white shadow-sm"
                                : activeProduct === "pos"
                                ? "bg-white/15 text-white"
                                : "bg-white/5 text-slate-300"
                            }`}
                          >
                            {step}
                          </span>
                          {idx < posData.sequentialFlow.length - 1 && (
                            <ChevronRight className="w-3 h-3 text-[#E58145] shrink-0" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="pt-4 border-t border-[#020C2B]/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#525866]">For food &amp; hospitality outlets</span>
                  <Link
                    href={posData.route}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E58145] hover:text-[#020C2B] transition-colors focus:outline-none focus:underline"
                  >
                    {posData.ctaText}
                  </Link>
                </div>
              </div>

              {/* INVOICE BRANCH CONTAINER */}
              <div
                tabIndex={0}
                role="region"
                aria-label="WebRajya Invoice Connected Workflow"
                onMouseEnter={() => setActiveProduct("invoice")}
                onFocus={() => setActiveProduct("invoice")}
                className={`rounded-3xl p-6 sm:p-8 bg-white border-2 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-sm ${
                  activeProduct === "invoice"
                    ? "border-[#E58145] shadow-xl ring-2 ring-[#E58145]/20 scale-[1.01]"
                    : "border-[#020C2B]/10 hover:border-[#E58145]/60"
                }`}
              >
                <div className="space-y-6">
                  {/* Branch Header Node */}
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E58145]/15 text-[#020C2B] border border-[#E58145]/30 text-xs font-mono font-bold uppercase">
                        <FileText className="w-3.5 h-3.5 text-[#E58145]" /> {invoiceData.title}
                      </span>
                      <h3 className="text-xl font-extrabold text-[#020C2B] mt-2.5">
                        Financial Billing &amp; Collection Platform
                      </h3>
                      <p className="text-xs text-[#525866] mt-0.5 font-mono">{invoiceData.tagline}</p>
                    </div>

                    <span className="px-3 py-1 rounded-xl bg-[#020C2B] text-white text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
                      {invoiceData.actionLabel}
                    </span>
                  </div>

                  {/* Capabilities Tags */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-[#525866] uppercase tracking-wider block font-semibold">
                      Connected Billing Modules
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {invoiceData.capabilities.map(cap => (
                        <span
                          key={cap}
                          className={`text-xs px-2.5 py-1 rounded-lg border font-medium transition-colors ${
                            activeProduct === "invoice"
                              ? "bg-[#F8F3EB] border-[#E58145]/40 text-[#020C2B] font-semibold"
                              : "bg-[#F8F3EB]/60 border-[#020C2B]/10 text-[#525866]"
                          }`}
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Operational Flow Pipeline */}
                  <div className="p-4 rounded-2xl bg-[#020C2B] text-white space-y-3 shadow-inner">
                    <span className="text-[10px] font-mono text-[#E58145] uppercase tracking-wider block font-bold flex items-center gap-1.5">
                      <TrendingUp className="w-3 h-3" /> Continuous Invoice-to-Cash Flow
                    </span>

                    <div className="flex items-center justify-between text-[11px] font-mono gap-1">
                      {invoiceData.sequentialFlow.map((step, idx) => (
                        <React.Fragment key={step}>
                          <span
                            className={`px-2 py-1 rounded font-bold transition-all ${
                              step === "UNDERSTAND"
                                ? "bg-[#E58145] text-white shadow-sm"
                                : activeProduct === "invoice"
                                ? "bg-white/15 text-white"
                                : "bg-white/5 text-slate-300"
                            }`}
                          >
                            {step}
                          </span>
                          {idx < invoiceData.sequentialFlow.length - 1 && (
                            <ChevronRight className="w-3 h-3 text-[#E58145] shrink-0" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="pt-4 border-t border-[#020C2B]/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#525866]">For client invoicing &amp; cash flow</span>
                  <Link
                    href={invoiceData.route}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E58145] hover:text-[#020C2B] transition-colors focus:outline-none focus:underline"
                  >
                    {invoiceData.ctaText}
                  </Link>
                </div>
              </div>

            </div>

          </div>

          {/* VERTICAL STACK FOR MOBILE & TABLET (< lg) */}
          <div className="lg:hidden space-y-8">
            
            {/* MOBILE BRANCH 1 — POS */}
            <div className="rounded-3xl p-6 bg-white border border-[#020C2B]/10 shadow-sm space-y-5 relative">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E58145]/15 text-[#020C2B] border border-[#E58145]/30 text-xs font-mono font-bold uppercase">
                  <Utensils className="w-3.5 h-3.5 text-[#E58145]" /> {posData.title}
                </span>
                <span className="px-2.5 py-0.5 rounded-lg bg-[#020C2B] text-white text-[11px] font-mono font-bold uppercase">
                  {posData.actionLabel}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-bold text-[#020C2B]">Restaurant Operating System</h3>
                <p className="text-xs text-[#525866] font-mono">{posData.tagline}</p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {posData.capabilities.map(cap => (
                  <span key={cap} className="text-xs px-2.5 py-1 rounded-lg bg-[#F8F3EB] border border-[#020C2B]/10 text-[#020C2B] font-medium">
                    {cap}
                  </span>
                ))}
              </div>

              <div className="p-3.5 rounded-2xl bg-[#020C2B] text-white space-y-2">
                <span className="text-[10px] font-mono text-[#E58145] uppercase tracking-wider block font-bold">
                  Workflow Sequence:
                </span>
                <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono">
                  {posData.sequentialFlow.map((step, idx) => (
                    <React.Fragment key={step}>
                      <span className={`px-2 py-0.5 rounded font-bold ${step === "INSIGHTS" ? "bg-[#E58145] text-white" : "bg-white/10 text-white"}`}>
                        {step}
                      </span>
                      {idx < posData.sequentialFlow.length - 1 && <span className="text-[#E58145]">→</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#020C2B]/10 flex items-center justify-between">
                <span className="text-xs font-mono text-[#525866]">WebRajya POS</span>
                <Link href={posData.route} className="text-xs font-bold text-[#E58145] hover:underline">
                  {posData.ctaText}
                </Link>
              </div>
            </div>

            {/* MOBILE BRANCH 2 — INVOICE */}
            <div className="rounded-3xl p-6 bg-white border border-[#020C2B]/10 shadow-sm space-y-5 relative">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E58145]/15 text-[#020C2B] border border-[#E58145]/30 text-xs font-mono font-bold uppercase">
                  <FileText className="w-3.5 h-3.5 text-[#E58145]" /> {invoiceData.title}
                </span>
                <span className="px-2.5 py-0.5 rounded-lg bg-[#020C2B] text-white text-[11px] font-mono font-bold uppercase">
                  {invoiceData.actionLabel}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-bold text-[#020C2B]">Financial Billing &amp; Collection</h3>
                <p className="text-xs text-[#525866] font-mono">{invoiceData.tagline}</p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {invoiceData.capabilities.map(cap => (
                  <span key={cap} className="text-xs px-2.5 py-1 rounded-lg bg-[#F8F3EB] border border-[#020C2B]/10 text-[#020C2B] font-medium">
                    {cap}
                  </span>
                ))}
              </div>

              <div className="p-3.5 rounded-2xl bg-[#020C2B] text-white space-y-2">
                <span className="text-[10px] font-mono text-[#E58145] uppercase tracking-wider block font-bold">
                  Workflow Sequence:
                </span>
                <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono">
                  {invoiceData.sequentialFlow.map((step, idx) => (
                    <React.Fragment key={step}>
                      <span className={`px-2 py-0.5 rounded font-bold ${step === "UNDERSTAND" ? "bg-[#E58145] text-white" : "bg-white/10 text-white"}`}>
                        {step}
                      </span>
                      {idx < invoiceData.sequentialFlow.length - 1 && <span className="text-[#E58145]">→</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#020C2B]/10 flex items-center justify-between">
                <span className="text-xs font-mono text-[#525866]">WebRajya Invoice</span>
                <Link href={invoiceData.route} className="text-xs font-bold text-[#E58145] hover:underline">
                  {invoiceData.ctaText}
                </Link>
              </div>
            </div>

          </div>

        </div>

        {/* FOUR STEP STORY SECTION */}
        <div className="pt-10 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono uppercase text-[#020C2B] tracking-wider bg-[#020C2B]/5 px-3 py-1 rounded-full border border-[#020C2B]/10 font-bold">
              OPERATIONAL CYCLE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#020C2B] tracking-tight">
              Four Steps to Connected Operations
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOUR_STEP_STORY.map(step => (
              <div
                key={step.number}
                className="group p-6 rounded-3xl bg-white border border-[#020C2B]/10 shadow-sm hover:border-[#E58145] hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black font-mono text-[#020C2B]/20 group-hover:text-[#E58145] transition-colors">
                      {step.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#F8F3EB] border border-[#020C2B]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {iconMap[step.iconName]}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-base font-extrabold text-[#020C2B] group-hover:text-[#E58145] transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-xs text-[#525866] leading-relaxed mt-2">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-[#020C2B]/10 flex items-center justify-between text-[11px] font-mono text-[#525866]">
                  <span>Step {step.number}</span>
                  <span className="text-[#020C2B] font-semibold group-hover:text-[#E58145] transition-colors">
                    WebRajya Standard
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
