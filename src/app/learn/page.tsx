import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PlayCircle, BookOpen, Video, FileText, ArrowRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Learn & Video Tutorials — WebRajya Invoice",
  description:
    "Free video guides and tutorials in Hindi & English on retail billing, barcode setup, GST invoice basics, and stock management.",
  keywords: [
    "WebRajya Tutorials",
    "Retail Billing Training Hindi",
    "GST Billing Basics",
    "Barcode Scanner Setup Guide",
    "Inventory Management Tutorials"
  ]
};

export default function LearnPage() {
  const TUTORIAL_VIDEOS = [
    {
      title: "How to Bill in Under 3 Seconds (Hindi / English)",
      duration: "4 mins",
      category: "Quick Start",
      description:
        "Learn standard counter hotkeys, item code search, barcode beeping, and quick cash/UPI settlement.",
      videoPlaceholder:
        "[EMBEDDED YOUTUBE VIDEO: Fast Counter Checkout & Keyboard Hotkeys Workflow Tutorial]"
    },
    {
      title: "Setting Up Your Barcode Scanner & Thermal Printer",
      duration: "6 mins",
      category: "Hardware Setup",
      description:
        "Step-by-step connection guide for standard 58mm/80mm USB and Bluetooth thermal printers.",
      videoPlaceholder:
        "[EMBEDDED YOUTUBE VIDEO: USB/Bluetooth Thermal Printer & Scanner Hardware Alignment Guide]"
    },
    {
      title: "Managing Customer Khata & Udhaar Reminders",
      duration: "5 mins",
      category: "Khata Management",
      description:
        "Record partial payments, track outstanding customer balances, and export customer ledgers.",
      videoPlaceholder:
        "[EMBEDDED YOUTUBE VIDEO: Customer Ledger Profiles & Credit Settlement Tutorial]"
    }
  ];

  const ARTICLES = [
    {
      title: "5 Common Retail Billing Mistakes and How to Avoid Them",
      category: "Retail Operations",
      description:
        "Why manual bahi-khata errors, forgotten stock adjustments, and unrecorded cash entries cost retailers money.",
      readTime: "4 min read"
    },
    {
      title: "GST Basics for Small Retailers: CGST, SGST & Non-GST Billing",
      category: "Tax Compliance",
      description:
        "A plain-language guide on when to charge GST, HSN code rules, and generating compliant invoices.",
      readTime: "5 min read"
    },
    {
      title: "Stock Management 101: Never Run Out of Bestsellers",
      category: "Inventory",
      description:
        "Setting re-order threshold alerts and managing size/color variants without inventory headache.",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="w-full bg-[#F8F3EB] text-[#020C2B] min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            Learn WebRajya Invoice
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Free video tutorials and step-by-step operational guides in Hindi and English. Learn in
            minutes, start billing immediately.
          </p>
        </div>

        {/* Video Tutorials Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-[#020C2B] flex items-center gap-2">
              <Video className="w-5 h-5 text-[#2563EB]" />
              Video Guides (Hindi &amp; English)
            </h2>
            <span className="text-xs font-mono text-slate-500">3 Core Tutorials</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TUTORIAL_VIDEOS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between"
              >
                {/* Video Placeholder Container */}
                <div className="aspect-video bg-slate-900 text-white p-6 flex flex-col items-center justify-center text-center relative group">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mb-2 group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-[11px] font-mono text-slate-300 max-w-xs">
                    {item.videoPlaceholder}
                  </p>
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/70 text-[10px] font-mono text-slate-300">
                    {item.duration}
                  </span>
                </div>

                <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono uppercase text-[#2563EB] font-bold">
                      {item.category}
                    </span>
                    <h3 className="text-base font-bold text-[#020C2B]">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-4">
                    <Button href="/demo" variant="outline" size="xs" className="w-full">
                      Watch Video &amp; Test Live
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Written Guides / Articles Section */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-[#020C2B] flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#2563EB]" />
              Retail Guides &amp; Best Practices
            </h2>
            <span className="text-xs font-mono text-slate-500">Retail Insights</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ARTICLES.map((art, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase text-[#E58145] font-bold">
                    {art.category} • {art.readTime}
                  </span>
                  <h3 className="text-base font-bold text-[#020C2B]">{art.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {art.description}
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    href="/demo"
                    className="text-xs font-bold text-[#2563EB] hover:text-[#020C2B] flex items-center gap-1"
                  >
                    <span>Read Full Guide in Demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Callout */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 text-center space-y-4">
          <HelpCircle className="w-8 h-8 text-[#E58145] mx-auto" />
          <h3 className="text-xl sm:text-2xl font-black text-[#020C2B]">
            Need Personal Guidance for Your Shop?
          </h3>
          <p className="text-slate-600 text-sm max-w-lg mx-auto">
            Our onboarding team offers personal setup via video call across India, with in-shop visits available in Nagpur.
          </p>
          <div className="pt-2">
            <Button href="/demo" variant="cta" size="lg">
              Book Free Demo &amp; Setup &rarr;
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

