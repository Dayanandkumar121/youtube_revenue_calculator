import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Creator Toolkit",
  description:
    "Learn about Creator Toolkit and our mission to help YouTube creators grow with free tools.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">

      <h1 className="text-5xl font-black text-slate-900">
        About Creator Toolkit
      </h1>

      <p className="mt-8 text-lg leading-8 text-slate-700">
        Creator Toolkit is a free platform built for YouTube creators.
        Our goal is to provide powerful, easy-to-use tools that help
        creators estimate revenue, research keywords, optimize videos,
        and grow their channels.
      </p>

      <h2 className="mt-12 text-3xl font-bold">
        Our Mission
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-700">
        We believe every creator should have access to professional
        YouTube tools without paying expensive monthly subscriptions.
      </p>

      <h2 className="mt-12 text-3xl font-bold">
        What We Offer
      </h2>

      <ul className="mt-5 list-disc pl-6 space-y-3 text-lg text-slate-700">
        <li>YouTube Revenue Calculator</li>
        <li>Keyword Research Tool</li>
        <li>Revenue Analytics</li>
        <li>SEO Optimization Tools</li>
        <li>AI Creator Tools</li>
      </ul>

    </main>
  );
}