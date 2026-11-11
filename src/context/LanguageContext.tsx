"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "hi";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  isHindi: boolean;
  t: (key: string, defaultEn: string, hindiOverride?: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  toggleLanguage: () => {},
  setLanguage: () => {},
  isHindi: false,
  t: (_key, defaultEn) => defaultEn
});

const DICTIONARY: Record<string, { en: string; hi: string }> = {
  // CTAs & Buttons
  book_demo: {
    en: "Book Free Demo",
    hi: "Free demo book karein"
  },
  whatsapp_us: {
    en: "WhatsApp Us",
    hi: "WhatsApp par baat karein"
  },
  call_us: {
    en: "Call Us",
    hi: "Call karein"
  },
  start_trial: {
    en: "Start 3-Day Free Trial",
    hi: "3 din ka free trial shuru karein"
  },
  free_setup: {
    en: "Free Personal Setup in Nagpur",
    hi: "Nagpur me free personal setup"
  },
  explore_features: {
    en: "Explore Verified Features",
    hi: "Features dekhein"
  },
  see_pricing: {
    en: "View Transparent Pricing",
    hi: "Pricing dekhein"
  },
  // Trust Badges
  trial_trust: {
    en: "3-day free trial after live demo. Personal setup help.",
    hi: "Live demo ke baad 3 din ka free trial. Personal setup me poori madad."
  },
  december_offer: {
    en: "December Launch Offer",
    hi: "December Launch Offer"
  },
  limited_slots: {
    en: "Limited: first 50 customers",
    hi: "Limited: pehle 50 shop owners ke liye"
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("webrajya_lang") as Language;
      if (stored === "en" || stored === "hi") {
        setLanguageState(stored);
      }
    } catch {
      // Ignore localStorage access restrictions
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("webrajya_lang", lang);
    } catch {
      // Ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hi" : "en");
  };

  const t = (key: string, defaultEn: string, hindiOverride?: string): string => {
    if (language === "hi") {
      if (hindiOverride) return hindiOverride;
      if (DICTIONARY[key]) return DICTIONARY[key].hi;
    }
    return DICTIONARY[key]?.en || defaultEn;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        setLanguage,
        isHindi: language === "hi",
        t
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

