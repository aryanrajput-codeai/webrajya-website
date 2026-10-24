"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X, Utensils, FileText, Car, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MagneticHover } from "@/components/ui/motion";
import { PRODUCTS } from "@/data/products";
import { WebRajyaLogo } from "@/components/brand/WebRajyaLogo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

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
        setProductsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none transition-all duration-300">
      <div
        className={`w-full max-w-5xl pointer-events-auto rounded-full transition-all duration-300 flex items-center justify-between px-3.5 sm:px-5 relative ${
          scrolled
            ? "bg-white/85 backdrop-blur-2xl backdrop-saturate-180 border border-white/90 shadow-[0_16px_40px_-8px_rgba(2,12,43,0.12),inset_0_1.5px_1.5px_rgba(255,255,255,0.95)] py-2"
            : "bg-white/75 backdrop-blur-xl backdrop-saturate-180 border border-white/80 shadow-[0_10px_32px_-6px_rgba(2,12,43,0.08),inset_0_1.5px_1.5px_rgba(255,255,255,0.9)] py-2.5"
        }`}
      >
        {/* WEBRAJYA Brand Logo */}
        <Link
          href="/"
          className="group focus:outline-none focus:ring-2 focus:ring-[#E58145] rounded-full px-2 py-1 shrink-0 flex items-center"
        >
          <WebRajyaLogo size={36} showText={true} />
        </Link>

        {/* Desktop Nav Items — 100% Dead-Centered in the Capsule */}
        <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {/* Products Dropdown Trigger */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                pathname.startsWith("/pos") ||
                pathname.startsWith("/invoice") ||
                pathname.startsWith("/mygarage") ||
                productsDropdownOpen
                  ? "text-white bg-[#020C2B] shadow-xs"
                  : "text-[#020C2B] hover:text-[#E58145] hover:bg-[#020C2B]/5"
              }`}
              aria-expanded={productsDropdownOpen}
            >
              <span>Products</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  productsDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Animated Dropdown Menu */}
            <AnimatePresence>
              {productsDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 p-3 rounded-2xl bg-white/95 border border-white/90 shadow-[0_20px_50px_rgba(2,12,43,0.16),inset_0_1px_1.5px_rgba(255,255,255,0.95)] backdrop-blur-3xl space-y-2 z-50 origin-top"
                >
                  <div className="text-[10px] uppercase font-mono tracking-wider text-[#525866] px-3 pt-1">
                    WebRajya Platforms
                  </div>

                  {PRODUCTS.map((product) => (
                    <Link
                      key={product.id}
                      href={product.route}
                      onClick={() => setProductsDropdownOpen(false)}
                      className="flex items-start gap-3 p-3 rounded-xl transition-all border border-transparent hover:bg-[#F8F3EB] hover:border-[#E58145]/30 group"
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 bg-[#020C2B] text-white group-hover:bg-[#E58145] transition-colors">
                        {product.id === "pos" ? (
                          <Utensils className="w-4 h-4" />
                        ) : product.id === "invoice" ? (
                          <FileText className="w-4 h-4" />
                        ) : (
                          <Car className="w-4 h-4" />
                        )}
                      </div>
                      <div>
                        <span className="font-bold text-[#020C2B] text-xs group-hover:text-[#E58145] block">
                          {product.name}
                        </span>
                        <p className="text-[11px] text-[#525866] line-clamp-1 mt-0.5 font-normal">
                          {product.tagline}
                        </p>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {[
            { label: "Solutions", href: "/pos#pos-workflow" },
            { label: "Pricing", href: "/pricing" },
            { label: "Resources", href: "/contact#faq" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-[#020C2B] hover:text-[#E58145] hover:bg-[#020C2B]/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-[#020C2B] rounded-full -z-10 shadow-xs"
                    transition={{ type: "spring", stiffness: 450, damping: 30 }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action CTA */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <MagneticHover>
            <Button
              href="/demo"
              variant="primary"
              size="sm"
              className="rounded-full shadow-sm text-xs px-4 py-1.5"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Book a Demo
            </Button>
          </MagneticHover>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-full text-[#020C2B] hover:text-[#E58145] hover:bg-[#020C2B]/5 focus:outline-none focus:ring-2 focus:ring-[#E58145] cursor-pointer transition-colors"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Animated Mobile Drawer (Anchored directly under capsule) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              className="lg:hidden absolute top-full left-0 right-0 mt-3 p-5 rounded-3xl bg-white/95 border border-white/90 shadow-[0_24px_60px_-10px_rgba(2,12,43,0.18)] backdrop-blur-3xl max-h-[80vh] overflow-y-auto space-y-4 z-50 pointer-events-auto"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase text-[#525866] tracking-wider block font-semibold">
                    WebRajya Products
                  </span>
                  {PRODUCTS.map((product) => (
                    <Link
                      key={product.id}
                      href={product.route}
                      className="flex items-center justify-between p-3 rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 text-[#020C2B] hover:border-[#E58145] shadow-xs transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-[#020C2B] text-white flex items-center justify-center">
                          {product.id === "pos" ? (
                            <Utensils className="w-3.5 h-3.5" />
                          ) : product.id === "invoice" ? (
                            <FileText className="w-3.5 h-3.5" />
                          ) : (
                            <Car className="w-3.5 h-3.5" />
                          )}
                        </div>
                        <span className="font-bold text-sm text-[#020C2B]">
                          {product.name}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#E58145]" />
                    </Link>
                  ))}
                </div>

                <div className="pt-2 border-t border-[#020C2B]/10 flex flex-col gap-2 font-medium text-sm text-[#020C2B]">
                  <Link href="/pos#pos-workflow" className="p-2 hover:text-[#E58145] rounded-lg">
                    Solutions
                  </Link>
                  <Link href="/pricing" className="p-2 hover:text-[#E58145] rounded-lg">
                    Pricing
                  </Link>
                  <Link href="/contact#faq" className="p-2 hover:text-[#E58145] rounded-lg">
                    Resources &amp; FAQ
                  </Link>
                  <Link href="/about" className="p-2 hover:text-[#E58145] rounded-lg">
                    About
                  </Link>
                  <Link href="/contact" className="p-2 hover:text-[#E58145] rounded-lg">
                    Contact
                  </Link>
                </div>

                <div className="pt-3 border-t border-[#020C2B]/10">
                  <Button href="/demo" variant="primary" className="w-full rounded-full">
                    Book a Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
