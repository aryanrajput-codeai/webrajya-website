import React from "react";
import Metadata from "next";
import Link from "next/link";
import { 
  Utensils, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Printer, 
  Layers, 
  Clock, 
  ChefHat, 
  ArrowRight,
  Sparkles,
  BarChart3,
  Monitor
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Restaurant POS System & Restaurant Management Software | WebRajya",
  description: "WebRajya is India's zero-lag restaurant POS system and restaurant management software. Settle dining tables, dispatch KOTs to kitchen, print thermal bills, and track inventory offline.",
  keywords: [
    "Restaurant POS System",
    "Restaurant Management System",
    "Restaurant POS Software India",
    "Best POS for Restaurants",
    "KOT Billing Software",
    "Offline Restaurant Billing App",
    "Thermal Receipt POS Software"
  ],
  openGraph: {
    title: "Restaurant POS System & Management Software | WebRajya",
    description: "Zero-lag POS system for restaurants, cafes, QSRs & cloud kitchens with offline KOT printing.",
    url: "https://webrajya.com/solutions/restaurant-pos-system",
    siteName: "WebRajya",
    type: "website"
  }
};

export default function RestaurantPosSystemPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://webrajya.com" },
          { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://webrajya.com/solutions" },
          { "@type": "ListItem", "position": 3, "name": "Restaurant POS System", "item": "https://webrajya.com/solutions/restaurant-pos-system" }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "name": "WebRajya Restaurant POS & Management System",
        "operatingSystem": "Web, Windows, macOS, Android, iOS",
        "applicationCategory": "BusinessApplication",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "184"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR"
        },
        "description": "Comprehensive restaurant POS system and management software for table service, KOT printing, and recipe costing."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a Restaurant POS System?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A Restaurant POS (Point of Sale) system is hardware and software used to punch customer orders, manage dining tables, dispatch Kitchen Order Tickets (KOT), print thermal receipts, and accept payments."
            }
          },
          {
            "@type": "Question",
            "name": "How does WebRajya POS handle internet outages?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "WebRajya POS is built with local browser storage fallback. Orders and thermal KOT prints continue working seamlessly offline, and automatically synchronize with cloud servers once connection is restored."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="w-full bg-[#F8F3EB] text-[#020C2B] min-h-screen pt-28 pb-20 relative overflow-hidden font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-8 pb-16 md:pt-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E58145]/10 border border-[#E58145]/20 text-[#E58145] text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> India&apos;s #1 Zero-Lag Restaurant POS
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-[#020C2B] tracking-tight leading-tight max-w-4xl mx-auto">
            Complete <span className="text-[#E58145]">Restaurant POS System</span> &amp; Management Software
          </h1>

          <p className="text-base sm:text-xl text-[#525866] max-w-2xl mx-auto leading-relaxed">
            Eliminate billing queues, dispatch multi-station KOTs in under 2 seconds, and run 100% offline without crashing during peak weekend rushes.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Button href="/demo" variant="cta" size="lg" className="w-full sm:w-auto" icon={<ArrowRight className="w-4 h-4" />}>
              Book Free POS Demo
            </Button>
            <Button href="/pos" variant="secondary" size="lg" className="w-full sm:w-auto">
              View POS Features
            </Button>
          </div>

          {/* Quick Stats Banner */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto font-mono text-xs">
            <div className="p-4 rounded-2xl bg-white border border-[#020C2B]/10 shadow-xs">
              <span className="block text-xl font-bold text-[#E58145]">&lt; 2 Sec</span>
              <span className="text-[#525866]">KOT Dispatch Speed</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#020C2B]/10 shadow-xs">
              <span className="block text-xl font-bold text-[#020C2B]">100%</span>
              <span className="text-[#525866]">Offline Operation</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#020C2B]/10 shadow-xs">
              <span className="block text-xl font-bold text-[#E58145]">0%</span>
              <span className="text-[#525866]">Commission Fees</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#020C2B]/10 shadow-xs">
              <span className="block text-xl font-bold text-[#020C2B]">ESC/POS</span>
              <span className="text-[#525866]">Printer Compatibility</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Breakdown */}
      <section className="py-16 bg-white border-y border-[#020C2B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-[#020C2B]">
              Why Leading Restaurants Trust WebRajya POS System
            </h2>
            <p className="text-sm sm:text-base text-[#525866]">
              Designed specifically for high-tempo food operations with zero compromise on speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-3xl bg-[#F8F3EB] border border-[#020C2B]/10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E58145] text-white flex items-center justify-center font-bold shadow-sm">
                <ChefHat className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#020C2B]">Multi-Station KOT Routing</h3>
              <p className="text-xs sm:text-sm text-[#525866] leading-relaxed">
                Automatically split orders: Drinks route to the Bar printer, tandoori items to the oven, and starters to the main chef station without manual intervention.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#F8F3EB] border border-[#020C2B]/10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#020C2B] text-white flex items-center justify-center font-bold shadow-sm">
                <ShieldCheck className="w-6 h-6 text-[#E58145]" />
              </div>
              <h3 className="text-xl font-bold text-[#020C2B]">Offline Local Resilience</h3>
              <p className="text-xs sm:text-sm text-[#525866] leading-relaxed">
                Internet down? Billing never stops. WebRajya POS saves transaction logs locally and auto-synchronizes with cloud servers the moment connectivity returns.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#F8F3EB] border border-[#020C2B]/10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E58145] text-white flex items-center justify-center font-bold shadow-sm">
                <Printer className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#020C2B]">Thermal &amp; Bluetooth Printing</h3>
              <p className="text-xs sm:text-sm text-[#525866] leading-relaxed">
                Supports all standard 58mm and 80mm ESC/POS printers via USB, Bluetooth, LAN Wi-Fi, and handheld POS machines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO FAQ Section */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#020C2B]">
            Frequently Asked Questions About Restaurant POS Software
          </h2>
          <p className="text-xs sm:text-sm text-[#525866]">Everything you need to know about choosing the right POS system for your food outlet.</p>
        </div>

        <div className="space-y-4 font-sans">
          <div className="p-5 rounded-2xl bg-white border border-[#020C2B]/10 shadow-xs space-y-2">
            <h3 className="font-bold text-[#020C2B] text-base">What is a Restaurant POS System?</h3>
            <p className="text-xs sm:text-sm text-[#525866] leading-relaxed">
              A Restaurant POS (Point of Sale) system is a combination of software and hardware that manages order punching, table management, Kitchen Order Ticket (KOT) printing, inventory consumption, and payment settlement.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#020C2B]/10 shadow-xs space-y-2">
            <h3 className="font-bold text-[#020C2B] text-base">Can WebRajya POS run on existing computers or Android tablets?</h3>
            <p className="text-xs sm:text-sm text-[#525866] leading-relaxed">
              Yes, WebRajya POS is 100% cross-platform. It runs in any web browser on Windows PCs, Mac, iPads, Android tablets, and handheld POS machines.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#020C2B]/10 shadow-xs space-y-2">
            <h3 className="font-bold text-[#020C2B] text-base">Is WebRajya POS GST-compliant?</h3>
            <p className="text-xs sm:text-sm text-[#525866] leading-relaxed">
              Yes, WebRajya generates 100% GST-compliant receipts with customizable tax rates (CGST, SGST, IGST), SAC/HSN codes, and instant WhatsApp PDF bill sharing.
            </p>
          </div>
        </div>

        {/* CTA Box */}
        <div className="p-8 rounded-3xl bg-[#020C2B] text-white text-center space-y-4 shadow-xl">
          <h3 className="text-2xl font-bold">Ready to Upgrade Your Restaurant Operations?</h3>
          <p className="text-xs sm:text-sm text-[#F8F3EB]/80 max-w-lg mx-auto">
            Book a personalized 1-on-1 demo with our restaurant technology experts.
          </p>
          <Button href="/demo" variant="cta" size="lg" className="inline-flex">
            Get Started with WebRajya POS
          </Button>
        </div>
      </section>
    </div>
  );
}
