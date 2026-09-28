"use client";

import React, { useState } from "react";
import { TrendingUp, PieChart, BarChart3, Utensils, DollarSign, ArrowUpRight, Award, ShoppingBag } from "lucide-react";

export function ReportsDashboardSection() {
  const [timeframe, setTimeframe] = useState<"Today" | "Week" | "Month">("Today");

  const STATS = {
    Today: { revenue: "₹48,920", orders: 142, avgCheck: "₹344", foodCost: "26.4%", topItem: "Butter Chicken" },
    Week: { revenue: "₹3,42,150", orders: 980, avgCheck: "₹349", foodCost: "25.8%", topItem: "Woodfired Pizza" },
    Month: { revenue: "₹14,85,000", orders: 4210, avgCheck: "₹352", foodCost: "26.1%", topItem: "Butter Chicken" }
  };

  const activeStats = STATS[timeframe];

  return (
    <section className="py-24 bg-[#F8F3EB] border-t border-[#020C2B]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase text-[#020C2B] tracking-wider bg-[#020C2B]/5 px-3.5 py-1.5 rounded-full border border-[#020C2B]/15 font-semibold">
            📊 Owner Intelligence &amp; Zero-Discrepancy Ledger
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            Reports &amp; Live Financial Analytics
          </h2>
          <p className="text-[#525866] text-base sm:text-lg">
            100% local timezone revenue synchronization (`isDateToday()`) preventing midnight UTC date-dropping. Track hourly sales, dish popularity, and payment settlements with zero discrepancy.
          </p>
        </div>

        {/* Dashboard Mockup Component */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF5EF] text-[#020C2B] border border-[#020C2B]/10 shadow-xl space-y-6">
          
          {/* Header Timeframe Switcher */}
          <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-[#020C2B]/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#E58145] text-white flex items-center justify-center font-bold shadow-sm">
                <TrendingUp className="w-4 h-4" />
              </div>
              <span className="font-bold text-[#020C2B] text-base">WebRajya Owner Pulse</span>
            </div>

            <div className="flex items-center gap-1.5 font-mono text-xs">
              {(["Today", "Week", "Month"] as const).map(tf => (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer font-bold ${
                    timeframe === tf
                      ? "bg-[#E58145] text-white border-[#E58145] shadow-sm"
                      : "bg-white text-[#020C2B] border-[#020C2B]/10 hover:bg-[#020C2B]/5"
                  }`}
                >
                  {tf}
                </button>
              ))}
            </div>
          </div>

          {/* Stat Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
            <div className="p-4 rounded-2xl bg-white border border-[#020C2B]/10 space-y-1 font-mono shadow-xs">
              <span className="text-[10px] text-[#525866] uppercase tracking-wider block font-semibold">Total Sales</span>
              <span className="text-xl sm:text-2xl font-bold text-[#E58145] block">{activeStats.revenue}</span>
              <span className="text-[10px] text-emerald-600 flex items-center gap-0.5 font-semibold">
                <ArrowUpRight className="w-3 h-3" /> +14.2% vs prev
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#020C2B]/10 space-y-1 font-mono shadow-xs">
              <span className="text-[10px] text-[#525866] uppercase tracking-wider block font-semibold">Total Orders</span>
              <span className="text-xl sm:text-2xl font-bold text-[#020C2B] block">{activeStats.orders}</span>
              <span className="text-[10px] text-[#525866]">Completed</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#020C2B]/10 space-y-1 font-mono shadow-xs">
              <span className="text-[10px] text-[#525866] uppercase tracking-wider block font-semibold">Average Ticket</span>
              <span className="text-xl sm:text-2xl font-bold text-[#020C2B] block">{activeStats.avgCheck}</span>
              <span className="text-[10px] text-[#525866]">Per Table</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#020C2B]/10 space-y-1 font-mono shadow-xs">
              <span className="text-[10px] text-[#525866] uppercase tracking-wider block font-semibold">Food Cost %</span>
              <span className="text-xl sm:text-2xl font-bold text-emerald-600 block">{activeStats.foodCost}</span>
              <span className="text-[10px] text-emerald-600 font-semibold">Optimal Target</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#020C2B]/10 space-y-1 font-mono col-span-2 lg:col-span-1 shadow-xs">
              <span className="text-[10px] text-[#525866] uppercase tracking-wider block font-semibold">Top Grossing Item</span>
              <span className="text-sm font-bold text-[#E58145] block truncate">{activeStats.topItem}</span>
              <span className="text-[10px] text-[#525866]">Highest Volume</span>
            </div>
          </div>

          {/* Payment & Category Breakdown Visualizer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white border border-[#020C2B]/10 space-y-3 shadow-xs">
              <span className="text-xs font-mono text-[#020C2B] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                <PieChart className="w-3.5 h-3.5 text-[#E58145]" /> Payment Mode Breakdown
              </span>
              
              <div className="space-y-2 text-xs font-mono">
                <div>
                  <div className="flex justify-between text-[#020C2B] pb-1 font-semibold">
                    <span>UPI QR Payments</span>
                    <span>58% (₹28,370)</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#020C2B]/10 overflow-hidden">
                    <div className="h-full bg-[#E58145] rounded-full w-[58%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[#020C2B] pb-1 font-semibold">
                    <span>Credit / Debit Cards</span>
                    <span>28% (₹13,690)</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#020C2B]/10 overflow-hidden">
                    <div className="h-full bg-sky-500 rounded-full w-[28%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[#020C2B] pb-1 font-semibold">
                    <span>Cash</span>
                    <span>14% (₹6,860)</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#020C2B]/10 overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-[14%]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#020C2B]/10 space-y-3 shadow-xs">
              <span className="text-xs font-mono text-[#020C2B] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                <BarChart3 className="w-3.5 h-3.5 text-[#E58145]" /> Best-Selling Menu Items
              </span>

              <div className="space-y-2 text-xs font-mono">
                {[
                  { name: "Paneer Butter Masala", sales: "84 Portion Orders", rev: "₹28,560" },
                  { name: "Woodfired Pizza", sales: "62 Portion Orders", rev: "₹26,040" },
                  { name: "Cold Brew Espresso", sales: "110 Portion Orders", rev: "₹23,100" }
                ].map(item => (
                  <div key={item.name} className="flex items-center justify-between p-2 rounded-lg bg-[#FAF5EF] border border-[#020C2B]/10">
                    <div>
                      <span className="font-semibold text-[#020C2B] block">{item.name}</span>
                      <span className="text-[10px] text-[#525866]">{item.sales}</span>
                    </div>
                    <span className="font-bold text-[#E58145]">{item.rev}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
