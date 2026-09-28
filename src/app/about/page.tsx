import React from "react";
import Metadata from "next";
import { Sparkles, ShieldCheck, Layers, Cpu, CheckCircle2, ArrowRight } from "lucide-react";
import { COMPANY_INFO, WEBRAJYA_PRINCIPLES } from "@/data/company";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "About WEBRAJYA — Connected Business Software Platform",
  description: "Learn about WebRajya's mission to engineer simple, fast, resilient business technology platforms for modern businesses.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-[#F8F3EB] text-[#020C2B] min-h-screen pt-28 pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* HERO Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E58145]/10 border border-[#E58145]/20 text-[#E58145] text-xs font-mono font-bold uppercase">
            About WebRajya
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            Engineering Software for Real Everyday Operations
          </h1>
          <p className="text-[#020C2B]/80 text-base sm:text-lg leading-relaxed">
            WebRajya is a technology company building connected business platforms. We create software tools that eliminate operational friction and empower venue owners and business leaders.
          </p>
        </div>

        {/* MISSION & VISION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-[#020C2B]/10 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#E58145]/10 text-[#E58145] border border-[#E58145]/20 flex items-center justify-center font-bold">
              <Layers className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-[#020C2B]">The WebRajya Vision</h2>
            <p className="text-sm text-[#020C2B]/80 leading-relaxed">
              Business software shouldn't feel like a chore or require weeks of employee training. WebRajya was founded on the belief that everyday operations — from restaurant orders to invoice dispatching — deserve software built with speed, precision, and simplicity.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#020C2B]/10 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#E58145]/10 text-[#E58145] border border-[#E58145]/20 flex items-center justify-center font-bold">
              <Cpu className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-[#020C2B]">Parent Brand Architecture</h2>
            <p className="text-sm text-[#020C2B]/80 leading-relaxed">
              WebRajya acts as the parent engineering brand housing specialized business products. WebRajya POS powers high-velocity food venues, while WebRajya Invoice powers enterprise billing and receivables.
            </p>
          </div>
        </div>

        {/* PRINCIPLES */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono uppercase text-[#E58145] tracking-wider font-bold">Our Core Values</span>
            <h2 className="text-3xl font-extrabold text-[#020C2B]">Engineering Principles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WEBRAJYA_PRINCIPLES.map(p => (
              <div key={p.title} className="p-6 rounded-2xl bg-white border border-[#020C2B]/10 shadow-sm space-y-2">
                <h3 className="font-bold text-[#020C2B] text-base">{p.title}</h3>
                <p className="text-xs text-[#020C2B]/70 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="p-10 rounded-3xl bg-[#020C2B] border border-[#E58145]/30 text-center space-y-6 shadow-xl">
          <h2 className="text-3xl font-extrabold text-white">Explore WebRajya Products</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/pos" variant="cta" size="md">
              Explore WebRajya POS
            </Button>
            <Button href="/invoice" variant="outline" size="md" className="text-white border-white/20 hover:bg-white/10">
              Explore WebRajya Invoice
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
