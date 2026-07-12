"use client";

import { useState } from "react";
import { extractVideoId } from "@/utils/youtube";

const qualities = [
  {
    name: "Max Resolution",
    file: "maxresdefault.jpg",
  },
  {
    name: "HD",
    file: "sddefault.jpg",
  },
  {
    name: "HQ",
    file: "hqdefault.jpg",
  },
  {
    name: "MQ",
    file: "mqdefault.jpg",
  },
  {
    name: "Default",
    file: "default.jpg",
  },
];

export default function ThumbnailDownloader() {
  const [url, setUrl] = useState("");
  const [videoId, setVideoId] = useState("");

  function handleGenerate() {
    const id = extractVideoId(url);

    if (!id) {
      alert("Please enter a valid YouTube URL.");
      return;
    }

    setVideoId(id);
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-4xl font-bold text-center">
        YouTube Thumbnail Downloader
      </h2>

      <p className="text-center text-gray-500 mt-3">
        Paste any YouTube video URL.
      </p>

      <div className="flex flex-col md:flex-row gap-4 mt-8">

        <input
          type="text"
          placeholder="https://youtube.com/watch?v=..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 border rounded-xl px-4 py-3"
        />

        <button
          onClick={handleGenerate}
          className="bg-red-600 hover:bg-red-700 text-white rounded-xl px-8 py-3 font-semibold"
        >
          Get Thumbnail
        </button>

      </div>

      {videoId && (
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {qualities.map((quality) => {
            const image = `https://img.youtube.com/vi/${videoId}/${quality.file}`;

            return (
              <div
                key={quality.file}
                className="border rounded-2xl p-5"
              >
                <img
                  src={image}
                  alt={quality.name}
                  className="rounded-xl w-full"
                />

                <h3 className="text-xl font-semibold mt-4">
                  {quality.name}
                </h3>

                <a
                  href={image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
                >
                  Open Image
                </a>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}