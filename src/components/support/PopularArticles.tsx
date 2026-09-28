import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, Star, Sparkles } from "lucide-react";
import { SUPPORT_ARTICLES, SupportArticle } from "@/data/supportArticles";

interface PopularArticlesProps {
  articles?: SupportArticle[];
  title?: string;
}

export function PopularArticles({
  articles = SUPPORT_ARTICLES.filter(a => a.isPopular),
  title = "Popular Support Articles"
}: PopularArticlesProps) {
  return (
    <div className="space-y-6 font-sans">
      <div className="text-center space-y-1">
        <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-[#E58145] tracking-wider bg-[#E58145]/10 px-3 py-1 rounded-full border border-[#E58145]/20 font-bold">
          <Star className="w-3.5 h-3.5" /> ESSENTIAL GUIDES
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#020C2B]">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles.map(article => (
          <Link
            key={article.id}
            href={`/support/${article.categorySlug}/${article.slug}`}
            className="group p-5 rounded-3xl bg-white border border-[#020C2B]/10 shadow-sm hover:border-[#E58145] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-[11px]">
                <span className="px-2.5 py-0.5 rounded-full bg-[#020C2B] text-white font-bold uppercase">
                  {article.categoryName}
                </span>
                <span className="text-[#525866] flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {article.readTime}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#020C2B] group-hover:text-[#E58145] transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs text-[#525866] line-clamp-2 mt-1 leading-relaxed">
                  {article.description}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#020C2B]/10 flex items-center justify-between text-xs font-mono text-[#020C2B]">
              <span className="text-[11px] text-[#525866]">Updated: {article.lastUpdated}</span>
              <span className="font-bold text-[#E58145] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Read Guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
