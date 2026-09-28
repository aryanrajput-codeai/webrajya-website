import React from "react";
import { Download, Share2, Printer, Sliders, ShieldCheck, CheckCircle2, FileText, Globe } from "lucide-react";

export function PdfShareDashboardSection() {
  return (
    <section className="py-24 bg-[#F8F3EB] border-t border-[#020C2B]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* PDF & Sharing */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E58145]/10 border border-[#E58145]/20 text-[#E58145] text-xs font-mono font-bold uppercase">
              <Download className="w-3.5 h-3.5" /> PDF Export &amp; Sharing
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#020C2B] tracking-tight">
              High-Resolution PDF &amp; Direct WhatsApp Share
            </h2>

            <p className="text-[#020C2B]/80 text-base leading-relaxed">
              Export clean vector PDF invoices with high-DPI logo branding, or share live billing web links directly to your clients via WhatsApp or email.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono text-[#020C2B] pt-2">
              <div className="p-3.5 rounded-xl bg-white border border-[#020C2B]/10 shadow-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E58145] shrink-0" /> One-Click Vector PDF
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#020C2B]/10 shadow-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E58145] shrink-0" /> WhatsApp Direct Link
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#020C2B]/10 shadow-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E58145] shrink-0" /> Embedded UPI &amp; Bank QR
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#020C2B]/10 shadow-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E58145] shrink-0" /> Thermal &amp; A4 Print
              </div>
            </div>
          </div>

          {/* Settings & Branding */}
          <div className="p-8 rounded-3xl bg-[#FAF5EF] border border-[#020C2B]/10 space-y-6 relative overflow-hidden shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-[#E58145] text-white flex items-center justify-center font-bold shadow-sm">
              <Sliders className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-[#E58145] tracking-wider font-bold">Business Profile Customization</span>
              <h3 className="text-2xl font-bold text-[#020C2B]">Full Brand Customization &amp; Settings</h3>
              <p className="text-sm text-[#525866] leading-relaxed">
                Upload your company logo, set your business address, define tax IDs, customize terms &amp; conditions, and choose default payment instructions.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#020C2B]/10 space-y-2 text-xs font-mono text-[#525866] shadow-xs">
              <div className="flex justify-between">
                <span>Company Logo Upload:</span>
                <span className="text-[#E58145] font-semibold">PNG / SVG / JPG</span>
              </div>
              <div className="flex justify-between">
                <span>Default Currency Rules:</span>
                <span className="text-[#020C2B] font-bold">INR (₹), USD ($), EUR (€), AED</span>
              </div>
              <div className="flex justify-between">
                <span>Payment Terms Presets:</span>
                <span className="text-[#020C2B] font-bold">Due On Receipt, Net 15, Net 30</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
