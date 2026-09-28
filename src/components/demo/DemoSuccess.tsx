import React from "react";
import Link from "next/link";
import { MessageSquare, ExternalLink, Home, Utensils, FileText } from "lucide-react";
import { DemoLead } from "@/lib/demoSubmission";
import { trackDemoEvent } from "@/lib/analytics";

interface DemoSuccessProps {
  lead: DemoLead;
  whatsappUrl: string;
}

export function DemoSuccess({ lead, whatsappUrl }: DemoSuccessProps) {
  const getProductLabel = () => {
    if (lead.productInterest === "pos") return "WebRajya POS";
    if (lead.productInterest === "invoice") return "WebRajya Invoice";
    return "WebRajya Platform (General Overview)";
  };

  const handleOpenWhatsApp = () => {
    trackDemoEvent("demo_whatsapp_opened", {
      product: lead.productInterest,
      businessType: lead.businessType
    });
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#020C2B]/10 shadow-xl text-center space-y-8 font-sans max-w-2xl mx-auto">
      
      {/* Icon Badge */}
      <div className="w-16 h-16 rounded-full bg-[#E58145]/15 border border-[#E58145]/30 text-[#E58145] flex items-center justify-center mx-auto shadow-sm">
        <MessageSquare className="w-8 h-8" />
      </div>

      {/* Header */}
      <div className="space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#020C2B] text-white text-xs font-mono font-bold uppercase tracking-wider">
          REQUEST READY
        </span>

        <h2 className="text-3xl sm:text-4xl font-black text-[#020C2B] tracking-tight">
          Continue in WhatsApp
        </h2>

        <p className="text-sm sm:text-base text-[#525866] leading-relaxed max-w-lg mx-auto">
          We&apos;ve prepared your demo request with the details you entered. WhatsApp will open with the message filled in. Review the details and tap Send to contact WebRajya.
        </p>
      </div>

      {/* Primary Action Button */}
      <div className="space-y-3 pt-2">
        <button
          type="button"
          onClick={handleOpenWhatsApp}
          className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#E58145] hover:bg-[#020C2B] text-white text-sm font-mono font-bold transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer mx-auto"
        >
          <span>Open WhatsApp</span>
          <ExternalLink className="w-4 h-4" />
        </button>

        <p className="text-xs text-[#525866] font-mono">
          WhatsApp didn&apos;t open automatically? Tap the button above to launch your chat.
        </p>
      </div>

      {/* Request Summary Box */}
      <div className="p-6 rounded-2xl bg-[#F8F3EB] border border-[#020C2B]/10 text-left font-mono text-xs space-y-2.5 text-[#020C2B]">
        <div className="text-[10px] text-[#525866] uppercase tracking-wider font-bold pb-1 border-b border-[#020C2B]/10">
          Prepared Request Summary:
        </div>

        <div className="flex justify-between">
          <span className="text-[#525866]">Business Name:</span>
          <span className="font-bold text-[#020C2B]">{lead.businessName}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-[#525866]">Business Type:</span>
          <span className="font-semibold text-[#020C2B]">{lead.businessType}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-[#525866]">Product Interest:</span>
          <span className="font-bold text-[#E58145]">{getProductLabel()}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-[#525866]">Preferred Date:</span>
          <span className="font-semibold text-[#020C2B]">{lead.preferredDate}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-[#525866]">Preferred Time:</span>
          <span className="font-semibold text-[#020C2B]">{lead.preferredTime}</span>
        </div>
      </div>

      {/* Secondary Action Buttons */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="/"
          className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#020C2B] text-white text-xs font-mono font-bold hover:bg-[#E58145] transition-colors flex items-center justify-center gap-2"
        >
          <Home className="w-4 h-4" /> Back to WebRajya
        </Link>

        {lead.productInterest === "pos" && (
          <Link
            href="/pos"
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#F8F3EB] border border-[#020C2B]/10 text-[#020C2B] text-xs font-mono font-bold hover:bg-white transition-colors flex items-center justify-center gap-2"
          >
            <Utensils className="w-4 h-4 text-[#E58145]" /> Explore WebRajya POS →
          </Link>
        )}

        {lead.productInterest === "invoice" && (
          <Link
            href="/invoice"
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#F8F3EB] border border-[#020C2B]/10 text-[#020C2B] text-xs font-mono font-bold hover:bg-white transition-colors flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4 text-[#E58145]" /> Explore WebRajya Invoice →
          </Link>
        )}
      </div>

    </div>
  );
}
