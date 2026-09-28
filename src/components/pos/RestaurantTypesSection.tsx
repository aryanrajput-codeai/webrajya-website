import React from "react";
import { Utensils, Coffee, Zap, Cloud, Store, CheckCircle2 } from "lucide-react";

export function RestaurantTypesSection() {
  const VENUES = [
    { title: "Restaurants", icon: <Utensils className="w-5 h-5 text-[#E58145]" />, desc: "Fine dining & family restros with table layouts, split checks, captain orders, and multi-course KOTs." },
    { title: "Cafes & Bakeries", icon: <Coffee className="w-5 h-5 text-[#E58145]" />, desc: "Custom add-ons, milk choices, barista KOT tickets, and fast counter checkouts." },
    { title: "QSR & Fast Food", icon: <Zap className="w-5 h-5 text-[#E58145]" />, desc: "Rapid counter billing, token number callouts, and direct receipt printing." },
    { title: "Cloud Kitchens", icon: <Cloud className="w-5 h-5 text-[#E58145]" />, desc: "Multi-brand menu management from one kitchen KDS screen and aggregator order dispatch." },
    { title: "Food Counters", icon: <Store className="w-5 h-5 text-[#E58145]" />, desc: "Food trucks, kiosks, and food courts with quick barcode search and offline register mode." }
  ];

  return (
    <section className="py-24 bg-[#F8F3EB] border-t border-[#020C2B]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase text-[#020C2B] tracking-wider bg-[#020C2B]/5 px-3.5 py-1.5 rounded-full border border-[#020C2B]/15 font-semibold">
            Tailored Workflows
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            Built for Your Specific Outlet Format
          </h2>
          <p className="text-[#525866] text-base sm:text-lg">
            WebRajya POS adapts to your venue operations — whether you manage a 100-seat fine dining restaurant or a high-velocity cloud kitchen.
          </p>
        </div>

        {/* 5 Venue Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VENUES.map(v => (
            <div key={v.title} className="p-6 rounded-2xl bg-white border border-[#020C2B]/10 hover:border-[#E58145] transition-all hover:-translate-y-1 shadow-sm hover:shadow-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F8F3EB] border border-[#020C2B]/10 flex items-center justify-center font-bold">
                {v.icon}
              </div>
              <h3 className="text-xl font-bold text-[#020C2B]">{v.title}</h3>
              <p className="text-xs text-[#525866] leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
