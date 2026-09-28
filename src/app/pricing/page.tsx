"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Utensils, FileText, CheckCircle2, ArrowRight, Sparkles, HelpCircle, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SITE_CONFIG } from "@/data/config";

// Clearly marked placeholder pricing configurations for future business insertion
const PRICING_DATA = {
  pos: {
    productName: "WebRajya POS",
    tagline: "For restaurants, cafes, QSRs, cloud kitchens and food outlets.",
    badgeVariant: "pos" as const,
    plans: [
      {
        name: "Starter Outlet",
        badge: "Single Counter",
        pricePlaceholder: "[Insert Monthly POS Rate]",
        period: "/ outlet / month",
        description: "Essential POS billing and KOT routing for small cafes and quick-service counters.",
        features: [
          "1 Active POS Counter",
          "Menu & Category Management",
          "KOT Thermal Printing",
          "Basic Daily Sales Reports",
          "Offline Billing Resilience",
          "Email & Chat Support"
        ],
        ctaText: "Choose Starter POS",
        ctaHref: "/demo?product=pos&plan=starter",
        isPopular: false
      },
      {
        name: "Pro Restaurant",
        badge: "Most Popular",
        pricePlaceholder: "[Insert Pro POS Rate]",
        period: "/ outlet / month",
        description: "Full table management, KDS displays, and ingredient inventory for busy restaurants.",
        features: [
          "Multi-Register & Waiter Tablet Support",
          "Interactive Visual Floor & Table Maps",
          "Digital Kitchen Display System (KDS)",
          "Recipe Costing & Ingredient Inventory",
          "Contactless QR Table Ordering",
          "Multi-Payment Modes & Split Check",
          "Real-time Owner Mobile Pulse",
          "Priority Technical Onboarding"
        ],
        ctaText: "Get Pro POS",
        ctaHref: "/demo?product=pos&plan=pro",
        isPopular: true
      },
      {
        name: "Multi-Outlet Enterprise",
        badge: "Custom Scale",
        pricePlaceholder: "Custom Enterprise Quote",
        period: "contact sales",
        description: "Centralized multi-branch control, custom hardware integration, and dedicated SLA.",
        features: [
          "Multi-Branch Central Management",
          "Shared Master Menu & Central Purchasing",
          "Custom Hardware & Printer Integration",
          "Custom ERP / Accounting Export Sync",
          "Dedicated Account Manager",
          "24/7 Priority Phone Support"
        ],
        ctaText: "Contact Enterprise Sales",
        ctaHref: "/contact?product=pos&type=enterprise",
        isPopular: false
      }
    ]
  },
  invoice: {
    productName: "WebRajya Invoice",
    tagline: "For agencies, distributors, service businesses, and freelancers.",
    badgeVariant: "invoice" as const,
    plans: [
      {
        name: "Solo Billing",
        badge: "Freelance",
        pricePlaceholder: "[Insert Solo Rate]",
        period: "/ user / month",
        description: "Fast professional invoicing and client tracking for independent professionals.",
        features: [
          "Up to 50 Invoices / Month",
          "Product & Service Catalog",
          "Customer Directory",
          "PDF & Print Export",
          "Basic Payment Status Tracking",
          "Standard Email Support"
        ],
        ctaText: "Start Solo Invoicing",
        ctaHref: "/demo?product=invoice&plan=solo",
        isPopular: false
      },
      {
        name: "Business Pro",
        badge: "Recommended",
        pricePlaceholder: "[Insert Pro Invoice Rate]",
        period: "/ business / month",
        description: "High-volume invoices, aging receivables, brand logo customization, and reports.",
        features: [
          "High-Volume Invoices & Quotes",
          "Full Brand Logo & Custom Terms Setup",
          "Aging Receivables Dashboard",
          "WhatsApp & Direct Link Share",
          "Customer Payment Ledgers",
          "Tax & Revenue Reports Export",
          "Multi-Currency Presets",
          "Priority Chat Support"
        ],
        ctaText: "Start Business Pro",
        ctaHref: "/demo?product=invoice&plan=pro",
        isPopular: true
      },
      {
        name: "Enterprise Custom",
        badge: "High Volume",
        pricePlaceholder: "Custom License Quote",
        period: "contact sales",
        description: "High-volume automated billing, API integrations, and tailored compliance.",
        features: [
          "High-Volume Automated Billing",
          "Custom API Integration & Webhooks",
          "Custom Financial Report Engine",
          "Multi-User Role Permissions",
          "Dedicated Support Representative",
          "Custom Data Migration Assistance"
        ],
        ctaText: "Contact Sales",
        ctaHref: "/contact?product=invoice&type=enterprise",
        isPopular: false
      }
    ]
  }
};

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<"pos" | "invoice">("pos");
  const activeProductData = PRICING_DATA[activeTab];

  return (
    <div className="w-full bg-[#F8F3EB] text-[#020C2B] min-h-screen pt-28 pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E58145]/10 border border-[#E58145]/20 text-[#E58145] text-xs font-mono font-bold uppercase">
            Transparent Product Pricing
          </span>

          <h1 className="text-4xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            Simple Plans for Every Stage of Business
          </h1>

          <p className="text-[#020C2B]/80 text-base sm:text-lg">
            Choose the WebRajya software built for your operational needs. Upgrade or add modules anytime.
          </p>
        </div>

        {/* Product Switcher Tabs */}
        <div className="flex justify-center">
          <div className="p-1.5 rounded-2xl bg-white border border-[#020C2B]/10 shadow-sm flex items-center gap-2 max-w-md w-full">
            <button
              onClick={() => setActiveTab("pos")}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === "pos"
                  ? "bg-[#E58145] text-white shadow-sm"
                  : "text-[#020C2B]/70 hover:text-[#020C2B]"
              }`}
            >
              <Utensils className="w-4 h-4" /> WebRajya POS
            </button>

            <button
              onClick={() => setActiveTab("invoice")}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === "invoice"
                  ? "bg-[#E58145] text-white shadow-sm"
                  : "text-[#020C2B]/70 hover:text-[#020C2B]"
              }`}
            >
              <FileText className="w-4 h-4" /> WebRajya Invoice
            </button>
          </div>
        </div>

        {/* Selected Product Sub-Header */}
        <div className="text-center space-y-1">
          <Badge variant={activeProductData.badgeVariant}>
            {activeProductData.productName}
          </Badge>
          <p className="text-xs text-[#020C2B]/60 font-mono mt-1">{activeProductData.tagline}</p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {activeProductData.plans.map(plan => (
            <div
              key={plan.name}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all relative ${
                plan.isPopular
                  ? "bg-white border-2 border-[#E58145] shadow-xl scale-[1.02]"
                  : "bg-white border border-[#020C2B]/10 shadow-sm hover:border-[#E58145]/40"
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-mono uppercase font-bold tracking-wider bg-[#E58145] text-white">
                  {plan.badge}
                </span>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#020C2B]">{plan.name}</h3>
                  <p className="text-xs text-[#020C2B]/70 mt-1 min-h-[36px]">{plan.description}</p>
                </div>

                {/* Price Display */}
                <div className="p-4 rounded-2xl bg-[#F8F3EB] border border-[#020C2B]/10 font-mono">
                  <span className="text-lg sm:text-xl font-extrabold text-[#020C2B] block">
                    {plan.pricePlaceholder}
                  </span>
                  <span className="text-[11px] text-[#020C2B]/60 uppercase">{plan.period}</span>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-2.5 text-xs text-[#020C2B]/80">
                  <span className="text-[10px] font-mono text-[#020C2B]/60 uppercase tracking-wider block font-semibold">What&apos;s Included:</span>
                  {plan.features.map(f => (
                    <div key={f} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#E58145]" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#020C2B]/10">
                <Button
                  href={plan.ctaHref}
                  variant="cta"
                  size="md"
                  className="w-full"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  {plan.ctaText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing FAQ Section */}
        <div className="space-y-8 max-w-4xl mx-auto pt-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono uppercase text-[#E58145] tracking-wider font-bold">Pricing FAQ</span>
            <h2 className="text-2xl font-bold text-[#020C2B]">Frequently Asked Questions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-white border border-[#020C2B]/10 shadow-sm space-y-2">
              <h3 className="font-bold text-[#020C2B] text-sm">How is billing calculated for WebRajya POS?</h3>
              <p className="text-xs text-[#020C2B]/70 leading-relaxed">
                POS licenses are structured per outlet counter or venue location. Additional waiter ordering tablets connect to your primary counter license.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#020C2B]/10 shadow-sm space-y-2">
              <h3 className="font-bold text-[#020C2B] text-sm">Can I switch between WebRajya products?</h3>
              <p className="text-xs text-[#020C2B]/70 leading-relaxed">
                Yes. WebRajya products operate on a unified account architecture. You can adopt WebRajya Invoice or WebRajya POS independently or together.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#020C2B]/10 shadow-sm space-y-2">
              <h3 className="font-bold text-[#020C2B] text-sm">Are there hidden implementation fees?</h3>
              <p className="text-xs text-[#020C2B]/70 leading-relaxed">
                No. Standard onboarding walkthroughs are included. Enterprise multi-outlet migrations receive dedicated setup support.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#020C2B]/10 shadow-sm space-y-2">
              <h3 className="font-bold text-[#020C2B] text-sm">Need a custom quote for enterprise venues?</h3>
              <p className="text-xs text-[#020C2B]/70 leading-relaxed">
                Contact our enterprise sales architects to construct tailored multi-venue licensing and SLA terms.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Sales Callout */}
        <div className="p-8 rounded-3xl bg-[#020C2B] border border-[#E58145]/30 text-center space-y-4 max-w-3xl mx-auto shadow-xl text-white">
          <h2 className="text-2xl font-bold text-white">Need Help Choosing the Right WebRajya Plan?</h2>
          <p className="text-sm text-[#F8F3EB]/80">
            Book a 1-on-1 operational walkthrough with our software team to evaluate your venue or business billing setup.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Button href="/demo" variant="cta" size="md">
              Book a Demo Walkthrough
            </Button>
            <Button href="/contact" variant="outline" size="md" className="text-white border-white/20 hover:bg-white/10">
              Contact Sales Team
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
