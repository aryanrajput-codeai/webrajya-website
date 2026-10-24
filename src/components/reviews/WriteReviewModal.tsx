"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, X, CheckCircle2, Sparkles, AlertCircle } from "lucide-react";
import { ReviewItem } from "@/data/reviews";

interface WriteReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReviewSubmitted: (newReview: ReviewItem) => void;
}

const RATING_DESCRIPTIONS = [
  "",
  "1 Star — Needs Improvement",
  "2 Stars — Fair Experience",
  "3 Stars — Good & Reliable",
  "4 Stars — Very Good & Highly Satisfied",
  "5 Stars — Exceptional! Outstanding Platform",
];

const SUGGESTED_TAGS = [
  "⚡ Fast Thermal Print",
  "📦 Inventory Control",
  "📶 Works Offline",
  "📱 WhatsApp Reminders",
  "💰 Cash Management",
  "🍽️ Kitchen KOT",
  "🔍 Barcode Scanning",
  "🤝 Helpful Support",
];

export function WriteReviewModal({
  isOpen,
  onClose,
  onReviewSubmitted,
}: WriteReviewModalProps) {
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [role, setRole] = useState("Owner");
  const [city, setCity] = useState("");
  const [product, setProduct] = useState<"WebRajya Invoice" | "WebRajya POS" | "MyGarage">("WebRajya Invoice");
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([
    "⚡ Fast Thermal Print",
    "📶 Works Offline",
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      if (selectedTags.length < 4) {
        setSelectedTags([...selectedTags, tag]);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!name.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }
    if (!title.trim()) {
      setErrorMsg("Please provide a short headline for your review.");
      return;
    }
    if (!comment.trim() || comment.trim().length < 15) {
      setErrorMsg("Please write at least 15 characters about your experience.");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        name: name.trim(),
        business: business.trim() || "Independent Business",
        role: role.trim() || "Owner",
        city: city.trim() || "India",
        rating,
        title: title.trim(),
        comment: comment.trim(),
        product,
        tags: selectedTags,
      };

      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success && data.review) {
        // Also save to localStorage for client-side persistence
        try {
          const localStored = localStorage.getItem("webrajya_user_reviews");
          const existing = localStored ? JSON.parse(localStored) : [];
          localStorage.setItem(
            "webrajya_user_reviews",
            JSON.stringify([data.review, ...existing])
          );
        } catch {
          // ignore localStorage error if restricted
        }

        onReviewSubmitted(data.review);
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 1800);
      } else {
        setErrorMsg(data.error || "Unable to save review. Please try again.");
      }
    } catch {
      // Fallback client-only submission if API fails
      const fallbackReview: ReviewItem = {
        id: `local-rev-${Date.now()}`,
        name: name.trim(),
        business: business.trim() || "Independent Business",
        role: role.trim() || "Owner",
        city: city.trim() || "India",
        rating,
        title: title.trim(),
        comment: comment.trim(),
        product,
        tags: selectedTags,
        date: "Just now",
        verified: true,
        helpfulCount: 1,
        avatarColor: "from-emerald-600 to-teal-700",
      };

      try {
        const localStored = localStorage.getItem("webrajya_user_reviews");
        const existing = localStored ? JSON.parse(localStored) : [];
        localStorage.setItem(
          "webrajya_user_reviews",
          JSON.stringify([fallbackReview, ...existing])
        );
      } catch {
        // ignore
      }

      onReviewSubmitted(fallbackReview);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 1800);
    } finally {
      setIsSubmitting(false);
    }
  };

  const activeRating = hoverRating || rating;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 15 }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className="bg-white rounded-3xl shadow-2xl border border-[#020C2B]/10 w-full max-w-xl max-h-[92vh] overflow-y-auto relative p-6 sm:p-8 text-[#020C2B]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F8F3EB] hover:bg-[#020C2B]/10 flex items-center justify-center transition-colors text-[#525866]"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-black text-[#020C2B]">
              Review Submitted!
            </h3>
            <p className="text-sm text-[#525866] max-w-sm mx-auto">
              Thank you for sharing your genuine experience with WebRajya. Your review is now visible live on the website!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E58145]/15 border border-[#E58145]/30 text-[#E58145] text-xs font-mono font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" /> Customer Feedback
              </div>
              <h3 className="text-2xl font-black tracking-tight text-[#020C2B]">
                Write a WebRajya Review
              </h3>
              <p className="text-xs sm:text-sm text-[#525866]">
                Share your daily counter experience, billing speed, or business results.
              </p>
            </div>

            {errorMsg && (
              <div className="flex items-center gap-2 p-3 text-xs rounded-xl bg-rose-50 text-rose-700 border border-rose-200">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Star Rating Picker */}
            <div className="bg-[#F8F3EB] rounded-2xl p-4 border border-[#020C2B]/10 space-y-2 text-center sm:text-left">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#525866] block">
                Overall Rating *
              </label>
              <div className="flex items-center justify-center sm:justify-start gap-1.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1 transition-transform hover:scale-125 focus:outline-none"
                  >
                    <Star
                      className={`w-7 h-7 sm:w-8 sm:h-8 transition-colors ${
                        star <= activeRating
                          ? "fill-amber-400 text-amber-500"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <p className="text-xs font-semibold text-[#E58145] min-h-[16px]">
                {RATING_DESCRIPTIONS[activeRating]}
              </p>
            </div>

            {/* Product Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#525866]">
                Which Product Do You Use?
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(["WebRajya Invoice", "WebRajya POS", "MyGarage"] as const).map(
                  (p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setProduct(p)}
                      className={`py-2 px-2 text-xs font-bold rounded-xl border transition-all text-center ${
                        product === p
                          ? "bg-[#020C2B] text-white border-[#020C2B] shadow-sm"
                          : "bg-white text-[#525866] border-[#020C2B]/15 hover:border-[#020C2B]"
                      }`}
                    >
                      {p}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Personal & Business Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-[#020C2B] block mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ramesh Verma"
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#020C2B]/15 bg-[#F8F3EB]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E58145] transition-all"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#020C2B] block mb-1">
                  Business / Store Name
                </label>
                <input
                  type="text"
                  value={business}
                  onChange={(e) => setBusiness(e.target.value)}
                  placeholder="e.g. Verma Department Store"
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#020C2B]/15 bg-[#F8F3EB]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E58145] transition-all"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#020C2B] block mb-1">
                  Role / Designation
                </label>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="e.g. Proprietor, Manager"
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#020C2B]/15 bg-[#F8F3EB]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E58145] transition-all"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#020C2B] block mb-1">
                  City & State
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Mumbai, Maharashtra"
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#020C2B]/15 bg-[#F8F3EB]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E58145] transition-all"
                />
              </div>
            </div>

            {/* Review Title & Content */}
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-[#020C2B] block mb-1">
                  Review Headline / Title *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Cut our checkout rush by half during peak hours!"
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#020C2B]/15 bg-[#F8F3EB]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E58145] transition-all"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#020C2B] block mb-1">
                  Your Review / Experience *
                </label>
                <textarea
                  rows={4}
                  required
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Tell other retail, restaurant, or garage owners how WebRajya has helped your day-to-day operations, billing, or inventory..."
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#020C2B]/15 bg-[#F8F3EB]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E58145] transition-all resize-none"
                />
              </div>
            </div>

            {/* Quick Feature Tags */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#525866] block">
                Highlight What Stood Out (Pick up to 4)
              </label>
              <div className="flex flex-wrap gap-1.5">
                {SUGGESTED_TAGS.map((tag) => {
                  const isSelected = selectedTags.includes(tag);
                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleTag(tag)}
                      className={`text-xs px-2.5 py-1 rounded-full border transition-all ${
                        isSelected
                          ? "bg-[#E58145] text-white border-[#E58145] font-semibold"
                          : "bg-[#F8F3EB] text-[#525866] border-[#020C2B]/10 hover:border-[#E58145]"
                      }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit CTA */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 text-xs font-semibold text-[#525866] hover:text-[#020C2B] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 rounded-xl bg-[#020C2B] hover:bg-[#E58145] text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Post Review Live"}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}
