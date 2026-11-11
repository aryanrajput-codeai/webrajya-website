import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin, HeartHandshake, PhoneCall } from "lucide-react";
import { LAUNCH_CONFIG } from "@/config/launch";

export function FounderSection() {
  return (
    <section className="py-20 bg-white border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-[#F8F3EB] border border-slate-200 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Avatar / Profile placeholder */}
            <div className="md:col-span-4 flex flex-col items-center text-center space-y-3">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-white border-2 border-slate-200/80 shadow-inner flex items-center justify-center text-3xl font-black text-[#020C2B] relative overflow-hidden">
                {/* [TODO: Founder Photo - replace with real portrait image] */}
                <div className="flex flex-col items-center justify-center">
                  <span className="text-4xl font-extrabold text-[#E58145]">WR</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-[#020C2B] text-base">Aryan Rajput</h3>
                <p className="text-xs text-slate-500 font-mono">Founder &amp; Engineering Lead</p>
                <div className="flex items-center justify-center gap-1 text-[11px] text-slate-600 mt-1">
                  <MapPin className="w-3 h-3 text-[#E58145]" />
                  <span>Nagpur, Maharashtra</span>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono text-slate-700">
                <HeartHandshake className="w-3.5 h-3.5 text-[#E58145]" />
                <span>Founder&apos;s Commitment</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#020C2B] tracking-tight">
                Software should serve shop owners, not lock them in.
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                When building WebRajya, we noticed retail store owners in Nagpur struggling with two extremes: clunky desktop software with zero support, or expensive SaaS platforms that double their renewal rates each year.
              </p>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                We engineered WebRajya Invoice to be lightning fast, completely offline-resilient, and backed by someone who will actually visit your shop in person to set up your scanners and train your staff.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-[#2563EB] hover:underline"
                >
                  Read our full story <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-slate-300">•</span>
                <a
                  href={`tel:${LAUNCH_CONFIG.PHONE}`}
                  className="inline-flex items-center gap-1.5 text-slate-700 hover:text-[#020C2B]"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#E58145]" />
                  <span>Direct Desk: {LAUNCH_CONFIG.PHONE_DISPLAY}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

