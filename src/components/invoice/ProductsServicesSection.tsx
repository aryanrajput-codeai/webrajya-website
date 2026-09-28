import React from "react";
import { Package, Search, Tag, Sliders, CheckCircle2, Layers } from "lucide-react";

export function ProductsServicesSection() {
  const CATALOG_ITEMS = [
    { name: "Enterprise Cloud License", category: "Software", defaultRate: "₹45,000", tax: "18% GST" },
    { name: "Custom API Integration Module", category: "Development", defaultRate: "₹12,500", tax: "18% GST" },
    { name: "SLA Maintenance & Support", category: "Services", defaultRate: "₹8,500", tax: "18% GST" },
    { name: "Design System Workshop", category: "Consulting", defaultRate: "₹25,000", tax: "18% GST" }
  ];

  return (
    <section className="py-24 bg-[#F8F3EB] border-t border-[#020C2B]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase text-[#E58145] tracking-wider bg-[#E58145]/10 px-3.5 py-1 rounded-full border border-[#E58145]/20 font-bold">
            Catalog Management
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            Products &amp; Services Catalog
          </h2>
          <p className="text-[#020C2B]/80 text-base sm:text-lg">
            Maintain pre-configured rates, item descriptions, and tax rules so line items populate into invoices directly.
          </p>
        </div>

        {/* Interactive Catalog Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="p-4 rounded-2xl bg-white border border-[#020C2B]/10 shadow-sm space-y-1">
              <h3 className="font-bold text-[#020C2B] text-base">Standardized Rate Cards</h3>
              <p className="text-xs text-[#020C2B]/70 leading-relaxed">
                Save your standard hourly consulting fees, product SKU prices, or subscription tiers to eliminate repetitive typing.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#020C2B]/10 shadow-sm space-y-1">
              <h3 className="font-bold text-[#020C2B] text-base">Pre-Set Tax Categories</h3>
              <p className="text-xs text-[#020C2B]/70 leading-relaxed">
                Assign tax categories to products once, and WebRajya Invoice applies the correct rates automatically on every invoice.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 p-6 rounded-3xl bg-[#FAF5EF] border border-[#020C2B]/10 space-y-4 font-mono text-xs shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#020C2B]/10">
              <span className="font-bold text-[#020C2B] text-sm flex items-center gap-2">
                <Package className="w-4 h-4 text-[#E58145]" /> Products &amp; Services Directory
              </span>
              <span className="text-[10px] text-[#E58145] bg-[#E58145]/15 px-2 py-0.5 rounded border border-[#E58145]/30 font-bold">
                Auto-Suggest Ready
              </span>
            </div>

            <div className="space-y-2">
              {CATALOG_ITEMS.map(item => (
                <div key={item.name} className="p-3 rounded-xl bg-white border border-[#020C2B]/10 flex items-center justify-between shadow-xs">
                  <div>
                    <span className="font-bold text-[#020C2B] block text-xs">{item.name}</span>
                    <span className="text-[10px] text-[#525866]">{item.category} • Default Tax: {item.tax}</span>
                  </div>
                  <span className="font-bold text-[#E58145] text-sm">{item.defaultRate}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
