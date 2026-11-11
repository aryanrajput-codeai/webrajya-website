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
  HelpCircle,
  Clock,
  Flame
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
import { PRICING_CONFIG, LIFETIME_INCLUSION_STATEMENT } from "@/config/pricing";
import { LAUNCH_CONFIG } from "@/config/launch";
import { GstNote } from "@/components/ui/GstNote";
import { RefundNote } from "@/components/ui/RefundNote";
import { DecemberOfferBanner } from "@/components/sections/DecemberOfferBanner";

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

  const FAQS = [
    {
      id: "faq-renewals",
      question: "How do renewals and advance reminders work?",
      answer:
        "Monthly plans renew every 30 days, and Annual plans renew every 12 months. We send automatic advance renewal notices 7 days and 2 days before expiry via WhatsApp and email so your billing counter never faces unexpected disruption.",
      linkText: "Read Subscription & Auto-Renewal Terms",
      linkHref: "/subscription-terms"
    },
    {
      id: "faq-grace-period",
      question: "What is the 3-day view-only grace period if I stop paying?",
      answer:
        "If your subscription expires before renewal, your software never locks you out of your records. You get an automatic 3-day view-only grace period to view past invoices, customer Khata balances, and export records to Excel. New bill generation resumes immediately upon renewal.",
      linkText: "Read Grace Period Details",
      linkHref: "/subscription-terms"
    },
    {
      id: "faq-upgrade",
      question: "Can I upgrade from Monthly → Annual → Lifetime?",
      answer:
        "Yes, absolutely. Many retailers start on the Monthly plan (₹599/mo) and upgrade to the Annual plan (₹5,999/yr to save ₹1,189) or Early Lifetime (₹19,999 one-time) at any point without losing any customer records or product data."
    },
    {
      id: "faq-early-lifetime",
      question: "What is the Early Lifetime plan for Nagpur?",
      answer:
        `For our December launch in Nagpur, the first ${LAUNCH_CONFIG.EARLY_LIFETIME_SLOTS_TOTAL} customers can secure a Lifetime license for ₹19,999 (saving ₹6,000 off the regular ₹25,999 price). There are currently ${LAUNCH_CONFIG.EARLY_LIFETIME_SLOTS_REMAINING} slots remaining before the price reverts to ₹25,999.`
    },
    {
      id: "faq-lifetime-includes",
      question: "What is included in the Lifetime plan?",
      answer:
        `${LIFETIME_INCLUSION_STATEMENT} You get permanent software operation on your counter with zero monthly or yearly renewal charges.`,
      linkText: "Read Lifetime Terms",
      linkHref: "/lifetime-terms"
    },
    {
      id: "faq-refunds",
      question: "What is your refund policy?",
      answer:
        "We offer a full 3-day free trial on your own counter before any payment is collected. If you experience persistent technical defects that our team cannot resolve within 7 business days, you are eligible for a refund under our policy.",
      linkText: "View Refund Policy",
      linkHref: "/refund-policy"
    },
    {
      id: "faq-gst",
      question: "Are prices inclusive or exclusive of GST?",
      answer:
        "Tax terms are confirmed prior to payment enablement. Invoices with your business GSTIN are provided upon license purchase for input tax credit claims."
    },
    {
      id: "faq-both",
      question: "Can I use both WebRajya Invoice and WebRajya POS together?",
      answer:
        "Yes! Many businesses operating both a retail counter and a dining area or cafe connect WebRajya POS and WebRajya Invoice together. Contact our Nagpur onboarding team to discuss your multi-counter setup."
    }
  ];

  return (
    <div className="w-full bg-[#F8F3EB] text-[#020C2B] min-h-screen pt-28 pb-20 font-sans relative overflow-hidden">
      {/* December Launch Offer Banner */}
      <div className="mb-8">
        <DecemberOfferBanner />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            Simple, Fair Pricing for Your Shop
          </h1>
          <p className="text-[#020C2B]/80 text-base sm:text-lg leading-relaxed">
            All core features included across every plan. No hidden charges, zero surprise price hikes.
          </p>

          {/* Product Switch Tabs */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex p-1.5 rounded-full bg-white border border-[#020C2B]/10 shadow-xs">
              <button
                onClick={() => setActiveTab("invoice")}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "invoice"
                    ? "bg-[#2563EB] text-white shadow-sm"
                    : "text-[#020C2B]/80 hover:text-[#020C2B]"
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>WebRajya Invoice</span>
              </button>
              <button
                onClick={() => setActiveTab("pos")}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "pos"
                    ? "bg-[#E58145] text-white shadow-sm"
                    : "text-[#020C2B]/80 hover:text-[#020C2B]"
                }`}
              >
                <Utensils className="w-4 h-4" />
                <span>WebRajya POS</span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className={`grid grid-cols-1 ${
              activeTab === "invoice" ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"
            } gap-6 sm:gap-8 items-stretch`}
          >
            {plans.map((plan) => {
              const isYearly = plan.id === "yearly";
              const isEarlyLifetime = plan.id === "early_lifetime";
              const isLifetime = plan.id === "lifetime";

              return (
                <Card
                  key={plan.id}
                  className="rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all relative bg-white border border-slate-200 shadow-sm"
                >
                  <div className="space-y-4">
                    {/* Aligned Badge Slot */}
                    <div className="h-7 flex items-center">
                      {isEarlyLifetime ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase font-bold tracking-wider bg-[#E58145] text-white shadow-xs">
                          <Flame className="w-3.5 h-3.5 animate-pulse" />
                          LIMITED · 50 SLOTS
                        </span>
                      ) : isYearly ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase font-bold tracking-wider bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20">
                          <Sparkles className="w-3.5 h-3.5" /> Most Popular • Save ₹1,189
                        </span>
                      ) : (
                        <div className="h-7" aria-hidden="true" />
                      )}
                    </div>

                    {/* Aligned Plan Name & Tagline */}
                    <div>
                      <h3 className="text-xl font-black text-[#020C2B] h-7 flex items-center">
                        {plan.name}
                      </h3>
                      <p className="text-xs mt-1 h-9 line-clamp-2 text-slate-600">
                        {plan.tagline}
                      </p>
                    </div>

                    {/* Uniform Height Price Block */}
                    <div
                      className="h-44 p-4 rounded-2xl font-mono text-center flex flex-col justify-between bg-[#F8F3EB] border border-slate-200"
                    >
                      <div className="h-4 flex items-center justify-center">
                        {plan.formattedRegularPrice ? (
                          <span className="text-[11px] line-through text-slate-400 block">
                            Regular: {plan.formattedRegularPrice}
                          </span>
                        ) : (
                          <span className="text-[11px] block invisible">Regular</span>
                        )}
                      </div>

                      <div className="flex items-baseline justify-center gap-1.5 my-0.5">
                        <span className="font-black leading-none text-[#020C2B] text-3xl sm:text-4xl">
                          {plan.formattedPrice}
                        </span>
                        <span className="text-xs leading-tight text-slate-600">
                          {plan.billingPeriod}
                        </span>
                      </div>

                      <p
                        className={`text-xs font-bold tracking-wide ${
                          isEarlyLifetime ? "text-[#E58145]" : "text-[#2563EB]"
                        }`}
                      >
                        {plan.effectiveMonthlyCost}
                      </p>

                      <div className="h-6 flex items-center justify-center">
                        {plan.savingsText ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20">
                            {plan.savingsText}
                          </span>
                        ) : (
                          <span className="invisible text-[11px]">Savings</span>
                        )}
                      </div>
                    </div>

                    {/* Shared GST Component directly under price (identical baseline) */}
                    <GstNote className="text-center" />

                    {/* Features List */}
                    <div className="space-y-2 pt-1">
                      <span
                        className="text-[10px] font-mono uppercase tracking-wider block font-bold text-slate-700"
                      >
                        Included:
                      </span>
                      <div className="space-y-2 text-xs min-h-[160px]">
                        {plan.features.map((feat) => (
                          <div key={feat} className="flex items-start gap-2">
                            <CheckCircle2
                              className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600"
                            />
                            <span className="text-slate-700">
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Lifetime Note if applicable */}
                    <div className="min-h-[85px] flex flex-col justify-end">
                      {plan.lifetimeNote ? (
                        <div className="p-3 rounded-xl text-[11px] leading-relaxed border border-dashed bg-slate-50 border-slate-200 text-slate-600">
                          {plan.lifetimeNote}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  {/* Card CTA pinned to bottom */}
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Button
                      href={plan.ctaHref(activeTab)}
                      variant={isEarlyLifetime || isYearly ? "cta" : "outline"}
                      size="lg"
                      className="w-full font-bold shadow-xs"
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

        {/* Compact Comparison Table */}
        <div className="space-y-6 pt-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#020C2B]">
              Monthly vs Annual vs Lifetime Comparison
            </h2>
            <p className="text-xs text-slate-600 font-mono">
              All core software features are identical across all plans. Only the billing period and savings differ.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#FAF6F0] font-mono text-[#020C2B]">
                  <TableHead className="p-4 sm:p-5 font-bold">Feature / Plan Term</TableHead>
                  <TableHead className="p-4 sm:p-5 font-bold">Monthly Plan</TableHead>
                  <TableHead className="p-4 sm:p-5 font-bold text-[#2563EB]">Annual Plan (Best Value)</TableHead>
                  <TableHead className="p-4 sm:p-5 font-bold text-[#020C2B]">Lifetime License</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-xs sm:text-sm">
                <TableRow>
                  <TableCell className="p-4 font-semibold text-slate-800">Software Price</TableCell>
                  <TableCell className="p-4 font-mono font-bold">₹599 / month</TableCell>
                  <TableCell className="p-4 font-mono font-bold text-[#2563EB]">₹5,999 / year (~₹500/mo)</TableCell>
                  <TableCell className="p-4 font-mono font-bold text-emerald-700">₹19,999 (First 50) / ₹25,999</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="p-4 font-semibold text-slate-800">Annual Savings</TableCell>
                  <TableCell className="p-4 font-mono text-slate-500">—</TableCell>
                  <TableCell className="p-4 font-mono font-bold text-emerald-600">Saves ₹1,189 / year</TableCell>
                  <TableCell className="p-4 font-mono font-bold text-emerald-600">Zero recurring fees forever</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="p-4 font-semibold text-slate-800">Fast Counter Billing</TableCell>
                  <TableCell className="p-4">Included</TableCell>
                  <TableCell className="p-4">Included</TableCell>
                  <TableCell className="p-4">Included</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="p-4 font-semibold text-slate-800">Inventory &amp; Khata</TableCell>
                  <TableCell className="p-4">Included</TableCell>
                  <TableCell className="p-4">Included</TableCell>
                  <TableCell className="p-4">Included</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="p-4 font-semibold text-slate-800">Customer Support SLA</TableCell>
                  <TableCell className="p-4">Standard (Mon-Sat)</TableCell>
                  <TableCell className="p-4 font-semibold text-[#2563EB]">Priority WhatsApp &amp; Remote Desk</TableCell>
                  <TableCell className="p-4">Basic support &amp; bug fixes included</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="p-4 font-semibold text-slate-800">3-Day View-Only Grace Period</TableCell>
                  <TableCell className="p-4">3 days</TableCell>
                  <TableCell className="p-4">3 days</TableCell>
                  <TableCell className="p-4 font-mono text-slate-500">Not applicable (Perpetual)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="p-4 font-semibold text-slate-800">Advance Renewal Notices</TableCell>
                  <TableCell className="p-4">7 days &amp; 2 days prior</TableCell>
                  <TableCell className="p-4">7 days &amp; 2 days prior</TableCell>
                  <TableCell className="p-4 font-mono text-slate-500">Not applicable (Perpetual)</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Pricing FAQ Section */}
        <div className="space-y-8 max-w-4xl mx-auto pt-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-black text-[#020C2B]">
              Frequently Asked Pricing Questions
            </h2>
            <p className="text-xs text-slate-600">
              Clear answers regarding renewals, 3-day grace period, upgrades, and refunds.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <Accordion className="space-y-4">
              {FAQS.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="rounded-2xl border border-slate-200 p-2 sm:p-3 overflow-hidden"
                >
                  <AccordionTrigger className="font-bold text-sm sm:text-base text-[#020C2B] px-3 hover:no-underline cursor-pointer">
                    <span className="flex items-center gap-3 text-left">
                      <HelpCircle className="w-5 h-5 text-[#E58145] shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-3 pt-2 text-slate-600 text-xs sm:text-sm leading-relaxed space-y-2 pl-11">
                    <p>{faq.answer}</p>
                    {faq.linkHref && faq.linkText && (
                      <p className="pt-1">
                        <Link
                          href={faq.linkHref}
                          className="text-[#2563EB] hover:text-[#020C2B] font-semibold underline underline-offset-2 transition-colors"
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

        {/* Policy Links & Refund Note Banner */}
        <div className="text-center space-y-2 pt-4">
          <RefundNote className="text-center" />
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 pt-2">
            <Link href="/subscription-terms" className="hover:underline">
              Subscription and Renewal Terms
            </Link>
            <span>•</span>
            <Link href="/refund-policy" className="hover:underline">
              Cancellation &amp; Refund Policy
            </Link>
            <span>•</span>
            <Link href="/lifetime-terms" className="hover:underline">
              Lifetime Licence Terms
            </Link>
            <span>•</span>
            <Link href="/support-sla" className="hover:underline">
              Support SLA
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
        <div className="min-h-screen pt-32 text-center text-sm font-mono text-slate-500">
          Loading WebRajya Pricing...
        </div>
      }
    >
      <PricingContent />
    </Suspense>
  );
}
