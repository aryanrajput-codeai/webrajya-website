import { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { Placeholder } from "@/components/legal/Placeholder";
import { LEGAL_CONFIG } from "@/config/legal";
import { getLegalMetadata } from "@/components/legal/metadata";

export const metadata: Metadata = getLegalMetadata(
  "Lifetime Licence Terms",
  "WebRajya Invoice Lifetime Licence Terms: scope, definition, major upgrades, and fair-use limits."
);

export default function LifetimeTermsPage() {
  return (
    <LegalPageLayout
      title="5. Lifetime Licence Terms"
      subtitle="WebRajya Invoice: Website Policies"
    >
      <section className="space-y-6">
        <div>
          <h2 className="!mt-0 !pt-0 !border-0 text-lg font-bold text-slate-900 mb-2">
            1. What you get
          </h2>
          <p>
            A non-exclusive, non-transferable licence to use WebRajya Invoice for one business at one shop location, for as long as this licence lasts. Transfer to another owner is possible only with our written consent.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">
            2. More locations
          </h2>
          <p>
            Each additional shop location needs its own licence, at{" "}
            <Placeholder>{LEGAL_CONFIG.ADDITIONAL_LOCATION_PRICE}</Placeholder>.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">
            3. What “lifetime” means
          </h2>
          <p>
            It means for as long as we offer and support WebRajya Invoice. If we decide to shut the product down, we will give you at least 12 months written notice and a full export of your data during that period at no charge.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">
            4. What is included
          </h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              Hosting of your data within the fair-use limits:{" "}
              <Placeholder>{LEGAL_CONFIG.FAIR_USE_LIMITS}</Placeholder>.
            </li>
            <li>Basic support, as set out in the Support SLA.</li>
            <li>Bug fixes, security updates and maintenance.</li>
            <li>Updates needed to keep core billing working when tax rules or other laws change.</li>
            <li>Smaller improvements and new features released within your current version.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">
            5. What is a major upgrade
          </h2>
          <p>We may charge separately for:</p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>
              A new generation of the product released as a new version or product name, for example “version 2.0”, and marketed as a new version.
            </li>
            <li>A new optional paid module or add-on.</li>
          </ul>
          <p className="mt-3">
            The following are never major upgrades: bug fixes, security updates, performance work, compliance changes and small feature additions. We will publish the list of what is a major upgrade on our website, and decide in good faith. You are never forced to upgrade. Your current version keeps working and stays supported for at least 12 months after a major upgrade is released.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">
            6. Fair use
          </h2>
          <p>
            Use must stay within the limits above and the Terms and Conditions. We may limit or end a licence used to abuse the service.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">
            7. Ending the licence
          </h2>
          <p>
            The licence ends if you stop using it and ask us to close the account, if we end it for serious or repeated breach of the Terms, or if the product is shut down. A licence ended for breach is not refunded. In other cases the Cancellation and Refund Policy applies. The 1-year data retention period starts from the date the licence ends.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">
            8. Refunds
          </h2>
          <p>
            Lifetime is covered by the Cancellation and Refund Policy, with the same 7-day claim window.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">
            9. GST
          </h2>
          <p>
            We are not registered for GST at present and do not charge it. After we register, GST will apply to new purchases as the law requires.
          </p>
        </div>
      </section>
    </LegalPageLayout>
  );
}
