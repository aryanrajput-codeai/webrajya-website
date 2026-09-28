import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "brand" | "pos" | "invoice" | "neutral" | "outline";
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({ children, variant = "brand", className, icon }: BadgeProps) {
  const base = "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase transition-colors";

  const variants = {
    brand: "bg-[#020C2B]/10 text-[#020C2B] border border-[#020C2B]/20",
    pos: "bg-[#E58145]/15 text-[#020C2B] border border-[#E58145]/30",
    invoice: "bg-[#E58145]/15 text-[#020C2B] border border-[#E58145]/30",
    neutral: "bg-[#020C2B]/5 text-[#020C2B] border border-[#020C2B]/15",
    outline: "bg-transparent text-[#020C2B] border border-[#020C2B]/30"
  };

  return (
    <span className={cn(base, variants[variant], className)}>
      {icon && <span className="w-3.5 h-3.5">{icon}</span>}
      {children}
    </span>
  );
}
