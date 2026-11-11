import React from "react";
import type { Metadata } from "next";
import { NagpurLaunchHero } from "@/components/sections/NagpurLaunchHero";
import { CustomerMarquee } from "@/components/sections/CustomerMarquee";
import { ProblemToSolutionStrip } from "@/components/sections/ProblemToSolutionStrip";
import { ShopIndustryTiles } from "@/components/sections/ShopIndustryTiles";
import { FourStepFlow } from "@/components/sections/FourStepFlow";
import { HomepagePricingTeaser } from "@/components/sections/HomepagePricingTeaser";
import { MobileAppSection } from "@/components/sections/MobileAppSection";
import { NagpurHomeFaq } from "@/components/sections/NagpurHomeFaq";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Billing & Inventory Software in Nagpur | WebRajya Invoice",
  description:
    "Affordable, easy-to-use retail billing and stock software with personal customer support in Nagpur. 3-day free trial after live demo for mobile, cloth, footwear, and stationery shops.",
  keywords: [
    "Billing Software Nagpur",
    "Retail Billing Nagpur",
    "Shop Inventory Software Nagpur",
    "WebRajya Invoice",
    "Mobile Shop Software Nagpur",
    "GST Billing Nagpur"
  ],
  openGraph: {
    title: "Billing & Inventory Software in Nagpur | WebRajya Invoice",
    description: "Start your 3-day free trial with personal setup support in Nagpur, Maharashtra.",
    url: "https://webrajya.com",
    siteName: "WebRajya",
    locale: "en_IN",
    type: "website"
  }
};

export default function HomePage() {
  return (
    <div className="w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <NagpurLaunchHero />

      {/* 2. VERIFIED CUSTOMERS PROOF MARQUEE */}
      <CustomerMarquee />

      {/* 4. PROBLEM TO SOLUTION STRIP */}
      <ProblemToSolutionStrip />

      {/* 5. BUILT FOR YOUR SHOP TILES (6 INDUSTRY PAGES) */}
      <ShopIndustryTiles />

      {/* 6. 4-STEP FLOW: DEMO → 3-DAY TRIAL → SETUP → START BILLING */}
      <FourStepFlow />

      {/* 7. FAIR & TRANSPARENT PRICING TEASER */}
      <HomepagePricingTeaser />

      {/* 8. MOBILE APP SECTION (GOVERNED BY APP_LIVE FLAG) */}
      <MobileAppSection />

      {/* 9. FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
      <NagpurHomeFaq />

      {/* 10. FINAL CONVERSION CTA */}
      <FinalCTA />
    </div>
  );
}
