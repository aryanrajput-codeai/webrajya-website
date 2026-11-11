/**
 * WebRajya Launch-State Configuration File
 * 
 * Central control panel for the WebRajya Invoice launch in Nagpur, Maharashtra.
 * All flags, marketing copy, contact numbers, and legal statuses can be edited here
 * without modifying UI components or business logic.
 */

export interface LaunchConfig {
  // --- LAUNCH FLAGS ---
  /**
   * While false: No "Buy now", "Pay" or checkout buttons are shown.
   * Plan CTA buttons say "Book Free Demo" and lead to /demo.
   * When true: Enables checkout/payment links.
   */
  PAYMENTS_ENABLED: boolean;

  /**
   * While false: Every legal page shows a "Draft - pending review" banner,
   * is set to noindex, and is excluded from sitemap.xml.
   * When true: Removes draft banner and enables search indexing.
   */
  LEGAL_APPROVED: boolean;

  /**
   * While false: Shows "Mobile app coming soon" section with notify-me form
   * (source=app_waitlist) and hides App Store / Play Store buttons.
   * When true: Shows Google Play / App Store buttons, screenshots and QR code.
   */
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

  // --- CONTACT & TARGET MARKET (NAGPUR) ---
  PHONE: string;
  PHONE_DISPLAY: string;
  WHATSAPP: string; // International digits without + or spaces
  EMAIL: string;
  TARGET_CITY: string;
  TARGET_STATE: string;
  NAGPUR_ADDRESS: string;
  OPERATING_HOURS: {
    weekdays: string;
    sunday: string;
  };

  // --- LEGAL & TAX NOTES (SHARED SINGLE SOURCES) ---
  /**
   * GST Note: Default empty string.
   * Rendered directly under prices via <GstNote />.
   * CA will confirm if prices are inclusive or exclusive before setting text here.
   */
  GST_NOTE: string;

  /**
   * Refund Note: Shared string linking to /refund.
   * No blanket "no refund" claims allowed.
   */
  REFUND_TEXT: string;

  // --- PAYMENT GATEWAY CONFIG (ACTIVE WHEN PAYMENTS_ENABLED = true) ---
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

  // December Launch Offer for Nagpur
  OFFER_TITLE: "Nagpur Retail Launch Offer",
  OFFER_TEXT: "Get a 3-Day Free In-Shop Trial + 100% Free Personal Setup Assistance by our local Nagpur onboarding team.",
  OFFER_EXPIRY: "2026-12-31",
  OFFER_EXPIRY_DISPLAY: "31 December 2026",
  EARLY_LIFETIME_SLOTS_TOTAL: 50,
  EARLY_LIFETIME_SLOTS_REMAINING: 50,

  // Contact details & Nagpur local presence
  PHONE: "+919876543210",
  PHONE_DISPLAY: "+91 98765 43210",
  WHATSAPP: "919876543210",
  EMAIL: "support@webrajya.com",
  TARGET_CITY: "Nagpur",
  TARGET_STATE: "Maharashtra",
  NAGPUR_ADDRESS: "[ADDRESS: Dharampeth / Sitabuldi, Nagpur, Maharashtra 440010 - To be confirmed]",
  OPERATING_HOURS: {
    weekdays: "Monday – Saturday: 9:00 AM – 8:00 PM IST",
    sunday: "Sunday: Emergency support via Phone & WhatsApp"
  },

  // Shared Tax & Refund statements
  GST_NOTE: "", // Default empty string per strict instructions; populated via CA confirmation
  REFUND_TEXT: "Subscriptions and licenses are covered under our transparent Cancellation & Refund Policy.",

  // External endpoints
  PAYMENT_GATEWAY_URL: "[PAYMENT GATEWAY / LINK: To be enabled when PAYMENTS_ENABLED = true]",
  CRM_WEBHOOK_URL: process.env.CRM_WEBHOOK_URL || "/api/leads",
  OWNER_NOTIFICATION_EMAIL: "aaryanrajputofficial@gmail.com"
};
