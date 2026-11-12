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
      question: "Demo aur setup madad humein kaise milegi?",
      answer:
        "Hum poore India mein video call (Google Meet / Zoom) aur WhatsApp par live judkar aapke counter par software chalana sikhate hain. Agar aapki dukaan Nagpur mein hai, to humari team counter par aakar bhi personal visit karti hai."
    },
    {
      id: "faq-2",
      question: "3 din ka free trial kaise kaam karta hai?",
      answer:
        "Demo dekhne ke baad, hum aapke computer par software setup karte hain. 3 din tak bina kisi advance fees ya card ke aap apne real saamaan ke bills banakar aasaani se test kar sakte hain."
    },
    {
      id: "faq-3",
      question: "Agar internet ya broadband band ho jaye to kya billing chalegi?",
      answer:
        "Haan, bilkul chalegi! WebRajya 100% offline-first engine par bana hai. Internet band hone par bhi barcode scan hoga, bill banega, aur thermal receipt turant print hogi. Net aane par data apne-aap sync ho jata hai."
    },
    {
      id: "faq-4",
      question: "Kya humara purana thermal printer aur barcode scanner chalega?",
      answer:
        "Haan, sabhi standard 2-inch (58mm) aur 3-inch (80mm) thermal receipt printers (TVS, NGX, USB, Bluetooth, LAN) aur USB handheld scanners seedha plug-and-play chalte hain."
    },
    {
      id: "faq-5",
      question: "Register ya Excel se purana saamaan ka hisaab kaise aayega?",
      answer:
        "Excel ya CSV file se poora product catalog kuch hi minutes mein import ho jata hai. Setup session ke dauran humari team aapke saath connect karke poori list upload karwati hai."
    }
  ];

  const whatsappMessage = encodeURIComponent(
    "Namaste WebRajya, mujhe software ke baare mein kuch sawaal poochhne hain."
  );
  const whatsappUrl = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-24 bg-white border-t border-[#020C2B]/10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-bold">
            Aapke Sawaal
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#020C2B] tracking-tight">
            Dukaandaaron Ke Aksar Pooche Jaane Wale Sawaal
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            WebRajya shuru karne ke baare mein jo zaroori baatein aap jaan-na chahte hain.
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
          <p className="text-xs text-slate-500 font-medium">
            Koi aur sawaal hai? Seedha humari team se baat karein:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold hover:bg-emerald-100 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Par Poochhein</span>
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
