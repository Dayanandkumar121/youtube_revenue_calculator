"use client";

import { useState } from "react";

export default function AIStudioPage() {
  const [topic, setTopic] = useState("");
  const [type, setType] = useState("title");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function generate() {
    if (!topic) return;

    setLoading(true);
    setResult("");

    try {
      const res = await fetch("http://localhost:4000/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type,
          topic,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setResult(data.result);
      } else {
        setResult(data.error);
      }
    } catch {
      setResult("Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">

      <h1 className="text-center text-5xl font-black">
        AI Creator Studio
      </h1>

      <p className="mt-4 text-center text-slate-600">
        Generate YouTube content using AI.
      </p>

      <div className="mt-10 rounded-3xl border bg-white p-8 shadow">

        <input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter video topic..."
          className="w-full rounded-xl border p-4"
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="mt-5 w-full rounded-xl border p-4"
        >
          <option value="title">Title</option>
          <option value="description">Description</option>
          <option value="tags">Tags</option>
          <option value="hashtags">Hashtags</option>
        </select>

        <button
          onClick={generate}
          className="mt-6 w-full rounded-xl bg-red-600 py-4 font-bold text-white hover:bg-red-700"
        >
          {loading ? "Generating..." : "Generate"}
        </button>

        {result && (
          <div className="mt-8 rounded-2xl bg-slate-100 p-6">
            <pre className="whitespace-pre-wrap">{result}</pre>

            <button
              onClick={() => {
                navigator.clipboard.writeText(result);
                alert("Copied!");
              }}
              className="mt-5 rounded-xl bg-black px-6 py-3 text-white"
            >
              Copy
            </button>
          </div>
        )}

      </div>

    </main>
  );
}