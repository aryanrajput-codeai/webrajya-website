"use client";

import React from "react";
import { CheckCircle2, XCircle, Zap, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ComparisonRow {
  feature: string;
  traditional: string;
  webrajya: string;
  highlight?: boolean;
}

const COMPARISONS: ComparisonRow[] = [
  {
    feature: "Billing Speed",
    traditional: "15–30 seconds per order (heavy mouse clicks & scrolling)",
    webrajya: "Under 3 seconds (100% keyboard hotkeys & quick cart)",
    highlight: true,
  },
  {
    feature: "Mac Compatibility",
    traditional: "Buggy, unoptimized or requires Windows VM emulators",
    webrajya: "Native Mac (⌘ Command) & PC (Alt) shortcut support",
  },
  {
    feature: "Staff Onboarding",
    traditional: "Requires 2–3 days of staff training & manual supervision",
    webrajya: "5 minutes with built-in interactive manual & printable cheatsheet",
  },
  {
    feature: "Table Navigation",
    traditional: "Manual scrolling through unsorted grids (Table 1, 10, 2)",
    webrajya: "0.2s Quick Table Jump ('T') + Natural Numerical Sorting",
    highlight: true,
  },
  {
    feature: "Midnight Sales Logging",
    traditional: "Frequently drops 00:00–05:30 AM sales due to UTC server offsets",
    webrajya: "100% Local Timezone Accuracy (isDateToday() Revenue Engine)",
    highlight: true,
  },
  {
    feature: "Interface Aesthetics",
    traditional: "Clunky Windows 98 style legacy grid layout",
    webrajya: "Modern Dark-Mode & Glassmorphic High-Contrast UI",
  },
];

export function PosComparisonSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F8F3EB] text-[#020C2B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#020C2B] text-xs font-mono uppercase tracking-widest border border-[#020C2B]/10 shadow-sm font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E58145]" /> Head-To-Head Comparison
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#020C2B]">
            Why Top Restaurants Switch to <br />
            <span className="text-[#E58145]">WebRajya POS</span>
          </h2>

          <p className="text-base sm:text-lg text-[#525866] max-w-2xl mx-auto">
            See how WebRajya POS eliminates billing bottlenecks, midnight accounting bugs, and staff training overhead compared to legacy software.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="bg-white rounded-3xl border border-[#020C2B]/10 shadow-xl overflow-hidden">
          
          {/* Mobile Card View (shown on screens < md) */}
          <div className="block md:hidden divide-y divide-[#020C2B]/10">
            {COMPARISONS.map((row, idx) => (
              <div key={idx} className="p-5 space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#020C2B] text-base">{row.feature}</span>
                  {row.highlight && (
                    <span className="text-[10px] font-mono bg-[#E58145]/15 text-[#E58145] px-2 py-0.5 rounded font-bold">
                      Key Win
                    </span>
                  )}
                </div>

                {/* WebRajya POS Winner Box */}
                <div className="p-3.5 rounded-2xl bg-[#E58145]/10 border border-[#E58145]/20 space-y-1">
                  <div className="text-xs font-mono font-bold text-[#E58145] uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#E58145]" /> WebRajya POS
                  </div>
                  <div className="text-sm font-semibold text-[#020C2B] pl-5">
                    {row.webrajya}
                  </div>
                </div>

                {/* Traditional POS Box */}
                <div className="p-3 rounded-2xl bg-[#F8F3EB]/60 border border-[#020C2B]/5 space-y-1">
                  <div className="text-xs font-mono font-bold text-red-500 uppercase tracking-wider flex items-center gap-1.5">
                    <XCircle className="w-3.5 h-3.5 text-red-500" /> Traditional POS
                  </div>
                  <div className="text-xs text-[#525866] pl-5">
                    {row.traditional}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Laptop & Desktop Table View (hidden on mobile, shown on md and above) */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#020C2B] text-white">
                  <th className="py-5 px-6 font-mono text-xs uppercase tracking-wider text-[#F8F3EB]/70 w-1/4">
                    Feature &amp; Workflow
                  </th>
                  <th className="py-5 px-6 font-mono text-xs uppercase tracking-wider text-red-300 w-3/8">
                    Traditional Restaurant POS
                  </th>
                  <th className="py-5 px-6 font-mono text-xs uppercase tracking-wider text-[#E58145] bg-white/10 w-3/8">
                    WebRajya POS 🚀
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#020C2B]/10 text-sm">
                {COMPARISONS.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`transition-colors ${
                      row.highlight ? "bg-[#E58145]/5 font-medium" : "hover:bg-[#F8F3EB]/50"
                    }`}
                  >
                    {/* Feature Title */}
                    <td className="py-4 px-6 font-bold text-[#020C2B]">
                      {row.feature}
                    </td>

                    {/* Traditional POS */}
                    <td className="py-4 px-6 text-[#525866] align-top">
                      <div className="flex items-start gap-2.5">
                        <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>

                    {/* WebRajya POS */}
                    <td className="py-4 px-6 text-[#020C2B] font-semibold bg-[#E58145]/10 align-top border-l border-[#E58145]/20">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#E58145] shrink-0 mt-0.5" />
                        <span>{row.webrajya}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Banner */}
          <div className="bg-[#020C2B] p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-lg font-bold flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#E58145]" /> Ready to Supercharge Your Restaurant Billing?
              </div>
              <p className="text-xs text-[#F8F3EB]/70 mt-1">
                Experience zero lag, instant hotkeys, and 100% accurate sales tracking today.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Button href="/demo" variant="cta" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
