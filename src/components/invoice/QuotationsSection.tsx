import React from "react";
import Link from "next/link";
import { FileEdit, Share2, ArrowRightCircle, ArrowRight, CheckCircle2 } from "lucide-react";

export function QuotationsSection() {
  const STEPS = [
    {
      title: "Create Professional Estimates",
      desc: "Prepare itemized quotations with products, quantities, rates, and applicable delivery or payment terms.",
      icon: <FileEdit className="w-5 h-5 text-[#2563EB]" />
    },
    {
      title: "Share with Your Customer",
      desc: "Generate clean quotations that can be printed on letterhead or shared electronically with institution buyers.",
      icon: <Share2 className="w-5 h-5 text-[#2563EB]" />
    },
    {
      title: "Convert Approved Quotations",
      desc: "Move accepted quotation details directly into a live bill without re-typing line items manually.",
      icon: <ArrowRightCircle className="w-5 h-5 text-[#16A34A]" />
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase text-[#2563EB] tracking-wider bg-[#2563EB]/10 px-3.5 py-1 rounded-full border border-[#2563EB]/20 font-bold">
            Institutional &amp; Bulk Sales
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight">
            From Quotation to Invoice. <br className="hidden sm:inline" />
            Without Starting Again.
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
            Preparing a quotation for a school, college, office or wholesale customer shouldn&apos;t mean entering the same products twice. WebRajya Invoice is designed to support a smoother quotation-to-billing workflow.
          </p>
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {STEPS.map(s => (
            <div
              key={s.title}
              className="p-7 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs hover:border-[#2563EB]/40 hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#CBD5E1] flex items-center justify-center shadow-xs">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0F172A]">{s.title}</h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">{s.desc}</p>
              </div>

              <div className="pt-3 border-t border-[#E2E8F0] flex items-center gap-1.5 text-xs font-mono text-[#2563EB] font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" /> Fast Conversion
              </div>
            </div>
          ))}
        </div>

        {/* Action Link & Note */}
        <div className="text-center space-y-3">
          <Link
            href="/demo?product=invoice&feature=quotations"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#2563EB] hover:text-[#1D4ED8]"
          >
            <span>Explore Quotations Workflow</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-[11px] font-mono text-[#94A3B8]">
            *Quotation conversion automatically adjusts inventory upon final invoice confirmation.
          </p>
        </div>

      </div>
    </section>
  );
}
