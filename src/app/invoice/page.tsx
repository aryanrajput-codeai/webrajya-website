import React from "react";
import type { Metadata } from "next";
import { InvoiceHero } from "@/components/invoice/InvoiceHero";
import { InvoiceCreationSection } from "@/components/invoice/InvoiceCreationSection";
import { ProductsServicesSection } from "@/components/invoice/ProductsServicesSection";
import { CustomerManagementSection } from "@/components/invoice/CustomerManagementSection";
import { PaymentTrackingSection } from "@/components/invoice/PaymentTrackingSection";
import { ReceivablesAndReportsSection } from "@/components/invoice/ReceivablesAndReportsSection";
import { PdfShareDashboardSection } from "@/components/invoice/PdfShareDashboardSection";
import { InvoiceFaqSection } from "@/components/invoice/InvoiceFaqSection";
import { InvoiceFinalCta } from "@/components/invoice/InvoiceFinalCta";

export const metadata: Metadata = {
  title: "WebRajya Invoice — Professional Invoicing Made Simple",
  description: "Create invoices, manage customers, track payments, export vector PDFs, and keep your business receivables organized from one simple platform.",
  keywords: ["WebRajya Invoice", "Business Invoicing Platform", "Invoice Generator", "Receivables Tracker", "Customer Billing Ledger", "PDF Invoice Share", "Payment Tracking Software"],
  openGraph: {
    title: "WebRajya Invoice — Create. Bill. Get Paid.",
    description: "Simple, professional invoicing for businesses that want to create invoices, manage customers, and track payments.",
    url: "https://webrajya.com/invoice",
  },
};

export default function InvoicePage() {
  return (
    <div className="w-full overflow-hidden bg-[#F8F3EB] text-[#020C2B] font-sans">
      {/* 1. HERO SECTION */}
      <InvoiceHero />

      {/* 2. INVOICE CREATION */}
      <InvoiceCreationSection />

      {/* 3. PRODUCTS & SERVICES */}
      <ProductsServicesSection />

      {/* 4. CUSTOMER MANAGEMENT */}
      <CustomerManagementSection />

      {/* 5 & 6. PAYMENT TRACKING & INVOICE HISTORY */}
      <PaymentTrackingSection />

      {/* 7 & 8. RECEIVABLES & BUSINESS REPORTS / DASHBOARD */}
      <ReceivablesAndReportsSection />

      {/* 9 & 10. PDF / PRINT / SHARE & SETTINGS */}
      <PdfShareDashboardSection />

      {/* INVOICE FAQ */}
      <InvoiceFaqSection />

      {/* FINAL CTA */}
      <InvoiceFinalCta />
    </div>
  );
}
