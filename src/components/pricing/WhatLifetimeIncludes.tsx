import React from "react";
import Link from "next/link";
import { CheckCircle2, Shield, Info, ArrowRight } from "lucide-react";
import { WHAT_LIFETIME_INCLUDES } from "@/config/pricing";

export function WhatLifetimeIncludes() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <span className="text-[10px] font-mono uppercase text-[#E58145] tracking-wider font-bold">
            Transparent Terms
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-[#020C2B] tracking-tight">
            {WHAT_LIFETIME_INCLUDES.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            {WHAT_LIFETIME_INCLUDES.description}
          </p>
        </div>

        <Link
          href={WHAT_LIFETIME_INCLUDES.termsHref}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:underline shrink-0"
        >
          <span>{WHAT_LIFETIME_INCLUDES.termsLabel}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {WHAT_LIFETIME_INCLUDES.points.map((pt) => (
          <div key={pt.title} className="p-4 rounded-2xl bg-[#F8F3EB]/60 border border-slate-200 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-xs text-[#020C2B]">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{pt.title}</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-normal">
              {pt.description}
            </p>
          </div>
        ))}
      </div>

      <div className="pt-2 text-[11px] text-slate-500 font-mono flex items-center gap-2">
        <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span>
          Note: Har saal ka koi AMC ya hidden renewal charges nahi. Aapka data hamesha aapke control mein safe rehta hai.
        </span>
      </div>
    </div>
  );
}

