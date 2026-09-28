import React from "react";
import { Printer, Wifi, ShieldCheck, Zap, HardDrive, Smartphone, Laptop, RefreshCw } from "lucide-react";

export function HardwareReliabilitySection() {
  return (
    <section className="py-24 bg-[#F8F3EB] border-t border-[#020C2B]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Thermal Printing */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#020C2B]/5 border border-[#020C2B]/15 text-[#020C2B] text-xs font-mono font-semibold uppercase">
              <Printer className="w-3.5 h-3.5 text-[#E58145]" /> Thermal Printing &amp; Hardware
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#020C2B] tracking-tight">
              High-Speed Thermal Printing &amp; Universal Hardware Compatibility
            </h2>

            <p className="text-[#525866] text-base leading-relaxed">
              Connect thermal printers via USB, Ethernet (LAN), Wi-Fi, or Bluetooth. Customize tax headers, footer promo codes, and print duplicate bills directly.
            </p>

            <div className="space-y-3 pt-2 font-mono text-xs text-[#020C2B]">
              <div className="p-3.5 rounded-xl bg-white border border-[#020C2B]/10 shadow-sm flex items-center justify-between">
                <span className="text-[#525866]">Thermal KOT Dispatch Speed:</span>
                <span className="text-[#E58145] font-bold">Sub-Second Dispatch</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#020C2B]/10 shadow-sm flex items-center justify-between">
                <span className="text-[#525866]">Supported Printer Brands:</span>
                <span className="text-[#020C2B] font-semibold">Epson, Star, Citizen, TVS, Generic ESC/POS</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#020C2B]/10 shadow-sm flex items-center justify-between">
                <span className="text-[#525866]">Receipt Customization:</span>
                <span className="text-[#020C2B] font-semibold">Logo, Tax ID, QR Payment Code, Wi-Fi Pass</span>
              </div>
            </div>
          </div>

          {/* Connectivity / Reliability */}
          <div className="p-8 rounded-3xl bg-[#020C2B] text-white border border-white/10 shadow-xl space-y-6 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-[#E58145] text-white flex items-center justify-center font-bold">
              <Wifi className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-[#E58145] tracking-wider font-semibold">Offline-First Architecture</span>
              <h3 className="text-2xl font-bold text-white">Keep Billing Even When Internet Drops</h3>
              <p className="text-sm text-[#F8F3EB]/80 leading-relaxed">
                Peak dinner rushes cannot wait for ISP connectivity. WebRajya POS operates completely offline over local Wi-Fi. Orders, bills, and KOT prints continue working without interruption and auto-sync to the cloud once online.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono text-slate-200 pt-2">
              <div className="p-3 rounded-xl bg-[#081338] border border-white/10 flex items-center gap-2 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" /> Local Database Backup
              </div>
              <div className="p-3 rounded-xl bg-[#081338] border border-white/10 flex items-center gap-2 font-semibold">
                <RefreshCw className="w-4 h-4 text-emerald-400 shrink-0" /> Auto Cloud Sync
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
