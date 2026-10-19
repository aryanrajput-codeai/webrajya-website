import React from "react";
import Link from "next/link";
import {
  FileText,
  Boxes,
  Users,
  Receipt,
  Truck,
  TrendingUp,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export function KeyFeaturesSection() {
  const FEATURES = [
    {
      num: "01",
      title: "Fast Billing & Invoicing",
      desc: "Create professional invoices using quick product search, barcode scanning and keyboard-friendly controls.",
      icon: <FileText className="w-5 h-5 text-[#2563EB]" />,
      bullets: [
        "Quick product lookup",
        "Quantity and discount management",
        "Automatic bill calculations",
        "GST and non-GST billing options",
        "Invoice history and reprinting"
      ],
      ctaText: "Explore Billing",
      ctaHref: "#billing-speed"
    },
    {
      num: "02",
      title: "Smart Inventory Management",
      desc: "Keep your product catalog and stock information organized.",
      icon: <Boxes className="w-5 h-5 text-[#2563EB]" />,
      bullets: [
        "Product and category management",
        "Product codes and barcodes",
        "Purchase and selling prices",
        "Stock quantity tracking",
        "Low-stock alerts & movement records"
      ],
      ctaText: "Explore Inventory",
      ctaHref: "#inventory-profit"
    },
    {
      num: "03",
      title: "Customer Management & Khata",
      desc: "Maintain customer information and keep track of payments and outstanding balances.",
      icon: <Users className="w-5 h-5 text-[#2563EB]" />,
      bullets: [
        "Customer profiles & contact records",
        "Customer-wise sales history",
        "Payment records & part-settlement",
        "Outstanding balance tracking",
        "Customer ledger reports"
      ],
      ctaText: "Manage Customers",
      ctaHref: "/demo?product=invoice&feature=customers"
    },
    {
      num: "04",
      title: "GST & Non-GST Billing",
      desc: "Choose the appropriate billing format for each supported transaction.",
      icon: <Receipt className="w-5 h-5 text-[#2563EB]" />,
      bullets: [
        "Configurable tax settings",
        "CGST, SGST and IGST calculations",
        "Discount handling at line & invoice level",
        "Professional invoice formats",
        "Tax-related sales summaries"
      ],
      ctaText: "Explore Invoicing",
      ctaHref: "#billing-speed"
    },
    {
      num: "05",
      title: "Purchase & Supplier Management",
      desc: "Keep purchasing activity connected with your inventory.",
      icon: <Truck className="w-5 h-5 text-[#2563EB]" />,
      bullets: [
        "Supplier directory & records",
        "Direct purchase voucher entry",
        "Stock auto-updates from purchases",
        "Purchase history & invoice archive",
        "Purchase cost tracking"
      ],
      ctaText: "Manage Purchases",
      ctaHref: "/demo?product=invoice&feature=purchases"
    },
    {
      num: "06",
      title: "Business Reports",
      desc: "Understand how your shop is performing without manually combining multiple spreadsheets.",
      icon: <TrendingUp className="w-5 h-5 text-[#2563EB]" />,
      bullets: [
        "Daily sales summaries",
        "Sales by date range",
        "Product performance & fast-movers",
        "Stock level reports",
        "Customer outstanding balance ledger"
      ],
      ctaText: "View Reports",
      ctaHref: "#inventory-profit"
    }
  ];

  return (
    <section id="key-features" className="py-24 bg-[#F8FAFC] border-t border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase text-[#2563EB] tracking-wider bg-[#2563EB]/10 px-3.5 py-1 rounded-full border border-[#2563EB]/20 font-bold">
            Complete Business Control
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight">
            Everything Your Shop Needs. <br className="hidden sm:inline" />
            All in One Place.
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
            From your first bill of the day to your closing report, WebRajya Invoice helps simplify everyday retail operations.
          </p>
        </div>

        {/* 6 Core Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {FEATURES.map(f => (
            <div
              key={f.num}
              className="p-7 rounded-3xl bg-white border border-[#E2E8F0] shadow-xs hover:border-[#2563EB]/40 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center">
                    {f.icon}
                  </div>
                  <span className="text-sm font-mono font-bold text-[#64748B] bg-[#F1F5F9] px-2.5 py-1 rounded-lg">
                    {f.num}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#0F172A]">{f.title}</h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">{f.desc}</p>
                </div>

                {/* Bullets */}
                <div className="space-y-2 pt-2 border-t border-[#F1F5F9]">
                  {f.bullets.map(b => (
                    <div key={b} className="flex items-start gap-2 text-xs text-[#0F172A]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2E8F0]">
                <Link
                  href={f.ctaHref}
                  className="text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8] flex items-center gap-1.5 group"
                >
                  <span>{f.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
