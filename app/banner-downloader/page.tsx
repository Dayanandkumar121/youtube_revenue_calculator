"use client";

import { useState } from "react";

export default function BannerDownloader() {
  const [handle, setHandle] = useState("");

  function search() {
    if (!handle.trim()) {
      alert("Enter a YouTube channel handle");
      return;
    }

    window.location.href = `/channel?handle=${encodeURIComponent(handle)}`;
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">

      <h1 className="text-center text-5xl font-black">
        YouTube Banner Downloader
      </h1>

      <p className="mt-4 text-center text-slate-600">
        Download any public YouTube channel banner in HD quality.
      </p>

      <div className="mt-10 flex gap-4">
        <input
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
          placeholder="@MrBeast or Channel URL"
          className="flex-1 rounded-xl border p-4"
        />

        <button
          onClick={search}
          className="rounded-xl bg-red-600 px-8 text-white"
        >
          Search
        </button>
      </div>

    </main>
  );
}