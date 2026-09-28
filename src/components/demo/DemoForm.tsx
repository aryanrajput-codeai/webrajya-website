"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, MessageSquare } from "lucide-react";
import {
  DemoLead,
  validateDemoStep,
  processWhatsAppDemoSubmission
} from "@/lib/demoSubmission";
import { trackDemoEvent } from "@/lib/analytics";
import { DemoBusinessStep } from "./DemoBusinessStep";
import { DemoProductStep } from "./DemoProductStep";
import { DemoDetailsStep } from "./DemoDetailsStep";
import { DemoScheduleStep } from "./DemoScheduleStep";
import { DemoSuccess } from "./DemoSuccess";

interface DemoFormProps {
  initialProduct?: "pos" | "invoice";
}

export function DemoForm({ initialProduct }: DemoFormProps) {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);

  const [lead, setLead] = useState<DemoLead>({
    fullName: "",
    businessName: "",
    businessType: "Restaurant / Café",
    productInterest: initialProduct || "pos",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [completedWhatsAppUrl, setCompletedWhatsAppUrl] = useState<string | null>(null);

  useEffect(() => {
    trackDemoEvent("demo_page_view", { initialProduct });
  }, [initialProduct]);

  useEffect(() => {
    if (initialProduct && (initialProduct === "pos" || initialProduct === "invoice")) {
      setLead(prev => ({ ...prev, productInterest: initialProduct }));
    }
  }, [initialProduct]);

  const handleNextStep = () => {
    const stepErrors = validateDemoStep(currentStep, lead);
    setErrors(stepErrors);

    if (Object.keys(stepErrors).length === 0) {
      if (currentStep === 1) {
        trackDemoEvent("demo_business_selected", {
          type: lead.businessType
        });
      } else if (currentStep === 2) {
        trackDemoEvent("demo_product_selected", {
          product: lead.productInterest
        });
      } else if (currentStep === 3) {
        trackDemoEvent("demo_form_started");
      }

      if (currentStep < 4) {
        setCurrentStep((currentStep + 1) as any);
      }
    }
  };

  const handlePrevStep = () => {
    setErrors({});
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as any);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const stepErrors = validateDemoStep(4, lead);
    setErrors(stepErrors);

    if (Object.keys(stepErrors).length > 0) {
      return;
    }

    // Generate WhatsApp URL and attempt to launch window
    const result = processWhatsAppDemoSubmission(lead);
    setCompletedWhatsAppUrl(result.whatsappUrl);

    if (result.openedSuccessfully) {
      trackDemoEvent("demo_whatsapp_opened", {
        product: lead.productInterest,
        businessType: lead.businessType
      });
    } else {
      trackDemoEvent("demo_whatsapp_open_failed", {
        product: lead.productInterest,
        businessType: lead.businessType
      });
    }
  };

  if (completedWhatsAppUrl) {
    return <DemoSuccess lead={lead} whatsappUrl={completedWhatsAppUrl} />;
  }

  const stepsHeader = [
    { num: 1, label: "Business" },
    { num: 2, label: "Product" },
    { num: 3, label: "Details" },
    { num: 4, label: "Schedule" }
  ];

  return (
    <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#020C2B]/10 shadow-xl space-y-8 font-sans relative">
      
      {/* Step Progress Bar */}
      <div className="space-y-3 pb-4 border-b border-[#020C2B]/10">
        <div className="flex items-center justify-between text-xs font-mono">
          {stepsHeader.map(s => {
            const isActive = currentStep === s.num;
            const isCompleted = currentStep > s.num;
            return (
              <div key={s.num} className="flex items-center gap-1.5">
                <span
                  className={`w-6 h-6 rounded-full text-[11px] flex items-center justify-center font-bold transition-all ${
                    isActive
                      ? "bg-[#E58145] text-white shadow-sm"
                      : isCompleted
                      ? "bg-[#020C2B] text-white"
                      : "bg-[#020C2B]/10 text-[#525866]"
                  }`}
                >
                  {s.num}
                </span>
                <span
                  className={`hidden sm:inline font-semibold ${
                    isActive ? "text-[#020C2B]" : "text-[#525866]"
                  }`}
                >
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Visual Progress Bar */}
        <div className="w-full h-1.5 bg-[#F8F3EB] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#E58145] transition-all duration-300 rounded-full"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          />
        </div>
      </div>

      {/* Multi-Step Form */}
      <form onSubmit={handleSubmit} className="space-y-8">
        {currentStep === 1 && (
          <DemoBusinessStep
            businessType={lead.businessType}
            businessName={lead.businessName}
            errors={errors}
            onSelectType={type => setLead(prev => ({ ...prev, businessType: type }))}
            onChangeName={name => setLead(prev => ({ ...prev, businessName: name }))}
          />
        )}

        {currentStep === 2 && (
          <DemoProductStep
            productInterest={lead.productInterest}
            errors={errors}
            onSelectProduct={prod => setLead(prev => ({ ...prev, productInterest: prod }))}
          />
        )}

        {currentStep === 3 && (
          <DemoDetailsStep
            fullName={lead.fullName}
            businessName={lead.businessName}
            phone={lead.phone}
            email={lead.email}
            message={lead.message}
            errors={errors}
            onChangeField={(field, val) => setLead(prev => ({ ...prev, [field]: val }))}
          />
        )}

        {currentStep === 4 && (
          <DemoScheduleStep
            preferredDate={lead.preferredDate}
            preferredTime={lead.preferredTime}
            errors={errors}
            onChangeField={(field, val) => setLead(prev => ({ ...prev, [field]: val }))}
          />
        )}

        {/* Privacy Notice */}
        <div className="pt-2 text-[11px] text-[#525866] font-mono leading-relaxed border-t border-[#020C2B]/10">
          By continuing to WhatsApp, you agree that WebRajya may use the information you provide to respond to your demo request. View our{" "}
          <Link href="/privacy" className="text-[#020C2B] underline font-semibold hover:text-[#E58145]">
            Privacy Policy
          </Link>.
        </div>

        {/* Step Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handlePrevStep}
              className="px-5 py-3 rounded-2xl bg-[#F8F3EB] border border-[#020C2B]/10 text-[#020C2B] text-xs font-mono font-bold hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E58145]"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
          ) : (
            <div />
          )}

          {currentStep < 4 ? (
            <button
              type="button"
              onClick={handleNextStep}
              className="px-6 py-3 rounded-2xl bg-[#020C2B] hover:bg-[#E58145] text-white text-xs font-mono font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md focus:outline-none focus:ring-2 focus:ring-[#E58145]"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <div className="space-y-2 text-right">
              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl font-mono font-bold text-xs bg-[#E58145] hover:bg-[#020C2B] text-white flex items-center justify-center gap-2 shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#E58145] cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Continue on WhatsApp</span>
              </button>
              <p className="text-[11px] text-[#525866] font-mono text-center sm:text-right">
                Your request will open in WhatsApp with the details filled in. Review the message and tap Send.
              </p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
