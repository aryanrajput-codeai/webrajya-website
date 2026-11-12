"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Star,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  Store,
  MessageCircle
} from "lucide-react";
import { FadeIn, BentoCard } from "@/components/ui/motion";
import { getApprovedTestimonials, TestimonialItem } from "@/config/testimonials";
import { Button } from "@/components/ui/button";
import { COMPANY_CONFIG } from "@/config/company";

export function CustomerReviewsSection() {
  const approvedTestimonials = getApprovedTestimonials();

  // If no testimonials meet the strict verified + consentToPublish threshold, show Pilot Program
  if (approvedTestimonials.length === 0) {
    return (
      <section id="reviews" className="py-24 bg-[#F8F3EB] text-[#020C2B] relative overflow-hidden border-t border-[#020C2B]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn direction="up">
            <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-sm text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs font-mono font-bold text-[#E58145]">
                <Sparkles className="w-4 h-4 text-[#E58145]" />
                <span>Early Adopter Pilot Program</span>
              </div>

              <div className="max-w-2xl mx-auto space-y-3">
                <h2 className="text-3xl sm:text-4xl font-black text-[#020C2B] tracking-tight">
                  Be One of Our First Featured Success Stories
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  We are currently onboarding retail store owners, cafe operators, and small businesses into our 
                  guided launch cohort across India. We believe in 100% genuine reviews with written customer consent.
                </p>
              </div>

              {/* Pilot Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left max-w-3xl mx-auto pt-2">
                <div className="p-4 rounded-2xl bg-[#F8F3EB]/60 border border-slate-200 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-xs text-[#020C2B]">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>3-Day Full Counter Trial</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-normal">
                    Test live barcode billing and thermal printing with zero upfront license charge.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8F3EB]/60 border border-slate-200 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-xs text-[#020C2B]">
                    <Store className="w-4 h-4 text-[#2563EB] shrink-0" />
                    <span>Free Catalog Setup</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-normal">
                    Our team formats and imports your entire inventory list from Excel or notebooks.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8F3EB]/60 border border-slate-200 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-xs text-[#020C2B]">
                    <HeartHandshake className="w-4 h-4 text-[#E58145] shrink-0" />
                    <span>Direct Desk Access</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-normal">
                    Priority WhatsApp &amp; phone line directly to our founding engineering team.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button href="/demo?source=pilot_program" variant="cta" size="lg">
                  Apply for Early Adopter Pilot &rarr;
                </Button>
                <a
                  href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hi WebRajya, I'm interested in joining your early adopter pilot program.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Ask Questions on WhatsApp</span>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    );
  }

  // Active Testimonials rendering (only when real consent is on file)
  const totalCount = approvedTestimonials.length;
  const avgRating = (
    approvedTestimonials.reduce((acc, t) => acc + (t.rating || 5), 0) / totalCount
  ).toFixed(1);

  return (
    <section id="reviews" className="py-24 bg-[#F8F3EB] text-[#020C2B] relative overflow-hidden border-t border-[#020C2B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#020C2B] leading-tight">
              Verified Feedback from Indian Business Owners
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Real store owners and managers sharing their everyday counter speed and inventory control.
            </p>
          </div>
        </FadeIn>

        {/* Scorecard */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-4xl font-black text-[#020C2B]">{avgRating}</span>
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-xs text-slate-500 font-mono">
              Based on {totalCount} verified customer reviews
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approvedTestimonials.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex text-amber-500">
                  {[...Array(item.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-[#020C2B]">{item.name}</h4>
                  <p className="text-[11px] text-slate-500">{item.business} • {item.city}</p>
                </div>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 font-semibold">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
