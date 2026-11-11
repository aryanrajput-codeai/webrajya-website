import React from "react";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LAUNCH_CONFIG } from "@/config/launch";
import { GstNote } from "@/components/ui/GstNote";
import { RefundNote } from "@/components/ui/RefundNote";

export function FinalCTA() {
  const whatsappMessage = encodeURIComponent(
    "Hi WebRajya, I want to book a free demo of WebRajya Invoice for my shop in Nagpur."
  );
  const whatsappUrl = `https://wa.me/${LAUNCH_CONFIG.WHATSAPP}?text=${whatsappMessage}`;

  return (
    <section className="py-24 bg-[#020C2B] text-white relative overflow-hidden font-sans">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[#2563EB]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <Badge variant="invoice">Nagpur Retail Launch</Badge>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Ready to Speed Up Your Billing Counter?
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Book a 20-minute live demonstration in your shop or online. If you like it, get a 3-day
          free trial on your own counter with hands-on setup support from our Nagpur team.
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="/demo"
            variant="cta"
            size="xl"
            className="w-full sm:w-auto font-bold shadow-lg shadow-[#E58145]/20"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Book In-Shop Free Demo
          </Button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-base text-white bg-[#25D366] hover:bg-[#1ebe57] active:bg-[#17a84c] shadow-md shadow-[#25D366]/30 hover:shadow-lg hover:shadow-[#25D366]/40 transition-all duration-200 select-none"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.546 5.877L.057 23.428a.5.5 0 0 0 .515.572l5.737-1.505A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 0 1-5.032-1.385l-.36-.214-3.733.979 1.001-3.642-.235-.374A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
            </svg>
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 font-mono">
          <span>3-day free trial after live demo</span>
          <span>•</span>
          <span>Free personal setup help in Nagpur</span>
          <span>•</span>
          <a href={`tel:${LAUNCH_CONFIG.PHONE}`} className="hover:text-white transition-colors">
            Call: {LAUNCH_CONFIG.PHONE_DISPLAY}
          </a>
        </div>

        <GstNote className="text-slate-400" />
        <RefundNote className="text-slate-400" />
      </div>
    </section>
  );
}
