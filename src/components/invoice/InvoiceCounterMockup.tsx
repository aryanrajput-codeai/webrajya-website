"use client";

import React, { useState } from "react";
import {
  Barcode,
  Search,
  Plus,
  Minus,
  Trash2,
  Printer,
  CheckCircle2,
  Wifi,
  WifiOff,
  User,
  CreditCard,
  QrCode,
  Banknote,
  ShoppingBag
} from "lucide-react";

interface BillItem {
  id: string;
  name: string;
  code: string;
  category: string;
  qty: number;
  price: number;
  discountPct: number;
  gstPct: number;
}

const CATALOG_PRESETS: BillItem[] = [
  { id: "1", name: "Classmate Notebook 200p Softcover", code: "STN-101", category: "Stationery", qty: 2, price: 90, discountPct: 5, gstPct: 12 },
  { id: "2", name: "Reynolds 045 Ball Pen (Box of 20)", code: "PEN-204", category: "Writing", qty: 1, price: 200, discountPct: 0, gstPct: 18 },
  { id: "3", name: "Camlin Whiteboard Marker (Black)", code: "MKR-305", category: "Stationery", qty: 3, price: 35, discountPct: 0, gstPct: 18 },
  { id: "4", name: "JK Copier Paper A4 75GSM (500s)", code: "PPR-410", category: "Paper", qty: 1, price: 340, discountPct: 10, gstPct: 12 },
];

export function InvoiceCounterMockup() {
  const [items, setItems] = useState<BillItem[]>(CATALOG_PRESETS);
  const [searchQuery, setSearchQuery] = useState("");
  const [customerName] = useState("Rajesh Stores (Regular)");
  const [paymentMode, setPaymentMode] = useState<"cash" | "upi" | "card" | "khata">("cash");
  const [billPrinted, setBillPrinted] = useState(false);
  const [isOfflineMode, setIsOfflineMode] = useState(false);

  const updateQty = (id: string, delta: number) => {
    setItems(prev =>
      prev
        .map(item => {
          if (item.id === id) {
            const newQty = Math.max(1, item.qty + delta);
            return { ...item, qty: newQty };
          }
          return item;
        })
    );
  };

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(prev => prev.filter(item => item.id !== id));
    }
  };

  const addItemPreset = () => {
    const newItem: BillItem = {
      id: Date.now().toString(),
      name: "Fevicol MR Squeezy 100g",
      code: "ADH-502",
      category: "Adhesives",
      qty: 1,
      price: 50,
      discountPct: 0,
      gstPct: 18
    };
    setItems(prev => [...prev, newItem]);
  };

  const handlePrint = () => {
    setBillPrinted(true);
    setTimeout(() => setBillPrinted(false), 2400);
  };

  // Calculations
  const rawSubtotal = items.reduce((acc, i) => acc + (i.price * i.qty), 0);
  const totalDiscount = items.reduce((acc, i) => acc + ((i.price * i.qty * i.discountPct) / 100), 0);
  const taxableTotal = rawSubtotal - totalDiscount;
  const totalGST = items.reduce((acc, i) => {
    const discountedPrice = (i.price * i.qty) * (1 - i.discountPct / 100);
    return acc + (discountedPrice * (i.gstPct / 100));
  }, 0);
  const grandTotal = Math.round(taxableTotal + totalGST);

  return (
    <div className="w-full rounded-3xl overflow-hidden border border-[#0F172A]/10 bg-white text-[#0F172A] shadow-2xl font-sans text-xs sm:text-sm">
      {/* Top Counter Bar */}
      <div className="bg-[#0F172A] text-white px-4 sm:px-6 py-3 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#2563EB] flex items-center justify-center font-bold text-white shadow-sm">
            <ShoppingBag className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-xs sm:text-sm text-white">WebRajya Retail Counter Terminal</span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/20 text-emerald-300 font-mono border border-emerald-500/30">
                Register #01 Active
              </span>
            </div>
            <span className="text-[10px] text-[#94A3B8] font-mono">Invoice #WR-IN-2026-0418 • Fast Billing</span>
          </div>
        </div>

        {/* Local-first status indicator toggle */}
        <div className="flex items-center gap-2 font-mono text-[11px]">
          <button
            onClick={() => setIsOfflineMode(!isOfflineMode)}
            className={`px-3 py-1 rounded-full flex items-center gap-1.5 transition-all cursor-pointer border ${
              isOfflineMode
                ? "bg-amber-500/20 text-amber-300 border-amber-400/40"
                : "bg-emerald-500/20 text-emerald-300 border-emerald-400/40"
            }`}
            title="Click to test Local-First simulation"
          >
            {isOfflineMode ? (
              <>
                <WifiOff className="w-3.5 h-3.5 text-amber-300" />
                <span>Offline Workflows Active</span>
              </>
            ) : (
              <>
                <Wifi className="w-3.5 h-3.5 text-emerald-300" />
                <span>Cloud Connected (Local First)</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Terminal Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
        {/* Left Side: Product Search, Barcode Input & Cart (8 cols) */}
        <div className="lg:col-span-8 p-4 sm:p-6 space-y-4 border-b lg:border-b-0 lg:border-r border-[#E2E8F0] bg-[#F8FAFC]">
          
          {/* Quick Search & Barcode Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            <div className="sm:col-span-7 relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748B]" />
              <input
                type="text"
                placeholder="Search item name or code... [F2]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#CBD5E1] bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#2563EB] shadow-xs"
              />
            </div>
            
            <div className="sm:col-span-5 relative">
              <Barcode className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#2563EB]" />
              <input
                type="text"
                readOnly
                value="8901030928192 [Ready]"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#2563EB]/40 bg-[#2563EB]/5 text-[#2563EB] text-xs font-mono font-semibold focus:outline-none shadow-xs"
              />
            </div>
          </div>

          {/* Customer Selection Row */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs text-xs">
            <div className="flex items-center gap-2">
              <User className="w-3.5 h-3.5 text-[#64748B]" />
              <span className="text-[#64748B]">Customer:</span>
              <span className="font-bold text-[#0F172A]">{customerName}</span>
            </div>
            <span className="text-[11px] font-mono text-[#2563EB] font-bold bg-[#2563EB]/10 px-2 py-0.5 rounded">
              Khata: ₹0.00 Outstanding
            </span>
          </div>

          {/* Cart Table */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-xs overflow-hidden">
            <div className="p-3 bg-[#F1F5F9] border-b border-[#E2E8F0] grid grid-cols-12 text-[11px] font-mono text-[#475569] uppercase tracking-wider font-semibold">
              <span className="col-span-5">Item & Code</span>
              <span className="col-span-3 text-center">Qty</span>
              <span className="col-span-2 text-right">Rate</span>
              <span className="col-span-2 text-right">Total</span>
            </div>

            <div className="divide-y divide-[#E2E8F0] max-h-[220px] overflow-y-auto">
              {items.map(item => (
                <div key={item.id} className="p-3 grid grid-cols-12 items-center text-xs hover:bg-[#F8FAFC] transition-colors">
                  <div className="col-span-5">
                    <span className="font-bold text-[#0F172A] block truncate">{item.name}</span>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-[#64748B]">
                      <span>{item.code}</span>
                      <span>•</span>
                      <span>GST {item.gstPct}%</span>
                      {item.discountPct > 0 && (
                        <span className="text-emerald-600 font-bold">-{item.discountPct}%</span>
                      )}
                    </div>
                  </div>

                  <div className="col-span-3 flex items-center justify-center gap-1.5">
                    <button
                      onClick={() => updateQty(item.id, -1)}
                      className="w-6 h-6 rounded-lg bg-[#F1F5F9] border border-[#CBD5E1] flex items-center justify-center text-[#0F172A] hover:bg-[#E2E8F0] cursor-pointer"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-mono font-bold w-6 text-center">{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.id, 1)}
                      className="w-6 h-6 rounded-lg bg-[#F1F5F9] border border-[#CBD5E1] flex items-center justify-center text-[#0F172A] hover:bg-[#E2E8F0] cursor-pointer"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="col-span-2 text-right font-mono text-[#475569]">
                    ₹{item.price}
                  </div>

                  <div className="col-span-2 text-right flex items-center justify-end gap-2 font-mono">
                    <span className="font-bold text-[#0F172A]">
                      ₹{Math.round(item.qty * item.price * (1 - item.discountPct / 100))}
                    </span>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-[#94A3B8] hover:text-[#DC2626] transition-colors cursor-pointer"
                      title="Remove line item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick add mock item button */}
            <div className="p-2 bg-[#F8FAFC] border-t border-[#E2E8F0] text-center">
              <button
                onClick={addItemPreset}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#2563EB] hover:text-[#1D4ED8] cursor-pointer"
              >
                <Plus className="w-3 h-3" /> Add Quick Stationery Item
              </button>
            </div>
          </div>

          {/* Keyboard Shortcuts Bar */}
          <div className="hidden sm:flex items-center justify-between text-[10px] font-mono text-[#64748B] pt-1 px-1">
            <span>[F2] Search</span>
            <span>[F4] Add Discount</span>
            <span>[F8] Cash Settle</span>
            <span>[F12] Save &amp; Print</span>
          </div>

        </div>

        {/* Right Side: Totals, Payment Method & Print Action (4 cols) */}
        <div className="lg:col-span-4 p-4 sm:p-6 flex flex-col justify-between bg-white space-y-6">
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#64748B] font-bold block pb-1 border-b border-[#E2E8F0]">
              Bill Summary
            </span>

            {/* Breakdown */}
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between text-[#64748B]">
                <span>Items Subtotal:</span>
                <span>₹{rawSubtotal}</span>
              </div>
              {totalDiscount > 0 && (
                <div className="flex justify-between text-emerald-600 font-semibold">
                  <span>Discounts Applied:</span>
                  <span>-₹{Math.round(totalDiscount)}</span>
                </div>
              )}
              <div className="flex justify-between text-[#64748B]">
                <span>Estimated Taxes (GST):</span>
                <span>+₹{Math.round(totalGST)}</span>
              </div>

              {/* Grand Total Callout */}
              <div className="pt-3 pb-1 border-t-2 border-[#0F172A] flex justify-between items-baseline">
                <span className="font-bold text-sm text-[#0F172A] uppercase">Net Payable</span>
                <span className="text-3xl font-black text-[#2563EB]">
                  ₹{grandTotal.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            {/* Payment Mode Selector */}
            <div className="space-y-2 pt-2">
              <span className="text-[11px] font-mono uppercase text-[#64748B] font-semibold block">
                Payment Mode:
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                <button
                  onClick={() => setPaymentMode("cash")}
                  className={`p-2.5 rounded-xl border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    paymentMode === "cash"
                      ? "bg-[#0F172A] text-white border-[#0F172A] shadow-xs"
                      : "bg-[#F8FAFC] text-[#475569] border-[#E2E8F0] hover:bg-[#F1F5F9]"
                  }`}
                >
                  <Banknote className="w-3.5 h-3.5" /> Cash
                </button>
                <button
                  onClick={() => setPaymentMode("upi")}
                  className={`p-2.5 rounded-xl border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    paymentMode === "upi"
                      ? "bg-[#0F172A] text-white border-[#0F172A] shadow-xs"
                      : "bg-[#F8FAFC] text-[#475569] border-[#E2E8F0] hover:bg-[#F1F5F9]"
                  }`}
                >
                  <QrCode className="w-3.5 h-3.5" /> UPI QR
                </button>
                <button
                  onClick={() => setPaymentMode("card")}
                  className={`p-2.5 rounded-xl border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    paymentMode === "card"
                      ? "bg-[#0F172A] text-white border-[#0F172A] shadow-xs"
                      : "bg-[#F8FAFC] text-[#475569] border-[#E2E8F0] hover:bg-[#F1F5F9]"
                  }`}
                >
                  <CreditCard className="w-3.5 h-3.5" /> Card
                </button>
                <button
                  onClick={() => setPaymentMode("khata")}
                  className={`p-2.5 rounded-xl border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    paymentMode === "khata"
                      ? "bg-[#0F172A] text-white border-[#0F172A] shadow-xs"
                      : "bg-[#F8FAFC] text-[#475569] border-[#E2E8F0] hover:bg-[#F1F5F9]"
                  }`}
                >
                  <User className="w-3.5 h-3.5" /> Khata
                </button>
              </div>
            </div>
          </div>

          {/* Main Action: Save & Print */}
          <div className="pt-4 border-t border-[#E2E8F0] space-y-2">
            <button
              onClick={handlePrint}
              className="w-full py-3.5 px-4 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#2563EB]/25 transition-all cursor-pointer transform active:scale-98"
            >
              {billPrinted ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>Bill Saved &amp; Dispatched!</span>
                </>
              ) : (
                <>
                  <Printer className="w-4 h-4" />
                  <span>Save &amp; Print Bill [F12]</span>
                </>
              )}
            </button>
            <p className="text-[10px] text-center text-[#64748B] font-mono">
              ESC/POS 3-inch thermal &amp; A4 laser print ready
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
