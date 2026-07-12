const API = process.env.NEXT_PUBLIC_API_URL;

// ==========================
// Get YouTube Channel
// ==========================
export async function getChannel(channel: string) {
  const response = await fetch(
    `${API}/api/channel?handle=${encodeURIComponent(channel)}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch channel.");
  }

  return response.json();
}

// ==========================
// Keyword Research
// ==========================
export async function generateKeyword(keyword: string) {
  const response = await fetch(`${API}/api/keyword`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      keyword,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Keyword generation failed.");
  }

  return data.result;
}