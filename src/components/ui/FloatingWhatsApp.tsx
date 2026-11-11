"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { WEBRAJYA_WHATSAPP_NUMBER } from "@/config/whatsapp";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function FloatingWhatsApp() {
  const cleanNumber = WEBRAJYA_WHATSAPP_NUMBER.replace(/[^0-9]/g, "");
  const defaultMessage = encodeURIComponent(
    "Hello WebRajya, I'm interested in learning more about your business software."
  );
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-20 md:bottom-6 right-5 z-40">
      <Tooltip>
        <TooltipTrigger
          render={
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with WebRajya on WhatsApp"
              className="group flex items-center justify-center w-13 h-13 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-[#25D366]/40 cursor-pointer relative"
            >
              <span className="sr-only">Chat with WebRajya on WhatsApp</span>
              <MessageCircle className="w-6 h-6 fill-white stroke-none group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#E58145] border-2 border-white rounded-full animate-pulse" />
            </a>
          }
        />
        <TooltipContent side="left" className="bg-[#020C2B] text-white text-xs font-medium px-3 py-1.5 rounded-lg">
          Chat with us on WhatsApp
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
