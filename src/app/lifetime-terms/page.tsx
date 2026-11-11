import React from "react";
import type { Metadata } from "next";
import { LAUNCH_CONFIG } from "@/config/launch";
import { LegalDraftBanner } from "@/components/legal/LegalDraftBanner";
import { LIFETIME_INCLUSION_STATEMENT } from "@/config/pricing";

export const metadata: Metadata = {
  title: "Lifetime Licence Terms — WebRajya Invoice",
  description:
    "Perpetual software licence terms, included bug fixes, maintenance, and upgrade definitions.",
  robots: LAUNCH_CONFIG.LEGAL_APPROVED
    ? { index: true, follow: true }
    : { index: false, follow: false }
};

export default function LifetimeTermsPage() {
  return (
    <div className="w-full bg-[#F8F3EB] text-[#020C2B] min-h-screen pt-24 pb-20">
      <LegalDraftBanner documentName="Lifetime Licence Terms" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-8">
        <div className="border-b border-[#020C2B]/10 pb-6 space-y-2">
          <span className="text-xs font-mono uppercase text-[#2563EB] font-bold">
            Perpetual Software Agreement
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#020C2B]">
            Lifetime Licence Terms
          </h1>
          <p className="text-xs text-slate-500 font-mono">
            Pay Once, Use Forever • Standard Perpetual Licensing
          </p>
        </div>

        <div className="space-y-8 text-sm text-slate-700 leading-relaxed font-normal bg-white p-6 sm:p-10 rounded-3xl border border-slate-200">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#020C2B]">1. Scope of the Lifetime Licence</h2>
            <p className="p-4 bg-slate-50 border-l-4 border-[#2563EB] rounded-r-xl font-medium text-slate-800">
              &ldquo;{LIFETIME_INCLUSION_STATEMENT}&rdquo;
            </p>
            <p>
              A Lifetime license grants the registered business entity the perpetual right to operate
              WebRajya Invoice for internal business billing without recurring monthly or yearly
              software renewal fees.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#020C2B]">2. Included Maintenance &amp; Bug Fixes</h2>
            <p>Lifetime license holders receive:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>All stability improvements, bug fixes, and maintenance patches on the current core branch.</li>
              <li>Basic customer support via WhatsApp and phone desk (Mon-Sat, 9 AM - 8 PM).</li>
              <li>Local backup utilities and data export functions.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#020C2B]">
              3. Major Upgrades &amp; Version Releases
            </h2>
            <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 space-y-2">
              <p className="font-bold text-amber-900">
                [DEFINITION OF MAJOR UPGRADE - TO BE FINALISED BY FOUNDER &amp; LEGAL COUNSEL]
              </p>
              <p className="text-xs text-amber-800">
                Placeholder notice: Routine maintenance updates and statutory bug fixes are included.
                Major architectural version transitions, optional add-on cloud modules, or brand-new
                product engines introduced in subsequent major versions may be offered as optional
                paid upgrades, as formally specified prior to commercial checkout enablement.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#020C2B]">4. Terminal &amp; Device Transfer</h2>
            <p>
              Each Lifetime license is assigned to one primary commercial establishment. If you
              replace your billing PC or computer hardware, our support team can re-activate your
              license on your replacement terminal with identity verification.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
