"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Sparkles, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRICING_CONFIG, FEATURE_INCLUSION_ASSUMPTION_NOTE } from "@/config/pricing";
import { GstNote } from "@/components/ui/GstNote";
import { LAUNCH_CONFIG } from "@/config/launch";

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
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all relative ${
                  isEarlyLifetime
                    ? "bg-[#020C2B] text-white border-2 border-[#E58145] shadow-xl md:-translate-y-2"
                    : isYearly
                    ? "bg-white border-2 border-[#2563EB] shadow-xl md:-translate-y-1"
                    : "bg-white border border-[#E2E8F0] shadow-sm hover:border-[#2563EB]/40"
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
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-mono uppercase font-bold tracking-wider bg-[#2563EB] text-white shadow-sm flex items-center gap-1 whitespace-nowrap">
                    <Sparkles className="w-3.5 h-3.5" /> Best Value • Save ₹1,189
                  </span>
                )}

                <div className="space-y-6">
                  {/* Plan Name & Tagline */}
                  <div>
                    <h3 className={`text-xl sm:text-2xl font-black ${isEarlyLifetime ? "text-white" : "text-[#0F172A]"}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-xs mt-1 min-h-[32px] ${isEarlyLifetime ? "text-slate-300" : "text-[#64748B]"}`}>
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price Box */}
                  <div
                    className={`p-4 rounded-2xl font-mono text-center space-y-1.5 ${
                      isEarlyLifetime
                        ? "bg-white/10 border border-white/15"
                        : "bg-[#F8FAFC] border border-[#E2E8F0]"
                    }`}
                  >
                    {plan.formattedRegularPrice && (
                      <span className="text-xs line-through text-slate-400 block">
                        Regular: {plan.formattedRegularPrice}
                      </span>
                    )}
                    <div className="flex items-baseline justify-center gap-1.5">
                      <span className={`text-3xl font-black ${isEarlyLifetime ? "text-white" : "text-[#0F172A]"}`}>
                        {plan.formattedPrice}
                      </span>
                      <span className={`text-xs font-semibold ${isEarlyLifetime ? "text-slate-300" : "text-[#64748B]"}`}>
                        {plan.billingPeriod}
                      </span>
                    </div>

                    <p className={`text-xs font-bold ${isEarlyLifetime ? "text-amber-300" : "text-[#2563EB]"}`}>
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

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 pt-2">
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider block font-bold ${
                        isEarlyLifetime ? "text-slate-300" : "text-[#0F172A]"
                      }`}
                    >
                      Included Features:
                    </span>
                    <div className="space-y-2 text-xs">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2.5">
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isEarlyLifetime ? "text-emerald-400" : "text-[#16A34A]"
                            }`}
                          />
                          <span className={isEarlyLifetime ? "text-slate-200" : "text-[#334155]"}>
                            {feature}
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

                {/* CTA Button */}
                <div className="mt-8 pt-4 border-t border-slate-200/40">
                  <Button
                    href={plan.ctaHref("invoice")}
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
        </div>

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
