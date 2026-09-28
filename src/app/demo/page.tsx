import React, { Suspense } from "react";
import type { Metadata } from "next";
import { DemoHero } from "@/components/demo/DemoHero";
import { DemoForm } from "@/components/demo/DemoForm";
import { Loader2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a WebRajya Demo | WebRajya",
  description: "Request a WebRajya demo and explore the tools built for your business workflow.",
  openGraph: {
    title: "Book a WebRajya Demo | WebRajya",
    description: "Tell us about your business and explore WebRajya POS or WebRajya Invoice with our software team.",
    url: "https://webrajya.com/demo"
  }
};

function DemoFormWithParams({ searchParams }: { searchParams?: { product?: string } }) {
  // Client component handles search params parsing
  return <DemoFormWrapper />;
}

import { DemoFormWrapper } from "@/components/demo/DemoFormWrapper";

export default function DemoPage() {
  return (
    <div className="w-full bg-[#F8F3EB] text-[#020C2B] min-h-screen pt-28 pb-20 relative overflow-hidden font-sans">
      {/* Background Decorative Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#E58145]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Hero Explanation & Trust Callouts */}
          <div className="lg:col-span-5">
            <DemoHero />
          </div>

          {/* Right Column: Multi-Step Interactive Form */}
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="p-8 rounded-3xl bg-white border border-[#020C2B]/10 flex items-center justify-center text-xs font-mono text-[#525866] gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-[#E58145]" />
                  <span>Loading Demo Booking Form...</span>
                </div>
              }
            >
              <DemoFormWrapper />
            </Suspense>
          </div>

        </div>
      </div>
    </div>
  );
}
