import React from "react";
import { Utensils, FileText, HelpCircle, CheckCircle2 } from "lucide-react";
import { ProductInterestOption } from "@/lib/demoSubmission";

interface DemoProductStepProps {
  productInterest: ProductInterestOption;
  errors: Record<string, string>;
  onSelectProduct: (product: ProductInterestOption) => void;
}

export function DemoProductStep({
  productInterest,
  errors,
  onSelectProduct
}: DemoProductStepProps) {
  const products: {
    id: ProductInterestOption;
    title: string;
    description: string;
    icon: React.ReactNode;
  }[] = [
    {
      id: "pos",
      title: "WebRajya POS",
      description: "Billing, orders, kitchen, payments and restaurant operations.",
      icon: <Utensils className="w-5 h-5 text-[#E58145]" />
    },
    {
      id: "invoice",
      title: "WebRajya Invoice",
      description: "Professional invoicing, customers, payments and receivables.",
      icon: <FileText className="w-5 h-5 text-[#E58145]" />
    },
    {
      id: "not_sure",
      title: "Not sure yet",
      description: "Tell us about your business and we'll help you choose.",
      icon: <HelpCircle className="w-5 h-5 text-[#020C2B]" />
    }
  ];

  return (
    <div className="space-y-6 font-sans">
      <div className="space-y-1">
        <span className="text-xs font-mono uppercase text-[#E58145] tracking-wider font-bold block">
          STEP 02 OF 04
        </span>
        <h2 className="text-2xl font-extrabold text-[#020C2B]">
          What are you interested in?
        </h2>
        <p className="text-xs text-[#525866]">
          Choose the WebRajya software module you would like to explore.
        </p>
      </div>

      <div className="space-y-3">
        {products.map(prod => {
          const isSelected = productInterest === prod.id;
          return (
            <button
              key={prod.id}
              type="button"
              onClick={() => onSelectProduct(prod.id)}
              className={`w-full p-4 rounded-2xl border text-left flex items-start justify-between transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E58145] ${
                isSelected
                  ? "bg-[#020C2B] text-white border-[#E58145] shadow-md"
                  : "bg-[#F8F3EB] border-[#020C2B]/10 text-[#020C2B] hover:border-[#E58145]/40 hover:bg-white"
              }`}
            >
              <div className="flex items-start gap-3 pr-4">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  {prod.icon}
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white font-sans">{prod.title}</h3>
                  <p className={`text-xs mt-0.5 leading-relaxed ${isSelected ? "text-slate-300" : "text-[#525866]"}`}>
                    {prod.description}
                  </p>
                </div>
              </div>

              {isSelected && (
                <CheckCircle2 className="w-5 h-5 text-[#E58145] shrink-0 mt-1" />
              )}
            </button>
          );
        })}
      </div>

      {errors.productInterest && (
        <p className="text-xs font-mono text-rose-600">
          {errors.productInterest}
        </p>
      )}
    </div>
  );
}
