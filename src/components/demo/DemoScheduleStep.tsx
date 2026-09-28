import React from "react";
import { Calendar, Clock } from "lucide-react";

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
          Preferred demo schedule
        </h2>
        <p className="text-xs text-[#525866]">
          We&apos;ll use your preference when arranging the demo walkthrough.
        </p>
      </div>

      <div className="space-y-4">
        
        {/* Preferred Date Input */}
        <div className="space-y-1.5">
          <label htmlFor="preferredDate-input" className="text-xs font-mono text-[#020C2B] font-bold flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#E58145]" /> Preferred demo date *
          </label>
          <input
            id="preferredDate-input"
            type="date"
            min={todayStr}
            value={preferredDate}
            onChange={e => onChangeField("preferredDate", e.target.value)}
            aria-invalid={!!errors.preferredDate}
            aria-describedby={errors.preferredDate ? "preferredDate-error" : undefined}
            className={`w-full bg-[#F8F3EB] border rounded-xl px-4 py-3 text-[#020C2B] text-sm focus:outline-none focus:border-[#E58145] focus:ring-2 focus:ring-[#E58145]/20 font-mono font-medium ${
              errors.preferredDate ? "border-rose-500 bg-rose-50/50" : "border-[#020C2B]/15"
            }`}
          />
          {errors.preferredDate && (
            <p id="preferredDate-error" className="text-xs font-mono text-rose-600">
              {errors.preferredDate}
            </p>
          )}
        </div>

        {/* Preferred Time Selector */}
        <div className="space-y-1.5">
          <label htmlFor="preferredTime-select" className="text-xs font-mono text-[#020C2B] font-bold flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#E58145]" /> Preferred demo time *
          </label>
          <select
            id="preferredTime-select"
            value={preferredTime}
            onChange={e => onChangeField("preferredTime", e.target.value)}
            aria-invalid={!!errors.preferredTime}
            aria-describedby={errors.preferredTime ? "preferredTime-error" : undefined}
            className={`w-full bg-[#F8F3EB] border rounded-xl px-4 py-3 text-[#020C2B] text-sm focus:outline-none focus:border-[#E58145] focus:ring-2 focus:ring-[#E58145]/20 font-medium cursor-pointer ${
              errors.preferredTime ? "border-rose-500 bg-rose-50/50" : "border-[#020C2B]/15"
            }`}
          >
            <option value="">-- Select preferred time slot --</option>
            {timeOptions.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {errors.preferredTime && (
            <p id="preferredTime-error" className="text-xs font-mono text-rose-600">
              {errors.preferredTime}
            </p>
          )}
        </div>

        <p className="text-xs text-[#525866] font-mono pt-2">
          Note: Your requested slot is used as your preferred timing when our team reaches out to confirm your session.
        </p>
      </div>
    </div>
  );
}
