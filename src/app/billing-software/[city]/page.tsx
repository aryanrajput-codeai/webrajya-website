import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Zap,
  WifiOff,
  Video,
  Store,
  HelpCircle,
  Sparkles,
  Layers,
  ArrowRight,
  Loader2
} from "lucide-react";
import { CITIES_DATA, CityData } from "@/data/cities";
import { COMPANY_CONFIG } from "@/config/company";
import { Button } from "@/components/ui/button";
import { GstNote } from "@/components/ui/GstNote";
import { NagpurRetailDemoForm } from "@/components/demo/NagpurRetailDemoForm";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";

interface CityPageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(CITIES_DATA).map((city) => ({
    city
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city } = await params;
  const cityData = CITIES_DATA[city.toLowerCase()];

  if (!cityData) {
    return {
      title: "City Not Found | WebRajya"
    };
  }

  return {
    title: cityData.metaTitle,
    description: cityData.metaDescription,
    keywords: [
      `Billing software ${cityData.cityName}`,
      `Retail POS software ${cityData.cityName}`,
      `GST billing software ${cityData.stateName}`,
      `Barcode inventory system ${cityData.cityName}`,
      "WebRajya"
    ],
    alternates: {
      canonical: `https://webrajya.com/billing-software/${cityData.slug}`
    },
    openGraph: {
      title: cityData.metaTitle,
      description: cityData.metaDescription,
      url: `https://webrajya.com/billing-software/${cityData.slug}`,
      siteName: "WebRajya",
      locale: "en_IN",
      type: "website"
    }
  };
}

export default async function CityLandingPage({ params }: CityPageProps) {
  const { city } = await params;
  const cityData: CityData | undefined = CITIES_DATA[city.toLowerCase()];

  if (!cityData) {
    notFound();
  }

  const isNagpur = cityData.slug === "nagpur";
  const whatsappText = encodeURIComponent(
    `Hi WebRajya, I run a retail store in ${cityData.cityName}, ${cityData.stateName}. I would like to schedule a free demo of your billing software.`
  );
  const whatsappUrl = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${whatsappText}`;

  return (
    <div className="w-full bg-[#F8F3EB] text-[#020C2B] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Breadcrumb / Location Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/70 text-amber-900 border border-amber-200/60 text-xs font-semibold">
            <MapPin className="w-3.5 h-3.5 text-[#E58145]" />
            <span>{cityData.cityName}, {cityData.stateName}</span>
            <span className="text-amber-400">•</span>
            <span className="text-amber-800 font-normal">{cityData.region}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#020C2B] tracking-tight leading-tight">
            {cityData.headline}
          </h1>

          <p className="text-slate-700 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
            {cityData.subheadline}
          </p>

          {/* Honest Onboarding Mode Callout */}
          <div className="max-w-2xl mx-auto p-4 rounded-2xl bg-white border border-slate-200 shadow-xs text-left flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
              {isNagpur ? <Store className="w-5 h-5" /> : <Video className="w-5 h-5" />}
            </div>
            <div className="space-y-0.5">
              <p className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500">
                {isNagpur ? "Head Office & On-Site Visits" : "All-India Remote Onboarding"}
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-snug">
                {cityData.onboardingSummary}
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#demo-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-base text-white bg-[#E58145] hover:bg-[#d67234] shadow-md shadow-[#E58145]/20 hover:shadow-lg transition-all"
            >
              Book Free Demo for {cityData.cityName} &rarr;
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-base text-white bg-[#25D366] hover:bg-[#1ebe57] shadow-md shadow-[#25D366]/30 transition-all select-none"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.546 5.877L.057 23.428a.5.5 0 0 0 .515.572l5.737-1.505A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 0 1-5.032-1.385l-.36-.214-3.733.979 1.001-3.642-.235-.374A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 3-Day Free Counter Trial
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Works 100% Offline
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Setup Help in {cityData.languages.slice(0, 2).join(" & ")}
            </span>
          </div>
        </div>
      </section>

      {/* 2. LOCAL MARKET CONTEXT & HUBS */}
      <section className="py-16 bg-white border-y border-[#020C2B]/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-bold">
              Tailored for {cityData.cityName} Commerce
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#020C2B] tracking-tight">
              Serving Retail Markets Across {cityData.cityName}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              {cityData.localMarketContext}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Commercial Hubs */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F8F3EB]/60 border border-slate-200 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-white text-[#E58145] flex items-center justify-center border border-slate-200">
                  <Store className="w-4 h-4" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#020C2B]">
                  Major Retail Hubs in {cityData.cityName}
                </h3>
              </div>
              <p className="text-xs text-slate-600">
                Optimized for busy counter operations and quick walk-ins across:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {cityData.commercialHubs.map((hub) => (
                  <span
                    key={hub}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-2xs"
                  >
                    {hub}
                  </span>
                ))}
              </div>
            </div>

            {/* Popular Retail Segments & Hardware */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F8F3EB]/60 border border-slate-200 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-white text-[#2563EB] flex items-center justify-center border border-slate-200">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#020C2B]">
                  Key Segments &amp; Hardware Compatibility
                </h3>
              </div>
              <div className="space-y-3 text-xs text-slate-700">
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Key Shop Categories:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cityData.keyIndustries.map((ind) => (
                      <span key={ind} className="px-2.5 py-0.5 rounded bg-blue-50 text-blue-800 text-[11px] font-medium">
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-200/80">
                  <p className="font-semibold text-slate-900 mb-1">Hardware Setup:</p>
                  <p className="text-slate-600 leading-relaxed">
                    {cityData.popularHardware}. Compatible with all standard Windows &amp; Mac PCs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE BENEFITS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-[#E58145] font-bold">
            Built for Counter Speed
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#020C2B] tracking-tight">
            Why Indian Retailers Choose WebRajya
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Simple, reliable, and free from mandatory cloud slowdowns during peak evening hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#E58145] flex items-center justify-center">
              <WifiOff className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#020C2B]">100% Offline Capability</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Bills print instantly even when broadband or mobile data drops. Data syncs safely when connectivity returns.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#020C2B]">Rapid Keyboard &amp; Barcode Checkout</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Cashiers finish transactions in under 5 seconds with zero mouse clicks. Instant 2-inch and 3-inch thermal printing.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#020C2B]">One-Time Lifetime License</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Avoid never-ending monthly renewal charges. Choose complete software ownership for long-term operational certainty.
            </p>
          </div>
        </div>
      </section>

      {/* 4. EMBEDDED DEMO FORM */}
      <section id="demo-form" className="py-20 bg-white border-t border-[#020C2B]/10 px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-bold">
              Personal Setup &amp; Walkthrough
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#020C2B] tracking-tight">
              Request Your Free Demo in {cityData.cityName}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              {isNagpur
                ? "Choose an on-site visit to your shop in Nagpur or an interactive video screen demo at your convenience."
                : `Connect directly with our onboarding team via video call or WhatsApp for complete setup guidance in ${cityData.cityName}.`}
            </p>
          </div>

          {/* Form wrapper */}
          <div className="bg-[#F8F3EB]/50 rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs">
            <Suspense
              fallback={
                <div className="p-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-xs font-mono text-slate-500 gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-[#2563EB]" />
                  <span>Loading Demo Form for {cityData.cityName}...</span>
                </div>
              }
            >
              <NagpurRetailDemoForm
                initialCity={cityData.cityName}
                initialState={cityData.stateName}
              />
            </Suspense>
          </div>
        </div>
      </section>

      {/* 5. LOCAL FAQ SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase text-[#2563EB] tracking-wider font-bold">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#020C2B]">
            Frequently Asked by Retailers in {cityData.cityName}
          </h2>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <Accordion className="space-y-3">
            <AccordionItem value="faq-1" className="bg-[#F8F3EB]/50 rounded-2xl border border-slate-200 p-2 sm:p-3">
              <AccordionTrigger className="font-bold text-sm sm:text-base text-[#020C2B] px-3 hover:no-underline">
                <span className="flex items-center gap-2.5 text-left">
                  <HelpCircle className="w-5 h-5 text-[#E58145] shrink-0" />
                  <span>How does setup and onboarding work in {cityData.cityName}?</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-3 pt-2 text-slate-600 text-xs sm:text-sm leading-relaxed pl-10">
                {isNagpur
                  ? "Because our head office is located in Nagpur, our team can visit your shop directly anywhere in Sitabuldi, Itwari, Dharampeth, Sadar, or other localities. We install the software, connect your barcode scanner and thermal printer, and train your staff on your counter."
                  : `In ${cityData.cityName}, our dedicated onboarding team connects with you over Google Meet, Zoom, or WhatsApp video call. We assist in installing the software on your PC, configure your thermal printer, and help import your existing product inventory list from Excel.`}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2" className="bg-[#F8F3EB]/50 rounded-2xl border border-slate-200 p-2 sm:p-3">
              <AccordionTrigger className="font-bold text-sm sm:text-base text-[#020C2B] px-3 hover:no-underline">
                <span className="flex items-center gap-2.5 text-left">
                  <HelpCircle className="w-5 h-5 text-[#E58145] shrink-0" />
                  <span>Does WebRajya require an active internet connection to bill?</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-3 pt-2 text-slate-600 text-xs sm:text-sm leading-relaxed pl-10">
                No. WebRajya is engineered offline-first. Your counter operates without interruption during broadband or power outages, allowing high-speed checkout and receipt printing without reliance on cloud latency.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3" className="bg-[#F8F3EB]/50 rounded-2xl border border-slate-200 p-2 sm:p-3">
              <AccordionTrigger className="font-bold text-sm sm:text-base text-[#020C2B] px-3 hover:no-underline">
                <span className="flex items-center gap-2.5 text-left">
                  <HelpCircle className="w-5 h-5 text-[#E58145] shrink-0" />
                  <span>Can I test the software before purchasing?</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-3 pt-2 text-slate-600 text-xs sm:text-sm leading-relaxed pl-10">
                Yes. After your live demonstration, you receive an unrestricted 3-day trial on your own counter so your team can verify barcode scanning, bill printing, and daily khata before making any payment.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 6. CONVERSION FOOTER BANNER */}
      <section className="py-16 bg-[#020C2B] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Ready to Streamline Your Store in {cityData.cityName}?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Join forward-thinking Indian retailers upgrading to fast, offline-first billing software.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#demo-form"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-base text-white bg-[#E58145] hover:bg-[#d67234] shadow-md transition-all"
            >
              Book Your Free Demo
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-base text-white bg-[#25D366] hover:bg-[#1ebe57] transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
          <GstNote className="text-slate-400" />
        </div>
      </section>
    </div>
  );
}
