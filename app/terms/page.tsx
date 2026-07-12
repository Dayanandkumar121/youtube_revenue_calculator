import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Creator Toolkit",
  description:
    "Read the Terms and Conditions for using Creator Toolkit and its free YouTube tools.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">

      <h1 className="text-5xl font-black text-slate-900">
        Terms & Conditions
      </h1>

      <p className="mt-6 text-slate-600">
        Last Updated: July 2026
      </p>

      <div className="mt-10 space-y-10 text-lg leading-8 text-slate-700">

        <section>
          <h2 className="text-3xl font-bold text-slate-900">
            Acceptance of Terms
          </h2>

          <p className="mt-4">
            By accessing and using Creator Toolkit, you agree to comply
            with these Terms and Conditions. If you do not agree with
            these terms, please discontinue using the website.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-slate-900">
            Use of Our Services
          </h2>

          <ul className="mt-4 list-disc pl-6 space-y-2">
            <li>Use our tools only for lawful purposes.</li>
            <li>Do not attempt to misuse or disrupt our services.</li>
            <li>Do not copy or redistribute our content without permission.</li>
            <li>Respect YouTube's Terms of Service while using our tools.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-slate-900">
            Intellectual Property
          </h2>

          <p className="mt-4">
            All website content, branding, design, and software belong to
            Creator Toolkit unless otherwise stated.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-slate-900">
            Limitation of Liability
          </h2>

          <p className="mt-4">
            Our calculators and AI tools provide estimates and generated
            content for informational purposes only. We do not guarantee
            accuracy or financial results.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-slate-900">
            Changes to These Terms
          </h2>

          <p className="mt-4">
            We may update these Terms & Conditions at any time. Continued
            use of the website means you accept any changes.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-slate-900">
            Contact
          </h2>

          <p className="mt-4">
            If you have questions regarding these Terms & Conditions,
            please contact us through our Contact page.
          </p>
        </section>

      </div>

    </main>
  );
}