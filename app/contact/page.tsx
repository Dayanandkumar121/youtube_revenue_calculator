import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Creator Toolkit",
  description:
    "Contact Creator Toolkit for questions, feedback, partnerships, or support.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">

      <h1 className="text-5xl font-black text-slate-900">
        Contact Us
      </h1>

      <p className="mt-6 text-lg leading-8 text-slate-700">
        We'd love to hear from you. Whether you have feedback,
        feature requests, bug reports, or business inquiries,
        feel free to reach out.
      </p>

      <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow">

        <h2 className="text-2xl font-bold">
          Get in Touch
        </h2>

        <div className="mt-8 space-y-6">

          <div>
            <h3 className="font-semibold text-slate-900">
              Email
            </h3>

            <p className="text-slate-600">
              support@dayanandkumar96460.com
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Business
            </h3>

            <p className="text-slate-600">
              partnerships@dayanandkumar96460.com
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Response Time
            </h3>

            <p className="text-slate-600">
              We usually reply within 24–48 hours.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}