import React from "react";
import type { Metadata } from "next";
import { LAUNCH_CONFIG } from "@/config/launch";
import { LegalDraftBanner } from "@/components/legal/LegalDraftBanner";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy — WebRajya Invoice",
  description:
    "Fair, transparent cancellation and refund policy for WebRajya Invoice subscriptions and licenses.",
  robots: LAUNCH_CONFIG.LEGAL_APPROVED
    ? { index: true, follow: true }
    : { index: false, follow: false }
};

export default function RefundPage() {
  return (
    <div className="w-full bg-[#F8F3EB] text-[#020C2B] min-h-screen pt-24 pb-20">
      <LegalDraftBanner documentName="Cancellation &amp; Refund Policy" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-8">
        <div className="border-b border-[#020C2B]/10 pb-6 space-y-2">
          <span className="text-xs font-mono uppercase text-[#2563EB] font-bold">
            Fair Customer Terms
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#020C2B]">
            Cancellation &amp; Refund Policy
          </h1>
          <p className="text-xs text-slate-500 font-mono">
            3-Day Risk-Free Evaluation • Transparent Resolution
          </p>
        </div>

        <div className="space-y-8 text-sm text-slate-700 leading-relaxed font-normal bg-white p-6 sm:p-10 rounded-3xl border border-slate-200">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#020C2B]">1. 3-Day Risk-Free Trial Guarantee</h2>
            <p>
              To ensure every shop owner is 100% satisfied that WebRajya Invoice fits their daily
              counter workflow, we provide a full, unrestricted <strong>3-day free trial</strong>{" "}
              following your live in-shop or online demo. No credit card or upfront deposit is ever
              required during evaluation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#020C2B]">2. Subscription Cancellation</h2>
            <p>
              Monthly and Annual plans can be cancelled at any time by contacting support via WhatsApp
              or email. Cancellation stops any future billing cycles. Your service remains active
              through the expiration of your currently paid period.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#020C2B]">3. Refund Eligibility &amp; Windows</h2>
            <p>
              Because customers have full access to test our software during the 3-day trial prior to
              purchasing, refunds on activated licenses are evaluated on a case-by-case basis. If you
              experience persistent technical failure attributable to our software that our support
              team cannot resolve within 7 business days, you are eligible for a prorated refund of the
              unused subscription term.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#020C2B]">4. How to Request a Review</h2>
            <p>
              To submit a cancellation or refund inquiry, send your license key and store details to:
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs font-mono space-y-1">
              <p>Email: {LAUNCH_CONFIG.EMAIL}</p>
              <p>WhatsApp: +{LAUNCH_CONFIG.WHATSAPP}</p>
              <p>Response target: Within 24 business hours</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
