"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
              <div
                className={`w-13 h-13 rounded-full bg-white border-4 border-[#F8F3EB] p-1.5 flex items-center justify-center shadow-xl transition-transform duration-200 group-active:scale-95 ${
                  isActive ? "ring-2 ring-[#E58145] shadow-[#E58145]/40" : ""
                }`}
              >
                <img
                  src="/webrajya-logo.svg"
                  alt="WebRajya Logo Emblem"
                  className="w-7 h-7 object-contain drop-shadow-sm"
                />
              </div>
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
            className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-xl transition-colors shrink-0 ${
              isActive ? "text-[#E58145]" : "text-[#525866] hover:text-[#020C2B]"
            }`}
          >
            <Icon className={`w-5 h-5 ${isActive ? "text-[#E58145]" : "text-[#525866]"}`} />
            <span className={`text-[10px] font-sans ${isActive ? "font-bold text-[#E58145]" : "font-medium text-[#525866]"}`}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
