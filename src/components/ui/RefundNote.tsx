import React from "react";
import Link from "next/link";
import { LAUNCH_CONFIG } from "@/config/launch";

interface RefundNoteProps {
  className?: string;
  showLink?: boolean;
}

/**
 * Shared Refund Note Component
 * 
 * STRICT COMPLIANCE:
 * Does NOT use blanket "no refund" claims.
 * Renders the central LAUNCH_CONFIG.REFUND_TEXT with an explicit link to /refund.
 */
export function RefundNote({ className = "", showLink = true }: RefundNoteProps) {
  return (
    <p className={`text-xs text-slate-500 leading-relaxed ${className}`}>
      {LAUNCH_CONFIG.REFUND_TEXT}{" "}
      {showLink && (
        <Link
          href="/refund"
          className="text-[#2563EB] hover:text-[#020C2B] underline underline-offset-2 transition-colors font-medium"
        >
          View Refund Policy &rarr;
        </Link>
      )}
    </p>
  );
}

