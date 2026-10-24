import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { INVOICE_PRICING } from "@/config/pricing";

export function WhyWebRajyaSection() {
  const COMPARISONS = [
    { need: "Faster counter billing", help: "Quick search and keyboard-friendly workflows" },
    { need: "Organized products", help: "Product catalog and category management" },
    { need: "Better stock visibility", help: "Inventory tracking and stock reports" },
    { need: "Clear customer records", help: "Payment history and outstanding balances" },
    { need: "Flexible invoicing", help: "Supported GST and non-GST billing options" },
    { need: "Less repetitive work", help: "Connected billing and inventory workflows" },
    { need: "More informed decisions", help: "Sales and stock reports" },
    { need: "Affordable software", help: "One simple introductory annual price" }
  ];

  return (
    <section className="py-24 bg-white border-t border-[#E2E8F0] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight">
            Designed Around the Way <br className="hidden sm:inline" />
            Indian Retailers Work.
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
            Retail software shouldn&apos;t force you to change how your store operates. It should make your everyday routine simpler, faster, and more dependable.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 bg-[#0F172A] text-white p-4 sm:p-5 font-mono text-xs uppercase tracking-wider font-bold">
            <span className="hidden md:inline">What Your Business Needs</span>
            <span>How WebRajya Invoice Helps</span>
          </div>

          <div className="divide-y divide-[#E2E8F0]">
            {COMPARISONS.map((row, idx) => (
              <div
                key={row.need}
                className={`grid grid-cols-1 md:grid-cols-2 p-4 sm:p-5 text-xs sm:text-sm transition-colors ${
                  idx % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"
                }`}
              >
                <div className="font-semibold text-[#0F172A] pb-1 md:pb-0 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#CBD5E1] md:hidden" />
                  <span>{row.need}</span>
                </div>
                <div className="text-[#2563EB] font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                  <span className="text-[#0F172A]">{row.help}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0F172A] text-white text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Your Shop. Your Workflow. One Connected Platform.
            </h3>
            <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
              WebRajya Invoice brings essential retail operations together in one focused billing solution.
            </p>
          </div>

          <div className="relative z-10 pt-2">
            <Button
              href={INVOICE_PRICING.ctaPrimary.href}
              variant="primary"
              size="xl"
              className="bg-[#2563EB] hover:bg-[#1D4ED8] border-[#2563EB] text-white shadow-lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started with WebRajya Invoice
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
