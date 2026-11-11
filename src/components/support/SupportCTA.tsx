import React from "react";
import Link from "next/link";
import { MessageCircle, Phone, Monitor, Video, ArrowRight, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LAUNCH_CONFIG } from "@/config/launch";

export function SupportCTA() {
  const whatsappUrl = `https://wa.me/${LAUNCH_CONFIG.WHATSAPP}?text=${encodeURIComponent(
    "Hi WebRajya, I need support with WebRajya Invoice."
  )}`;

  return (
    <div className="p-8 sm:p-12 rounded-3xl bg-[#020C2B] text-white border border-[#2563EB]/30 space-y-8 shadow-xl text-center max-w-4xl mx-auto relative overflow-hidden font-sans">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="space-y-3 relative z-10">
        <span className="text-xs font-mono uppercase tracking-wider text-[#60A5FA] font-bold">
          Customer Care &amp; Technical Desk
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          Direct Human Support for Your Shop
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
          No automated loops. Reach real technical specialists via WhatsApp, direct phone call, or
          remote screen sharing.
        </p>
      </div>

      {/* 4 Support Channels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left relative z-10">
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs font-mono">
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </div>
          <p className="text-[11px] text-slate-300">Quick question &amp; bill formatting queries</p>
        </div>

        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
          <div className="flex items-center gap-2 text-blue-400 font-bold text-xs font-mono">
            <Phone className="w-4 h-4" /> Phone Desk
          </div>
          <p className="text-[11px] text-slate-300">{LAUNCH_CONFIG.PHONE_DISPLAY}</p>
        </div>

        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
          <div className="flex items-center gap-2 text-purple-400 font-bold text-xs font-mono">
            <Monitor className="w-4 h-4" /> Remote Desktop
          </div>
          <p className="text-[11px] text-slate-300">AnyDesk / TeamViewer printer setup</p>
        </div>

        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs font-mono">
            <Video className="w-4 h-4" /> Tutorials
          </div>
          <p className="text-[11px] text-slate-300">Hindi &amp; English step-by-step videos</p>
        </div>
      </div>

      {/* Operating Hours & Response Target Note */}
      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1 font-mono text-center relative z-10 max-w-2xl mx-auto">
        <p className="text-white font-bold flex items-center justify-center gap-1.5">
          <Clock className="w-4 h-4 text-amber-400" /> Support Desk Hours:
        </p>
        <p>{LAUNCH_CONFIG.OPERATING_HOURS.weekdays}</p>
        <p className="text-amber-300">{LAUNCH_CONFIG.OPERATING_HOURS.sunday}</p>
        <p className="text-[11px] text-slate-400 pt-1 italic font-sans">
          All response times are managed as performance targets (aiming for sub-2 hours on counter
          issues), not contractual financial guarantees.
        </p>
      </div>

      <div className="pt-2 flex flex-wrap justify-center gap-4 relative z-10">
        <Button
          href={whatsappUrl}
          variant="cta"
          size="md"
          target="_blank"
          rel="noopener noreferrer"
          icon={<MessageCircle className="w-4 h-4" />}
          className="bg-emerald-600 hover:bg-emerald-700"
        >
          Message on WhatsApp
        </Button>

        <Button
          href={`tel:${LAUNCH_CONFIG.PHONE}`}
          variant="outline"
          size="md"
          className="text-white border-white/20 hover:bg-white/10 font-mono"
          icon={<Phone className="w-4 h-4" />}
        >
          Call {LAUNCH_CONFIG.PHONE_DISPLAY}
        </Button>

        <Button
          href="/learn"
          variant="secondary"
          size="md"
          icon={<Video className="w-4 h-4" />}
        >
          Watch Video Guides
        </Button>
      </div>
    </div>
  );
}
