"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  WifiOff,
  MapPin,
  Video
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DotPattern } from "@/components/ui/dot-pattern";
import { LAUNCH_CONFIG } from "@/config/launch";
import { COMPANY_CONFIG } from "@/config/company";
import { trackEvent } from "@/lib/analytics";
import { useLanguage } from "@/context/LanguageContext";

export function NagpurLaunchHero() {
  const { t, isHindi } = useLanguage();

  const whatsappMessage = encodeURIComponent(
    "Namaste WebRajya, mujhe apni dukaan ke liye billing software ka demo dekhna hai."
  );
  const whatsappUrl = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${whatsappMessage}`;

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
          {/* Warm Shopkeeper-Friendly Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#020C2B] tracking-tight leading-[1.18] sm:leading-[1.12]">
            {t(
              "hero.headline",
              "Affordable aur Easy GST Billing & Inventory Software, Poore India Ke Dukaandaaron Ke Liye"
            )}
          </h1>

          {/* Sub-Headline: GST, stock, khata, with remote + local support clarity */}
          <p className="text-base sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-normal">
            {t(
              "hero.subheadline",
              "Bill banao, live stock dekho, aur grahak ka khata sambhalo — sab ek jagah. Personal setup mein hum video call, WhatsApp ya in-shop (Nagpur) madad karenge."
            )}
          </p>

          {/* Primary CTA, Secondary CTA */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button
              href="/demo"
              variant="cta"
              size="xl"
              className="w-full sm:w-auto font-bold shadow-md shadow-[#E58145]/20"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              {t("common.book_free_demo", "Free Demo Book Karein")}
            </Button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { location: "hero_secondary" })}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-base text-white bg-[#25D366] hover:bg-[#1ebe57] active:bg-[#17a84c] shadow-md shadow-[#25D366]/30 hover:shadow-lg hover:shadow-[#25D366]/40 transition-all duration-200 select-none"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.546 5.877L.057 23.428a.5.5 0 0 0 .515.572l5.737-1.505A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 0 1-5.032-1.385l-.36-.214-3.733.979 1.001-3.642-.235-.374A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
              </svg>
              <span>{t("common.whatsapp_us", "WhatsApp Par Baat Karein")}</span>
            </a>
          </div>

          {/* Honest Service Reassurance */}
          <p className="text-xs text-slate-500 font-medium">
            {isHindi
              ? "पूरे भारत में वीडियो कॉल व व्हाट्सएप पर व्यक्तिगत सेटअप • नागपुर में दुकान पर आकर विजिट"
              : "Video call aur WhatsApp par personal setup poore India mein • Nagpur mein counter par aakar visit"}
          </p>

          {/* Technical & Support Pillars in Shopkeeper Voice */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-700">
            <span className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs">
              <Zap className="w-4 h-4 text-[#E58145]" />
              <strong className="text-[#020C2B] font-bold">
                {t("hero.pillar_barcode", "Barcode Se Tez Billing")}
              </strong>
            </span>

            <span className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs">
              <WifiOff className="w-4 h-4 text-[#2563EB]" />
              <strong className="text-[#020C2B] font-bold">
                {t("hero.pillar_offline", "Internet Na Ho Tab Bhi Chalta Hai")}
              </strong>
            </span>

            <span className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <strong className="text-[#020C2B] font-bold">
                {t("hero.pillar_setup", "Hindi & English Mein Setup Madad")}
              </strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
