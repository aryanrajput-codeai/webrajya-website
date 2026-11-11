export interface InvoicePlanConfig {
  productName: string;
  brandTitle: string;
  tagline: string;
  introductoryPrice: number;
  standardPrice: number;
  monthlyEquivalent: number;
  currency: string;
  currencySymbol: string;
  period: string;
  billingTerm: string;
  badge: string;
  savingsNote: string;
  taxNote: string;
  features: string[];
  ctaPrimary: { text: string; href: string };
  ctaSecondary: { text: string; href: string };
  termsNote: string;
}

export const INVOICE_PRICING: InvoicePlanConfig = {
  productName: "WebRajya Invoice",
  brandTitle: "WEBRAJYA INVOICE",
  tagline: "Smart billing and inventory management for Indian businesses.",
  introductoryPrice: 2499,
  standardPrice: 3999,
  monthlyEquivalent: 208,
  currency: "INR",
  currencySymbol: "₹",
  period: "/year",
  billingTerm: "Billed annually",
  badge: "Introductory Launch Offer",
  savingsNote: "Save over 37% with introductory annual billing",
  taxNote: "Applicable GST charged separately at checkout",
  features: [
    "Fast billing and invoicing",
    "Product and category management",
    "Barcode scanning and product search",
    "GST and non-GST billing options",
    "Customer management",
    "Payment and outstanding balance tracking",
    "Inventory management",
    "Purchase and supplier records",
    "Sales and stock reports",
    "Supported invoice printing",
    "Available offline-first workflows",
    "Supported backup and data export tools",
    "Software updates during the subscription period",
    "Customer support according to the published support policy"
  ],
  ctaPrimary: {
    text: "Get Started",
    href: "/demo?product=invoice&intent=get-started"
  },
  ctaSecondary: {
    text: "Book a Demo",
    href: "/demo?product=invoice"
  },
  termsNote: "Subscription period is 1 year with annual renewal. Supported devices include modern Windows, Mac, and web browsers."
};
