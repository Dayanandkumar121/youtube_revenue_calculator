"use client";

import { useMemo, useState } from "react";
import { generateHashtags } from "@/utils/hashtagGenerator";

export default function HashtagGenerator() {
  const [title, setTitle] = useState("");
  const [keyword, setKeyword] = useState("");

  const hashtags = useMemo(() => {
    if (!title && !keyword) return [];
    return generateHashtags(title, keyword);
  }, [title, keyword]);

  const text = hashtags.map((h) => `#${h}`).join(" ");

  async function copyHashtags() {
    await navigator.clipboard.writeText(text);
    alert("Hashtags copied!");
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8">

        <h1 className="text-4xl font-bold text-center">
          #️⃣ YouTube Hashtag Generator
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Generate trending YouTube hashtags instantly.
        </p>

        <div className="mt-10 space-y-5">

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Video Title"
            className="w-full p-4 border-2 border-gray-300 rounded-xl focus:border-red-500 outline-none"
          />

          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Main Keyword"
            className="w-full p-4 border-2 border-gray-300 rounded-xl focus:border-red-500 outline-none"
          />

        </div>

        {hashtags.length > 0 && (
          <>
            <div className="flex flex-wrap gap-3 mt-10">
              {hashtags.map((tag) => (
                <span
                  key={tag}
                  className="bg-red-100 text-red-600 px-4 py-2 rounded-full font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <button
              onClick={copyHashtags}
              className="mt-8 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              📋 Copy Hashtags
            </button>
          </>
        )}
      </div>
    </div>
  );
}