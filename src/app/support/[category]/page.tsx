import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, Clock, FileText, ChevronRight } from "lucide-react";
import { SUPPORT_CATEGORIES, getArticlesByCategory } from "@/data/supportArticles";
import { SupportSearch } from "@/components/support/SupportSearch";
import { SupportCTA } from "@/components/support/SupportCTA";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = SUPPORT_CATEGORIES.find(c => c.slug === categorySlug);
  if (!category) {
    return {
      title: "Category Not Found | WebRajya Support"
    };
  }

  return {
    title: `${category.name} Documentation | WebRajya Support`,
    description: category.description
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = SUPPORT_CATEGORIES.find(c => c.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const articles = getArticlesByCategory(category.slug);

  return (
    <div className="w-full bg-[#F8F3EB] text-[#020C2B] min-h-screen pt-28 pb-20 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#525866]">
          <Link href="/support" className="hover:text-[#020C2B] transition-colors">
            Support
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#020C2B] font-semibold">{category.name}</span>
        </div>

        {/* Category Header */}
        <div className="space-y-4">
          <Link
            href="/support"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#E58145] hover:text-[#020C2B] transition-colors font-bold"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> All Support Categories
          </Link>

          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#020C2B] text-white text-xs font-mono font-bold uppercase">
              {category.name}
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#020C2B]">
              {category.name} Documentation &amp; Guides
            </h1>
            <p className="text-base text-[#525866] max-w-2xl">
              {category.description}
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <SupportSearch />

        {/* Articles List */}
        <div className="space-y-6 pt-4">
          <h2 className="text-xl font-bold text-[#020C2B] border-b border-[#020C2B]/10 pb-3">
            Articles in {category.name} ({articles.length})
          </h2>

          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {articles.map(article => (
                <Link
                  key={article.id}
                  href={`/support/${category.slug}/${article.slug}`}
                  className="group p-6 rounded-3xl bg-white border border-[#020C2B]/10 shadow-sm hover:border-[#E58145] hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between font-mono text-[11px] text-[#525866]">
                      <span className="text-[#E58145] font-bold uppercase">Guide</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#020C2B] group-hover:text-[#E58145] transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-xs text-[#525866] leading-relaxed line-clamp-2">
                      {article.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#020C2B]/10 flex items-center justify-between text-xs font-mono text-[#020C2B]">
                    <span className="text-[11px] text-[#525866]">Updated: {article.lastUpdated}</span>
                    <span className="font-bold text-[#E58145] group-hover:translate-x-1 transition-transform">
                      Read Article →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center rounded-3xl bg-white border border-[#020C2B]/10 text-xs text-[#525866]">
              No articles currently listed in this category.
            </div>
          )}
        </div>

        {/* Support CTA */}
        <SupportCTA />

      </div>
    </div>
  );
}
