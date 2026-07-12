"use client";

import { useState } from "react";
import { getChannel } from "@/services/youtube";
import ChannelHero from "@/components/channel/ChannelHero";
import ChannelStats from "@/components/channel/ChannelStats";
import { Channel } from "@/types/channel";

export default function ChannelPage() {
  const [url, setUrl] = useState("");
  const [channel, setChannel] = useState<Channel | null>(null);
  const [loading, setLoading] = useState(false);

  async function search() {
    if (!url) return;

    setLoading(true);

    try {
      const handle = url
        .replace("https://www.youtube.com/@", "")
        .replace("@", "")
        .trim();

      const data = await getChannel(handle);

      setChannel(data);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">

      <div className="mb-10 flex gap-4">

        <input
          className="flex-1 rounded-xl border p-4"
          placeholder="Paste YouTube Handle or URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button
          onClick={search}
          className="rounded-xl bg-red-600 px-8 text-white"
        >
          {loading ? "Loading..." : "Search"}
        </button>

      </div>

      {channel && (
        <>
          <ChannelHero channel={channel} />
          <ChannelStats channel={channel} />
        </>
      )}

    </main>
  );
}