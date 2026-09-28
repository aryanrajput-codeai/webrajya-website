"use client";

import React, { useState } from "react";
import { ChefHat, Printer, Monitor, CheckCircle2, Clock, Flame, Utensils } from "lucide-react";

export function KitchenKotSection() {
  const [activeTab, setActiveTab] = useState<"kds" | "kot">("kds");

  const KITCHEN_ORDERS = [
    { id: "KOT-104", table: "T-02", section: "Main Kitchen", items: ["1x Paneer Butter Masala", "2x Butter Naan"], time: "3m ago", status: "Preparing" },
    { id: "KOT-105", table: "T-04", section: "Tandoor", items: ["1x Chicken Tikka Starter"], time: "6m ago", status: "Ready" },
    { id: "KOT-106", table: "Takeaway #12", section: "Bar & Drinks", items: ["2x Cold Brew Espresso Shake"], time: "1m ago", status: "Preparing" }
  ];

  return (
    <section className="py-24 bg-[#F8F3EB] border-t border-[#020C2B]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase text-[#020C2B] tracking-wider bg-[#020C2B]/5 px-3.5 py-1.5 rounded-full border border-[#020C2B]/15 font-semibold">
            Kitchen Automation
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            Kitchen Order Tickets &amp; KDS Display
          </h2>
          <p className="text-[#525866] text-base sm:text-lg">
            Seamlessly route orders from POS registers directly to digital Kitchen Display Systems (KDS) or section thermal printers.
          </p>
        </div>

        {/* Journey visualizer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#020C2B]/10 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#020C2B] text-white flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="text-lg font-bold text-[#020C2B]">1. POS Order Punch</h3>
            <p className="text-xs text-[#525866] leading-relaxed">
              Waiter inputs order on tablet or cashier terminal. Modifiers &amp; kitchen preparation notes are attached.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#020C2B]/10 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#020C2B] text-white flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="text-lg font-bold text-[#020C2B]">2. Section Routing</h3>
            <p className="text-xs text-[#525866] leading-relaxed">
              Dishes are split automatically: Drinks go to Bar, Tandoori items go to Oven station, Mains go to Chef.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#020C2B]/10 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#020C2B] text-white flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="text-lg font-bold text-[#020C2B]">3. Prep &amp; Serving</h3>
            <p className="text-xs text-[#525866] leading-relaxed">
              Chefs tap &apos;Ready&apos; on KDS touchscreen or thermal KOT ticket is attached to plate for prompt runner pickup.
            </p>
          </div>
        </div>

        {/* Interactive KDS / KOT Display Mockup */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF5EF] text-[#020C2B] border border-[#020C2B]/10 shadow-xl space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#020C2B]/10 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <ChefHat className="w-5 h-5 text-[#E58145]" />
              <span className="font-bold text-[#020C2B] text-base">Digital Kitchen Display System (KDS)</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono">
              <button
                onClick={() => setActiveTab("kds")}
                className={`px-3 py-1.5 rounded-lg border font-bold transition-all cursor-pointer ${
                  activeTab === "kds" ? "bg-[#E58145] text-white border-[#E58145] shadow-sm" : "bg-white text-[#020C2B] border-[#020C2B]/10 hover:bg-[#020C2B]/5"
                }`}
              >
                <Monitor className="w-3.5 h-3.5 inline mr-1" /> KDS Display
              </button>
              <button
                onClick={() => setActiveTab("kot")}
                className={`px-3 py-1.5 rounded-lg border font-bold transition-all cursor-pointer ${
                  activeTab === "kot" ? "bg-[#E58145] text-white border-[#E58145] shadow-sm" : "bg-white text-[#020C2B] border-[#020C2B]/10 hover:bg-[#020C2B]/5"
                }`}
              >
                <Printer className="w-3.5 h-3.5 inline mr-1" /> Thermal KOT Printers
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {KITCHEN_ORDERS.map(kot => (
              <div key={kot.id} className="p-4 rounded-2xl bg-white border border-[#020C2B]/10 space-y-3 font-mono shadow-xs">
                <div className="flex items-center justify-between pb-2 border-b border-[#020C2B]/10">
                  <span className="font-bold text-[#E58145] text-xs">{kot.id} • {kot.table}</span>
                  <span className="text-[10px] text-[#525866] flex items-center gap-1 font-semibold">
                    <Clock className="w-3 h-3 text-[#E58145]" /> {kot.time}
                  </span>
                </div>

                <div className="text-[11px] text-[#525866] uppercase tracking-wider">
                  Station: <span className="text-[#020C2B] font-semibold">{kot.section}</span>
                </div>

                <div className="space-y-1 text-xs text-[#020C2B] py-1 font-semibold">
                  {kot.items.map(i => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E58145]"></span> {i}
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-[#020C2B]/10 flex items-center justify-between">
                  <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
                    kot.status === "Ready" ? "bg-emerald-600 text-white" : "bg-[#E58145] text-white"
                  }`}>
                    {kot.status}
                  </span>
                  <button className="text-[11px] text-[#525866] hover:text-[#020C2B] underline font-semibold cursor-pointer">
                    Mark Served
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
