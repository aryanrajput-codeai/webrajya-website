"use client";

import React from "react";
import { BarChart3, Fuel, Wrench, Shield, Download, FileSpreadsheet, DollarSign } from "lucide-react";

export function ExpenseAnalyticsSection() {
  return (
    <section className="py-20 bg-[#FAF5EF] border-t border-[#020C2B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            Clear Financial Breakdown of Total Cost of Ownership (TCO).
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Understand exactly how much your vehicle costs you per kilometer. Filter expenses by Fuel, Maintenance, Insurance, Tolls, and Accessories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#020C2B]/10 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Fuel className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#020C2B]">Fuel &amp; Charge Log</h3>
                <span className="text-xs font-mono text-slate-500">Petrol, Diesel &amp; kWh Charging</span>
              </div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Track fill-ups, liters added, fuel price per liter, and calculate exact fuel efficiency (km/l or km/kWh).
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#020C2B]/10 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#020C2B]">Category Breakdown</h3>
                <span className="text-xs font-mono text-slate-500">Service, Repairs &amp; Spares</span>
              </div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Categorize every rupee spent on routine servicing, emergency repairs, car washing, detailing, and accessories.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#020C2B]/10 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#020C2B]">1-Click CSV Export</h3>
                <span className="text-xs font-mono text-slate-500">Excel &amp; Accounting Ready</span>
              </div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Export comprehensive financial spreadsheets in standard CSV format for tax claims, business expense audits, or personal budgeting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
