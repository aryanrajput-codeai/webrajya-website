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
                className="rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all relative bg-white border border-[#E2E8F0] shadow-sm hover:border-[#2563EB]/40"
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
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase font-bold tracking-wider bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20">
                        <Sparkles className="w-3.5 h-3.5" /> Best Value • Save ₹1,189
                      </span>
                    ) : (
                      <div className="h-7" aria-hidden="true" />
                    )}
                  </div>

                  {/* Aligned Plan Name & Tagline */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] h-7 flex items-center">
                      {plan.name}
                    </h3>
                    <p className="text-xs mt-1 h-9 line-clamp-2 text-[#64748B]">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Uniform Height Price Box */}
                  <div
                    className="h-44 p-4 rounded-2xl font-mono text-center flex flex-col justify-between bg-[#F8FAFC] border border-[#E2E8F0]"
                  >
                    <div className="h-4 flex items-center justify-center">
                      {plan.formattedRegularPrice ? (
                        <span className="text-xs line-through text-slate-400 block">
                          Regular: {plan.formattedRegularPrice}
                        </span>
                      ) : (
                        <span className="text-xs block invisible">Regular</span>
                      )}
                    </div>

                    <div className="flex items-baseline justify-center gap-1.5 my-0.5">
                      <span className="text-3xl font-black text-[#0F172A]">
                        {plan.formattedPrice}
                      </span>
                      <span className="text-xs font-semibold text-[#64748B]">
                        {plan.billingPeriod}
                      </span>
                    </div>

                    <p className={`text-xs font-bold ${isEarlyLifetime ? "text-[#E58145]" : "text-[#2563EB]"}`}>
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

                  {/* Feature Checklist */}
                  <div className="space-y-2 pt-1">
                    <span
                      className="text-[10px] font-mono uppercase tracking-wider block font-bold text-[#0F172A]"
                    >
                      Included Features:
                    </span>
                    <div className="space-y-2 text-xs min-h-[140px]">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2.5">
                          <CheckCircle2
                            className="w-4 h-4 shrink-0 mt-0.5 text-[#16A34A]"
                          />
                          <span className="text-[#334155]">
                            {feature}
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

                {/* CTA Button pinned to bottom */}
                <div className="mt-6 pt-4 border-t border-slate-200/40">
                  <Button
                    href={plan.ctaHref("invoice")}
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
