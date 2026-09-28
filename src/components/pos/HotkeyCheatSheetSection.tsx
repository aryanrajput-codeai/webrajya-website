"use client";

import React, { useState, useEffect } from "react";
import { Keyboard, Printer, Zap, Command, CornerDownLeft, Sparkles, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface HotkeyItem {
  key: string;
  macKey: string;
  action: string;
  scope: string;
  description: string;
  simulatedMessage: string;
}

const HOTKEYS: HotkeyItem[] = [
  {
    key: "S",
    macKey: "S",
    action: "Focus Search Input",
    scope: "Cashier Terminal",
    description: "Sub-millisecond item filter without clicking",
    simulatedMessage: "⚡ Search input focused! Type 'Butter Naan'...",
  },
  {
    key: "K",
    macKey: "K",
    action: "Dispatch KOT",
    scope: "Cashier Terminal",
    description: "Sends kitchen ticket straight to thermal printer",
    simulatedMessage: "🍳 KOT #104 dispatched to Kitchen Printer 1!",
  },
  {
    key: "B",
    macKey: "B",
    action: "Open Billing Modal",
    scope: "Cashier Terminal",
    description: "Launches payment & invoice modal in 0.1s",
    simulatedMessage: "💳 Billing modal opened (Total: ₹780.00)",
  },
  {
    key: "P",
    macKey: "P",
    action: "Settle & Print Receipt",
    scope: "Billing Modal",
    description: "Confirms payment & prints tax invoice",
    simulatedMessage: "🖨️ Payment settled via UPI & Receipt Printed!",
  },
  {
    key: "Space",
    macKey: "Space",
    action: "Quick Cash Settlement",
    scope: "Billing Modal",
    description: "One-touch exact cash bill completion",
    simulatedMessage: "💵 Exact Cash ₹1,000 received. Change: ₹220.00",
  },
  {
    key: "T",
    macKey: "⌘T",
    action: "Quick Table Jump Modal",
    scope: "Floor Plan",
    description: "Jump to any table in 0.2s by typing number",
    simulatedMessage: "🪑 Table Jump opened! Navigating to Table 14...",
  },
  {
    key: "Alt + 1..4",
    macKey: "⌘ 1..4",
    action: "Switch Module Tabs",
    scope: "Navigation",
    description: "Instantly switch between Menu, Tables, Payments, Settings",
    simulatedMessage: "🚀 Switched to Floor Plan & Tables view!",
  },
  {
    key: "+ / - / X",
    macKey: "+ / - / X",
    action: "Cart Item Controls",
    scope: "Cart Engine",
    description: "Increase, decrease or remove selected items",
    simulatedMessage: "🛒 Paneer Butter Masala qty set to 2 (+1)",
  },
  {
    key: "Esc",
    macKey: "Esc",
    action: "Cancel / Clear Cart",
    scope: "Global",
    description: "Close modals, dismiss notifications, or reset cart",
    simulatedMessage: "❌ Modal closed & selection reset",
  },
];

export function HotkeyCheatSheetSection() {
  const [activeHotkey, setActiveHotkey] = useState<HotkeyItem>(HOTKEYS[0]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (["INPUT", "TEXTAREA"].includes((document.activeElement as HTMLElement)?.tagName)) {
        return;
      }

      const keyUpper = e.key.toUpperCase();
      const matched = HOTKEYS.find(
        (h) => h.key.toUpperCase() === keyUpper || (keyUpper === " " && h.key === "Space")
      );
      if (matched) {
        setActiveHotkey(matched);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handlePrintSheet = () => {
    window.print();
  };

  return (
    <section id="pos-hotkeys" className="py-20 md:py-28 bg-[#F8F3EB] text-[#020C2B] relative overflow-hidden font-sans border-t border-[#020C2B]/10">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E58145]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F36F21]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#020C2B]/5 text-[#020C2B] text-xs font-mono uppercase tracking-widest border border-[#020C2B]/15 font-semibold">
            <Zap className="w-3.5 h-3.5 text-[#E58145]" /> Built for Zero-Lag Cashier Speed
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#020C2B]">
            Why Click When You Can Type? <br />
            <span className="text-[#E58145]">Master WebRajya Hotkeys.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#525866] max-w-2xl mx-auto">
            100% keyboard-driven architecture using physical key codes (`event.code`). Native support for Apple Command (⌘) and PC Alt keybindings.
          </p>
        </div>

        {/* Live Simulator & Cheat Sheet Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Col: Interactive Keybinding Matrix */}
          <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 space-y-5 border border-[#020C2B]/10 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#020C2B]/10">
              <div className="flex items-center gap-2 text-xs font-mono text-[#525866] uppercase tracking-wider font-semibold">
                <Keyboard className="w-4 h-4 text-[#E58145] shrink-0" />
                <span>Tap any key card or press it on physical keyboard</span>
              </div>
              <span className="text-[10px] font-mono bg-[#E58145]/15 text-[#E58145] px-2 py-0.5 rounded border border-[#E58145]/30 font-bold self-start sm:self-auto">
                Mac &amp; Windows Ready
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {HOTKEYS.map((item) => {
                const isActive = activeHotkey.key === item.key;
                return (
                  <button
                    key={item.key}
                    onClick={() => setActiveHotkey(item)}
                    className={`text-left p-4 rounded-2xl border transition-all duration-200 group ${
                      isActive
                        ? "bg-[#E58145] border-[#E58145] text-white shadow-lg shadow-[#E58145]/30 scale-[1.02]"
                        : "bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 font-mono text-xs font-bold">
                        <span
                          className={`px-2.5 py-1 rounded-lg text-sm border font-mono ${
                            isActive
                              ? "bg-white text-[#020C2B] border-white shadow-sm"
                              : "bg-white/10 text-[#F8F3EB] border-white/20 group-hover:border-white/40"
                          }`}
                        >
                          {item.key}
                        </span>
                        <span className="text-[10px] opacity-60 font-sans uppercase">({item.macKey})</span>
                      </div>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                          isActive ? "bg-black/20 text-white" : "bg-white/5 text-[#F8F3EB]/60"
                        }`}
                      >
                        {item.scope}
                      </span>
                    </div>

                    <div className="mt-3">
                      <div className="font-bold text-sm leading-tight">{item.action}</div>
                      <div className={`text-xs mt-1 ${isActive ? "text-white/90" : "text-[#F8F3EB]/60"}`}>
                        {item.description}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Printable Action CTA */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-[#F8F3EB]/70">
                Want to place a hotkey reference sheet next to your cashier counter?
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrintSheet}
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                icon={<Printer className="w-3.5 h-3.5" />}
              >
                Print Cashier Cheatsheet
              </Button>
            </div>
          </div>

          {/* Right Col: Live Cashier Execution Terminal Simulator */}
          <div className="lg:col-span-5 bg-[#01071A] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
                <span className="text-xs font-mono text-white/60 ml-2">cashier_terminal_simulator.sh</span>
              </div>
              <span className="text-xs font-mono text-[#E58145] flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> 0-Lag Engine
              </span>
            </div>

            {/* Terminal Active State Card */}
            <div className="space-y-4 font-mono">
              <div className="text-xs text-[#F8F3EB]/60">CURRENTLY TRIGGERED HOTKEY:</div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-2xl font-black text-[#E58145]">{activeHotkey.key}</div>
                  <div className="text-sm font-semibold text-white mt-0.5">{activeHotkey.action}</div>
                </div>
                <div className="text-right text-xs text-[#F8F3EB]/60">
                  <div>Scope: <span className="text-white font-semibold">{activeHotkey.scope}</span></div>
                  <div>Latency: <span className="text-emerald-400 font-bold">&lt; 1ms</span></div>
                </div>
              </div>

              {/* Console log output */}
              <div className="bg-black/60 rounded-2xl p-4 border border-white/5 space-y-2 text-xs font-mono">
                <div className="text-emerald-400 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" /> physical_key_event: {activeHotkey.key} (event.code)
                </div>
                <div className="text-white/90 pl-5 border-l border-white/20 py-1">
                  {activeHotkey.simulatedMessage}
                </div>
                <div className="text-[#F8F3EB]/50 pt-2 flex items-center justify-between text-[11px]">
                  <span>Status: Executed in 0.002s</span>
                  <span className="text-[#E58145]">No Mouse Required</span>
                </div>
              </div>
            </div>

            {/* Quick Benefits Bullet List */}
            <div className="space-y-3 pt-2 text-xs text-[#F8F3EB]/80 font-sans">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E58145] mt-1.5 shrink-0" />
                <span><strong className="text-white">Sub-3s Order Settlement:</strong> Cashiers complete 300+ orders during peak rush without touching the mouse.</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E58145] mt-1.5 shrink-0" />
                <span><strong className="text-white">Mac & PC Keyboard Layouts:</strong> Automatic detection for Command (⌘) and Alt keys.</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E58145] mt-1.5 shrink-0" />
                <span><strong className="text-white">Instant Staff Onboarding:</strong> New hires learn full keyboard shortcuts in under 5 minutes.</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Button href="/demo" variant="cta" className="w-full justify-center text-sm" icon={<ArrowRight className="w-4 h-4" />}>
                Test Live POS Terminal Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
