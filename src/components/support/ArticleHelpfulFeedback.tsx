"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ThumbsUp, ThumbsDown, CheckCircle2 } from "lucide-react";

export function ArticleHelpfulFeedback() {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState<"yes" | "no" | null>(null);

  return (
    <div className="p-6 rounded-3xl bg-[#F8F3EB] border border-[#020C2B]/10 space-y-4 font-sans text-center">
      <h4 className="font-bold text-[#020C2B] text-sm">Was this article helpful?</h4>

      {feedbackSubmitted ? (
        <div className="flex items-center justify-center gap-2 text-emerald-700 text-xs font-mono font-bold py-2 animate-in fade-in duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Thank you for your feedback!</span>
        </div>
      ) : (
        <div className="flex justify-center items-center gap-3">
          <button
            onClick={() => setFeedbackSubmitted("yes")}
            className="px-4 py-2 rounded-xl bg-white border border-[#020C2B]/10 hover:border-[#E58145] text-[#020C2B] text-xs font-mono font-bold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
          >
            <ThumbsUp className="w-3.5 h-3.5 text-[#E58145]" /> Yes
          </button>
          <button
            onClick={() => setFeedbackSubmitted("no")}
            className="px-4 py-2 rounded-xl bg-white border border-[#020C2B]/10 hover:border-[#020C2B]/40 text-[#020C2B] text-xs font-mono font-bold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
          >
            <ThumbsDown className="w-3.5 h-3.5 text-[#525866]" /> No
          </button>
        </div>
      )}

      <div className="pt-2 border-t border-[#020C2B]/10 flex flex-wrap justify-between items-center text-xs font-mono text-[#525866] gap-2">
        <span>Still need help?</span>
        <Link href="/contact" className="font-bold text-[#E58145] hover:underline">
          Contact Support →
        </Link>
      </div>
    </div>
  );
}
