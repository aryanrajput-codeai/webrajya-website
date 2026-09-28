"use client";

import React from "react";
import { FileText, ArrowRight, ShieldCheck, Zap, CheckCircle2, Play, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { InvoiceDashboardMockup } from "@/components/mockups/InvoiceDashboardMockup";

export function InvoiceHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F8F3EB]">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#E58145]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <Badge variant="invoice" icon={<FileText className="w-3.5 h-3.5" />}>
            WEBRAJYA INVOICE • FINANCIAL BILLING PLATFORM
          </Badge>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#020C2B] tracking-tight leading-[1.08]">
            Create GST Invoices &amp; <br />
            <span className="text-[#E58145]">
              Get Paid Faster.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#525866] max-w-2xl mx-auto leading-relaxed font-normal">
            Generate GST invoices, track client receivables, and share vector PDFs in seconds.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button href="/demo" variant="cta" size="xl" icon={<ArrowRight className="w-5 h-5" />}>
              Start Free Trial — No Credit Card
            </Button>
            
            <Button
              href="#invoice-features"
              variant="outline"
              size="xl"
              icon={<ArrowRight className="w-4 h-4 text-[#E58145]" />}
              iconPosition="right"
            >
              See How It Works
            </Button>
          </div>

          {/* Trust badges */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#020C2B]/70 font-mono">
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#E58145]" /> Fast Digital Invoicing
            </span>
            <span className="flex items-center gap-2">
              <Download className="w-4 h-4 text-[#E58145]" /> Direct PDF Export
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#E58145]" /> Tax &amp; Audit Ready
            </span>
          </div>
        </div>

        {/* Realistic Invoice Studio Dashboard Mockup */}
        <div className="pt-6 max-w-6xl mx-auto">
          <div className="text-center space-2 mb-4">
            <span className="text-[11px] font-mono text-[#E58145] uppercase tracking-widest bg-[#E58145]/10 px-3 py-1 rounded-full border border-[#E58145]/20 font-bold">
              Live Invoice Studio Interface
            </span>
          </div>
          <InvoiceDashboardMockup />
        </div>

      </div>
    </section>
  );
}
