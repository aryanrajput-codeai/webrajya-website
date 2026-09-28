import React from "react";
import Link from "next/link";
import { Utensils, FileText, ArrowRight, Layers, PlusCircle, Compass } from "lucide-react";
import { PRODUCTS, FUTURE_PRODUCTS } from "@/data/products";
import { Button } from "@/components/ui/Button";

export function ProductEcosystem() {
  return (
    <section className="py-24 bg-[#F8F3EB] border-t border-[#020C2B]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase text-[#020C2B] tracking-wider bg-[#020C2B]/5 px-3.5 py-1.5 rounded-full border border-[#020C2B]/15 font-semibold">
            Platform Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#020C2B] tracking-tight">
            The WebRajya Software Ecosystem
          </h2>
          <p className="text-[#525866] text-base">
            WebRajya is designed as an extensible business platform. Start with what your business needs today, with zero friction as your operations grow.
          </p>
        </div>

        {/* Ecosystem Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* WEBRAJYA POS */}
          <div className="p-6 rounded-3xl bg-white border border-[#020C2B]/10 hover:border-[#E58145] transition-all flex flex-col justify-between group shadow-sm hover:shadow-md">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#020C2B] text-white flex items-center justify-center font-bold">
                  <Utensils className="w-5 h-5 text-[#E58145]" />
                </div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-[#E58145]/15 text-[#020C2B] border border-[#E58145]/30">
                  AVAILABLE NOW
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#020C2B] group-hover:text-[#E58145] transition-colors">
                  WEBRAJYA POS
                </h3>
                <p className="text-xs text-[#525866] font-mono mt-0.5">
                  Restaurant Operating System
                </p>
              </div>

              <p className="text-sm text-[#525866] leading-relaxed">
                Complete billing, kitchen orders, inventory costing, QR table dining, and owner analytics built for modern food businesses.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#020C2B]/10 flex items-center justify-between">
              <span className="text-xs text-[#525866] font-mono">webrajya.com/pos</span>
              <Button href="/pos" variant="cta" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                Explore POS
              </Button>
            </div>
          </div>

          {/* WEBRAJYA INVOICE */}
          <div className="p-6 rounded-3xl bg-white border border-[#020C2B]/10 hover:border-[#E58145] transition-all flex flex-col justify-between group shadow-sm hover:shadow-md">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#020C2B] text-white flex items-center justify-center font-bold">
                  <FileText className="w-5 h-5 text-[#E58145]" />
                </div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-[#E58145]/15 text-[#020C2B] border border-[#E58145]/30">
                  AVAILABLE NOW
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#020C2B] group-hover:text-[#E58145] transition-colors">
                  WEBRAJYA INVOICE
                </h3>
                <p className="text-xs text-[#525866] font-mono mt-0.5">
                  Financial Invoicing Platform
                </p>
              </div>

              <p className="text-sm text-[#525866] leading-relaxed">
                Fast GST invoice generation, client directory, payment tracking, PDF export, and receivables management.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#020C2B]/10 flex items-center justify-between">
              <span className="text-xs text-[#525866] font-mono">webrajya.com/invoice</span>
              <Button href="/invoice" variant="primary" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                Explore Invoice
              </Button>
            </div>
          </div>

          {/* FUTURE PLATFORM EXPANSION PLACEHOLDER CARD */}
          <div className="p-6 rounded-3xl bg-white/70 border border-dashed border-[#020C2B]/20 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#020C2B]/5 text-[#020C2B] border border-[#020C2B]/10 flex items-center justify-center font-bold">
                  <PlusCircle className="w-5 h-5 text-[#E58145]" />
                </div>
                <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-[#020C2B]/5 text-[#020C2B] border border-[#020C2B]/15 uppercase">
                  Future Roadmap
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#020C2B]">
                  Future WebRajya Solutions
                </h3>
                <p className="text-xs text-[#525866] font-mono mt-0.5">
                  Extensible Platform Architecture
                </p>
              </div>

              <div className="space-y-2 pt-1">
                {FUTURE_PRODUCTS.map(fp => (
                  <div key={fp.name} className="p-2.5 rounded-xl bg-[#F8F3EB] border border-[#020C2B]/10 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-[#020C2B] block">{fp.name}</span>
                      <span className="text-[10px] text-[#525866]">{fp.description}</span>
                    </div>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white text-[#020C2B] font-semibold border border-[#020C2B]/10 shrink-0">
                      {fp.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#020C2B]/10 text-center">
              <span className="text-[11px] text-[#525866] font-mono">
                Room reserved for connected business modules
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
