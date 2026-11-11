"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Zap,
  ShieldCheck,
  WifiOff,
  Sparkles,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DotPattern } from "@/components/ui/dot-pattern";
import { LAUNCH_CONFIG } from "@/config/launch";
import { trackEvent } from "@/lib/analytics";
import { useLanguage } from "@/context/LanguageContext";

export function NagpurLaunchHero() {
  const { t } = useLanguage();

  const whatsappMessage = encodeURIComponent(
    "Hi WebRajya, I want to book a free demo of WebRajya Invoice for my shop in Nagpur."
  );
  const whatsappUrl = `https://wa.me/${LAUNCH_CONFIG.WHATSAPP}?text=${whatsappMessage}`;

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#F8F3EB]">
      {/* Magic UI Dot Pattern */}
      <DotPattern
        width={24}
        height={24}
        cx={1}
        cy={1}
        cr={1}
        className="opacity-35 [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-12">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#020C2B]/10 shadow-xs text-xs font-semibold text-[#020C2B]">
            <Sparkles className="w-3.5 h-3.5 text-[#E58145]" />
            <span>Launch in Nagpur, Maharashtra • WebRajya Invoice</span>
          </div>

          {/* Clear Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#020C2B] tracking-tight leading-[1.15] sm:leading-[1.1]">
            Affordable, Easy-to-Use Billing &amp; Inventory Software for Nagpur Retailers
          </h1>

          {/* One-Line Sub-Headline */}
          <p className="text-base sm:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed font-normal">
            Complete retail billing, live stock management, and customer Khata with personal in-shop setup support.
          </p>

          {/* Primary CTA, Secondary CTA & Trust Line */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button
              href="/demo"
              variant="cta"
              size="xl"
              className="w-full sm:w-auto font-bold shadow-md shadow-[#E58145]/20"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              {t("book_demo", "Book Free Demo", "Free Demo Book")}
            </Button>
            <Button
              href={whatsappUrl}
              variant="outline"
              size="xl"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { location: "hero_secondary" })}
              className="w-full sm:w-auto border-[#020C2B]/20 bg-white hover:bg-slate-50 text-[#020C2B] flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-emerald-600" />
              <span>{t("whatsapp_us", "WhatsApp Us", "WhatsApp karein")}</span>
            </Button>
          </div>

          {/* Strict Trust Line */}
          <p className="text-xs sm:text-sm font-mono font-bold text-emerald-700 bg-emerald-50/80 px-4 py-2 rounded-2xl border border-emerald-200 inline-block">
            {t(
              "trial_trust",
              "3-day free trial after live demo. Personal setup help.",
              "Live demo ke baad 3 din ka free trial. Personal setup me poori madad."
            )}
          </p>

          {/* Verified Technical Pillars */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-600 font-mono">
            <span className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs">
              <Zap className="w-4 h-4 text-[#E58145]" />
              <strong className="text-[#020C2B] font-bold font-sans">Sub-Second</strong> Barcode Billing
            </span>

            <span className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs">
              <WifiOff className="w-4 h-4 text-[#2563EB]" />
              <strong className="text-[#020C2B] font-bold font-sans">100%</strong> Offline Resilience
            </span>

            <span className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <strong className="text-[#020C2B] font-bold font-sans">In-Shop Visit</strong> in Nagpur
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

