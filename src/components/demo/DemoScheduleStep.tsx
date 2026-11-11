import React from "react";
import { Calendar, Clock, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface DemoScheduleStepProps {
  preferredDate: string;
  preferredTime: string;
  errors: Record<string, string>;
  onChangeField: (field: string, value: string) => void;
}

export function DemoScheduleStep({
  preferredDate,
  preferredTime,
  errors,
  onChangeField
}: DemoScheduleStepProps) {
  const todayStr = new Date().toISOString().split("T")[0];

  const timeOptions = [
    "Morning (10:00 AM – 1:00 PM IST)",
    "Afternoon (2:00 PM – 5:00 PM IST)",
    "Evening (5:00 PM – 7:00 PM IST)"
  ];

  return (
    <div className="space-y-6 font-sans">
      <div className="space-y-1">
        <span className="text-xs font-mono uppercase text-[#E58145] tracking-wider font-bold block">
          STEP 04 OF 04
        </span>
        <h2 className="text-2xl font-extrabold text-[#020C2B]">
          Preferred Demo Schedule
        </h2>
        <p className="text-xs text-[#525866]">
          We&apos;ll use your preference when arranging the demo walkthrough.
        </p>
      </div>

      <div className="space-y-5">
        {/* Preferred Date Input */}
        <div className="space-y-1.5">
          <Label htmlFor="preferredDate-input" className="text-xs font-mono text-[#020C2B] font-bold flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#E58145]" /> Preferred Demo Date *
          </Label>
          <Input
            id="preferredDate-input"
            type="date"
            min={todayStr}
            value={preferredDate}
            onChange={(e) => onChangeField("preferredDate", e.target.value)}
            aria-invalid={!!errors.preferredDate}
            aria-describedby={errors.preferredDate ? "preferredDate-error" : undefined}
            className={`h-11 rounded-xl bg-[#F8F3EB] font-mono ${
              errors.preferredDate ? "border-rose-500 bg-rose-50/50" : "border-[#020C2B]/15"
            }`}
          />
          {errors.preferredDate && (
            <p id="preferredDate-error" className="text-xs font-mono text-rose-600">
              {errors.preferredDate}
            </p>
          )}
        </div>

        {/* Preferred Time Window */}
        <div className="space-y-2">
          <Label className="text-xs font-mono text-[#020C2B] font-bold flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#E58145]" /> Preferred Time Window *
          </Label>
          <div className="space-y-2">
            {timeOptions.map((time) => {
              const isSelected = preferredTime === time;
              return (
                <button
                  key={time}
                  type="button"
                  onClick={() => onChangeField("preferredTime", time)}
                  className={`w-full p-3.5 rounded-xl border text-xs font-mono flex items-center justify-between transition-all cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-[#E58145] ${
                    isSelected
                      ? "bg-[#020C2B] text-white border-[#E58145] font-bold shadow-sm"
                      : "bg-[#F8F3EB] border-[#020C2B]/10 text-[#020C2B] hover:border-[#E58145]/40 hover:bg-white"
                  }`}
                >
                  <span>{time}</span>
                  {isSelected && <CheckCircle2 className="w-4 h-4 text-[#E58145] shrink-0" />}
                </button>
              );
            })}
          </div>
          {errors.preferredTime && (
            <p id="preferredTime-error" className="text-xs font-mono text-rose-600 pt-1">
              {errors.preferredTime}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
