"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  Utensils,
  FileText,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from "@/components/ui/table";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";
import {
  PRICING_CONFIG,
  GST_CONFIG,
  FEATURE_INCLUSION_ASSUMPTION_NOTE,
  LIFETIME_PLAN_SPECS
} from "@/config/pricing";

function PricingContent() {
  const searchParams = useSearchParams();
  const rawProduct = searchParams.get("product");

  const initialTab = rawProduct === "pos" ? "pos" : "invoice";
  const [activeTab, setActiveTab] = useState<"pos" | "invoice">(initialTab);

  useEffect(() => {
    if (rawProduct === "pos" || rawProduct === "invoice") {
      setActiveTab(rawProduct);
    }
  }, [rawProduct]);

  const currentProduct = PRICING_CONFIG[activeTab];
  const plans = currentProduct.plans || [];

  const accentColor = activeTab === "invoice" ? "#2563EB" : "#E58145";
  const accentBg = activeTab === "invoice" ? "bg-[#2563EB]" : "bg-[#E58145]";
  const accentBorder = activeTab === "invoice" ? "border-[#2563EB]" : "border-[#E58145]";

  const FAQS = [
    {
      id: "faq-1",
      question: "How do renewals work for monthly and yearly plans?",
      answer:
        "Monthly plans renew every 30 days, while Yearly plans renew every 12 months from your activation date. We send proactive renewal reminders via email and WhatsApp well in advance so your billing counter never experiences unexpected downtime.",
      linkText: "Read Subscription & Renewal Policy",
      linkHref: "/subscription-policy"
    },
    {
      id: "faq-2",
      question: "Can I upgrade from Monthly → Yearly → Lifetime?",
      answer:
        "Yes, absolutely. You can start on a Monthly plan to evaluate WebRajya in your day-to-day workflow, and seamlessly upgrade to Yearly (to save ₹1,189 annually) or Lifetime (to eliminate recurring software fees permanently) at any point without losing any data."
    },
    {
      id: "faq-3",
      question: "What is your refund policy?",
      answer:
        "We offer full guided demo walkthroughs before onboarding to verify hardware and workflow fit. If you experience technical defects where the software fails its core advertised functions and our engineering team cannot resolve it within 14 days of written notice, you may request a pro-rated refund.",
      linkText: "Read Refund Policy",
      linkHref: "/refund"
    },
    {
      id: "faq-4",
      question: "Are prices inclusive or exclusive of GST?",
      answer:
        `Prices are currently listed as exclusive of GST (${GST_CONFIG.displayNote}). TODO: Confirm whether final prices are inclusive or exclusive of GST. Applicable tax invoices with your business GSTIN are generated upon purchase for input tax credit claims.`
    },
    {
      id: "faq-5",
      question: "What payment methods do you accept?",
      answer:
        "We accept all standard Indian commercial payment methods including UPI (Google Pay, PhonePe, Paytm, BHIM), Net Banking across all major Indian banks, Debit/Credit Cards (RuPay, Visa, Mastercard), and bank NEFT/IMPS transfers for annual or lifetime licensing.",
      linkText: "View billing and payment terms",
      linkHref: "/subscription-policy"
    },
    {
      id: "faq-6",
      question: "What happens to my data if I stop paying for a monthly or yearly plan?",
      answer:
        "Because WebRajya uses local-first data architecture, all your invoices, customer khata ledgers, receipts, and inventory records remain securely stored on your local computer or storage. If a subscription lapses, you retain access to your historical records; active billing operations resume as soon as the plan is renewed."
    },
    {
      id: "faq-7",
      question: "Can I use both WebRajya Invoice and WebRajya POS together?",
      answer:
        "Yes. While each software product has its own dedicated operational focus (Invoice for retail inventory & khata, POS for restaurant tables & KOTs), they can be deployed together within your business. We do not offer arbitrary bundle discounts, but our team can help configure your multi-product architecture.",
      linkText: "Talk to our team about dual setup",
      linkHref: "/demo?product=not_sure&intent=both"
    }
  ];

  return (
    <div className="w-full bg-[#F8F3EB] text-[#020C2B] min-h-screen pt-28 pb-20 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="pos">Transparent Pricing</Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            Simple, Honest Software Pricing
          </h1>
          <p className="text-[#020C2B]/80 text-base sm:text-lg">
            Both WebRajya Invoice and WebRajya POS share the exact same transparent plans. Pick the product and billing period that suits your business.
          </p>
          <div className="inline-block p-2.5 rounded-xl bg-white/80 border border-[#020C2B]/10 text-xs font-mono text-[#020C2B]/80">
            {FEATURE_INCLUSION_ASSUMPTION_NOTE}
          </div>
        </div>

        {/* Product Switcher Tabs */}
        <div className="flex flex-col items-center gap-3">
          <div className="p-1.5 rounded-2xl bg-white border border-[#020C2B]/10 shadow-sm flex items-center gap-2 max-w-md w-full relative">
            <button
              type="button"
              onClick={() => setActiveTab("invoice")}
              className={`relative flex-1 py-3 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer z-10 ${
                activeTab === "invoice" ? "text-white" : "text-[#020C2B]/70 hover:text-[#020C2B]"
              }`}
            >
              {activeTab === "invoice" && (
                <motion.div
                  layoutId="activePricingProductTab"
                  className="absolute inset-0 bg-[#2563EB] rounded-xl shadow-xs -z-10"
                  transition={{ type: "spring", stiffness: 450, damping: 30 }}
                />
              )}
              <FileText className="w-4 h-4" /> WebRajya Invoice
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("pos")}
              className={`relative flex-1 py-3 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer z-10 ${
                activeTab === "pos" ? "text-white" : "text-[#020C2B]/70 hover:text-[#020C2B]"
              }`}
            >
              {activeTab === "pos" && (
                <motion.div
                  layoutId="activePricingProductTab"
                  className="absolute inset-0 bg-[#E58145] rounded-xl shadow-xs -z-10"
                  transition={{ type: "spring", stiffness: 450, damping: 30 }}
                />
              )}
              <Utensils className="w-4 h-4" /> WebRajya POS
            </button>
          </div>

          <div className="text-center">
            <h2 className="text-lg font-bold text-[#020C2B]">{currentProduct.name}</h2>
            <p className="text-xs text-[#020C2B]/70 font-mono">{currentProduct.tagline}</p>
          </div>
        </div>

        {/* 3 Plan Cards (Powered by shadcn Card tokens) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
          >
            {plans.map((plan) => {
              const isYearly = plan.id === "yearly";
              const isLifetime = plan.id === "lifetime";

              return (
                <Card
                  key={plan.id}
                  className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all relative ${
                    isYearly
                      ? `bg-white border-2 shadow-xl md:-translate-y-2 ${accentBorder}`
                      : isLifetime
                      ? "bg-[#020C2B] text-white border border-white/20 shadow-lg"
                      : "bg-white border border-[#020C2B]/10 shadow-sm hover:border-[#020C2B]/30"
                  }`}
                >
                  {/* Badges */}
                  {isYearly && (
                    <span
                      className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-mono uppercase font-bold tracking-wider text-white shadow-sm flex items-center gap-1 ${accentBg}`}
                    >
                      <Sparkles className="w-3.5 h-3.5" /> Best Value • Save ₹1,189
                    </span>
                  )}
                  {isLifetime && (
                    <span
                      className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-mono uppercase font-bold tracking-wider shadow-sm font-semibold ${
                        activeTab === "invoice" ? "bg-[#38BDF8] text-[#0F172A]" : "bg-[#E58145] text-white"
                      }`}
                    >
                      Pay once, use forever
                    </span>
                  )}

                  <div className="space-y-6">
                    <div>
                      <h3 className={`text-xl sm:text-2xl font-black ${isLifetime ? "text-white" : "text-[#020C2B]"}`}>
                        {plan.name}
                      </h3>
                      <p className={`text-xs mt-1 min-h-[32px] ${isLifetime ? "text-slate-300" : "text-[#020C2B]/70"}`}>
                        {plan.tagline}
                      </p>
                    </div>

                    {/* Price Box */}
                    <div
                      className={`p-5 rounded-2xl font-mono text-center space-y-1.5 ${
                        isLifetime ? "bg-white/10 border border-white/15" : "bg-[#F8F3EB] border border-[#020C2B]/10"
                      }`}
                    >
                      <div className="flex items-baseline justify-center gap-1.5">
                        <span className={`text-3xl sm:text-4xl font-black ${isLifetime ? "text-white" : "text-[#020C2B]"}`}>
                          {plan.formattedPrice}
                        </span>
                        <span className={`text-xs font-semibold ${isLifetime ? "text-slate-300" : "text-[#020C2B]/70"}`}>
                          {plan.billingPeriod}
                        </span>
                      </div>

                      <p
                        className={`text-xs font-bold ${
                          isLifetime
                            ? activeTab === "invoice" ? "text-[#38BDF8]" : "text-[#E58145]"
                            : activeTab === "invoice" ? "text-[#2563EB]" : "text-[#E58145]"
                        }`}
                      >
                        {plan.effectiveMonthlyCost}
                      </p>

                      {plan.savingsText && (
                        <p className={`text-[11px] font-medium ${isLifetime ? "text-emerald-400" : "text-emerald-600"}`}>
                          {plan.savingsText}
                        </p>
                      )}
                    </div>

                    {/* GST Note */}
                    <p className={`text-[11px] text-center font-mono ${isLifetime ? "text-slate-400" : "text-[#020C2B]/70"}`}>
                      {GST_CONFIG.displayNote}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2.5 pt-2">
                      <span
                        className={`text-[10px] font-mono uppercase tracking-wider block font-bold ${
                          isLifetime ? "text-slate-300" : "text-[#020C2B]"
                        }`}
                      >
                        Included Features:
                      </span>
                      <div className="space-y-2 text-xs">
                        {plan.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-2">
                            <CheckCircle2
                              className={`w-4 h-4 shrink-0 mt-0.5 ${
                                isLifetime
                                  ? activeTab === "invoice" ? "text-[#38BDF8]" : "text-[#E58145]"
                                  : activeTab === "invoice" ? "text-[#2563EB]" : "text-[#E58145]"
                              }`}
                            />
                            <span className={isLifetime ? "text-slate-200" : "text-[#020C2B]/85"}>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Lifetime Details block */}
                    {isLifetime && plan.lifetimeDetails && (
                      <div className="p-3.5 rounded-xl bg-white/5 border border-dashed border-white/20 text-[11px] space-y-1.5">
                        <span className="font-bold text-amber-300 block flex items-center gap-1 font-mono uppercase text-[10px]">
                          <ShieldCheck className="w-3.5 h-3.5" /> What&apos;s Included in Lifetime:
                        </span>
                        <p className="text-slate-200">• {plan.lifetimeDetails.licenseType}</p>
                        <p className="text-amber-300 font-mono text-[10px] leading-tight">
                          • {plan.lifetimeDetails.updateDurationTodo}
                        </p>
                        <p className="text-amber-300 font-mono text-[10px] leading-tight">
                          • {plan.lifetimeDetails.supportSlaTodo}
                        </p>
                        <p className="text-amber-300 font-mono text-[10px] leading-tight">
                          • {plan.lifetimeDetails.deviceLimitTodo}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Card CTA */}
                  <div className="mt-8 pt-4 border-t border-slate-200/20">
                    <Button
                      href={plan.ctaHref(activeTab)}
                      variant={isYearly ? "cta" : isLifetime ? "cta" : "outline"}
                      size="lg"
                      className={`w-full ${
                        isYearly
                          ? `${accentBg} text-white`
                          : isLifetime
                          ? activeTab === "invoice"
                            ? "bg-[#38BDF8] hover:bg-[#0284C7] text-[#0F172A] font-bold"
                            : "bg-[#E58145] hover:bg-[#D97706] text-white font-bold"
                          : "border-[#020C2B]/20 hover:bg-[#020C2B]/5 text-[#020C2B]"
                      }`}
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      {plan.ctaLabel}
                    </Button>
                  </div>
                </Card>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Dual Product Callout ("Need both Invoice and POS?") */}
        <div className="max-w-3xl mx-auto p-6 rounded-3xl bg-white border border-[#020C2B]/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-[#020C2B]">
              Need both WebRajya Invoice and WebRajya POS?
            </h3>
            <p className="text-xs text-[#020C2B]/70">
              Operate retail counters alongside restaurant kitchens without duplicate customer or product records.
            </p>
          </div>
          <Button
            href="/demo?product=not_sure&intent=both"
            variant="cta"
            size="md"
            className="shrink-0 bg-[#020C2B] text-white hover:bg-[#020C2B]/90"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Talk to us
          </Button>
        </div>

        {/* Plan Comparison Table (Powered by shadcn Table) */}
        <div className="space-y-6 pt-6">
          <div className="text-center space-y-2">
            <Badge variant="pos">Full Breakdown</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#020C2B]">
              Compare What&apos;s Included Across Plans
            </h2>
            <p className="text-xs text-[#020C2B]/70 font-mono">
              Zero tier gating: identical core software capabilities on every plan.
            </p>
          </div>

          <div className="rounded-3xl border border-[#020C2B]/10 bg-white shadow-sm overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#FAF6F0] font-mono text-[#020C2B] hover:bg-[#FAF6F0]">
                  <TableHead className="p-4 sm:p-5 font-bold text-[#020C2B]">Plan Dimension</TableHead>
                  <TableHead className="p-4 sm:p-5 font-bold text-[#020C2B]">Monthly Plan</TableHead>
                  <TableHead className="p-4 sm:p-5 font-bold text-[#E58145]">Yearly Plan (Best Value)</TableHead>
                  <TableHead className="p-4 sm:p-5 font-bold text-[#020C2B]">Lifetime Plan</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-[#020C2B]/85">
                <TableRow>
                  <TableCell className="p-4 sm:p-5 font-semibold text-[#020C2B]">Upfront Price</TableCell>
                  <TableCell className="p-4 sm:p-5 font-mono">₹599</TableCell>
                  <TableCell className="p-4 sm:p-5 font-mono font-bold text-[#E58145]">₹5,999</TableCell>
                  <TableCell className="p-4 sm:p-5 font-mono font-bold">₹25,999</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="p-4 sm:p-5 font-semibold text-[#020C2B]">Billing Cadence</TableCell>
                  <TableCell className="p-4 sm:p-5">Billed monthly</TableCell>
                  <TableCell className="p-4 sm:p-5">Billed annually</TableCell>
                  <TableCell className="p-4 sm:p-5">One-time payment</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="p-4 sm:p-5 font-semibold text-[#020C2B]">Effective Monthly Cost</TableCell>
                  <TableCell className="p-4 sm:p-5 font-mono">₹599 / month</TableCell>
                  <TableCell className="p-4 sm:p-5 font-mono font-bold text-emerald-600">About ₹500 / month</TableCell>
                  <TableCell className="p-4 sm:p-5 font-mono text-emerald-600">Pay once, use forever</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="p-4 sm:p-5 font-semibold text-[#020C2B]">Annual Savings</TableCell>
                  <TableCell className="p-4 sm:p-5 text-[#64748B]">—</TableCell>
                  <TableCell className="p-4 sm:p-5 font-semibold text-emerald-600">
                    Saves ₹1,189 vs monthly (approx. 17%)
                  </TableCell>
                  <TableCell className="p-4 sm:p-5 font-semibold text-emerald-600">
                    Zero ongoing subscription fees
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="p-4 sm:p-5 font-semibold text-[#020C2B]">Core Modules &amp; Features</TableCell>
                  <TableCell className="p-4 sm:p-5">
                    <span className="inline-flex items-center gap-1.5 text-emerald-600 font-medium">
                      <CheckCircle2 className="w-4 h-4 shrink-0" /> Full Access
                    </span>
                  </TableCell>
                  <TableCell className="p-4 sm:p-5">
                    <span className="inline-flex items-center gap-1.5 text-emerald-600 font-medium">
                      <CheckCircle2 className="w-4 h-4 shrink-0" /> Full Access
                    </span>
                  </TableCell>
                  <TableCell className="p-4 sm:p-5">
                    <span className="inline-flex items-center gap-1.5 text-emerald-600 font-medium">
                      <CheckCircle2 className="w-4 h-4 shrink-0" /> Full Access
                    </span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="p-4 sm:p-5 font-semibold text-[#020C2B]">License Duration</TableCell>
                  <TableCell className="p-4 sm:p-5">30-day active period</TableCell>
                  <TableCell className="p-4 sm:p-5">365-day active period</TableCell>
                  <TableCell className="p-4 sm:p-5 font-semibold">Perpetual (No expiration)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="p-4 sm:p-5 font-semibold text-[#020C2B]">Software Updates</TableCell>
                  <TableCell className="p-4 sm:p-5">During active month</TableCell>
                  <TableCell className="p-4 sm:p-5">During active year</TableCell>
                  <TableCell className="p-4 sm:p-5 font-mono text-[11px] text-amber-600">
                    TODO: Clarify duration of updates included
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="p-4 sm:p-5 font-semibold text-[#020C2B]">Customer Support SLA</TableCell>
                  <TableCell className="p-4 sm:p-5">Standard email &amp; chat</TableCell>
                  <TableCell className="p-4 sm:p-5">Standard email &amp; chat</TableCell>
                  <TableCell className="p-4 sm:p-5 font-mono text-[11px] text-amber-600">
                    TODO: Clarify ongoing support SLA
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="p-4 sm:p-5 font-semibold text-[#020C2B]">Devices / Counters Permitted</TableCell>
                  <TableCell className="p-4 sm:p-5">Standard single counter/business</TableCell>
                  <TableCell className="p-4 sm:p-5">Standard single counter/business</TableCell>
                  <TableCell className="p-4 sm:p-5 font-mono text-[11px] text-amber-600">
                    TODO: Confirm permitted devices/counters
                  </TableCell>
                </TableRow>
                <TableRow className="bg-[#FAF6F0]/80">
                  <TableCell className="p-4 sm:p-5 font-bold text-[#020C2B]">
                    MyGarage SaaS Plan
                    <span className="block text-[11px] font-mono text-slate-500 font-normal">
                      Vehicle &amp; fleet management
                    </span>
                  </TableCell>
                  <TableCell colSpan={3} className="p-4 sm:p-5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="space-y-0.5">
                        <Badge variant="mygarage">Coming Soon</Badge>
                        <p className="text-xs text-[#020C2B]/80 font-medium pt-1">
                          Pricing not yet defined for MyGarage SaaS. Contact our product team for pilot access and onboarding.
                        </p>
                        <p className="text-[11px] font-mono text-amber-600">
                          TODO: Define official commercial pricing for MyGarage SaaS.
                        </p>
                      </div>
                      <Button
                        href="/demo?product=not_sure&intent=mygarage"
                        variant="outline"
                        size="sm"
                        className="shrink-0 border-[#020C2B]/20 hover:bg-[#020C2B]/5 text-[#020C2B]"
                      >
                        Contact us
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Pricing FAQ Section (Powered by shadcn Accordion) */}
        <div className="space-y-8 max-w-4xl mx-auto pt-8">
          <div className="text-center space-y-2">
            <Badge variant="pos">Got Questions?</Badge>
            <h2 className="text-3xl font-black text-[#020C2B]">
              Frequently Asked Pricing Questions
            </h2>
            <p className="text-xs text-[#020C2B]/70">
              Clear answers regarding subscriptions, upgrades, renewals, and refunds.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-[#020C2B]/10 p-6 sm:p-8 shadow-xs">
            <Accordion className="space-y-4">
              {FAQS.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="rounded-2xl border border-[#020C2B]/10 p-2 sm:p-3 overflow-hidden"
                >
                  <AccordionTrigger className="font-bold text-sm sm:text-base text-[#020C2B] px-3 hover:no-underline cursor-pointer">
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#E58145] shrink-0" />
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-3 pt-2 text-slate-600 text-xs sm:text-sm leading-relaxed space-y-2">
                    <p>{faq.answer}</p>
                    {faq.linkHref && faq.linkText && (
                      <p className="pt-1">
                        <Link
                          href={faq.linkHref}
                          className="text-[#E58145] font-bold hover:underline inline-flex items-center gap-1 text-xs"
                        >
                          {faq.linkText} &rarr;
                        </Link>
                      </p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Policy Links Banner */}
        <div className="text-center text-xs text-[#020C2B]/70 space-y-2 pt-4">
          <p>
            For legal and contractual terms governing software access, review our published policies:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 font-semibold text-[#020C2B]">
            <Link href="/subscription-policy" className="hover:text-[#E58145] underline underline-offset-4">
              Subscription &amp; Renewal Policy
            </Link>
            <span>•</span>
            <Link href="/refund" className="hover:text-[#E58145] underline underline-offset-4">
              Refund Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-[#E58145] underline underline-offset-4">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F8F3EB] flex items-center justify-center pt-28">
          <div className="text-sm font-mono text-[#020C2B]">Loading pricing plans...</div>
        </div>
      }
    >
      <PricingContent />
    </Suspense>
  );
}
