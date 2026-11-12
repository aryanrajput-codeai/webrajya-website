import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MessageCircle, Phone, ArrowRight, Calendar, ShieldCheck } from "lucide-react";
import { LAUNCH_CONFIG } from "@/config/launch";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Demo Request Received — WebRajya Invoice",
  description: "Thank you for scheduling your WebRajya Invoice demonstration.",
  robots: { index: false, follow: false }
};

export default function ThankYouPage() {
  const whatsappUrl = `https://wa.me/${LAUNCH_CONFIG.WHATSAPP}?text=${encodeURIComponent(
    "Hi WebRajya, I just requested a demo on your website and would like to confirm my slot."
  )}`;

  return (
    <div className="w-full bg-[#F8F3EB] text-[#020C2B] min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-xl w-full bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xl text-center space-y-8 animate-in fade-in duration-300">
        {/* Success Icon */}
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase text-[#2563EB] font-bold tracking-wider">
            Booking Confirmed
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-[#020C2B] tracking-tight">
            Thank You! We&apos;ve Received Your Request
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our onboarding team will reach out to you within 2 business hours via WhatsApp or
            phone to confirm your preferred video call or in-shop demo slot.
          </p>
        </div>

        {/* What Happens Next Card */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-3">
          <span className="text-xs font-mono uppercase text-slate-500 font-bold block">
            What Happens Next:
          </span>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <Calendar className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
              <span>We confirm your preferred demo time and format (video call or Nagpur in-shop visit).</span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
              <span>You receive a 20-minute live demonstration tailored to your retail shop type.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Your 3-day free trial starts on your own counter with personal setup help.</span>
            </li>
          </ul>
        </div>

        {/* WhatsApp Fast Track Button */}
        <div className="space-y-3 pt-2">
          <Button
            href={whatsappUrl}
            variant="cta"
            size="xl"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            Fast-Track on WhatsApp
          </Button>

          <p className="text-xs text-slate-500">
            Urgent query? Call our desk directly at{" "}
            <a
              href={`tel:${LAUNCH_CONFIG.PHONE}`}
              className="text-[#2563EB] font-bold underline font-mono"
            >
              {LAUNCH_CONFIG.PHONE_DISPLAY}
            </a>
          </p>
        </div>

        {/* Back Link */}
        <div className="pt-2">
          <Link
            href="/"
            className="text-xs font-semibold text-slate-600 hover:text-[#020C2B] transition-colors"
          >
            &larr; Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

