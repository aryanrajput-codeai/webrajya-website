import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — WEBRAJYA Platform",
  description: "WebRajya Privacy Policy details our data collection, security protocols, and privacy practices.",
};

export default function PrivacyPage() {
  return (
    <div className="w-full bg-[#F8F3EB] text-[#020C2B] min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-[#020C2B]/10 pb-6 space-y-2">
          <span className="text-xs font-mono uppercase text-[#E58145] font-bold">Legal &amp; Compliance</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#020C2B]">Privacy Policy</h1>
          <p className="text-xs text-[#020C2B]/60 font-mono">Last updated: September 27, 2026</p>
        </div>

        <div className="space-y-6 text-sm text-[#020C2B]/80 leading-relaxed font-normal">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#020C2B]">1. Data Protection &amp; Security</h2>
            <p>
              WebRajya is committed to protecting your business operational data. We implement industry-standard encryption, role-based access control, and secure database backups across all WebRajya products.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#020C2B]">2. Information Collection</h2>
            <p>
              We collect information provided directly by business operators when creating accounts, submitting demo requests, or configuring venue options (such as menu items, tax IDs, and billing contacts).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#020C2B]">3. Operational Use</h2>
            <p>
              Business data is strictly utilized to deliver and maintain your active WebRajya software services (WebRajya POS and WebRajya Invoice). We do not sell or rent customer data to third-party advertisers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#020C2B]">4. Contact Us</h2>
            <p>
              For privacy inquiries or data requests, please contact privacy@webrajya.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
