import React from "react";
import { ProductGateway } from "@/components/sections/ProductGateway";
import { CustomerMarquee } from "@/components/sections/CustomerMarquee";
import { WebRajyaVision } from "@/components/sections/WebRajyaVision";
import { HowWebRajyaWorks } from "@/components/sections/HowWebRajyaWorks";
import { RealWorldUseCases } from "@/components/sections/RealWorldUseCases";
import { BusinessIntelligence } from "@/components/sections/BusinessIntelligence";
import { WhyWebRajya } from "@/components/sections/WhyWebRajya";
import { ProductEcosystem } from "@/components/sections/ProductEcosystem";
import { HomepagePricingTeaser } from "@/components/sections/HomepagePricingTeaser";
import { CustomerReviewsSection } from "@/components/reviews/CustomerReviewsSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function GatewayPage() {
  return (
    <div className="w-full overflow-hidden">
      {/* SECTION 1 — PRODUCT GATEWAY */}
      <ProductGateway />

      {/* SECTION 1.5 — TRUST & VERIFIED CUSTOMERS MARQUEE */}
      <CustomerMarquee />

      {/* SECTION 2 — WEBRAJYA VISION */}
      <WebRajyaVision />

      {/* SECTION 3 — HOW WEBRAJYA WORKS */}
      <HowWebRajyaWorks />

      {/* SECTION 4 — REAL-WORLD USE CASES */}
      <RealWorldUseCases />

      {/* SECTION 5 — BUSINESS INTELLIGENCE STORY */}
      <BusinessIntelligence />

      {/* SECTION 6 — WHY WEBRAJYA */}
      <WhyWebRajya />

      {/* SECTION 7 — PRODUCT ECOSYSTEM */}
      <ProductEcosystem />

      {/* SECTION 8 — FAIR & TRANSPARENT PRICING */}
      <HomepagePricingTeaser />

      {/* SECTION 9 — VERIFIED CUSTOMER REVIEWS */}
      <CustomerReviewsSection />

      {/* SECTION 10 — FINAL CTA */}
      <FinalCTA />
    </div>
  );
}
