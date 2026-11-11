import React from "react";
import { Utensils, FileText, HelpCircle, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";
import { ProductInterestOption, PlanInterestOption } from "@/lib/demoSubmission";

interface DemoProductStepProps {
  productInterest: ProductInterestOption;
  planInterest?: PlanInterestOption;
  errors: Record<string, string>;
  onSelectProduct: (product: ProductInterestOption) => void;
  onSelectPlan: (plan: PlanInterestOption) => void;
}

export function DemoProductStep({
  productInterest,
  planInterest = "yearly",
  errors,
  onSelectProduct,
  onSelectPlan
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
      description: "Billing, orders, kitchen KOT, tables, and restaurant operations.",
      icon: <Utensils className="w-5 h-5 text-[#E58145]" />
    },
    {
      id: "invoice",
      title: "WebRajya Invoice",
      description: "Retail billing, barcodes, inventory, customers, and khata ledger.",
      icon: <FileText className="w-5 h-5 text-[#E58145]" />
    },
    {
      id: "not_sure",
      title: "Need Both / Not Sure Yet",
      description: "Tell us about your setup and we will guide you to the right solution.",
      icon: <HelpCircle className="w-5 h-5 text-[#020C2B]" />
    }
  ];

  const plans: {
    id: PlanInterestOption;
    name: string;
    priceLabel: string;
    description: string;
    badge?: string;
  }[] = [
    {
      id: "monthly",
      name: "Monthly Plan",
      priceLabel: "₹599 / month",
      description: "Flexible month-to-month billing with full core features."
    },
    {
      id: "yearly",
      name: "Yearly Plan",
      priceLabel: "₹5,999 / year (~₹500/mo)",
      description: "Billed annually. Saves ₹1,189 compared to monthly payments.",
      badge: "Best Value"
    },
    {
      id: "lifetime",
      name: "Lifetime License",
      priceLabel: "₹25,999 one-time",
      description: "Pay once, use forever. No recurring software subscriptions.",
      badge: "Pay once, use forever"
    },
    {
      id: "not_sure",
      name: "Decide During Demo",
      priceLabel: "Not sure yet",
      description: "We will help you evaluate the right billing cadence on the call."
    }
  ];

  return (
    <div className="space-y-8 font-sans">
      {/* Product Selection */}
      <div className="space-y-4">
        <div className="space-y-1">
          <span className="text-xs font-mono uppercase text-[#E58145] tracking-wider font-bold block">
            STEP 02 OF 04
          </span>
          <h2 className="text-2xl font-extrabold text-[#020C2B]">
            Product &amp; Plan Interest
          </h2>
          <p className="text-xs text-[#525866]">
            1. Select the WebRajya software module you would like to explore:
          </p>
        </div>

        <div className="space-y-3">
          {products.map((prod) => {
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
                    <h3 className={`font-bold text-sm font-sans ${isSelected ? "text-white" : "text-[#020C2B]"}`}>
                      {prod.title}
                    </h3>
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

      {/* Plan Interest Selection */}
      <div className="space-y-3 pt-2 border-t border-[#020C2B]/10">
        <div className="space-y-0.5">
          <label className="text-xs font-bold text-[#020C2B] block">
            2. Which plan cadence are you interested in?
          </label>
          <p className="text-[11px] text-[#525866]">
            All core features are included in every plan. No commitment required.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {plans.map((plan) => {
            const isSelected = planInterest === plan.id;
            return (
              <button
                key={plan.id}
                type="button"
                onClick={() => onSelectPlan(plan.id)}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer relative flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#020C2B] text-white border-[#E58145] shadow-sm"
                    : "bg-[#F8F3EB] border-[#020C2B]/10 text-[#020C2B] hover:bg-white hover:border-[#E58145]/30"
                }`}
              >
                {plan.badge && (
                  <span
                    className={`absolute -top-2 right-2 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider ${
                      isSelected
                        ? "bg-[#E58145] text-white"
                        : "bg-[#020C2B] text-white"
                    }`}
                  >
                    {plan.badge}
                  </span>
                )}
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold font-sans ${isSelected ? "text-white" : "text-[#020C2B]"}`}>
                      {plan.name}
                    </span>
                    {isSelected && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E58145]" />
                    )}
                  </div>
                  <span
                    className={`text-[11px] font-mono font-extrabold block mt-0.5 ${
                      isSelected ? "text-[#E58145]" : "text-[#020C2B]"
                    }`}
                  >
                    {plan.priceLabel}
                  </span>
                </div>
                <p className={`text-[10px] mt-1.5 leading-snug ${isSelected ? "text-slate-300" : "text-[#64748B]"}`}>
                  {plan.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
