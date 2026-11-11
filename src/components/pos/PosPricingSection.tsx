"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRICING_CONFIG, FEATURE_INCLUSION_ASSUMPTION_NOTE } from "@/config/pricing";
import { GstNote } from "@/components/ui/GstNote";

export function PosPricingSection() {
  const posConfig = PRICING_CONFIG.pos;
  const plans = posConfig.plans || [];

  return (
    <section id="pricing" className="py-24 bg-[#FAF6F0] border-t border-[#020C2B]/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase text-[#E58145] tracking-wider font-bold">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            Simple Plans for WebRajya POS
          </h2>
          <p className="text-[#020C2B]/70 text-base sm:text-lg leading-relaxed">
            All core POS features included across every plan. Choose the billing period that fits your restaurant.
          </p>
          <p className="text-xs text-[#E58145] font-mono font-medium">
            {FEATURE_INCLUSION_ASSUMPTION_NOTE}
          </p>
        </div>

        {/* 3 Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const isYearly = plan.id === "yearly";
            const isLifetime = plan.id === "lifetime";

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all relative ${
                  isYearly
                    ? "bg-white border-2 border-[#E58145] shadow-xl md:-translate-y-2"
                    : isLifetime
                    ? "bg-[#020C2B] text-white border border-white/20 shadow-lg"
                    : "bg-white border border-[#020C2B]/10 shadow-sm hover:border-[#E58145]/40"
                }`}
              >
                {/* Badges */}
                {isYearly && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-mono uppercase font-bold tracking-wider bg-[#E58145] text-white shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Best Value • Save ₹1,189
                  </span>
                )}
                {isLifetime && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-mono uppercase font-bold tracking-wider bg-[#D97706] text-white shadow-sm font-semibold">
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

                    <p className={`text-xs font-bold ${isLifetime ? "text-amber-300" : "text-[#E58145]"}`}>
                      {plan.effectiveMonthlyCost}
                    </p>

                    {plan.savingsText && (
                      <p className={`text-[11px] font-medium ${isLifetime ? "text-emerald-400" : "text-emerald-600"}`}>
                        {plan.savingsText}
                      </p>
                    )}
                  </div>

                  {/* Single shared GST Note */}
                  <GstNote className="text-center" />

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 pt-2">
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider block font-bold ${
                        isLifetime ? "text-slate-300" : "text-[#020C2B]"
                      }`}
                    >
                      Included Features:
                    </span>
                    <div className="space-y-2 text-xs">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2.5">
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isLifetime ? "text-amber-400" : "text-[#16A34A]"
                            }`}
                          />
                          <span className={isLifetime ? "text-slate-200" : "text-[#020C2B]/85"}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Lifetime Note if applicable */}
                  {plan.lifetimeNote && (
                    <div className={`p-3 rounded-xl text-[11px] leading-relaxed border border-dashed ${
                      isLifetime ? "bg-white/5 border-white/20 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-600"
                    }`}>
                      {plan.lifetimeNote}
                    </div>
                  )}
                </div>

                {/* Card CTA */}
                <div className="mt-8 pt-4 border-t border-slate-200/20">
                  <Button
                    href={plan.ctaHref("pos")}
                    variant={isYearly ? "cta" : isLifetime ? "cta" : "outline"}
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
        </div>

        {/* Demo & Full Pricing Link */}
        <div className="text-center pt-2">
          <Button href="/pricing?product=pos" variant="outline" size="lg">
            Compare All POS Plans &rarr;
          </Button>
        </div>

      </div>
    </section>
  );
}
