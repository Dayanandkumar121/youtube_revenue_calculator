export function extractVideoId(url: string): string | null {
  try {
    const parsed = new URL(url);

    // https://youtu.be/VIDEO_ID
    if (parsed.hostname === "youtu.be") {
      return parsed.pathname.slice(1);
    }

    // https://www.youtube.com/watch?v=VIDEO_ID
    if (
      parsed.hostname.includes("youtube.com") &&
      parsed.pathname === "/watch"
    ) {
      return parsed.searchParams.get("v");
    }

    // https://www.youtube.com/shorts/VIDEO_ID
    if (parsed.pathname.startsWith("/shorts/")) {
      return parsed.pathname.split("/")[2];
    }

    // https://www.youtube.com/embed/VIDEO_ID
    if (parsed.pathname.startsWith("/embed/")) {
      return parsed.pathname.split("/")[2];
    }

    return null;
  } catch {
    return null;
  }
}