"use client";

import { useState } from "react";

import ToolCard from "@/components/ui/ToolCard";
import SectionTitle from "@/components/ui/SectionTitle";
import TextInput from "@/components/ui/TextInput";
import PrimaryButton from "@/components/ui/PrimaryButton";
import ResultBox from "@/components/ui/ResultBox";
import EmptyState from "@/components/ui/EmptyState";

import { getVideoId } from "@/utils/videoId";

export default function VideoIdExtractor() {
  const [url, setUrl] = useState("");
  const [videoId, setVideoId] = useState("");

  function handleExtract() {
    const id = getVideoId(url);

    if (!id) {
      alert("Please enter a valid YouTube URL.");
      return;
    }

    setVideoId(id);
  }

  async function copy() {
    await navigator.clipboard.writeText(videoId);
    alert("Video ID copied!");
  }

  return (
    <main className="max-w-5xl mx-auto py-10">

      <ToolCard>

        <SectionTitle
          title="🎥 YouTube Video ID Extractor"
          subtitle="Extract the YouTube Video ID from any YouTube URL."
        />

        <TextInput
          placeholder="https://www.youtube.com/watch?v=..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <div className="mt-6">
          <PrimaryButton onClick={handleExtract}>
            Extract Video ID
          </PrimaryButton>
        </div>

        {videoId ? (
          <ResultBox>

            <p className="text-sm text-gray-500">
              Video ID
            </p>

            <h2 className="text-3xl font-bold mt-3 break-all">
              {videoId}
            </h2>

            <PrimaryButton
              className="mt-6"
              onClick={copy}
            >
              📋 Copy Video ID
            </PrimaryButton>

          </ResultBox>
        ) : (
          <div className="mt-10">
            <EmptyState
              text="Paste a YouTube URL above to extract its Video ID."
            />
          </div>
        )}

      </ToolCard>

    </main>
  );
}