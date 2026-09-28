import React from "react";
import type { Metadata } from "next";
import { PosHero } from "@/components/pos/PosHero";
import { RestaurantWorkflow } from "@/components/pos/RestaurantWorkflow";
import { HotkeyCheatSheetSection } from "@/components/pos/HotkeyCheatSheetSection";
import { BillingAndPosSection } from "@/components/pos/BillingAndPosSection";
import { MenuManagementSection } from "@/components/pos/MenuManagementSection";
import { TableManagementSection } from "@/components/pos/TableManagementSection";
import { KitchenKotSection } from "@/components/pos/KitchenKotSection";
import { InventoryCostingSection } from "@/components/pos/InventoryCostingSection";
import { PaymentsAndQrSection } from "@/components/pos/PaymentsAndQrSection";
import { ReportsDashboardSection } from "@/components/pos/ReportsDashboardSection";
import { HardwareReliabilitySection } from "@/components/pos/HardwareReliabilitySection";
import { PosComparisonSection } from "@/components/pos/PosComparisonSection";
import { PosTestimonialsSection } from "@/components/pos/PosTestimonialsSection";
import { RestaurantTypesSection } from "@/components/pos/RestaurantTypesSection";
import { WhyWebRajyaPos } from "@/components/pos/WhyWebRajyaPos";
import { PosFaqSection } from "@/components/pos/PosFaqSection";
import { PosDemoCta } from "@/components/pos/PosDemoCta";

export const metadata: Metadata = {
  title: "WebRajya POS — Zero-Lag Restaurant POS Built for Speed",
  description: "Process orders, dispatch KOTs, and settle bills in under 3 seconds. 100% keyboard control for Mac and Windows.",
  keywords: ["WebRajya POS", "Zero-Lag POS", "Restaurant Hotkeys", "KOT System", "Table Management Software", "Fastest Restaurant Billing"],
  openGraph: {
    title: "WebRajya POS — The Zero-Lag Restaurant POS",
    description: "Sub-3 second cashier billing, instant hotkeys, and 100% accurate daily revenue tracking.",
    url: "https://webrajya.com/pos",
  },
};

export default function PosPage() {
  return (
    <div className="w-full overflow-hidden bg-[#F8F3EB] text-[#020C2B] font-sans">
      {/* 1. HERO SECTION */}
      <PosHero />

      {/* 2. INTERACTIVE HOTKEY CHEAT SHEET & SIMULATOR */}
      <HotkeyCheatSheetSection />

      {/* 3. RESTAURANT WORKFLOW */}
      <RestaurantWorkflow />

      {/* 4. POS & BILLING */}
      <BillingAndPosSection />

      {/* 5. MENU MANAGEMENT */}
      <MenuManagementSection />

      {/* 6. TABLE & FLOOR MANAGEMENT */}
      <TableManagementSection />

      {/* 7. KOT & KITCHEN */}
      <KitchenKotSection />

      {/* 8. INVENTORY & RECIPES / FOOD COSTING */}
      <InventoryCostingSection />

      {/* 9. PAYMENTS & QR ORDERING */}
      <PaymentsAndQrSection />

      {/* 10. REPORTS & ANALYTICS / LOCAL TIMEZONE REVENUE */}
      <ReportsDashboardSection />

      {/* 11. HEAD-TO-HEAD COMPARISON: TRADITIONAL VS WEBRAJYA POS */}
      <PosComparisonSection />

      {/* 12. CUSTOMER TESTIMONIALS & PROVEN METRICS */}
      <PosTestimonialsSection />

      {/* 13. THERMAL PRINTING & CONNECTIVITY / RELIABILITY */}
      <HardwareReliabilitySection />

      {/* 14. RESTAURANT TYPES */}
      <RestaurantTypesSection />

      {/* 15. WHY WEBRAJYA POS */}
      <WhyWebRajyaPos />

      {/* 16. FAQ */}
      <PosFaqSection />

      {/* 17. BOOK A DEMO / FINAL CTA */}
      <PosDemoCta />
    </div>
  );
}
