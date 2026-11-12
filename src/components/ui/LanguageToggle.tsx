"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className = "" }: LanguageToggleProps) {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      type="button"
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all cursor-pointer ${
        language === "hi"
          ? "bg-[#E58145]/15 border-[#E58145] text-[#020C2B]"
          : "bg-white/90 border-slate-200 text-slate-700 hover:border-slate-300 shadow-2xs"
      } ${className}`}
      aria-label="Toggle language between Hinglish and Hindi"
      title="Bhasha Badlein / भाषा बदलें"
    >
      <Globe className="w-3.5 h-3.5 text-[#E58145]" />
      <span className="font-sans text-[11px] font-bold">
        {language === "en" ? "Hinglish | हिंदी" : "हिंदी | Hinglish"}
      </span>
    </button>
  );
}
