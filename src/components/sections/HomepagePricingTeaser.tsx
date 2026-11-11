"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { FileText, Utensils, CheckCircle2, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRICING_CONFIG, GST_CONFIG, FEATURE_INCLUSION_ASSUMPTION_NOTE } from "@/config/pricing";

export function HomepagePricingTeaser() {
  const [selectedProduct, setSelectedProduct] = useState<"invoice" | "pos">("invoice");
  const productConfig = PRICING_CONFIG[selectedProduct];
  const plans = productConfig.plans || [];

  const accentColor = selectedProduct === "invoice" ? "#2563EB" : "#E58145";
  const accentHoverBg = selectedProduct === "invoice" ? "hover:bg-[#1D4ED8]" : "hover:bg-[#D97706]";
  const accentBg = selectedProduct === "invoice" ? "bg-[#2563EB]" : "bg-[#E58145]";

  return (
    <section id="pricing" className="py-24 bg-[#FAF6F0] border-t border-[#020C2B]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#E58145]">
            Simple &amp; Transparent Plans
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            Fair Pricing. No Hidden Contracts.
          </h2>
          <p className="text-[#020C2B]/80 text-base sm:text-lg">
            Choose your software solution. Both WebRajya Invoice and WebRajya POS come with identical, predictable pricing tiers.
          </p>
          <p className="text-xs text-[#020C2B]/60 font-mono">
            {FEATURE_INCLUSION_ASSUMPTION_NOTE}
          </p>
        </div>

        {/* Product Toggle (Invoice | POS, default Invoice) */}
        <div className="flex justify-center">
          <div className="p-1.5 rounded-2xl bg-white border border-[#020C2B]/10 shadow-sm flex items-center gap-2 max-w-md w-full relative">
            <button
              type="button"
              onClick={() => setSelectedProduct("invoice")}
              className={`relative flex-1 py-3 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer z-10 ${
                selectedProduct === "invoice"
                  ? "text-white"
                  : "text-[#020C2B]/70 hover:text-[#020C2B]"
              }`}
            >
              {selectedProduct === "invoice" && (
                <motion.div
                  layoutId="homepageActiveProductTab"
                  className="absolute inset-0 bg-[#2563EB] rounded-xl shadow-xs -z-10"
                  transition={{ type: "spring", stiffness: 450, damping: 30 }}
                />
              )}
              <FileText className="w-4 h-4" /> WebRajya Invoice
            </button>

            <button
              type="button"
              onClick={() => setSelectedProduct("pos")}
              className={`relative flex-1 py-3 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer z-10 ${
                selectedProduct === "pos"
                  ? "text-white"
                  : "text-[#020C2B]/70 hover:text-[#020C2B]"
              }`}
            >
              {selectedProduct === "pos" && (
                <motion.div
                  layoutId="homepageActiveProductTab"
                  className="absolute inset-0 bg-[#E58145] rounded-xl shadow-xs -z-10"
                  transition={{ type: "spring", stiffness: 450, damping: 30 }}
                />
              )}
              <Utensils className="w-4 h-4" /> WebRajya POS
            </button>
          </div>
        </div>

        {/* Selected Product Tagline */}
        <div className="text-center space-y-1">
          <h3 className="text-lg font-bold text-[#020C2B]">
            {productConfig.name}
          </h3>
          <p className="text-xs text-[#020C2B]/70 font-mono">
            {productConfig.tagline}
          </p>
        </div>

        {/* 3 Plan Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProduct}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
          >
            {plans.map((plan) => {
              const isYearly = plan.id === "yearly";
              const isLifetime = plan.id === "lifetime";

              return (
                <div
                  key={plan.id}
                  className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all relative ${
                    isYearly
                      ? `bg-white border-2 shadow-xl md:-translate-y-2 ${
                          selectedProduct === "invoice" ? "border-[#2563EB]" : "border-[#E58145]"
                        }`
                      : isLifetime
                      ? "bg-[#020C2B] text-white border border-white/20 shadow-lg"
                      : "bg-white border border-[#020C2B]/10 shadow-sm hover:border-[#020C2B]/30"
                  }`}
                >
                  {/* Badges */}
                  {isYearly && (
                    <span
                      className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-mono uppercase font-bold tracking-wider text-white shadow-sm flex items-center gap-1 ${accentBg}`}
                    >
                      <Sparkles className="w-3.5 h-3.5" /> Best Value • Save ₹1,189
                    </span>
                  )}
                  {isLifetime && (
                    <span
                      className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-mono uppercase font-bold tracking-wider shadow-sm font-semibold ${
                        selectedProduct === "invoice"
                          ? "bg-[#38BDF8] text-[#0F172A]"
                          : "bg-[#E58145] text-white"
                      }`}
                    >
                      Pay once, use forever
                    </span>
                  )}

                  <div className="space-y-6">
                    <div>
                      <h3 className={`text-xl sm:text-2xl font-black ${isLifetime ? "text-white" : "text-[#020C2B]"}`}>
                        {plan.name}
                      </h3>
                      <p className={`text-xs mt-1 min-h-[32px] ${isLifetime ? "text-slate-300" : "text-[#020C2B]/70"}`}>
                        {plan.tagline}
                      </p>
                    </div>

                    {/* Price Box */}
                    <div
                      className={`p-5 rounded-2xl font-mono text-center space-y-1.5 ${
                        isLifetime
                          ? "bg-white/10 border border-white/15"
                          : "bg-[#F8F3EB] border border-[#020C2B]/10"
                      }`}
                    >
                      <div className="flex items-baseline justify-center gap-1.5">
                        <span className={`text-3xl sm:text-4xl font-black ${isLifetime ? "text-white" : "text-[#020C2B]"}`}>
                          {plan.formattedPrice}
                        </span>
                        <span className={`text-xs font-semibold ${isLifetime ? "text-slate-300" : "text-[#020C2B]/70"}`}>
                          {plan.billingPeriod}
                        </span>
                      </div>

                      <p
                        className={`text-xs font-bold ${
                          isLifetime
                            ? selectedProduct === "invoice" ? "text-[#38BDF8]" : "text-[#E58145]"
                            : selectedProduct === "invoice" ? "text-[#2563EB]" : "text-[#E58145]"
                        }`}
                      >
                        {plan.effectiveMonthlyCost}
                      </p>

                      {plan.savingsText && (
                        <p className={`text-[11px] font-medium ${isLifetime ? "text-emerald-400" : "text-emerald-600"}`}>
                          {plan.savingsText}
                        </p>
                      )}
                    </div>

                    {/* GST Note Line */}
                    <p className={`text-[11px] text-center font-mono ${isLifetime ? "text-slate-400" : "text-[#020C2B]/70"}`}>
                      {GST_CONFIG.displayNote}
                    </p>

                    {/* Top Features */}
                    <div className="space-y-2.5 pt-2">
                      <span
                        className={`text-[10px] font-mono uppercase tracking-wider block font-bold ${
                          isLifetime ? "text-slate-300" : "text-[#020C2B]"
                        }`}
                      >
                        Core Inclusions:
                      </span>
                      <div className="space-y-2 text-xs">
                        {plan.features.slice(0, 5).map((feature) => (
                          <div key={feature} className="flex items-start gap-2">
                            <CheckCircle2
                              className={`w-4 h-4 shrink-0 mt-0.5 ${
                                isLifetime
                                  ? selectedProduct === "invoice" ? "text-[#38BDF8]" : "text-[#E58145]"
                                  : selectedProduct === "invoice" ? "text-[#2563EB]" : "text-[#E58145]"
                              }`}
                            />
                            <span className={isLifetime ? "text-slate-200" : "text-[#020C2B]/85"}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Lifetime Clarification */}
                    {isLifetime && plan.lifetimeDetails && (
                      <div className="p-3 rounded-xl bg-white/5 border border-dashed border-white/20 text-[10px] space-y-1">
                        <span className="font-bold text-amber-300 block flex items-center gap-1 font-mono uppercase">
                          <ShieldCheck className="w-3.5 h-3.5" /> Lifetime Scope:
                        </span>
                        <p className="text-slate-300">• {plan.lifetimeDetails.licenseType}</p>
                        <p className="text-amber-300 font-mono">• {plan.lifetimeDetails.updateDurationTodo}</p>
                      </div>
                    )}
                  </div>

                  {/* Card CTA & Links */}
                  <div className="mt-8 pt-4 border-t border-slate-200/20 space-y-2">
                    <Button
                      href={plan.ctaHref(selectedProduct)}
                      variant={isYearly ? "cta" : isLifetime ? "cta" : "outline"}
                      size="lg"
                      className={`w-full ${
                        isYearly
                          ? `${accentBg} ${accentHoverBg} text-white`
                          : isLifetime
                          ? selectedProduct === "invoice"
                            ? "bg-[#38BDF8] hover:bg-[#0284C7] text-[#0F172A] font-bold"
                            : "bg-[#E58145] hover:bg-[#D97706] text-white font-bold"
                          : "border-[#020C2B]/20 hover:bg-[#020C2B]/5 text-[#020C2B]"
                      }`}
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      {plan.ctaLabel}
                    </Button>

                    <Link
                      href={`/pricing?product=${selectedProduct}`}
                      className={`block text-center text-xs font-mono font-medium hover:underline pt-1 ${
                        isLifetime ? "text-slate-300" : "text-[#020C2B]/70"
                      }`}
                    >
                      Compare full specifications &rarr;
                    </Link>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Footer Link to /pricing & Dual Product prompt */}
        <div className="text-center space-y-4 pt-4">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-3.5 rounded-2xl bg-white border border-[#020C2B]/10 text-xs sm:text-sm text-[#020C2B]">
            <span className="font-medium">Need both Invoice and POS for your business?</span>
            <Link
              href="/demo?product=not_sure&intent=both"
              className="text-[#E58145] font-bold hover:underline inline-flex items-center gap-1"
            >
              Talk to us <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div>
            <Link
              href={`/pricing?product=${selectedProduct}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#020C2B] hover:text-[#E58145] underline underline-offset-4"
            >
              View detailed plan comparison table, FAQ and licensing terms &rarr;
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

