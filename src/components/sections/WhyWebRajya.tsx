import React from "react";
import { Sparkles, Zap, Network, ShieldCheck, Building2, Sliders } from "lucide-react";
import { WEBRAJYA_PRINCIPLES } from "@/data/company";

export function WhyWebRajya() {
  const iconMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-5 h-5 text-[#E58145]" />,
    Zap: <Zap className="w-5 h-5 text-[#E58145]" />,
    Network: <Network className="w-5 h-5 text-[#020C2B]" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#E58145]" />,
    Building2: <Building2 className="w-5 h-5 text-[#020C2B]" />,
    Sliders: <Sliders className="w-5 h-5 text-[#E58145]" />
  };

  return (
    <section id="why-webrajya" className="py-24 relative overflow-hidden bg-[#F8F3EB]">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase text-[#020C2B] tracking-wider bg-[#020C2B]/5 px-3.5 py-1.5 rounded-full border border-[#020C2B]/15 font-semibold">
            Engineered For Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#020C2B] tracking-tight">
            Why WebRajya?
          </h2>
          <p className="text-[#525866] text-base">
            Every line of code and UI component in WebRajya is crafted around six fundamental engineering principles.
          </p>
        </div>

        {/* 6 Principles Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WEBRAJYA_PRINCIPLES.map((principle, index) => (
            <div
              key={principle.title}
              className="group p-6 rounded-2xl bg-white border border-[#020C2B]/10 hover:border-[#E58145] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#F8F3EB] border border-[#020C2B]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {iconMap[principle.icon]}
                </div>
                <h3 className="text-lg font-bold text-[#020C2B] group-hover:text-[#E58145] transition-colors">
                  {principle.title}
                </h3>
                <p className="text-sm text-[#525866] leading-relaxed">
                  {principle.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#020C2B]/10 flex items-center justify-between text-[11px] font-mono text-[#525866]">
                <span>Principle #{index + 1}</span>
                <span className="text-[#020C2B] font-semibold group-hover:text-[#E58145] transition-colors">WebRajya Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
