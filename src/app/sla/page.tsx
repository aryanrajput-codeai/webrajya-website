import React from "react";
import type { Metadata } from "next";
import { LAUNCH_CONFIG } from "@/config/launch";
import { LegalDraftBanner } from "@/components/legal/LegalDraftBanner";

export const metadata: Metadata = {
  title: "Support Service Level Agreement (SLA) — WebRajya Invoice",
  description:
    "Dedicated technical assistance, support operating hours, and target response windows for Annual and Lifetime customers.",
  robots: LAUNCH_CONFIG.LEGAL_APPROVED
    ? { index: true, follow: true }
    : { index: false, follow: false }
};

export default function SlaPage() {
  return (
    <div className="w-full bg-[#F8F3EB] text-[#020C2B] min-h-screen pt-24 pb-20">
      <LegalDraftBanner documentName="Support Service Level Agreement (SLA)" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-8">
        <div className="border-b border-[#020C2B]/10 pb-6 space-y-2">
          <span className="text-xs font-mono uppercase text-[#2563EB] font-bold">
            Customer Support Commitments
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#020C2B]">
            Support Service Level Agreement (SLA)
          </h1>
          <p className="text-xs text-slate-500 font-mono">
            Applicable for Annual &amp; Lifetime License Holders
          </p>
        </div>

        <div className="space-y-8 text-sm text-slate-700 leading-relaxed font-normal bg-white p-6 sm:p-10 rounded-3xl border border-slate-200">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#020C2B]">1. Support Hours &amp; Channels</h2>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-xs">
              <p>
                <strong>Regular Desk Hours:</strong> {LAUNCH_CONFIG.OPERATING_HOURS.weekdays}
              </p>
              <p>
                <strong>Weekend Critical Coverage:</strong> {LAUNCH_CONFIG.OPERATING_HOURS.sunday}
              </p>
              <p>
                <strong>Supported Channels:</strong> Direct WhatsApp Support, Phone Desk (
                {LAUNCH_CONFIG.PHONE_DISPLAY}), and Secure Remote Desktop Screen Sharing (AnyDesk /
                TeamViewer).
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#020C2B]">2. Target Response Windows</h2>
            <p className="text-xs text-slate-500 italic">
              Note: All response metrics are managed as operational performance targets, not absolute
              financial guarantees.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#F8F3EB]/60 border border-slate-200 space-y-1.5">
                <span className="text-[11px] font-mono uppercase text-rose-600 font-bold">
                  Priority 1: Counter Downtime
                </span>
                <p className="font-bold text-slate-800 text-sm">Target: Within 2 Business Hours</p>
                <p className="text-xs text-slate-600">
                  Total inability to generate bills or print receipts at active counter terminals.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8F3EB]/60 border border-slate-200 space-y-1.5">
                <span className="text-[11px] font-mono uppercase text-blue-600 font-bold">
                  Priority 2: General &amp; Setup Queries
                </span>
                <p className="font-bold text-slate-800 text-sm">Target: Within 6 to 12 Hours</p>
                <p className="text-xs text-slate-600">
                  Product catalog imports, barcode printer alignment, or staff training inquiries.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#020C2B]">3. Remote Assistance Protocol</h2>
            <p>
              For rapid issue resolution, our technicians can connect to your shop PC via encrypted
              remote screen sharing upon your one-time session authorization. Our team operates
              strictly in your visual presence to diagnose printer drivers, scanner configs, or
              catalog formats.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

