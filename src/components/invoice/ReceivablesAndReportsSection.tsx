"use client";

import React, { useState } from "react";
import { TrendingUp, Download, Share2, Printer, Clock, FileText, CheckCircle2, PieChart, BarChart3, SlidersHorizontal } from "lucide-react";

export function ReceivablesAndReportsSection() {
  const [period, setPeriod] = useState<"This Month" | "Quarter" | "Year">("This Month");

  return (
    <section className="py-24 bg-[#F8F3EB] border-t border-[#020C2B]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Receivables & Reports Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase text-[#E58145] tracking-wider bg-[#E58145]/10 px-3.5 py-1 rounded-full border border-[#E58145]/20 font-bold">
            Cash Flow &amp; Analytics
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            Receivables &amp; Business Intelligence
          </h2>
          <p className="text-[#020C2B]/80 text-base sm:text-lg">
            Monitor aging receivables, total revenue, invoice counts, and collection performance in one unified executive dashboard.
          </p>
        </div>

        {/* Dashboard Visualizer */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF5EF] border border-[#020C2B]/10 space-y-6 shadow-xl text-[#020C2B]">
          
          <div className="flex items-center justify-between pb-4 border-b border-[#020C2B]/10 flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#E58145] text-white flex items-center justify-center font-bold shadow-sm">
                <PieChart className="w-4 h-4" />
              </div>
              <span className="font-bold text-[#020C2B] text-base">Executive Financial Summary</span>
            </div>

            <div className="flex items-center gap-1 font-mono text-xs">
              {(["This Month", "Quarter", "Year"] as const).map(p => (
                <button
                  key={p}
                  onClick={() => setPeriod(p)}
                  className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                    period === p
                      ? "bg-[#E58145] text-white border-[#E58145] font-bold shadow-sm"
                      : "bg-white text-[#020C2B] border-[#020C2B]/10 hover:bg-[#020C2B]/5"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
            <div className="p-4 rounded-2xl bg-white border border-[#020C2B]/10 space-y-1 shadow-xs">
              <span className="text-[10px] text-[#525866] uppercase tracking-wider block">Total Billed Revenue</span>
              <span className="text-2xl font-bold text-[#E58145] block">₹8,45,000</span>
              <span className="text-[10px] text-[#525866]">GST Tax Compliant</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#020C2B]/10 space-y-1 shadow-xs">
              <span className="text-[10px] text-[#525866] uppercase tracking-wider block">Invoices Generated</span>
              <span className="text-2xl font-bold text-[#020C2B] block">44 Invoices</span>
              <span className="text-[10px] text-[#525866]">Avg ₹19,200/bill</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#020C2B]/10 space-y-1 shadow-xs">
              <span className="text-[10px] text-[#525866] uppercase tracking-wider block">Collections Received</span>
              <span className="text-2xl font-bold text-[#020C2B] block">₹8,10,000</span>
              <span className="text-[10px] text-emerald-600 font-semibold">95.8% Collection Rate</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#020C2B]/10 space-y-1 shadow-xs">
              <span className="text-[10px] text-[#525866] uppercase tracking-wider block">Total Receivables</span>
              <span className="text-2xl font-bold text-amber-600 block">₹35,000</span>
              <span className="text-[10px] text-[#525866]">1 Client Pending</span>
            </div>
          </div>

          {/* Aging Receivables Breakdown */}
          <div className="p-4 rounded-2xl bg-white border border-[#020C2B]/10 space-y-3 font-mono text-xs shadow-xs">
            <div className="flex items-center justify-between text-[#525866]">
              <span className="flex items-center gap-1.5 text-[#020C2B] font-semibold font-sans">
                <Clock className="w-4 h-4 text-[#E58145]" /> Aging Receivables Breakdown
              </span>
              <span>1 Overdue Invoice</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 pt-1">
              <div className="p-2.5 rounded-xl bg-[#FAF5EF] border border-[#020C2B]/10">
                <span className="text-[10px] text-[#525866] block">Current (0-15 Days)</span>
                <span className="font-bold text-[#020C2B] text-sm">₹0.00</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#FAF5EF] border border-[#020C2B]/10">
                <span className="text-[10px] text-[#525866] block">16-30 Days</span>
                <span className="font-bold text-amber-600 text-sm">₹35,000</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#FAF5EF] border border-[#020C2B]/10">
                <span className="text-[10px] text-[#525866] block">31-60 Days</span>
                <span className="font-bold text-[#020C2B] text-sm">₹0.00</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#FAF5EF] border border-[#020C2B]/10">
                <span className="text-[10px] text-[#525866] block">60+ Days Overdue</span>
                <span className="font-bold text-emerald-600 text-sm">₹0.00</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
