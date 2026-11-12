"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { FileText, Utensils, CheckCircle2, ArrowRight, Sparkles, Flame, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PRICING_CONFIG, LIFETIME_SLOT_CONFIG, LIFETIME_INCLUSION_STATEMENT } from "@/config/pricing";
import { LAUNCH_CONFIG } from "@/config/launch";
import { GstNote } from "@/components/ui/GstNote";
import { WhatLifetimeIncludes } from "@/components/pricing/WhatLifetimeIncludes";

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
            Fair Pricing.{" "}
            <Link href="/subscription-terms" className="underline hover:text-[#2563EB] decoration-slate-300">
              Zero Surprise Hikes
            </Link>
            .
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
                  className="rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all bg-white border border-slate-200/90 shadow-sm hover:shadow-md relative"
                >
                  <div className="flex-1 flex flex-col">
                    {/* Aligned Badge Slot */}
                    <div className="h-6 flex items-center mb-2">
                      {isEarlyLifetime && LIFETIME_SLOT_CONFIG.isSlotLimitReal ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase font-bold tracking-wider bg-[#E58145] text-white">
                          <Flame className="w-3 h-3 animate-pulse" />
                          Limited • {LIFETIME_SLOT_CONFIG.slotsRemaining} Slots Left
                        </span>
                      ) : isYearly ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase font-bold tracking-wider bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20">
                          <Sparkles className="w-3 h-3" /> Most Popular
                        </span>
                      ) : (
                        <div className="h-6" aria-hidden="true" />
                      )}
                    </div>

                    {/* Aligned Plan Name & Tagline */}
                    <div>
                      <h3 className="text-2xl font-black text-[#020C2B] tracking-tight">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 h-9 line-clamp-2 leading-relaxed">
                        {plan.tagline}
                      </p>
                    </div>

                    {/* Clean Open Price Section (No heavy box) */}
                    <div className="pt-4 pb-4 border-b border-slate-100 flex flex-col justify-end min-h-[125px]">
                      <div className="h-4 flex items-center">
                        {plan.formattedRegularPrice ? (
                          <span className="text-xs line-through text-slate-400">
                            Regular {plan.formattedRegularPrice}
                          </span>
                        ) : (
                          <span className="invisible text-xs">Regular</span>
                        )}
                      </div>

                      <div className="flex items-baseline gap-1.5 my-1">
                        <span className="text-3xl sm:text-4xl font-black text-[#020C2B] tracking-tight leading-none">
                          {plan.formattedPrice}
                        </span>
                        <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">
                          {plan.billingPeriod}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mt-0.5 h-6">
                        <span className="text-xs font-bold text-slate-700">
                          {plan.effectiveMonthlyCost}
                        </span>
                        {isEarlyLifetime ? (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            Save ₹6,000
                          </span>
                        ) : isYearly ? (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            Save 17%
                          </span>
                        ) : null}
                      </div>

                      <div className="mt-2 text-[11px] text-slate-400">
                        <GstNote />
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="pt-4 space-y-2.5 flex-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                        Included:
                      </span>
                      <ul className="space-y-2 text-xs text-slate-700 min-h-[130px]">
                        {plan.features.slice(0, 4).map((feat) => (
                          <li key={feat} className="flex items-start gap-2 leading-snug">
                            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Lifetime Note (Clean subtle note, no heavy dashed box) */}
                    <div className="min-h-[55px] pt-3 flex flex-col justify-end">
                      {plan.lifetimeNote ? (
                        <p className="text-[11px] text-slate-400 leading-relaxed font-sans italic">
                          {plan.lifetimeNote}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  {/* Card CTA */}
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Button
                      href={plan.ctaHref(selectedProduct)}
                      variant={isEarlyLifetime || isYearly ? "cta" : "outline"}
                      size="lg"
                      className="w-full font-bold shadow-xs text-sm"
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

        {/* Clear What Lifetime Includes Block */}
        <WhatLifetimeIncludes />

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
