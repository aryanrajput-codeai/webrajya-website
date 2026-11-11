import { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { getLegalMetadata } from "@/components/legal/metadata";

export const metadata: Metadata = getLegalMetadata(
  "Subscription and Renewal Terms",
  "WebRajya Invoice Subscription and Renewal Terms: billing plans, manual renewal via UPI/bank transfer, grace period, and cancellation terms."
);

export default function SubscriptionTermsPage() {
  return (
    <LegalPageLayout
      title="3. Subscription and Renewal Terms"
      subtitle="WebRajya Invoice: Website Policies"
      effectiveDate="18 November 2026"
    >
      <section className="space-y-6">
        <div>
          <h2 className="!mt-0 !pt-0 !border-0 text-lg font-bold text-slate-900 mb-2">
            1. Plans
          </h2>
          <p>
            Monthly (₹599 per month) lasts one month. Annual (₹5,999 per year) lasts 12 months. Lifetime is a one-time payment with no renewal and is covered by the Lifetime Licence Terms.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">
            2. Renewal
          </h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              All plans renew manually for now. We accept payment by UPI or bank transfer, and we never charge your account automatically.
            </li>
            <li>
              You renew by paying again before your plan expires. We remind you first (see section 3).
            </li>
            <li>
              If we offer automatic renewal in future, we will ask for your separate, explicit consent first and update these Terms.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">
            3. Reminders
          </h2>
          <p>
            We remind you 7 days and again 2 days before your plan expires or renews, by WhatsApp, SMS or email.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">
            4. Cancelling
          </h2>
          <p>
            You can stop using the service at any time by telling us through WhatsApp or email. We will confirm in writing within 1 working day. Nothing further is charged after you stop, because we do not charge automatically. You keep access until the end of the period you already paid for. The current period is not refunded (see the Cancellation and Refund Policy).
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">
            5. Failed or missed payment
          </h2>
          <p>
            A missed payment is treated as expiry.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">
            6. Expiry and grace period
          </h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              You get a 3-day grace period after expiry.
            </li>
            <li>
              During the grace period your account is view-only. You can view and print existing data, but you cannot create or change records.
            </li>
            <li>
              Full access returns as soon as renewal succeeds.
            </li>
            <li>
              After the grace period, access is suspended. Your data is then handled under the Data Retention and Deletion Policy.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">
            7. Price changes
          </h2>
          <p>
            We will give at least 30 days notice before the price of your plan changes. The new price applies from your next renewal, and you may cancel before then.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">
            8. GST
          </h2>
          <p>
            We are not registered for GST at present and do not charge it. After we register, GST will apply to new invoices and renewals as the law requires, and we will tell you before it does.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">
            9. Receipts
          </h2>
          <p>
            We give you a receipt or invoice for each payment, in the format your accountant has advised us to use.
          </p>
        </div>
      </section>
    </LegalPageLayout>
  );
}
