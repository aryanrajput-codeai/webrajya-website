import React from "react";
import Link from "next/link";
import { Barcode, Tag, Printer, ArrowRight, CheckCircle2 } from "lucide-react";

export function BarcodeSection() {
  const PILLARS = [
    {
      title: "Scan Products Faster",
      desc: "Use compatible USB and wireless barcode scanners for immediate, error-free product lookup at the counter.",
      icon: <Barcode className="w-5 h-5 text-[#2563EB]" />
    },
    {
      title: "Generate Product Labels",
      desc: "Prepare standard barcode labels (Code128 / EAN) with product title, MRP, selling price, and store name.",
      icon: <Tag className="w-5 h-5 text-[#2563EB]" />
    },
    {
      title: "Use Your Existing Printing Setup",
      desc: "Support for multi-label A4 sheets and standard thermal barcode printers reduces the need for expensive proprietary hardware.",
      icon: <Printer className="w-5 h-5 text-[#2563EB]" />
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] border-t border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase text-[#2563EB] tracking-wider bg-[#2563EB]/10 px-3.5 py-1 rounded-full border border-[#2563EB]/20 font-bold">
            Product Identification
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight">
            Your Product Barcodes. <br className="hidden sm:inline" />
            Ready When You Need Them.
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
            Create and print product barcode labels without making your workflow unnecessarily complicated. WebRajya Invoice is designed to bring product identification and barcode generation into the billing workflow.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PILLARS.map(p => (
            <div
              key={p.title}
              className="p-7 rounded-3xl bg-white border border-[#E2E8F0] shadow-xs hover:border-[#2563EB]/40 hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center">
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0F172A]">{p.title}</h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">{p.desc}</p>
              </div>

              <div className="pt-3 border-t border-[#F1F5F9] flex items-center gap-1.5 text-xs font-mono text-[#16A34A] font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" /> Hardware Flexible
              </div>
            </div>
          ))}
        </div>

        {/* Visual Mock Label Card */}
        <div className="p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm max-w-xl mx-auto space-y-4 text-center">
          <span className="text-xs font-mono uppercase text-[#64748B] font-semibold">Sample Barcode Label Output</span>
          
          <div className="p-4 rounded-2xl bg-[#F8FAFC] border-2 border-dashed border-[#CBD5E1] inline-block font-mono text-xs space-y-1">
            <span className="font-bold text-[#0F172A] block text-sm">RAJESH STATIONERY</span>
            <span className="text-[#475569] block text-xs">Classmate Notebook 200p</span>
            <div className="py-2 flex justify-center">
              {/* Visual simulated barcode bars */}
              <div className="h-10 w-48 flex items-stretch gap-1 bg-white p-1 border border-[#E2E8F0]">
                <div className="w-1 bg-[#0F172A]" />
                <div className="w-2 bg-[#0F172A]" />
                <div className="w-0.5 bg-[#0F172A]" />
                <div className="w-3 bg-[#0F172A]" />
                <div className="w-1 bg-[#0F172A]" />
                <div className="w-2 bg-[#0F172A]" />
                <div className="w-1 bg-[#0F172A]" />
                <div className="w-3 bg-[#0F172A]" />
                <div className="w-2 bg-[#0F172A]" />
                <div className="w-1 bg-[#0F172A]" />
                <div className="w-3 bg-[#0F172A]" />
                <div className="w-1 bg-[#0F172A]" />
              </div>
            </div>
            <div className="flex justify-between text-[11px] font-bold text-[#0F172A] pt-1">
              <span>SKU: STN-101</span>
              <span>MRP: ₹90.00</span>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/demo?product=invoice&feature=barcode"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8]"
            >
              <span>Explore Barcode Tools</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <p className="text-[11px] font-mono text-[#94A3B8] italic">
            *Compatible with 1D barcode scanners (HID keyboard emulation mode) and standard A4 label printing.
          </p>
        </div>

      </div>
    </section>
  );
}
