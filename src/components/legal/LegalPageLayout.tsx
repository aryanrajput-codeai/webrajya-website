import React from "react";
import Link from "next/link";
import { LEGAL_CONFIG } from "@/config/legal";
import { Placeholder } from "./Placeholder";
import { AlertCircle, Mail, Phone, MapPin, ArrowLeft, BookOpen } from "lucide-react";

interface TocItem {
  id: string;
  label: string;
}

interface LegalPageLayoutProps {
  title: string;
  subtitle?: string;
  effectiveDate?: string;
  toc?: TocItem[];
  children: React.ReactNode;
}

export function LegalPageLayout({
  title,
  subtitle,
  effectiveDate = LEGAL_CONFIG.EFFECTIVE_DATE,
  toc,
  children
}: LegalPageLayoutProps) {
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
                This policy is in draft status. Highlighted yellow sections represent pending details or internal placeholders.
              </p>
            </div>
          </div>
        </div>
      )}

      <main className="max-w-[760px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Back Link */}
        <div className="mb-6 flex items-center justify-between text-xs text-slate-600">
          <Link
            href="/legal"
            className="inline-flex items-center gap-1.5 font-medium text-emerald-700 hover:text-emerald-800 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Legal Policies</span>
          </Link>
          <span className="text-slate-600">WebRajya Legal Documentation</span>
        </div>

        {/* Page Header */}
        <header className="border-b border-slate-200 pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base text-slate-700 mt-2 font-medium">
              {subtitle}
            </p>
          )}
          <div className="mt-4 inline-flex items-center gap-2 text-sm text-slate-700 font-medium bg-slate-100 px-3 py-1.5 rounded-md border border-slate-200">
            <span>Effective date:</span>
            <Placeholder>{effectiveDate}</Placeholder>
          </div>
        </header>

        {/* Table of Contents for Long Pages */}
        {toc && toc.length > 0 && (
          <nav
            aria-label="Table of Contents"
            className="mb-10 p-5 bg-white rounded-xl border border-slate-200 shadow-sm"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-3">
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span>Table of Contents</span>
            </div>
            <ol className="space-y-1.5 text-sm text-slate-700 list-decimal list-inside pl-1">
              {toc.map((item) => (
                <li key={item.id} className="leading-snug">
                  <a
                    href={`#${item.id}`}
                    className="text-emerald-700 hover:text-emerald-900 hover:underline transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Policy Body */}
        <article className="prose prose-slate max-w-none text-slate-800 text-[15.5px] sm:text-[16.5px] leading-relaxed [&_h2]:text-xl sm:[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:tracking-tight [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:pt-4 [&_h2]:border-t [&_h2]:border-slate-200 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-slate-900 [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_ul]:space-y-1.5 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-4 [&_ol]:space-y-1.5 [&_li]:leading-relaxed">
          {children}
        </article>

        {/* Contact Us Box (Required on every legal page) */}
        <section className="mt-12 pt-8 border-t border-slate-300">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              Contact us regarding these terms & policies
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              If you have any questions, concerns, or requests regarding this policy, please reach out to our team:
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

        {/* Quick Footer Links to Other Policies */}
        <nav aria-label="Legal navigation" className="mt-8 text-center border-t border-slate-200 pt-6">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-slate-500">
            <Link href="/privacy-policy" className="hover:text-emerald-700 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-emerald-700 transition-colors">Terms and Conditions</Link>
            <span>•</span>
            <Link href="/subscription-terms" className="hover:text-emerald-700 transition-colors">Subscription Terms</Link>
            <span>•</span>
            <Link href="/refund-policy" className="hover:text-emerald-700 transition-colors">Cancellation & Refund</Link>
            <span>•</span>
            <Link href="/lifetime-terms" className="hover:text-emerald-700 transition-colors">Lifetime Licence</Link>
            <span>•</span>
            <Link href="/data-retention" className="hover:text-emerald-700 transition-colors">Data Retention</Link>
            <span>•</span>
            <Link href="/support-sla" className="hover:text-emerald-700 transition-colors">Support SLA</Link>
          </div>
        </nav>
      </main>
    </div>
  );
}

