"use client";

import React, { useState } from "react";
import { ShoppingBag, Printer, ChefHat, Utensils, FileText, CreditCard, Boxes, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";

interface WorkflowStep {
  id: string;
  stepNumber: number;
  title: string;
  icon: React.ReactNode;
  summary: string;
  detail: string;
  badge: string;
}

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: "order",
    stepNumber: 1,
    title: "ORDER",
    icon: <ShoppingBag className="w-5 h-5 text-[#E58145]" />,
    summary: "Fast order capture at POS or via Table QR Code.",
    detail: "Waiters or customers take orders on tablets, mobile POS, or QR dining. Modifiers, notes, and guest counts are attached directly.",
    badge: "Front of House"
  },
  {
    id: "kot",
    stepNumber: 2,
    title: "KOT",
    icon: <Printer className="w-5 h-5 text-[#E58145]" />,
    summary: "Automatic Kitchen Order Ticket generation & routing.",
    detail: "Orders trigger automatic KOT prints to designated kitchen sections (Tandoor, Mains, Bar, Pantry) without delay.",
    badge: "Thermal Routing"
  },
  {
    id: "kitchen",
    stepNumber: 3,
    title: "KITCHEN",
    icon: <ChefHat className="w-5 h-5 text-[#E58145]" />,
    summary: "Kitchen Display System (KDS) prep management.",
    detail: "Chefs view incoming orders sorted by prep time. Mark items as 'Preparing', 'Ready', or 'Out of Stock' in real time.",
    badge: "Kitchen Display"
  },
  {
    id: "serve",
    stepNumber: 4,
    title: "SERVE",
    icon: <Utensils className="w-5 h-5 text-[#E58145]" />,
    summary: "Floor notification for fast table serving.",
    detail: "Captains get pinged when dishes are hot and ready. Table status updates to 'Dining' without communication delays.",
    badge: "Floor Layout"
  },
  {
    id: "bill",
    stepNumber: 5,
    title: "BILL",
    icon: <FileText className="w-5 h-5 text-[#E58145]" />,
    summary: "One-tap table bill generation & check splitting.",
    detail: "Generate tax-compliant bills with customized discounts, item splits, and member loyalty points attached automatically.",
    badge: "POS Checkout"
  },
  {
    id: "payment",
    stepNumber: 6,
    title: "PAYMENT",
    icon: <CreditCard className="w-5 h-5 text-[#E58145]" />,
    summary: "Seamless payment processing (UPI, Card, Cash).",
    detail: "Accept payments via integrated card terminals, dynamic UPI QR codes, or split modes. Receipts print or send to WhatsApp.",
    badge: "Multi-Mode Pay"
  },
  {
    id: "inventory",
    stepNumber: 7,
    title: "INVENTORY",
    icon: <Boxes className="w-5 h-5 text-[#E58145]" />,
    summary: "Real-time recipe ingredient auto-deduction.",
    detail: "As bills are settled, raw ingredient stock (cheese, flour, protein) is automatically deducted based on master recipes.",
    badge: "Stock Deduction"
  },
  {
    id: "reports",
    stepNumber: 8,
    title: "REPORTS",
    icon: <TrendingUp className="w-5 h-5 text-[#E58145]" />,
    summary: "Live owner dashboard analytics & profit margins.",
    detail: "Daily sales, hourly rush charts, top-grossing items, food cost percentage, and wastage reports update immediately.",
    badge: "Owner Insights"
  }
];

export function RestaurantWorkflow() {
  const [activeStep, setActiveStep] = useState<WorkflowStep>(WORKFLOW_STEPS[0]);

  return (
    <section id="pos-workflow" className="py-24 bg-[#F8F3EB] border-t border-[#020C2B]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase text-[#020C2B] tracking-wider bg-[#020C2B]/5 px-3.5 py-1.5 rounded-full border border-[#020C2B]/15 font-semibold">
            Connected Operations Engine
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            The End-to-End Restaurant Workflow
          </h2>
          <p className="text-[#525866] text-base sm:text-lg">
            See how WebRajya POS unifies your entire restaurant floor, kitchen, register, and inventory into one continuous stream.
          </p>
        </div>

        {/* Workflow Chain Visualizer */}
        <div className="p-6 rounded-3xl bg-white border border-[#020C2B]/10 shadow-sm space-y-8">
          
          {/* Step Pill Chain */}
          <div className="flex items-center justify-between overflow-x-auto pb-4 gap-2 no-scrollbar">
            {WORKFLOW_STEPS.map((step, idx) => {
              const isSelected = activeStep.id === step.id;
              return (
                <React.Fragment key={step.id}>
                  <button
                    onClick={() => setActiveStep(step)}
                    className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl border text-xs font-mono font-semibold transition-all shrink-0 cursor-pointer ${
                      isSelected
                        ? "bg-[#E58145] text-white border-[#E58145] shadow-md scale-105"
                        : "bg-[#F8F3EB] text-[#020C2B] border-[#020C2B]/10 hover:border-[#E58145] hover:text-[#E58145]"
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center ${
                      isSelected ? "bg-[#020C2B] text-white font-bold" : "bg-[#020C2B]/10 text-[#020C2B]"
                    }`}>
                      {step.stepNumber}
                    </span>
                    <span>{step.title}</span>
                  </button>

                  {idx < WORKFLOW_STEPS.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 hidden sm:block" />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Selected Step Deep Dive Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF5EF] text-[#020C2B] border border-[#020C2B]/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center shadow-xl">
            
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E58145] text-white flex items-center justify-center font-bold shadow-sm">
                  {React.cloneElement(activeStep.icon as React.ReactElement<{ className?: string }>, { className: "w-5 h-5 text-white" })}
                </div>
                <div>
                  <span className="text-[10px] text-[#E58145] font-mono uppercase tracking-wider block font-semibold">
                    Step {activeStep.stepNumber} of 8 • {activeStep.badge}
                  </span>
                  <h3 className="text-2xl font-black text-[#020C2B]">{activeStep.title}</h3>
                </div>
              </div>

              <p className="text-base font-semibold text-[#E58145]">{activeStep.summary}</p>
              <p className="text-sm text-[#525866] leading-relaxed">{activeStep.detail}</p>
            </div>

            <div className="md:col-span-4 p-5 rounded-xl bg-white border border-[#020C2B]/10 space-y-3 font-mono text-xs text-[#525866] shadow-xs">
              <div className="flex justify-between pb-2 border-b border-[#020C2B]/10">
                <span>Operation Status:</span>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Synchronized
                </span>
              </div>
              <div className="flex justify-between">
                <span>Response:</span>
                <span className="text-[#020C2B] font-bold">Real-time</span>
              </div>
              <div className="flex justify-between">
                <span>Offline Safe:</span>
                <span className="text-[#020C2B] font-bold">Yes (Auto-Sync)</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
