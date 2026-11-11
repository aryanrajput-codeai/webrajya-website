"use client";

import React from "react";
import { Star, CheckCircle2 } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { INITIAL_REVIEWS } from "@/data/reviews";

export function CustomerMarquee() {
  const verifiedReviews = INITIAL_REVIEWS.filter((r) => r.verified);

  return (
    <section className="py-12 bg-white/60 border-y border-[#020C2B]/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 text-center space-y-1">
        <span className="text-xs font-mono uppercase text-[#E58145] tracking-wider font-bold">
          Trusted Across India
        </span>
        <h3 className="text-base sm:text-lg font-bold text-[#020C2B]">
          Powering Retail Counters &amp; Restaurant Floors Nationwide
        </h3>
      </div>

      <div className="relative w-full flex flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:35s]">
          {verifiedReviews.map((review) => (
            <div
              key={review.id}
              className="mx-3 p-4 rounded-2xl bg-white border border-[#020C2B]/10 shadow-xs hover:border-[#E58145]/40 hover:shadow-md transition-all flex flex-col justify-between w-72 sm:w-80 shrink-0"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < review.rating ? "text-amber-400 fill-amber-400" : "text-slate-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#020C2B]/5 text-[#020C2B] font-semibold">
                    {review.product}
                  </span>
                </div>

                <p className="text-xs text-[#020C2B]/85 font-medium line-clamp-2 italic">
                  &ldquo;{review.title}&rdquo;
                </p>
              </div>

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

        {/* Gradient fade on edges for smooth visual cutoff */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#F8F3EB] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#F8F3EB] to-transparent" />
      </div>
    </section>
  );
}
