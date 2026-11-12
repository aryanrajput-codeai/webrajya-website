"use client";

import React from "react";
import { CheckCircle2, Shield, Zap, WifiOff, FileText, Store } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { getApprovedTestimonials } from "@/config/testimonials";

export function CustomerMarquee() {
  const approved = getApprovedTestimonials();

  // If no approved customer testimonials with verified consent, render neutral capability badges
  if (approved.length === 0) {
    const CAPABILITIES = [
      { text: "Fast Barcode Scanner Invoicing", icon: Zap },
      { text: "Works Offline Without Internet", icon: WifiOff },
      { text: "Customer Khata & Payment Reminders", icon: FileText },
      { text: "Thermal Receipt (58mm & 80mm) Printing", icon: Store },
      { text: "3-Day Free Counter Trial", icon: Shield },
      { text: "Guided Setup in Hindi & English", icon: CheckCircle2 }
    ];

    return (
      <section className="py-8 bg-white/70 border-y border-[#020C2B]/10 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-3 text-center">
          <p className="text-xs font-mono uppercase text-[#E58145] tracking-wider font-bold">
            Made for Indian Retailers
          </p>
        </div>

        <div className="relative w-full flex flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:25s]">
            {CAPABILITIES.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.text}
                  className="mx-3 px-4 py-2.5 rounded-full bg-white border border-slate-200/90 shadow-2xs flex items-center gap-2.5 shrink-0 text-xs font-semibold text-[#020C2B]"
                >
                  <Icon className="w-4 h-4 text-[#2563EB]" />
                  <span>{cap.text}</span>
                </div>
              );
            })}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#F8F3EB] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#F8F3EB] to-transparent" />
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-white/60 border-y border-[#020C2B]/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 text-center space-y-1">
        <span className="text-xs font-mono uppercase text-[#E58145] tracking-wider font-bold">
          Verified Feedback
        </span>
        <h3 className="text-base sm:text-lg font-bold text-[#020C2B]">
          Store Owners Sharing Their Daily Counter Experience
        </h3>
      </div>

      <div className="relative w-full flex flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:35s]">
          {approved.map((review) => (
            <div
              key={review.id}
              className="mx-3 p-4 rounded-2xl bg-white border border-[#020C2B]/10 shadow-xs hover:border-[#E58145]/40 hover:shadow-md transition-all flex flex-col justify-between w-72 sm:w-80 shrink-0"
            >
              <p className="text-xs text-[#020C2B]/85 font-medium line-clamp-2 italic">
                &ldquo;{review.quote}&rdquo;
              </p>

              <div className="pt-3 mt-2 border-t border-[#020C2B]/5 flex items-center justify-between text-[11px]">
                <div className="truncate pr-2">
                  <span className="font-bold text-[#020C2B] block truncate">{review.business}</span>
                  <span className="text-slate-500 text-[10px] truncate block">{review.city}</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-600 font-medium shrink-0 text-[10px]">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#F8F3EB] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#F8F3EB] to-transparent" />
      </div>
    </section>
  );
}
