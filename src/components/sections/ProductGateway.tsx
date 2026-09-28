"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Utensils, FileText, CheckCircle2, Sparkles, Layers, ShieldCheck, Zap } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function ProductGateway() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#F8F3EB]">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Parent Brand Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#020C2B]/5 border border-[#020C2B]/15 text-[#020C2B] text-xs font-mono font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#E58145]" /> Connected Business Software Platform
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#020C2B] tracking-tight leading-[1.1]">
            Connected Software That <br />
            <span className="text-[#E58145]">Runs Your Business.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#525866] max-w-xl mx-auto leading-relaxed font-normal">
            Choose your specialized platform: WebRajya POS for high-speed dining or WebRajya Invoice for financial billing.
          </p>

          <div className="pt-2 flex items-center justify-center gap-5 text-xs text-[#525866] font-mono">
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

        {/* Product Gateway Selector Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* WEBRAJYA POS CARD */}
          <div className="group relative rounded-3xl p-6 sm:p-8 bg-white border border-[#020C2B]/10 hover:border-[#E58145] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Product Header */}
              <div className="flex items-start justify-between">
                <div>
                  <Badge variant="pos" icon={<Utensils className="w-3.5 h-3.5 text-[#E58145]" />}>
                    WebRajya POS
                  </Badge>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#020C2B] mt-3 group-hover:text-[#E58145] transition-colors">
                    Zero-Lag Restaurant Billing.
                  </h2>
                  <p className="text-sm text-[#525866] mt-1">
                    Settle orders, dispatch KOTs &amp; manage floor tables in under 3 seconds.
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#020C2B] border border-[#020C2B]/10 flex items-center justify-center text-[#E58145] shadow-md shrink-0 group-hover:scale-105 transition-transform">
                  <Utensils className="w-6 h-6 text-[#E58145]" />
                </div>
              </div>

              {/* Target Audience */}
              <p className="text-xs text-[#020C2B] font-mono bg-[#F8F3EB] px-3 py-2 rounded-xl border border-[#020C2B]/10">
                For restaurants, cafes, QSRs, cloud kitchens and food businesses.
              </p>

              {/* Capability Tags Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  "POS & Billing",
                  "Menu Management",
                  "Table Management",
                  "Order Management",
                  "KOT & Kitchen Ops",
                  "Inventory & Costing",
                  "Payments & QR",
                  "Owner Dashboard",
                  "Thermal Printing"
                ].map(cap => (
                  <span key={cap} className="inline-flex items-center gap-1.5 text-xs text-[#020C2B] bg-[#F8F3EB]/60 px-2.5 py-1.5 rounded-lg border border-[#020C2B]/10">
                    <CheckCircle2 className="w-3 h-3 text-[#E58145] shrink-0" /> {cap}
                  </span>
                ))}
              </div>

              {/* Product Feature Highlight Block */}
              <div className="pt-2">
                <div className="p-4 rounded-2xl bg-[#F8F3EB] border border-[#020C2B]/10 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#E58145]" />
                    <span className="text-[#020C2B] font-semibold">Sub-Second Billing & KOT Dispatch</span>
                  </div>
                  <span className="text-[#E58145] font-bold">100% Offline Ready</span>
                </div>
              </div>

            </div>

            {/* Card CTA */}
            <div className="mt-8 pt-6 border-t border-[#020C2B]/10 flex items-center justify-between">
              <div>
                <span className="text-xs text-[#525866] block font-mono">WebRajya POS</span>
                <span className="text-sm font-semibold text-[#020C2B]">Built for food operations</span>
              </div>
              <Button href="/pos" variant="cta" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                Explore WebRajya POS
              </Button>
            </div>
          </div>

          {/* WEBRAJYA INVOICE CARD */}
          <div className="group relative rounded-3xl p-6 sm:p-8 bg-white border border-[#020C2B]/10 hover:border-[#E58145] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Product Header */}
              <div className="flex items-start justify-between">
                <div>
                  <Badge variant="invoice" icon={<FileText className="w-3.5 h-3.5 text-[#E58145]" />}>
                    WebRajya Invoice
                  </Badge>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#020C2B] mt-3 group-hover:text-[#E58145] transition-colors">
                    GST Billing &amp; Instant PDF Share.
                  </h2>
                  <p className="text-sm text-[#525866] mt-1">
                    Create professional invoices, track receivables &amp; send WhatsApp links.
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#020C2B] border border-[#020C2B]/10 flex items-center justify-center text-[#E58145] shadow-md shrink-0 group-hover:scale-105 transition-transform">
                  <FileText className="w-6 h-6 text-[#E58145]" />
                </div>
              </div>

              {/* Target Audience */}
              <p className="text-xs text-[#020C2B] font-mono bg-[#F8F3EB] px-3 py-2 rounded-xl border border-[#020C2B]/10">
                For businesses that need fast invoicing, customer management and payment tracking.
              </p>

              {/* Capability Tags Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  "Invoice Creation",
                  "Products & Services",
                  "Customer Directory",
                  "Payment Tracking",
                  "Invoice History",
                  "Receivables Tracking",
                  "Reports & Tax",
                  "PDF / Print / Share",
                  "Business Dashboard"
                ].map(cap => (
                  <span key={cap} className="inline-flex items-center gap-1.5 text-xs text-[#020C2B] bg-[#F8F3EB]/60 px-2.5 py-1.5 rounded-lg border border-[#020C2B]/10">
                    <CheckCircle2 className="w-3 h-3 text-[#E58145] shrink-0" /> {cap}
                  </span>
                ))}
              </div>

              {/* Product Feature Highlight Block */}
              <div className="pt-2">
                <div className="p-4 rounded-2xl bg-[#F8F3EB] border border-[#020C2B]/10 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#E58145]" />
                    <span className="text-[#020C2B] font-semibold">Instant GST PDF & WhatsApp Link</span>
                  </div>
                  <span className="text-[#E58145] font-bold">Auto Tax Compliant</span>
                </div>
              </div>

            </div>

            {/* Card CTA */}
            <div className="mt-8 pt-6 border-t border-[#020C2B]/10 flex items-center justify-between">
              <div>
                <span className="text-xs text-[#525866] block font-mono">WebRajya Invoice</span>
                <span className="text-sm font-semibold text-[#020C2B]">Built for fast billing & cash flow</span>
              </div>
              <Button href="/invoice" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                Explore WebRajya Invoice
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
