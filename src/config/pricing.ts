/**
 * WebRajya Centralized Pricing Configuration
 * 
 * REAL PRICING (all in INR):
 * WebRajya Invoice:
 * - Monthly: ₹599 per month
 * - Annual: ₹5,999 per year ("Most Popular / Recommended", about ₹500/month; saves ₹1,189 vs paying monthly)
 * - Early Lifetime: ₹19,999 one-time payment (Limited: first 50 customers, dynamic remaining counter)
 * - Regular Lifetime: ₹25,999 one-time payment (standard price after first 50 slots)
 * 
 * WebRajya POS:
 * - Monthly: ₹599 per month
 * - Annual: ₹5,999 per year
 * - Lifetime: ₹25,999 one-time payment
 * 
 * MyGarage:
 * - Contact us / Coming soon (no price defined yet)
 */

import { LAUNCH_CONFIG } from "./launch";
import { COMPANY_CONFIG } from "./company";

export type PlanBillingCycle = "monthly" | "yearly" | "early_lifetime" | "lifetime";

export interface PlanPricingItem {
  id: PlanBillingCycle;
  name: string;
  price: number;
  formattedPrice: string;
  regularPrice?: number;
  formattedRegularPrice?: string;
  billingPeriod: string;
  billingCadence: string;
  effectiveMonthlyCost: string;
  savingsText?: string;
  badgeText?: string;
  isPopular?: boolean;
  isEarlyBird?: boolean;
  tagline: string;
  features: string[];
  ctaLabel: string;
  ctaHref: (productId: string) => string;
  lifetimeNote?: string;
}

export interface ProductPricingConfig {
  id: "invoice" | "pos" | "mygarage";
  name: string;
  brandTitle: string;
  tagline: string;
  description: string;
  status: "active" | "coming_soon";
  plans?: PlanPricingItem[];
  comingSoonNote?: string;
}

/**
 * Early Lifetime slot configuration driven by single source of truth.
 * [TODO: Owner confirm exact number of slots claimed to date]
 */
export const LIFETIME_SLOT_CONFIG = {
  totalSlots: 50,
  slotsTaken: 14, // [TODO: Owner confirm real slot count]
  isSlotLimitReal: true, // Set to false to hide badge if slot limit is promotional
  get slotsRemaining() {
    return Math.max(0, this.totalSlots - this.slotsTaken);
  }
};

export const LIFETIME_INCLUSION_STATEMENT =
  "Includes software licence, basic support, bug fixes and maintenance. Major upgrades may be charged separately as defined in the Lifetime Terms.";

export const FEATURE_INCLUSION_ASSUMPTION_NOTE =
  "All core product features (billing, inventory, khata, and reports) are fully included across Monthly, Annual, and Lifetime plans. Only the billing period, savings, and license duration differ.";

export const WHAT_LIFETIME_INCLUDES = {
  title: "What Lifetime Licence Includes",
  description:
    "A one-time payment giving your business perpetual operational rights without recurring monthly or yearly subscription fees.",
  points: [
    {
      title: "Perpetual Counter Licence",
      description: "One license covers 1 billing counter / device with full inventory & khata features."
    },
    {
      title: "Standard Updates Included",
      description: "Continuous bug fixes, security patches, and minor point updates at zero additional charge."
    },
    {
      title: "Support Coverage",
      description: "Priority setup support via video call or WhatsApp (plus in-shop visit in Nagpur) included during onboarding."
    },
    {
      title: "Data Ownership & Portability",
      description: "All invoice data stays on your device with local backups and zero-lock-in Excel export anytime."
    },
    {
      title: "Major Version Upgrades",
      description: "Future major architectural upgrades may be offered at a discounted upgrade price as outlined in our Lifetime Licence Terms."
    }
  ],
  termsHref: "/lifetime-terms",
  termsLabel: "View Complete Lifetime Licence Terms"
};

// Common verified features for WebRajya Invoice (softened honest claims)
export const INVOICE_FEATURES = [
  "Fast counter billing & GST/non-GST invoicing",
  "Product catalog & quick barcode scanner search",
  "Live inventory management with low-stock alerts",
  "Customer Khata ledger & credit balance tracking",
  "Purchase & supplier management records",
  "Daily sales, tax, and revenue register reports",
  "Works offline: print bills and store transactions without internet",
  "Thermal receipt (58mm/80mm) & A4 invoice printing"
];

// Common verified features for WebRajya POS (softened honest claims)
export const POS_FEATURES = [
  "Rapid keyboard cashier billing with instant hotkeys",
  "Kitchen Order Ticket (KOT) thermal routing",
  "Visual floor plan & live table status management",
  "Recipe costing & ingredient-level deduction",
  "Works offline: local printing continues during internet drops",
  "Daily sales, taxes & payment mode analytics",
  "Multi-counter & waiter tablet connectivity",
  "Standard thermal printer & cash drawer integration"
];

function getPlanCta(planId: string, productId: string) {
  if (LAUNCH_CONFIG.PAYMENTS_ENABLED) {
    return `${LAUNCH_CONFIG.PAYMENT_GATEWAY_URL}?product=${productId}&plan=${planId}`;
  }
  return `/demo?product=${productId}&plan=${planId}`;
}

export const INVOICE_PLANS: PlanPricingItem[] = [
  {
    id: "monthly",
    name: "Monthly",
    price: 599,
    formattedPrice: "₹599",
    billingPeriod: "/ month",
    billingCadence: "Billed monthly",
    effectiveMonthlyCost: "Complete flexibility",
    isPopular: false,
    tagline: "Pay as you go with complete monthly flexibility.",
    features: [
      "Full billing, inventory & khata features",
      "Works offline on local device",
      "Standard phone & WhatsApp support (Mon-Sat)",
      "Continuous bug fixes & maintenance updates",
      "Monthly data backups"
    ],
    ctaLabel: LAUNCH_CONFIG.PAYMENTS_ENABLED ? "Subscribe Now" : "Book Free Demo",
    ctaHref: (prodId) => getPlanCta("monthly", prodId)
  },
  {
    id: "yearly",
    name: "Annual",
    price: 5999,
    formattedPrice: "₹5,999",
    regularPrice: 7188,
    formattedRegularPrice: "₹7,188",
    billingPeriod: "/ year",
    billingCadence: "Billed annually (~₹500 / month)",
    effectiveMonthlyCost: "About ₹500 / month",
    savingsText: "Save ₹1,189 vs paying monthly (roughly 17% savings)",
    badgeText: "Most Popular / Recommended",
    isPopular: true,
    tagline: "Our most popular plan for retail shops. Lowest annual cost.",
    features: [
      "All features in Monthly plan included",
      "Saves ₹1,189 compared to monthly billing",
      "Priority WhatsApp & remote desktop support",
      "3-day view-only grace period on renewal",
      "Free initial catalog import & setup assistance"
    ],
    ctaLabel: LAUNCH_CONFIG.PAYMENTS_ENABLED ? "Subscribe Annually" : "Book Free Demo",
    ctaHref: (prodId) => getPlanCta("yearly", prodId)
  },
  {
    id: "early_lifetime",
    name: "Early Lifetime",
    price: 19999,
    formattedPrice: "₹19,999",
    regularPrice: 25999,
    formattedRegularPrice: "₹25,999",
    billingPeriod: "one-time payment",
    billingCadence: "One-time investment",
    effectiveMonthlyCost: "Pay once, use forever",
    savingsText: "Save ₹6,000 off regular lifetime price",
    badgeText: `Limited • ${LIFETIME_SLOT_CONFIG.slotsRemaining} Slots`,
    isEarlyBird: true,
    tagline: "Special launch price for our first 50 customers across India.",
    features: [
      "Perpetual software licence (never pay monthly renewal fees)",
      "Zero monthly or yearly subscription charges",
      "Basic support, bug fixes and maintenance included",
      "Free setup assistance by video call, WhatsApp, or in-shop (Nagpur)",
      "Regular price ₹25,999 after first 50 customers are claimed"
    ],
    lifetimeNote: LIFETIME_INCLUSION_STATEMENT,
    ctaLabel: LAUNCH_CONFIG.PAYMENTS_ENABLED ? "Claim Early Lifetime" : "Book Free Demo",
    ctaHref: (prodId) => getPlanCta("early_lifetime", prodId)
  },
  {
    id: "lifetime",
    name: "Regular Lifetime",
    price: 25999,
    formattedPrice: "₹25,999",
    billingPeriod: "one-time payment",
    billingCadence: "One-time investment",
    effectiveMonthlyCost: "Standard perpetual license",
    savingsText: "Standard one-time license price",
    badgeText: "Standard Lifetime",
    isPopular: false,
    tagline: "Perpetual license for long-term operational certainty.",
    features: [
      "Perpetual software licence",
      "Zero recurring renewal fees",
      "Basic support, bug fixes and maintenance included",
      "Data export and local backup utilities"
    ],
    lifetimeNote: LIFETIME_INCLUSION_STATEMENT,
    ctaLabel: LAUNCH_CONFIG.PAYMENTS_ENABLED ? "Purchase License" : "Book Free Demo",
    ctaHref: (prodId) => getPlanCta("lifetime", prodId)
  }
];

export const POS_PLANS: PlanPricingItem[] = [
  {
    id: "monthly",
    name: "Monthly",
    price: 599,
    formattedPrice: "₹599",
    billingPeriod: "/ month",
    billingCadence: "Billed monthly",
    effectiveMonthlyCost: "Complete flexibility",
    isPopular: false,
    tagline: "Pay as you go with restaurant billing flexibility.",
    features: POS_FEATURES,
    ctaLabel: LAUNCH_CONFIG.PAYMENTS_ENABLED ? "Subscribe Now" : "Book Free Demo",
    ctaHref: (prodId) => getPlanCta("monthly", prodId)
  },
  {
    id: "yearly",
    name: "Annual",
    price: 5999,
    formattedPrice: "₹5,999",
    billingPeriod: "/ year",
    billingCadence: "Billed annually (~₹500 / month)",
    effectiveMonthlyCost: "About ₹500 / month",
    savingsText: "Save ₹1,189 vs paying monthly",
    badgeText: "Most Popular / Recommended",
    isPopular: true,
    tagline: "Recommended for restaurants & cafes.",
    features: POS_FEATURES,
    ctaLabel: LAUNCH_CONFIG.PAYMENTS_ENABLED ? "Subscribe Annually" : "Book Free Demo",
    ctaHref: (prodId) => getPlanCta("yearly", prodId)
  },
  {
    id: "lifetime",
    name: "Lifetime",
    price: 25999,
    formattedPrice: "₹25,999",
    billingPeriod: "one-time payment",
    billingCadence: "One-time investment",
    effectiveMonthlyCost: "Pay once, use forever",
    savingsText: "Zero recurring subscription fees",
    badgeText: "Pay once, use forever",
    isPopular: false,
    tagline: "Perpetual restaurant billing license.",
    features: [
      ...POS_FEATURES,
      "Perpetual software licence (no monthly renewals)"
    ],
    lifetimeNote: LIFETIME_INCLUSION_STATEMENT,
    ctaLabel: LAUNCH_CONFIG.PAYMENTS_ENABLED ? "Purchase License" : "Book Free Demo",
    ctaHref: (prodId) => getPlanCta("lifetime", prodId)
  }
];

export const PRICING_CONFIG: Record<"invoice" | "pos" | "mygarage", ProductPricingConfig> = {
  invoice: {
    id: "invoice",
    name: "WebRajya Invoice",
    brandTitle: "WEBRAJYA INVOICE",
    tagline: "Affordable, easy-to-use billing and inventory software with personal customer support.",
    description: "Built for mobile, electronics, clothing, footwear, stationery, and furniture retail shops across India.",
    status: "active",
    plans: INVOICE_PLANS
  },
  pos: {
    id: "pos",
    name: "WebRajya POS",
    brandTitle: "WEBRAJYA POS",
    tagline: "Fast restaurant POS billing with instant KOT and table management.",
    description: "Built for cafes, quick-service counters, fine dine, bars, and cloud kitchens across India.",
    status: "active",
    plans: POS_PLANS
  },
  mygarage: {
    id: "mygarage",
    name: "MyGarage SaaS",
    brandTitle: "MYGARAGE SAAS",
    tagline: "All-in-one digital locker & expense tracker for vehicle owners.",
    description: "Track RC, Insurance, PUC expiries, service logs, and maintenance costs.",
    status: "coming_soon",
    comingSoonNote: "Pricing coming soon. Contact our team for early access and pilot onboarding."
  }
};

/**
 * Backward compatibility alias for any remaining references
 */
export const INVOICE_PRICING = {
  productName: PRICING_CONFIG.invoice.name,
  brandTitle: PRICING_CONFIG.invoice.brandTitle,
  tagline: PRICING_CONFIG.invoice.tagline,
  introductoryPrice: 5999,
  standardPrice: 7188,
  monthlyEquivalent: 500,
  currency: "INR",
  currencySymbol: "₹",
  period: "/year",
  billingTerm: "Billed annually",
  badge: "Most Popular / Recommended",
  savingsNote: "Save ₹1,189 vs paying monthly (roughly 17% savings)",
  features: INVOICE_FEATURES,
  ctaPrimary: {
    text: "Book Free Demo",
    href: "/demo?product=invoice&plan=yearly"
  },
  ctaSecondary: {
    text: "View Pricing",
    href: "/pricing?product=invoice"
  },
  termsNote: LIFETIME_INCLUSION_STATEMENT
};
