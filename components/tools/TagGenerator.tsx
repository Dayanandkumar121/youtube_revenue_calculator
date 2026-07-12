"use client";

import { useMemo, useState } from "react";
import { generateTags } from "@/utils/tagGenerator";

export default function TagGenerator() {
  const [title, setTitle] = useState("");
  const [keyword, setKeyword] = useState("");

  const tags = useMemo(() => {
    if (!title && !keyword) return [];
    return generateTags(title, keyword);
  }, [title, keyword]);

  const tagString = tags.join(", ");

  async function copyTags() {
    await navigator.clipboard.writeText(tagString);
    alert("Tags copied!");
  }

  return (
    <div className="max-w-5xl mx-auto">

      <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8">

        <h1 className="text-4xl font-bold text-center">
          🏷 YouTube Tag Generator
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Generate SEO-friendly YouTube tags instantly.
        </p>

        <div className="mt-10 space-y-6">

          <input
            type="text"
            placeholder="Video Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-xl px-5 py-4 text-lg focus:ring-2 focus:ring-red-500 outline-none"
          />

          <input
            type="text"
            placeholder="Main Keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full border rounded-xl px-5 py-4 text-lg focus:ring-2 focus:ring-red-500 outline-none"
          />

        </div>

        {tags.length > 0 && (
          <>
            <div className="mt-10 flex flex-wrap gap-3">

              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-red-100 text-red-700 px-4 py-2 rounded-full font-medium"
                >
                  #{tag}
                </span>
              ))}

            </div>

            <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

              <button
                onClick={copyTags}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition"
              >
                📋 Copy All Tags
              </button>

              <p className="text-gray-500">
                Characters: {tagString.length} / 500
              </p>

            </div>
          </>
        )}

      </div>

    </div>
  );
}