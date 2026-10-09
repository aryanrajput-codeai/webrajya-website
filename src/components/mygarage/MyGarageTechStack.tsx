"use client";

import React from "react";
import { Layers, Database, Code2, Zap, Shield, Cpu } from "lucide-react";

const TECH_ITEMS = [
  {
    name: "Next.js 16 (App Router)",
    desc: "Turbopack powered React Server Components and fast client transitions.",
    icon: Zap
  },
  {
    name: "React 19 & TypeScript",
    desc: "100% strict type safety, zero compile warnings, and modern hooks.",
    icon: Code2
  },
  {
    name: "Tailwind CSS v4",
    desc: "Engineered with latest Tailwind v4 engine for micro-animations and zero-runtime CSS.",
    icon: Layers
  },
  {
    name: "Decoupled Repository Pattern",
    desc: "Seamless abstraction switching between LocalStorage and Supabase backend.",
    icon: Database
  }
];

export function MyGarageTechStack() {
  return (
    <section className="py-20 bg-[#FAF5EF] border-t border-[#020C2B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0EA5E9] bg-[#0EA5E9]/10 px-3 py-1 rounded-full border border-[#0EA5E9]/20">
            ⚡ Architecture &amp; Tech Stack
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            Built with Next.js 16, React 19 &amp; Decoupled Architecture.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Designed with enterprise clean architecture patterns so you can run offline locally or scale to millions of users on Supabase Postgres.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#020C2B]/10 hover:border-[#0EA5E9] transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0EA5E9]/15 text-[#0EA5E9] flex items-center justify-center font-bold">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#020C2B]">{item.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
