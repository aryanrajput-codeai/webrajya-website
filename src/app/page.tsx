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
import { FounderSection } from "@/components/sections/FounderSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Affordable Billing & Inventory Software for Indian Retailers | WebRajya",
  description:
    "Easy-to-use retail billing, barcode scanning, and inventory software for shops across India. Personal setup via video call, WhatsApp, or in-shop in Nagpur.",
  keywords: [
    "Billing Software India",
    "Retail Billing Software",
    "Shop Inventory Software India",
    "WebRajya Invoice",
    "WebRajya POS",
    "MyGarage SaaS",
    "Mobile Shop Software",
    "GST Billing India",
    "Billing Software Nagpur"
  ],
  alternates: {
    canonical: "https://webrajya.com",
  },
  openGraph: {
    title: "Affordable Billing & Inventory Software for Indian Retailers | WebRajya",
    description: "Start your 3-day free counter trial with personal setup support across India.",
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

      {/* 10. FOUNDER'S COMMITMENT & IN-SHOP SUPPORT NOTE */}
      <FounderSection />

      {/* 11. FINAL CONVERSION CTA */}
      <FinalCTA />
    </div>
  );
}
