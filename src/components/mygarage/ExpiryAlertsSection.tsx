"use client";

import React from "react";
import { Bell, AlertCircle, Clock, CheckCircle2, ShieldAlert } from "lucide-react";

export function ExpiryAlertsSection() {
  return (
    <section className="py-20 bg-white border-t border-[#020C2B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            Prioritized Alert Levels with Instant Persistence.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Stay ahead of traffic penalties and lapsed insurance coverage. Smart alert prioritization ranks document urgencies automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-rose-50/60 p-6 rounded-2xl border border-rose-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold font-mono text-rose-800 uppercase bg-rose-200/80 px-2.5 py-1 rounded">
                High Priority (&lt; 7 Days)
              </span>
              <AlertCircle className="w-5 h-5 text-rose-600" />
            </div>
            <h3 className="text-lg font-bold text-rose-950">Critical Expiry Warning</h3>
            <p className="text-xs text-rose-900/80 leading-relaxed font-normal">
              PUC or Insurance expiring within 7 days. Highlighted red on dashboard to prevent heavy traffic fine penalties.
            </p>
          </div>

          <div className="bg-amber-50/60 p-6 rounded-2xl border border-amber-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold font-mono text-amber-800 uppercase bg-amber-200/80 px-2.5 py-1 rounded">
                Medium Priority (&lt; 30 Days)
              </span>
              <Clock className="w-5 h-5 text-amber-600" />
            </div>
            <h3 className="text-lg font-bold text-amber-950">Upcoming Renewal</h3>
            <p className="text-xs text-amber-900/80 leading-relaxed font-normal">
              Document expiring within 30 days. Gives ample time to book insurance policy renewals or schedule PUC test center visits.
            </p>
          </div>

          <div className="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold font-mono text-emerald-800 uppercase bg-emerald-200/80 px-2.5 py-1 rounded">
                Low Priority (&gt; 30 Days)
              </span>
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="text-lg font-bold text-emerald-950">Active &amp; Compliant</h3>
            <p className="text-xs text-emerald-900/80 leading-relaxed font-normal">
              All vehicle papers in full compliance. Instant state persistence saves completion status across sessions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
