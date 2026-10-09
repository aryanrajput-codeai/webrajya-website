"use client";

import React from "react";
import { Search, ShieldAlert, Cpu, CheckCircle2, Server, ArrowRight } from "lucide-react";

export function VahanChallanSection() {
  return (
    <section className="py-20 bg-[#FAF5EF] border-t border-[#020C2B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0EA5E9] bg-[#0EA5E9]/10 px-3 py-1 rounded-full border border-[#0EA5E9]/20">
            🔍 Vahan &amp; Challan API Ready
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            Built-in Route Handlers for Vahan Specs &amp; Traffic Challans.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            MyGarage comes pre-engineered with Next.js App Router API endpoints to query vehicle registration details and pending e-challans automatically.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-[#020C2B]/10 max-w-4xl mx-auto space-y-6 shadow-sm">
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#020C2B] text-[#0EA5E9] flex items-center justify-center font-bold font-mono">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-[#020C2B]">Next.js Route Handler Specs</h3>
                <p className="text-xs text-slate-500 font-mono">`api/vahan/lookup` &amp; `api/challan/check`</p>
              </div>
            </div>
            <span className="text-xs font-mono bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-bold">
              Production API Endpoint Ready
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 text-xs font-mono">
            <div className="bg-slate-900 text-slate-200 p-4 rounded-xl space-y-2">
              <div className="flex items-center justify-between text-slate-400">
                <span>// Route Handler: Vahan Lookup</span>
                <span className="text-emerald-400">200 OK</span>
              </div>
              <pre className="text-[11px] text-sky-300 leading-relaxed font-mono">
{`GET /api/vahan?regNo=MH12AB4920

Response:
{
  "make": "BMW India",
  "model": "3 Series 330i M Sport",
  "fuelType": "PETROL",
  "emissionNorm": "BS VI",
  "regDate": "2023-03-12",
  "rto": "MH12 Pune Central"
}`}
              </pre>
            </div>

            <div className="bg-slate-900 text-slate-200 p-4 rounded-xl space-y-2">
              <div className="flex items-center justify-between text-slate-400">
                <span>// Route Handler: Traffic Challan</span>
                <span className="text-emerald-400">200 OK</span>
              </div>
              <pre className="text-[11px] text-sky-300 leading-relaxed font-mono">
{`GET /api/challan?regNo=MH12AB4920

Response:
{
  "pendingChallans": 0,
  "totalAmount": 0,
  "lastChecked": "2026-10-09T14:22:00Z",
  "status": "CLEAN_RECORD"
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
