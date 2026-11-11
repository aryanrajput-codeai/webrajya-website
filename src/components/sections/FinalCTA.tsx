import React from "react";
import { ArrowRight, MessageCircle, Phone, ShieldCheck } from "lucide-react";
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

          <Button
            href={whatsappUrl}
            variant="outline"
            size="xl"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border-white/20 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </Button>
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
