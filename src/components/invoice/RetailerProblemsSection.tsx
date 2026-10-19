import React from "react";
import { Zap, WifiOff, Boxes, BookOpen, Layers } from "lucide-react";

export function RetailerProblemsSection() {
  const PROBLEMS = [
    {
      problem: "Slow Billing?",
      solution: "Serve customers faster.",
      desc: "Find products quickly, scan barcodes and calculate bill totals without navigating complicated menus.",
      icon: <Zap className="w-5 h-5 text-[#2563EB]" />
    },
    {
      problem: "Unreliable Internet?",
      solution: "Keep your counter moving.",
      desc: "WebRajya Invoice is designed around local-first workflows, allowing supported billing operations to continue during internet interruptions.",
      footnote: "Offline availability depends on the feature, device setup and successful synchronization configuration.",
      icon: <WifiOff className="w-5 h-5 text-[#2563EB]" />
    },
    {
      problem: "Confusing Inventory?",
      solution: "Know what you have in stock.",
      desc: "Track product quantities, review stock changes and identify products that need replenishment.",
      icon: <Boxes className="w-5 h-5 text-[#2563EB]" />
    },
    {
      problem: "Unclear Customer Balances?",
      solution: "Keep every payment organized.",
      desc: "Maintain customer records, record payments and review outstanding balances from one place.",
      icon: <BookOpen className="w-5 h-5 text-[#2563EB]" />
    },
    {
      problem: "Too Much Manual Work?",
      solution: "Bring your daily operations together.",
      desc: "Connect billing, inventory, customer records and business reports in a single workflow.",
      icon: <Layers className="w-5 h-5 text-[#2563EB]" />
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase text-[#2563EB] tracking-wider bg-[#2563EB]/10 px-3.5 py-1 rounded-full border border-[#2563EB]/20 font-bold">
            Built for Real Counter Conditions
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight">
            Your Business Is Busy Enough. <br className="hidden sm:inline" />
            Your Billing Software Shouldn&apos;t Slow You Down.
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
            Running a shop means managing customers, products, payments, inventory and daily accounts. Your software should make these tasks simpler, not more complicated.
          </p>
        </div>

        {/* Problem-Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {PROBLEMS.map((item, idx) => (
            <div
              key={item.problem}
              className={`p-6 sm:p-7 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs hover:border-[#2563EB]/40 hover:shadow-md transition-all flex flex-col justify-between ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-white border border-[#CBD5E1] flex items-center justify-center shadow-xs">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#DC2626] bg-[#DC2626]/10 px-2.5 py-0.5 rounded-full border border-[#DC2626]/20">
                    {item.problem}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#0F172A]">{item.solution}</h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">{item.desc}</p>
                </div>
              </div>

              {item.footnote && (
                <div className="mt-4 pt-3 border-t border-[#E2E8F0]">
                  <p className="text-[11px] font-mono text-[#94A3B8] italic leading-tight">
                    *{item.footnote}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
