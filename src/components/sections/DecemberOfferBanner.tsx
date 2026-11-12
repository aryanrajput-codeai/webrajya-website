"use client";

import React from "react";
import { Sparkles, Clock, Flame, ArrowRight } from "lucide-react";
import { LAUNCH_CONFIG } from "@/config/launch";
import { Button } from "@/components/ui/button";

export function DecemberOfferBanner() {
  const remaining = LAUNCH_CONFIG.EARLY_LIFETIME_SLOTS_REMAINING;
  const total = LAUNCH_CONFIG.EARLY_LIFETIME_SLOTS_TOTAL;

  return (
    <div className="w-full bg-gradient-to-r from-[#020C2B] via-[#0B1E54] to-[#020C2B] text-white py-4 px-4 sm:px-6 relative overflow-hidden border-y border-[#E58145]/30 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        {/* Left: Offer text & badge */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-[#E58145] text-white shadow-xs shrink-0">
            <Flame className="w-3.5 h-3.5 text-white animate-pulse" />
            {LAUNCH_CONFIG.OFFER_TITLE}
          </span>
          <p className="text-xs sm:text-sm text-slate-200">
            <strong className="text-white font-bold">{LAUNCH_CONFIG.OFFER_TEXT}</strong>{" "}
            <span className="inline-block mt-0.5 sm:mt-0 text-[#E58145] font-mono font-semibold">
              (Early Lifetime Offer: Pehle {total} dukaano ke liye ₹19,999)
            </span>
          </p>
        </div>

        {/* Right: Remaining Slots Counter & CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-xs font-mono text-amber-300">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Valid till {LAUNCH_CONFIG.OFFER_EXPIRY_DISPLAY}</span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="font-bold text-white bg-rose-600 px-1.5 py-0.5 rounded text-[11px]">
              {remaining} slots bache hain
            </span>
          </div>

          <Button
            href="/demo?offer=december_launch"
            variant="cta"
            size="xs"
            className="rounded-full font-bold shadow-sm whitespace-nowrap"
            icon={<ArrowRight className="w-3 h-3" />}
          >
            Offer Claim Karein
          </Button>
        </div>
      </div>
    </div>
  );
}

