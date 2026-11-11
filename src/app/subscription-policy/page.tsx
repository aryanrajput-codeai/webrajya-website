import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Subscription & Renewal Policy — WEBRAJYA",
  description: "WebRajya subscription terms, annual licensing periods, renewals, and billing conditions.",
};

export default function SubscriptionPolicyPage() {
  return (
    <div className="w-full bg-[#F8FAFC] text-[#0F172A] min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#2563EB] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </Link>

        <div className="border-b border-[#E2E8F0] pb-6 space-y-2">
          <span className="text-xs font-mono uppercase text-[#2563EB] font-bold">Billing Compliance</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">Subscription &amp; Renewal Policy</h1>
          <p className="text-xs text-[#64748B] font-mono">Last updated: October 2026</p>
        </div>

        <div className="space-y-6 text-sm text-[#475569] leading-relaxed font-normal">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0F172A]">1. Annual Subscription Period</h2>
            <p>
              WebRajya Invoice is offered on an annual subscription basis (standard 12-month access). Your subscription begins immediately upon payment confirmation and account activation.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0F172A]">2. Pricing &amp; Taxes</h2>
            <p>
              The introductory annual price for WebRajya Invoice is ₹2,499 per year. Applicable Goods and Services Tax (GST) is calculated and charged separately according to statutory Indian tax rates at checkout.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0F172A]">3. Renewal Terms</h2>
            <p>
              Subscriptions renew annually. Prior to your renewal date, notice will be provided via email or authorized communication channels with instructions for continuing your service without disruption.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0F172A]">4. Supported Devices &amp; Updates</h2>
            <p>
              Subscribers receive application updates and technical maintenance during the active subscription period. WebRajya software operates on supported Windows, macOS, Android, and web browser environments.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0F172A]">5. Contact Support</h2>
            <p>
              For subscription inquiries or billing assistance, contact billing@webrajya.com or support@webrajya.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
