import React from "react";
import Metadata from "next";
import Link from "next/link";
import { 
  ChefHat, 
  Printer, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Monitor,
  Flame
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "KOT Billing Software & Kitchen Display System (KDS) | WebRajya",
  description: "WebRajya KOT Billing Software & Digital KDS routes kitchen order tickets to station printers or chef screens in real-time. Eliminates order mistakes and speeds up cooking times.",
  keywords: [
    "KOT Billing Software",
    "Kitchen Display System",
    "Digital KDS Software",
    "Kitchen Order Ticket System",
    "Thermal KOT Printer Software",
    "Restaurant KOT App"
  ],
  openGraph: {
    title: "KOT Billing Software & Kitchen Display System | WebRajya",
    description: "Route Kitchen Order Tickets (KOT) automatically to thermal printers or digital KDS screens.",
    url: "https://webrajya.com/features/kot-kitchen-display-system",
    siteName: "WebRajya",
    type: "website"
  }
};

export default function KotKitchenDisplayPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://webrajya.com" },
          { "@type": "ListItem", "position": 2, "name": "Features", "item": "https://webrajya.com/features" },
          { "@type": "ListItem", "position": 3, "name": "KOT Billing & Kitchen Display System", "item": "https://webrajya.com/features/kot-kitchen-display-system" }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "name": "WebRajya KOT & KDS Module",
        "operatingSystem": "Web, Windows, macOS, Android, iOS",
        "applicationCategory": "BusinessApplication",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "165"
        },
        "description": "Real-time kitchen order ticket routing and digital KDS software for commercial kitchens."
      }
    ]
  };

  return (
    <div className="w-full bg-[#F8F3EB] text-[#020C2B] min-h-screen pt-28 pb-20 relative overflow-hidden font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative pt-8 pb-16 md:pt-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E58145]/10 border border-[#E58145]/20 text-[#E58145] text-xs font-mono font-bold uppercase tracking-wider">
            <ChefHat className="w-3.5 h-3.5" /> Kitchen Order Automation
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-[#020C2B] tracking-tight leading-tight max-w-4xl mx-auto">
            <span className="text-[#E58145]">KOT Billing Software</span> &amp; Digital KDS
          </h1>

          <p className="text-base sm:text-xl text-[#525866] max-w-2xl mx-auto leading-relaxed">
            Eliminate verbal kitchen order chaos. Route KOT tickets instantly to station thermal printers or touchscreen Digital KDS monitors with preparation timers.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Button href="/demo" variant="cta" size="lg" className="w-full sm:w-auto" icon={<ArrowRight className="w-4 h-4" />}>
              Schedule KDS Demo
            </Button>
            <Button href="/pos" variant="secondary" size="lg" className="w-full sm:w-auto">
              View POS Overview
            </Button>
          </div>
        </div>
      </section>

      {/* Breakdown Grid */}
      <section className="py-16 bg-white border-y border-[#020C2B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-3xl bg-[#F8F3EB] border border-[#020C2B]/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E58145] text-white flex items-center justify-center font-bold">
                <Printer className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#020C2B]">Instant Thermal KOT Print</h3>
              <p className="text-xs sm:text-sm text-[#525866]">
                Prints item modifiers (e.g., &quot;Extra Spicy&quot;, &quot;No Onion&quot;) clearly on 58mm/80mm kitchen receipt printers.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#F8F3EB] border border-[#020C2B]/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#020C2B] text-white flex items-center justify-center font-bold">
                <Monitor className="w-5 h-5 text-[#E58145]" />
              </div>
              <h3 className="text-lg font-bold text-[#020C2B]">Touchscreen Digital KDS</h3>
              <p className="text-xs sm:text-sm text-[#525866]">
                Chefs mark dishes as &apos;Preparing&apos; or &apos;Ready&apos; on Android/iPad screens to notify table runners instantly.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#F8F3EB] border border-[#020C2B]/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E58145] text-white flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#020C2B]">Preparation Timer Color Alerts</h3>
              <p className="text-xs sm:text-sm text-[#525866]">
                Highlights delayed tickets in amber or red to maintain fast table service during peak dining rushes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
