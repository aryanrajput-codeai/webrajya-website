import React from "react";
import { PRODUCTS } from "@/data/products";

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
          <span className="text-xs font-mono uppercase text-[#E58145] tracking-wider bg-[#E58145]/10 px-3 py-1 rounded-full border border-[#E58145]/20 font-bold">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#020C2B] tracking-tight">
            WebRajya POS Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {allFaqs.map(faq => (
            <div key={faq.question} className="p-6 rounded-2xl bg-white border border-[#020C2B]/10 shadow-sm space-y-2">
              <h3 className="font-bold text-[#020C2B] text-base sm:text-lg">{faq.question}</h3>
              <p className="text-sm text-[#020C2B]/80 leading-relaxed font-normal">{faq.answer}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
