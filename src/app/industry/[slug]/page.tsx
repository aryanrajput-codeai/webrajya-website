import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Smartphone,
  Barcode,
  BookOpen,
  WifiOff,
  Tv,
  FileCheck,
  Boxes,
  CreditCard,
  Shirt,
  Zap,
  TrendingUp,
  Footprints,
  Layers,
  Users,
  PackageCheck,
  FileSpreadsheet,
  Receipt,
  Wallet,
  FileText,
  Truck,
  MapPin,
  CheckCircle2,
  PhoneCall,
  HelpCircle,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { INDUSTRIES_DATA, IndustryShopConfig } from "@/data/industries";
import { LAUNCH_CONFIG } from "@/config/launch";
import { Button } from "@/components/ui/button";
import { GstNote } from "@/components/ui/GstNote";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Smartphone,
  Barcode,
  BookOpen,
  WifiOff,
  Tv,
  FileCheck,
  Boxes,
  CreditCard,
  Shirt,
  Zap,
  TrendingUp,
  Footprints,
  Layers,
  Users,
  PackageCheck,
  FileSpreadsheet,
  Receipt,
  Wallet,
  FileText,
  Truck,
  MapPin
};

export async function generateStaticParams() {
  return Object.keys(INDUSTRIES_DATA).map((slug) => ({
    slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES_DATA[slug];

  if (!industry) {
    return {
      title: "Industry Not Found | WebRajya Invoice"
    };
  }

  return {
    title: industry.seoTitle,
    description: industry.seoDescription,
    keywords: [
      `Billing software ${industry.name} Nagpur`,
      `Retail POS Nagpur`,
      industry.shopTypeLabel,
      "WebRajya Invoice Nagpur",
      "GST billing Maharashtra"
    ],
    openGraph: {
      title: industry.seoTitle,
      description: industry.seoDescription,
      url: `https://webrajya.com/industry/${slug}`,
      siteName: "WebRajya",
      locale: "en_IN",
      type: "article"
    }
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const industry: IndustryShopConfig | undefined = INDUSTRIES_DATA[slug];

  if (!industry) {
    notFound();
  }

  const whatsappMessage = encodeURIComponent(
    `Hi, I want a demo of WebRajya Invoice for my ${industry.shopTypeLabel} in Nagpur.`
  );
  const whatsappUrl = `https://wa.me/${LAUNCH_CONFIG.WHATSAPP}?text=${whatsappMessage}`;

  return (
    <div className="w-full bg-[#F8F3EB] text-[#020C2B] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#020C2B] tracking-tight leading-tight">
            {industry.heroHeadline}
          </h1>

          <p className="text-slate-700 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
            {industry.heroSubheadline}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={`/demo?shopType=${encodeURIComponent(industry.shopTypeLabel)}`}
              variant="cta"
              size="xl"
              className="w-full sm:w-auto"
            >
              Book Free In-Shop Demo
            </Button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-base text-white bg-[#25D366] hover:bg-[#1ebe57] active:bg-[#17a84c] shadow-md shadow-[#25D366]/30 hover:shadow-lg hover:shadow-[#25D366]/40 transition-all duration-200 select-none"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.546 5.877L.057 23.428a.5.5 0 0 0 .515.572l5.737-1.505A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 0 1-5.032-1.385l-.36-.214-3.733.979 1.001-3.642-.235-.374A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 3-Day Free Trial
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Personal Setup Help in Nagpur
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 100% Offline Resilience
            </span>
          </div>
        </div>

        {/* 2. REAL SCREENSHOT / INTERFACE PLACEHOLDER */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl border-2 border-[#020C2B]/10 p-6 sm:p-10 shadow-lg relative overflow-hidden">
            <div className="bg-slate-50 border border-dashed border-slate-300 rounded-2xl p-8 sm:p-14 text-center space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#2563EB] flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                  Verified Interface Display
                </p>
                <h3 className="text-base sm:text-lg font-bold text-slate-800">
                  {industry.screenshotPlaceholderText}
                </h3>
                <p className="text-xs text-slate-500 max-w-lg mx-auto">
                  High-speed keyboard entry, instant product catalog lookup, and receipt preview
                  calibrated for {industry.shopTypeLabel.toLowerCase()} operations.
                </p>
              </div>
              <div className="pt-2">
                <Button
                  href={`/demo?shopType=${encodeURIComponent(industry.shopTypeLabel)}`}
                  variant="primary"
                  size="sm"
                >
                  Schedule Live Screen Demonstration &rarr;
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VERIFIED FEATURES FOR THIS INDUSTRY */}
      <section className="py-20 bg-white border-y border-[#020C2B]/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-bold">
              Built Specifically for Your Operations
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#020C2B] tracking-tight">
              Verified Capabilities for {industry.name}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Only authentic, operational software features designed to eliminate counter friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {industry.verifiedFeatures.map((feat) => {
              const IconComp = ICON_MAP[feat.icon] || CheckCircle2;
              return (
                <div
                  key={feat.title}
                  className="p-6 sm:p-8 rounded-2xl bg-[#F8F3EB]/60 border border-slate-200 hover:border-[#2563EB]/40 transition-colors space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-white text-[#2563EB] flex items-center justify-center shadow-xs border border-slate-200">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#020C2B]">{feat.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {feat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PROBLEM TO SOLUTION MATRIX */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-[#020C2B]">
            How WebRajya Solves Common Retail Bottlenecks
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industry.commonChallenges.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4"
            >
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase text-rose-600 font-bold">
                  The Frustration:
                </span>
                <p className="text-sm text-slate-700 font-medium">{item.problem}</p>
              </div>
              <div className="pt-2 border-t border-slate-100 space-y-1">
                <span className="text-[11px] font-mono uppercase text-emerald-700 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> The WebRajya Solution:
                </span>
                <p className="text-sm text-slate-600 leading-relaxed">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. LOCAL FAQ ACCORDION */}
      <section className="py-20 bg-white border-t border-[#020C2B]/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono uppercase text-[#2563EB] tracking-wider font-bold">
              Questions &amp; Onboarding
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#020C2B]">
              Frequently Asked by Nagpur Shop Owners
            </h2>
          </div>

          <div className="bg-[#F8F3EB]/50 rounded-3xl border border-slate-200 p-6 sm:p-8">
            <Accordion className="space-y-3">
              {industry.faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`ind-faq-${i}`}
                  className="bg-white rounded-2xl border border-slate-200 p-2 sm:p-3"
                >
                  <AccordionTrigger className="font-bold text-sm sm:text-base text-[#020C2B] px-3 hover:no-underline cursor-pointer">
                    <span className="flex items-center gap-2.5 text-left">
                      <HelpCircle className="w-5 h-5 text-[#E58145] shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-3 pt-2 text-slate-600 text-xs sm:text-sm leading-relaxed pl-10">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* 6. CONVERSION CTA */}
      <section className="py-20 bg-[#020C2B] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Upgrade Your {industry.shopTypeLabel} Today
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Book a 20-minute live demonstration. If you like it, get a 3-day free trial on your own
            counter with personal setup help from our Nagpur team.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={`/demo?shopType=${encodeURIComponent(industry.shopTypeLabel)}`}
              variant="cta"
              size="xl"
            >
              Book In-Shop Free Demo
            </Button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-base text-white bg-[#25D366] hover:bg-[#1ebe57] active:bg-[#17a84c] shadow-md shadow-[#25D366]/30 hover:shadow-lg hover:shadow-[#25D366]/40 transition-all duration-200 select-none"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.546 5.877L.057 23.428a.5.5 0 0 0 .515.572l5.737-1.505A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 0 1-5.032-1.385l-.36-.214-3.733.979 1.001-3.642-.235-.374A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
          <GstNote className="text-slate-400" />
        </div>
      </section>
    </div>
  );
}

