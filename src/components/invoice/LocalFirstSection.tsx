import React from "react";
import { HardDrive, RefreshCw, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { INVOICE_PRICING } from "@/config/pricing";

export function LocalFirstSection() {
  const PILLARS = [
    {
      title: "Local-First Workflows",
      desc: "Search and work with locally stored data without requiring a server request for every supported operation.",
      icon: <HardDrive className="w-5 h-5 text-[#2563EB]" />
    },
    {
      title: "Background Synchronization",
      desc: "Queue supported changes locally and synchronize them with the cloud when connectivity returns.",
      icon: <RefreshCw className="w-5 h-5 text-[#2563EB]" />
    },
    {
      title: "Business Data Protection",
      desc: "Use supported backup and export tools to help protect important business records.",
      icon: <ShieldCheck className="w-5 h-5 text-[#2563EB]" />
    },
    {
      title: "Responsive Billing",
      desc: "Keep the cashier's workflow focused on creating bills, recording payments and serving customers.",
      icon: <Zap className="w-5 h-5 text-[#2563EB]" />
    }
  ];

  return (
    <section className="py-24 bg-[#0F172A] text-white border-t border-white/10 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#2563EB]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Your Billing Shouldn&apos;t Depend on a <br className="hidden sm:inline" />
            Perfect Internet Connection.
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] font-mono font-medium">
            Built for real-world retail conditions.
          </p>
          <p className="text-[#CBD5E1] text-base leading-relaxed max-w-2xl mx-auto">
            WebRajya Invoice uses a local-first architecture to keep supported operational data available on your device while synchronizing with cloud services when connectivity permits. The result is a billing experience designed around speed, continuity and dependable data handling.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map(p => (
            <div
              key={p.title}
              className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-3 hover:border-[#2563EB]/60 hover:bg-white/8 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#2563EB]/20 border border-[#2563EB]/40 flex items-center justify-center">
                {p.icon}
              </div>
              <h3 className="text-base font-bold text-white">{p.title}</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Section CTA Card with Qualified Claim Note */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/5 border border-white/15 max-w-3xl mx-auto text-center space-y-6 shadow-xl backdrop-blur-md">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white">Keep Your Counter Moving.</h3>
            <p className="text-xs sm:text-sm text-[#CBD5E1] max-w-xl mx-auto leading-relaxed">
              Explore a billing workflow designed for businesses that cannot afford unnecessary interruptions.
            </p>
          </div>

          <div>
            <Button
              href={INVOICE_PRICING.ctaSecondary.href}
              variant="primary"
              size="lg"
              className="bg-[#2563EB] hover:bg-[#1D4ED8] border-[#2563EB] text-white"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Book a Demo
            </Button>
          </div>

          <p className="text-[11px] font-mono text-[#94A3B8] pt-2 border-t border-white/10 italic">
            *Offline availability depends on the supported feature, device setup and successful synchronization configuration.
          </p>
        </div>

      </div>
    </section>
  );
}
