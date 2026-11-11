import React from "react";
import { LEGAL_CONFIG } from "@/config/legal";

interface PlaceholderProps {
  children: React.ReactNode;
  hint?: string;
}

export function Placeholder({ children, hint }: PlaceholderProps) {
  if (LEGAL_CONFIG.LEGAL_APPROVED) {
    return <>{children}</>;
  }

  return (
    <mark
      className="bg-yellow-200 text-yellow-950 font-mono text-[0.95em] px-1.5 py-0.5 rounded border border-yellow-400 font-semibold inline-block my-0.5"
      title={hint || "Placeholder pending final legal confirmation"}
    >
      {children}
    </mark>
  );
}

