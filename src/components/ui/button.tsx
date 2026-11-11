import React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center font-semibold transition-all duration-200 cursor-pointer rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E58145] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        default: "bg-[#020C2B] text-white hover:bg-[#E58145] shadow-xs border border-[#020C2B]",
        primary: "bg-[#020C2B] text-white hover:bg-[#E58145] shadow-md border border-[#020C2B]",
        cta: "bg-[#E58145] text-white hover:bg-[#d47035] shadow-md shadow-[#E58145]/20 border border-[#E58145]",
        secondary: "bg-white text-[#020C2B] hover:bg-[#020C2B] hover:text-white border border-[#020C2B]/15 shadow-xs",
        outline: "bg-transparent text-[#020C2B] border border-[#020C2B]/20 hover:border-[#020C2B] hover:bg-[#020C2B]/5",
        ghost: "hover:bg-[#020C2B]/5 text-[#020C2B]",
        pos: "bg-[#E58145] text-white hover:bg-[#d47035] shadow-md border border-[#E58145]",
        invoice: "bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-md border border-[#2563EB]",
        destructive: "bg-rose-600 text-white hover:bg-rose-700 shadow-xs",
        link: "text-[#E58145] underline-offset-4 hover:underline"
      },
      size: {
        default: "text-sm px-4 py-2 gap-2 h-10",
        xs: "text-xs px-2.5 py-1 gap-1 h-7 rounded-lg",
        sm: "text-xs px-3.5 py-1.5 gap-1.5 h-8.5 rounded-lg",
        md: "text-sm px-4 py-2.5 gap-2 h-10 rounded-xl",
        lg: "text-base px-6 py-3 gap-2.5 h-12 rounded-xl",
        xl: "text-lg px-7 py-3.5 gap-3 h-14 rounded-2xl",
        icon: "h-9 w-9 p-0 rounded-lg",
        "icon-xs": "h-6 w-6 p-0 rounded-md",
        "icon-sm": "h-7 w-7 p-0 rounded-md",
        "icon-lg": "h-11 w-11 p-0 rounded-xl"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children?: React.ReactNode;
}

export function Button({
  className,
  variant = "default",
  size = "default",
  href,
  target,
  rel,
  icon,
  iconPosition = "right",
  children,
  ...props
}: ButtonProps) {
  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="inline-block transition-transform duration-200 group-hover:-translate-x-0.5 shrink-0">
          {icon}
        </span>
      )}
      {children && <span>{children}</span>}
      {icon && iconPosition === "right" && (
        <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 shrink-0">
          {icon}
        </span>
      )}
    </>
  );

  const combinedClass = cn(buttonVariants({ variant, size, className }));

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={combinedClass}>
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
