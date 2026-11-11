import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { LEGAL_CONFIG } from "@/config/legal";
import { getLegalMetadata } from "@/components/legal/metadata";
import {
  Shield,
  FileText,
  RefreshCw,
  RotateCcw,
  Sparkles,
  Database,
  LifeBuoy,
  AlertCircle,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = getLegalMetadata(
  "Legal Policies & Agreements",
  "WebRajya Invoice legal documentation, customer contracts, subscription terms, privacy, and support agreements."
);

const policies = [
  {
    title: "1. Privacy Policy",
    href: "/privacy-policy",
    description: "How we collect, store, and process your account details and customer billing data under Indian data protection standards.",
    icon: Shield
  },
  {
    title: "2. Terms and Conditions",
    href: "/terms",
    description: "Standard terms of service, customer responsibilities, software license rights, and liability terms.",
    icon: FileText
  },
  {
    title: "3. Subscription and Renewal Terms",
    href: "/subscription-terms",
    description: "Monthly & annual billing rules, manual renewal via UPI or bank transfer, payment failure policies, and grace period timelines.",
    icon: RefreshCw
  },
  {
    title: "4. Cancellation and Refund Policy",
    href: "/refund-policy",
    description: "Transparent 7-day refund conditions, problem resolution procedure, and non-refundable service exclusions.",
    icon: RotateCcw
  },
  {
    title: "5. Lifetime Licence Terms",
    href: "/lifetime-terms",
    description: "One-time perpetual license scope, included updates, multi-location licensing, and major upgrade definitions.",
    icon: Sparkles
  },
  {
    title: "6. Data Retention and Deletion Policy",
    href: "/data-retention",
    description: "Timelines for data retention following plan expiry, deletion warning protocols, and paid data export terms.",
    icon: Database
  },
  {
    title: "7. Support SLA (Annual and Lifetime customers)",
    href: "/support-sla",
    description: "Customer support hours, channels, priorities, and guaranteed handling response targets.",
    icon: LifeBuoy
  }
];

export default function LegalIndexPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800">
      {/* Draft banner while pending legal counsel review */}
      {!LEGAL_CONFIG.LEGAL_APPROVED && (
        <div className="bg-amber-100 border-b border-amber-300 text-amber-950 px-4 py-3 sticky top-0 z-40 shadow-sm">
          <div className="max-w-[760px] mx-auto flex items-start gap-3 text-sm">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold tracking-tight">Draft: pending legal review</p>
              <p className="text-xs text-amber-900 mt-0.5">
                The legal documents below are currently in draft status for legal counsel review.
              </p>
            </div>
          </div>
        </div>
      )}

      <main className="max-w-[760px] mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="border-b border-slate-200 pb-6 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Compliance & Transparency
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-1">
            WebRajya Legal Policies
          </h1>
          <p className="text-slate-600 text-base mt-2">
            The agreements, operational policies, and terms governing WebRajya Invoice and services.
          </p>
        </header>

        {/* Policy Grid */}
        <div className="space-y-4">
          {policies.map((policy) => {
            const Icon = policy.icon;
            return (
              <Link
                key={policy.href}
                href={policy.href}
                className="group block bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h2 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {policy.title}
                      </h2>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                    </div>
                    <p className="text-sm text-slate-600 mt-1 leading-normal">
                      {policy.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Contact Us Box */}
        <section className="mt-12 pt-8 border-t border-slate-300">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              Contact our team
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              For any clarification regarding our legal policies, billing, or privacy compliance:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-semibold text-slate-500 uppercase">Email</span>
                  <a
                    href={`mailto:${LEGAL_CONFIG.CONTACT_EMAIL}`}
                    className="text-emerald-700 font-medium hover:underline"
                  >
                    {LEGAL_CONFIG.CONTACT_EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-semibold text-slate-500 uppercase">Call & WhatsApp</span>
                  <a
                    href={`https://wa.me/${LEGAL_CONFIG.CONTACT_PHONE_RAW}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 font-medium hover:underline"
                  >
                    {LEGAL_CONFIG.CONTACT_PHONE}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5 sm:col-span-2">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-semibold text-slate-500 uppercase">Address</span>
                  <span className="text-slate-700">{LEGAL_CONFIG.CONTACT_ADDRESS}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

