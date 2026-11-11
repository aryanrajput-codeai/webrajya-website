import { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { getLegalMetadata } from "@/components/legal/metadata";

export const metadata: Metadata = getLegalMetadata(
  "Support SLA",
  "WebRajya Invoice Support SLA: coverage, response targets, channels, and included services for Annual and Lifetime customers."
);

export default function SupportSlaPage() {
  return (
    <LegalPageLayout
      title="7. Support SLA (Annual and Lifetime customers)"
      subtitle="WebRajya Invoice: Website Policies"
      effectiveDate="18 November 2026"
    >
      <section className="space-y-6">
        <div>
          <p>
            <strong>Who it covers.</strong> Annual and Lifetime customers. Monthly customers get the same support channels and standard support, but without the response targets below.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">Channels</h2>
          <p>
            WhatsApp, phone calls, remote screen sharing and free video tutorials. We share your screen only with your permission, and you can stop it at any time.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">Hours</h2>
          <p>
            Monday to Saturday, 9 AM to 8 PM. On Sundays we offer emergency support by phone and WhatsApp, with a response target of 4 hours. An emergency means you cannot log in or cannot bill your customers.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">Priorities and response targets</h2>
          
          {/* Sideways scrolling table on mobile */}
          <div className="overflow-x-auto my-4 -mx-4 sm:mx-0 px-4 sm:px-0">
            <table className="min-w-full divide-y divide-slate-200 border border-slate-200 rounded-lg text-sm bg-white shadow-sm">
              <thead className="bg-slate-100 text-slate-900 font-semibold text-left">
                <tr>
                  <th scope="col" className="py-3 px-4 w-28">Priority</th>
                  <th scope="col" className="py-3 px-4">Example</th>
                  <th scope="col" className="py-3 px-4 w-44">Target</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-semibold text-rose-700">Critical</td>
                  <td className="py-3 px-4">Software down, or you cannot create bills at all</td>
                  <td className="py-3 px-4 font-medium text-slate-900">Immediate attention</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-semibold text-amber-700">High</td>
                  <td className="py-3 px-4">A major feature is broken and no workaround exists</td>
                  <td className="py-3 px-4 font-medium text-slate-900">Within 24 hours</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-semibold text-slate-700">Normal</td>
                  <td className="py-3 px-4">Questions, small problems, how-to help</td>
                  <td className="py-3 px-4 font-medium text-slate-900">Within 48 to 72 hours</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-slate-600 italic">
            These are response and handling targets. They are not guaranteed fix times, and missing a target does not create a right to compensation or credit.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">Included at no charge</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              Basic setup help and supported Excel imports of products, opening stock and customer details.
            </li>
            <li>Free video tutorials on YouTube and our website.</li>
            <li>One live online training session each month.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">
            Charged separately (quoted before work starts)
          </h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Complex data migration, data cleaning and database conversions.</li>
            <li>Specialised migration or custom work.</li>
            <li>Full data export.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">What we need from you</h2>
          <p>
            A clear description of the problem, screenshots if possible, and access to your screen when you agree to a session.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">Not covered</h2>
          <p>
            Problems caused by your devices, internet or third-party services, planned maintenance (we will give notice where we can), and events beyond our control.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">Changes</h2>
          <p>
            We may update this SLA with notice. The version in force when you bought your plan stays the minimum we apply to you.
          </p>
        </div>
      </section>
    </LegalPageLayout>
  );
}
