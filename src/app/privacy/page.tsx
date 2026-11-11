import React from "react";
import type { Metadata } from "next";
import { LAUNCH_CONFIG } from "@/config/launch";
import { LegalDraftBanner } from "@/components/legal/LegalDraftBanner";

export const metadata: Metadata = {
  title: "Privacy Policy — WebRajya Invoice",
  description:
    "WebRajya Privacy Policy details our data collection, security measures, and compliance with India's Digital Personal Data Protection (DPDP) Act.",
  robots: LAUNCH_CONFIG.LEGAL_APPROVED
    ? { index: true, follow: true }
    : { index: false, follow: false }
};

export default function PrivacyPage() {
  return (
    <div className="w-full bg-[#F8F3EB] text-[#020C2B] min-h-screen pt-24 pb-20">
      <LegalDraftBanner documentName="Privacy Policy (DPDP Act Aligned)" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-8">
        <div className="border-b border-[#020C2B]/10 pb-6 space-y-2">
          <span className="text-xs font-mono uppercase text-[#2563EB] font-bold">
            Compliance &amp; Data Governance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#020C2B]">Privacy Policy</h1>
          <p className="text-xs text-slate-500 font-mono">
            Governed by India&apos;s Digital Personal Data Protection Act, 2023 (DPDP) | Last
            Updated: 2026
          </p>
        </div>

        <div className="space-y-8 text-sm text-slate-700 leading-relaxed font-normal bg-white p-6 sm:p-10 rounded-3xl border border-slate-200">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#020C2B]">1. Introduction &amp; Data Fiduciary</h2>
            <p>
              WebRajya (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) provides business
              billing, inventory management, and Khata software for retailers. This policy sets out
              how we collect, process, store, and protect personal and business data in compliance
              with India&apos;s Digital Personal Data Protection (DPDP) Act, 2023.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#020C2B]">2. Personal Data We Collect</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>
                <strong>Lead &amp; Demo Information:</strong> Name, shop/business name, shop type,
                mobile number, email address, physical locality/area in Nagpur, and preferred
                demo schedule.
              </li>
              <li>
                <strong>Account &amp; Licensing Data:</strong> Business contact details, license
                registration keys, hardware identifiers (for terminal activation), and transaction
                records.
              </li>
              <li>
                <strong>Store Customer Data (Processed as Fiduciary/Processor):</strong> Names and
                phone numbers entered into your Khata or digital billing ledger are held securely on
                your behalf.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#020C2B]">3. Purpose of Data Processing</h2>
            <p>We process personal and operational data solely for lawful purposes:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Delivering software licenses, technical support, and product updates.</li>
              <li>Scheduling and conducting in-shop demos and 3-day free trials.</li>
              <li>Providing accounting, billing calculations, and local receipt generation.</li>
              <li>Communicating critical license renewals, service advisories, and security alerts.</li>
            </ul>
            <p className="font-semibold text-slate-800">
              We never sell, rent, or monetize your business or customer records to third-party
              advertisers or data brokers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#020C2B]">4. Data Storage &amp; Local Resilience</h2>
            <p>
              WebRajya Invoice employs a local-first operational architecture. Your active counter
              billing data resides securely on your local device. Encrypted cloud backups (where
              configured) are stored on certified, high-security Indian data centers in compliance
              with data localization guidelines.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#020C2B]">5. User Rights Under the DPDP Act</h2>
            <p>As a data principal, you hold the following rights:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>
                <strong>Right to Access:</strong> Request a summary of personal data processed by
                our systems.
              </li>
              <li>
                <strong>Right to Correction &amp; Erasure:</strong> Request update of outdated
                contact information or complete erasure of account data subject to legal retention
                periods.
              </li>
              <li>
                <strong>Right to Grievance Redressal:</strong> Direct questions or grievances to our
                designated Data Protection Officer.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#020C2B]">6. Contact &amp; Grievance Officer</h2>
            <p>
              For any questions regarding this Privacy Policy or to exercise your DPDP rights,
              contact:
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs font-mono space-y-1">
              <p>Email: {LAUNCH_CONFIG.EMAIL}</p>
              <p>Phone: {LAUNCH_CONFIG.PHONE_DISPLAY}</p>
              <p>Location: {LAUNCH_CONFIG.TARGET_CITY}, {LAUNCH_CONFIG.TARGET_STATE}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
