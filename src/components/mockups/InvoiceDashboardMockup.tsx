"use client";

import React, { useState } from "react";
import { FileText, Send, Download, CheckCircle2, UserCheck, Plus, Trash2, ShieldCheck, DollarSign } from "lucide-react";

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

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-[#020C2B]/15 bg-[#FAF5EF] text-[#020C2B] shadow-xl font-sans text-xs sm:text-sm">
      {/* Header Bar */}
      <div className="bg-[#F2ECE1] border-b border-[#020C2B]/10 px-4 py-3 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#E58145] text-white flex items-center justify-center font-bold shadow-sm">
            <FileText className="w-4.5 h-4.5" />
          </div>
          <div>
            <span className="font-bold text-[#020C2B] text-xs sm:text-sm block">WebRajya Invoice Studio</span>
            <span className="text-[10px] text-[#E58145] font-mono font-semibold">Invoice #{invoiceNumber} • Tax Compliant</span>
          </div>
        </div>

        {/* Status Pills */}
        <div className="flex items-center gap-1.5">
          {(["Draft", "Sent", "Paid"] as const).map(s => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={`px-2.5 py-1 rounded-full text-[11px] font-mono transition-all border cursor-pointer ${
                status === s
                  ? s === "Paid" 
                    ? "bg-emerald-600 text-white border-emerald-500 font-semibold shadow-xs"
                    : s === "Sent"
                    ? "bg-sky-600 text-white border-sky-500 font-semibold shadow-xs"
                    : "bg-amber-600 text-white border-amber-500 font-semibold shadow-xs"
                  : "bg-white text-[#020C2B] border-[#020C2B]/10 hover:bg-[#020C2B]/5 font-medium"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Main Invoice Sheet View */}
      <div className="p-4 sm:p-6 space-y-5 bg-[#F8F3EB]">
        
        {/* Customer & Business Details Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 border-b border-[#020C2B]/10">
          <div>
            <span className="text-[10px] text-[#525866] font-mono uppercase tracking-wider block mb-1 font-semibold">Billed To</span>
            <div className="relative">
              <select
                value={selectedCustomer.name}
                onChange={(e) => {
                  const found = CUSTOMERS.find(c => c.name === e.target.value);
                  if (found) setSelectedCustomer(found);
                }}
                className="w-full bg-white border border-[#020C2B]/10 rounded-xl px-3 py-2 text-[#020C2B] text-xs focus:outline-none focus:border-[#E58145] appearance-none font-semibold cursor-pointer shadow-xs"
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
            <p><span className="text-[#020C2B] font-semibold">Issue Date:</span> Sept 27, 2026</p>
            <p><span className="text-[#020C2B] font-semibold">Due Date:</span> Oct 12, 2026 (Net 15)</p>
            <p><span className="text-[#020C2B] font-semibold">Payment Terms:</span> Direct Bank Transfer / UPI</p>
          </div>
        </div>

        {/* Line Items Table */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#525866] uppercase tracking-wider pb-1 px-1 border-b border-[#020C2B]/10 font-semibold">
            <span className="w-1/2">Description</span>
            <span className="w-1/6 text-center">Qty</span>
            <span className="w-1/6 text-right">Rate (₹)</span>
            <span className="w-1/6 text-right">Amount (₹)</span>
          </div>

          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-2 rounded-xl bg-white border border-[#020C2B]/10 text-xs gap-2 shadow-xs">
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
                  className="w-12 bg-[#F8F3EB] border border-[#020C2B]/10 rounded text-center text-[#020C2B] font-mono py-1 focus:outline-none focus:border-[#E58145] font-bold"
                />
              </div>

              <div className="w-1/6 text-right">
                <input
                  type="number"
                  value={item.rate}
                  onChange={(e) => updateItem(item.id, "rate", parseInt(e.target.value) || 0)}
                  className="w-20 bg-[#F8F3EB] border border-[#020C2B]/10 rounded text-right text-[#020C2B] font-mono py-1 px-1 focus:outline-none focus:border-[#E58145] font-bold"
                />
              </div>

              <div className="w-1/6 text-right flex items-center justify-end gap-2">
                <span className="font-mono text-[#020C2B] font-bold">
                  ₹{(item.qty * item.rate).toLocaleString()}
                </span>
                {items.length > 1 && (
                  <button onClick={() => removeItem(item.id)} className="text-[#525866] hover:text-rose-600 transition-colors cursor-pointer">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}

          <button
            onClick={addItem}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-[#E58145] hover:bg-[#E58145]/10 transition-colors border border-dashed border-[#E58145]/40 mt-2 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" /> Add Line Item
          </button>
        </div>

        {/* Totals & Export Actions */}
        <div className="pt-4 border-t border-[#020C2B]/10 grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
          <div className="space-y-2">
            <div className="p-3 rounded-xl bg-white border border-[#020C2B]/10 flex items-center gap-3 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-[#E58145] shrink-0" />
              <div>
                <span className="font-semibold text-[#020C2B] text-xs block">Bank &amp; UPI Gateway Attached</span>
                <span className="text-[10px] text-[#525866] font-mono">Clients can scan &amp; pay instantly online</span>
              </div>
            </div>
          </div>

          <div className="space-y-1 text-xs text-[#525866] font-mono">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="text-[#020C2B] font-semibold">₹{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>GST (18%)</span>
              <span className="text-[#020C2B] font-semibold">₹{tax.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm font-bold text-[#E58145] pt-2 border-t border-[#020C2B]/10">
              <span>Total Receivable</span>
              <span>₹{total.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-wrap gap-2">
          <button className="flex-1 py-2.5 px-4 rounded-xl bg-[#E58145] hover:bg-[#d67236] text-white font-bold flex items-center justify-center gap-2 shadow-md border border-[#E58145] transition-all cursor-pointer">
            <Send className="w-4 h-4" /> Send Invoice to Client
          </button>
          <button className="py-2.5 px-4 rounded-xl bg-white hover:bg-[#020C2B]/5 text-[#020C2B] font-semibold border border-[#020C2B]/10 flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs">
            <Download className="w-4 h-4 text-[#E58145]" /> Export PDF
          </button>
        </div>

      </div>
    </div>
  );
}
