"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChefHat, Printer, Monitor, CheckCircle2, Clock, Check, Utensils, Flame, Sparkles } from "lucide-react";
import { FadeIn, BentoCard, StaggerContainer, StaggerItem } from "@/components/ui/motion";

interface KitchenOrder {
  id: string;
  table: string;
  section: string;
  items: string[];
  time: string;
  status: "Preparing" | "Ready" | "Served";
}

const INITIAL_ORDERS: KitchenOrder[] = [
  { id: "KOT-104", table: "Table T-02", section: "Main Kitchen", items: ["1x Paneer Butter Masala", "2x Butter Naan"], time: "2m ago", status: "Preparing" },
  { id: "KOT-105", table: "Table T-04", section: "Tandoor & Grill", items: ["1x Chicken Tikka Starter", "1x Garlic Naan"], time: "5m ago", status: "Ready" },
  { id: "KOT-106", table: "Takeaway #12", section: "Bar & Drinks", items: ["2x Cold Brew Shake", "1x Masala Chai"], time: "1m ago", status: "Preparing" }
];

export function KitchenKotSection() {
  const [activeTab, setActiveTab] = useState<"kds" | "kot">("kds");
  const [orders, setOrders] = useState<KitchenOrder[]>(INITIAL_ORDERS);

  const cycleStatus = (id: string) => {
    setOrders(prev => prev.map(o => {
      if (o.id !== id) return o;
      const nextStatus = o.status === "Preparing" ? "Ready" : o.status === "Ready" ? "Served" : "Preparing";
      return { ...o, status: nextStatus };
    }));
  };

  return (
    <section className="py-24 bg-[#F8F3EB] border-t border-[#020C2B]/10 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
              Kitchen Order Tickets &amp; KDS Display
            </h2>
            <p className="text-[#525866] text-base sm:text-lg">
              Seamlessly route orders from POS registers directly to digital Kitchen Display Systems (KDS) or section thermal printers.
            </p>
          </div>
        </FadeIn>

        {/* Journey visualizer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FadeIn direction="up" delay={0.1}>
            <BentoCard glow className="p-6 rounded-3xl bg-white border border-[#020C2B]/10 shadow-sm hover:shadow-xl space-y-3 h-full">
              <div className="w-10 h-10 rounded-xl bg-[#020C2B] text-white flex items-center justify-center font-bold text-sm shadow-md">
                1
              </div>
              <h3 className="text-lg font-bold text-[#020C2B]">1. POS Order Punch</h3>
              <p className="text-xs text-[#525866] leading-relaxed">
                Waiters punch orders on handheld tablets or cashier terminals with modifiers, spices, and preparation notes attached.
              </p>
            </BentoCard>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <BentoCard glow className="p-6 rounded-3xl bg-white border border-[#020C2B]/10 shadow-sm hover:shadow-xl space-y-3 h-full">
              <div className="w-10 h-10 rounded-xl bg-[#E58145] text-white flex items-center justify-center font-bold text-sm shadow-md">
                2
              </div>
              <h3 className="text-lg font-bold text-[#020C2B]">2. Section Split Routing</h3>
              <p className="text-xs text-[#525866] leading-relaxed">
                Dishes split automatically in real time: Drinks go to Bar printer, Tandoor items to Oven station, Mains to Main Kitchen Chef.
              </p>
            </BentoCard>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <BentoCard glow className="p-6 rounded-3xl bg-white border border-[#020C2B]/10 shadow-sm hover:shadow-xl space-y-3 h-full">
              <div className="w-10 h-10 rounded-xl bg-[#020C2B] text-white flex items-center justify-center font-bold text-sm shadow-md">
                3
              </div>
              <h3 className="text-lg font-bold text-[#020C2B]">3. Prep &amp; Prompt Dispatch</h3>
              <p className="text-xs text-[#525866] leading-relaxed">
                Chefs tap &apos;Ready&apos; on the touch display or thermal KOT ticket is pinned to the service tray for instant runner pickup.
              </p>
            </BentoCard>
          </FadeIn>
        </div>

        {/* Interactive KDS / KOT Display Mockup */}
        <FadeIn direction="up" delay={0.2}>
          <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF5EF] text-[#020C2B] border border-[#020C2B]/15 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#020C2B]/10 flex-wrap gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#E58145] text-white flex items-center justify-center shadow-xs">
                  <ChefHat className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="font-bold text-[#020C2B] text-base block">Digital Kitchen Display System (KDS)</span>
                  <span className="text-[10px] text-[#525866] font-mono">Live routing: 3 active kitchen stations</span>
                </div>
              </div>

              {/* View Switcher Tabs with Animated layoutId */}
              <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-[#020C2B]/10 relative shadow-xs">
                {(["kds", "kot"] as const).map(tab => {
                  const isSelected = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`relative px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-colors cursor-pointer z-10 flex items-center gap-1.5 ${
                        isSelected ? "text-white" : "text-[#020C2B] hover:text-[#E58145]"
                      }`}
                    >
                      {isSelected && (
                        <motion.div
                          layoutId="activeKitchenTab"
                          className="absolute inset-0 bg-[#E58145] rounded-lg shadow-xs -z-10"
                          transition={{ type: "spring", stiffness: 450, damping: 30 }}
                        />
                      )}
                      {tab === "kds" ? (
                        <>
                          <Monitor className="w-3.5 h-3.5" /> KDS Touchscreen
                        </>
                      ) : (
                        <>
                          <Printer className="w-3.5 h-3.5" /> Thermal KOT Printers
                        </>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* KDS Touchscreen Cards View */}
            {activeTab === "kds" && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <AnimatePresence>
                  {orders.map(kot => (
                    <motion.div
                      key={kot.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="p-4 rounded-2xl bg-white border border-[#020C2B]/10 space-y-3 font-mono shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between pb-2 border-b border-[#020C2B]/10">
                          <span className="font-bold text-[#E58145] text-xs">{kot.id} • {kot.table}</span>
                          <span className="text-[10px] text-[#525866] flex items-center gap-1 font-semibold">
                            <Clock className="w-3 h-3 text-[#E58145]" /> {kot.time}
                          </span>
                        </div>

                        <div className="text-[11px] text-[#525866] uppercase tracking-wider pt-1">
                          Station: <span className="text-[#020C2B] font-bold">{kot.section}</span>
                        </div>

                        <div className="space-y-1.5 text-xs text-[#020C2B] py-2 font-semibold">
                          {kot.items.map(i => (
                            <div key={i} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#E58145] shrink-0" />
                              <span>{i}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-[#020C2B]/10 flex items-center justify-between">
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={() => cycleStatus(kot.id)}
                          className={`text-[10px] px-2.5 py-1 rounded-lg font-bold uppercase cursor-pointer transition-colors shadow-xs ${
                            kot.status === "Ready"
                              ? "bg-emerald-600 text-white"
                              : kot.status === "Served"
                              ? "bg-[#020C2B] text-white"
                              : "bg-[#E58145] text-white"
                          }`}
                        >
                          {kot.status} (Tap to change)
                        </motion.button>
                        <span className="text-[10px] text-[#525866] font-sans font-medium">
                          {kot.status === "Ready" ? "Ready for Runner" : kot.status === "Served" ? "Completed" : "Cooking..."}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}

            {/* Thermal KOT Printers Tape Mockup View */}
            {activeTab === "kot" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              >
                {orders.map(kot => (
                  <div
                    key={kot.id}
                    className="p-5 bg-white border-2 border-dashed border-[#020C2B]/20 rounded-2xl font-mono text-xs space-y-2 text-[#020C2B] shadow-lg relative"
                  >
                    <div className="text-center font-bold pb-2 border-b border-dashed border-[#020C2B]/20">
                      <p className="text-xs text-[#E58145]">*** KITCHEN ORDER TICKET ***</p>
                      <p className="text-[11px] text-[#020C2B]">{kot.table} • {kot.id}</p>
                    </div>

                    <div className="flex justify-between text-[10px] text-[#525866]">
                      <span>Station: {kot.section}</span>
                      <span>{kot.time}</span>
                    </div>

                    <div className="py-2 border-y border-dashed border-[#020C2B]/15 space-y-1 font-semibold">
                      {kot.items.map(item => (
                        <p key={item}>{item}</p>
                      ))}
                    </div>

                    <div className="text-center text-[9px] text-[#525866] pt-1">
                      WebRajya High-Speed ESC/POS Driver
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
