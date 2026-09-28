"use client";

import React, { useState } from "react";
import { UtensilsCrossed, ToggleLeft, ToggleRight, Layers, Check, Plus, AlertCircle } from "lucide-react";

export function MenuManagementSection() {
  const [items, setItems] = useState([
    { id: "1", name: "Artisanal Woodfired Pizza", category: "Mains", price: 420, inStock: true, variations: ["10-Inch", "14-Inch"], addOns: ["Extra Cheese", "Truffle Oil"] },
    { id: "2", name: "Cold Brew Espresso Shake", category: "Beverages", price: 210, inStock: true, variations: ["Regular", "Large"], addOns: ["Oat Milk", "Vanilla Syrup"] },
    { id: "3", name: "Wild Mushroom Risotto", category: "Mains", price: 480, inStock: false, variations: ["Standard"], addOns: ["Parmesan Shavings"] },
    { id: "4", name: "Chef Special Combo Meal", category: "Combos", price: 650, inStock: true, variations: ["Veg", "Non-Veg"], addOns: ["Fries", "Coke"] }
  ]);

  const toggleStock = (id: string) => {
    setItems(items.map(i => i.id === id ? { ...i, inStock: !i.inStock } : i));
  };

  return (
    <section className="py-24 bg-[#F8F3EB] border-t border-[#020C2B]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase text-[#020C2B] tracking-wider bg-[#020C2B]/5 px-3.5 py-1.5 rounded-full border border-[#020C2B]/15 font-semibold">
            Dynamic Control
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            Menu Management &amp; Stock Toggles
          </h2>
          <p className="text-[#525866] text-base sm:text-lg">
            Update prices, toggle out-of-stock items in real-time, configure item variations, and manage combo meals instantly.
          </p>
        </div>

        {/* Interactive Menu Builder Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white border border-[#020C2B]/10 shadow-sm space-y-1">
                <h3 className="font-bold text-[#020C2B] text-base">Instant Out-of-Stock (86) Toggles</h3>
                <p className="text-xs text-[#525866] leading-relaxed">
                  Running low on avocados? Toggle an item as &apos;Out of Stock&apos; on your manager terminal, and it immediately disables on all waiter POS tablets and QR digital menus.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#020C2B]/10 shadow-sm space-y-1">
                <h3 className="font-bold text-[#020C2B] text-base">Variations &amp; Add-on Groups</h3>
                <p className="text-xs text-[#525866] leading-relaxed">
                  Setup size variations (Small/Medium/Large), crust choices, and paid add-on groups with automatic price modifiers.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#020C2B]/10 shadow-sm space-y-1">
                <h3 className="font-bold text-[#020C2B] text-base">Combos &amp; Special Meals</h3>
                <p className="text-xs text-[#525866] leading-relaxed">
                  Group starters, mains, and drinks into packaged combo deals with custom selection rules.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Toggle Card */}
          <div className="lg:col-span-6 p-6 rounded-3xl bg-[#FAF5EF] text-[#020C2B] border border-[#020C2B]/10 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#020C2B]/10">
              <div className="flex items-center gap-2">
                <UtensilsCrossed className="w-4 h-4 text-[#E58145]" />
                <span className="font-bold text-[#020C2B] text-sm">Live Menu Controller</span>
              </div>
              <span className="text-[10px] text-white font-mono bg-[#E58145] px-2 py-0.5 rounded font-semibold shadow-xs">
                Real-Time Sync
              </span>
            </div>

            <div className="space-y-3">
              {items.map(item => (
                <div key={item.id} className="p-3.5 rounded-xl bg-white border border-[#020C2B]/10 flex items-center justify-between shadow-xs">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#020C2B] text-xs sm:text-sm">{item.name}</span>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#FAF5EF] text-[#020C2B] border border-[#020C2B]/10 font-semibold">{item.category}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-[#525866] font-mono mt-1">
                      <span>₹{item.price}</span>
                      <span>•</span>
                      <span>Variations: {item.variations.join(", ")}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleStock(item.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                      item.inStock
                        ? "bg-emerald-600 text-white border border-emerald-500 shadow-xs"
                        : "bg-rose-600 text-white border border-rose-500 shadow-xs"
                    }`}
                  >
                    {item.inStock ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-white" /> In Stock
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-3.5 h-3.5 text-white" /> Out of Stock
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-[#525866] font-mono text-center">Tap any button above to test real-time stock status toggle.</p>
          </div>

        </div>

      </div>
    </section>
  );
}
