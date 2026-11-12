import React from "react";
import { AlertCircle, CheckCircle2, Zap, PackageX, Calculator, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ProblemToSolutionStrip() {
  const PAIRS = [
    {
      problemTitle: "Rush Hours Mein Counter Par Lambi Bheed",
      problemDesc:
        "Shaam ke rush mein haath se bill banana ya calculation karna grahak ko pareshan karta hai aur line lambi hoti hai.",
      solutionTitle: "Barcode Scan Se 2 Second Mein Bill Ready",
      solutionDesc:
        "Item barcode beep karein ya keyboard shortcut dabayein. 3-inch thermal printer se turant saaf receipt nikalein.",
      icon: Zap
    },
    {
      problemTitle: "Stock Khatam Hone Ka Pata Na Chalna",
      problemDesc:
        "Dukaan mein popular model ya size khatam ho jata hai aur pata tab chalta hai jab grahak khali haath laut jata hai.",
      solutionTitle: "Live Stock Update Aur Low-Stock Alert",
      solutionDesc:
        "Har bill ke saath live stock automatic kam hota hai. Maal khatam hone se pehle software aapko warning deta hai.",
      icon: PackageX
    },
    {
      problemTitle: "GST Aur Tax Calculation Ka Jhanjhat",
      problemDesc:
        "Alag-alag GST slab aur HSN code ka hisaab jodte-jodte dukaandaar ka ghanto ka time kharab hota hai.",
      solutionTitle: "Automated GST & Non-GST Bilkul Saaf",
      solutionDesc:
        "Kachcha thermal bill ya pakka A4 GST invoice — software automatic CGST, SGST aur tax breakdown jod deta hai.",
      icon: Calculator
    },
    {
      problemTitle: "Bahi-Khate Mein Udhaar Ka Hisaab Bhoolna",
      problemDesc:
        "Purane register mein likha udhaar panna phatne ya bhool jane se dukaandaar ka mehnat ka paisa atak jata hai.",
      solutionTitle: "Surakshit Customer Khata & WhatsApp Reminder",
      solutionDesc:
        "Grahak ka hisaab software mein safe rehta hai. Payment reminder seedha grahak ke WhatsApp par bhejein.",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-24 bg-white border-y border-[#020C2B]/10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-bold">
            Dukaan Ki Roz Ki Dikkaton Ka Hal
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            Register Aur Purane Software Ke Jhanjhat Se Azaadi
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Dekhiye WebRajya aapki dukaan ka hisaab-kitaab aur counter billing kaise aasaan aur tez banata hai.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PAIRS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="rounded-3xl p-6 sm:p-8 bg-[#F8F3EB]/60 border border-slate-200 shadow-xs flex flex-col justify-between space-y-6"
              >
                {/* Problem Block */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-rose-600 text-xs font-mono font-bold uppercase tracking-wide">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Roz Ki Pareshani</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">{item.problemTitle}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.problemDesc}
                  </p>
                </div>

                {/* Solution Block */}
                <div className="pt-5 border-t border-slate-200/80 space-y-2 bg-white -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-6 sm:p-8 rounded-b-3xl">
                  <div className="flex items-center gap-2 text-emerald-700 text-xs font-mono font-bold uppercase tracking-wide">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                    <span>WebRajya Ka Aasaan Hal</span>
                  </div>
                  <h4 className="text-base font-bold text-[#020C2B] flex items-center gap-2">
                    <Icon className="w-4 h-4 text-[#2563EB]" />
                    {item.solutionTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.solutionDesc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

