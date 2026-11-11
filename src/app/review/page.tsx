"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Sparkles, Star } from "lucide-react";

export default function ReviewRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to homepage reviews section with action=write parameter
    router.replace("/#reviews?action=write");
  }, [router]);

  return (
    <div className="min-h-screen bg-[#F8F3EB] flex flex-col items-center justify-center p-6 text-center text-[#020C2B]">
      <div className="w-16 h-16 rounded-2xl bg-[#020C2B] text-[#E58145] flex items-center justify-center mx-auto mb-4 animate-bounce">
        <Sparkles className="w-8 h-8" />
      </div>

      <div className="flex items-center justify-center gap-1 text-amber-500 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-current" />
        ))}
      </div>

      <h1 className="text-2xl font-black tracking-tight mb-2">
        Opening WebRajya Review Form...
      </h1>

      <p className="text-xs sm:text-sm text-[#525866] max-w-sm mb-6">
        Redirecting you to share your genuine feedback and ratings.
      </p>

      <a
        href="/#reviews?action=write"
        className="text-xs font-mono font-bold text-[#E58145] underline"
      >
        Click here if not redirected automatically
      </a>
    </div>
  );
}
