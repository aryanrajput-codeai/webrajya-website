"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Utensils, FileText, MessageSquareCode, Tag } from "lucide-react";

export function MobileBottomDock() {
  const pathname = usePathname();

  const NAV_ITEMS = [
    {
      label: "Home",
      href: "/",
      icon: Home,
      exact: true,
    },
    {
      label: "POS",
      href: "/pos",
      icon: Utensils,
      exact: false,
    },
    {
      label: "Book Demo",
      href: "/demo",
      icon: MessageSquareCode,
      isCenterFab: true,
    },
    {
      label: "Invoice",
      href: "/invoice",
      icon: FileText,
      exact: false,
    },
    {
      label: "Pricing",
      href: "/pricing",
      icon: Tag,
      exact: false,
    },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#F8F3EB]/95 backdrop-blur-xl border-t border-[#020C2B]/10 px-2 pb-2.5 pt-1.5 flex items-end justify-around shadow-[0_-8px_30px_rgba(2,12,43,0.12)]">
      {NAV_ITEMS.map((item) => {
        const isActive = item.exact
          ? pathname === item.href
          : pathname.startsWith(item.href) && item.href !== "/";

        const Icon = item.icon;

        if (item.isCenterFab) {
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center group -mt-5 shrink-0 focus:outline-none"
            >
              <motion.div
                whileTap={{ scale: 0.92 }}
                className={`w-13 h-13 rounded-full bg-white border-4 border-[#F8F3EB] p-1.5 flex items-center justify-center shadow-xl transition-all duration-200 ${
                  isActive ? "ring-2 ring-[#E58145] shadow-[#E58145]/40" : ""
                }`}
              >
                <img
                  src="/webrajya-logo.svg"
                  alt="WebRajya Logo Emblem"
                  className="w-7 h-7 object-contain drop-shadow-sm"
                />
              </motion.div>
              <span className="text-[10px] font-black text-[#020C2B] tracking-tight mt-0.5 font-sans">
                {item.label}
              </span>
            </Link>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            className="relative flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl transition-colors shrink-0"
          >
            {isActive && (
              <motion.div
                layoutId="activeDockIndicator"
                className="absolute inset-0 bg-[#020C2B]/5 rounded-xl -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 28 }}
              />
            )}
            <Icon className={`w-5 h-5 transition-colors ${isActive ? "text-[#E58145]" : "text-[#525866]"}`} />
            <span className={`text-[10px] font-sans transition-colors ${isActive ? "font-bold text-[#E58145]" : "font-medium text-[#525866]"}`}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
