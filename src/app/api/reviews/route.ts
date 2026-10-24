import { NextResponse } from "next/server";
import { INITIAL_REVIEWS, ReviewItem } from "@/data/reviews";

// In-memory runtime storage for newly submitted reviews in the current server instance
const submittedReviews: ReviewItem[] = [];

export async function GET() {
  // Return server stored reviews prepended to initial seed reviews
  const allReviews = [...submittedReviews, ...INITIAL_REVIEWS];
  return NextResponse.json({
    success: true,
    reviews: allReviews,
    total: allReviews.length,
    averageRating: 4.9,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, business, role, city, rating, title, comment, product, tags } = body;

    if (!name || !rating || !comment || !title) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields (Name, Rating, Title, and Review)." },
        { status: 400 }
      );
    }

    const numRating = Number(rating);
    if (isNaN(numRating) || numRating < 1 || numRating > 5) {
      return NextResponse.json(
        { success: false, error: "Rating must be between 1 and 5 stars." },
        { status: 400 }
      );
    }

    const colorGradients = [
      "from-emerald-600 to-teal-700",
      "from-blue-600 to-indigo-700",
      "from-amber-600 to-orange-700",
      "from-purple-600 to-pink-700",
      "from-rose-600 to-red-700",
    ];
    const randomGradient = colorGradients[Math.floor(Math.random() * colorGradients.length)];

    const newReview: ReviewItem = {
      id: `user-rev-${Date.now()}`,
      name: name.trim(),
      business: business?.trim() || "Verified Business",
      role: role?.trim() || "Owner",
      city: city?.trim() || "India",
      rating: numRating,
      title: title.trim(),
      comment: comment.trim(),
      product: product || "WebRajya Invoice",
      tags: Array.isArray(tags) && tags.length > 0 ? tags : ["Verified User", "Direct Feedback"],
      date: "Just now",
      verified: true,
      helpfulCount: 1,
      avatarColor: randomGradient,
    };

    // Store in runtime array at the front
    submittedReviews.unshift(newReview);

    return NextResponse.json({
      success: true,
      message: "Review submitted successfully!",
      review: newReview,
    });
  } catch (err: unknown) {
    console.error("Error creating review:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error while submitting review." },
      { status: 500 }
    );
  }
}
