import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Search, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LAUNCH_CONFIG } from "@/config/launch";

export default function NotFound() {
  const whatsappUrl = `https://wa.me/${LAUNCH_CONFIG.WHATSAPP}?text=${encodeURIComponent(
    "Hi WebRajya, I was looking for a page on your website and couldn't find it."
  )}`;

  return (
    <div className="w-full bg-[#F8F3EB] text-[#020C2B] min-h-screen pt-36 pb-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center font-sans">
      <div className="max-w-md w-full bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-xl text-center space-y-6">
        <span className="text-4xl sm:text-5xl font-black font-mono text-[#E58145] block">
          404
        </span>

        <div className="space-y-2">
          <h1 className="text-2xl font-black text-[#020C2B]">Page Not Found</h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The link you followed may be broken or the page may have been moved. Let&apos;s get you
            back to the right place.
          </p>
        </div>

        <div className="space-y-2 pt-2">
          <Button href="/" variant="primary" size="md" className="w-full" icon={<Home className="w-4 h-4" />}>
            Back to Homepage
          </Button>

          <Button href="/demo" variant="cta" size="md" className="w-full">
            Book Free In-Shop Demo
          </Button>
        </div>

        <div className="pt-4 border-t border-slate-100">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-emerald-700 hover:underline flex items-center justify-center gap-1.5 font-semibold"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Need help? Message our Nagpur desk</span>
          </a>
        </div>
      </div>
    </div>
  );
}
