import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "pos" | "invoice" | "ghost" | "cta";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  icon,
  iconPosition = "right",
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E58145] focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none";

  const variants = {
    primary:
      "bg-[#020C2B] text-white hover:bg-[#E58145] shadow-md border border-[#020C2B]",
    cta:
      "bg-[#E58145] text-white hover:bg-[#020C2B] shadow-md border border-[#E58145]",
    secondary:
      "bg-white text-[#020C2B] hover:bg-[#020C2B] hover:text-white border border-[#020C2B] shadow-sm",
    outline:
      "bg-transparent text-[#020C2B] border border-[#020C2B]/30 hover:border-[#020C2B] hover:bg-[#020C2B] hover:text-white",
    pos:
      "bg-[#E58145] text-white hover:bg-[#020C2B] shadow-md border border-[#E58145]",
    invoice:
      "bg-[#020C2B] text-white hover:bg-[#E58145] shadow-md border border-[#020C2B]",
    ghost:
      "text-[#020C2B] hover:text-[#E58145] hover:bg-[#020C2B]/5"
  };

  const sizes = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2.5 gap-2",
    lg: "text-base px-6 py-3 gap-2.5",
    xl: "text-lg px-7 py-3.5 gap-3 rounded-2xl"
  };

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="inline-block transition-transform duration-200 group-hover:-translate-x-0.5">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">{icon}</span>}
    </>
  );

  const combinedClass = cn(baseStyles, variants[variant], sizes[size], "group", className);

  if (href) {
    return (
      <Link href={href} className={combinedClass}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {content}
    </button>
  );
}
