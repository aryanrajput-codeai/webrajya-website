"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Utensils, FileText, Car, CheckCircle2, Sparkles, Layers, ShieldCheck, Zap } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function ProductGateway() {
  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#F8F3EB]">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Parent Brand Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-5 sm:space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#020C2B]/5 border border-[#020C2B]/15 text-[#020C2B] text-[11px] sm:text-xs font-mono font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#E58145]" /> Connected Business Software Platform
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#020C2B] tracking-tight leading-[1.15] sm:leading-[1.1]">
            Connected Software That <br />
            <span className="text-[#E58145]">Runs Your Business.</span>
          </h1>

          <p className="text-sm sm:text-lg text-[#525866] max-w-2xl mx-auto leading-relaxed font-normal">
            Choose your specialized platform: WebRajya POS for high-speed dining, WebRajya Invoice for financial billing, or MyGarage SaaS for vehicle &amp; document management.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs text-[#525866] font-mono">
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-[#E58145]" /> Zero-Lag Speed
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#E58145]" /> Offline Resilience
            </span>
            <span className="flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#020C2B]" /> Unified Ecosystem
            </span>
          </div>

        </div>

        {/* Desktop Horizontal Product Cards Stack */}
        <div className="hidden md:block mt-12 sm:mt-16 space-y-8">
          
          {/* 1. WEBRAJYA POS HORIZONTAL CARD */}
          <div className="group relative rounded-3xl p-6 sm:p-8 md:p-10 bg-white border border-[#020C2B]/10 hover:border-[#E58145] transition-all duration-300 shadow-sm hover:shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Details & Action (5 Cols) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="pos" icon={<Utensils className="w-3.5 h-3.5 text-[#E58145]" />}>
                    WebRajya POS
                  </Badge>
                  <div className="w-10 h-10 rounded-2xl bg-[#020C2B] text-[#E58145] flex items-center justify-center font-bold shadow-md">
                    <Utensils className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#020C2B] group-hover:text-[#E58145] transition-colors leading-tight">
                    Zero-Lag Restaurant Billing.
                  </h2>
                  <p className="text-xs sm:text-sm text-[#525866] mt-2 leading-relaxed font-normal">
                    Process orders, dispatch KOTs to thermal printers, and settle bills in under 3 seconds with 100% keyboard control.
                  </p>
                </div>

                <div className="pt-1">
                  <span className="inline-block text-xs font-mono text-[#020C2B] bg-[#F8F3EB] px-3.5 py-2 rounded-xl border border-[#020C2B]/10 font-medium">
                    For restaurants, cafes, QSRs, cloud kitchens &amp; food outlets
                  </span>
                </div>

                <div className="pt-2">
                  <Button href="/pos" variant="cta" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                    Explore WebRajya POS
                  </Button>
                </div>
              </div>

              {/* Right Column: Capabilities Matrix (7 Cols) */}
              <div className="lg:col-span-7 space-y-4 lg:border-l lg:border-[#020C2B]/10 lg:pl-8">
                <span className="text-[10px] font-mono text-[#525866] uppercase tracking-wider block font-bold">
                  Connected POS Capability Modules
                </span>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    "POS & Billing",
                    "Menu Management",
                    "Table Management",
                    "Order Dispatch",
                    "KOT & Kitchen Ops",
                    "Inventory Costing",
                    "Payments & QR",
                    "Owner Dashboard",
                    "Thermal Printing"
                  ].map((cap) => (
                    <span
                      key={cap}
                      className="inline-flex items-center gap-1.5 text-xs text-[#020C2B] bg-[#F8F3EB]/70 px-3 py-2 rounded-xl border border-[#020C2B]/10 font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E58145] shrink-0" />
                      {cap}
                    </span>
                  ))}
                </div>

                {/* Operational Highlight Bar */}
                <div className="p-4 rounded-2xl bg-[#020C2B] text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono shadow-inner">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#E58145] shrink-0" />
                    <span className="font-semibold">Sub-Second Billing &amp; Direct KOT Dispatch</span>
                  </div>
                  <span className="text-[#E58145] font-bold bg-[#E58145]/15 px-3 py-1 rounded-lg border border-[#E58145]/30">
                    100% Offline Ready
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* 2. WEBRAJYA INVOICE HORIZONTAL CARD */}
          <div className="group relative rounded-3xl p-6 sm:p-8 md:p-10 bg-white border border-[#020C2B]/10 hover:border-[#020C2B] transition-all duration-300 shadow-sm hover:shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Details & Action (5 Cols) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="invoice" icon={<FileText className="w-3.5 h-3.5 text-[#E58145]" />}>
                    WebRajya Invoice
                  </Badge>
                  <div className="w-10 h-10 rounded-2xl bg-[#020C2B] text-white flex items-center justify-center font-bold shadow-md">
                    <FileText className="w-5 h-5 text-[#E58145]" />
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#020C2B] group-hover:text-[#E58145] transition-colors leading-tight">
                    GST Billing &amp; Instant PDF Share.
                  </h2>
                  <p className="text-xs sm:text-sm text-[#525866] mt-2 leading-relaxed font-normal">
                    Create professional GST invoices, track client ledgers, manage overdue receivables, and send paperless WhatsApp PDF links.
                  </p>
                </div>

                <div className="pt-1">
                  <span className="inline-block text-xs font-mono text-[#020C2B] bg-[#F8F3EB] px-3.5 py-2 rounded-xl border border-[#020C2B]/10 font-medium">
                    For vendors, service providers, distributors &amp; agencies
                  </span>
                </div>

                <div className="pt-2">
                  <Button href="/invoice" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                    Explore WebRajya Invoice
                  </Button>
                </div>
              </div>

              {/* Right Column: Capabilities Matrix (7 Cols) */}
              <div className="lg:col-span-7 space-y-4 lg:border-l lg:border-[#020C2B]/10 lg:pl-8">
                <span className="text-[10px] font-mono text-[#525866] uppercase tracking-wider block font-bold">
                  Connected Financial Billing Modules
                </span>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    "Invoice Creation",
                    "Products & Services",
                    "Customer Directory",
                    "Payment Tracking",
                    "Invoice History",
                    "Aging Receivables",
                    "Reports & Tax",
                    "Vector PDF Export",
                    "WhatsApp Sharing"
                  ].map((cap) => (
                    <span
                      key={cap}
                      className="inline-flex items-center gap-1.5 text-xs text-[#020C2B] bg-[#F8F3EB]/70 px-3 py-2 rounded-xl border border-[#020C2B]/10 font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E58145] shrink-0" />
                      {cap}
                    </span>
                  ))}
                </div>

                {/* Operational Highlight Bar */}
                <div className="p-4 rounded-2xl bg-[#020C2B] text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono shadow-inner">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#E58145] shrink-0" />
                    <span className="font-semibold">Instant GST PDF &amp; Direct WhatsApp Billing Link</span>
                  </div>
                  <span className="text-[#E58145] font-bold bg-[#E58145]/15 px-3 py-1 rounded-lg border border-[#E58145]/30">
                    Auto Tax Compliant
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* 3. MYGARAGE SAAS HORIZONTAL CARD */}
          <div className="group relative rounded-3xl p-6 sm:p-8 md:p-10 bg-white border border-[#020C2B]/10 hover:border-[#0EA5E9] transition-all duration-300 shadow-sm hover:shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Details & Action (5 Cols) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="mygarage" icon={<Car className="w-3.5 h-3.5 text-[#0EA5E9]" />}>
                    MyGarage SaaS
                  </Badge>
                  <div className="w-10 h-10 rounded-2xl bg-[#020C2B] text-white flex items-center justify-center font-bold shadow-md">
                    <Car className="w-5 h-5 text-[#0EA5E9]" />
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#020C2B] group-hover:text-[#0EA5E9] transition-colors leading-tight">
                    Vehicle Locker &amp; Expense Tracker.
                  </h2>
                  <p className="text-xs sm:text-sm text-[#525866] mt-2 leading-relaxed font-normal">
                    Track RC, Insurance, PUC expiries, service history ledgers, fuel expenses, and traffic challans in one secure digital dashboard.
                  </p>
                </div>

                <div className="pt-1">
                  <span className="inline-block text-xs font-mono text-[#020C2B] bg-[#F8F3EB] px-3.5 py-2 rounded-xl border border-[#020C2B]/10 font-medium">
                    For car &amp; bike owners, commercial fleet operators &amp; auto enthusiasts
                  </span>
                </div>

                <div className="pt-2">
                  <Button href="/mygarage" variant="outline" size="md" className="border-[#0EA5E9] text-[#020C2B] hover:bg-[#0EA5E9] hover:text-white" icon={<ArrowRight className="w-4 h-4" />}>
                    Explore MyGarage
                  </Button>
                </div>
              </div>

              {/* Right Column: Capabilities Matrix (7 Cols) */}
              <div className="lg:col-span-7 space-y-4 lg:border-l lg:border-[#020C2B]/10 lg:pl-8">
                <span className="text-[10px] font-mono text-[#525866] uppercase tracking-wider block font-bold">
                  Connected Vehicle Capability Modules
                </span>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    "Fleet Management",
                    "Document Locker",
                    "Service History",
                    "Expense Tracker",
                    "Expiry Alerts",
                    "Vahan API Ready",
                    "PDF & QR Export",
                    "CSV Spreadsheet",
                    "Supabase Sync"
                  ].map((cap) => (
                    <span
                      key={cap}
                      className="inline-flex items-center gap-1.5 text-xs text-[#020C2B] bg-[#F8F3EB]/70 px-3 py-2 rounded-xl border border-[#020C2B]/10 font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0EA5E9] shrink-0" />
                      {cap}
                    </span>
                  ))}
                </div>

                {/* Operational Highlight Bar */}
                <div className="p-4 rounded-2xl bg-[#020C2B] text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono shadow-inner">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#0EA5E9] shrink-0" />
                    <span className="font-semibold">Real-Time Expiry Counters &amp; Emergency QR Cards</span>
                  </div>
                  <span className="text-[#0EA5E9] font-bold bg-[#0EA5E9]/15 px-3 py-1 rounded-lg border border-[#0EA5E9]/30">
                    LocalStorage &amp; Supabase Ready
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Mobile Streamlined Concise Cards (< md) */}
        <div className="block md:hidden mt-8 space-y-4">
          
          {/* Mobile Card 1: WebRajya POS */}
          <div className="p-5 rounded-2xl bg-white border border-[#020C2B]/10 shadow-sm space-y-3.5">
            <div className="flex items-center justify-between">
              <Badge variant="pos" icon={<Utensils className="w-3.5 h-3.5 text-[#E58145]" />}>
                WebRajya POS
              </Badge>
              <div className="w-8 h-8 rounded-xl bg-[#020C2B] text-[#E58145] flex items-center justify-center font-bold">
                <Utensils className="w-4 h-4" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-[#020C2B] leading-snug">
                Zero-Lag Restaurant Billing
              </h3>
              <p className="text-xs text-[#525866] mt-1 leading-relaxed">
                High-speed POS, KOT printing &amp; bill settlement under 3 seconds for restaurants and cafes.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {["POS & Billing", "KOT Dispatch", "100% Offline Ready"].map((cap) => (
                <span
                  key={cap}
                  className="inline-flex items-center gap-1 text-[11px] text-[#020C2B] bg-[#F8F3EB] px-2.5 py-1 rounded-lg border border-[#020C2B]/10 font-medium"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#E58145]" />
                  {cap}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <Button href="/pos" variant="cta" size="sm" className="w-full justify-center" icon={<ArrowRight className="w-4 h-4" />}>
                Explore WebRajya POS
              </Button>
            </div>
          </div>

          {/* Mobile Card 2: WebRajya Invoice */}
          <div className="p-5 rounded-2xl bg-white border border-[#020C2B]/10 shadow-sm space-y-3.5">
            <div className="flex items-center justify-between">
              <Badge variant="invoice" icon={<FileText className="w-3.5 h-3.5 text-[#E58145]" />}>
                WebRajya Invoice
              </Badge>
              <div className="w-8 h-8 rounded-xl bg-[#020C2B] text-white flex items-center justify-center font-bold">
                <FileText className="w-4 h-4 text-[#E58145]" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-[#020C2B] leading-snug">
                GST Billing &amp; PDF Share
              </h3>
              <p className="text-xs text-[#525866] mt-1 leading-relaxed">
                Professional GST invoicing, client ledgers, payment tracking, and paperless WhatsApp PDF links.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {["GST Billing", "Payment Ledger", "WhatsApp PDF Link"].map((cap) => (
                <span
                  key={cap}
                  className="inline-flex items-center gap-1 text-[11px] text-[#020C2B] bg-[#F8F3EB] px-2.5 py-1 rounded-lg border border-[#020C2B]/10 font-medium"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#E58145]" />
                  {cap}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <Button href="/invoice" variant="primary" size="sm" className="w-full justify-center" icon={<ArrowRight className="w-4 h-4" />}>
                Explore WebRajya Invoice
              </Button>
            </div>
          </div>

          {/* Mobile Card 3: MyGarage SaaS */}
          <div className="p-5 rounded-2xl bg-white border border-[#020C2B]/10 shadow-sm space-y-3.5">
            <div className="flex items-center justify-between">
              <Badge variant="mygarage" icon={<Car className="w-3.5 h-3.5 text-[#0EA5E9]" />}>
                MyGarage SaaS
              </Badge>
              <div className="w-8 h-8 rounded-xl bg-[#020C2B] text-[#0EA5E9] flex items-center justify-center font-bold">
                <Car className="w-4 h-4" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-[#020C2B] leading-snug">
                Vehicle Locker &amp; Expense Tracker
              </h3>
              <p className="text-xs text-[#525866] mt-1 leading-relaxed">
                RC, Insurance &amp; PUC expiry countdowns, service history ledgers, and digital document locker.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {["Document Locker", "Expiry Alerts", "Service History"].map((cap) => (
                <span
                  key={cap}
                  className="inline-flex items-center gap-1 text-[11px] text-[#020C2B] bg-[#F8F3EB] px-2.5 py-1 rounded-lg border border-[#020C2B]/10 font-medium"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#0EA5E9]" />
                  {cap}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <Button href="/mygarage" variant="outline" size="sm" className="w-full justify-center border-[#0EA5E9] text-[#020C2B] hover:bg-[#0EA5E9] hover:text-white" icon={<ArrowRight className="w-4 h-4" />}>
                Explore MyGarage
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
