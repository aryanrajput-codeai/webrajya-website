"use client";

import React from "react";
import { Utensils, FileText, Car, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Motion3DStage, Tilt3DCard, FloatZ } from "@/components/ui/motion3d";

export function ProductEcosystem() {
  return (
    <section className="py-24 bg-[#F8F3EB] border-t border-[#020C2B]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase text-[#020C2B] tracking-wider bg-[#020C2B]/5 px-3.5 py-1.5 rounded-full border border-[#020C2B]/15 font-semibold">
            Platform Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#020C2B] tracking-tight">
            The WebRajya Software Ecosystem
          </h2>
          <p className="text-[#525866] text-base">
            WebRajya is designed as an extensible business platform. Start with what your business needs today, with zero friction as your operations grow.
          </p>
        </div>

        {/* 3D Ecosystem Grid */}
        <Motion3DStage perspective={1300} className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* WEBRAJYA POS */}
            <Tilt3DCard maxTilt={8} scale={1.02} className="rounded-3xl">
              <div className="h-full p-7 rounded-3xl bg-white border border-[#020C2B]/10 hover:border-[#E58145] transition-colors flex flex-col justify-between group shadow-3d-floating" style={{ transformStyle: "preserve-3d" }}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <FloatZ z={30}>
                      <div className="w-10 h-10 rounded-xl bg-[#020C2B] text-white flex items-center justify-center font-bold">
                        <Utensils className="w-5 h-5 text-[#E58145]" />
                      </div>
                    </FloatZ>
                    <FloatZ z={35}>
                      <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-[#E58145]/15 text-[#020C2B] border border-[#E58145]/30">
                        AVAILABLE NOW
                      </span>
                    </FloatZ>
                  </div>

                  <div>
                    <FloatZ z={20}>
                      <h3 className="text-xl font-bold text-[#020C2B] group-hover:text-[#E58145] transition-colors">
                        WEBRAJYA POS
                      </h3>
                      <p className="text-xs text-[#525866] font-mono mt-0.5">
                        Restaurant Operating System
                      </p>
                    </FloatZ>
                  </div>

                  <p className="text-sm text-[#525866] leading-relaxed">
                    Complete billing, kitchen orders, inventory costing, QR table dining, and owner analytics built for modern food businesses.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#020C2B]/10 flex items-center justify-between">
                  <span className="text-xs text-[#525866] font-mono">webrajya.com/pos</span>
                  <FloatZ z={40}>
                    <Button href="/pos" variant="cta" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                      Explore POS
                    </Button>
                  </FloatZ>
                </div>
              </div>
            </Tilt3DCard>

            {/* WEBRAJYA INVOICE */}
            <Tilt3DCard maxTilt={8} scale={1.02} className="rounded-3xl">
              <div className="h-full p-7 rounded-3xl bg-white border border-[#020C2B]/10 hover:border-[#020C2B] transition-colors flex flex-col justify-between group shadow-3d-floating" style={{ transformStyle: "preserve-3d" }}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <FloatZ z={30}>
                      <div className="w-10 h-10 rounded-xl bg-[#020C2B] text-white flex items-center justify-center font-bold">
                        <FileText className="w-5 h-5 text-[#E58145]" />
                      </div>
                    </FloatZ>
                    <FloatZ z={35}>
                      <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-[#E58145]/15 text-[#020C2B] border border-[#E58145]/30">
                        AVAILABLE NOW
                      </span>
                    </FloatZ>
                  </div>

                  <div>
                    <FloatZ z={20}>
                      <h3 className="text-xl font-bold text-[#020C2B] group-hover:text-[#E58145] transition-colors">
                        WEBRAJYA INVOICE
                      </h3>
                      <p className="text-xs text-[#525866] font-mono mt-0.5">
                        Financial Invoicing Platform
                      </p>
                    </FloatZ>
                  </div>

                  <p className="text-sm text-[#525866] leading-relaxed">
                    Fast GST invoice generation, client directory, payment tracking, PDF export, and receivables management.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#020C2B]/10 flex items-center justify-between">
                  <span className="text-xs text-[#525866] font-mono">webrajya.com/invoice</span>
                  <FloatZ z={40}>
                    <Button href="/invoice" variant="primary" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                      Explore Invoice
                    </Button>
                  </FloatZ>
                </div>
              </div>
            </Tilt3DCard>

            {/* MYGARAGE SAAS */}
            <Tilt3DCard maxTilt={8} scale={1.02} className="rounded-3xl">
              <div className="h-full p-7 rounded-3xl bg-white border border-[#020C2B]/10 hover:border-[#0EA5E9] transition-colors flex flex-col justify-between group shadow-3d-floating" style={{ transformStyle: "preserve-3d" }}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <FloatZ z={30}>
                      <div className="w-10 h-10 rounded-xl bg-[#020C2B] text-white flex items-center justify-center font-bold">
                        <Car className="w-5 h-5 text-[#0EA5E9]" />
                      </div>
                    </FloatZ>
                    <FloatZ z={35}>
                      <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-[#0EA5E9]/15 text-[#0EA5E9] border border-[#0EA5E9]/30">
                        PRODUCTION READY
                      </span>
                    </FloatZ>
                  </div>

                  <div>
                    <FloatZ z={20}>
                      <h3 className="text-xl font-bold text-[#020C2B] group-hover:text-[#0EA5E9] transition-colors">
                        MYGARAGE SAAS
                      </h3>
                      <p className="text-xs text-[#525866] font-mono mt-0.5">
                        Automotive SaaS Platform
                      </p>
                    </FloatZ>
                  </div>

                  <p className="text-sm text-[#525866] leading-relaxed">
                    All-in-one digital locker, RC/Insurance/PUC expiry alerts, service history ledger, fuel expense tracker &amp; Vahan API ready.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#020C2B]/10 flex items-center justify-between">
                  <span className="text-xs text-[#525866] font-mono">webrajya.com/mygarage</span>
                  <FloatZ z={40}>
                    <Button href="/mygarage" variant="outline" size="sm" icon={<ArrowRight className="w-3.5 h-3.5 text-[#0EA5E9]" />}>
                      Explore MyGarage
                    </Button>
                  </FloatZ>
                </div>
              </div>
            </Tilt3DCard>

          </div>
        </Motion3DStage>

      </div>
    </section>
  );
}

