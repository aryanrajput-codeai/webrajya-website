import React from "react";
import Link from "next/link";
import { ArrowUpRight, Shield, Layers, Globe, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";
import { WebRajyaLogo } from "@/components/brand/WebRajyaLogo";

export function Footer() {
  return (
    <footer className="bg-[#020C2B] text-white border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#E58145]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="group inline-block">
              <WebRajyaLogo size={40} showText={true} whiteContainer={true} />
            </Link>

            <p className="text-sm text-[#F8F3EB]/80 max-w-sm leading-relaxed">
              {SITE_CONFIG.name} is a business technology platform engineering connected software products designed to simplify everyday business operations.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-[#F8F3EB] border border-white/10 text-xs font-mono">
                <Shield className="w-3.5 h-3.5 text-[#E58145]" /> Operational Software
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-[#F8F3EB] border border-white/10 text-xs font-mono">
                <Layers className="w-3.5 h-3.5 text-[#E58145]" /> Multi-Product Brand
              </span>
            </div>
          </div>

          {/* Products Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-[#E58145] tracking-wider font-semibold">Products</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/pos" className="text-[#F8F3EB]/80 hover:text-[#E58145] transition-colors flex items-center gap-1 group">
                  <span>WebRajya POS</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/invoice" className="text-[#F8F3EB]/80 hover:text-[#E58145] transition-colors flex items-center gap-1 group">
                  <span>WebRajya Invoice</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-[#F8F3EB]/80 hover:text-[#E58145] transition-colors">
                  Pricing Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-[#E58145] tracking-wider font-semibold">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-[#F8F3EB]/80 hover:text-[#E58145] transition-colors">
                  About WebRajya
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#F8F3EB]/80 hover:text-[#E58145] transition-colors">
                  Contact Sales
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-[#F8F3EB]/80 hover:text-[#E58145] transition-colors">
                  Book a Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Legal Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-[#E58145] tracking-wider font-semibold">Resources &amp; Legal</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/support" className="text-[#F8F3EB]/80 hover:text-[#E58145] transition-colors flex items-center gap-1 group">
                  <span>Support Center</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/contact#faq" className="text-[#F8F3EB]/80 hover:text-[#E58145] transition-colors">
                  Platform FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#F8F3EB]/80 hover:text-[#E58145] transition-colors">
                  Product Updates
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-[#F8F3EB]/80 hover:text-[#E58145] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[#F8F3EB]/80 hover:text-[#E58145] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F8F3EB]/60 font-mono">
          <p>© {new Date().getFullYear()} WEBRAJYA. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[#F8F3EB]/80">
            <Link href="/contact" className="hover:text-[#E58145] transition-colors flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-[#E58145]" /> India Hub
            </Link>
            <Link href="/demo" className="hover:text-[#E58145] transition-colors flex items-center gap-1">
              <MessageCircle className="w-3.5 h-3.5 text-[#E58145]" /> Schedule Walkthrough
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
