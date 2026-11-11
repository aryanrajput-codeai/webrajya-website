import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Package,
  Users,
  CheckCircle2,
  Boxes,
  TrendingUp,
  WifiOff,
  Printer,
  Barcode,
  Keyboard,
  ShieldCheck,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GstNote } from "@/components/ui/GstNote";

export const metadata: Metadata = {
  title: "Verified Features — WebRajya Invoice",
  description:
    "Explore the verified capabilities of WebRajya Invoice: sub-second barcode billing, offline-first counter operations, smart inventory alerts, customer Khata, and GST invoicing.",
  keywords: [
    "WebRajya Invoice Features",
    "Barcode Billing Software",
    "Offline Retail POS Software",
    "Customer Khata Software India",
    "GST Retail Invoicing",
    "Inventory Management Software Nagpur"
  ],
  openGraph: {
    title: "Verified Features — WebRajya Invoice",
    description: "Explore authentic, operational software features designed for Indian retail counters.",
    url: "https://webrajya.com/features",
    siteName: "WebRajya",
    locale: "en_IN",
    type: "website"
  }
};

export default function FeaturesPage() {
  const CORE_MODULES = [
    {
      id: "billing",
      title: "Fast Counter Billing & Invoicing",
      description:
        "Engineered for rush hours. Scan barcodes, enter keyboard shortcuts, calculate item discounts, and generate bills in less than a second.",
      icon: FileText,
      badge: "Core Workflow",
      capabilities: [
        "100% keyboard-friendly hotkeys for rapid cashier navigation",
        "Barcode scanner integration with auto-item detection",
        "Support for 3-inch (80mm) and 2-inch (58mm) thermal receipts",
        "Professional A4 GST invoices with custom business headers"
      ],
      placeholderNote:
        "[INTERFACE PREVIEW: Fast Counter Billing Screen with Item Matrix & Instant Total Settlement]"
    },
    {
      id: "inventory",
      title: "Smart Inventory & Stock Control",
      description:
        "Real-time stock deduction upon billing. Manage purchase costs, selling prices, and receive alerts before bestsellers run out.",
      icon: Package,
      badge: "Stock Management",
      capabilities: [
        "Automatic stock deductions as bills are printed",
        "Low-inventory threshold warnings to prevent stockouts",
        "Size, colour, and model variant organization",
        "Excel and CSV bulk catalog import and export"
      ],
      placeholderNote:
        "[INTERFACE PREVIEW: Live Inventory Catalog with Low-Stock Filter & Batch Modifiers]"
    },
    {
      id: "khata",
      title: "Customer Khata & Udhaar Ledgers",
      description:
        "Eliminate lost paper records. Track customer credit sales, partial payments, and outstanding balances with clear statements.",
      icon: Users,
      badge: "Customer Relations",
      capabilities: [
        "Customer ledger profiles with complete transaction logs",
        "Credit limit settings and outstanding balance alerts",
        "Split payment settlement (Cash + UPI + Khata)",
        "Instant printout of customer statement summaries"
      ],
      placeholderNote:
        "[INTERFACE PREVIEW: Customer Khata Ledger with Running Balance and Payment Entries]"
    },
    {
      id: "offline",
      title: "100% Offline-First Architecture",
      description:
        "Your billing never halts when the internet goes down. All transactions and print commands run entirely on your local PC.",
      icon: WifiOff,
      badge: "Local Resilience",
      capabilities: [
        "Local database storage ensures uninterrupted billing during outages",
        "No continuous internet required for regular counter operations",
        "Zero latency or loading spinners during peak evening sales",
        "Automated local database backups on your own hard drive"
      ],
      placeholderNote:
        "[INTERFACE PREVIEW: Offline Operational Mode Status Indicator & Local Database Sync Utility]"
    },
    {
      id: "tax",
      title: "Configurable GST & Non-GST Formats",
      description:
        "Generate compliant tax invoices with CGST, SGST, and IGST breakdowns, or switch to clean non-GST bill layouts.",
      icon: CheckCircle2,
      badge: "Tax Ready",
      capabilities: [
        "Customizable GST tax slabs (0%, 5%, 12%, 18%, 28%)",
        "HSN code lookup and classification per product item",
        "B2B invoices with customer GSTIN and billing addresses",
        "Quick non-GST cash memos for exempt retail establishments"
      ],
      placeholderNote:
        "[INTERFACE PREVIEW: GST Breakdown Table with HSN Codes and Non-GST Switch]"
    },
    {
      id: "reports",
      title: "Daily Sales, Cash & Profit Reports",
      description:
        "Know your exact daily cash drawer total, top-performing products, customer collections, and gross profit margins.",
      icon: TrendingUp,
      badge: "Business Intelligence",
      capabilities: [
        "End-of-day closing cash reconciliation report",
        "Product-level sales velocity and volume tracking",
        "Tax liability summaries ready for monthly CA return filing",
        "One-click Excel export of all sales and purchase data"
      ],
      placeholderNote:
        "[INTERFACE PREVIEW: Daily Business Performance Dashboard with Revenue Breakdown and Margin Analysis]"
    }
  ];

  return (
    <div className="w-full bg-[#F8F3EB] text-[#020C2B] min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#020C2B] tracking-tight">
            Complete Feature Guide
          </h1>
          <p className="text-slate-700 text-base sm:text-xl leading-relaxed">
            Every feature listed here is real, tested, and operational in WebRajya Invoice. Built
            to keep your retail counter fast, compliant, and in control.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/demo" variant="cta" size="xl">
              Book In-Shop Free Demo
            </Button>
            <Button href="/pricing" variant="outline" size="xl">
              View Transparent Pricing
            </Button>
          </div>
        </div>

        {/* Feature Modules */}
        <div className="space-y-16">
          {CORE_MODULES.map((module, index) => {
            const Icon = module.icon;
            const isReversed = index % 2 === 1;

            return (
              <div
                key={module.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center bg-white p-6 sm:p-12 rounded-3xl border border-slate-200 shadow-sm ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Left Text Col */}
                <div className={`space-y-6 lg:col-span-7 ${isReversed ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-2">
                    <span className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center border border-blue-100">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-500 uppercase">{module.badge}</span>
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-black text-[#020C2B]">
                      {module.title}
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {module.description}
                    </p>
                  </div>

                  <ul className="space-y-2.5 pt-2">
                    {module.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Mockup Preview Col */}
                <div className={`lg:col-span-5 ${isReversed ? "lg:order-1" : ""}`}>
                  <div className="bg-[#F8F3EB] rounded-2xl p-6 sm:p-8 border border-slate-200 text-center space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-white text-[#2563EB] flex items-center justify-center mx-auto shadow-xs border border-slate-200">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono uppercase text-slate-500 font-bold tracking-wider">
                        Live Module Verification
                      </span>
                      <p className="text-xs font-bold text-slate-800 leading-snug">
                        {module.placeholderNote}
                      </p>
                    </div>
                    <Button href="/demo" variant="outline" size="xs" className="w-full">
                      See This in Live Demo &rarr;
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-4 bg-[#020C2B] text-white p-10 sm:p-14 rounded-3xl">
          <h3 className="text-2xl sm:text-4xl font-black text-white">
            Ready to Test WebRajya on Your Counter?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Book a 20-minute demo. We will show you all verified features live and set up your 3-day
            free trial.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/demo" variant="cta" size="xl">
              Book Free In-Shop Demo
            </Button>
            <Button href="/pricing" variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
              Check Transparent Plans
            </Button>
          </div>
          <GstNote className="text-slate-400" />
        </div>
      </div>
    </div>
  );
}

