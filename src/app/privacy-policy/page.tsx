import { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LegalSummaryBox } from "@/components/legal/LegalSummaryBox";
import { LEGAL_CONFIG } from "@/config/legal";
import { getLegalMetadata } from "@/components/legal/metadata";

export const metadata: Metadata = getLegalMetadata(
  "Privacy Policy",
  "WebRajya Invoice Privacy Policy: how we handle your personal data, customer records, and privacy rights.",
  "/privacy-policy"
);

const tocItems = [
  { id: "who-we-are", label: "Who We Are & Two Roles" },
  { id: "what-we-collect", label: "What We Collect" },
  { id: "why-we-use-data", label: "Why We Use Your Data" },
  { id: "consent-sharing", label: "Consent & Who We Share Data With" },
  { id: "storage-security", label: "Where Data is Stored & Security" },
  { id: "retention", label: "How Long We Keep Data" },
  { id: "your-rights", label: "Your Rights" },
  { id: "children-cookies-changes", label: "Children, Cookies & Changes" },
  { id: "grievance-contact", label: "Grievance Contact" }
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="1. Privacy Policy"
      subtitle="WebRajya Invoice: Website Policies"
      effectiveDate="18 November 2026"
      toc={tocItems}
    >
      <LegalSummaryBox
        points={[
          "Aapki dukaan ka data, grahakon ke number aur inventory sirf aapka hai — WebRajya ise kisi third-party ko nahi bechta.",
          "Hum aapka contact info sirf software service, account setup aur important updates ke liye use karte hain.",
          "Aap jab chahein apna account data export kar sakte hain ya account delete karne ki request bhej sakte hain.",
          "Data security ke liye industry-standard encryption aur secure cloud servers use kiye jaate hain."
        ]}
      />

      <section id="who-we-are">
        <p>
          <strong>Who we are.</strong> WebRajya Invoice (“we”, “us”) is operated by {LEGAL_CONFIG.OWNER_FULL_NAME}, trading as WebRajya, at {LEGAL_CONFIG.CONTACT_ADDRESS}, India. Contact:{" "}
          <a href={`mailto:${LEGAL_CONFIG.CONTACT_EMAIL}`} className="text-emerald-700 underline font-medium">
            {LEGAL_CONFIG.CONTACT_EMAIL}
          </a>
          , {LEGAL_CONFIG.CONTACT_PHONE}.
        </p>

        <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">Two roles.</h3>
        <ul>
          <li>
            For your own account and contact details, we decide why and how the data is used. We are the data fiduciary.
          </li>
          <li>
            For the business data you enter in the software (invoices, stock, and your own customers’ details), you decide why it is collected. We only store and process it for you. You must have the right to enter that data, including any consent you need from your own customers.
          </li>
        </ul>
      </section>

      <section id="what-we-collect">
        <h2>What we collect.</h2>
        <ul>
          <li>
            <strong>Account and contact details:</strong> name, shop name, phone, email, shop type, area or address, language preference.
          </li>
          <li>
            <strong>Billing details:</strong> plan, payment status, transaction reference and amount. We do not store card numbers or UPI PINs. Payments are made by UPI or bank transfer, and we see the payer name, UPI ID or bank reference.
          </li>
          <li>
            <strong>Business data you enter in the software.</strong>
          </li>
          <li>
            <strong>Technical data:</strong> device, browser, IP address, app version and logs, used for security and troubleshooting.
          </li>
          <li>
            <strong>Website data:</strong> form entries, the source link you came from, and analytics data if you accept cookies.
          </li>
          <li>
            <strong>Support communications:</strong> WhatsApp messages, calls and screen-sharing sessions. We do not record screen sharing unless you agree.
          </li>
        </ul>
      </section>

      <section id="why-we-use-data">
        <h2>Why we use your data.</h2>
        <ul>
          <li>To run demos and trials, provide the software, and take payments.</li>
          <li>To give support and onboarding help.</li>
          <li>To send service messages such as renewal reminders, expiry notices and security alerts.</li>
          <li>To improve the product, keep it secure and prevent fraud.</li>
          <li>To meet legal obligations.</li>
          <li>To send marketing messages, only with your consent. You can opt out at any time.</li>
        </ul>
      </section>

      <section id="consent-sharing">
        <h2>Consent &amp; Who we share data with.</h2>
        <p>
          <strong>Consent.</strong> We ask for your consent for specific purposes in clear language. You can withdraw consent at any time by contacting us. Withdrawing may mean we can no longer provide some or all of the service.
        </p>

        <p>
          <strong>Who we share data with.</strong> We do not sell your data. We share it only with:
        </p>
        <ul>
          <li>Supabase, our database and hosting provider.</li>
          <li>Your bank or UPI provider, only as needed to process a payment you make.</li>
          <li>WhatsApp Business, for messaging you.</li>
          <li>Google Analytics, only if you accept analytics cookies.</li>
          <li>Our accountant and legal advisers, under confidentiality.</li>
          <li>Authorities, where the law requires it.</li>
        </ul>
        <p>
          Our team does not look at your business data unless you give permission, for example during a screen-sharing support session, or the law requires it.
        </p>
      </section>

      <section id="storage-security">
        <h2>Where data is stored &amp; Security.</h2>
        <p>
          <strong>Where data is stored.</strong> Your data is hosted with Supabase on servers in the Mumbai, India region (ap-south-1). Some providers, including Supabase for a few limited purposes and messaging or analytics services, may process limited data outside India.
        </p>

        <p>
          <strong>Security.</strong> We use encryption in transit and at rest, strong authentication, role-based access controls, an automatic backup every 24 hours (kept for 7 days) and regular security reviews. No system is completely secure. If a breach affects your personal data, we will inform you and the authorities as the law requires.
        </p>
      </section>

      <section id="retention">
        <h2>How long we keep data.</h2>
        <ul>
          <li><strong>Active account:</strong> for as long as your plan is active.</li>
          <li><strong>After a plan expires:</strong> account and business data are kept for 1 year, then deleted after a 15-day warning.</li>
          <li><strong>Lifetime plan:</strong> the 1-year period starts when the licence ends or the service is shut down.</li>
          <li><strong>Trial not converted to a paid plan:</strong> deleted 7 days after the trial ends.</li>
          <li><strong>Backups:</strong> daily copies are kept for 7 days, so deleted data may remain in backups for up to 7 days.</li>
          <li><strong>Billing and transaction records:</strong> for as long as the law requires.</li>
          <li><strong>Website enquiries that do not become customers:</strong> 12 months.</li>
        </ul>
      </section>

      <section id="your-rights">
        <h2>Your rights.</h2>
        <p>You can ask us to:</p>
        <ul>
          <li>Give you a summary of the personal data we hold about you.</li>
          <li>Correct or update it.</li>
          <li>Erase it, subject to legal retention duties.</li>
          <li>Stop processing it where you withdraw consent.</li>
          <li>Handle a grievance.</li>
          <li>Allow a person you nominate to exercise these rights if you die or cannot act.</li>
        </ul>
        <p>
          Email {LEGAL_CONFIG.PRIVACY_CONTACT_NAME} at{" "}
          <a href={`mailto:${LEGAL_CONFIG.CONTACT_EMAIL}`} className="text-emerald-700 underline font-medium">
            {LEGAL_CONFIG.CONTACT_EMAIL}
          </a>
          . We will acknowledge within 7 days and aim to resolve within 30 days. We may need to verify your identity first. A full export of your business data is a paid service (see the Data Retention and Deletion Policy), and this does not reduce any right you have under law. If your concern is not resolved, you may approach the Data Protection Board of India once its complaint process is available to you.
        </p>
      </section>

      <section id="children-cookies-changes">
        <h2>Children, Cookies &amp; Changes.</h2>
        <p>
          <strong>Children.</strong> The software is for businesses. It is not meant for anyone under 18.
        </p>
        <p>
          <strong>Cookies.</strong> We use necessary cookies. We use analytics cookies only if you accept them in the cookie banner.
        </p>
        <p>
          <strong>Changes.</strong> If we change this policy in a way that matters, we will tell you on the website, by WhatsApp or by email.
        </p>
      </section>

      <section id="grievance-contact">
        <h2>Grievance contact.</h2>
        <p>
          {LEGAL_CONFIG.PRIVACY_CONTACT_NAME},{" "}
          <a href={`mailto:${LEGAL_CONFIG.CONTACT_EMAIL}`} className="text-emerald-700 underline font-medium">
            {LEGAL_CONFIG.CONTACT_EMAIL}
          </a>
          , {LEGAL_CONFIG.CONTACT_PHONE}.<br />
          {LEGAL_CONFIG.SUPPORT_HOURS}.
        </p>
      </section>
    </LegalPageLayout>
  );
}
