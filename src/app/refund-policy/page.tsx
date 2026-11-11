import { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LEGAL_CONFIG } from "@/config/legal";
import { getLegalMetadata } from "@/components/legal/metadata";

export const metadata: Metadata = getLegalMetadata(
  "Cancellation and Refund Policy",
  "WebRajya Invoice Cancellation and Refund Policy: 7-day claim window, eligible conditions, and refund process."
);

export default function RefundPolicyPage() {
  return (
    <LegalPageLayout
      title="4. Cancellation and Refund Policy"
      subtitle="WebRajya Invoice: Website Policies"
    >
      <section className="space-y-6">
        <div>
          <p>
            <strong>Our approach.</strong> If something goes wrong, we fix it first. You can also try the software free for 3 days before you buy, so we do not refund a paid plan because you changed your mind.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">When we will refund</h2>
          <p>
            Raise your claim within 7 days of payment. We will refund the affected amount if:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>You were charged twice, or charged a wrong amount. We refund the extra amount.</li>
            <li>
              The software failed to work as described on our website for your plan, you reported it with details, and we could not fix it within 7 days of your report. We refund the amount you paid for that plan period, or for Lifetime the amount you paid for the licence.
            </li>
            <li>
              You were charged for an auto-renewal after you had validly cancelled it before the renewal date.
            </li>
          </ul>
          <p className="mt-3 text-slate-600 italic">
            Problems you find after the 7-day claim window are still fixed under your plan’s support and bug-fix terms.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">What is not refundable</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Change of mind, or not using the software after you bought it.</li>
            <li>Unused time left in a plan after you cancel.</li>
            <li>Problems caused by your internet, devices or third-party services.</li>
            <li>Features not described for your plan on our website.</li>
            <li>Paid services such as data migration or data export, once the work has been done.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">How to claim</h2>
          <p>
            Send your payment proof and a short description by WhatsApp or email to{" "}
            <a href={`mailto:${LEGAL_CONFIG.CONTACT_EMAIL}`} className="text-emerald-700 underline">
              {LEGAL_CONFIG.CONTACT_EMAIL}
            </a>{" "}
            / {LEGAL_CONFIG.CONTACT_PHONE}. We will reply within 2 working days. Approved refunds go back to the original payment method, or to the paying account for UPI or bank transfers, within 7 to 10 working days.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">Amount</h2>
          <p>
            Refunds are the amount you actually paid. While we are not GST-registered, no GST is included. After registration, GST on a refunded invoice is handled as the law requires.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">Your legal rights</h2>
          <p>
            Nothing in this policy limits any right you have under Indian consumer law.
          </p>
        </div>
      </section>
    </LegalPageLayout>
  );
}

