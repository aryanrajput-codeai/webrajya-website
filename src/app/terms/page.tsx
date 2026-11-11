import React from "react";
import type { Metadata } from "next";
import { LAUNCH_CONFIG } from "@/config/launch";
import { LegalDraftBanner } from "@/components/legal/LegalDraftBanner";

export const metadata: Metadata = {
  title: "Terms & Conditions — WebRajya Invoice",
  description: "Terms and conditions governing the use of WebRajya Invoice and POS software platforms.",
  robots: LAUNCH_CONFIG.LEGAL_APPROVED
    ? { index: true, follow: true }
    : { index: false, follow: false }
};

export default function TermsPage() {
  return (
    <div className="w-full bg-[#F8F3EB] text-[#020C2B] min-h-screen pt-24 pb-20">
      <LegalDraftBanner documentName="Terms &amp; Conditions" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-8">
        <div className="border-b border-[#020C2B]/10 pb-6 space-y-2">
          <span className="text-xs font-mono uppercase text-[#2563EB] font-bold">
            Agreement of Service
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#020C2B]">Terms &amp; Conditions</h1>
          <p className="text-xs text-slate-500 font-mono">Effective Date: 2026</p>
        </div>

        <div className="space-y-8 text-sm text-slate-700 leading-relaxed font-normal bg-white p-6 sm:p-10 rounded-3xl border border-slate-200">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#020C2B]">1. Acceptance of Terms</h2>
            <p>
              By scheduling a demonstration, activating a 3-day free trial, or subscribing to WebRajya
              Invoice, you agree to be bound by these Terms &amp; Conditions. If you are entering into
              this agreement on behalf of a retail business or entity, you represent that you hold the
              authority to bind that entity.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#020C2B]">2. Software License Grant</h2>
            <p>
              WebRajya grants you a non-exclusive, non-transferable, revocable license to install and
              operate WebRajya Invoice on authorized business terminals solely for internal retail
              billing and inventory operations. You agree not to decompile, reverse-engineer, resell,
              or sub-license the software.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#020C2B]">3. Free Trial &amp; Demonstrations</h2>
            <p>
              Our 3-day free in-shop trial is provided for evaluation purposes. During the trial, you
              have access to complete billing, inventory, and Khata features. At the conclusion of the
              trial period, continued operation requires selecting a Monthly, Annual, or Lifetime
              plan.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#020C2B]">4. Tax &amp; Regulatory Compliance</h2>
            <p>
              WebRajya Invoice provides tools to configure GST rates, generate tax invoices, and print
              receipts. However, business owners remain solely responsible for configuring the correct
              tax slabs applicable to their products, filing timely tax returns, and verifying statutory
              invoicing compliance with their tax advisors.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#020C2B]">5. Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India. Any
              disputes arising from these terms or software licensing shall be subject to the exclusive
              jurisdiction of the courts in {LAUNCH_CONFIG.TARGET_CITY}, {LAUNCH_CONFIG.TARGET_STATE}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
