import type { Metadata } from "next";
import KeywordSearch from "@/components/keyword/KeywordSearch";

export const metadata: Metadata = {
  title: "YouTube Keyword Research Tool",
  description:
    "Find YouTube keyword ideas, long-tail keywords, search intent, tags and hashtags using AI.",
};

export default function KeywordResearchPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">

      <h1 className="text-center text-5xl font-black text-slate-900">
        YouTube Keyword Research Tool
      </h1>

      <p className="mx-auto mt-5 max-w-3xl text-center text-lg text-slate-600">
        Discover keyword ideas, search intent, titles, tags and hashtags using AI.
      </p>

      <div className="mt-12">
        <KeywordSearch />
      </div>

    </main>
  );
}