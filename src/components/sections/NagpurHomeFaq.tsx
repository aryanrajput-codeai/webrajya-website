import React from "react";
import { HelpCircle, Phone, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";
import { COMPANY_CONFIG } from "@/config/company";

export function NagpurHomeFaq() {
  const FAQS = [
    {
      id: "faq-1",
      question: "Where do you provide demonstrations and setup assistance?",
      answer:
        "We serve retail shops across all of India through interactive video calls (Google Meet / Zoom) and WhatsApp/phone onboarding. If your store is located in Nagpur, Maharashtra, our local team can also visit your shop in person for on-site setup."
    },
    {
      id: "faq-2",
      question: "How does the 3-day free trial work?",
      answer:
        "Following your demonstration, we help set up WebRajya Invoice directly on your counter computer. You get 3 full days to bill customers, scan barcodes, and test receipt printing with your real products. No credit card or advance payment is required."
    },
    {
      id: "faq-3",
      question: "Can I use WebRajya Invoice without an internet connection?",
      answer:
        "Yes. WebRajya Invoice is built around a local-first architecture. All customer billing, barcode scanning, and thermal receipt printing run locally on your computer, so your counter never halts when the internet drops. Data syncs when you reconnect."
    },
    {
      id: "faq-4",
      question: "Will WebRajya Invoice work with our existing thermal printer and barcode scanner?",
      answer:
        "Yes. WebRajya Invoice supports standard 2-inch (58mm) and 3-inch (80mm) thermal receipt printers (USB, Bluetooth, LAN) as well as standard USB/wireless handheld barcode scanners."
    },
    {
      id: "faq-5",
      question: "How do we transfer our existing product list from Excel or notebooks?",
      answer:
        "You can import your product catalog in minutes via our bulk Excel/CSV import tool. During your setup session, our onboarding specialist will guide you step-by-step through importing your inventory."
    }
  ];

  const whatsappMessage = encodeURIComponent(
    "Hi WebRajya, I have a question about WebRajya Invoice for my shop."
  );
  const whatsappUrl = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-24 bg-white border-t border-[#020C2B]/10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-black text-[#020C2B] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Everything you need to know about setting up WebRajya Invoice in your shop.
          </p>
        </div>

        <div className="bg-[#F8F3EB]/60 rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <Accordion className="space-y-4">
            {FAQS.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-white rounded-2xl border border-slate-200 p-2 sm:p-3 overflow-hidden"
              >
                <AccordionTrigger className="font-bold text-sm sm:text-base text-[#020C2B] px-3 hover:no-underline cursor-pointer">
                  <span className="flex items-center gap-3 text-left">
                    <HelpCircle className="w-5 h-5 text-[#2563EB] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-3 pt-2 text-slate-600 text-xs sm:text-sm leading-relaxed pl-11">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center space-y-3 pt-2">
          <p className="text-xs text-slate-500 font-mono">
            Have a different question? Speak with our team directly:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold hover:bg-emerald-100 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-800 text-xs font-bold hover:bg-slate-200 transition-colors font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-[#E58145]" />
              <span>Call {COMPANY_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
