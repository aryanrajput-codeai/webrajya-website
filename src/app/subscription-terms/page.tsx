import { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { Placeholder } from "@/components/legal/Placeholder";
import { LEGAL_CONFIG } from "@/config/legal";
import { getLegalMetadata } from "@/components/legal/metadata";

export const metadata: Metadata = getLegalMetadata(
  "Subscription and Auto-Renewal Terms",
  "WebRajya Invoice Subscription Terms: billing intervals, autopay rules, grace period, and cancellation policy."
);

export default function SubscriptionTermsPage() {
  return (
    <LegalPageLayout
      title="3. Subscription and Auto-Renewal Terms"
      subtitle="WebRajya Invoice: Website Policies"
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
            2. Automatic renewal
          </h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              Monthly renews automatically only if you choose payment-gateway autopay and tick a separate consent box at sign-up. The box is never pre-ticked.
            </li>
            <li>
              Annual does not renew automatically. You renew it yourself.
            </li>
            <li>
              If you pay by direct UPI or bank transfer, there is no automatic renewal. We send reminders and you pay again yourself.
            </li>
            <li>
              Autopay is run through <Placeholder>{LEGAL_CONFIG.PAYMENT_GATEWAY}</Placeholder> and follows the rules for recurring payments, including any advance notice of the charge that the rules require.
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
            4. Cancelling auto-renewal
          </h2>
          <p>
            You can cancel at any time before the next charge date through WhatsApp or email. We will confirm in writing within 1 working day. Cancelling stops future charges. You keep access until the end of the period you already paid for. The current period is not refunded (see the Cancellation and Refund Policy).
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">
            5. Failed or missed payment
          </h2>
          <p>
            A failed autopay or a missed manual payment is treated as expiry.
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

