"use client";

import React, { useState } from "react";
import {
  BarChart3,
  TrendingUp,
  PieChart,
  Eye,
  Search,
  Zap,
  Award,
  ArrowRight,
  Sparkles,
  Layers,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export function BusinessIntelligence() {
  const [timeframe, setTimeframe] = useState<"Today" | "Week" | "Month">("Today");

  // Illustrative demo metrics clearly labeled as realistic demo data
  const DEMO_PULSE = {
    Today: {
      totalRevenue: "₹52,480",
      paymentsDue: "₹12,500",
      completedSales: "148 Transactions",
      topActivity: "Butter Chicken & Naan Combo",
      collectionRate: "96.2%"
    },
    Week: {
      totalRevenue: "₹3,68,900",
      paymentsDue: "₹35,000",
      completedSales: "1,040 Transactions",
      topActivity: "Woodfired Margherita Pizza",
      collectionRate: "95.8%"
    },
    Month: {
      totalRevenue: "₹15,40,000",
      paymentsDue: "₹48,000",
      completedSales: "4,320 Transactions",
      topActivity: "Enterprise Cloud License",
      collectionRate: "97.1%"
    }
  };

  const activeMetrics = DEMO_PULSE[timeframe];

  const STAGES = [
    { number: "01", title: "SEE", subtitle: "Know what happened.", desc: "Clear operational visibility into daily sales, billing counts, and active tables or invoices." },
    { number: "02", title: "UNDERSTAND", subtitle: "See patterns in everyday activity.", desc: "Identify rush hour spikes, top-performing product items, and payment mode preferences." },
    { number: "03", title: "ACT", subtitle: "Turn information into action.", desc: "Adjust menu pricing, resolve aging client receivables, and prevent kitchen stock shortages." },
    { number: "04", title: "GROW", subtitle: "Build better operating habits over time.", desc: "Establish consistent financial margins and structured workflows across all outlets." }
  ];

  return (
    <section
      id="business-intelligence"
      className="py-24 bg-[#F8F3EB] text-[#020C2B] border-t border-b border-[#020C2B]/10 relative overflow-hidden font-sans"
      aria-labelledby="bi-title"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-[#E58145]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#020C2B]/5 border border-[#020C2B]/15 text-[#020C2B] text-xs font-mono font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#E58145]" />
            FROM ACTIVITY TO INSIGHT
          </span>

          <h2
            id="bi-title"
            className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight leading-tight"
          >
            Your business generates information every day. WebRajya helps you understand it.
          </h2>

          <p className="text-base sm:text-lg text-[#525866] leading-relaxed max-w-2xl mx-auto">
            Every order, invoice, payment and transaction creates information. WebRajya brings that information into useful views so you can understand what is happening and make decisions with better context.
          </p>
        </div>

        {/* CENTRAL TRANSFORM FLOW VISUALIZATION */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#020C2B]/10 space-y-8 shadow-xl">
          <div className="text-center space-y-1">
            <span className="text-[10px] font-mono text-[#E58145] uppercase tracking-wider block font-bold">
              OPERATIONAL DATA PIPELINE
            </span>
            <h3 className="text-xl font-bold text-[#020C2B]">How Daily Work Becomes Executive Intelligence</h3>
          </div>

          {/* Flow Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Box: Business Activity */}
            <div className="lg:col-span-4 p-5 rounded-2xl bg-[#F8F3EB] border border-[#020C2B]/10 space-y-3">
              <span className="text-xs font-mono text-[#E58145] uppercase tracking-wider block font-bold">
                1. BUSINESS ACTIVITY
              </span>
              <p className="text-xs text-[#525866]">
                Raw operational events generated at counters, tables, and billing desks:
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#020C2B] pt-1">
                {["Orders", "Invoices", "Payments", "Customers", "Products", "Inventory"].map(act => (
                  <span key={act} className="p-2 rounded-lg bg-white border border-[#020C2B]/10 flex items-center gap-1.5 font-medium shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E58145]" /> {act}
                  </span>
                ))}
              </div>
            </div>

            {/* Middle Node: WebRajya Platform */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center space-y-2 py-4">
              <div className="w-16 h-16 rounded-2xl bg-white border border-[#020C2B]/10 flex items-center justify-center p-2.5 shadow-lg hover:scale-105 transition-transform">
                <img
                  src="/webrajya-logo.svg"
                  alt="WebRajya Official Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-[#020C2B] text-base block font-mono">WEBRAJYA ENGINE</span>
                <span className="text-[10px] text-[#525866] font-mono">Aggregation &amp; Real-Time Analytics</span>
              </div>
            </div>

            {/* Right Box: Business Insights */}
            <div className="lg:col-span-4 p-5 rounded-2xl bg-[#F8F3EB] border border-[#020C2B]/10 space-y-3">
              <span className="text-xs font-mono text-[#E58145] uppercase tracking-wider block font-bold">
                2. BUSINESS INSIGHTS
              </span>
              <p className="text-xs text-[#525866]">
                Structured views that inform venue managers and business leaders:
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#020C2B] pt-1">
                {["Revenue", "Sales Trends", "Payments Due", "Top Products", "Order Activity", "Performance"].map(ins => (
                  <span key={ins} className="p-2 rounded-lg bg-[#E58145]/15 border border-[#E58145]/30 text-[#020C2B] flex items-center gap-1.5 font-bold shadow-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E58145]" /> {ins}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* FOUR INSIGHT STAGES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STAGES.map(stage => (
            <div
              key={stage.number}
              className="p-6 rounded-3xl bg-white border border-[#020C2B]/10 hover:border-[#E58145] shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-mono font-black text-[#E58145]">
                    {stage.number}
                  </span>
                  <span className="text-[10px] font-mono text-[#525866] uppercase tracking-wider">
                    Stage {stage.number}
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#020C2B]">{stage.title}</h4>
                  <p className="text-xs text-[#E58145] font-mono font-semibold mt-0.5">{stage.subtitle}</p>
                </div>
                <p className="text-xs text-[#525866] leading-relaxed">
                  {stage.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#020C2B]/10 text-[10px] font-mono text-[#525866]">
                WebRajya Intelligence Standard
              </div>
            </div>
          ))}
        </div>

        {/* INTERACTIVE DASHBOARD MOCKUP (ILLUSTRATIVE DEMO DATA) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF5EF] text-[#020C2B] border border-[#020C2B]/10 shadow-xl space-y-6">
          
          <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-[#020C2B]/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#E58145] text-white flex items-center justify-center font-bold shadow-sm">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-[#020C2B] text-base">Illustrative Business Pulse Dashboard</h3>
                <span className="text-[10px] text-[#525866] font-mono">Clean Demo Analytics View</span>
              </div>
            </div>

            {/* Timeframe Switcher */}
            <div className="flex items-center gap-1.5 font-mono text-xs">
              {(["Today", "Week", "Month"] as const).map(tf => (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  className={`px-3 py-1.5 rounded-lg border font-bold transition-all cursor-pointer ${
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

          {/* Metric Cards Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
            <div className="p-4 rounded-2xl bg-white border border-[#020C2B]/10 shadow-xs space-y-1">
              <span className="text-[10px] text-[#525866] uppercase tracking-wider block">Total Billed Revenue</span>
              <span className="text-xl sm:text-2xl font-bold text-[#E58145] block">{activeMetrics.totalRevenue}</span>
              <span className="text-[10px] text-emerald-600 font-semibold">Illustrative Demo</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#020C2B]/10 shadow-xs space-y-1">
              <span className="text-[10px] text-[#525866] uppercase tracking-wider block">Payments Due</span>
              <span className="text-xl sm:text-2xl font-bold text-[#E58145] block">{activeMetrics.paymentsDue}</span>
              <span className="text-[10px] text-[#525866]">Pending Collection</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#020C2B]/10 shadow-xs space-y-1">
              <span className="text-[10px] text-[#525866] uppercase tracking-wider block">Sales Activity</span>
              <span className="text-xl sm:text-2xl font-bold text-[#020C2B] block">{activeMetrics.completedSales}</span>
              <span className="text-[10px] text-[#525866]">Settled Orders</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#020C2B]/10 shadow-xs space-y-1">
              <span className="text-[10px] text-[#525866] uppercase tracking-wider block">Top Activity</span>
              <span className="text-xs sm:text-sm font-bold text-[#E58145] block truncate">{activeMetrics.topActivity}</span>
              <span className="text-[10px] text-emerald-600 font-semibold">{activeMetrics.collectionRate} Collection Rate</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#020C2B]/10 flex items-center justify-between text-xs font-mono text-[#525866] shadow-xs">
            <span>Illustrative analytics view representing WebRajya reports architecture</span>
            <span className="text-[#E58145] font-bold">WebRajya Standard</span>
          </div>
        </div>

      </div>
    </section>
  );
}
