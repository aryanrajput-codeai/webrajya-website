import React from "react";
import { FileText, Plus, UserCheck, Package, Percent, FileCheck, CheckCircle2, ShieldCheck } from "lucide-react";

export function InvoiceCreationSection() {
  const CREATION_STEPS = [
    { title: "Select Customer", desc: "Choose existing client profile or auto-save new customer details.", icon: <UserCheck className="w-5 h-5 text-[#E58145]" /> },
    { title: "Add Products & Services", desc: "Select items from catalog or add custom line item descriptions.", icon: <Package className="w-5 h-5 text-[#E58145]" /> },
    { title: "Quantities & Pricing", desc: "Set quantities, unit rates, discounts, and custom pricing rules.", icon: <Plus className="w-5 h-5 text-[#E58145]" /> },
    { title: "Apply Applicable Taxes", desc: "Calculate regional taxes, GST, or custom tax rules automatically.", icon: <Percent className="w-5 h-5 text-[#E58145]" /> },
    { title: "Add Notes & Terms", desc: "Include bank transfer details, payment terms (Net 15/30), or thank-you notes.", icon: <FileCheck className="w-5 h-5 text-[#E58145]" /> },
    { title: "Generate Invoice", desc: "Export crisp PDF, print formatted bill, or dispatch direct share link.", icon: <FileText className="w-5 h-5 text-[#E58145]" /> }
  ];

  return (
    <section id="invoice-features" className="py-24 bg-[#F8F3EB] border-t border-[#020C2B]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase text-[#E58145] tracking-wider bg-[#E58145]/10 px-3.5 py-1 rounded-full border border-[#E58145]/20 font-bold">
            Frictionless Billing
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            Streamlined Invoice Creation
          </h2>
          <p className="text-[#020C2B]/80 text-base sm:text-lg">
            Create polished, professional invoices in seconds without spreadsheets or manual calculation errors.
          </p>
        </div>

        {/* 6 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CREATION_STEPS.map((step, idx) => (
            <div key={step.title} className="p-6 rounded-2xl bg-white border border-[#020C2B]/10 shadow-sm hover:border-[#E58145]/40 transition-all hover:-translate-y-1 space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#E58145]/10 border border-[#E58145]/20 flex items-center justify-center font-bold">
                  {step.icon}
                </div>
                <span className="text-xs font-mono text-[#020C2B]/50">Step 0{idx + 1}</span>
              </div>
              <h3 className="text-lg font-bold text-[#020C2B]">{step.title}</h3>
              <p className="text-xs text-[#020C2B]/70 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
