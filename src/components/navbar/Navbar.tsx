"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  Smartphone,
  Tv,
  Shirt,
  Footprints,
  BookOpen,
  Layers,
  ChevronDown,
  FileText,
  UtensilsCrossed,
  Car,
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
  const [productsOpen, setProductsOpen] = useState(false);
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
    setMobileMenuOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  const PRODUCT_LINKS = [
    {
      name: "WebRajya Invoice",
      desc: "Fast retail billing, stock & customer khata",
      href: "/invoice",
      icon: FileText,
      accent: "text-[#2563EB]",
      bg: "bg-blue-50",
    },
    {
      name: "WebRajya POS",
      desc: "Restaurant, cafe & hotkey billing terminal",
      href: "/pos",
      icon: UtensilsCrossed,
      accent: "text-[#E58145]",
      bg: "bg-orange-50",
    },
    {
      name: "MyGarage SaaS",
      desc: "Vehicle document locker & fleet maintenance",
      href: "/mygarage",
      icon: Car,
      accent: "text-emerald-600",
      bg: "bg-emerald-50",
    },
  ];

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
          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setProductsOpen((prev) => !prev)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer ${
                pathname === "/invoice" || pathname === "/pos" || pathname === "/mygarage"
                  ? "text-[#E58145] bg-[#E58145]/10"
                  : "text-[#020C2B] hover:text-[#E58145] hover:bg-[#020C2B]/5"
              }`}
              aria-expanded={productsOpen}
            >
              <span>Products</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  productsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-2 w-72 p-2 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-[#020C2B]/10 z-50 space-y-1"
                >
                  {PRODUCT_LINKS.map((prod) => {
                    const Icon = prod.icon;
                    return (
                      <Link
                        key={prod.href}
                        href={prod.href}
                        onClick={() => setProductsOpen(false)}
                        className={`flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group ${
                          pathname === prod.href ? "bg-slate-50" : ""
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg ${prod.bg} ${prod.accent} flex items-center justify-center shrink-0 mt-0.5`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#020C2B] group-hover:text-[#E58145] transition-colors">
                            {prod.name}
                          </div>
                          <div className="text-[11px] text-slate-500 leading-snug">
                            {prod.desc}
                          </div>
                        </div>
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
            title="Call WebRajya Support Desk"
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
                  Shops We Serve Across India
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
                <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider block font-semibold pt-1">
                  Products
                </span>
                <Link href="/invoice" className="py-1 hover:text-[#E58145] flex items-center justify-between text-xs">
                  <span>WebRajya Invoice</span>
                  <span className="text-[10px] font-mono text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded-full">Retail</span>
                </Link>
                <Link href="/pos" className="py-1 hover:text-[#E58145] flex items-center justify-between text-xs">
                  <span>WebRajya POS</span>
                  <span className="text-[10px] font-mono text-[#E58145] bg-orange-50 px-2 py-0.5 rounded-full">Restaurant</span>
                </Link>
                <Link href="/mygarage" className="py-1 hover:text-[#E58145] flex items-center justify-between text-xs">
                  <span>MyGarage SaaS</span>
                  <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Fleet</span>
                </Link>

                <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider block font-semibold pt-2 border-t border-slate-100">
                  Navigation
                </span>
                <Link href="/features" className="py-1 hover:text-[#E58145] text-xs">
                  Verified Features
                </Link>
                <Link href="/pricing" className="py-1 hover:text-[#E58145] text-xs">
                  Pricing &amp; Plans
                </Link>
                <Link href="/learn" className="py-1 hover:text-[#E58145] text-xs">
                  Video Tutorials
                </Link>
                <Link href="/support" className="py-1 hover:text-[#E58145] text-xs">
                  Support &amp; SLA
                </Link>
                <Link href="/contact" className="py-1 hover:text-[#E58145] text-xs">
                  Contact Us
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
