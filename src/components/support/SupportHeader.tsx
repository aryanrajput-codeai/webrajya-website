import React from "react";
import { Sparkles, HelpCircle } from "lucide-react";

interface SupportHeaderProps {
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
}

export function SupportHeader({
  eyebrow = "WEBRAJYA SUPPORT",
  headline = "How can we help?",
  subheadline = "Explore guides, technical documentation, and answers for WebRajya POS and WebRajya Invoice."
}: SupportHeaderProps) {
  return (
    <div className="text-center max-w-3xl mx-auto space-y-4 font-sans">
      <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E58145]/10 border border-[#E58145]/20 text-[#E58145] text-xs font-mono font-bold uppercase tracking-wider">
        <Sparkles className="w-3.5 h-3.5 text-[#E58145]" />
        {eyebrow}
      </span>

      <h1 className="text-4xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
        {headline}
      </h1>

      {subheadline && (
        <p className="text-base sm:text-lg text-[#525866] leading-relaxed max-w-2xl mx-auto">
          {subheadline}
        </p>
      )}
    </div>
  );
}
