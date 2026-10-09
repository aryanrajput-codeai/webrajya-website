import React from "react";
import type { Metadata } from "next";
import { MyGarageHero } from "@/components/mygarage/MyGarageHero";
import { FleetManagementSection } from "@/components/mygarage/FleetManagementSection";
import { DocumentLockerSection } from "@/components/mygarage/DocumentLockerSection";
import { ServiceLedgerSection } from "@/components/mygarage/ServiceLedgerSection";
import { ExpenseAnalyticsSection } from "@/components/mygarage/ExpenseAnalyticsSection";
import { ExpiryAlertsSection } from "@/components/mygarage/ExpiryAlertsSection";
import { VahanChallanSection } from "@/components/mygarage/VahanChallanSection";
import { PdfQrExportSection } from "@/components/mygarage/PdfQrExportSection";
import { MyGarageTechStack } from "@/components/mygarage/MyGarageTechStack";
import { MyGarageFaqSection } from "@/components/mygarage/MyGarageFaqSection";
import { MyGarageFinalCta } from "@/components/mygarage/MyGarageFinalCta";

export const metadata: Metadata = {
  title: "MyGarage — Vehicle Management SaaS by WebRajya",
  description:
    "MyGarage is an all-in-one vehicle management SaaS built by WebRajya. Track RC, Insurance, PUC expiries, service logs, and expenses in one modern dashboard.",
  keywords: [
    "Vehicle Management System",
    "WebRajya",
    "Car Service Tracker",
    "Bike Document Locker",
    "PUC Expiry Alert",
    "Auto Maintenance SaaS"
  ],
  openGraph: {
    type: "website",
    url: "https://webrajya.com/mygarage",
    title: "MyGarage — Digital Vehicle Locker & Expense Tracker",
    description:
      "Track your cars and bikes, document expiries, maintenance history, and fuel costs with WebRajya's premium MyGarage SaaS application.",
    images: ["https://webrajya.com/assets/products/mygarage-banner.png"]
  }
};

export default function MyGaragePage() {
  return (
    <div className="w-full overflow-hidden bg-[#F8F3EB] text-[#020C2B] font-sans">
      {/* 1. HERO SECTION */}
      <MyGarageHero />

      {/* 2. FLEET MANAGEMENT */}
      <FleetManagementSection />

      {/* 3. DOCUMENT LOCKER */}
      <DocumentLockerSection />

      {/* 4. SERVICE LEDGER */}
      <ServiceLedgerSection />

      {/* 5. EXPENSE ANALYTICS & CSV */}
      <ExpenseAnalyticsSection />

      {/* 6. EXPIRY REMINDERS & ALERTS */}
      <ExpiryAlertsSection />

      {/* 7. VAHAN & CHALLAN API */}
      <VahanChallanSection />

      {/* 8. PDF & QR EXPORT */}
      <PdfQrExportSection />

      {/* 9. TECH STACK & ARCHITECTURE */}
      <MyGarageTechStack />

      {/* 10. FAQS */}
      <MyGarageFaqSection />

      {/* 11. FINAL CTA */}
      <MyGarageFinalCta />
    </div>
  );
}
