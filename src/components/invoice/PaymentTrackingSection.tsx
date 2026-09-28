import React from "react";
import { CheckCircle2, Clock, AlertCircle, RefreshCw, ArrowUpRight } from "lucide-react";

export function PaymentTrackingSection() {
  const STATUSES = [
    { title: "Paid Invoices", desc: "Fully settled payments automatically matched with digital receipts.", color: "emerald", icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" /> },
    { title: "Pending Invoices", desc: "Sent to clients, currently active within agreed Net 15/30 payment terms.", color: "sky", icon: <Clock className="w-5 h-5 text-sky-400" /> },
    { title: "Partially Paid", desc: "Partial deposit or installment recorded with live remaining balance counter.", color: "amber", icon: <RefreshCw className="w-5 h-5 text-amber-400" /> },
    { title: "Outstanding / Overdue", desc: "Pass due date bills highlighted with 1-click WhatsApp & email reminder triggers.", color: "rose", icon: <AlertCircle className="w-5 h-5 text-rose-400" /> }
  ];

  return (
    <section className="py-24 bg-[#F8F3EB] border-t border-[#020C2B]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase text-[#E58145] tracking-wider bg-[#E58145]/10 px-3.5 py-1 rounded-full border border-[#E58145]/20 font-bold">
            Lifecycle Visibility
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            Real-Time Payment Tracking
          </h2>
          <p className="text-[#020C2B]/80 text-base sm:text-lg">
            Track the status of every invoice from initial draft to final payment receipt with full clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATUSES.map(s => (
            <div key={s.title} className="p-6 rounded-2xl bg-white border border-[#020C2B]/10 shadow-sm hover:border-[#E58145]/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F8F3EB] border border-[#020C2B]/10 flex items-center justify-center font-bold">
                {s.icon}
              </div>
              <h3 className="text-lg font-bold text-[#020C2B]">{s.title}</h3>
              <p className="text-xs text-[#020C2B]/70 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
