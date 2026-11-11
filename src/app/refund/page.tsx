import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Refund Policy — WEBRAJYA",
  description: "WebRajya Refund Policy regarding software licenses, trials, and subscription cancellations.",
};

export default function RefundPolicyPage() {
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
          <span className="text-xs font-mono uppercase text-[#2563EB] font-bold">Customer Assurance</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">Refund Policy</h1>
          <p className="text-xs text-[#64748B] font-mono">Last updated: October 2026</p>
        </div>

        <div className="space-y-6 text-sm text-[#475569] leading-relaxed font-normal">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0F172A]">1. Free Trial &amp; Demos Prior to Purchase</h2>
            <p>
              We encourage all business owners to test WebRajya software via our guided demo walkthroughs or trial setups before purchasing an annual license to ensure it matches their counter requirements.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0F172A]">2. Refund Eligibility</h2>
            <p>
              If you experience technical issues where the software fails to perform its core advertised functions and our support engineering team is unable to resolve the issue within 14 days of written notice, you may be eligible for a pro-rated refund.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0F172A]">3. Non-Refundable Circumstances</h2>
            <p>
              Refunds are not granted for changes of mind, failure to check hardware compatibility (e.g. unsupported proprietary barcode printers not verified during demo), or regulatory compliance failures outside our software scope.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0F172A]">4. How to Request Assistance</h2>
            <p>
              To request a review of your subscription or report billing issues, please contact our support team at billing@webrajya.com with your registered phone number and business name.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
