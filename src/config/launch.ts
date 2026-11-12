/**
 * WebRajya Launch-State Configuration File
 * 
 * Central control panel for the WebRajya Invoice launch.
 * Synchronized with COMPANY_CONFIG for nationwide operations.
 */

import { COMPANY_CONFIG } from "./company";

export interface LaunchConfig {
  PAYMENTS_ENABLED: boolean;
  LEGAL_APPROVED: boolean;
  APP_LIVE: boolean;
  APP_PLAY_URL: string;
  APP_IOS_URL: string;

  // --- LAUNCH MARKETING & OFFERS ---
  OFFER_TITLE: string;
  OFFER_TEXT: string;
  OFFER_EXPIRY: string; // ISO date format YYYY-MM-DD
  OFFER_EXPIRY_DISPLAY: string; // Human-readable date
  EARLY_LIFETIME_SLOTS_TOTAL: number;
  EARLY_LIFETIME_SLOTS_REMAINING: number;

  // --- CONTACT & TARGET MARKET ---
  PHONE: string;
  PHONE_DISPLAY: string;
  WHATSAPP: string;
  EMAIL: string;
  TARGET_CITY: string;
  TARGET_STATE: string;
  HEAD_OFFICE_CITY: string;
  HEAD_OFFICE_STATE: string;
  NAGPUR_ADDRESS: string;
  OPERATING_HOURS: {
    weekdays: string;
    sunday: string;
  };

  // --- LEGAL & TAX NOTES (SHARED SINGLE SOURCES) ---
  GST_NOTE: string;
  REFUND_TEXT: string;

  // --- PAYMENT GATEWAY CONFIG ---
  PAYMENT_GATEWAY_URL: string;

  // --- CRM / WEBHOOK ENDPOINT ---
  CRM_WEBHOOK_URL: string;
  OWNER_NOTIFICATION_EMAIL: string;
}

export const LAUNCH_CONFIG: LaunchConfig = {
  // Launch state flags
  PAYMENTS_ENABLED: false,
  LEGAL_APPROVED: false,
  APP_LIVE: false,
  APP_PLAY_URL: "",
  APP_IOS_URL: "",

  // All-India Launch Offer
  OFFER_TITLE: "All-India Retail Launch Offer",
  OFFER_TEXT: "3-Din Ka Free Trial + 100% Free Personal Setup Support (Video Call, WhatsApp ya Nagpur In-Shop).",
  OFFER_EXPIRY: "2026-12-31",
  OFFER_EXPIRY_DISPLAY: "31 December 2026",
  EARLY_LIFETIME_SLOTS_TOTAL: 50,
  EARLY_LIFETIME_SLOTS_REMAINING: 36, // [TODO: Owner confirm real slot count remaining]

  // Contact details & Head Office
  PHONE: COMPANY_CONFIG.phoneRaw,
  PHONE_DISPLAY: COMPANY_CONFIG.phone,
  WHATSAPP: COMPANY_CONFIG.whatsappNumber,
  EMAIL: COMPANY_CONFIG.email,
  TARGET_CITY: "India",
  TARGET_STATE: "All India",
  HEAD_OFFICE_CITY: COMPANY_CONFIG.headOfficeCity,
  HEAD_OFFICE_STATE: COMPANY_CONFIG.headOfficeState,
  NAGPUR_ADDRESS: COMPANY_CONFIG.headOfficeAddress,
  OPERATING_HOURS: COMPANY_CONFIG.operatingHours,

  // Shared Tax & Refund statements
  GST_NOTE: COMPANY_CONFIG.gstNote,
  REFUND_TEXT: "Subscriptions and licenses are covered under our transparent Cancellation & Refund Policy.",

  // External endpoints
  PAYMENT_GATEWAY_URL: "[PAYMENT GATEWAY / LINK: To be enabled when PAYMENTS_ENABLED = true]",
  CRM_WEBHOOK_URL: process.env.CRM_WEBHOOK_URL || "/api/leads",
  OWNER_NOTIFICATION_EMAIL: "aaryanrajputofficial@gmail.com"
};
