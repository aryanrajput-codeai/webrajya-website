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
