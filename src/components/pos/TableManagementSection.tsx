"use client";

import React, { useState } from "react";
import { LayoutGrid, Users, ArrowRightLeft, Merge, Split, CheckCircle2, Clock } from "lucide-react";

interface Table {
  id: string;
  name: string;
  capacity: number;
  status: "available" | "occupied" | "bill_printed" | "reserved";
  guests?: number;
  amount?: number;
  timeRunning?: string;
}

const INITIAL_TABLES: Table[] = [
  { id: "1", name: "Table 01", capacity: 2, status: "available" },
  { id: "2", name: "Table 02", capacity: 4, status: "occupied", guests: 3, amount: 1450, timeRunning: "24m" },
  { id: "3", name: "Table 03", capacity: 6, status: "bill_printed", guests: 5, amount: 3200, timeRunning: "48m" },
  { id: "4", name: "Table 04", capacity: 4, status: "occupied", guests: 4, amount: 2100, timeRunning: "15m" },
  { id: "5", name: "Table 05", capacity: 2, status: "reserved" },
  { id: "6", name: "Table 06", capacity: 8, status: "available" }
];

export function TableManagementSection() {
  const [tables] = useState<Table[]>(INITIAL_TABLES);
  const [selectedTable, setSelectedTable] = useState<Table>(INITIAL_TABLES[1]);

  return (
    <section className="py-24 bg-[#F8F3EB] border-t border-[#020C2B]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase text-[#020C2B] tracking-wider bg-[#020C2B]/5 px-3.5 py-1.5 rounded-full border border-[#020C2B]/15 font-semibold">
            🪑 Floor Control &amp; Quick Jump
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            Visual Table &amp; Floor Management
          </h2>
          <p className="text-[#525866] text-base sm:text-lg">
            Sequential numerical sorting (Table 1, Table 2 ... Table 24), real-time occupancy badges, and 0.2-second Quick Table Jump using shortcut <code className="bg-[#020C2B] text-white px-2 py-0.5 rounded font-mono text-xs">T</code> or <code className="bg-[#020C2B] text-white px-2 py-0.5 rounded font-mono text-xs">⌘T</code>.
          </p>
        </div>

        {/* Floor Map Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Floor Map Grid */}
          <div className="lg:col-span-8 p-6 rounded-3xl bg-white border border-[#020C2B]/10 shadow-sm space-y-4">
            
            {/* Status Legend */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#020C2B]/10 text-xs font-mono">
              <span className="text-[#020C2B] flex items-center gap-1.5 font-bold">
                <LayoutGrid className="w-4 h-4 text-[#E58145]" /> Main Floor Layout
              </span>

              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Available
                </span>
                <span className="flex items-center gap-1.5 text-[#E58145] font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E58145]"></span> Occupied
                </span>
                <span className="flex items-center gap-1.5 text-sky-600 font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span> Bill Printed
                </span>
                <span className="flex items-center gap-1.5 text-purple-600 font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span> Reserved
                </span>
              </div>
            </div>

            {/* Tables Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {tables.map(tbl => {
                const isSelected = selectedTable.id === tbl.id;
                const statusStyles = {
                  available: "border-[#020C2B]/10 bg-[#F8F3EB]/60 hover:border-emerald-500",
                  occupied: "border-[#E58145]/40 bg-[#E58145]/10 hover:border-[#E58145]",
                  bill_printed: "border-sky-500/40 bg-sky-500/10 hover:border-sky-500",
                  reserved: "border-purple-500/40 bg-purple-500/10 hover:border-purple-500"
                };

                return (
                  <div
                    key={tbl.id}
                    onClick={() => setSelectedTable(tbl)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer space-y-2 relative ${statusStyles[tbl.status]} ${
                      isSelected ? "ring-2 ring-[#E58145] scale-[1.02]" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#020C2B] text-sm">{tbl.name}</span>
                      <span className="text-[10px] font-mono text-[#525866] flex items-center gap-1">
                        <Users className="w-3 h-3 text-[#020C2B]" /> {tbl.capacity}P
                      </span>
                    </div>

                    {tbl.status === "occupied" || tbl.status === "bill_printed" ? (
                      <div className="space-y-1 pt-1 border-t border-[#020C2B]/10 font-mono text-[11px]">
                        <div className="flex justify-between text-[#020C2B]">
                          <span>Running:</span>
                          <span className="font-bold text-[#E58145]">₹{tbl.amount}</span>
                        </div>
                        <div className="flex justify-between text-[#525866] text-[10px]">
                          <span>Guests: {tbl.guests}</span>
                          <span className="flex items-center gap-0.5"><Clock className="w-3 h-3" /> {tbl.timeRunning}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="pt-2 text-[10px] font-mono uppercase tracking-wider text-[#525866] font-semibold">
                        {tbl.status}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Table Actions Panel */}
          <div className="lg:col-span-4 p-6 rounded-3xl bg-[#020C2B] text-white border border-white/10 shadow-xl space-y-5">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-[#E58145] tracking-wider font-semibold">Active Table Inspector</span>
              <h3 className="text-xl font-bold text-white">{selectedTable.name}</h3>
              <p className="text-xs text-slate-300 font-mono">Status: {selectedTable.status.replace("_", " ").toUpperCase()}</p>
            </div>

            <div className="p-4 rounded-xl bg-[#081338] border border-white/10 space-y-2 text-xs font-mono text-slate-200">
              <div className="flex justify-between">
                <span>Capacity:</span>
                <span className="font-bold">{selectedTable.capacity} Seats</span>
              </div>
              {selectedTable.amount && (
                <div className="flex justify-between">
                  <span>Current Bill Total:</span>
                  <span className="text-[#E58145] font-bold">₹{selectedTable.amount}</span>
                </div>
              )}
            </div>

            {/* Quick Action Buttons */}
            <div className="space-y-2 pt-2">
              <button className="w-full p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center justify-center gap-2 border border-white/10 transition-all">
                <ArrowRightLeft className="w-4 h-4 text-[#E58145]" /> Transfer Order to Another Table
              </button>
              <button className="w-full p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center justify-center gap-2 border border-white/10 transition-all">
                <Merge className="w-4 h-4 text-emerald-400" /> Merge Tables for Large Party
              </button>
              <button className="w-full p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center justify-center gap-2 border border-white/10 transition-all">
                <Split className="w-4 h-4 text-sky-400" /> Split Table Check
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
