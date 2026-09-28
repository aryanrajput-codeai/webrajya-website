import React from "react";
import { Zap, ShieldCheck, Sparkles, Layers, Sliders, CheckCircle2 } from "lucide-react";

export function WhyWebRajyaPos() {
  const REASONS = [
    { title: "Rapid Counter Checkout", desc: "Touch-optimized layouts engineered for high-volume order entry during peak hours.", icon: <Zap className="w-5 h-5 text-[#E58145]" /> },
    { title: "Offline-First Design", desc: "Designed to keep billing uninterrupted during ISP internet outages with local network sync.", icon: <ShieldCheck className="w-5 h-5 text-[#E58145]" /> },
    { title: "Fast Staff Onboarding", desc: "Intuitive UI designed for immediate waiter and cashier adoption with minimal training.", icon: <Sparkles className="w-5 h-5 text-[#E58145]" /> },
    { title: "Connected Operations", desc: "Unifies floor layouts, kitchen KDS screens, thermal printers, and owner analytics.", icon: <Layers className="w-5 h-5 text-[#E58145]" /> },
    { title: "Real Recipe Food Costing", desc: "Track exact ingredient consumption per dish served to protect kitchen margins.", icon: <Sliders className="w-5 h-5 text-[#E58145]" /> },
    { title: "Multi-Outlet Scalability", desc: "Manage menus, pricing, and reports across 1 to 50+ branches from one owner dashboard.", icon: <CheckCircle2 className="w-5 h-5 text-[#E58145]" /> }
  ];

  return (
    <section className="py-24 bg-[#F8F3EB] border-t border-[#020C2B]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase text-[#020C2B] tracking-wider bg-[#020C2B]/5 px-3.5 py-1.5 rounded-full border border-[#020C2B]/15 font-semibold">
            Competitive Advantage
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            Why Restaurant Owners Choose WebRajya POS
          </h2>
          <p className="text-[#525866] text-base sm:text-lg">
            Built from direct floor feedback of venue managers and chefs who demand speed and total operational control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map(r => (
            <div key={r.title} className="p-6 rounded-2xl bg-white border border-[#020C2B]/10 hover:border-[#E58145] transition-all hover:-translate-y-1 shadow-sm hover:shadow-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F8F3EB] border border-[#020C2B]/10 flex items-center justify-center font-bold">
                {r.icon}
              </div>
              <h3 className="text-lg font-bold text-[#020C2B]">{r.title}</h3>
              <p className="text-xs text-[#525866] leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
