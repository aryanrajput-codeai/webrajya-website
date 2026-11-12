"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { TRANSLATIONS, Language, TranslationsType } from "@/i18n";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  isHindi: boolean;
  strings: TranslationsType;
  t: (key: string, defaultEn?: string, hindiOverride?: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  toggleLanguage: () => {},
  setLanguage: () => {},
  isHindi: false,
  strings: TRANSLATIONS.en,
  t: (_key, defaultEn = "") => defaultEn
});

// Helper to look up nested dot notation in translations object, e.g. "hero.headline"
function getNestedValue(obj: Record<string, unknown>, path: string): string | undefined {
  const parts = path.split(".");
  let current: unknown = obj;
  for (const part of parts) {
    if (current && typeof current === "object" && part in (current as Record<string, unknown>)) {
      current = (current as Record<string, unknown>)[part];
    } else {
      return undefined;
    }
  }
  return typeof current === "string" ? current : undefined;
}

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

  const currentStrings = TRANSLATIONS[language] || TRANSLATIONS.en;

  const t = (key: string, defaultEn = "", hindiOverride?: string): string => {
    if (language === "hi" && hindiOverride) {
      return hindiOverride;
    }

    const value = getNestedValue(currentStrings as unknown as Record<string, unknown>, key);
    if (value) return value;

    // Fallback to English/Hinglish
    const fallbackValue = getNestedValue(TRANSLATIONS.en as unknown as Record<string, unknown>, key);
    return fallbackValue || defaultEn;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        setLanguage,
        isHindi: language === "hi",
        strings: currentStrings,
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
