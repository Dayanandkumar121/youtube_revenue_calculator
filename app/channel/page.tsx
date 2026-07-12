"use client";

import { useState } from "react";

import { getChannel } from "@/services/youtube";
import { Channel } from "@/types/channel";

import ChannelHero from "@/components/channel/ChannelHero";
import ChannelStats from "@/components/channel/ChannelStats";
import RevenueEstimate from "@/components/channel/RevenueEstimate";
import RecentVideos from "@/components/channel/RecentVideos";

/**
 * Extract YouTube Handle
 *
 * Supports:
 * https://www.youtube.com/@MrBeast
 * https://youtube.com/@MrBeast
 * https://m.youtube.com/@MrBeast
 * https://youtube.com/@MrBeast?si=xxxx
 * @MrBeast
 * MrBeast
 */
function extractHandle(input: string): string {
  let value = input.trim();

  value = value.replace(
    /^https?:\/\/(www\.)?youtube\.com\/@/i,
    ""
  );

  value = value.replace(
    /^https?:\/\/youtube\.com\/@/i,
    ""
  );

  value = value.replace(
    /^https?:\/\/m\.youtube\.com\/@/i,
    ""
  );

  value = value.replace(/^@/, "");

  // Remove URL parameters
  value = value.split("?")[0];

  // Remove trailing slash
  value = value.replace(/\/$/, "");

  return value;
}

export default function ChannelPage() {
  const [url, setUrl] = useState("");

  const [channel, setChannel] =
    useState<Channel | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function search() {
    if (!url.trim()) return;

    setLoading(true);

    setError("");

    try {
      const handle = extractHandle(url);

      console.log("Original URL:", url);
      console.log("Extracted Handle:", handle);

      const data = await getChannel(handle);

      setChannel(data);
    } catch (err) {
      console.error(err);

      setChannel(null);

      setError(
        "Channel not found. Please check the YouTube URL."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">

      <div className="mb-10 flex flex-col gap-4 md:flex-row">

        <input
          type="text"
          placeholder="Paste YouTube URL or @Handle"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 rounded-2xl border border-slate-300 bg-white px-5 py-4 text-lg outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-100"
        />

        <button
          onClick={search}
          disabled={loading}
          className="rounded-2xl bg-red-600 px-10 py-4 text-lg font-semibold text-white transition hover:bg-red-700 disabled:opacity-60"
        >
          {loading ? "Searching..." : "Search"}
        </button>

      </div>

      {error && (
        <div className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-600">
          {error}
        </div>
      )}

      {channel && (

        <div className="space-y-10">

          <ChannelHero
            channel={channel}
          />

          <ChannelStats
            channel={channel}
          />

          <RevenueEstimate
            channel={channel}
          />

          <RecentVideos
            channel={channel}
          />

        </div>

      )}

    </main>
  );
}