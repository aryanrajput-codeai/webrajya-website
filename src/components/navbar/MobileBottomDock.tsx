"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
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
    <div className="md:hidden fixed bottom-3 left-3 right-3 z-50 pointer-events-none flex justify-center pb-[env(safe-area-inset-bottom,0px)]">
      <nav className="pointer-events-auto w-full max-w-md bg-white/70 backdrop-blur-2xl backdrop-saturate-180 border border-white/80 rounded-full px-2 py-1.5 flex items-center justify-around shadow-[0_12px_40px_-6px_rgba(2,12,43,0.18),0_4px_16px_0_rgba(2,12,43,0.06),inset_0_1.5px_2px_0_rgba(255,255,255,0.9)] relative overflow-visible">
        
        {/* Specular Top Rim Refraction Line */}
        <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

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
                className="flex flex-col items-center group -mt-6 shrink-0 focus:outline-none relative"
              >
                {/* Breathing Ambient Halo */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#E58145]/40 via-amber-400/30 to-[#E58145]/20 blur-md -z-10 animate-pulse pointer-events-none" />

                <motion.div
                  whileTap={{ scale: 0.9, rotate: -2 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 450, damping: 20 }}
                  className={`w-12 h-12 rounded-full bg-white/90 backdrop-blur-xl border border-white p-1.5 flex items-center justify-center shadow-[0_8px_24px_rgba(229,129,69,0.32),inset_0_1px_1.5px_rgba(255,255,255,0.95)] transition-all ${
                    isActive ? "ring-2 ring-[#E58145] ring-offset-2 ring-offset-[#F8F3EB]" : ""
                  }`}
                >
                  <img
                    src="/webrajya-logo.svg"
                    alt="WebRajya Logo Emblem"
                    className="w-7 h-7 object-contain drop-shadow-sm"
                  />
                </motion.div>
                <span className={`text-[10px] tracking-tight mt-0.5 font-sans ${
                  isActive ? "font-black text-[#E58145]" : "font-bold text-[#020C2B]"
                }`}>
                  {item.label}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative flex flex-col items-center gap-0.5 py-1 px-3 rounded-full transition-colors shrink-0 group focus:outline-none"
            >
              {/* Luminous Frosted Glass Active Pill */}
              {isActive && (
                <motion.div
                  layoutId="activeDockGlassIndicator"
                  className="absolute inset-0 bg-[#E58145]/12 border border-[#E58145]/30 rounded-full -z-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] backdrop-blur-xs"
                  transition={{ type: "spring", stiffness: 450, damping: 30 }}
                />
              )}
              
              <motion.div
                whileTap={{ scale: 0.85 }}
                className="flex flex-col items-center gap-0.5"
              >
                <Icon className={`w-5 h-5 transition-transform duration-200 group-hover:scale-110 ${
                  isActive ? "text-[#E58145]" : "text-[#525866]"
                }`} />
                <span className={`text-[10px] font-sans transition-colors ${
                  isActive ? "font-bold text-[#E58145]" : "font-medium text-[#525866]"
                }`}>
                  {item.label}
                </span>
              </motion.div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
