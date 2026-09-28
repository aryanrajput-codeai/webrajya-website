import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — WEBRAJYA Platform",
  description: "WebRajya Terms of Service governing the use of WebRajya POS and WebRajya Invoice software products.",
};

export default function TermsPage() {
  return (
    <div className="w-full bg-[#F8F3EB] text-[#020C2B] min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-[#020C2B]/10 pb-6 space-y-2">
          <span className="text-xs font-mono uppercase text-[#E58145] font-bold">Legal &amp; Agreement</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#020C2B]">Terms of Service</h1>
          <p className="text-xs text-[#020C2B]/60 font-mono">Last updated: September 27, 2026</p>
        </div>

        <div className="space-y-6 text-sm text-[#020C2B]/80 leading-relaxed font-normal">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#020C2B]">1. Software Subscription</h2>
            <p>
              WebRajya provides cloud-assisted and offline-resilient B2B business software solutions. Subscription plans for WebRajya POS and WebRajya Invoice grant non-exclusive access to the specified modules.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#020C2B]">2. Operational Responsibility</h2>
            <p>
              Subscribers are responsible for ensuring accurate tax rule configuration, menu pricing, and customer invoicing compliance within their respective business operations.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#020C2B]">3. System Uptime &amp; Service SLA</h2>
            <p>
              WebRajya POS and WebRajya Invoice are designed to operate continuously. WebRajya POS incorporates local network fallback to maintain billing uninterrupted during local ISP internet drops.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#020C2B]">4. Governing Law</h2>
            <p>
              These terms are governed by the laws of India. For legal notifications, email legal@webrajya.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
