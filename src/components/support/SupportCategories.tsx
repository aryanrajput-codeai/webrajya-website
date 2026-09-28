import React from "react";
import Link from "next/link";
import {
  FileText,
  Utensils,
  CreditCard,
  BarChart3,
  Settings,
  Printer,
  ArrowRight
} from "lucide-react";
import { SUPPORT_CATEGORIES, SupportCategory } from "@/data/supportArticles";

export function SupportCategories() {
  const iconMap: Record<string, React.ReactNode> = {
    FileText: <FileText className="w-5 h-5 text-[#E58145]" />,
    Utensils: <Utensils className="w-5 h-5 text-[#E58145]" />,
    CreditCard: <CreditCard className="w-5 h-5 text-[#E58145]" />,
    BarChart3: <BarChart3 className="w-5 h-5 text-[#E58145]" />,
    Settings: <Settings className="w-5 h-5 text-[#E58145]" />,
    Printer: <Printer className="w-5 h-5 text-[#E58145]" />
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="text-center space-y-1">
        <span className="text-xs font-mono uppercase text-[#020C2B] tracking-wider bg-[#020C2B]/5 px-3 py-1 rounded-full border border-[#020C2B]/10 font-bold">
          DOCUMENTATION CATEGORIES
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#020C2B]">
          Browse Support Categories
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SUPPORT_CATEGORIES.map(cat => (
          <Link
            key={cat.slug}
            href={`/support/${cat.slug}`}
            className="group p-6 rounded-3xl bg-white border border-[#020C2B]/10 shadow-sm hover:border-[#E58145] hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-[#F8F3EB] border border-[#020C2B]/10 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                  {iconMap[cat.iconName]}
                </div>
                <span className="text-[10px] font-mono font-bold text-[#525866] uppercase tracking-wider group-hover:text-[#E58145] transition-colors">
                  WebRajya Docs
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#020C2B] group-hover:text-[#E58145] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-[#525866] leading-relaxed mt-1.5">
                  {cat.description}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-[#020C2B]/10 flex items-center justify-between text-xs font-mono text-[#020C2B]">
              <span className="font-semibold group-hover:text-[#E58145] transition-colors">View Articles</span>
              <ArrowRight className="w-4 h-4 text-[#E58145] group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
