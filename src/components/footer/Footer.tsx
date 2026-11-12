import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Shield,
  Layers,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from "lucide-react";
import { WebRajyaLogo } from "@/components/brand/WebRajyaLogo";
import { COMPANY_CONFIG } from "@/config/company";
import { GstNote } from "@/components/ui/GstNote";

export function Footer() {
  return (
    <footer className="bg-[#020C2B] text-white border-t border-white/10 pt-16 pb-12 relative overflow-hidden font-sans">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#2563EB]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="group inline-block">
              <WebRajyaLogo size={40} showText={true} whiteContainer={true} />
            </Link>

            <div className="space-y-1.5">
              <span className="font-bold text-white text-base block">{COMPANY_CONFIG.legalName}</span>
              <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
                Poore Bharat ke retailers aur vyapariyon ke liye aasaan aur kifaayati billing &amp; stock software.
                Personal setup support video call, WhatsApp ya Nagpur in-shop visit ke dwaara.
              </p>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E58145] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Head Office:</span>
                  <a
                    href={COMPANY_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white hover:underline transition-colors text-slate-300"
                  >
                    {COMPANY_CONFIG.headOfficeAddress}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E58145] shrink-0" />
                <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} className="hover:text-white transition-colors text-slate-200">
                  {COMPANY_CONFIG.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E58145] shrink-0" />
                <a href={`mailto:${COMPANY_CONFIG.email}`} className="hover:text-white transition-colors text-slate-200">
                  {COMPANY_CONFIG.email}
                </a>
              </div>
            </div>

            {/* Social links if configured */}
            {(COMPANY_CONFIG.social.instagram || COMPANY_CONFIG.social.youtube) && (
              <div className="flex items-center gap-3 pt-1">
                {COMPANY_CONFIG.social.instagram && (
                  <a
                    href={COMPANY_CONFIG.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                )}
                {COMPANY_CONFIG.social.youtube && (
                  <a
                    href={COMPANY_CONFIG.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    YouTube
                  </a>
                )}
              </div>
            )}

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-slate-100 border border-white/15 text-xs font-mono">
                <Shield className="w-3.5 h-3.5 text-[#60A5FA]" /> 3-Din Free Trial
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-slate-100 border border-white/15 text-xs font-mono">
                <Layers className="w-3.5 h-3.5 text-[#60A5FA]" /> Works Offline (Bina Net Ke)
              </span>
            </div>
          </div>

          {/* Shops We Serve Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-[#60A5FA] tracking-wider font-semibold">
              Shops We Serve
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/industry/mobile-shops" className="text-slate-300 hover:text-white transition-colors">
                  Mobile &amp; Accessories
                </Link>
              </li>
              <li>
                <Link href="/industry/electronics" className="text-slate-300 hover:text-white transition-colors">
                  Consumer Electronics
                </Link>
              </li>
              <li>
                <Link href="/industry/clothing-garments" className="text-slate-300 hover:text-white transition-colors">
                  Clothing &amp; Garments
                </Link>
              </li>
              <li>
                <Link href="/industry/footwear" className="text-slate-300 hover:text-white transition-colors">
                  Footwear &amp; Shoes
                </Link>
              </li>
              <li>
                <Link href="/industry/stationery-books" className="text-slate-300 hover:text-white transition-colors">
                  Stationery &amp; Books
                </Link>
              </li>
              <li>
                <Link href="/industry/furniture" className="text-slate-300 hover:text-white transition-colors">
                  Furniture Showrooms
                </Link>
              </li>
            </ul>
          </div>

          {/* Products & Support Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-[#60A5FA] tracking-wider font-semibold">
              Products &amp; Support
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/invoice" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1 group">
                  <span>WebRajya Invoice</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/pos" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1 group">
                  <span>WebRajya POS</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/mygarage" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1 group">
                  <span>MyGarage SaaS</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-300 hover:text-white transition-colors">
                  Transparent Pricing
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-slate-300 hover:text-white transition-colors">
                  Book Free Demo
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-slate-300 hover:text-white transition-colors">
                  Features List
                </Link>
              </li>
              <li>
                <Link href="/learn" className="text-slate-300 hover:text-white transition-colors">
                  Tutorials &amp; Guides
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-slate-300 hover:text-white transition-colors">
                  Support Desk
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  About WebRajya
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column (High Contrast WCAG AA) */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-[#60A5FA] tracking-wider font-semibold">
              Legal &amp; Policy
            </h4>
            <ul className="space-y-2 text-[13px] leading-relaxed">
              <li>
                <Link href="/privacy-policy" className="text-slate-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-300 hover:text-white transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/subscription-terms" className="text-slate-300 hover:text-white transition-colors">
                  Subscription &amp; Renewal Terms
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-slate-300 hover:text-white transition-colors">
                  Cancellation &amp; Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/lifetime-terms" className="text-slate-300 hover:text-white transition-colors">
                  Lifetime Licence Terms
                </Link>
              </li>
              <li>
                <Link href="/data-retention" className="text-slate-300 hover:text-white transition-colors">
                  Data Retention &amp; Deletion
                </Link>
              </li>
              <li>
                <Link href="/support-sla" className="text-slate-300 hover:text-white transition-colors">
                  Support SLA
                </Link>
              </li>
              <li className="pt-1.5 border-t border-white/10">
                <Link href="/legal" className="text-[#60A5FA] hover:text-white transition-colors font-medium">
                  View All Policies &rarr;
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* GST Note directly under footer columns */}
        <div className="py-4">
          <GstNote className="text-slate-300 text-center text-xs sm:text-sm font-normal" />
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <p>© 2026 {COMPANY_CONFIG.brandName}. All rights reserved.</p>
            <span className="hidden sm:inline text-white/30">•</span>
            <p className="text-slate-200">
              Head Office: Nagpur, Maharashtra · Poore Bharat ke dukaandaaron ki seva mein.
            </p>
          </div>
          
          <div className="flex items-center gap-4 text-slate-200">
            <a
              href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hi WebRajya, I have an enquiry about billing software.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" /> WhatsApp
            </a>
            <Link href="/demo" className="hover:text-[#60A5FA] transition-colors flex items-center gap-1">
              Free Demo Book Karein
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
