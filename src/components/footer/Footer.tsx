import React from "react";
import Link from "next/link";
import { ArrowUpRight, Shield, Layers, Globe, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";
import { WebRajyaLogo } from "@/components/brand/WebRajyaLogo";
import { LAUNCH_CONFIG } from "@/config/launch";
import { GstNote } from "@/components/ui/GstNote";

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
              <span className="font-bold text-white text-sm block">WebRajya Invoice — Nagpur</span>
              <p className="text-xs text-[#CBD5E1] max-w-sm leading-relaxed">
                Affordable, easy-to-use billing and inventory software with personal customer support for Nagpur retailers.
              </p>
            </div>

            <div className="space-y-1.5 text-xs text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E58145] shrink-0" />
                <span>{LAUNCH_CONFIG.NAGPUR_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E58145] shrink-0" />
                <a href={`tel:${LAUNCH_CONFIG.PHONE}`} className="hover:text-white transition-colors">
                  {LAUNCH_CONFIG.PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#E58145] shrink-0" />
                <a href={`mailto:${LAUNCH_CONFIG.EMAIL}`} className="hover:text-white transition-colors">
                  {LAUNCH_CONFIG.EMAIL}
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-[#F8F3EB] border border-white/10 text-xs font-mono">
                <Shield className="w-3.5 h-3.5 text-[#2563EB]" /> 3-Day Free Trial
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-[#F8F3EB] border border-white/10 text-xs font-mono">
                <Layers className="w-3.5 h-3.5 text-[#2563EB]" /> Offline Local-First
              </span>
            </div>
          </div>

          {/* Nagpur Industry Shops Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-[#60A5FA] tracking-wider font-semibold">
              Shops in Nagpur
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/industry/mobile-shops" className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors">
                  Mobile &amp; Accessories
                </Link>
              </li>
              <li>
                <Link href="/industry/electronics" className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors">
                  Consumer Electronics
                </Link>
              </li>
              <li>
                <Link href="/industry/clothing-garments" className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors">
                  Clothing &amp; Garments
                </Link>
              </li>
              <li>
                <Link href="/industry/footwear" className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors">
                  Footwear &amp; Shoes
                </Link>
              </li>
              <li>
                <Link href="/industry/stationery-books" className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors">
                  Stationery &amp; Books
                </Link>
              </li>
              <li>
                <Link href="/industry/furniture" className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors">
                  Furniture Showrooms
                </Link>
              </li>
            </ul>
          </div>

          {/* Product & Resources Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-[#60A5FA] tracking-wider font-semibold">
              Product &amp; Support
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/features" className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors flex items-center gap-1 group">
                  <span>Verified Features</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors">
                  Transparent Pricing
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors">
                  Book In-Shop Demo
                </Link>
              </li>
              <li>
                <Link href="/learn" className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors">
                  Tutorials &amp; Learn
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors">
                  Support Desk
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors">
                  About WebRajya
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors">
                  Contact Nagpur Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column (All 7 Legal Pages + /legal index) */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-[#60A5FA] tracking-wider font-semibold">
              Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/privacy-policy" className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/subscription-terms" className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors">
                  Subscription and Renewal Terms
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors">
                  Cancellation and Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/lifetime-terms" className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors">
                  Lifetime Licence Terms
                </Link>
              </li>
              <li>
                <Link href="/data-retention" className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors">
                  Data Retention and Deletion
                </Link>
              </li>
              <li>
                <Link href="/support-sla" className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors">
                  Support SLA
                </Link>
              </li>
              <li className="pt-1 border-t border-white/10">
                <Link href="/legal" className="text-[#60A5FA] hover:text-white transition-colors font-medium">
                  View All Policies &rarr;
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* GST Note directly under footer columns */}
        <div className="py-4">
          <GstNote className="text-slate-400 text-center" />
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8] font-mono border-t border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <p>© 2026 WEBRAJYA. All rights reserved.</p>
            <span className="hidden sm:inline text-white/20">•</span>
            <p className="text-white/80">Nagpur, Maharashtra · Affordable, complete billing software.</p>
          </div>
          
          <div className="flex items-center gap-4 text-[#CBD5E1]">
            <a
              href={`https://wa.me/${LAUNCH_CONFIG.WHATSAPP}?text=${encodeURIComponent("Hi WebRajya, I have an enquiry about billing software in Nagpur.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" /> WhatsApp
            </a>
            <Link href="/demo" className="hover:text-[#60A5FA] transition-colors flex items-center gap-1">
              Book Free Demo
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
