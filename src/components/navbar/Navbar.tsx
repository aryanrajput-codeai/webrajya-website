"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown,
  Menu,
  X,
  FileText,
  Utensils,
  Car,
  ArrowRight,
  Phone,
  Smartphone,
  Shirt,
  Tv,
  BookOpen,
  Footprints,
  Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticHover } from "@/components/ui/motion";
import { PRODUCTS } from "@/data/products";
import { WebRajyaLogo } from "@/components/brand/WebRajyaLogo";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { LAUNCH_CONFIG } from "@/config/launch";
import { trackEvent } from "@/lib/analytics";
import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopsDropdownOpen, setShopsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShopsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setShopsDropdownOpen(false);
  }, [pathname]);

  const SHOP_LINKS = [
    { name: "Mobile Shops", href: "/industry/mobile-shops", icon: Smartphone },
    { name: "Electronics", href: "/industry/electronics", icon: Tv },
    { name: "Clothing & Garments", href: "/industry/clothing-garments", icon: Shirt },
    { name: "Footwear", href: "/industry/footwear", icon: Footprints },
    { name: "Stationery & Books", href: "/industry/stationery-books", icon: BookOpen },
    { name: "Furniture", href: "/industry/furniture", icon: Layers }
  ];

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none transition-all duration-300">
      <div
        className={`w-full max-w-6xl pointer-events-auto rounded-full transition-all duration-300 flex items-center justify-between px-3.5 sm:px-5 relative ${
          scrolled
            ? "bg-white/90 backdrop-blur-2xl backdrop-saturate-180 border border-white/90 shadow-[0_16px_40px_-8px_rgba(2,12,43,0.12),inset_0_1.5px_1.5px_rgba(255,255,255,0.95)] py-2"
            : "bg-white/80 backdrop-blur-xl backdrop-saturate-180 border border-white/80 shadow-[0_10px_32px_-6px_rgba(2,12,43,0.08),inset_0_1.5px_1.5px_rgba(255,255,255,0.9)] py-2.5"
        }`}
      >
        {/* WEBRAJYA Brand Logo */}
        <Link
          href="/"
          className="group focus:outline-none focus:ring-2 focus:ring-[#E58145] rounded-full px-2 py-1 shrink-0 flex items-center"
        >
          <WebRajyaLogo size={36} showText={true} />
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1">
          {/* Invoice Product Link */}
          <Link
            href="/invoice"
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
              pathname === "/invoice"
                ? "text-white bg-[#020C2B] shadow-xs"
                : "text-[#020C2B] hover:text-[#E58145] hover:bg-[#020C2B]/5"
            }`}
          >
            Invoice
          </Link>

          {/* Nagpur Shops Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setShopsDropdownOpen(!shopsDropdownOpen)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                pathname.startsWith("/industry") || shopsDropdownOpen
                  ? "text-white bg-[#020C2B] shadow-xs"
                  : "text-[#020C2B] hover:text-[#E58145] hover:bg-[#020C2B]/5"
              }`}
              aria-expanded={shopsDropdownOpen}
            >
              <span>Shops in Nagpur</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  shopsDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {shopsDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  className="absolute top-full left-0 mt-3 w-72 p-2.5 rounded-2xl bg-white/95 border border-white/90 shadow-[0_20px_50px_rgba(2,12,43,0.16)] backdrop-blur-3xl space-y-1 z-50 origin-top"
                >
                  <div className="text-[10px] uppercase font-mono tracking-wider text-slate-500 px-3 py-1">
                    Select Your Business Type
                  </div>
                  {SHOP_LINKS.map((shop) => {
                    const Icon = shop.icon;
                    return (
                      <Link
                        key={shop.href}
                        href={shop.href}
                        onClick={() => setShopsDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-800 hover:bg-[#F8F3EB] hover:text-[#2563EB] transition-colors"
                      >
                        <Icon className="w-4 h-4 text-[#2563EB]" />
                        <span>{shop.name}</span>
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/features"
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
              pathname === "/features"
                ? "text-white bg-[#020C2B]"
                : "text-[#020C2B] hover:text-[#E58145] hover:bg-[#020C2B]/5"
            }`}
          >
            Features
          </Link>

          <Link
            href="/pricing"
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
              pathname === "/pricing"
                ? "text-white bg-[#020C2B]"
                : "text-[#020C2B] hover:text-[#E58145] hover:bg-[#020C2B]/5"
            }`}
          >
            Pricing
          </Link>

          <Link
            href="/learn"
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
              pathname === "/learn"
                ? "text-white bg-[#020C2B]"
                : "text-[#020C2B] hover:text-[#E58145] hover:bg-[#020C2B]/5"
            }`}
          >
            Tutorials
          </Link>

          <Link
            href="/support"
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
              pathname === "/support"
                ? "text-white bg-[#020C2B]"
                : "text-[#020C2B] hover:text-[#E58145] hover:bg-[#020C2B]/5"
            }`}
          >
            Support
          </Link>

          <Link
            href="/contact"
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
              pathname === "/contact"
                ? "text-white bg-[#020C2B]"
                : "text-[#020C2B] hover:text-[#E58145] hover:bg-[#020C2B]/5"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right Action CTA & Language Toggle */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          <LanguageToggle />

          <a
            href={`tel:${LAUNCH_CONFIG.PHONE}`}
            onClick={() => trackEvent("call_click", { location: "header_nav" })}
            className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-700 hover:text-[#020C2B] px-2 py-1 rounded-full transition-colors"
            title="Call WebRajya Nagpur Desk"
          >
            <Phone className="w-3.5 h-3.5 text-[#E58145]" />
            <span>{LAUNCH_CONFIG.PHONE_DISPLAY}</span>
          </a>

          <MagneticHover>
            <Button
              href="/demo"
              variant="cta"
              size="sm"
              className="rounded-full shadow-sm text-xs px-4 py-1.5 font-bold bg-[#E58145] hover:bg-[#d47035] text-white"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              {t("book_demo", "Book Free Demo", "Free Demo Book")}
            </Button>
          </MagneticHover>
        </div>

        {/* Mobile Actions: Language + Hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <LanguageToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full text-[#020C2B] hover:text-[#E58145] hover:bg-[#020C2B]/5 focus:outline-none focus:ring-2 focus:ring-[#E58145] cursor-pointer transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Animated Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              className="lg:hidden absolute top-full left-0 right-0 mt-3 p-5 rounded-3xl bg-white/95 border border-white/90 shadow-[0_24px_60px_-10px_rgba(2,12,43,0.18)] backdrop-blur-3xl max-h-[80vh] overflow-y-auto space-y-4 z-50 pointer-events-auto"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider block font-semibold">
                  Built for Nagpur Shops
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {SHOP_LINKS.map((shop) => (
                    <Link
                      key={shop.href}
                      href={shop.href}
                      className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 hover:text-[#2563EB]"
                    >
                      {shop.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex flex-col gap-2 text-sm font-semibold text-slate-800">
                <Link href="/invoice" className="py-1.5 hover:text-[#E58145]">
                  WebRajya Invoice
                </Link>
                <Link href="/features" className="py-1.5 hover:text-[#E58145]">
                  Verified Features
                </Link>
                <Link href="/pricing" className="py-1.5 hover:text-[#E58145]">
                  Pricing &amp; Plans
                </Link>
                <Link href="/learn" className="py-1.5 hover:text-[#E58145]">
                  Video Tutorials
                </Link>
                <Link href="/support" className="py-1.5 hover:text-[#E58145]">
                  Support &amp; SLA
                </Link>
                <Link href="/contact" className="py-1.5 hover:text-[#E58145]">
                  Contact Nagpur Team
                </Link>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-2">
                <Button href="/demo" variant="cta" className="w-full">
                  {t("book_demo", "Book Free Demo", "Free Demo Book")}
                </Button>
                <a
                  href={`tel:${LAUNCH_CONFIG.PHONE}`}
                  className="flex items-center justify-center gap-2 py-2 text-xs font-mono font-bold text-slate-700 bg-slate-100 rounded-xl"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E58145]" />
                  <span>Call {LAUNCH_CONFIG.PHONE_DISPLAY}</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
