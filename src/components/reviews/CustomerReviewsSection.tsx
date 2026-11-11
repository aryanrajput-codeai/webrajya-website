"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Star,
  CheckCircle2,
  ThumbsUp,
  MessageSquarePlus,
  Building2,
  MapPin,
  Sparkles,
  Filter,
  QrCode,
} from "lucide-react";
import { FadeIn, BentoCard } from "@/components/ui/motion";
import { INITIAL_REVIEWS, ReviewItem } from "@/data/reviews";
import { WriteReviewModal } from "@/components/reviews/WriteReviewModal";
import { ReviewQrModal } from "@/components/reviews/ReviewQrModal";

export function CustomerReviewsSection() {
  const [reviews, setReviews] = useState<ReviewItem[]>(INITIAL_REVIEWS);
  const [selectedProduct, setSelectedProduct] = useState<string>("All");
  const [onlyFiveStars, setOnlyFiveStars] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState<boolean>(false);
  const [helpfulLiked, setHelpfulLiked] = useState<Record<string, boolean>>({});
  const [justSubmittedId, setJustSubmittedId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(6);

  // Load reviews from API and LocalStorage on mount
  useEffect(() => {
    async function loadReviews() {
      try {
        const res = await fetch("/api/reviews");
        const data = await res.json();
        if (data.success && Array.isArray(data.reviews) && data.reviews.length > 0) {
          // Merge with any local reviews
          const localStored = localStorage.getItem("webrajya_user_reviews");
          if (localStored) {
            try {
              const localList: ReviewItem[] = JSON.parse(localStored);
              // deduplicate by id
              const merged = [...localList, ...data.reviews];
              const unique = Array.from(
                new Map(merged.map((item) => [item.id, item])).values()
              );
              setReviews(unique);
              return;
            } catch {
              // ignore
            }
          }
          setReviews(data.reviews);
        }
      } catch {
        // Fallback to local storage if API is slow or offline
        const localStored = localStorage.getItem("webrajya_user_reviews");
        if (localStored) {
          try {
            const localList: ReviewItem[] = JSON.parse(localStored);
            setReviews([...localList, ...INITIAL_REVIEWS]);
          } catch {
            // ignore
          }
        }
      }
    }
    loadReviews();

    // Auto-open review modal if customer scanned QR or visited via review link
    if (typeof window !== "undefined") {
      const search = window.location.search;
      const hash = window.location.hash;
      if (
        search.includes("action=write") ||
        search.includes("write=true") ||
        search.includes("review=true") ||
        hash.includes("action=write") ||
        hash.includes("write=true")
      ) {
        setIsModalOpen(true);
        const section = document.getElementById("reviews");
        if (section) {
          setTimeout(() => {
            section.scrollIntoView({ behavior: "smooth" });
          }, 200);
        }
      }
    }
  }, []);

  const handleReviewSubmitted = (newReview: ReviewItem) => {
    setReviews((prev) => [newReview, ...prev.filter((r) => r.id !== newReview.id)]);
    setJustSubmittedId(newReview.id);
    setSelectedProduct("All");
    setOnlyFiveStars(false);
  };

  const handleHelpfulClick = (id: string) => {
    if (helpfulLiked[id]) return;

    setHelpfulLiked((prev) => ({ ...prev, [id]: true }));
    setReviews((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, helpfulCount: r.helpfulCount + 1 } : r
      )
    );
  };

  // Filter reviews
  const filteredReviews = useMemo(() => {
    return reviews.filter((r) => {
      if (selectedProduct !== "All" && r.product !== selectedProduct) {
        return false;
      }
      if (onlyFiveStars && r.rating < 5) {
        return false;
      }
      return true;
    });
  }, [reviews, selectedProduct, onlyFiveStars]);

  // Rating metrics calculations
  const totalReviewsCount = reviews.length;
  const fiveStarCount = reviews.filter((r) => r.rating === 5).length;
  const fourStarCount = reviews.filter((r) => r.rating === 4).length;
  const fiveStarPercentage = Math.round((fiveStarCount / totalReviewsCount) * 100) || 95;
  const fourStarPercentage = Math.round((fourStarCount / totalReviewsCount) * 100) || 5;

  return (
    <section id="reviews" className="py-24 bg-[#F8F3EB] text-[#020C2B] relative overflow-hidden border-t border-[#020C2B]/10">
      {/* Background Glow Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E58145]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#020C2B]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        {/* SECTION HEADER */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-4">

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#020C2B] leading-tight">
              Trusted by 1,200+ Indian Businesses
            </h2>

            <p className="text-[#525866] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Real store owners, restaurateurs, and garage managers sharing their daily billing speed, inventory control, and business impact.
            </p>
          </div>
        </FadeIn>

        {/* OVERALL RATING SCORECARD & WRITE REVIEW CTA */}
        <FadeIn direction="up" delay={0.1}>
          <BentoCard glow className="bg-white rounded-3xl border border-[#020C2B]/10 p-6 sm:p-10 shadow-lg shadow-[#020C2B]/5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Big Score Summary */}
            <div className="lg:col-span-4 text-center lg:text-left space-y-3 lg:border-r border-[#020C2B]/10 lg:pr-8">
              <div className="flex items-baseline justify-center lg:justify-start gap-2">
                <span className="text-5xl sm:text-6xl font-black text-[#020C2B]">4.9</span>
                <span className="text-xl sm:text-2xl font-bold text-[#525866]">/ 5.0</span>
              </div>

            <div className="flex items-center justify-center lg:justify-start gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            <p className="text-xs sm:text-sm text-[#525866]">
              Based on <span className="font-bold text-[#020C2B]">{totalReviewsCount}+ verified reviews</span> across retail, dining &amp; automotive sectors.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" /> 99.2% Positive Recommendation
              </span>
            </div>
          </div>

          {/* Rating Breakdown Bars */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="flex items-center gap-3 text-xs">
              <span className="w-12 font-mono font-semibold text-[#020C2B]">5 Star</span>
              <div className="flex-1 h-2.5 bg-[#F8F3EB] rounded-full overflow-hidden border border-[#020C2B]/5">
                <div
                  className="h-full bg-[#E58145] rounded-full"
                  style={{ width: `${fiveStarPercentage}%` }}
                />
              </div>
              <span className="w-10 text-right font-mono text-[#525866]">{fiveStarPercentage}%</span>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <span className="w-12 font-mono font-semibold text-[#020C2B]">4 Star</span>
              <div className="flex-1 h-2.5 bg-[#F8F3EB] rounded-full overflow-hidden border border-[#020C2B]/5">
                <div
                  className="h-full bg-amber-400 rounded-full"
                  style={{ width: `${fourStarPercentage}%` }}
                />
              </div>
              <span className="w-10 text-right font-mono text-[#525866]">{fourStarPercentage}%</span>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <span className="w-12 font-mono font-semibold text-[#020C2B]">3 Star</span>
              <div className="flex-1 h-2.5 bg-[#F8F3EB] rounded-full overflow-hidden border border-[#020C2B]/5">
                <div className="h-full bg-amber-200 rounded-full" style={{ width: "1%" }} />
              </div>
              <span className="w-10 text-right font-mono text-[#525866]">1%</span>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <span className="w-12 font-mono font-semibold text-[#020C2B]">2 Star</span>
              <div className="flex-1 h-2.5 bg-[#F8F3EB] rounded-full overflow-hidden border border-[#020C2B]/5">
                <div className="h-full bg-gray-200 rounded-full" style={{ width: "0%" }} />
              </div>
              <span className="w-10 text-right font-mono text-[#525866]">0%</span>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <span className="w-12 font-mono font-semibold text-[#020C2B]">1 Star</span>
              <div className="flex-1 h-2.5 bg-[#F8F3EB] rounded-full overflow-hidden border border-[#020C2B]/5">
                <div className="h-full bg-gray-200 rounded-full" style={{ width: "0%" }} />
              </div>
              <span className="w-10 text-right font-mono text-[#525866]">0%</span>
            </div>
          </div>

          {/* Write A Review & Show QR Triggers */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center text-center space-y-3 lg:border-l border-[#020C2B]/10 lg:pl-8 pt-4 lg:pt-0">
            <p className="text-xs text-[#525866]">
              Are you using WebRajya in your daily business?
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 w-full">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#020C2B] hover:bg-[#E58145] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <MessageSquarePlus className="w-4 h-4 text-[#E58145]" />
                <span>Write a Review</span>
              </button>

              <button
                type="button"
                onClick={() => setIsQrModalOpen(true)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#F8F3EB] hover:bg-white text-[#020C2B] border border-[#020C2B]/15 hover:border-[#E58145] text-xs sm:text-sm font-bold shadow-sm transition-all duration-200 cursor-pointer group"
              >
                <QrCode className="w-4 h-4 text-[#E58145] transition-transform group-hover:scale-110" />
                <span>Show Customer QR</span>
              </button>
            </div>
            <span className="text-[11px] text-[#525866]/80 font-mono">
              Scan from phone or print standee
            </span>
          </div>
        </BentoCard>
      </FadeIn>

        {/* JUST SUBMITTED NOTIFICATION BANNER */}
        {justSubmittedId && (
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 flex items-center justify-between gap-4 animate-in fade-in duration-300">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <p className="text-xs sm:text-sm font-medium">
                <strong>Thank you!</strong> Your review has been added and is displayed at the top of the list below.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setJustSubmittedId(null)}
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 underline shrink-0"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* FILTER BAR */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          {/* Product Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold text-[#525866] uppercase flex items-center gap-1.5 mr-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>

            {["All", "WebRajya Invoice", "WebRajya POS", "MyGarage"].map((p) => {
              const count =
                p === "All"
                  ? reviews.length
                  : reviews.filter((r) => r.product === p).length;
              const isSelected = selectedProduct === p;

              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => setSelectedProduct(p)}
                  className={`relative text-xs font-semibold px-3.5 py-1.5 rounded-xl transition-colors cursor-pointer z-10 ${
                    isSelected
                      ? "text-white"
                      : "text-[#525866] hover:text-[#020C2B]"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeReviewProductPill"
                      className="absolute inset-0 bg-[#020C2B] rounded-xl shadow-xs -z-10"
                      transition={{ type: "spring", stiffness: 450, damping: 30 }}
                    />
                  )}
                  {!isSelected && (
                    <span className="absolute inset-0 bg-white border border-[#020C2B]/10 rounded-xl -z-20 hover:border-[#020C2B]/30" />
                  )}
                  {p} ({count})
                </button>
              );
            })}
          </div>

          {/* 5-Star Only Toggle */}
          <button
            type="button"
            onClick={() => setOnlyFiveStars(!onlyFiveStars)}
            className={`text-xs font-semibold px-3.5 py-1.5 rounded-xl border transition-all flex items-center gap-1.5 cursor-pointer ${
              onlyFiveStars
                ? "bg-amber-500 text-white border-amber-500"
                : "bg-white text-[#525866] border-[#020C2B]/10 hover:border-amber-400"
            }`}
          >
            <Star className={`w-3.5 h-3.5 ${onlyFiveStars ? "fill-white" : "fill-amber-400 text-amber-500"}`} />
            <span>5 Stars Only</span>
          </button>
        </div>

        {/* REVIEWS GRID */}
        {filteredReviews.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#020C2B]/10 space-y-3">
            <p className="text-base text-[#525866]">No reviews match this filter.</p>
            <button
              onClick={() => {
                setSelectedProduct("All");
                setOnlyFiveStars(false);
              }}
              className="text-xs font-bold text-[#E58145] underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredReviews.slice(0, visibleCount).map((review) => {
                const isJustAdded = review.id === justSubmittedId;
                const hasLiked = helpfulLiked[review.id];

                return (
                  <motion.div
                    key={review.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className={`bg-white rounded-3xl p-6 border transition-shadow duration-300 flex flex-col justify-between space-y-5 hover:-translate-y-1 hover:shadow-xl ${
                      isJustAdded
                        ? "border-emerald-500 shadow-emerald-500/10 ring-2 ring-emerald-500/20"
                        : "border-[#020C2B]/10 hover:border-[#E58145]/40 shadow-sm"
                    }`}
                  >
                  {/* Top Row: User & Verification */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      {/* Avatar initials with gradient */}
                      <div
                        className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${review.avatarColor || "from-blue-600 to-indigo-700"} text-white font-bold text-sm flex items-center justify-center shadow-sm shrink-0`}
                      >
                        {review.name
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")
                          .toUpperCase()}
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-bold text-sm text-[#020C2B] leading-tight">
                            {review.name}
                          </h4>
                          {review.verified && (
                            <span
                              title="Verified Business User"
                              className="inline-flex text-emerald-600"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 fill-emerald-100" />
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-[11px] text-[#525866] pt-0.5">
                          <Building2 className="w-3 h-3 text-[#525866]/70 shrink-0" />
                          <span className="truncate max-w-[220px]" title={review.business}>
                            {review.business}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-[#525866]/80 font-mono">
                          <MapPin className="w-2.5 h-2.5 shrink-0" />
                          <span className="truncate max-w-[220px]">{review.city}</span>
                        </div>
                      </div>
                    </div>

                    {/* Star Rating & Date */}
                    <div className="flex items-center justify-between text-xs pt-1">
                      <div className="flex items-center gap-0.5 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating ? "fill-current" : "text-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-[11px] font-mono text-[#525866]">
                        {review.date}
                      </span>
                    </div>

                    {/* Headline Title */}
                    <h5 className="font-bold text-sm sm:text-base text-[#020C2B] leading-snug">
                      &ldquo;{review.title}&rdquo;
                    </h5>

                    {/* Review Comment */}
                    <p className="text-xs sm:text-sm text-[#525866] leading-relaxed">
                      {review.comment}
                    </p>
                  </div>

                  {/* Bottom Helpful Bar */}
                  <div className="pt-3 border-t border-[#020C2B]/10 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#525866] font-mono">
                      {review.role} · <span className="font-semibold text-[#020C2B]">{review.product}</span>
                    </span>

                      <button
                        type="button"
                        onClick={() => handleHelpfulClick(review.id)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                          hasLiked
                            ? "bg-emerald-50 text-emerald-700 font-bold"
                            : "text-[#525866] hover:text-[#020C2B] hover:bg-[#F8F3EB]"
                        }`}
                      >
                        <ThumbsUp className={`w-3.5 h-3.5 ${hasLiked ? "fill-emerald-600 text-emerald-600" : ""}`} />
                        <span>{hasLiked ? "Helpful" : "Helpful"} ({review.helpfulCount})</span>
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Load More Button */}
        {filteredReviews.length > visibleCount && (
          <div className="text-center pt-4">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="px-6 py-2.5 rounded-xl border border-[#020C2B]/20 bg-white hover:bg-[#020C2B] hover:text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
            >
              Show More Reviews ({filteredReviews.length - visibleCount} more)
            </button>
          </div>
        )}
      </div>

      {/* WRITE REVIEW MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <WriteReviewModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onReviewSubmitted={handleReviewSubmitted}
          />
        )}
      </AnimatePresence>

      {/* CUSTOMER QR STANDEE MODAL */}
      <AnimatePresence>
        {isQrModalOpen && (
          <ReviewQrModal
            isOpen={isQrModalOpen}
            onClose={() => setIsQrModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
