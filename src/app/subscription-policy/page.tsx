import React from "react";
import type { Metadata } from "next";
import { LAUNCH_CONFIG } from "@/config/launch";
import { LegalDraftBanner } from "@/components/legal/LegalDraftBanner";

export const metadata: Metadata = {
  title: "Subscription & Auto-Renewal Policy — WebRajya Invoice",
  description:
    "Transparent renewal terms: reminder notices 7 and 2 days prior to expiry, 3-day view-only grace period, and frictionless cancellation.",
  robots: LAUNCH_CONFIG.LEGAL_APPROVED
    ? { index: true, follow: true }
    : { index: false, follow: false }
};

export default function SubscriptionPolicyPage() {
  return (
    <div className="w-full bg-[#F8F3EB] text-[#020C2B] min-h-screen pt-24 pb-20">
      <LegalDraftBanner documentName="Subscription &amp; Renewal Policy" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-8">
        <div className="border-b border-[#020C2B]/10 pb-6 space-y-2">
          <span className="text-xs font-mono uppercase text-[#2563EB] font-bold">
            Transparent Subscriptions
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#020C2B]">
            Subscription &amp; Auto-Renewal Terms
          </h1>
          <p className="text-xs text-slate-500 font-mono">
            Clear Notice Policy • 3-Day View-Only Grace Period • Zero Hidden Fees
          </p>
        </div>

        <div className="space-y-8 text-sm text-slate-700 leading-relaxed font-normal bg-white p-6 sm:p-10 rounded-3xl border border-slate-200">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#020C2B]">1. Explicit Consent &amp; Billing Cycles</h2>
            <p>
              WebRajya Invoice subscriptions are offered on Monthly (₹599/mo) and Annual (₹5,999/yr)
              cycles. Auto-renewal or recurring charges occur only upon explicit written or digital
              opt-in by the business owner. We never lock you into unintended automatic renewals.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#020C2B]">
              2. Advance Renewal Reminders (7 Days &amp; 2 Days)
            </h2>
            <p>
              To ensure full transparency and avoid unexpected disruptions, WebRajya automatically
              sends advance renewal notifications:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>
                <strong>First Notice:</strong> Sent <strong>7 days</strong> prior to license expiry
                via WhatsApp and email.
              </li>
              <li>
                <strong>Second Notice:</strong> Sent <strong>2 days</strong> prior to license expiry
                with direct renewal links.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#020C2B]">
              3. The 3-Day View-Only Grace Period
            </h2>
            <p>
              If your subscription period ends before renewal is processed, your business is never
              abruptly locked out of historical records. WebRajya provides an automatic{" "}
              <strong>3-day view-only grace period</strong>:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>You can view all past invoices, customer Khata balances, and product catalogs.</li>
              <li>You can export your complete customer and sales ledgers to Excel/CSV.</li>
              <li>New billing creation resumes immediately once the renewal is confirmed.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#020C2B]">4. Cancellation Without Penalties</h2>
            <p>
              You may cancel your monthly or annual subscription at any point with zero exit fees or
              penalties. Simply message our WhatsApp support desk or email{" "}
              {LAUNCH_CONFIG.EMAIL}. Your software remains fully functional until the end of your
              current paid billing cycle.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
