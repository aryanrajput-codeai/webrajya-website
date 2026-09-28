"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappUrl = "https://wa.me/919313264426?text=Hi%20WebRajya%2C%20I%20would%20like%20to%20know%20more%20about%20your%20POS%20%26%20Invoice%20software.";

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2 group">
      {/* Optional Tooltip Badge */}
      {showTooltip && (
        <div className="relative bg-[#020C2B] text-white text-xs px-3 py-2 rounded-2xl shadow-xl border border-white/10 flex items-center gap-2 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="font-medium">Need help? Chat on WhatsApp</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-2xl hover:bg-emerald-500 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/20"
        aria-label="Chat with WebRajya on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
}
