"use client";

import React from "react";
import { FileCheck, ShieldCheck, AlertTriangle, Clock, CheckCircle2, FileText, Lock } from "lucide-react";

const DOCUMENTS = [
  {
    title: "Registration Certificate (RC)",
    icon: FileCheck,
    desc: "15-year validity tracker with RC owner details, engine number, chassis number, and RTO passing center location.",
    status: "15 Years Valid"
  },
  {
    title: "Motor Insurance Policy",
    icon: ShieldCheck,
    desc: "Comprehensive & Third-Party insurance tracking with policy number, NCB percentage, and 30/15/7 day renewal alerts.",
    status: "Days Remaining Counter"
  },
  {
    title: "PUC Pollution Certificate",
    icon: AlertTriangle,
    desc: "Real-time pollution validity tracker with automatic warning badges before standard 6-month or 1-year expiries.",
    status: "High Priority Alert"
  },
  {
    title: "Driving Licence & Road Tax",
    icon: FileText,
    desc: "Store DL details, commercial road tax receipts, permit documents, and fastag wallet IDs securely in encrypted local storage.",
    status: "Encrypted Storage"
  }
];

export function DocumentLockerSection() {
  return (
    <section className="py-20 bg-[#FAF5EF] border-t border-[#020C2B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0EA5E9] bg-[#0EA5E9]/10 px-3 py-1 rounded-full border border-[#0EA5E9]/20">
            📜 Digital Document Locker Module
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            Real-Time Days-Remaining Counters for RC, Insurance &amp; PUC.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Stop digging through glove compartments or email attachments. Access all official vehicle papers instantly on your phone with live status indicators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {DOCUMENTS.map((doc, idx) => {
            const Icon = doc.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#020C2B]/10 hover:border-[#0EA5E9] hover:shadow-md transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#0EA5E9]/15 text-[#0EA5E9] flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-bold bg-[#020C2B]/5 text-[#020C2B] px-3 py-1 rounded-full border border-[#020C2B]/10">
                    {doc.status}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#020C2B]">{doc.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {doc.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
