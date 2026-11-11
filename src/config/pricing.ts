/**
 * WebRajya Centralized Pricing Configuration
 * 
 * REAL PRICING (all in INR):
 * WebRajya Invoice and WebRajya POS each have the SAME three plans, sold per product:
 * - Monthly: ₹599 per month
 * - Yearly: ₹5,999 per year (about ₹500/month; saves ₹1,189 vs paying monthly, roughly 17%)
 * - Lifetime: ₹25,999 one-time payment
 * 
 * MyGarage has NO price defined yet: displays "Contact us" / "Coming soon" with a TODO.
 * 
 * OPEN ITEMS / ASSUMPTIONS:
 * - GST: Whether prices include or exclude GST.
 *   TODO: Confirm whether prices are inclusive or exclusive of GST.
 * - Lifetime plan: What it includes (updates duration, support SLA, allowed devices/counters/outlets).
 *   TODO: Clarify exact Lifetime plan terms, device limits, and updates policy.
 * - Feature differences: All core software features are included across all plans; only billing period differs.
 */

export type PlanBillingCycle = "monthly" | "yearly" | "lifetime";

export interface PlanPricingItem {
  id: PlanBillingCycle;
  name: string;
  price: number;
  formattedPrice: string;
  billingPeriod: string;
  billingCadence: string;
  effectiveMonthlyCost: string;
  savingsText?: string;
  badgeText?: string;
  isPopular?: boolean;
  tagline: string;
  features: string[];
  ctaLabel: string;
  ctaHref: (productId: string) => string;
  lifetimeDetails?: {
    licenseType: string;
    updateDurationTodo: string;
    supportSlaTodo: string;
    deviceLimitTodo: string;
  };
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

export interface GstPricingConfig {
  isInclusive: boolean;
  displayNote: string;
  todoNotice: string;
}

/**
 * GST Configuration
 * TODO: Confirm whether prices are inclusive or exclusive of GST.
 * Currently set to exclusive of GST with explicit disclosure.
 */
export const GST_CONFIG: GstPricingConfig = {
  isInclusive: false,
  displayNote: "Prices are exclusive of GST. Applicable Goods & Services Tax is calculated at checkout.",
  todoNotice: "TODO: Confirm whether prices are inclusive or exclusive of GST."
};

/**
 * Feature Assumption Note:
 * All core software features are included across all plans.
 * Only the billing period and license duration differ.
 */
export const FEATURE_INCLUSION_ASSUMPTION_NOTE =
  "All core product features and capabilities are fully included across Monthly, Yearly, and Lifetime plans. Only the billing period, savings, and license duration differ.";

/**
 * Lifetime Plan Clarification Placeholders
 */
export const LIFETIME_PLAN_SPECS = {
  licenseTitle: "Perpetual Software License",
  description: "Pay once, use forever. No recurring monthly or yearly subscription fees.",
  updateDurationTodo: "TODO: Clarify duration of software updates included (e.g. 1 year of updates vs lifetime updates)",
  supportSlaTodo: "TODO: Clarify ongoing customer support SLA and duration",
  deviceLimitTodo: "TODO: Confirm number of devices, counters, or outlets permitted per lifetime license"
};

// Common features for WebRajya Invoice
const INVOICE_FEATURES = [
  "Fast counter billing & GST/non-GST invoicing",
  "Product catalog & barcode scanner integration",
  "Inventory management with low-stock alerts",
  "Customer Khata ledger & payment tracking",
  "Purchase & vendor management records",
  "Daily sales, tax, and revenue reports",
  "Offline-first resilience with local storage",
  "Thermal receipt (58mm/80mm) & A4 invoice printing"
];

// Common features for WebRajya POS
const POS_FEATURES = [
  "Sub-3-second cashier billing & instant hotkeys",
  "Kitchen Order Ticket (KOT) thermal routing",
  "Visual floor plan & live table status management",
  "Recipe costing & ingredient-level tracking",
  "Offline local network resilience (bills print without internet)",
  "Daily sales, taxes & payment mode analytics",
  "Multi-counter & waiter tablet connectivity",
  "Standard thermal printer & cash drawer integration"
];

function createPlansForProduct(
  productId: "invoice" | "pos",
  features: string[]
): PlanPricingItem[] {
  return [
    {
      id: "monthly",
      name: "Monthly",
      price: 599,
      formattedPrice: "₹599",
      billingPeriod: "/ month",
      billingCadence: "Billed monthly",
      effectiveMonthlyCost: "₹599 / month",
      savingsText: undefined,
      badgeText: undefined,
      isPopular: false,
      tagline: "Pay as you go with complete flexibility.",
      features: [...features],
      ctaLabel: "Book a Free Demo",
      ctaHref: (prodId) => `/demo?product=${prodId}&plan=monthly`
    },
    {
      id: "yearly",
      name: "Yearly",
      price: 5999,
      formattedPrice: "₹5,999",
      billingPeriod: "/ year",
      billingCadence: "Billed annually",
      effectiveMonthlyCost: "About ₹500 / month",
      savingsText: "Save ₹1,189 vs paying monthly (roughly 17% savings)",
      badgeText: "Best Value",
      isPopular: true,
      tagline: "Our most popular plan for established operations.",
      features: [...features],
      ctaLabel: "Book a Free Demo",
      ctaHref: (prodId) => `/demo?product=${prodId}&plan=yearly`
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
      tagline: "Perpetual license for long-term peace of mind.",
      features: [
        ...features,
        "Perpetual software license (no recurring subscription)",
        "Zero monthly or annual software renewal fees"
      ],
      ctaLabel: "Book a Free Demo",
      ctaHref: (prodId) => `/demo?product=${prodId}&plan=lifetime`,
      lifetimeDetails: {
        licenseType: LIFETIME_PLAN_SPECS.licenseTitle,
        updateDurationTodo: LIFETIME_PLAN_SPECS.updateDurationTodo,
        supportSlaTodo: LIFETIME_PLAN_SPECS.supportSlaTodo,
        deviceLimitTodo: LIFETIME_PLAN_SPECS.deviceLimitTodo
      }
    }
  ];
}

export const PRICING_CONFIG: Record<"invoice" | "pos" | "mygarage", ProductPricingConfig> = {
  invoice: {
    id: "invoice",
    name: "WebRajya Invoice",
    brandTitle: "WEBRAJYA INVOICE",
    tagline: "Smart retail billing, inventory & customer khata for Indian businesses.",
    description: "Built for stationery shops, retail stores, supermarkets, and wholesale traders.",
    status: "active",
    plans: createPlansForProduct("invoice", INVOICE_FEATURES)
  },
  pos: {
    id: "pos",
    name: "WebRajya POS",
    brandTitle: "WEBRAJYA POS",
    tagline: "Zero-lag restaurant POS billing with instant KOT and table management.",
    description: "Built for cafes, quick-service counters, fine dine, bars, and cloud kitchens.",
    status: "active",
    plans: createPlansForProduct("pos", POS_FEATURES)
  },
  mygarage: {
    id: "mygarage",
    name: "MyGarage SaaS",
    brandTitle: "MYGARAGE SAAS",
    tagline: "All-in-one digital locker & expense tracker for vehicle owners.",
    description: "Track RC, Insurance, PUC expiries, service logs, and maintenance costs.",
    status: "coming_soon",
    comingSoonNote: "Pricing coming soon. Contact our team for early access and pilot onboarding."
    // TODO: Define official pricing for MyGarage SaaS when commercial tier is launched.
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
  badge: "Best Value",
  savingsNote: "Save ₹1,189 vs paying monthly (roughly 17% savings)",
  taxNote: GST_CONFIG.displayNote,
  features: INVOICE_FEATURES,
  ctaPrimary: {
    text: "Book a Free Demo",
    href: "/demo?product=invoice&plan=yearly"
  },
  ctaSecondary: {
    text: "View All Plans",
    href: "/pricing?product=invoice"
  },
  termsNote: "Applicable for 1 active business license. Software updates and support provided per active plan."
};
