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
                  className="rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all relative bg-white border border-slate-200 shadow-sm"
                >
                  <div className="space-y-4">
                    {/* Aligned Badge Slot */}
                    <div className="h-7 flex items-center">
                      {isEarlyLifetime ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase font-bold tracking-wider bg-[#E58145] text-white shadow-xs">
                          <Flame className="w-3.5 h-3.5 animate-pulse" />
                          Limited • {LAUNCH_CONFIG.EARLY_LIFETIME_SLOTS_REMAINING} Slots
                        </span>
                      ) : isYearly ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase font-bold tracking-wider bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20">
                          <Sparkles className="w-3.5 h-3.5" /> Most Popular • Save ₹1,189
                        </span>
                      ) : (
                        <div className="h-7" aria-hidden="true" />
                      )}
                    </div>

                    {/* Aligned Plan Name & Tagline */}
                    <div>
                      <h3 className="text-xl font-black text-[#020C2B] h-7 flex items-center">
                        {plan.name}
                      </h3>
                      <p className="text-xs mt-1 h-9 line-clamp-2 text-slate-600">
                        {plan.tagline}
                      </p>
                    </div>

                    {/* Uniform Height Price Block */}
                    <div
                      className="h-44 p-4 rounded-2xl font-mono text-center flex flex-col justify-between bg-[#F8F3EB] border border-slate-200"
                    >
                      <div className="h-4 flex items-center justify-center">
                        {plan.formattedRegularPrice ? (
                          <span className="text-[11px] line-through text-slate-400 block">
                            Regular: {plan.formattedRegularPrice}
                          </span>
                        ) : (
                          <span className="text-[11px] block invisible">Regular</span>
                        )}
                      </div>

                      <div className="flex items-baseline justify-center gap-1.5 my-0.5">
                        <span className="font-black leading-none text-[#020C2B] text-3xl sm:text-4xl">
                          {plan.formattedPrice}
                        </span>
                        <span className="text-xs leading-tight text-slate-600">
                          {plan.billingPeriod}
                        </span>
                      </div>

                      <p
                        className={`text-xs font-bold tracking-wide ${
                          isEarlyLifetime ? "text-[#E58145]" : "text-[#2563EB]"
                        }`}
                      >
                        {plan.effectiveMonthlyCost}
                      </p>

                      <div className="h-6 flex items-center justify-center">
                        {plan.savingsText ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20">
                            {plan.savingsText}
                          </span>
                        ) : (
                          <span className="invisible text-[11px]">Savings</span>
                        )}
                      </div>
                    </div>

                    {/* Single shared GST note */}
                    <GstNote className="text-center" />

                    {/* Features List */}
                    <div className="space-y-2 pt-1">
                      <span
                        className="text-[10px] font-mono uppercase tracking-wider block font-bold text-slate-700"
                      >
                        Included:
                      </span>
                      <div className="space-y-2 text-xs min-h-[140px]">
                        {plan.features.slice(0, 4).map((feat) => (
                          <div key={feat} className="flex items-start gap-2">
                            <CheckCircle2
                              className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600"
                            />
                            <span className="text-slate-700">
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Lifetime Note if applicable */}
                    <div className="min-h-[85px] flex flex-col justify-end">
                      {plan.lifetimeNote ? (
                        <div className="p-3 rounded-xl text-[11px] leading-relaxed border border-dashed bg-slate-50 border-slate-200 text-slate-600">
                          {plan.lifetimeNote}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  {/* Card CTA */}
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Button
                      href={plan.ctaHref(selectedProduct)}
                      variant={isEarlyLifetime || isYearly ? "cta" : "outline"}
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
