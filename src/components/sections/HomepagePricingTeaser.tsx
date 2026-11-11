"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { FileText, Utensils, CheckCircle2, ArrowRight, Sparkles, Flame, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PRICING_CONFIG, LIFETIME_INCLUSION_STATEMENT } from "@/config/pricing";
import { LAUNCH_CONFIG } from "@/config/launch";
import { GstNote } from "@/components/ui/GstNote";

export function HomepagePricingTeaser() {
  const [selectedProduct, setSelectedProduct] = useState<"invoice" | "pos">("invoice");
  const productConfig = PRICING_CONFIG[selectedProduct];
  const plans = productConfig.plans || [];

  return (
    <section id="pricing" className="py-24 bg-[#FAF6F0] border-t border-[#020C2B]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            Fair Pricing. Zero Surprise Hikes.
          </h2>
          <p className="text-slate-700 text-base sm:text-lg">
            Choose your billing solution. All core features included across every plan.
          </p>

          {/* Product Toggle (Invoice | POS, default Invoice) */}
          <div className="pt-2 flex justify-center">
            <div className="p-1.5 rounded-full bg-white border border-[#020C2B]/10 shadow-xs flex items-center gap-2 max-w-md w-full relative">
              <button
                type="button"
                onClick={() => setSelectedProduct("invoice")}
                className={`relative flex-1 py-2 px-4 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer z-10 ${
                  selectedProduct === "invoice"
                    ? "text-white"
                    : "text-slate-600 hover:text-[#020C2B]"
                }`}
              >
                {selectedProduct === "invoice" && (
                  <motion.div
                    layoutId="homepageActiveProductTab"
                    className="absolute inset-0 bg-[#2563EB] rounded-full shadow-xs -z-10"
                    transition={{ type: "spring", stiffness: 450, damping: 30 }}
                  />
                )}
                <FileText className="w-4 h-4" /> WebRajya Invoice
              </button>

              <button
                type="button"
                onClick={() => setSelectedProduct("pos")}
                className={`relative flex-1 py-2 px-4 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer z-10 ${
                  selectedProduct === "pos"
                    ? "text-white"
                    : "text-slate-600 hover:text-[#020C2B]"
                }`}
              >
                {selectedProduct === "pos" && (
                  <motion.div
                    layoutId="homepageActiveProductTab"
                    className="absolute inset-0 bg-[#E58145] rounded-full shadow-xs -z-10"
                    transition={{ type: "spring", stiffness: 450, damping: 30 }}
                  />
                )}
                <Utensils className="w-4 h-4" /> WebRajya POS
              </button>
            </div>
          </div>
        </div>

        {/* Plan Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProduct}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`grid grid-cols-1 ${
              selectedProduct === "invoice" ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"
            } gap-6 sm:gap-8 items-stretch`}
          >
            {plans.map((plan) => {
              const isYearly = plan.id === "yearly";
              const isEarlyLifetime = plan.id === "early_lifetime";
              const isLifetime = plan.id === "lifetime";

              return (
                <div
                  key={plan.id}
                  className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all relative ${
                    isEarlyLifetime
                      ? "bg-[#020C2B] text-white border-2 border-[#E58145] shadow-xl md:-translate-y-2"
                      : isYearly
                      ? "bg-white border-2 border-[#2563EB] shadow-lg md:-translate-y-1"
                      : "bg-white border border-slate-200 shadow-sm"
                  }`}
                >
                  {/* Badges */}
                  {isEarlyLifetime && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-mono uppercase font-bold tracking-wider bg-[#E58145] text-white shadow-md flex items-center gap-1 whitespace-nowrap">
                      <Flame className="w-3.5 h-3.5 animate-pulse" />
                      Limited • {LAUNCH_CONFIG.EARLY_LIFETIME_SLOTS_REMAINING} Slots
                    </span>
                  )}
                  {isYearly && !isEarlyLifetime && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[11px] font-mono uppercase font-bold tracking-wider bg-[#2563EB] text-white shadow-sm flex items-center gap-1 whitespace-nowrap">
                      <Sparkles className="w-3.5 h-3.5" /> Most Popular • Save ₹1,189
                    </span>
                  )}

                  <div className="space-y-5">
                    <div>
                      <h3 className={`text-xl font-black ${isEarlyLifetime ? "text-white" : "text-[#020C2B]"}`}>
                        {plan.name}
                      </h3>
                      <p className={`text-xs mt-1 min-h-[30px] ${isEarlyLifetime ? "text-slate-300" : "text-slate-600"}`}>
                        {plan.tagline}
                      </p>
                    </div>

                    {/* Price Block */}
                    <div
                      className={`p-4 rounded-2xl font-mono text-center space-y-1 ${
                        isEarlyLifetime
                          ? "bg-white/10 border border-white/15"
                          : "bg-[#F8F3EB] border border-slate-200"
                      }`}
                    >
                      {plan.formattedRegularPrice && (
                        <span className="text-xs line-through text-slate-400 block">
                          Regular: {plan.formattedRegularPrice}
                        </span>
                      )}
                      <div className="flex items-baseline justify-center gap-1">
                        <span className={`text-3xl font-black ${isEarlyLifetime ? "text-white" : "text-[#020C2B]"}`}>
                          {plan.formattedPrice}
                        </span>
                        <span className={`text-xs ${isEarlyLifetime ? "text-slate-300" : "text-slate-600"}`}>
                          {plan.billingPeriod}
                        </span>
                      </div>
                      <p
                        className={`text-xs font-bold ${
                          isEarlyLifetime ? "text-amber-300" : "text-[#2563EB]"
                        }`}
                      >
                        {plan.effectiveMonthlyCost}
                      </p>
                      {plan.savingsText && (
                        <p className={`text-[11px] font-medium ${isEarlyLifetime ? "text-emerald-400" : "text-emerald-600"}`}>
                          {plan.savingsText}
                        </p>
                      )}
                    </div>

                    {/* Single shared GST note */}
                    <GstNote className="text-center" />

                    {/* Features List */}
                    <div className="space-y-2 pt-2">
                      <span
                        className={`text-[10px] font-mono uppercase tracking-wider block font-bold ${
                          isEarlyLifetime ? "text-slate-300" : "text-slate-700"
                        }`}
                      >
                        Included:
                      </span>
                      <div className="space-y-2 text-xs">
                        {plan.features.slice(0, 4).map((feat) => (
                          <div key={feat} className="flex items-start gap-2">
                            <CheckCircle2
                              className={`w-4 h-4 shrink-0 mt-0.5 ${
                                isEarlyLifetime ? "text-emerald-400" : "text-emerald-600"
                              }`}
                            />
                            <span className={isEarlyLifetime ? "text-slate-200" : "text-slate-700"}>
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Lifetime Note if applicable */}
                    {plan.lifetimeNote && (
                      <div className={`p-3 rounded-xl text-[11px] leading-relaxed border border-dashed ${
                        isEarlyLifetime ? "bg-white/5 border-white/20 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-600"
                      }`}>
                        {plan.lifetimeNote}
                      </div>
                    )}
                  </div>

                  {/* Card CTA */}
                  <div className="mt-8 pt-4 border-t border-slate-100">
                    <Button
                      href={plan.ctaHref(selectedProduct)}
                      variant={isEarlyLifetime ? "cta" : isYearly ? "cta" : "outline"}
                      size="lg"
                      className="w-full font-bold shadow-xs"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      {plan.ctaLabel}
                    </Button>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* View Full Pricing & FAQ Link */}
        <div className="text-center pt-2">
          <Button
            href={`/pricing?product=${selectedProduct}`}
            variant="outline"
            size="lg"
            className="rounded-full"
          >
            Compare Full Details &amp; Read FAQs &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
