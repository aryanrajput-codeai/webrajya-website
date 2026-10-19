import React from "react";
import Link from "next/link";
import { Boxes, AlertTriangle, TrendingUp, DollarSign, ArrowRight } from "lucide-react";

export function InventoryProfitSection() {
  const PILLARS = [
    {
      title: "Track the Products That Matter",
      desc: "See product quantities, purchase costs and selling prices in one organized catalog.",
      icon: <Boxes className="w-5 h-5 text-[#2563EB]" />
    },
    {
      title: "Stay Ahead of Low Stock",
      desc: "Identify products approaching their configured reorder levels to prevent lost counter sales.",
      icon: <AlertTriangle className="w-5 h-5 text-[#D97706]" />
    },
    {
      title: "Understand Your Sales",
      desc: "Review sales performance by date, item category and regular customer profiles.",
      icon: <TrendingUp className="w-5 h-5 text-[#2563EB]" />
    },
    {
      title: "Monitor Gross Profit",
      desc: "Where reliable cost data is recorded, review estimated gross margin per product line.",
      icon: <DollarSign className="w-5 h-5 text-[#16A34A]" />
    }
  ];

  return (
    <section id="inventory-profit" className="py-24 bg-[#F8FAFC] border-t border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase text-[#2563EB] tracking-wider bg-[#2563EB]/10 px-3.5 py-1 rounded-full border border-[#2563EB]/20 font-bold">
            Catalog &amp; Margin Intelligence
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight">
            Know What You&apos;re Selling. <br className="hidden sm:inline" />
            Understand What You&apos;re Earning.
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
            Your product catalog should do more than store item names and prices. WebRajya Invoice brings sales and inventory information together to help you make more informed business decisions.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map(p => (
            <div
              key={p.title}
              className="p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-xs hover:border-[#2563EB]/40 hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] flex items-center justify-center">
                  {p.icon}
                </div>
                <h3 className="text-base font-bold text-[#0F172A]">{p.title}</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Inventory Table Preview & Profit Caution Notice */}
        <div className="p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-[#E2E8F0]">
            <div>
              <h3 className="text-lg font-bold text-[#0F172A]">Stock Status &amp; Margin View</h3>
              <p className="text-xs text-[#64748B]">Real-time catalog stock levels and unit price margins</p>
            </div>
            <Link
              href="/demo?product=invoice&feature=inventory"
              className="text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8] flex items-center gap-1 group"
            >
              <span>Explore Business Reports</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead>
                <tr className="border-b border-[#E2E8F0] text-[#64748B] text-[11px] uppercase">
                  <th className="pb-3 font-semibold">Product Name</th>
                  <th className="pb-3 font-semibold">SKU / Barcode</th>
                  <th className="pb-3 font-semibold text-center">In Stock</th>
                  <th className="pb-3 font-semibold text-right">Cost</th>
                  <th className="pb-3 font-semibold text-right">Sell Price</th>
                  <th className="pb-3 font-semibold text-right">Est. Margin</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9]">
                <tr>
                  <td className="py-3 font-sans font-bold text-[#0F172A]">Classmate Notebook 200p</td>
                  <td className="py-3 text-[#64748B]">STN-101</td>
                  <td className="py-3 text-center"><span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-50 text-emerald-600 font-bold">48 in stock</span></td>
                  <td className="py-3 text-right text-[#64748B]">₹62.00</td>
                  <td className="py-3 text-right font-bold text-[#0F172A]">₹90.00</td>
                  <td className="py-3 text-right text-emerald-600 font-bold">+₹28.00 (31%)</td>
                </tr>
                <tr>
                  <td className="py-3 font-sans font-bold text-[#0F172A]">Reynolds 045 Ball Pen (20pk)</td>
                  <td className="py-3 text-[#64748B]">PEN-204</td>
                  <td className="py-3 text-center"><span className="px-2 py-0.5 rounded-full text-[10px] bg-amber-50 text-amber-600 font-bold">4 (Low Stock)</span></td>
                  <td className="py-3 text-right text-[#64748B]">₹150.00</td>
                  <td className="py-3 text-right font-bold text-[#0F172A]">₹200.00</td>
                  <td className="py-3 text-right text-emerald-600 font-bold">+₹50.00 (25%)</td>
                </tr>
                <tr>
                  <td className="py-3 font-sans font-bold text-[#0F172A]">Camlin Whiteboard Marker (Black)</td>
                  <td className="py-3 text-[#64748B]">MKR-305</td>
                  <td className="py-3 text-center"><span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-50 text-emerald-600 font-bold">32 in stock</span></td>
                  <td className="py-3 text-right text-[#64748B]">₹22.50</td>
                  <td className="py-3 text-right font-bold text-[#0F172A]">₹35.00</td>
                  <td className="py-3 text-right text-emerald-600 font-bold">+₹12.50 (35%)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Qualified Accounting Note */}
          <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[11px] text-[#64748B] leading-relaxed">
            <strong className="text-[#0F172A]">Important Note:</strong> Gross profit calculations account for recorded costs and selling prices. Estimated gross margins do not represent net shop profitability, which is subject to overhead, operating expenses, and inventory adjustments.
          </div>
        </div>

      </div>
    </section>
  );
}
