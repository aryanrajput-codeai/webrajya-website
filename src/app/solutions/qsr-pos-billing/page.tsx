import React from "react";
import Metadata from "next";
import Link from "next/link";
import { 
  Zap, 
  CheckCircle2, 
  Printer, 
  Sparkles, 
  ArrowRight,
  ShoppingBag,
  CreditCard,
  QrCode
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "QSR & Fast Food Billing Software | High-Speed Counter POS | WebRajya",
  description: "WebRajya QSR & Fast Food Billing Software is designed for high-volume quick service outlets, bakeries, and food counters. Punch bills & collect UPI payments in under 2 seconds.",
  keywords: [
    "QSR Billing Software",
    "Fast Food POS System",
    "Counter Billing Software",
    "Bakery Billing Software",
    "Quick Service Restaurant POS",
    "Fast Food POS Machine Software"
  ],
  openGraph: {
    title: "QSR & Fast Food Billing Software | WebRajya",
    description: "High-speed counter POS billing software for quick service outlets, fast food joints & bakeries.",
    url: "https://webrajya.com/solutions/qsr-pos-billing",
    siteName: "WebRajya",
    type: "website"
  }
};

export default function QsrPosBillingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://webrajya.com" },
          { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://webrajya.com/solutions" },
          { "@type": "ListItem", "position": 3, "name": "QSR & Fast Food Billing Software", "item": "https://webrajya.com/solutions/qsr-pos-billing" }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "name": "WebRajya QSR Billing Software",
        "operatingSystem": "Web, Windows, macOS, Android, iOS",
        "applicationCategory": "BusinessApplication",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "142"
        },
        "description": "High-speed counter billing software for QSRs, fast food chains, and bakeries."
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
            <Zap className="w-3.5 h-3.5" /> High-Speed Counter Billing
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-[#020C2B] tracking-tight leading-tight max-w-4xl mx-auto">
            <span className="text-[#E58145]">QSR &amp; Fast Food</span> Billing Software
          </h1>

          <p className="text-base sm:text-xl text-[#525866] max-w-2xl mx-auto leading-relaxed">
            Eliminate counter rush lines with 2-click order entry, instant UPI QR code display, and high-speed thermal receipt printing.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Button href="/demo" variant="cta" size="lg" className="w-full sm:w-auto" icon={<ArrowRight className="w-4 h-4" />}>
              Try QSR Demo
            </Button>
            <Button href="/pos" variant="secondary" size="lg" className="w-full sm:w-auto">
              Explore Features
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="py-16 bg-white border-y border-[#020C2B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-3xl bg-[#F8F3EB] border border-[#020C2B]/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E58145] text-white flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#020C2B]">2-Click Checkout</h3>
              <p className="text-xs sm:text-sm text-[#525866]">
                Designed for high-speed touchscreens and barcode scanners to keep counter queues moving fast.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#F8F3EB] border border-[#020C2B]/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#020C2B] text-white flex items-center justify-center font-bold">
                <QrCode className="w-5 h-5 text-[#E58145]" />
              </div>
              <h3 className="text-lg font-bold text-[#020C2B]">Instant Dynamic UPI QR</h3>
              <p className="text-xs sm:text-sm text-[#525866]">
                Displays exact bill amount QR code on customer screen for instant scan-and-pay settlement.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#F8F3EB] border border-[#020C2B]/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E58145] text-white flex items-center justify-center font-bold">
                <Printer className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#020C2B]">Auto Token &amp; Receipt</h3>
              <p className="text-xs sm:text-sm text-[#525866]">
                Prints customer receipt and token number simultaneously on thermal receipt printers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
