import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ChevronRight, ArrowLeft, Clock, CheckCircle2, AlertTriangle, HelpCircle, BookOpen } from "lucide-react";
import {
  SUPPORT_CATEGORIES,
  getArticleBySlug,
  getArticlesByCategory
} from "@/data/supportArticles";
import { ArticleHelpfulFeedback } from "@/components/support/ArticleHelpfulFeedback";
import { SupportCTA } from "@/components/support/SupportCTA";

interface ArticlePageProps {
  params: Promise<{
    category: string;
    article: string;
  }>;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { category: categorySlug, article: articleSlug } = await params;
  const articleData = getArticleBySlug(categorySlug, articleSlug);

  if (!articleData) {
    return {
      title: "Article Not Found | WebRajya Support"
    };
  }

  return {
    title: `${articleData.title} | WebRajya Support`,
    description: articleData.description
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { category: categorySlug, article: articleSlug } = await params;
  const category = SUPPORT_CATEGORIES.find(c => c.slug === categorySlug);
  const article = getArticleBySlug(categorySlug, articleSlug);

  if (!category || !article) {
    notFound();
  }

  const categoryArticles = getArticlesByCategory(category.slug);

  return (
    <div className="w-full bg-[#F8F3EB] text-[#020C2B] min-h-screen pt-28 pb-20 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Breadcrumb Navigation */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#525866]">
          <Link href="/support" className="hover:text-[#020C2B] transition-colors">
            Support
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href={`/support/${category.slug}`} className="hover:text-[#020C2B] transition-colors">
            {category.name}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#020C2B] font-semibold truncate max-w-xs sm:max-w-md">
            {article.title}
          </span>
        </div>

        {/* Main Article Container Layout (Desktop: Sidebar + Main + TOC) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Sidebar Navigation (Desktop) */}
          <aside className="hidden lg:block lg:col-span-3 space-y-6">
            <div className="p-5 rounded-3xl bg-white border border-[#020C2B]/10 space-y-4 shadow-sm font-mono text-xs">
              <span className="text-[10px] text-[#525866] uppercase tracking-wider font-bold block pb-2 border-b border-[#020C2B]/10">
                In this Category
              </span>
              <div className="space-y-1">
                {categoryArticles.map(art => (
                  <Link
                    key={art.id}
                    href={`/support/${category.slug}/${art.slug}`}
                    className={`block p-2.5 rounded-xl transition-all font-sans font-medium text-xs ${
                      art.slug === article.slug
                        ? "bg-[#020C2B] text-white font-bold"
                        : "text-[#020C2B]/80 hover:bg-[#F8F3EB] hover:text-[#020C2B]"
                    }`}
                  >
                    {art.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-3xl bg-[#020C2B] text-white space-y-2 text-xs font-mono shadow-md">
              <span className="text-[#E58145] font-bold block">Need Personal Setup?</span>
              <p className="text-[11px] text-[#F8F3EB]/70">
                Our support team is available to assist with custom hardware or billing setup.
              </p>
              <Link href="/contact" className="inline-block pt-1 font-bold text-[#E58145] hover:underline">
                Contact Team →
              </Link>
            </div>
          </aside>

          {/* Center Main Article Document */}
          <main className="lg:col-span-6 space-y-8 bg-white p-6 sm:p-10 rounded-3xl border border-[#020C2B]/10 shadow-xl">
            
            {/* Header Meta */}
            <div className="space-y-4 pb-6 border-b border-[#020C2B]/10">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-[#020C2B] text-white text-xs font-mono font-bold uppercase">
                  {category.name}
                </span>
                <span className="text-xs font-mono text-[#525866] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {article.readTime}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-[#020C2B] tracking-tight">
                {article.title}
              </h1>

              <div className="text-xs font-mono text-[#525866]">
                Last updated: <span className="font-semibold text-[#020C2B]">{article.lastUpdated}</span>
              </div>
            </div>

            {/* Overview Section */}
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-[#020C2B] flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#E58145]" /> Overview
              </h2>
              <p className="text-sm text-[#020C2B]/80 leading-relaxed bg-[#F8F3EB]/60 p-4 rounded-2xl border border-[#020C2B]/10 font-normal">
                {article.overview}
              </p>
            </div>

            {/* Before You Begin */}
            {article.beforeYouBegin && article.beforeYouBegin.length > 0 && (
              <div className="space-y-3">
                <h2 className="text-lg font-bold text-[#020C2B] flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#E58145]" /> Before You Begin
                </h2>
                <ul className="space-y-2 text-xs sm:text-sm text-[#020C2B]/80 font-mono">
                  {article.beforeYouBegin.map((prereq, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8F3EB] border border-[#020C2B]/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E58145] shrink-0 mt-1.5" />
                      <span>{prereq}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Step-by-Step Instructions */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-[#020C2B] flex items-center gap-2">
                <ChevronRight className="w-5 h-5 text-[#E58145]" /> Step-by-Step Instructions
              </h2>

              <div className="space-y-4">
                {article.steps.map((step, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white border border-[#020C2B]/15 space-y-2 shadow-sm">
                    <h3 className="font-extrabold text-[#020C2B] text-base">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#525866] leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Troubleshooting */}
            {article.troubleshooting && article.troubleshooting.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-[#020C2B]/10">
                <h2 className="text-lg font-bold text-[#020C2B] flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600" /> Troubleshooting &amp; Tips
                </h2>
                <div className="space-y-2 text-xs sm:text-sm text-[#020C2B]/80 font-mono">
                  {article.troubleshooting.map((tip, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-[#020C2B] flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Article Feedback Component */}
            <ArticleHelpfulFeedback />

          </main>

          {/* Right Table of Contents / Outline (Desktop) */}
          <aside className="hidden lg:block lg:col-span-3 space-y-6">
            <div className="p-5 rounded-3xl bg-white border border-[#020C2B]/10 space-y-3 shadow-sm font-mono text-xs">
              <span className="text-[10px] text-[#525866] uppercase tracking-wider font-bold block pb-2 border-b border-[#020C2B]/10">
                Article Outline
              </span>
              <ul className="space-y-2 text-xs text-[#020C2B]/80">
                <li>• Overview</li>
                <li>• Before You Begin</li>
                <li>• Step-by-Step Instructions</li>
                <li>• Troubleshooting &amp; Tips</li>
              </ul>
            </div>
          </aside>

        </div>

        {/* Global Support CTA */}
        <SupportCTA />

      </div>
    </div>
  );
}
