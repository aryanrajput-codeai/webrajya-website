import React from "react";
import type { Metadata } from "next";
import { LAUNCH_CONFIG } from "@/config/launch";
import { LegalDraftBanner } from "@/components/legal/LegalDraftBanner";

export const metadata: Metadata = {
  title: "Data Retention & Deletion Policy — WebRajya Invoice",
  description:
    "Data retention terms: accounts maintained for 1 year post-expiration, deletion advisory sent 15 days in advance.",
  robots: LAUNCH_CONFIG.LEGAL_APPROVED
    ? { index: true, follow: true }
    : { index: false, follow: false }
};

export default function DataRetentionPage() {
  return (
    <div className="w-full bg-[#F8F3EB] text-[#020C2B] min-h-screen pt-24 pb-20">
      <LegalDraftBanner documentName="Data Retention &amp; Deletion Policy" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-8">
        <div className="border-b border-[#020C2B]/10 pb-6 space-y-2">
          <span className="text-xs font-mono uppercase text-[#2563EB] font-bold">
            Customer Data Safeguards
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#020C2B]">
            Data Retention &amp; Deletion Policy
          </h1>
          <p className="text-xs text-slate-500 font-mono">
            1-Year Post-Expiry Retention • 15-Day Advance Deletion Warning
          </p>
        </div>

        <div className="space-y-8 text-sm text-slate-700 leading-relaxed font-normal bg-white p-6 sm:p-10 rounded-3xl border border-slate-200">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#020C2B]">1. Overview</h2>
            <p>
              Your business accounting and customer Khata ledgers represent critical operational
              assets. This policy defines the retention timeline for inactive licenses and our
              protocol for secure data deletion in compliance with applicable Indian tax and privacy
              regulations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#020C2B]">
              2. 1-Year Retention Window Following Expiry
            </h2>
            <p>
              If a Monthly or Annual subscription is not renewed, your archived cloud account backups
              (where enabled) are preserved in secure storage for a period of exactly{" "}
              <strong>1 year (365 days)</strong> from the date of license expiration. This allows you
              to renew your license at a later date or retrieve past financial statements without loss
              of operational history.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#020C2B]">
              3. 15-Day Final Deletion Advisory
            </h2>
            <p>
              Before any inactive account data is permanently purged from cloud infrastructure,
              WebRajya issues an explicit warning notice:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>
                A written deletion alert is dispatched via WhatsApp and registered email{" "}
                <strong>15 days prior</strong> to scheduled deletion.
              </li>
              <li>
                The alert includes a direct one-click link to download your full historical database
                in standard CSV/Excel format.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#020C2B]">4. Local Data Ownership</h2>
            <p>
              Because WebRajya Invoice utilizes a local-first architecture, local database files
              installed on your shop computer remain on your hardware indefinitely under your
              physical control, unaffected by cloud retention schedules.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

