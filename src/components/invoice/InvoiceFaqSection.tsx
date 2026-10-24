import React from "react";
import { HelpCircle } from "lucide-react";

export function InvoiceFaqSection() {
  const FAQS = [
    {
      question: "What is WebRajya Invoice?",
      answer: "WebRajya Invoice is a billing and business-management application designed for Indian retailers, stationery shops, wholesalers and other small businesses. It brings invoicing, products, inventory, customers, payments and business reports into one platform."
    },
    {
      question: "How much does WebRajya Invoice cost?",
      answer: "The introductory annual price is ₹2,499. Applicable taxes, subscription conditions and renewal terms are displayed clearly before purchase."
    },
    {
      question: "Can I use WebRajya Invoice without the internet?",
      answer: "WebRajya Invoice is designed around a local-first architecture. Offline availability depends on the supported feature, initial setup and device configuration. Check the published compatibility details to understand which workflows are available offline."
    },
    {
      question: "Does it support barcode scanners?",
      answer: "The application is designed to support compatible barcode scanners and product lookup. Compatibility depends on the scanner and the configured workflow."
    },
    {
      question: "Can I print bills?",
      answer: "The application supports the printing methods and invoice formats listed in its current compatibility documentation (including standard ESC/POS 3-inch thermal printers and A4 laser printers). Check supported printer models and configurations before purchasing if your shop relies on a particular printer."
    },
    {
      question: "Can I manage inventory?",
      answer: "Yes, the product is designed to connect billing with product and stock management, including supported stock updates and inventory reports."
    },
    {
      question: "Does it support GST billing?",
      answer: "WebRajya Invoice is designed to support configurable GST and non-GST billing workflows. Confirm that the applicable tax calculations and invoice requirements are supported for your business before relying on it for compliance."
    },
    {
      question: "Can I import my existing product list?",
      answer: "The product provides a documented Excel/CSV import workflow if this feature is available in your current release. Check the supported file format and import instructions before preparing your catalog."
    },
    {
      question: "What happens if my computer stops working?",
      answer: "Use the backup and export options provided by your installed version. Before relying on the software for critical business records, confirm that backups are available and that restoration to another device has been tested."
    },
    {
      question: "Is WebRajya Invoice suitable for stationery shops?",
      answer: "Yes. Stationery shops are one of the intended customer segments, particularly businesses that need quick product lookup, barcode support, inventory tracking and regular invoice printing."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#F8FAFC] border-t border-[#E2E8F0] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
            Got Questions? We Have Answers.
          </h2>
          <p className="text-[#64748B] text-sm sm:text-base">
            Everything you need to know about WebRajya Invoice before getting started.
          </p>
        </div>

        {/* 10 FAQ Cards */}
        <div className="space-y-4">
          {FAQS.map(faq => (
            <div
              key={faq.question}
              className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-2 hover:border-[#2563EB]/40 transition-colors"
            >
              <h3 className="font-bold text-[#0F172A] text-base sm:text-lg flex items-start gap-2.5">
                <HelpCircle className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <span>{faq.question}</span>
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed font-normal pl-7.5">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
