import { HINGLISH_TRANSLATIONS } from "./locales/hinglish";
import { HINDI_TRANSLATIONS } from "./locales/hindi";

export type Language = "en" | "hi";

export const TRANSLATIONS = {
  en: HINGLISH_TRANSLATIONS,
  hi: HINDI_TRANSLATIONS
};

export type TranslationsType = typeof HINGLISH_TRANSLATIONS;

export { HINGLISH_TRANSLATIONS, HINDI_TRANSLATIONS };

