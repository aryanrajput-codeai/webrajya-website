"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, CalendarCheck, Home, Tag } from "lucide-react";
import { LAUNCH_CONFIG } from "@/config/launch";
import { trackEvent } from "@/lib/analytics";
import { useLanguage } from "@/context/LanguageContext";

export function MobileBottomDock() {
  const { t } = useLanguage();

  const handleCallClick = () => {
    trackEvent("call_click", { location: "mobile_bottom_dock" });
  };

  const handleWhatsAppClick = () => {
    trackEvent("whatsapp_click", { location: "mobile_bottom_dock" });
  };

  const whatsappMessage = encodeURIComponent(
    "Hi WebRajya, I want to book a free demo of WebRajya Invoice for my shop in Nagpur."
  );
  const whatsappUrl = `https://wa.me/${LAUNCH_CONFIG.WHATSAPP}?text=${whatsappMessage}`;

  return (
    <div className="md:hidden fixed bottom-3 left-3 right-3 z-50 pointer-events-none flex justify-center pb-[env(safe-area-inset-bottom,0px)]">
      <nav
        aria-label="Mobile quick action navigation"
        className="pointer-events-auto w-full max-w-md bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-full px-2 py-1.5 flex items-center justify-between shadow-2xl"
      >
        {/* 1. Home Link */}
        <Link
          href="/"
          className="flex flex-col items-center justify-center py-1 px-2.5 rounded-full text-slate-600 hover:text-[#020C2B] transition-colors"
          aria-label="Home"
        >
          <Home className="w-4 h-4" />
          <span className="text-[10px] font-bold tracking-tight">Home</span>
        </Link>

        {/* 2. Direct Call Action */}
        <a
          href={`tel:${LAUNCH_CONFIG.PHONE}`}
          onClick={handleCallClick}
          className="flex flex-col items-center justify-center py-1 px-2.5 rounded-full text-slate-700 hover:text-[#020C2B] transition-colors"
          aria-label={`Call WebRajya at ${LAUNCH_CONFIG.PHONE_DISPLAY}`}
        >
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-800">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold tracking-tight mt-0.5">Call</span>
        </a>

        {/* 3. Center CTA: Book Demo */}
        <Link
          href="/demo"
          className="flex flex-col items-center -mt-5 px-3 group focus:outline-none"
        >
          <div className="w-13 h-13 rounded-full bg-[#E58145] text-white flex items-center justify-center shadow-lg shadow-[#E58145]/30 border-2 border-white transform active:scale-95 transition-all">
            <CalendarCheck className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-black text-[#020C2B] tracking-tight mt-1">
            {t("book_demo", "Book Demo", "Demo Book")}
          </span>
        </Link>

        {/* 4. WhatsApp Quick Enquiry */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="flex flex-col items-center justify-center py-1 px-2.5 rounded-full text-emerald-700 hover:text-emerald-800 transition-colors"
          aria-label="Enquire via WhatsApp"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
            <MessageCircle className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold tracking-tight mt-0.5">WhatsApp</span>
        </a>

        {/* 5. Pricing Link */}
        <Link
          href="/pricing"
          className="flex flex-col items-center justify-center py-1 px-2.5 rounded-full text-slate-600 hover:text-[#020C2B] transition-colors"
          aria-label="Pricing"
        >
          <Tag className="w-4 h-4" />
          <span className="text-[10px] font-bold tracking-tight">Pricing</span>
        </Link>
      </nav>
    </div>
  );
}
