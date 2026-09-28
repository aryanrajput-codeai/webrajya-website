import React from "react";
import { CreditCard, QrCode, Smartphone, CheckCircle2, Zap, ShieldCheck, DollarSign } from "lucide-react";

export function PaymentsAndQrSection() {
  return (
    <section className="py-24 bg-[#F8F3EB] border-t border-[#020C2B]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Payments Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase text-[#020C2B] tracking-wider bg-[#020C2B]/5 px-3.5 py-1.5 rounded-full border border-[#020C2B]/15 font-semibold">
            Frictionless Checkout
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            Integrated Payments &amp; Contactless QR Ordering
          </h2>
          <p className="text-[#525866] text-base sm:text-lg">
            Accept all payment modes seamlessly at the counter or enable guest self-ordering directly from their smartphone table QR codes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Box 1: Payments */}
          <div className="p-8 rounded-3xl bg-white border border-[#020C2B]/10 shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#020C2B] text-white flex items-center justify-center font-bold">
                <CreditCard className="w-6 h-6 text-[#E58145]" />
              </div>

              <h3 className="text-2xl font-bold text-[#020C2B]">Multi-Mode Payment Terminal</h3>
              <p className="text-sm text-[#525866] leading-relaxed">
                Seamlessly settle bills with cash, card terminals, dynamic UPI QR codes, or split payments across multiple guests.
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#020C2B] pt-2 font-semibold">
                <span className="p-2.5 rounded-xl bg-[#F8F3EB] border border-[#020C2B]/10 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E58145]" /> Dynamic UPI QR
                </span>
                <span className="p-2.5 rounded-xl bg-[#F8F3EB] border border-[#020C2B]/10 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E58145]" /> Card Terminals
                </span>
                <span className="p-2.5 rounded-xl bg-[#F8F3EB] border border-[#020C2B]/10 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E58145]" /> Cash Management
                </span>
                <span className="p-2.5 rounded-xl bg-[#F8F3EB] border border-[#020C2B]/10 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E58145]" /> Digital Receipts
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#020C2B] text-white border border-white/10 text-xs font-mono flex items-center justify-between">
              <span className="text-slate-300">Payment Settlement Speed:</span>
              <span className="text-[#E58145] font-bold">Fast Settlement</span>
            </div>
          </div>

          {/* Box 2: QR Ordering */}
          <div className="p-8 rounded-3xl bg-white border border-[#020C2B]/10 shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#020C2B] text-white flex items-center justify-center font-bold">
                <QrCode className="w-6 h-6 text-[#E58145]" />
              </div>

              <h3 className="text-2xl font-bold text-[#020C2B]">Contactless Table QR Ordering</h3>
              <p className="text-sm text-[#525866] leading-relaxed">
                Guests scan table QR codes to view high-resolution digital menus, place orders, request waiter calls, or pay directly from their phones.
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#020C2B] pt-2 font-semibold">
                <span className="p-2.5 rounded-xl bg-[#F8F3EB] border border-[#020C2B]/10 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E58145]" /> No App Download
                </span>
                <span className="p-2.5 rounded-xl bg-[#F8F3EB] border border-[#020C2B]/10 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E58145]" /> Direct POS &amp; KOT Sync
                </span>
                <span className="p-2.5 rounded-xl bg-[#F8F3EB] border border-[#020C2B]/10 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E58145]" /> Faster Table Turns
                </span>
                <span className="p-2.5 rounded-xl bg-[#F8F3EB] border border-[#020C2B]/10 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E58145]" /> Higher Order Value
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#020C2B] text-white border border-white/10 text-xs font-mono flex items-center justify-between">
              <span className="text-slate-300">Average Order Value Impact:</span>
              <span className="text-[#E58145] font-bold">Enhanced Upselling</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
