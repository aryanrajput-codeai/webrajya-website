"use client";

import React from "react";
import { Star, Quote, Utensils, Coffee } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  establishment: string;
  icon: React.ReactNode;
  metrics: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "WebRajya POS cut our billing queue time by half during Friday dinner rush. Cashiers love using the hotkeys—they don't even touch the trackpad anymore!",
    author: "Vikramaditya S.",
    role: "Managing Director",
    establishment: "Royal Spice Fine Dining",
    icon: <Utensils className="w-5 h-5 text-[#E58145]" />,
    metrics: "50% Faster Billing Queue",
  },
  {
    quote: "The printable cashier cheatsheet and table jump shortcut (T) made training new staff effortless. Highly recommended for busy QSR outlets.",
    author: "Ananya R.",
    role: "General Manager",
    establishment: "Urban Bites Cafe & Bakery",
    icon: <Coffee className="w-5 h-5 text-[#E58145]" />,
    metrics: "5-Min Cashier Onboarding",
  },
];

export function PosTestimonialsSection() {
  return (
    <section className="py-20 bg-white text-[#020C2B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono text-[#020C2B] uppercase tracking-widest bg-[#F8F3EB] px-3 py-1 rounded-full border border-[#020C2B]/10 font-semibold shadow-sm">
            Proven Performance
          </span>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#020C2B]">
            Trusted by High-Volume Restaurants &amp; Cafes
          </h2>

          <p className="text-base text-[#525866]">
            Real feedback from managers and operators running peak meal shifts on WebRajya POS.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F8F3EB] border border-[#020C2B]/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-5 relative group hover:shadow-xl hover:border-[#E58145]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-[#E58145]/20 absolute top-5 right-5 sm:top-6 sm:right-6 pointer-events-none group-hover:text-[#E58145]/30 transition-colors" />

              <div className="space-y-3 relative z-10">
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm sm:text-base md:text-lg font-medium text-[#020C2B] leading-relaxed italic pr-4 sm:pr-0">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#020C2B]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-white border border-[#020C2B]/10 flex items-center justify-center shadow-sm shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-bold text-xs sm:text-sm text-[#020C2B]">{item.author}</div>
                    <div className="text-[11px] sm:text-xs text-[#525866]">
                      {item.role}, <span className="font-semibold text-[#020C2B]">{item.establishment}</span>
                    </div>
                  </div>
                </div>

                <span className="text-[10px] sm:text-[11px] font-mono font-bold bg-[#E58145]/15 text-[#E58145] px-2.5 py-1 rounded-full border border-[#E58145]/20 self-start sm:self-auto shrink-0">
                  {item.metrics}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
