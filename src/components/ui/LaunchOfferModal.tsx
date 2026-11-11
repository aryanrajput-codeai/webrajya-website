"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Flame, Clock, ArrowRight, X, Sparkles } from "lucide-react";
import { LAUNCH_CONFIG } from "@/config/launch";
import { trackEvent } from "@/lib/analytics";

const STORAGE_KEY = "webrajya_launch_offer_seen_v1";

export function LaunchOfferModal() {
  const [isOpen, setIsOpen] = useState(false);
  const remaining = LAUNCH_CONFIG.EARLY_LIFETIME_SLOTS_REMAINING;
  const total = LAUNCH_CONFIG.EARLY_LIFETIME_SLOTS_TOTAL;

  useEffect(() => {
    // Check if the user has already seen or dismissed this offer
    try {
      const hasSeen = localStorage.getItem(STORAGE_KEY);
      if (!hasSeen) {
        // Show popup after a smooth 1.5s delay on initial load
        const timer = setTimeout(() => {
          setIsOpen(true);
          trackEvent("launch_offer_popup_shown", {
            remaining_slots: remaining,
          });
        }, 1500);
        return () => clearTimeout(timer);
      }
    } catch {
      // In case localStorage is restricted
    }
  }, [remaining]);

  const handleDismiss = () => {
    setIsOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Ignore storage errors
    }
    trackEvent("launch_offer_popup_dismissed");
  };

  const handleClaim = () => {
    setIsOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Ignore storage errors
    }
    trackEvent("launch_offer_popup_claimed");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleDismiss}
            className="fixed inset-0 bg-[#020C2B]/75 backdrop-blur-sm cursor-pointer"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Nagpur Retail Launch Offer"
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="relative w-full max-w-lg bg-[#F8F3EB] text-[#020C2B] rounded-3xl p-6 sm:p-8 border-2 border-[#E58145]/40 shadow-[0_25px_60px_-15px_rgba(2,12,43,0.22),0_0_40px_rgba(229,129,69,0.15)] overflow-hidden z-10"
          >
            {/* Ambient Background Warm Glow */}
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-[#E58145]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-[#F3E7D3] rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleDismiss}
              aria-label="Close notification"
              className="absolute top-4 right-4 p-2 rounded-full text-slate-500 hover:text-[#020C2B] bg-black/5 hover:bg-black/10 border border-slate-300/70 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-5 text-center sm:text-left relative z-10">
              {/* Badge */}
              <div className="flex justify-center sm:justify-start">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#E58145] text-white shadow-md shadow-[#E58145]/25">
                  <Flame className="w-3.5 h-3.5 text-white animate-pulse" />
                  {LAUNCH_CONFIG.OFFER_TITLE}
                </span>
              </div>

              {/* Offer Headline & Description */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-black text-[#020C2B] tracking-tight leading-snug">
                  {LAUNCH_CONFIG.OFFER_TEXT}
                </h3>
                <p className="text-sm font-mono font-bold text-[#E58145]">
                  (Early Lifetime: ₹19,999 for first {total} shops)
                </p>
              </div>

              {/* Validity & Remaining Slots Block */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 pt-1">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200/90 text-xs font-mono text-slate-700 shadow-xs">
                  <Clock className="w-3.5 h-3.5 text-[#E58145] shrink-0" />
                  <span>Valid till {LAUNCH_CONFIG.OFFER_EXPIRY_DISPLAY}</span>
                  <span className="text-slate-300">•</span>
                  <span className="font-bold text-white bg-rose-600 px-2 py-0.5 rounded-md text-[11px] animate-pulse">
                    {remaining} slots left
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href="/demo?offer=nagpur_launch"
                  onClick={handleClaim}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-[#E58145] to-[#f59955] hover:from-[#d67236] hover:to-[#e88c48] shadow-lg shadow-[#E58145]/35 transition-all duration-200 active:scale-[0.98] cursor-pointer"
                >
                  <span>Claim Offer</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  type="button"
                  onClick={handleDismiss}
                  className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-[#020C2B] transition-colors cursor-pointer"
                >
                  Maybe later
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

