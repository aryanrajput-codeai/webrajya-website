import React from "react";
import type { Metadata } from "next";
import { SupportHeader } from "@/components/support/SupportHeader";
import { SupportSearch } from "@/components/support/SupportSearch";
import { SupportCategories } from "@/components/support/SupportCategories";
import { PopularArticles } from "@/components/support/PopularArticles";
import { SupportCTA } from "@/components/support/SupportCTA";

export const metadata: Metadata = {
  title: "WebRajya Support | Help & Documentation",
  description: "Find help, guides and documentation for WebRajya POS and WebRajya Invoice.",
  openGraph: {
    title: "WebRajya Support | Help & Documentation",
    description: "Guides, tutorials, thermal printer setup, and financial billing documentation for WebRajya POS and WebRajya Invoice.",
    url: "https://webrajya.com/support"
  }
};

export default function SupportPage() {
  return (
    <div className="w-full bg-[#F8F3EB] text-[#020C2B] min-h-screen pt-28 pb-20 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Support Header & Large Search */}
        <div className="space-y-8">
          <SupportHeader
            eyebrow="WEBRAJYA SUPPORT"
            headline="How can we help?"
            subheadline="Explore guides, technical documentation, and answers for WebRajya POS and WebRajya Invoice."
          />
          <SupportSearch />
        </div>

        {/* Documentation Categories */}
        <SupportCategories />

        {/* Popular Essential Guides */}
        <PopularArticles />

        {/* Support Footer CTA */}
        <SupportCTA />

      </div>
    </div>
  );
}
