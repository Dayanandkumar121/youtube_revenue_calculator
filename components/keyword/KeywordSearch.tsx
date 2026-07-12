"use client";

import { useState } from "react";
import { generateKeyword } from "@/services/keyword";
import KeywordResults from "./KeywordResults";

export default function KeywordSearch() {
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  async function handleSearch() {
    if (!keyword.trim()) {
      setError("Please enter a keyword.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const data = await generateKeyword(keyword);

      console.log("Keyword Result:", data);
      console.log("Type:", typeof data);
      console.log("Search Intent:", data.searchIntent);
      console.log("Related:", data.relatedKeywords);

      setResult(data);
    } catch (err: any) {
      setError(err.message);
    }

    setLoading(false);
  }

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl">

      <div className="flex flex-col gap-4 md:flex-row">

        <input
          type="text"
          placeholder="Enter YouTube Keyword..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="flex-1 rounded-xl border border-slate-300 px-5 py-4 text-lg outline-none focus:border-red-500"
        />

        <button
          onClick={handleSearch}
          className="rounded-xl bg-red-600 px-8 py-4 font-semibold text-white hover:bg-red-700"
        >
          {loading ? "Searching..." : "Search"}
        </button>

      </div>

      {error && (
        <p className="mt-6 text-red-600 font-semibold">
          {error}
        </p>
      )}

      <KeywordResults result={result} />

    </div>
  );
}