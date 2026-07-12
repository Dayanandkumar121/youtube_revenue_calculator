"use client";

import { useState } from "react";
import { getVideoId } from "@/utils/getVideoId";

export default function ThumbnailDownloaderPage() {
  const [url, setUrl] = useState("");
  const [videoId, setVideoId] = useState("");
  const [error, setError] = useState("");

  function handleGenerate() {
    const id = getVideoId(url);

    if (!id) {
      setError("Please enter a valid YouTube video URL.");
      setVideoId("");
      return;
    }

    setError("");
    setVideoId(id);
  }

  const thumbnails = videoId
    ? [
        {
          title: "4K / Maximum Resolution",
          image: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        },
        {
          title: "HD Quality",
          image: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        },
        {
          title: "Medium Quality",
          image: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
        },
      ]
    : [];

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-center text-5xl font-black text-slate-900">
        YouTube Thumbnail Downloader
      </h1>

      <p className="mx-auto mt-5 max-w-3xl text-center text-lg text-slate-600">
        Download YouTube thumbnails in high quality for free.
        Just paste any YouTube video URL below.
      </p>

      <div className="mt-12 flex flex-col gap-4 md:flex-row">
        <input
          type="text"
          placeholder="Paste YouTube Video URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 rounded-xl border border-slate-300 p-4 outline-none focus:border-red-500"
        />
        


        <button
          onClick={handleGenerate}
          className="rounded-xl bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700"
        >
          Get Thumbnail
        </button>
      </div>

      {error && (
        <p className="mt-5 text-center font-medium text-red-600">
          {error}
        </p>
      )}

      {videoId && (
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {thumbnails.map((thumb) => (
            <div
              key={thumb.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md"
            >
              <img
  src={thumb.image}
  alt={thumb.title}
  className="w-full rounded-xl"
  onError={(e) => {
    if (thumb.title === "4K / Maximum Resolution") {
      e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }
  }}
/>

              <div className="p-6">
                <h2 className="text-xl font-bold">
                  {thumb.title}
                </h2>



                <button
  onClick={() => {
    window.location.href = `http://localhost:4000/api/download/image?url=${encodeURIComponent(
      thumb.image
    )}&name=thumbnail.jpg`;
  }}
  className="mt-5 w-full rounded-xl bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700"
>
  Download Thumbnail
</button>


<button
  onClick={() => {
    navigator.clipboard.writeText(thumb.image);
    alert("Thumbnail URL copied!");
  }}
  className="mt-3 w-full rounded-xl border border-slate-300 py-3 font-semibold hover:bg-slate-100"
>
  Copy Thumbnail URL
</button>





<section className="mx-auto mt-20 max-w-5xl">
  <h2 className="text-3xl font-black">
    About YouTube Thumbnail Downloader
  </h2>

  <p className="mt-6 leading-8 text-slate-600">
    This free tool allows you to download YouTube thumbnails in high quality.
    Simply paste any public YouTube video URL to preview and download available thumbnail sizes.
  </p>
</section>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}