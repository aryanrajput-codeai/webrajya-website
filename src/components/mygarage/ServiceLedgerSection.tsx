"use client";

import React from "react";
import { Wrench, Calendar, Gauge, Receipt, ShieldAlert, Check } from "lucide-react";

export function ServiceLedgerSection() {
  return (
    <section className="py-20 bg-white border-t border-[#020C2B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            Maintain Full Resale Value with Verified Maintenance History.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Log periodic workshop invoices, synthetic oil changes, wheel alignment, brake pad replacements, and odometer milestones with attached PDF receipts.
          </p>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FAF5EF] p-6 rounded-2xl border border-[#020C2B]/10 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#0EA5E9]/15 text-[#0EA5E9] flex items-center justify-center font-bold">
              <Gauge className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-[#020C2B]">Odometer Milestone Tracker</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Log current distance traveled and let MyGarage forecast upcoming 5,000 km or 10,000 km major service intervals automatically.
            </p>
          </div>

          <div className="bg-[#FAF5EF] p-6 rounded-2xl border border-[#020C2B]/10 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#0EA5E9]/15 text-[#0EA5E9] flex items-center justify-center font-bold">
              <Receipt className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-[#020C2B]">Invoice Attachment Ledger</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Attach image/PDF copies of service center bills, part replacement warranties, and labor receipts directly to each logged service event.
            </p>
          </div>

          <div className="bg-[#FAF5EF] p-6 rounded-2xl border border-[#020C2B]/10 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#0EA5E9]/15 text-[#0EA5E9] flex items-center justify-center font-bold">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-[#020C2B]">Part Warranty Alerts</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Track battery replacement dates (36/48 mo warranty), tire rotation cycles, and brake fluid flushes before unexpected breakdowns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
