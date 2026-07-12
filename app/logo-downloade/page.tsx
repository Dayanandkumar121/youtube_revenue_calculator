"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogoDownloaderPage() {
  const router = useRouter();
  const [channel, setChannel] = useState("");

  function search() {
    if (!channel.trim()) {
      alert("Enter a YouTube channel URL or handle");
      return;
    }

    router.push(`/channel?handle=${encodeURIComponent(channel)}`);
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">

      <h1 className="text-center text-5xl font-black">
        YouTube Logo Downloader
      </h1>

      <p className="mt-4 text-center text-slate-600">
        Download any public YouTube channel logo in HD quality.
      </p>

      <div className="mt-10 flex gap-4">

        <input
          value={channel}
          onChange={(e) => setChannel(e.target.value)}
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