import React from "react";
import { LAUNCH_CONFIG } from "@/config/launch";

interface GstNoteProps {
  className?: string;
}

/**
 * Shared GST Note Component
 * 
 * STRICT COMPLIANCE:
 * Does NOT write "GST included", "plus GST", or "no GST" anywhere.
 * Renders ONLY the central LAUNCH_CONFIG.GST_NOTE string.
 * If empty, renders nothing.
 */
export function GstNote({ className = "" }: GstNoteProps) {
  if (!LAUNCH_CONFIG.GST_NOTE || LAUNCH_CONFIG.GST_NOTE.trim() === "") {
    return null;
  }

  return (
    <p className={`text-xs text-slate-500 font-mono tracking-tight ${className}`}>
      {LAUNCH_CONFIG.GST_NOTE}
    </p>
  );
}
