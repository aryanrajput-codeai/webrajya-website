import React from "react";
import { CalendarCheck, PlayCircle, Settings, Store, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FourStepFlow() {
  const STEPS = [
    {
      step: "01",
      title: "Book Free Demo",
      description:
        "Schedule a 20-minute live demonstration. Our team joins via video call or WhatsApp, with in-shop visits in Nagpur.",
      icon: CalendarCheck,
      tag: "Video Call / In-Shop (Nagpur)"
    },
    {
      step: "02",
      title: "3-Day Free Trial",
      description:
        "Test billing on your own counter with your real products and printer. Zero advance payment or card required.",
      icon: PlayCircle,
      tag: "Zero Upfront Risk"
    },
    {
      step: "03",
      title: "Guided Setup Help",
      description:
        "We assist with Excel catalog import, barcode scanner pairing, thermal printer margins, and staff onboarding.",
      icon: Settings,
      tag: "Hindi & English Support"
    },
    {
      step: "04",
      title: "Start Smooth Billing",
      description:
        "Settle customer bills in seconds, monitor live inventory, and keep your customer khata ledgers accurate.",
      icon: Store,
      tag: "Live On Your Counter"
    }
  ];

  return (
    <section className="py-24 bg-[#F8F3EB] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            From Demo to Live Billing in 4 Simple Steps
          </h2>
          <p className="text-slate-700 text-base sm:text-lg">
            No technical headaches. Our onboarding team guides you step-by-step by video call and WhatsApp, with on-site visits in Nagpur.
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
            Book Your Free Demo Today &rarr;
          </Button>
          <p className="text-xs text-slate-500 font-mono mt-3">
            3-day free trial after live demo • Setup assistance across India • In-shop visits in Nagpur
          </p>
        </div>
      </div>
    </section>
  );
}
