"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Sparkles, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRICING_CONFIG, LIFETIME_SLOT_CONFIG, FEATURE_INCLUSION_ASSUMPTION_NOTE } from "@/config/pricing";
import { GstNote } from "@/components/ui/GstNote";
import { LAUNCH_CONFIG } from "@/config/launch";
import { WhatLifetimeIncludes } from "@/components/pricing/WhatLifetimeIncludes";

export function InvoicePricingSection() {
  const invoiceConfig = PRICING_CONFIG.invoice;
  const plans = invoiceConfig.plans || [];

  return (
    <section id="pricing" className="py-24 bg-[#F8FAFC] border-t border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase text-[#2563EB] tracking-wider font-bold">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight">
            Simple Plans for WebRajya Invoice
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
            All core features included across every plan. Choose the billing period that fits your retail operations.
          </p>
          <p className="text-xs text-[#2563EB] font-mono font-medium">
            {FEATURE_INCLUSION_ASSUMPTION_NOTE}
          </p>
        </div>

        {/* Plan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
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
                    <h3 className="text-2xl font-black text-[#0F172A] tracking-tight">
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
                      <span className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight leading-none">
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

                  {/* Feature Checklist */}
                  <div className="pt-4 space-y-2.5 flex-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                      Kya-Kya Shamil Hai:
                    </span>
                    <ul className="space-y-2 text-xs text-slate-700 min-h-[130px]">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 leading-snug">
                          <CheckCircle2
                            className="w-4 h-4 shrink-0 text-[#16A34A] mt-0.5"
                          />
                          <span>{feature}</span>
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

                {/* CTA Button pinned to bottom */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Button
                    href={plan.ctaHref("invoice")}
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
        </div>

        {/* Clear What Lifetime Includes Block */}
        <WhatLifetimeIncludes />

        {/* Demo & Full Pricing Link */}
        <div className="text-center pt-2">
          <Button href="/pricing?product=invoice" variant="outline" size="lg">
            Compare All Plan Details &rarr;
          </Button>
        </div>

      </div>
    </section>
  );
}
