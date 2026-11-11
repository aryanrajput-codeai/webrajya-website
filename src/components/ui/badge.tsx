import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const badgeVariants = cva(
  "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase transition-colors shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#020C2B]/10 text-[#020C2B] border border-[#020C2B]/20",
        brand: "bg-[#020C2B]/10 text-[#020C2B] border border-[#020C2B]/20",
        pos: "bg-[#E58145]/15 text-[#020C2B] border border-[#E58145]/30",
        invoice: "bg-[#2563EB]/15 text-[#2563EB] border border-[#2563EB]/30",
        mygarage: "bg-[#0EA5E9]/15 text-[#0EA5E9] border border-[#0EA5E9]/30",
        neutral: "bg-[#020C2B]/5 text-[#020C2B] border border-[#020C2B]/15",
        outline: "bg-transparent text-[#020C2B] border border-[#020C2B]/30",
        secondary: "bg-slate-100 text-slate-800 border border-slate-200",
        destructive: "bg-rose-50 text-rose-700 border border-rose-200"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode;
}

export function Badge({
  className,
  variant = "default",
  icon,
  children,
  ...props
}: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, className }))} {...props}>
      {icon && <span className="w-3.5 h-3.5 shrink-0">{icon}</span>}
      {children}
    </span>
  );
}

