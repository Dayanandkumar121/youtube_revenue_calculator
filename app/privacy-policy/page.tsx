import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Creator Toolkit",
  description:
    "Read the Privacy Policy for Creator Toolkit to understand how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">

      <h1 className="text-5xl font-black text-slate-900">
        Privacy Policy
      </h1>

      <p className="mt-6 text-slate-600">
        Last Updated: July 2026
      </p>

      <div className="mt-10 space-y-10 text-lg leading-8 text-slate-700">

        <section>
          <h2 className="text-3xl font-bold text-slate-900">
            Introduction
          </h2>

          <p className="mt-4">
            Creator Toolkit respects your privacy. This Privacy Policy
            explains how we collect, use, and protect your information
            when you use our website and tools.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-slate-900">
            Information We Collect
          </h2>

          <ul className="mt-4 list-disc pl-6 space-y-2">
            <li>YouTube URLs entered into our tools.</li>
            <li>Browser and device information.</li>
            <li>Anonymous analytics data.</li>
            <li>Cookies required for website functionality.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-slate-900">
            How We Use Information
          </h2>

          <ul className="mt-4 list-disc pl-6 space-y-2">
            <li>Provide accurate YouTube tools.</li>
            <li>Improve website performance.</li>
            <li>Fix bugs and enhance user experience.</li>
            <li>Analyze website traffic anonymously.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-slate-900">
            Cookies
          </h2>

          <p className="mt-4">
            We may use cookies to improve functionality, remember
            preferences, and analyze website usage.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-slate-900">
            Third-Party Services
          </h2>

          <p className="mt-4">
            Our website may use services such as Google Analytics,
            Google AdSense, and YouTube APIs to provide functionality.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-slate-900">
            Contact
          </h2>

          <p className="mt-4">
            If you have questions regarding this Privacy Policy,
            please contact us through our Contact page.
          </p>
        </section>

      </div>

    </main>
  );
}