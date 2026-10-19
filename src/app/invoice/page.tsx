import React from "react";
import type { Metadata } from "next";
import { InvoiceHero } from "@/components/invoice/InvoiceHero";
import { RetailerProblemsSection } from "@/components/invoice/RetailerProblemsSection";
import { KeyFeaturesSection } from "@/components/invoice/KeyFeaturesSection";
import { LocalFirstSection } from "@/components/invoice/LocalFirstSection";
import { BillingSpeedSection } from "@/components/invoice/BillingSpeedSection";
import { InventoryProfitSection } from "@/components/invoice/InventoryProfitSection";
import { QuotationsSection } from "@/components/invoice/QuotationsSection";
import { BarcodeSection } from "@/components/invoice/BarcodeSection";
import { DailyCashManagementSection } from "@/components/invoice/DailyCashManagementSection";
import { InvoicePricingSection } from "@/components/invoice/InvoicePricingSection";
import { WhyWebRajyaSection } from "@/components/invoice/WhyWebRajyaSection";
import { InvoiceFaqSection } from "@/components/invoice/InvoiceFaqSection";
import { InvoiceFinalCta } from "@/components/invoice/InvoiceFinalCta";

export const metadata: Metadata = {
  title: "WebRajya Invoice — Smart Billing Software for Indian Retailers",
  description: "Create bills faster, manage your inventory, track customer payments and stay in control of your business—all from one simple platform. Designed for retailers, stationery shops, and wholesalers.",
  keywords: [
    "WebRajya Invoice",
    "Retail Billing Software",
    "Stationery Shop Billing",
    "Barcode Billing Software",
    "GST Retail Billing",
    "Offline Retail POS",
    "Shop Inventory Management",
    "Customer Khata Software",
    "Indian Retail Billing"
  ],
  openGraph: {
    title: "WebRajya Invoice — Billing That Keeps Your Business Moving",
    description: "Create bills faster, manage inventory, track customer payments and stay in control with WebRajya Invoice.",
    url: "https://webrajya.com/invoice",
  },
};

export default function InvoicePage() {
  return (
    <div className="w-full overflow-hidden bg-white text-[#0F172A] font-sans">
      {/* 1. HERO SECTION & LIVE RETAIL COUNTER MOCKUP */}
      <InvoiceHero />

      {/* 2. RETAILER PROBLEM–SOLUTION MATRIX */}
      <RetailerProblemsSection />

      {/* 3. KEY FEATURES (6 CORE MODULES) */}
      <KeyFeaturesSection />

      {/* 4. LOCAL-FIRST TECHNOLOGY SECTION */}
      <LocalFirstSection />

      {/* 5. BILLING SPEED ("SCAN. ADD. BILL. PRINT.") */}
      <BillingSpeedSection />

      {/* 6. INVENTORY & PROFIT VISIBILITY */}
      <InventoryProfitSection />

      {/* 7. QUOTATIONS & ESTIMATES */}
      <QuotationsSection />

      {/* 8. BARCODE GENERATION & PRINTING */}
      <BarcodeSection />

      {/* 9. DAILY CASH MANAGEMENT & RECONCILIATION */}
      <DailyCashManagementSection />

      {/* 10. TRANSPARENT ANNUAL PRICING (₹2,499/YR) */}
      <InvoicePricingSection />

      {/* 11. WHY WEBRAJYA INVOICE COMPARISON */}
      <WhyWebRajyaSection />

      {/* 12. 10 FREQUENTLY ASKED QUESTIONS */}
      <InvoiceFaqSection />

      {/* 13. FINAL CONVERSION CTA */}
      <InvoiceFinalCta />
    </div>
  );
}
