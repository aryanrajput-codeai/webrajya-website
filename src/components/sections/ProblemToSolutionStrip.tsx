import React from "react";
import { AlertCircle, CheckCircle2, Zap, PackageX, Calculator, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ProblemToSolutionStrip() {
  const PAIRS = [
    {
      problemTitle: "Slow Manual Billing Queues",
      problemDesc:
        "Writing paper receipts or calculating totals by hand during evening rush hours creates frustrated customer lines.",
      solutionTitle: "Sub-Second Barcode Counter Billing",
      solutionDesc:
        "Scan barcodes or search item shortcuts in milliseconds. Print clear 3-inch thermal receipts or A4 bills instantly.",
      icon: Zap
    },
    {
      problemTitle: "Stock Mistakes & Missing Items",
      problemDesc:
        "Running out of popular sizes or accessories without realizing, resulting in lost sales to neighboring shops.",
      solutionTitle: "Automated Live Stock Deductions",
      solutionDesc:
        "Every sale automatically updates current inventory. Automatic low-stock warnings alert you before items run out.",
      icon: PackageX
    },
    {
      problemTitle: "GST & Tax Calculation Confusion",
      problemDesc:
        "Struggling with multi-rate GST slabs, HSN codes, and month-end ledger reconciliation headaches.",
      solutionTitle: "Automated GST & Non-GST Formats",
      solutionDesc:
        "Pre-configured tax rules calculate exact CGST, SGST, and IGST breakdowns automatically on every receipt.",
      icon: Calculator
    },
    {
      problemTitle: "Uncollected Udhaar & Khata Disputes",
      problemDesc:
        "Forgotten customer credit ledgers written in paper bahi-khata leading to unpaid balances and disputes.",
      solutionTitle: "Digital Customer Khata Ledgers",
      solutionDesc:
        "Log customer credit balances with complete transaction history and instant payment settlement records.",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-24 bg-white border-y border-[#020C2B]/10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="pos">Clear Everyday Impact</Badge>
          <h2 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            Stop Counter Bottlenecks in Your Shop
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            How WebRajya Invoice replaces manual retail chaos with dependable, error-free counter operations.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PAIRS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="rounded-3xl p-6 sm:p-8 bg-[#F8F3EB]/60 border border-slate-200 shadow-xs flex flex-col justify-between space-y-6"
              >
                {/* Problem Block */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-rose-600 text-xs font-mono font-bold uppercase tracking-wide">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>The Everyday Challenge</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">{item.problemTitle}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.problemDesc}
                  </p>
                </div>

                {/* Solution Block */}
                <div className="pt-5 border-t border-slate-200/80 space-y-2 bg-white -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-6 sm:p-8 rounded-b-3xl">
                  <div className="flex items-center gap-2 text-emerald-700 text-xs font-mono font-bold uppercase tracking-wide">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                    <span>How WebRajya Fixes It</span>
                  </div>
                  <h4 className="text-base font-bold text-[#020C2B] flex items-center gap-2">
                    <Icon className="w-4 h-4 text-[#2563EB]" />
                    {item.solutionTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.solutionDesc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

