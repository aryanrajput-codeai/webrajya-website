import { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { Placeholder } from "@/components/legal/Placeholder";
import { LEGAL_CONFIG } from "@/config/legal";
import { getLegalMetadata } from "@/components/legal/metadata";

export const metadata: Metadata = getLegalMetadata(
  "Terms and Conditions",
  "WebRajya Invoice Terms and Conditions: rules, responsibilities, liability limits, and dispute resolution."
);

const tocItems = [
  { id: "section-1", label: "1. Who we are and what we provide" },
  { id: "section-2", label: "2. Who can use it" },
  { id: "section-3", label: "3. Trial" },
  { id: "section-4", label: "4. Plans and prices" },
  { id: "section-5", label: "5. Your account" },
  { id: "section-6", label: "6. Your data" },
  { id: "section-7", label: "7. Acceptable use" },
  { id: "section-8", label: "8. Our rights in the software" },
  { id: "section-9", label: "9. Tax and legal responsibility" },
  { id: "section-10", label: "10. Availability and backups" },
  { id: "section-11", label: "11. Support" },
  { id: "section-12", label: "12. Mobile app" },
  { id: "section-13", label: "13. Limits on our liability" },
  { id: "section-14", label: "14. Ending the agreement" },
  { id: "section-15", label: "15. Changes" },
  { id: "section-16", label: "16. Law and disputes" },
  { id: "section-17", label: "17. Contact" }
];

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="2. Terms and Conditions"
      subtitle="WebRajya Invoice: Website Policies"
      toc={tocItems}
    >
      <section id="section-1" className="mb-6">
        <h2 className="!mt-0 !pt-0 !border-0 text-lg font-bold text-slate-900 mb-2">
          1. Who we are and what we provide
        </h2>
        <p>
          WebRajya Invoice is billing, inventory and business management software provided by{" "}
          <Placeholder>{LEGAL_CONFIG.OWNER_FULL_NAME}</Placeholder>, trading as WebRajya, {LEGAL_CONFIG.CONTACT_ADDRESS} (“we”). By using the website, trial, web software or mobile app (when available), you (“Customer”) accept these Terms and the linked policies.
        </p>
      </section>

      <section id="section-2" className="mb-6">
        <h2 className="text-lg font-bold text-slate-900 mb-2">2. Who can use it</h2>
        <p>
          You must be 18 or older and be using the software for a business. If you sign up for a business, you confirm you can accept these Terms for it.
        </p>
      </section>

      <section id="section-3" className="mb-6">
        <h2 className="text-lg font-bold text-slate-900 mb-2">3. Trial</h2>
        <p>
          After a live demo, you can use the software free for 3 days. No payment is needed. If you do not buy a plan, your trial data is deleted 7 days after the trial ends. Any separate free pilot is covered by its own written note.
        </p>
      </section>

      <section id="section-4" className="mb-6">
        <h2 className="text-lg font-bold text-slate-900 mb-2">4. Plans and prices</h2>
        <p>
          Current plans are Monthly (₹599 per month), Annual (₹5,999 per year) and Lifetime. Prices on the website are final prices. We are not registered for GST at present and do not charge GST. After we register, GST will apply to new invoices and renewals as the law requires, and we will tell you before it applies. See the Subscription and Auto-Renewal Terms and the Lifetime Licence Terms.
        </p>
      </section>

      <section id="section-5" className="mb-6">
        <h2 className="text-lg font-bold text-slate-900 mb-2">5. Your account</h2>
        <p>
          Keep your login details safe. You are responsible for what happens under your account and for the users you add. Tell us quickly if you think someone else has access.
        </p>
      </section>

      <section id="section-6" className="mb-6">
        <h2 className="text-lg font-bold text-slate-900 mb-2">6. Your data</h2>
        <p>
          You own the business data you enter. You give us permission to store and process it only to provide the service, support you and keep it secure. We will not sell it. See the Privacy Policy.
        </p>
      </section>

      <section id="section-7" className="mb-6">
        <h2 className="text-lg font-bold text-slate-900 mb-2">7. Acceptable use</h2>
        <p>
          Do not use the software for anything unlawful or fraudulent, try to break its security, copy or resell it, or overload it. We may suspend an account that breaks these rules, after telling you where we reasonably can.
        </p>
      </section>

      <section id="section-8" className="mb-6">
        <h2 className="text-lg font-bold text-slate-900 mb-2">8. Our rights in the software</h2>
        <p>
          The software, its design and our brand belong to us. Your plan gives you a right to use it, not ownership. If you send us feedback, we may use it to improve the product.
        </p>
      </section>

      <section id="section-9" className="mb-6">
        <h2 className="text-lg font-bold text-slate-900 mb-2">9. Tax and legal responsibility</h2>
        <p>
          The software is a tool. You remain responsible for the accuracy of your invoices, stock records, tax filings and legal compliance. We do not give tax or legal advice. Check important tax settings with your own accountant.
        </p>
      </section>

      <section id="section-10" className="mb-6">
        <h2 className="text-lg font-bold text-slate-900 mb-2">10. Availability and backups</h2>
        <p>
          We work to keep the service running, but we cannot promise it will never be interrupted. We may carry out maintenance. We take automatic backups every 24 hours and keep them for 7 days for our own recovery. You should keep your own copies of records you are required by law to keep.
        </p>
      </section>

      <section id="section-11" className="mb-6">
        <h2 className="text-lg font-bold text-slate-900 mb-2">11. Support</h2>
        <p>
          Support is described in the Support SLA. Basic setup help and supported Excel imports are free. Complex data migration, data cleaning and special conversions are paid and quoted before work starts.
        </p>
      </section>

      <section id="section-12" className="mb-6">
        <h2 className="text-lg font-bold text-slate-900 mb-2">12. Mobile app</h2>
        <p>
          When the mobile app is available, these Terms apply to it, together with the app store’s own terms.
        </p>
      </section>

      <section id="section-13" className="mb-6">
        <h2 className="text-lg font-bold text-slate-900 mb-2">13. Limits on our liability</h2>
        <p>
          We are not liable for indirect or consequential loss, such as lost profit or lost business, or for problems caused by your internet, devices or third-party services. Our total liability for any claim is limited to the amount you paid us for the plan in the 12 months before the claim. Nothing in these Terms removes rights you have under law that cannot be excluded, including consumer rights, or limits liability for our own fraud.
        </p>
      </section>

      <section id="section-14" className="mb-6">
        <h2 className="text-lg font-bold text-slate-900 mb-2">14. Ending the agreement</h2>
        <p>
          You may stop using the service at any time. Cancelling does not by itself create a refund (see the Cancellation and Refund Policy). We may end or suspend an account for serious or repeated breach of these Terms or non-payment, and what then happens to your data is explained in the Data Retention and Deletion Policy.
        </p>
      </section>

      <section id="section-15" className="mb-6">
        <h2 className="text-lg font-bold text-slate-900 mb-2">15. Changes</h2>
        <p>
          We may update these Terms. We will give notice of material changes on the website, by WhatsApp or by email. If you keep using the service after the notice period, you accept the change.
        </p>
      </section>

      <section id="section-16" className="mb-6">
        <h2 className="text-lg font-bold text-slate-900 mb-2">16. Law and disputes</h2>
        <p>
          Indian law applies. We will first try to settle any dispute by talking to you. If that fails, the courts at Nagpur, Maharashtra, will have jurisdiction, subject to any consumer right to approach another forum.
        </p>
      </section>

      <section id="section-17" className="mb-6">
        <h2 className="text-lg font-bold text-slate-900 mb-2">17. Contact</h2>
        <p>
          <a href={`mailto:${LEGAL_CONFIG.CONTACT_EMAIL}`} className="text-emerald-700 underline">
            {LEGAL_CONFIG.CONTACT_EMAIL}
          </a>
          , {LEGAL_CONFIG.CONTACT_PHONE}, {LEGAL_CONFIG.CONTACT_ADDRESS}.
        </p>
      </section>
    </LegalPageLayout>
  );
}
