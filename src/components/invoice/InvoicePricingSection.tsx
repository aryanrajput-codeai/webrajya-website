import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { INVOICE_PRICING } from "@/config/pricing";

export function InvoicePricingSection() {
  return (
    <section id="pricing" className="py-24 bg-[#F8FAFC] border-t border-[#E2E8F0] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight">
            Powerful Billing. One Simple Price.
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
            Everything your retail business needs, without complicated pricing tiers.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="rounded-3xl p-8 sm:p-12 bg-white border-2 border-[#2563EB] shadow-2xl relative flex flex-col justify-between">
          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-mono uppercase font-bold tracking-wider bg-[#2563EB] text-white shadow-sm">
            {INVOICE_PRICING.badge}
          </span>

          <div className="space-y-8">
            <div className="text-center space-y-2 pt-2">
              <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A]">{INVOICE_PRICING.productName}</h3>
              <p className="text-sm text-[#64748B]">{INVOICE_PRICING.tagline}</p>
            </div>

            {/* Price Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-center space-y-2 font-mono">
              <div className="flex items-baseline justify-center gap-3">
                <span className="text-4xl sm:text-6xl font-black text-[#0F172A]">
                  {INVOICE_PRICING.currencySymbol}{INVOICE_PRICING.introductoryPrice.toLocaleString("en-IN")}
                </span>
                <span className="text-sm text-[#64748B] font-semibold">{INVOICE_PRICING.period}</span>
                <span className="text-lg sm:text-xl text-[#94A3B8] line-through">
                  {INVOICE_PRICING.currencySymbol}{INVOICE_PRICING.standardPrice.toLocaleString("en-IN")}/yr
                </span>
              </div>
              <p className="text-sm text-[#2563EB] font-bold">
                Approximately {INVOICE_PRICING.currencySymbol}{INVOICE_PRICING.monthlyEquivalent} per month, billed annually.
              </p>
              <p className="text-xs text-[#64748B]">
                {INVOICE_PRICING.taxNote}
              </p>
            </div>

            {/* Inclusions List */}
            <div className="space-y-4">
              <span className="text-xs font-mono text-[#0F172A] uppercase tracking-wider block font-bold">
                Your Annual Plan Includes:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#0F172A]">
                {INVOICE_PRICING.features.map(f => (
                  <div key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[#16A34A]" />
                    <span className="leading-tight">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Transparent Conditions */}
            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#64748B] leading-relaxed space-y-1">
              <p>
                <strong className="text-[#0F172A]">Pricing Policy:</strong> Annual license covers all core modules with unlimited counter billing. Software updates and standard technical assistance are provided during the active subscription period.
              </p>
              <p className="text-[11px] font-mono text-[#94A3B8]">
                {INVOICE_PRICING.termsNote}
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row gap-4">
            <Button
              href={INVOICE_PRICING.ctaPrimary.href}
              variant="primary"
              size="xl"
              className="flex-1 bg-[#2563EB] hover:bg-[#1D4ED8] border-[#2563EB] text-white shadow-md shadow-[#2563EB]/20"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started
            </Button>
            <Button
              href={INVOICE_PRICING.ctaSecondary.href}
              variant="outline"
              size="xl"
              className="flex-1 border-[#0F172A]/20 hover:bg-[#0F172A]/5 text-[#0F172A]"
            >
              Book a Demo
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
