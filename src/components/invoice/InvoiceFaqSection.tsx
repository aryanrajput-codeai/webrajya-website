import React from "react";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";

export function InvoiceFaqSection() {
  const FAQS = [
    {
      id: "what-is-invoice",
      question: "What is WebRajya Invoice?",
      answer: "WebRajya Invoice is a billing and business-management application designed for Indian retailers, stationery shops, wholesalers and other small businesses. It brings invoicing, products, inventory, customers, payments and business reports into one platform."
    },
    {
      id: "how-much-cost",
      question: "How much does WebRajya Invoice cost?",
      answer: "WebRajya Invoice offers three straightforward plans: Monthly at ₹599/month, Yearly at ₹5,999/year (about ₹500/month; saves ₹1,189 vs paying monthly), and a Lifetime license at ₹25,999 one-time payment. All plans include full access to billing, inventory, and khata management."
    },
    {
      id: "offline-access",
      question: "Can I use WebRajya Invoice without the internet?",
      answer: "WebRajya Invoice is designed around a local-first architecture. Offline availability depends on the supported feature, initial setup and device configuration. Check the published compatibility details to understand which workflows are available offline."
    },
    {
      id: "barcode-scanners",
      question: "Does it support barcode scanners?",
      answer: "The application is designed to support compatible barcode scanners and product lookup. Compatibility depends on the scanner and the configured workflow."
    },
    {
      id: "print-bills",
      question: "Can I print bills?",
      answer: "The application supports the printing methods and invoice formats listed in its current compatibility documentation (including standard ESC/POS 3-inch thermal printers and A4 laser printers). Check supported printer models and configurations before purchasing if your shop relies on a particular printer."
    },
    {
      id: "inventory-management",
      question: "Can I manage inventory?",
      answer: "Yes, the product is designed to connect billing with product and stock management, including supported stock updates and inventory reports."
    },
    {
      id: "gst-support",
      question: "Does it support GST billing?",
      answer: "WebRajya Invoice is designed to support configurable GST and non-GST billing workflows. Confirm that the applicable tax calculations and invoice requirements are supported for your business before relying on it for compliance."
    },
    {
      id: "import-products",
      question: "Can I import my existing product list?",
      answer: "The product provides a documented Excel/CSV import workflow if this feature is available in your current release. Check the supported file format and import instructions before preparing your catalog."
    },
    {
      id: "computer-failure",
      question: "What happens if my computer stops working?",
      answer: "Use the backup and export options provided by your installed version. Before relying on the software for critical business records, confirm that backups are available and that restoration to another device has been tested."
    },
    {
      id: "stationery-shops",
      question: "Is WebRajya Invoice suitable for stationery shops?",
      answer: "Yes. Stationery shops are one of the intended customer segments, particularly businesses that need quick product lookup, barcode support, inventory tracking and regular invoice printing."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#F8FAFC] border-t border-[#E2E8F0] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase text-[#2563EB] tracking-wider font-bold">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
            Got Questions? We Have Answers.
          </h2>
          <p className="text-[#64748B] text-sm sm:text-base">
            Everything you need to know about WebRajya Invoice before getting started.
          </p>
        </div>

        {/* 10 FAQ Items in Accordion */}
        <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 sm:p-8 shadow-xs">
          <Accordion className="space-y-4">
            {FAQS.map(faq => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="rounded-2xl border border-[#E2E8F0] p-2 sm:p-3 overflow-hidden"
              >
                <AccordionTrigger className="font-bold text-sm sm:text-base text-[#0F172A] px-3 hover:no-underline cursor-pointer">
                  <span className="flex items-center gap-3 text-left">
                    <HelpCircle className="w-5 h-5 text-[#2563EB] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-3 pt-2 text-[#64748B] text-xs sm:text-sm leading-relaxed pl-11">
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
