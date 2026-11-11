import { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { Placeholder } from "@/components/legal/Placeholder";
import { LEGAL_CONFIG } from "@/config/legal";
import { getLegalMetadata } from "@/components/legal/metadata";

export const metadata: Metadata = getLegalMetadata(
  "Data Retention and Deletion Policy",
  "WebRajya Invoice Data Retention and Deletion Policy: retention periods, deletion warnings, and paid export services."
);

export default function DataRetentionPage() {
  return (
    <LegalPageLayout
      title="6. Data Retention and Deletion Policy"
      subtitle="WebRajya Invoice: Website Policies"
    >
      <section className="space-y-6">
        <div>
          <h2 className="!mt-0 !pt-0 !border-0 text-lg font-bold text-slate-900 mb-2">
            Timeline for a paid plan
          </h2>
          <ol className="list-decimal pl-5 space-y-1.5">
            <li>Your plan expires. A 3-day view-only grace period begins.</li>
            <li>
              After the grace period, access is suspended. Your account and business data are kept securely for 1 year from the expiry date.
            </li>
            <li>If you renew within that year, your access and data are restored.</li>
            <li>
              15 days before the planned deletion date, we send a deletion warning by WhatsApp and email (and SMS where we have your number) to the contacts we hold.
            </li>
            <li>
              On the deletion date, your account and business data are permanently deleted from our live systems.
            </li>
            <li>
              Daily backups are kept for 7 days, so deleted data can remain in backups for up to 7 days before it disappears.
            </li>
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">Other cases</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>Trial not converted to a paid plan:</strong> the trial account and data are deleted 7 days after the trial ends.
            </li>
            <li>
              <strong>Lifetime licence:</strong> the 1-year period starts when the licence ends or the product is shut down.
            </li>
            <li>
              <strong>Earlier deletion on request:</strong> you can ask us to delete your data sooner. We will, unless the law requires us to keep some of it. Deletion is permanent.
            </li>
            <li>
              <strong>Records we must keep:</strong> billing and transaction records are kept for as long as the law requires.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">Getting a copy of your data</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              While your plan is active, you can view, print and download your invoices and reports from inside the software at no extra charge.
            </li>
            <li>
              A full export of your business data is a paid service at{" "}
              <Placeholder>{LEGAL_CONFIG.EXPORT_FEE}</Placeholder>. It is available while your plan is active and during the 1-year retention period. We will deliver it in Excel or CSV format within 5 working days of payment.
            </li>
            <li>
              Paying for an export does not reduce any right you have under the law to access your personal data.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">Backups</h2>
          <p>
            We take an automatic backup every 24 hours and keep each for 7 days. These are for our own disaster recovery. They are not a customer export service.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">Questions</h2>
          <p>
            <Placeholder>{LEGAL_CONFIG.PRIVACY_CONTACT_NAME}</Placeholder>,{" "}
            <a href={`mailto:${LEGAL_CONFIG.CONTACT_EMAIL}`} className="text-emerald-700 underline">
              {LEGAL_CONFIG.CONTACT_EMAIL}
            </a>
            , {LEGAL_CONFIG.CONTACT_PHONE}.
          </p>
        </div>
      </section>
    </LegalPageLayout>
  );
}
