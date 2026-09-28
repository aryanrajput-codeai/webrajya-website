import React from "react";
import { CreditCard, Search, SlidersHorizontal, Percent, Split, Printer, History, CheckCircle2, Zap } from "lucide-react";

export function BillingAndPosSection() {
  const BILLING_FEATURES = [
    { title: "Fast Order Entry", desc: "Touch-optimized billing interface designed for high-throughput peak rush hours.", icon: <Zap className="w-5 h-5 text-[#E58145]" /> },
    { title: "Instant Table Billing", desc: "Assign orders directly to specific floor tables, transfer guests, or merge tabs.", icon: <CreditCard className="w-5 h-5 text-[#E58145]" /> },
    { title: "Smart Item Search", desc: "Instant fuzzy search by dish name, shortcode, or barcode scanner.", icon: <Search className="w-5 h-5 text-[#E58145]" /> },
    { title: "Dynamic Categories", desc: "Organized item groups with color coding for starters, mains, beverages, desserts.", icon: <SlidersHorizontal className="w-5 h-5 text-[#E58145]" /> },
    { title: "Modifiers & Add-ons", desc: "Customize spice levels, extra toppings, milk choices, and cooking notes.", icon: <CheckCircle2 className="w-5 h-5 text-[#E58145]" /> },
    { title: "Custom Discounts", desc: "Apply percentage or fixed value manager discounts with audit trail protection.", icon: <Percent className="w-5 h-5 text-[#E58145]" /> },
    { title: "Split Bills", desc: "Split checks evenly by guests or by itemized order breakdown effortlessly.", icon: <Split className="w-5 h-5 text-[#E58145]" /> },
    { title: "Reprints & Order History", desc: "One-click bill reprints, order cancellation logs, and complete shift history.", icon: <Printer className="w-5 h-5 text-[#E58145]" /> }
  ];

  return (
    <section className="py-24 bg-[#F8F3EB] border-t border-[#020C2B]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase text-[#020C2B] tracking-wider bg-[#020C2B]/5 px-3.5 py-1.5 rounded-full border border-[#020C2B]/15 font-semibold">
            Speed & Precision
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            High-Velocity POS & Billing
          </h2>
          <p className="text-[#525866] text-base sm:text-lg">
            Engineered so your cashiers and waiters can complete bills in under 3 seconds without touchscreen fatigue.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BILLING_FEATURES.map(feat => (
            <div key={feat.title} className="p-6 rounded-2xl bg-white border border-[#020C2B]/10 hover:border-[#E58145] transition-all hover:-translate-y-1 shadow-sm hover:shadow-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F8F3EB] border border-[#020C2B]/10 flex items-center justify-center font-bold">
                {feat.icon}
              </div>
              <h3 className="text-base font-bold text-[#020C2B]">{feat.title}</h3>
              <p className="text-xs text-[#525866] leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
