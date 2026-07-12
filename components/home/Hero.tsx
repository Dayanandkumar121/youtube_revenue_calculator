"use client";

import { Search, ArrowRight, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

function extractHandle(input: string) {
  let value = input.trim();

  value = value.replace(/^https?:\/\/(www\.)?youtube\.com\/@/i, "");
  value = value.replace(/^https?:\/\/youtube\.com\/@/i, "");
  value = value.replace(/^https?:\/\/m\.youtube\.com\/@/i, "");

  value = value.replace(/^@/, "");
  value = value.split("?")[0];
  value = value.replace(/\/$/, "");

  return value;
}

export default function Hero() {
  const router = useRouter();

  const [url, setUrl] = useState("");

  function search() {
    if (!url.trim()) return;

    const handle = extractHandle(url);

    router.push(`/channel?handle=${handle}`);
  }

  return (
    <section className="bg-slate-50">

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <div className="inline-flex items-center rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            🚀 Trusted by YouTube Creators
          </div>

          <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900">
            The Ultimate
            <br />
            YouTube Creator Toolkit
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Analyze any YouTube channel, estimate earnings,
            compare creators, download thumbnails and discover
            powerful insights — all in one place.
          </p>

          {/* Search */}

          <div className="mt-10 flex overflow-hidden rounded-2xl border bg-white shadow-lg">

            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste YouTube Channel URL..."
              className="flex-1 px-6 py-5 outline-none"
            />

            <button
              onClick={search}
              className="flex items-center gap-2 bg-red-600 px-8 font-semibold text-white transition hover:bg-red-700"
            >
              <Search size={20} />
              Search
            </button>

          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-slate-600">

            <div className="flex items-center gap-2">
              <CheckCircle
                size={18}
                className="text-green-500"
              />
              Free
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle
                size={18}
                className="text-green-500"
              />
              No Login
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle
                size={18}
                className="text-green-500"
              />
              Instant Results
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative">

          <div className="rounded-3xl bg-white p-8 shadow-2xl">

            <div className="space-y-6">

              <div className="rounded-2xl border p-6">

                <p className="text-slate-500">
                  Estimated Monthly Revenue
                </p>

                <h2 className="mt-2 text-4xl font-black text-green-600">
                  $12,400
                </h2>

              </div>

              <div className="grid grid-cols-2 gap-6">

                <div className="rounded-2xl border p-6">

                  <p className="text-slate-500">
                    Subscribers
                  </p>

                  <h3 className="mt-2 text-3xl font-black">
                    2.1M
                  </h3>

                </div>

                <div className="rounded-2xl border p-6">

                  <p className="text-slate-500">
                    Views
                  </p>

                  <h3 className="mt-2 text-3xl font-black">
                    420M
                  </h3>

                </div>

              </div>

              <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-red-600 py-4 font-semibold text-white hover:bg-red-700">
                Start Free
                <ArrowRight size={18} />
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}