import React from "react";

interface DemoDetailsStepProps {
  fullName: string;
  businessName: string;
  phone: string;
  email: string;
  message?: string;
  errors: Record<string, string>;
  onChangeField: (field: string, value: string) => void;
}

export function DemoDetailsStep({
  fullName,
  businessName,
  phone,
  email,
  message,
  errors,
  onChangeField
}: DemoDetailsStepProps) {
  return (
    <div className="space-y-6 font-sans">
      <div className="space-y-1">
        <span className="text-xs font-mono uppercase text-[#E58145] tracking-wider font-bold block">
          STEP 03 OF 04
        </span>
        <h2 className="text-2xl font-extrabold text-[#020C2B]">
          Your contact details
        </h2>
        <p className="text-xs text-[#525866]">
          Enter your contact information so our team can coordinate your walkthrough.
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Full Name */}
          <div className="space-y-1.5">
            <label htmlFor="fullName-input" className="text-xs font-mono text-[#020C2B] font-bold block">
              Full Name *
            </label>
            <input
              id="fullName-input"
              type="text"
              value={fullName}
              onChange={e => onChangeField("fullName", e.target.value)}
              placeholder="John Doe"
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              className={`w-full bg-[#F8F3EB] border rounded-xl px-4 py-2.5 text-[#020C2B] text-sm focus:outline-none focus:border-[#E58145] focus:ring-2 focus:ring-[#E58145]/20 ${
                errors.fullName ? "border-rose-500 bg-rose-50/50" : "border-[#020C2B]/15"
              }`}
            />
            {errors.fullName && (
              <p id="fullName-error" className="text-xs font-mono text-rose-600">
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Business Name */}
          <div className="space-y-1.5">
            <label htmlFor="businessName-details-input" className="text-xs font-mono text-[#020C2B] font-bold block">
              Business Name *
            </label>
            <input
              id="businessName-details-input"
              type="text"
              value={businessName}
              onChange={e => onChangeField("businessName", e.target.value)}
              placeholder="e.g. Royal Feast Cafe"
              aria-invalid={!!errors.businessName}
              aria-describedby={errors.businessName ? "businessName-details-error" : undefined}
              className={`w-full bg-[#F8F3EB] border rounded-xl px-4 py-2.5 text-[#020C2B] text-sm focus:outline-none focus:border-[#E58145] focus:ring-2 focus:ring-[#E58145]/20 ${
                errors.businessName ? "border-rose-500 bg-rose-50/50" : "border-[#020C2B]/15"
              }`}
            />
            {errors.businessName && (
              <p id="businessName-details-error" className="text-xs font-mono text-rose-600">
                {errors.businessName}
              </p>
            )}
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Phone Number */}
          <div className="space-y-1.5">
            <label htmlFor="phone-input" className="text-xs font-mono text-[#020C2B] font-bold block">
              Phone Number *
            </label>
            <input
              id="phone-input"
              type="tel"
              value={phone}
              onChange={e => onChangeField("phone", e.target.value)}
              placeholder="+91 98765 43210"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={`w-full bg-[#F8F3EB] border rounded-xl px-4 py-2.5 text-[#020C2B] text-sm focus:outline-none focus:border-[#E58145] focus:ring-2 focus:ring-[#E58145]/20 ${
                errors.phone ? "border-rose-500 bg-rose-50/50" : "border-[#020C2B]/15"
              }`}
            />
            {errors.phone && (
              <p id="phone-error" className="text-xs font-mono text-rose-600">
                {errors.phone}
              </p>
            )}
          </div>

          {/* Email Address */}
          <div className="space-y-1.5">
            <label htmlFor="email-input" className="text-xs font-mono text-[#020C2B] font-bold block">
              Email Address *
            </label>
            <input
              id="email-input"
              type="email"
              value={email}
              onChange={e => onChangeField("email", e.target.value)}
              placeholder="name@company.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`w-full bg-[#F8F3EB] border rounded-xl px-4 py-2.5 text-[#020C2B] text-sm focus:outline-none focus:border-[#E58145] focus:ring-2 focus:ring-[#E58145]/20 ${
                errors.email ? "border-rose-500 bg-rose-50/50" : "border-[#020C2B]/15"
              }`}
            />
            {errors.email && (
              <p id="email-error" className="text-xs font-mono text-rose-600">
                {errors.email}
              </p>
            )}
          </div>

        </div>

        {/* Message / What would you like to see? */}
        <div className="space-y-1.5">
          <label htmlFor="message-input" className="text-xs font-mono text-[#020C2B] font-bold block">
            What would you like to see in the demo? (Optional)
          </label>
          <textarea
            id="message-input"
            rows={3}
            value={message || ""}
            onChange={e => onChangeField("message", e.target.value)}
            placeholder="Tell us about your registers, billing counters, or invoicing requirements..."
            className="w-full bg-[#F8F3EB] border border-[#020C2B]/15 rounded-xl px-4 py-2.5 text-[#020C2B] text-sm focus:outline-none focus:border-[#E58145] focus:ring-2 focus:ring-[#E58145]/20 resize-none font-medium"
          />
        </div>
      </div>
    </div>
  );
}
