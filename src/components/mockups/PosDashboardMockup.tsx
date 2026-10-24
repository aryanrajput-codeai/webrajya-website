"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Utensils, Plus, Minus, Printer, CheckCircle2, ShoppingBag, Wifi, Layers, Check } from "lucide-react";

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
  const [lastAddedId, setLastAddedId] = useState<string | null>(null);

  const categories = ["All", "Mains", "Drinks", "Sides", "Desserts"];

  const filteredItems = activeCategory === "All" 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(i => i.category === activeCategory);

  const addItemToCart = (item: MenuItem) => {
    setLastAddedId(item.id);
    setTimeout(() => setLastAddedId(null), 300);

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
    <div className="w-full rounded-3xl overflow-hidden border border-[#020C2B]/15 bg-[#FAF5EF] text-[#020C2B] shadow-2xl font-sans text-xs sm:text-sm">
      {/* Top Header Bar */}
      <div className="bg-[#F2ECE1] border-b border-[#020C2B]/10 px-4 py-3 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <motion.div 
            whileHover={{ scale: 1.08, rotate: 5 }}
            className="w-8 h-8 rounded-xl bg-[#E58145] text-white flex items-center justify-center font-bold shadow-sm"
          >
            <Utensils className="w-4.5 h-4.5" />
          </motion.div>
          <div>
            <span className="font-bold text-[#020C2B] text-xs sm:text-sm block">WebRajya POS Terminal</span>
            <span className="text-[10px] text-[#E58145] font-mono font-semibold">Register #01 • Main Dining Hall</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[11px]">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-800 border border-emerald-500/30 font-mono font-bold">
            <Wifi className="w-3 h-3 text-emerald-600 animate-pulse" /> Offline-Ready
          </span>
          <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-white text-[#020C2B] border border-[#020C2B]/10 font-mono font-semibold shadow-xs">
            Table: {tableNumber}
          </span>
        </div>
      </div>

      {/* Main Terminal View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-[#020C2B]/10">
        
        {/* Left / Center - Menu & Categories */}
        <div className="lg:col-span-7 xl:col-span-8 p-4 sm:p-5 flex flex-col justify-between bg-[#F8F3EB]">
          <div>
            {/* Category Pills with Sliding Layout Indicator */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-3 no-scrollbar relative">
              {categories.map(cat => {
                const isSelected = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`relative px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer z-10 ${
                      isSelected ? "text-white" : "text-[#020C2B] hover:text-[#E58145]"
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="posCategoryPill"
                        className="absolute inset-0 bg-[#E58145] rounded-xl shadow-sm -z-10"
                        transition={{ type: "spring", stiffness: 450, damping: 30 }}
                      />
                    )}
                    {!isSelected && (
                      <span className="absolute inset-0 bg-white border border-[#020C2B]/10 rounded-xl -z-20" />
                    )}
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {filteredItems.map(item => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => addItemToCart(item)}
                  className={`group relative p-3.5 rounded-2xl bg-white border transition-all cursor-pointer flex flex-col justify-between shadow-xs hover:shadow-md ${
                    lastAddedId === item.id ? "border-[#E58145] ring-2 ring-[#E58145]/30" : "border-[#020C2B]/10 hover:border-[#E58145]"
                  }`}
                >
                  {item.badge && (
                    <span className="absolute top-2.5 right-2.5 text-[9px] px-2 py-0.5 rounded-full bg-[#E58145]/15 text-[#E58145] font-bold font-mono">
                      {item.badge}
                    </span>
                  )}
                  <div>
                    <span className="text-[10px] text-[#525866] block uppercase font-mono tracking-wider">{item.category}</span>
                    <h4 className="font-bold text-[#020C2B] group-hover:text-[#E58145] transition-colors text-xs sm:text-sm mt-0.5">
                      {item.name}
                    </h4>
                  </div>
                  <div className="mt-3 flex items-center justify-between pt-2 border-t border-[#020C2B]/10">
                    <span className="font-extrabold text-[#020C2B] font-mono text-xs sm:text-sm">₹{item.price}</span>
                    <span className="w-6 h-6 rounded-lg bg-[#E58145]/15 text-[#E58145] group-hover:bg-[#E58145] group-hover:text-white flex items-center justify-center transition-colors">
                      <Plus className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Table Switcher */}
          <div className="mt-5 pt-3.5 border-t border-[#020C2B]/10 flex items-center justify-between text-xs flex-wrap gap-2">
            <span className="text-[#525866] flex items-center gap-1.5 font-medium">
              <Layers className="w-3.5 h-3.5 text-[#E58145]" /> Active Dining Tables:
            </span>
            <div className="flex gap-1.5 relative">
              {["T-01", "T-04", "T-08", "Takeaway"].map(tbl => {
                const isSelected = tableNumber === tbl;
                return (
                  <button
                    key={tbl}
                    onClick={() => setTableNumber(tbl)}
                    className={`relative px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold transition-colors cursor-pointer z-10 ${
                      isSelected ? "text-white" : "text-[#020C2B]"
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="posTablePill"
                        className="absolute inset-0 bg-[#020C2B] rounded-lg shadow-xs -z-10"
                        transition={{ type: "spring", stiffness: 450, damping: 30 }}
                      />
                    )}
                    {!isSelected && (
                      <span className="absolute inset-0 bg-white border border-[#020C2B]/10 rounded-lg -z-20 hover:bg-[#020C2B]/5" />
                    )}
                    {tbl}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right - Order Cart & Thermal KOT Preview */}
        <div className="lg:col-span-5 xl:col-span-4 p-4 sm:p-5 bg-[#FAF5EF] flex flex-col justify-between relative overflow-hidden">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#020C2B]/10">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-[#E58145]" />
                <span className="font-bold text-[#020C2B] text-xs sm:text-sm">Current Order</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-lg bg-white text-[#020C2B] border border-[#020C2B]/10 text-[10px] font-mono font-bold shadow-xs">
                {tableNumber}
              </span>
            </div>

            {/* Cart Items List with Spring Animation */}
            <div className="py-3 space-y-2 max-h-[220px] overflow-y-auto">
              <AnimatePresence mode="popLayout">
                {cart.length === 0 ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-8 text-center text-[#525866] text-xs"
                  >
                    Tap dishes on the left to add to bill
                  </motion.div>
                ) : (
                  cart.map(c => (
                    <motion.div
                      key={c.item.id}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20, height: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#020C2B]/10 shadow-xs"
                    >
                      <div className="pr-2">
                        <span className="font-bold text-[#020C2B] text-xs block">{c.item.name}</span>
                        <span className="text-[10px] text-[#525866] font-mono font-medium">₹{c.item.price} each</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <motion.button
                          whileTap={{ scale: 0.85 }}
                          onClick={() => updateQty(c.item.id, -1)}
                          className="w-5 h-5 rounded-md bg-[#F8F3EB] border border-[#020C2B]/10 hover:bg-[#020C2B]/10 text-[#020C2B] flex items-center justify-center cursor-pointer font-bold"
                        >
                          <Minus className="w-3 h-3" />
                        </motion.button>
                        <span className="w-5 text-center font-mono font-bold text-[#020C2B] text-xs">{c.qty}</span>
                        <motion.button
                          whileTap={{ scale: 0.85 }}
                          onClick={() => updateQty(c.item.id, 1)}
                          className="w-5 h-5 rounded-md bg-[#F8F3EB] border border-[#020C2B]/10 hover:bg-[#020C2B]/10 text-[#020C2B] flex items-center justify-center cursor-pointer font-bold"
                        >
                          <Plus className="w-3 h-3" />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Pricing & Checkout CTAs */}
          <div className="pt-3 border-t border-[#020C2B]/10 space-y-2">
            <div className="space-y-1 text-xs text-[#525866] font-mono font-medium">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-[#020C2B] font-semibold">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>GST (5%)</span>
                <span className="text-[#020C2B] font-semibold">₹{tax}</span>
              </div>
              <div className="flex justify-between text-sm font-black text-[#E58145] pt-1.5 border-t border-[#020C2B]/10">
                <span>Total Amount</span>
                <span>₹{total}</span>
              </div>
            </div>

            {/* Print KOT / Pay Button */}
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handlePrintKOT}
                className={`w-full py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md ${
                  orderStatus === "printed"
                    ? "bg-emerald-600 text-white border border-emerald-500"
                    : "bg-[#E58145] hover:bg-[#d67236] text-white border border-[#E58145]"
                }`}
              >
                {orderStatus === "printed" ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-white animate-bounce" /> KOT Dispatched to Chef!
                  </>
                ) : (
                  <>
                    <Printer className="w-4 h-4" /> Dispatch KOT &amp; Print (₹{total})
                  </>
                )}
              </motion.button>
            </div>

            {/* Thermal Ticket Rollout Preview */}
            <AnimatePresence>
              {orderStatus === "printed" && (
                <motion.div
                  initial={{ opacity: 0, y: -20, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -20, height: 0 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="mt-2 p-3 bg-white border-2 border-dashed border-[#020C2B]/20 rounded-xl font-mono text-[10px] space-y-1 text-[#020C2B] shadow-inner"
                >
                  <div className="text-center font-bold pb-1 border-b border-dashed border-[#020C2B]/20 flex items-center justify-center gap-1.5">
                    <Check className="w-3 h-3 text-emerald-600" /> KITCHEN ORDER TICKET • {tableNumber}
                  </div>
                  <div className="flex justify-between text-[#525866]">
                    <span>Items: {cart.reduce((a, b) => a + b.qty, 0)}</span>
                    <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>
                  <div className="pt-1 text-[#020C2B] font-semibold">
                    {cart.map(c => (
                      <div key={c.item.id} className="flex justify-between">
                        <span>{c.qty}x {c.item.name}</span>
                        <span>₹{c.item.price * c.qty}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-1 border-t border-dashed border-[#020C2B]/20 text-center text-[9px] text-[#525866]">
                    Thermal printer ready • High speed zero-lag
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </div>
  );
}
