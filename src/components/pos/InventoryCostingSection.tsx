import React from "react";
import { Boxes, Utensils, Scale, TrendingDown, ArrowRight, DollarSign, PieChart, ShieldAlert } from "lucide-react";

export function InventoryCostingSection() {
  const INVENTORY_FLOW = [
    { title: "Menu Item", desc: "Dish ordered at POS (e.g. Paneer Butter Masala)", icon: <Utensils className="w-4 h-4 text-[#E58145]" /> },
    { title: "Master Recipe", desc: "Linked ingredients & exact portion sizes", icon: <Scale className="w-4 h-4 text-[#E58145]" /> },
    { title: "Ingredients", desc: "180g Paneer, 40g Butter, 150ml Tomato Puree", icon: <Boxes className="w-4 h-4 text-[#E58145]" /> },
    { title: "Raw Stock", desc: "Real-time warehouse & kitchen stock levels", icon: <TrendingDown className="w-4 h-4 text-[#E58145]" /> },
    { title: "Consumption", desc: "Automatic stock deduction per dish served", icon: <PieChart className="w-4 h-4 text-[#E58145]" /> },
    { title: "Food Cost", desc: "Live food cost % and gross margin calculation", icon: <DollarSign className="w-4 h-4 text-[#E58145]" /> }
  ];

  return (
    <section className="py-24 bg-[#F8F3EB] border-t border-[#020C2B]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase text-[#020C2B] tracking-wider bg-[#020C2B]/5 px-3.5 py-1.5 rounded-full border border-[#020C2B]/15 font-semibold">
            Profitability &amp; Cost Control
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            Inventory &amp; Food Cost Control
          </h2>
          <p className="text-[#525866] text-base sm:text-lg">
            Track ingredient consumption in real operational terms. Prevent kitchen theft, control food wastage, and protect your dish margins.
          </p>
        </div>

        {/* Operational Flow Diagram */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#020C2B]/10 shadow-sm space-y-6">
          <span className="text-[11px] font-mono text-[#525866] uppercase tracking-wider block text-center font-semibold">
            Operational Inventory Chain
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {INVENTORY_FLOW.map((step, idx) => (
              <div key={step.title} className="p-4 rounded-2xl bg-[#F8F3EB] border border-[#020C2B]/10 space-y-2 relative">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-white text-[#020C2B] border border-[#020C2B]/10 flex items-center justify-center font-bold shadow-sm">
                    {step.icon}
                  </div>
                  <span className="text-[10px] font-mono text-[#525866] font-semibold">Step 0{idx + 1}</span>
                </div>
                <h4 className="font-bold text-[#020C2B] text-sm">{step.title}</h4>
                <p className="text-[11px] text-[#525866] leading-relaxed font-sans">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#020C2B]/10 shadow-sm space-y-3">
            <h3 className="text-lg font-bold text-[#020C2B]">Automated Stock Deductions</h3>
            <p className="text-xs text-[#525866] leading-relaxed">
              Every dish served deducts the precise quantity of raw ingredients from your inventory log automatically without manual stock entries.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#020C2B]/10 shadow-sm space-y-3">
            <h3 className="text-lg font-bold text-[#020C2B]">Recipe Food Costing</h3>
            <p className="text-xs text-[#525866] leading-relaxed">
              Calculate exact plate cost against menu selling prices to maintain ideal 25-30% food cost targets across all menu categories.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#020C2B]/10 shadow-sm space-y-3">
            <h3 className="text-lg font-bold text-[#020C2B]">Wastage &amp; Low-Stock Alerts</h3>
            <p className="text-xs text-[#525866] leading-relaxed">
              Receive automatic low-stock notifications for critical raw materials (dairy, meat, spices) before items run out mid-service.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
