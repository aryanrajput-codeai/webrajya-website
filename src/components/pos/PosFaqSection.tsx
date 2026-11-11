import React from "react";
import { HelpCircle } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const posFaqs = PRODUCTS.find(p => p.id === "pos")?.faqs || [];

const ADDITIONAL_FAQS = [
  {
    question: "Can waiters take orders on Android or iOS mobile phones?",
    answer: "Yes! WebRajya POS supports mobile captain ordering. Waiters can use Android or iOS phones/tablets to punch orders right at the guest table, automatically sending KOTs to the kitchen."
  },
  {
    question: "How does recipe ingredient deduction work?",
    answer: "You link raw ingredients to menu items in your master recipe settings. Whenever an item is billed, WebRajya automatically deducts the exact raw portion (e.g. 150g flour, 20g cheese) from your live kitchen inventory."
  },
  {
    question: "Can I manage multiple kitchen sections like Bar, Tandoor, and Bakery?",
    answer: "Yes. WebRajya POS routes items automatically. Drinks go to the Bar thermal printer, tandoori dishes go to the Tandoor section KDS screen, and desserts go to the Bakery counter."
  }
];

export function PosFaqSection() {
  const allFaqs = [...posFaqs, ...ADDITIONAL_FAQS];

  return (
    <section className="py-24 bg-[#F8F3EB] border-t border-[#020C2B]/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="text-center space-y-3">
          <Badge variant="pos">POS Knowledge Base</Badge>
          <h2 className="text-3xl sm:text-4xl font-black text-[#020C2B] tracking-tight">
            WebRajya POS Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Everything you need to know about restaurant and QSR billing workflows.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-[#020C2B]/10 p-6 sm:p-8 shadow-xs">
          <Accordion className="space-y-4">
            {allFaqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`pos-faq-${index}`}
                className="rounded-2xl border border-[#020C2B]/10 p-2 sm:p-3 overflow-hidden"
              >
                <AccordionTrigger className="font-bold text-sm sm:text-base text-[#020C2B] px-3 hover:no-underline cursor-pointer">
                  <span className="flex items-center gap-3 text-left">
                    <HelpCircle className="w-5 h-5 text-[#D97706] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-3 pt-2 text-[#020C2B]/80 text-xs sm:text-sm leading-relaxed pl-11">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
}
