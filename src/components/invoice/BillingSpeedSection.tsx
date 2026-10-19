import React from "react";
import { Search, ShoppingCart, CreditCard, Printer, CheckCircle2 } from "lucide-react";

export function BillingSpeedSection() {
  const STEPS = [
    {
      num: "1",
      title: "Find a Product",
      desc: "Search by product name, item code or supported barcode scanner lookup.",
      icon: <Search className="w-5 h-5 text-[#2563EB]" />
    },
    {
      num: "2",
      title: "Build the Bill",
      desc: "Add products, adjust quantities effortlessly and apply permitted discounts.",
      icon: <ShoppingCart className="w-5 h-5 text-[#2563EB]" />
    },
    {
      num: "3",
      title: "Collect Payment",
      desc: "Record the payment method (Cash, UPI, Card) and any outstanding amount.",
      icon: <CreditCard className="w-5 h-5 text-[#2563EB]" />
    },
    {
      num: "4",
      title: "Print or Share",
      desc: "Generate the invoice using a supported printing or paperless sharing workflow.",
      icon: <Printer className="w-5 h-5 text-[#2563EB]" />
    }
  ];

  return (
    <section id="billing-speed" className="py-24 bg-white border-t border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase text-[#2563EB] tracking-wider bg-[#2563EB]/10 px-3.5 py-1 rounded-full border border-[#2563EB]/20 font-bold">
            Counter Ergonomics
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight">
            Fewer Clicks. Faster Checkout.
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
            A busy counter needs software that responds to the cashier. WebRajya Invoice is designed to make everyday billing simple, with quick product search, barcode scanning and keyboard-friendly navigation.
          </p>
        </div>

        {/* 4 Steps Row */}
        <div className="space-y-4">
          <div className="text-center mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0F172A] bg-[#F1F5F9] px-4 py-1.5 rounded-full border border-[#CBD5E1]">
              Scan. Add. Bill. Print.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map(s => (
              <div
                key={s.num}
                className="p-6 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs hover:border-[#2563EB]/40 hover:shadow-md transition-all space-y-4 relative"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#CBD5E1] flex items-center justify-center shadow-xs">
                    {s.icon}
                  </div>
                  <span className="text-2xl font-black font-mono text-[#CBD5E1]">0{s.num}</span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-[#0F172A]">{s.title}</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow Showcase Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
              Designed to Keep Queues Moving
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              Every detail is tailored to counter ergonomics: rapid item lookup across thousands of stock items, automatic tax computation, instant discount toggle, and direct thermal/A4 printing with one tap or keyboard shortcut.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-[#0F172A] pt-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" /> Hotkey-driven actions
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" /> Barcode auto-detection
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" /> Clear totals with round-off
              </span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm space-y-3 font-mono text-xs">
            <div className="flex justify-between pb-2 border-b border-[#E2E8F0]">
              <span className="font-bold text-[#0F172A]">Counter Performance</span>
              <span className="text-[#16A34A] font-bold">Responsive</span>
            </div>
            <div className="space-y-1.5 text-[11px] text-[#64748B]">
              <div className="flex justify-between">
                <span>Product Lookup:</span>
                <span className="font-bold text-[#0F172A]">Instant Local Cache</span>
              </div>
              <div className="flex justify-between">
                <span>Cart Computation:</span>
                <span className="font-bold text-[#0F172A]">Real-Time Math</span>
              </div>
              <div className="flex justify-between">
                <span>Printing:</span>
                <span className="font-bold text-[#0F172A]">ESC/POS &amp; Laser</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
