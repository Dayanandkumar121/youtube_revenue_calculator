const API = process.env.NEXT_PUBLIC_API_URL!;

export async function getChannel(handle: string) {
  const response = await fetch(
    `${API}/api/channel?handle=${encodeURIComponent(handle)}`
  );

  const data = await response.json();

  if (!response.ok) {
    console.error(data);
    throw new Error(data.error || "Failed to fetch channel");
  }

  return data;
}