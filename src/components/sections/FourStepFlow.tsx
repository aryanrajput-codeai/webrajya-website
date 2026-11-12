import React from "react";
import { CalendarCheck, PlayCircle, Settings, Store, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FourStepFlow() {
  const STEPS = [
    {
      step: "01",
      title: "Free Demo Book Karein",
      description:
        "Apne time ke anusaar 20 minute ka live demo book karein. Hum video call ya Nagpur counter visit par software dikhayenge.",
      icon: CalendarCheck,
      tag: "Video Call / Counter Visit (Nagpur)"
    },
    {
      step: "02",
      title: "3-Din Ka Free Counter Trial",
      description:
        "Aapke apne computer par software install hoga. Real saamaan aur thermal printer ke saath 3 din test karein bina kisi advance fees ke.",
      icon: PlayCircle,
      tag: "Zero Upfront Risk"
    },
    {
      step: "03",
      title: "Guided Setup & Staff Training",
      description:
        "Excel se saamaan ki list dalna, barcode scanner connect karna aur counter staff ko train karna — sab mein hum madad karenge.",
      icon: Settings,
      tag: "Hindi & English Madad"
    },
    {
      step: "04",
      title: "Tez Billing Shuru Karein",
      description:
        "Grahak ko 2 second mein bill thamaayein, udhaar ka hisaab software mein rakhein, aur shaam ko daily sales check karein.",
      icon: Store,
      tag: "Dukaan Ready"
    }
  ];

  return (
    <section className="py-24 bg-[#F8F3EB] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-bold">
            Aasaan Shuruaat
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            WebRajya Shuru Karna Hai Bilkul Aasaan — Sirf 4 Steps
          </h2>
          <p className="text-slate-700 text-base sm:text-lg">
            Koi technical jhanjhat nahi. Humari onboarding team video call aur WhatsApp par aapke counter par setup karwayegi (Nagpur mein shop visit).
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm relative flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2563EB] flex items-center justify-center border border-blue-100">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black font-mono text-slate-300">
                      {item.step}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#020C2B]">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-2 text-xs font-mono font-medium text-slate-500">
                  {item.tag}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="text-center pt-2">
          <Button href="/demo" variant="cta" size="xl">
            Apna Free Demo Slot Book Karein &rarr;
          </Button>
          <p className="text-xs text-slate-500 font-mono mt-3">
            3-din ka free counter trial • Personal setup madad poore India mein • Nagpur mein shop visit
          </p>
        </div>
      </div>
    </section>
  );
}
