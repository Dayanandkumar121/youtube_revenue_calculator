"use client";

import { useState } from "react";
import { getChannel } from "@/services/youtube";
import { Channel } from "@/types/channel";
import ChannelHero from "@/components/channel/ChannelHero";
import ChannelStats from "@/components/channel/ChannelStats";

function extractHandle(input: string): string {
  return input
    .trim()
    .replace(/^https?:\/\/(www\.)?youtube\.com\/@/i, "")
    .replace(/^https?:\/\/youtube\.com\/@/i, "")
    .replace(/^https?:\/\/m\.youtube\.com\/@/i, "")
    .replace(/^@/, "")
    .split("?")[0]
    .replace(/\/$/, "");
}

export default function ComparePage() {
  const [left, setLeft] = useState("");
  const [right, setRight] = useState("");

  const [leftChannel, setLeftChannel] = useState<Channel | null>(null);
  const [rightChannel, setRightChannel] = useState<Channel | null>(null);

  const [loading, setLoading] = useState(false);

  async function compare() {
    setLoading(true);

    try {
      const [a, b] = await Promise.all([
        getChannel(extractHandle(left)),
        getChannel(extractHandle(right)),
      ]);

      setLeftChannel(a);
      setRightChannel(b);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">

      <h1 className="mb-10 text-4xl font-black">
        Compare Channels
      </h1>

      <div className="mb-10 grid gap-4 md:grid-cols-2">

        <input
          value={left}
          onChange={(e) => setLeft(e.target.value)}
          placeholder="First Channel"
          className="rounded-xl border p-4"
        />

        <input
          value={right}
          onChange={(e) => setRight(e.target.value)}
          placeholder="Second Channel"
          className="rounded-xl border p-4"
        />

      </div>

      <button
        onClick={compare}
        className="mb-10 rounded-xl bg-red-600 px-8 py-4 text-white"
      >
        {loading ? "Comparing..." : "Compare"}
      </button>

      {(leftChannel && rightChannel) && (

        <div className="grid gap-10 lg:grid-cols-2">

          <div>
            <ChannelHero channel={leftChannel} />
            <ChannelStats channel={leftChannel} />
          </div>

          <div>
            <ChannelHero channel={rightChannel} />
            <ChannelStats channel={rightChannel} />
          </div>

        </div>

      )}

    </main>
  );
}