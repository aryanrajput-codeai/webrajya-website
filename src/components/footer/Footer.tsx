import React from "react";
import Link from "next/link";
import { ArrowUpRight, Shield, Layers, Globe, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";
import { WebRajyaLogo } from "@/components/brand/WebRajyaLogo";

export function Footer() {
  return (
    <footer className="bg-[#020C2B] text-white border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#2563EB]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="group inline-block">
              <WebRajyaLogo size={40} showText={true} whiteContainer={true} />
            </Link>

            <div className="space-y-1">
              <span className="font-bold text-white text-sm block">WebRajya Invoice</span>
              <p className="text-xs text-[#CBD5E1] max-w-sm leading-relaxed">
                Smart billing and inventory management for Indian businesses.
              </p>
            </div>

            <p className="text-xs text-[#94A3B8] max-w-sm leading-relaxed">
              {SITE_CONFIG.name} is a business technology platform engineering connected software products designed to simplify everyday business operations.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-[#F8F3EB] border border-white/10 text-xs font-mono">
                <Shield className="w-3.5 h-3.5 text-[#2563EB]" /> Operational Software
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-[#F8F3EB] border border-white/10 text-xs font-mono">
                <Layers className="w-3.5 h-3.5 text-[#2563EB]" /> Multi-Product Brand
              </span>
            </div>
          </div>

          {/* Product Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-[#60A5FA] tracking-wider font-semibold">Product</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/invoice#billing-speed" className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors flex items-center gap-1 group">
                  <span>Billing &amp; Invoicing</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/invoice#inventory-profit" className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors">
                  Inventory Management
                </Link>
              </li>
              <li>
                <Link href="/invoice#key-features" className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors">
                  Customer Management
                </Link>
              </li>
              <li>
                <Link href="/invoice#inventory-profit" className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors">
                  Reports
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="/pos" className="text-[#94A3B8] hover:text-white transition-colors text-xs pt-1 flex items-center gap-1">
                  <span>WebRajya POS Terminal</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-[#60A5FA] tracking-wider font-semibold">Support</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/support" className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors flex items-center gap-1 group">
                  <span>Help Center</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/demo?product=invoice&intent=get-started" className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="/invoice#key-features" className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors">
                  Data Export &amp; Backup
                </Link>
              </li>
              <li>
                <Link href="/invoice#faq" className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-[#60A5FA] tracking-wider font-semibold">Legal &amp; Compliance</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/privacy" className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/subscription-policy" className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors">
                  Subscription &amp; Renewal Policy
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8] font-mono">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <p>© 2026 WEBRAJYA. All rights reserved.</p>
            <span className="hidden sm:inline text-white/20">•</span>
            <p className="text-white/80">WEBRAJYA · Technology that runs your business.</p>
          </div>
          
          <div className="flex items-center gap-4 text-[#CBD5E1]">
            <Link href="/contact" className="hover:text-[#60A5FA] transition-colors flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-[#2563EB]" /> India Hub
            </Link>
            <Link href="/demo?product=invoice" className="hover:text-[#60A5FA] transition-colors flex items-center gap-1">
              <MessageCircle className="w-3.5 h-3.5 text-[#2563EB]" /> Book a Demo
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
