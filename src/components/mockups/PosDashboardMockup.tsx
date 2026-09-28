"use client";

import React, { useState } from "react";
import { Utensils, Plus, Minus, Printer, CheckCircle2, ShoppingBag, Wifi, RefreshCw, Layers } from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  badge?: string;
}

const MENU_ITEMS: MenuItem[] = [
  { id: "1", name: "Paneer Butter Masala", category: "Mains", price: 340, badge: "Popular" },
  { id: "2", name: "Woodfired Margherita", category: "Mains", price: 420 },
  { id: "3", name: "Iced Caramel Macchiato", category: "Drinks", price: 210, badge: "Chef Special" },
  { id: "4", name: "Truffle Mushroom Risotto", category: "Mains", price: 480 },
  { id: "5", name: "Crispy Garlic Naan", category: "Sides", price: 75 },
  { id: "6", name: "Matcha Latte", category: "Drinks", price: 195 },
  { id: "7", name: "Molten Lava Cake", category: "Desserts", price: 260 }
];

export function PosDashboardMockup() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState<{ item: MenuItem; qty: number }[]>([
    { item: MENU_ITEMS[0], qty: 2 },
    { item: MENU_ITEMS[2], qty: 1 }
  ]);
  const [tableNumber, setTableNumber] = useState("T-04");
  const [orderStatus, setOrderStatus] = useState<"draft" | "printed">("draft");

  const categories = ["All", "Mains", "Drinks", "Sides", "Desserts"];

  const filteredItems = activeCategory === "All" 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(i => i.category === activeCategory);

  const addItemToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(c => c.item.id === item.id);
      if (existing) {
        return prev.map(c => c.item.id === item.id ? { ...c, qty: c.qty + 1 } : c);
      }
      return [...prev, { item, qty: 1 }];
    });
    setOrderStatus("draft");
  };

  const updateQty = (id: string, delta: number) => {
    setCart(prev => {
      return prev.map(c => {
        if (c.item.id === id) {
          const newQty = c.qty + delta;
          return newQty > 0 ? { ...c, qty: newQty } : null;
        }
        return c;
      }).filter(Boolean) as { item: MenuItem; qty: number }[];
    });
    setOrderStatus("draft");
  };

  const subtotal = cart.reduce((acc, c) => acc + (c.item.price * c.qty), 0);
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + tax;

  const handlePrintKOT = () => {
    setOrderStatus("printed");
  };

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-[#020C2B]/15 bg-[#FAF5EF] text-[#020C2B] shadow-xl font-sans text-xs sm:text-sm">
      {/* Top Header Bar */}
      <div className="bg-[#F2ECE1] border-b border-[#020C2B]/10 px-4 py-2.5 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-[#E58145] text-white flex items-center justify-center font-bold">
            <Utensils className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-[#020C2B] text-xs sm:text-sm block">WebRajya POS Terminal</span>
            <span className="text-[10px] text-[#E58145] font-mono font-semibold">Register #01 • Main Dining Hall</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[11px]">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-800 border border-emerald-500/30 font-mono font-bold">
            <Wifi className="w-3 h-3 text-emerald-600" /> Offline-Ready
          </span>
          <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-white text-[#020C2B] border border-[#020C2B]/10 font-mono font-semibold">
            Table: {tableNumber}
          </span>
        </div>
      </div>

      {/* Main Terminal View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-[#020C2B]/10">
        
        {/* Left / Center - Menu & Categories */}
        <div className="lg:col-span-7 xl:col-span-8 p-3 sm:p-4 flex flex-col justify-between bg-[#F8F3EB]">
          <div>
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-3 no-scrollbar">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    activeCategory === cat
                      ? "bg-[#E58145] text-white shadow-sm"
                      : "bg-white text-[#020C2B] hover:bg-[#020C2B]/5 border border-[#020C2B]/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {filteredItems.map(item => (
                <div
                  key={item.id}
                  onClick={() => addItemToCart(item)}
                  className="group relative p-3 rounded-xl bg-white border border-[#020C2B]/10 hover:border-[#E58145] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                >
                  {item.badge && (
                    <span className="absolute top-2 right-2 text-[9px] px-1.5 py-0.5 rounded bg-[#E58145]/15 text-[#E58145] font-bold">
                      {item.badge}
                    </span>
                  )}
                  <div>
                    <span className="text-[10px] text-[#525866] block uppercase font-mono tracking-wider">{item.category}</span>
                    <h4 className="font-semibold text-[#020C2B] group-hover:text-[#E58145] transition-colors text-xs sm:text-sm mt-0.5">
                      {item.name}
                    </h4>
                  </div>
                  <div className="mt-3 flex items-center justify-between pt-2 border-t border-[#020C2B]/10">
                    <span className="font-bold text-[#020C2B] font-mono text-xs sm:text-sm">₹{item.price}</span>
                    <span className="w-6 h-6 rounded-md bg-[#E58145]/15 text-[#E58145] group-hover:bg-[#E58145] group-hover:text-white flex items-center justify-center transition-all">
                      <Plus className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Table Switcher */}
          <div className="mt-4 pt-3 border-t border-[#020C2B]/10 flex items-center justify-between text-xs">
            <span className="text-[#525866] flex items-center gap-1.5 font-medium">
              <Layers className="w-3.5 h-3.5 text-[#E58145]" /> Active Tables:
            </span>
            <div className="flex gap-1.5">
              {["T-01", "T-04", "T-08", "Takeaway"].map(tbl => (
                <button
                  key={tbl}
                  onClick={() => setTableNumber(tbl)}
                  className={`px-2 py-0.5 rounded text-[11px] font-mono border cursor-pointer ${
                    tableNumber === tbl 
                      ? "bg-[#E58145] text-white border-[#E58145]" 
                      : "bg-white text-[#020C2B] border-[#020C2B]/10 hover:bg-[#020C2B]/5"
                  }`}
                >
                  {tbl}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Order Cart & Thermal KOT Preview */}
        <div className="lg:col-span-5 xl:col-span-4 p-3 sm:p-4 bg-[#FAF5EF] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#020C2B]/10">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-[#E58145]" />
                <span className="font-bold text-[#020C2B] text-xs sm:text-sm">Current Order</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-white text-[#020C2B] border border-[#020C2B]/10 text-[10px] font-mono font-semibold">
                {tableNumber}
              </span>
            </div>

            {/* Cart Items List */}
            <div className="py-3 space-y-2.5 max-h-[220px] overflow-y-auto">
              {cart.length === 0 ? (
                <div className="py-8 text-center text-[#525866] text-xs">
                  Tap any dish on the left to add to bill
                </div>
              ) : (
                cart.map(c => (
                  <div key={c.item.id} className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#020C2B]/10 shadow-xs">
                    <div className="pr-2">
                      <span className="font-semibold text-[#020C2B] text-xs block">{c.item.name}</span>
                      <span className="text-[10px] text-[#525866] font-mono">₹{c.item.price} each</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => updateQty(c.item.id, -1)}
                        className="w-5 h-5 rounded bg-[#F8F3EB] border border-[#020C2B]/10 hover:bg-[#020C2B]/10 text-[#020C2B] flex items-center justify-center cursor-pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-5 text-center font-mono font-bold text-[#020C2B] text-xs">{c.qty}</span>
                      <button
                        onClick={() => updateQty(c.item.id, 1)}
                        className="w-5 h-5 rounded bg-[#F8F3EB] border border-[#020C2B]/10 hover:bg-[#020C2B]/10 text-[#020C2B] flex items-center justify-center cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Pricing & Checkout CTAs */}
          <div className="pt-3 border-t border-[#020C2B]/10 space-y-2">
            <div className="space-y-1 text-xs text-[#525866] font-mono">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-[#020C2B] font-semibold">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>GST (5%)</span>
                <span className="text-[#020C2B] font-semibold">₹{tax}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#E58145] pt-1 border-t border-[#020C2B]/10">
                <span>Total Amount</span>
                <span>₹{total}</span>
              </div>
            </div>

            {/* Print KOT / Pay Button */}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={handlePrintKOT}
                className={`w-full py-2.5 px-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  orderStatus === "printed"
                    ? "bg-emerald-600 text-white border border-emerald-500 shadow-sm"
                    : "bg-[#E58145] hover:bg-[#d67236] text-white shadow-md border border-[#E58145]"
                }`}
              >
                {orderStatus === "printed" ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-white" /> KOT Sent to Kitchen!
                  </>
                ) : (
                  <>
                    <Printer className="w-4 h-4" /> Dispatch KOT & Print (₹{total})
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
