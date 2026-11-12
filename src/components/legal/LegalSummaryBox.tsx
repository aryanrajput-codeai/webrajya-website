import React from "react";
import { Info } from "lucide-react";

interface LegalSummaryBoxProps {
  title?: string;
  points: string[];
}

export function LegalSummaryBox({
  title = "Saar mein / In short",
  points
}: LegalSummaryBoxProps) {
  return (
    <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-5 sm:p-6 mb-8 text-slate-800 shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <span className="inline-flex items-center justify-center p-1 bg-amber-200/80 rounded-md text-amber-900">
          <Info className="w-4 h-4" />
        </span>
        <h3 className="text-base sm:text-lg font-bold text-slate-900 !mt-0 !mb-0 !border-0 !pt-0">
          {title}
        </h3>
      </div>
      <p className="text-xs sm:text-sm text-slate-600 mb-3 font-medium">
        Yeh saral bolchaal mein saransh hai taaki baat aasaani se samajh aaye. Adhikrit kanooni shartein neeche English mein hain:
      </p>
      <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700 !mb-2">
        {points.map((pt, idx) => (
          <li key={idx} className="leading-snug">{pt}</li>
        ))}
      </ul>
      <p className="text-[11px] text-slate-500 mt-3 pt-2 border-t border-amber-200/60 italic">
        Note: Legal contract binding text is maintained in English below. (TODO: Add lawyer-reviewed full Hindi version when certified).
      </p>
    </div>
  );
}

