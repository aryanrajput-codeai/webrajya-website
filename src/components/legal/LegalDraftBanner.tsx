import React from "react";
import { AlertTriangle, Clock } from "lucide-react";
import { LAUNCH_CONFIG } from "@/config/launch";

interface LegalDraftBannerProps {
  documentName?: string;
}

/**
 * Draft Legal Banner
 * 
 * Displayed automatically on all legal pages when LAUNCH_CONFIG.LEGAL_APPROVED === false.
 * Disappears once the legal approval flag is enabled.
 */
export function LegalDraftBanner({ documentName = "Legal Document" }: LegalDraftBannerProps) {
  if (LAUNCH_CONFIG.LEGAL_APPROVED) {
    return null;
  }

  return (
    <div className="w-full bg-amber-50 border-b border-amber-200 py-3 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto flex items-start sm:items-center gap-3 text-amber-900 text-xs sm:text-sm font-medium">
        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5 sm:mt-0" />
        <div className="flex-1">
          <span className="font-bold">Draft — Pending Professional Review:</span> This{" "}
          {documentName} is an unfinalized preview prepared for launch review by our Chartered
          Accountant and legal counsel. It is subject to formal validation prior to payment enablement.
        </div>
        <span className="hidden md:inline-flex items-center gap-1 text-[11px] font-mono text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded">
          <Clock className="w-3 h-3" /> Pre-Launch
        </span>
      </div>
    </div>
  );
}
