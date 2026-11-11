"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight, FileText, X } from "lucide-react";
import { searchSupportArticles, SupportArticle } from "@/data/supportArticles";

interface SupportSearchProps {
  onSelectArticle?: (article: SupportArticle) => void;
}

export function SupportSearch({ onSelectArticle }: SupportSearchProps) {
  const [query, setQuery] = useState("");
  const results = searchSupportArticles(query);

  const exampleTerms = ["billing", "invoice", "payments", "POS", "printing"];

  return (
    <div className="max-w-3xl mx-auto space-y-4 font-sans relative z-20">
      
      {/* Search Input Box */}
      <div className="relative">
        <label htmlFor="support-search-input" className="sr-only">
          Search WebRajya support
        </label>
        <div className="relative flex items-center">
          <Search className="w-5 h-5 text-[#525866] absolute left-4 pointer-events-none" />
          <input
            id="support-search-input"
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search WebRajya support..."
            className="w-full bg-white border-2 border-[#020C2B]/15 rounded-2xl pl-12 pr-10 py-4 text-[#020C2B] text-base sm:text-lg focus:outline-none focus:border-[#E58145] focus:ring-2 focus:ring-[#E58145]/20 shadow-lg placeholder:text-[#525866]"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-4 p-1 rounded-lg text-[#525866] hover:text-[#020C2B]"
              aria-label="Clear search"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Example Search Chips */}
      {!query && (
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-[#525866]">
          <span>Popular searches:</span>
          {exampleTerms.map(term => (
            <button
              key={term}
              onClick={() => setQuery(term)}
              className="px-2.5 py-1 rounded-lg bg-white border border-[#020C2B]/10 hover:border-[#E58145] text-[#020C2B] font-semibold transition-colors cursor-pointer"
            >
              {term}
            </button>
          ))}
        </div>
      )}

      {/* Instant Search Results Dropdown / Container */}
      {query.trim().length > 0 && (
        <div className="p-4 rounded-3xl bg-white border border-[#020C2B]/10 shadow-2xl space-y-3 animate-in fade-in duration-150">
          <div className="flex items-center justify-between pb-2 border-b border-[#020C2B]/10 text-xs font-mono text-[#525866]">
            <span>Search Results ({results.length})</span>
            <span>Query: &quot;{query}&quot;</span>
          </div>

          {results.length > 0 ? (
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {results.map(article => (
                <Link
                  key={article.id}
                  href={`/support/${article.categorySlug}/${article.slug}`}
                  onClick={() => {
                    setQuery("");
                    if (onSelectArticle) onSelectArticle(article);
                  }}
                  className="p-3 rounded-2xl bg-[#F8F3EB]/60 hover:bg-[#F8F3EB] border border-[#020C2B]/10 hover:border-[#E58145]/40 flex items-start justify-between gap-3 group transition-all"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#020C2B] text-white font-bold uppercase">
                        {article.categoryName}
                      </span>
                      <span className="text-xs font-bold text-[#020C2B] group-hover:text-[#E58145] transition-colors">
                        {article.title}
                      </span>
                    </div>
                    <p className="text-xs text-[#525866] line-clamp-1">
                      {article.description}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#E58145] shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-8 text-center space-y-4">
              <p className="text-sm font-bold text-[#020C2B]">No matching articles found.</p>
              <div className="p-4 rounded-2xl bg-[#F8F3EB] border border-[#020C2B]/10 max-w-md mx-auto space-y-2 text-xs text-[#525866]">
                <p className="font-semibold text-[#020C2B]">Can&apos;t find what you&apos;re looking for?</p>
                <p>Our team is available to assist you with your setup.</p>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#020C2B] text-white font-mono font-bold hover:bg-[#E58145] transition-colors"
                  >
                    Contact Support →
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

    </div>
  );
}
