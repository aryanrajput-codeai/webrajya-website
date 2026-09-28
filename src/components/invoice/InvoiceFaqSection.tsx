import React from "react";
import { PRODUCTS } from "@/data/products";

const invoiceFaqs = PRODUCTS.find(p => p.id === "invoice")?.faqs || [];

const ADDITIONAL_INVOICE_FAQS = [
  {
    question: "Is WebRajya Invoice suitable for both services and physical products?",
    answer: "Yes! WebRajya Invoice supports both itemized physical product sales and hourly or project-based service billing with customizable rate cards."
  },
  {
    question: "Can clients pay directly through the invoice link?",
    answer: "Yes, every digital invoice contains embedded payment options including UPI QR codes, bank transfer details, and online payment links for instant settlement."
  },
  {
    question: "Can I export my financial data for my accountant?",
    answer: "Absolutely. WebRajya Invoice provides one-click CSV and PDF exports for monthly sales ledgers, tax breakdowns, and customer receivables."
  }
];

export function InvoiceFaqSection() {
  const allFaqs = [...invoiceFaqs, ...ADDITIONAL_INVOICE_FAQS];

  return (
    <section className="py-24 bg-[#F8F3EB] border-t border-[#020C2B]/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase text-[#E58145] tracking-wider bg-[#E58145]/10 px-3 py-1 rounded-full border border-[#E58145]/20 font-bold">
            Platform Help
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#020C2B] tracking-tight">
            WebRajya Invoice Frequently Asked Questions
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
