"use client";

import React from "react";
import { QrCode, FileDown, Printer, Share2, Shield, Smartphone } from "lucide-react";

export function PdfQrExportSection() {
  return (
    <section className="py-20 bg-white border-t border-[#020C2B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            Client-Side PDF Reports &amp; Quick-Scan Emergency QR Cards.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Generate print-ready vector PDF service history documents using jsPDF, or print vehicle quick-scan QR cards for roadside emergencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-[#FAF5EF] p-8 rounded-2xl border border-[#020C2B]/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#0EA5E9]/15 text-[#0EA5E9] flex items-center justify-center font-bold">
              <FileDown className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-[#020C2B]">Instant Client-Side PDF Generation</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Compile full vehicle maintenance ledgers, expense summaries, and document numbers into clean, printable vector PDF reports using client-side jsPDF rendering.
            </p>
            <ul className="text-xs font-mono text-slate-700 space-y-2 pt-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" /> Zero server bandwidth—generated 100% in-browser
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" /> Perfect for prospective buyers during vehicle resale
              </li>
            </ul>
          </div>

          <div className="bg-[#FAF5EF] p-8 rounded-2xl border border-[#020C2B]/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#0EA5E9]/15 text-[#0EA5E9] flex items-center justify-center font-bold">
              <QrCode className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-[#020C2B]">Vehicle Quick-Scan Emergency QR Cards</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Generate custom vehicle emergency QR codes. Stick the QR code on your windshield or under the motorcycle seat for instant contact in emergency parking situations.
            </p>
            <ul className="text-xs font-mono text-slate-700 space-y-2 pt-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" /> Instant scan access for emergency contacts
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" /> Privacy-first contact masking options
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
