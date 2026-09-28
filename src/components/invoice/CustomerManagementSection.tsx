import React from "react";
import { Users, Mail, Phone, Clock, DollarSign, ArrowRight, ShieldCheck } from "lucide-react";

export function CustomerManagementSection() {
  const CUSTOMER_PROFILES = [
    { name: "Acme Enterprise Solutions", email: "billing@acme-global.com", invoices: 14, totalBilled: "₹4,85,000", outstanding: "₹0 (Fully Paid)", status: "Active" },
    { name: "Nexus Digital Agency", email: "finance@nexusdigital.io", invoices: 8, totalBilled: "₹2,20,000", outstanding: "₹35,000 (Pending)", status: "Pending" },
    { name: "Starlight Retail Group", email: "accounts@starlight.co", invoices: 22, totalBilled: "₹9,60,000", outstanding: "₹0 (Fully Paid)", status: "Active" }
  ];

  return (
    <section className="py-24 bg-[#F8F3EB] border-t border-[#020C2B]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase text-[#E58145] tracking-wider bg-[#E58145]/10 px-3.5 py-1 rounded-full border border-[#E58145]/20 font-bold">
            Client Intelligence
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            Centralized Customer Management
          </h2>
          <p className="text-[#020C2B]/80 text-base sm:text-lg">
            Complete client directory with contact details, billing history, payment ledger, and total outstanding balances.
          </p>
        </div>

        {/* Customer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CUSTOMER_PROFILES.map(c => (
            <div key={c.name} className="p-6 rounded-2xl bg-white border border-[#020C2B]/10 shadow-sm hover:border-[#E58145]/40 transition-all space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-[#020C2B]/10 font-sans">
                <div className="w-10 h-10 rounded-xl bg-[#E58145]/10 text-[#E58145] border border-[#E58145]/20 flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                  c.status === "Active" ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20" : "bg-amber-500/10 text-amber-600 border border-amber-500/20"
                }`}>
                  {c.status}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#020C2B] font-sans">{c.name}</h3>
                <p className="text-[11px] text-[#020C2B]/60 font-mono mt-0.5">{c.email}</p>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-[#020C2B]/10 text-[#020C2B]/80">
                <div className="flex justify-between">
                  <span>Invoices Issued:</span>
                  <span className="text-[#020C2B] font-bold">{c.invoices}</span>
                </div>
                <div className="flex justify-between">
                  <span>Lifetime Billed:</span>
                  <span className="text-[#020C2B] font-bold">{c.totalBilled}</span>
                </div>
                <div className="flex justify-between">
                  <span>Outstanding:</span>
                  <span className={c.outstanding.includes("Pending") ? "text-amber-600 font-bold" : "text-emerald-600 font-bold"}>
                    {c.outstanding}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
