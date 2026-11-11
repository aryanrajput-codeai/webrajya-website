"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Banknote, Calculator, ReceiptText, CheckCircle2, ArrowRight } from "lucide-react";

export function DailyCashManagementSection() {
  const [denominations, setDenominations] = useState<{ [key: number]: number }>({
    500: 14,
    200: 25,
    100: 42,
    50: 16
  });

  const countedTotal = Object.entries(denominations).reduce(
    (acc, [val, count]) => acc + (Number(val) * count),
    0
  );

  const expectedCash = 17000;
  const difference = countedTotal - expectedCash;

  const PILLARS = [
    {
      title: "Record Daily Expenses",
      desc: "Log shop out-of-pocket expenses such as local delivery, packaging, cleaning, or staff tea directly from the cash drawer.",
      icon: <ReceiptText className="w-5 h-5 text-[#2563EB]" />
    },
    {
      title: "Count Cash by Denomination",
      desc: "Enter the quantity of notes for standard Indian currency denominations (₹500, ₹200, ₹100, ₹50, ₹20, ₹10).",
      icon: <Banknote className="w-5 h-5 text-[#2563EB]" />
    },
    {
      title: "Compare Expected and Actual Cash",
      desc: "Automatically calculate discrepancies between recorded cash sales, logged expenses, and physical cash in the drawer.",
      icon: <Calculator className="w-5 h-5 text-[#2563EB]" />
    },
    {
      title: "Generate a Closing Summary",
      desc: "Prepare a neat daily closing report for business accounting records and share summaries via supported channels.",
      icon: <CheckCircle2 className="w-5 h-5 text-[#16A34A]" />
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight">
            End the Day Knowing Where Your Money Went.
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
            Daily closing shouldn&apos;t require manually matching every bill against a pile of cash. WebRajya Invoice&apos;s cash-management workflow brings sales, payment records and cash counting together.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map(p => (
            <div
              key={p.title}
              className="p-6 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs hover:border-[#2563EB]/40 hover:shadow-md transition-all space-y-3"
            >
              <div className="w-10 h-10 rounded-2xl bg-white border border-[#CBD5E1] flex items-center justify-center shadow-xs">
                {p.icon}
              </div>
              <h3 className="text-base font-bold text-[#0F172A]">{p.title}</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Interactive Denomination Counter Preview */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] max-w-3xl mx-auto space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0] flex-wrap gap-2">
            <div>
              <h3 className="text-lg font-bold text-[#0F172A]">Denomination Cash Counter Tool</h3>
              <p className="text-xs text-[#64748B]">Simulate end-of-day cash drawer reconciliation</p>
            </div>
            <span className="text-xs font-mono font-bold text-[#2563EB] bg-[#2563EB]/10 px-3 py-1 rounded-full">
              Cash Drawer Mode
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
            {([500, 200, 100, 50] as const).map(denom => (
              <div key={denom} className="p-3.5 rounded-2xl bg-white border border-[#E2E8F0] space-y-1">
                <span className="text-[#64748B] text-[10px] block">₹{denom} Notes</span>
                <input
                  type="number"
                  min="0"
                  value={denominations[denom]}
                  onChange={(e) => {
                    const val = Math.max(0, parseInt(e.target.value) || 0);
                    setDenominations({ ...denominations, [denom]: val });
                  }}
                  className="w-full text-base font-bold text-[#0F172A] bg-transparent border-b border-[#CBD5E1] focus:outline-none focus:border-[#2563EB]"
                />
                <span className="text-[10px] text-[#64748B] block pt-1">
                  = ₹{(denom * (denominations[denom] || 0)).toLocaleString("en-IN")}
                </span>
              </div>
            ))}
          </div>

          {/* Reconciliation Box */}
          <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] font-mono text-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[#64748B] text-[11px] block">Calculated Counter Cash:</span>
              <span className="text-xl font-black text-[#0F172A]">
                ₹{countedTotal.toLocaleString("en-IN")}
              </span>
            </div>

            <div>
              <span className="text-[#64748B] text-[11px] block">Expected System Sales:</span>
              <span className="text-base font-bold text-[#64748B]">
                ₹{expectedCash.toLocaleString("en-IN")}
              </span>
            </div>

            <div>
              <span className="text-[#64748B] text-[11px] block">Reconciliation Diff:</span>
              <span className={`text-base font-bold ${difference >= 0 ? "text-[#16A34A]" : "text-[#DC2626]"}`}>
                {difference >= 0 ? `+₹${difference}` : `-₹${Math.abs(difference)}`} {difference === 0 ? "(Exact Match)" : ""}
              </span>
            </div>
          </div>

          <div className="text-center pt-2">
            <Link
              href="/demo?product=invoice&feature=cash-management"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8]"
            >
              <span>Explore Cash Management</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <p className="text-[11px] font-mono text-center text-[#94A3B8] italic">
            *Cash management workflows integrate directly with daily sales closing records.
          </p>
        </div>

      </div>
    </section>
  );
}
