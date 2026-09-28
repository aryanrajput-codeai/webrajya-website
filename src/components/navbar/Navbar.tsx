"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Utensils, FileText, ArrowRight, Layers, Tag, HelpCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PRODUCTS } from "@/data/products";

import { WebRajyaLogo } from "@/components/brand/WebRajyaLogo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F8F3EB]/95 backdrop-blur-xl border-b border-[#020C2B]/10 shadow-sm py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* WEBRAJYA Brand Logo */}
          <Link href="/" className="group focus:outline-none focus:ring-2 focus:ring-[#E58145] rounded-xl p-1">
            <WebRajyaLogo size={42} showText={true} />
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/90 p-1.5 rounded-2xl border border-[#020C2B]/10 shadow-sm backdrop-blur-md">
            
            {/* Products Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  pathname.startsWith("/pos") || pathname.startsWith("/invoice") || productsDropdownOpen
                    ? "text-white bg-[#020C2B]"
                    : "text-[#020C2B] hover:text-[#E58145] hover:bg-[#020C2B]/5"
                }`}
                aria-expanded={productsDropdownOpen}
              >
                <span>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Menu */}
              {productsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 p-3 rounded-2xl bg-white border border-[#020C2B]/10 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200 space-y-2">
                  <div className="text-[10px] uppercase font-mono tracking-wider text-[#525866] px-3 pt-1">
                    WebRajya Platforms
                  </div>
                  
                  {PRODUCTS.map(product => (
                    <Link
                      key={product.id}
                      href={product.route}
                      className="flex items-start gap-3 p-3 rounded-xl transition-all border border-transparent hover:bg-[#F8F3EB] hover:border-[#E58145]/30 group"
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 bg-[#020C2B] text-white group-hover:bg-[#E58145] transition-colors">
                        {product.id === "pos" ? <Utensils className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
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
                </div>
              )}
            </div>

            <Link
              href="/pos#pos-workflow"
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-[#020C2B] hover:text-[#E58145] hover:bg-[#020C2B]/5 transition-all"
            >
              Solutions
            </Link>

            <Link
              href="/pricing"
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                pathname === "/pricing" ? "text-white bg-[#020C2B]" : "text-[#020C2B] hover:text-[#E58145] hover:bg-[#020C2B]/5"
              }`}
            >
              Pricing
            </Link>

            <Link
              href="/contact#faq"
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-[#020C2B] hover:text-[#E58145] hover:bg-[#020C2B]/5 transition-all"
            >
              Resources
            </Link>

            <Link
              href="/about"
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                pathname === "/about" ? "text-white bg-[#020C2B]" : "text-[#020C2B] hover:text-[#E58145] hover:bg-[#020C2B]/5"
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                pathname === "/contact" ? "text-white bg-[#020C2B]" : "text-[#020C2B] hover:text-[#E58145] hover:bg-[#020C2B]/5"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button href="/demo" variant="primary" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
              Book a Demo
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white text-[#020C2B] hover:text-[#E58145] border border-[#020C2B]/10 focus:outline-none focus:ring-2 focus:ring-[#E58145]"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] bg-[#F8F3EB] border-b border-[#020C2B]/15 p-5 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="space-y-4">
            
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase text-[#525866] tracking-wider block font-semibold">WebRajya Products</span>
              {PRODUCTS.map(product => (
                <Link
                  key={product.id}
                  href={product.route}
                  className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#020C2B]/10 text-[#020C2B]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#020C2B] text-white flex items-center justify-center">
                      {product.id === "pos" ? <Utensils className="w-3.5 h-3.5" /> : <FileText className="w-3.5 h-3.5" />}
                    </div>
                    <span className="font-bold text-sm text-[#020C2B]">{product.name}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#E58145]" />
                </Link>
              ))}
            </div>

            <div className="pt-2 border-t border-[#020C2B]/10 flex flex-col gap-2 font-medium text-sm text-[#020C2B]">
              <Link href="/pos#pos-workflow" className="p-2 hover:text-[#E58145]">Solutions</Link>
              <Link href="/pricing" className="p-2 hover:text-[#E58145]">Pricing</Link>
              <Link href="/contact#faq" className="p-2 hover:text-[#E58145]">Resources &amp; FAQ</Link>
              <Link href="/about" className="p-2 hover:text-[#E58145]">About</Link>
              <Link href="/contact" className="p-2 hover:text-[#E58145]">Contact</Link>
            </div>

            <div className="pt-3 border-t border-[#020C2B]/10">
              <Button href="/demo" variant="primary" className="w-full">
                Book a Demo
              </Button>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
