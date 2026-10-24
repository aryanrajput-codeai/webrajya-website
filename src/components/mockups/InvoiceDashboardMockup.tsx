"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Send, Download, CheckCircle2, Plus, Trash2, ShieldCheck, Check } from "lucide-react";

interface InvoiceItem {
  id: string;
  description: string;
  qty: number;
  rate: number;
}

const CUSTOMERS = [
  { name: "Acme Enterprise Solutions", email: "billing@acme-global.com", taxId: "27AAACA12341Z5" },
  { name: "Nexus Digital Agency", email: "finance@nexusdigital.io", taxId: "27BBBCA98762Z1" },
  { name: "Starlight Retail Group", email: "accounts@starlight.co", taxId: "27CCCCA55553Z9" }
];

export function InvoiceDashboardMockup() {
  const [selectedCustomer, setSelectedCustomer] = useState(CUSTOMERS[0]);
  const [invoiceNumber] = useState("WR-2026-894");
  const [items, setItems] = useState<InvoiceItem[]>([
    { id: "1", description: "Enterprise Cloud License (Annual)", qty: 1, rate: 45000 },
    { id: "2", description: "Custom API & Integration Module", qty: 2, rate: 12500 }
  ]);
  const [status, setStatus] = useState<"Draft" | "Sent" | "Paid">("Paid");
  const [showSentNotification, setShowSentNotification] = useState(false);

  const addItem = () => {
    const newItem: InvoiceItem = {
      id: Date.now().toString(),
      description: "Business Support & SLA Maintenance",
      qty: 1,
      rate: 8500
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter(i => i.id !== id));
    }
  };

  const updateItem = (id: string, field: "qty" | "rate", value: number) => {
    setItems(items.map(i => i.id === id ? { ...i, [field]: value } : i));
  };

  const subtotal = items.reduce((acc, i) => acc + (i.qty * i.rate), 0);
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + tax;

  const handleSendInvoice = () => {
    setStatus("Sent");
    setShowSentNotification(true);
    setTimeout(() => setShowSentNotification(false), 4000);
  };

  return (
    <div className="w-full rounded-3xl overflow-hidden border border-[#020C2B]/15 bg-[#FAF5EF] text-[#020C2B] shadow-2xl font-sans text-xs sm:text-sm">
      {/* Header Bar */}
      <div className="bg-[#F2ECE1] border-b border-[#020C2B]/10 px-4 py-3 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <motion.div 
            whileHover={{ scale: 1.08, rotate: -5 }}
            className="w-8 h-8 rounded-xl bg-[#020C2B] text-white flex items-center justify-center font-bold shadow-sm"
          >
            <FileText className="w-4.5 h-4.5 text-[#E58145]" />
          </motion.div>
          <div>
            <span className="font-bold text-[#020C2B] text-xs sm:text-sm block">WebRajya Invoice Studio</span>
            <span className="text-[10px] text-[#E58145] font-mono font-semibold">Invoice #{invoiceNumber} • 100% Tax Compliant</span>
          </div>
        </div>

        {/* Status Pills with Animated Indicator */}
        <div className="flex items-center gap-1.5 relative">
          {(["Draft", "Sent", "Paid"] as const).map(s => {
            const isSelected = status === s;
            return (
              <button
                key={s}
                onClick={() => setStatus(s)}
                className={`relative px-3 py-1 rounded-full text-[11px] font-mono font-bold transition-colors cursor-pointer z-10 ${
                  isSelected ? "text-white" : "text-[#020C2B]"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="invoiceStatusPill"
                    className={`absolute inset-0 rounded-full shadow-xs -z-10 ${
                      s === "Paid" ? "bg-emerald-600" : s === "Sent" ? "bg-sky-600" : "bg-amber-600"
                    }`}
                    transition={{ type: "spring", stiffness: 450, damping: 30 }}
                  />
                )}
                {!isSelected && (
                  <span className="absolute inset-0 bg-white border border-[#020C2B]/10 rounded-full -z-20 hover:bg-[#020C2B]/5" />
                )}
                {s}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Invoice Sheet View */}
      <div className="p-4 sm:p-6 space-y-5 bg-[#F8F3EB] relative">
        
        {/* Customer & Business Details Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 border-b border-[#020C2B]/10">
          <div>
            <span className="text-[10px] text-[#525866] font-mono uppercase tracking-wider block mb-1 font-semibold">Billed To Client</span>
            <div className="relative">
              <select
                value={selectedCustomer.name}
                onChange={(e) => {
                  const found = CUSTOMERS.find(c => c.name === e.target.value);
                  if (found) setSelectedCustomer(found);
                }}
                className="w-full bg-white border border-[#020C2B]/10 rounded-xl px-3 py-2 text-[#020C2B] text-xs focus:outline-none focus:border-[#E58145] appearance-none font-bold cursor-pointer shadow-xs"
              >
                {CUSTOMERS.map(c => (
                  <option key={c.name} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
            <div className="mt-2 space-y-0.5 text-[11px] text-[#525866] font-mono font-medium">
              <p>{selectedCustomer.email}</p>
              <p>GSTIN: {selectedCustomer.taxId}</p>
            </div>
          </div>

          <div className="md:text-right space-y-1 font-mono text-[11px] text-[#525866] font-medium">
            <p><span className="text-[#020C2B] font-bold">Issue Date:</span> Oct 24, 2026</p>
            <p><span className="text-[#020C2B] font-bold">Due Date:</span> Nov 08, 2026 (Net 15)</p>
            <p><span className="text-[#020C2B] font-bold">Payment Terms:</span> Direct Bank Transfer / QR UPI</p>
          </div>
        </div>

        {/* Line Items Table with AnimatePresence */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#525866] uppercase tracking-wider pb-1 px-1 border-b border-[#020C2B]/10 font-bold">
            <span className="w-1/2">Description</span>
            <span className="w-1/6 text-center">Qty</span>
            <span className="w-1/6 text-right">Rate (₹)</span>
            <span className="w-1/6 text-right">Amount (₹)</span>
          </div>

          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20, height: 0 }}
                transition={{ type: "spring", stiffness: 380, damping: 25 }}
                className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#020C2B]/10 text-xs gap-2 shadow-xs"
              >
                <div className="w-1/2 flex items-center gap-2">
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) => {
                      const newDesc = e.target.value;
                      setItems(items.map(i => i.id === item.id ? { ...i, description: newDesc } : i));
                    }}
                    className="w-full bg-transparent text-[#020C2B] focus:outline-none focus:text-[#E58145] font-semibold"
                  />
                </div>

                <div className="w-1/6 flex justify-center">
                  <input
                    type="number"
                    min="1"
                    value={item.qty}
                    onChange={(e) => updateItem(item.id, "qty", parseInt(e.target.value) || 1)}
                    className="w-12 bg-[#F8F3EB] border border-[#020C2B]/10 rounded-lg text-center text-[#020C2B] font-mono py-1 focus:outline-none focus:border-[#E58145] font-bold"
                  />
                </div>

                <div className="w-1/6 text-right">
                  <input
                    type="number"
                    value={item.rate}
                    onChange={(e) => updateItem(item.id, "rate", parseInt(e.target.value) || 0)}
                    className="w-20 bg-[#F8F3EB] border border-[#020C2B]/10 rounded-lg text-right text-[#020C2B] font-mono py-1 px-1 focus:outline-none focus:border-[#E58145] font-bold"
                  />
                </div>

                <div className="w-1/6 text-right flex items-center justify-end gap-2">
                  <span className="font-mono text-[#020C2B] font-extrabold">
                    ₹{(item.qty * item.rate).toLocaleString()}
                  </span>
                  {items.length > 1 && (
                    <motion.button 
                      whileTap={{ scale: 0.8 }}
                      onClick={() => removeItem(item.id)} 
                      className="text-[#525866] hover:text-rose-600 transition-colors cursor-pointer p-0.5"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            onClick={addItem}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-[#E58145] hover:bg-[#E58145]/10 transition-colors border border-dashed border-[#E58145]/40 mt-2 cursor-pointer shadow-2xs"
          >
            <Plus className="w-3.5 h-3.5" /> Add Line Item
          </motion.button>
        </div>

        {/* Totals & Export Actions */}
        <div className="pt-4 border-t border-[#020C2B]/10 grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
          <div className="space-y-2">
            <div className="p-3.5 rounded-2xl bg-white border border-[#020C2B]/10 flex items-center gap-3 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-[#E58145] shrink-0" />
              <div>
                <span className="font-bold text-[#020C2B] text-xs block">Bank &amp; Instant UPI QR Gateway</span>
                <span className="text-[10px] text-[#525866] font-mono">Clients can scan &amp; settle invoice directly</span>
              </div>
            </div>
          </div>

          <div className="space-y-1 text-xs text-[#525866] font-mono font-medium">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="text-[#020C2B] font-semibold">₹{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>GST (18%)</span>
              <span className="text-[#020C2B] font-semibold">₹{tax.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm font-black text-[#E58145] pt-2 border-t border-[#020C2B]/10">
              <span>Total Receivable</span>
              <span>₹{total.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-wrap gap-2.5">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSendInvoice}
            className="flex-1 py-3 px-4 rounded-xl bg-[#020C2B] hover:bg-[#E58145] text-white font-bold flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
          >
            <Send className="w-4 h-4 text-[#E58145]" /> Send Invoice to Client
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="py-3 px-5 rounded-xl bg-white hover:bg-[#020C2B]/5 text-[#020C2B] font-bold border border-[#020C2B]/10 flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
          >
            <Download className="w-4 h-4 text-[#E58145]" /> Export PDF
          </motion.button>
        </div>

        {/* Live Delivery Notification Toast */}
        <AnimatePresence>
          {showSentNotification && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="p-3.5 rounded-2xl bg-emerald-700 text-white flex items-center justify-between gap-3 shadow-xl"
            >
              <div className="flex items-center gap-2.5 text-xs font-semibold">
                <Check className="w-4 h-4 text-emerald-200" />
                <span>Invoice #{invoiceNumber} sent to {selectedCustomer.email} via WhatsApp &amp; Email!</span>
              </div>
              <span className="text-[10px] font-mono bg-white/20 px-2 py-0.5 rounded font-bold">UPI QR Active</span>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
