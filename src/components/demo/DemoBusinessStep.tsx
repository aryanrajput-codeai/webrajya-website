import React from "react";
import { Utensils, Store, Briefcase, Truck, UserCheck, HelpCircle, CheckCircle2 } from "lucide-react";
import { BusinessTypeOption } from "@/lib/demoSubmission";

interface DemoBusinessStepProps {
  businessType: BusinessTypeOption | string;
  businessName: string;
  errors: Record<string, string>;
  onSelectType: (type: BusinessTypeOption | string) => void;
  onChangeName: (name: string) => void;
}

export function DemoBusinessStep({
  businessType,
  businessName,
  errors,
  onSelectType,
  onChangeName
}: DemoBusinessStepProps) {
  const options: { label: BusinessTypeOption; icon: React.ReactNode }[] = [
    { label: "Restaurant / Café", icon: <Utensils className="w-4 h-4 text-[#E58145]" /> },
    { label: "Retail / Local Business", icon: <Store className="w-4 h-4 text-[#E58145]" /> },
    { label: "Agency / Service Business", icon: <Briefcase className="w-4 h-4 text-[#E58145]" /> },
    { label: "Distributor / B2B Business", icon: <Truck className="w-4 h-4 text-[#E58145]" /> },
    { label: "Freelancer / Professional", icon: <UserCheck className="w-4 h-4 text-[#E58145]" /> },
    { label: "Other", icon: <HelpCircle className="w-4 h-4 text-[#020C2B]" /> }
  ];

  return (
    <div className="space-y-6 font-sans">
      <div className="space-y-1">
        <span className="text-xs font-mono uppercase text-[#E58145] tracking-wider font-bold block">
          STEP 01 OF 04
        </span>
        <h2 className="text-2xl font-extrabold text-[#020C2B]">
          Tell us about your business
        </h2>
        <p className="text-xs text-[#525866]">
          Select your operational business type so we can customize your demo walkthrough.
        </p>
      </div>

      {/* Business Type Selector Grid */}
      <div className="space-y-2">
        <label className="text-xs font-mono text-[#020C2B] font-bold block">
          Select Business Type *
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {options.map(opt => {
            const isSelected = businessType === opt.label;
            return (
              <button
                key={opt.label}
                type="button"
                onClick={() => onSelectType(opt.label)}
                className={`p-3.5 rounded-2xl border text-xs font-mono font-bold flex items-center justify-between transition-all cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-[#E58145] ${
                  isSelected
                    ? "bg-[#020C2B] text-white border-[#E58145] shadow-md"
                    : "bg-[#F8F3EB] border-[#020C2B]/10 text-[#020C2B] hover:border-[#E58145]/40 hover:bg-white"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {opt.icon}
                  <span>{opt.label}</span>
                </div>
                {isSelected && <CheckCircle2 className="w-4 h-4 text-[#E58145] shrink-0" />}
              </button>
            );
          })}
        </div>
        {errors.businessType && (
          <p id="businessType-error" className="text-xs font-mono text-rose-600 pt-1">
            {errors.businessType}
          </p>
        )}
      </div>

      {/* Business Name Input */}
      <div className="space-y-2">
        <label htmlFor="businessName-input" className="text-xs font-mono text-[#020C2B] font-bold block">
          Business / Venue Name *
        </label>
        <input
          id="businessName-input"
          type="text"
          value={businessName}
          onChange={e => onChangeName(e.target.value)}
          placeholder="e.g. Royal Feast Cafe or Acme Digital"
          aria-invalid={!!errors.businessName}
          aria-describedby={errors.businessName ? "businessName-error" : undefined}
          className={`w-full bg-[#F8F3EB] border rounded-xl px-4 py-3 text-[#020C2B] text-sm focus:outline-none focus:border-[#E58145] focus:ring-2 focus:ring-[#E58145]/20 font-medium ${
            errors.businessName ? "border-rose-500 bg-rose-50/50" : "border-[#020C2B]/15"
          }`}
        />
        {errors.businessName && (
          <p id="businessName-error" className="text-xs font-mono text-rose-600">
            {errors.businessName}
          </p>
        )}
      </div>
    </div>
  );
}
