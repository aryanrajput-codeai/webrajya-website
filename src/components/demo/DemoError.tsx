import React from "react";
import { AlertCircle, RefreshCw } from "lucide-react";

interface DemoErrorProps {
  message?: string;
  onRetry: () => void;
}

export function DemoError({
  message = "Something went wrong while sending your request.",
  onRetry
}: DemoErrorProps) {
  return (
    <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-700 text-xs font-mono space-y-3">
      <div className="flex items-start gap-2.5">
        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
        <div className="space-y-1">
          <p className="font-bold text-sm text-rose-900">{message}</p>
          <p className="text-xs text-rose-700 font-sans">
            Please try again. Your entered form details have been kept intact.
          </p>
        </div>
      </div>

      <div className="pt-1">
        <button
          type="button"
          onClick={onRetry}
          className="px-3.5 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-mono font-bold flex items-center gap-1.5 transition-colors text-xs cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Try Again
        </button>
      </div>
    </div>
  );
}
