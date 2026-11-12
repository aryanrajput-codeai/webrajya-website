import React from "react";
import Link from "next/link";
import {
  Smartphone,
  Tv,
  Shirt,
  Footprints,
  BookOpen,
  Layers,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export function ShopIndustryTiles() {
  const TILES = [
    {
      title: "Mobile & Accessories Shops",
      tagline: "IMEI & serial number logging, fast accessory barcodes, and customer Khata.",
      href: "/industry/mobile-shops",
      icon: Smartphone,
      keyFeature: "IMEI & Serial Tracking",
      badge: "Mobile Retail"
    },
    {
      title: "Consumer Electronics & Appliances",
      tagline: "Serial numbers, multi-slab GST tax invoices, and distributor warranty tracking.",
      href: "/industry/electronics",
      icon: Tv,
      keyFeature: "Serial & GST Invoices",
      badge: "Electronics"
    },
    {
      title: "Clothing & Garment Retailers",
      tagline: "Sizes, colours, and variant matrices with instant barcode tag checkout.",
      href: "/industry/clothing-garments",
      icon: Shirt,
      keyFeature: "Size & Color Matrix",
      badge: "Apparel"
    },
    {
      title: "Footwear & Shoe Stores",
      tagline: "Shoe size tracking (UK 6-11), brand categorization, and exchange lookups.",
      href: "/industry/footwear",
      icon: Footprints,
      keyFeature: "Shoe Size Management",
      badge: "Footwear"
    },
    {
      title: "Stationery & Book Stores",
      tagline: "High-speed keyword lookup across 2,000+ items, wholesale pricing, and school Khata.",
      href: "/industry/stationery-books",
      icon: BookOpen,
      keyFeature: "Rapid Catalog Search",
      badge: "Stationery"
    },
    {
      title: "Furniture & Decor Showrooms",
      tagline: "Custom dimensions, advance payment records, and branded GST quotations.",
      href: "/industry/furniture",
      icon: Layers,
      keyFeature: "Advance Downpayments",
      badge: "Showroom"
    }
  ];

  return (
    <section className="py-24 bg-[#F8F3EB] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            Built for Your Shop, Anywhere in India
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
            Every retail counter operates differently. WebRajya Invoice provides practical features tailored
            to your specific daily billing, stock categorization, and customer ledger needs.
          </p>
        </div>

        {/* 6 Industry Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TILES.map((tile) => {
            const Icon = tile.icon;
            return (
              <Link
                key={tile.href}
                href={tile.href}
                className="group relative bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#2563EB]/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2563EB] group-hover:bg-[#020C2B] group-hover:text-white transition-colors flex items-center justify-center border border-blue-100">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {tile.badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#020C2B] group-hover:text-[#2563EB] transition-colors">
                      {tile.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {tile.tagline}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#020C2B] group-hover:text-[#2563EB]">
                  <span className="flex items-center gap-1.5 text-slate-700 font-mono text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    {tile.keyFeature}
                  </span>
                  <span className="flex items-center gap-1 font-bold group-hover:translate-x-1 transition-transform">
                    Explore &rarr;
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
