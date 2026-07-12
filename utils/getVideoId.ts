export function getVideoId(url: string): string | null {
  try {
    const input = url.trim();

    // Normal watch URL
    if (input.includes("youtube.com/watch")) {
      return new URL(input).searchParams.get("v");
    }

    // Shorts URL
    if (input.includes("youtube.com/shorts/")) {
      return input.split("/shorts/")[1].split("?")[0];
    }

    // youtu.be URL
    if (input.includes("youtu.be/")) {
      return input.split("youtu.be/")[1].split("?")[0];
    }

    // Direct Video ID
    if (/^[a-zA-Z0-9_-]{11}$/.test(input)) {
      return input;
    }

    return null;
  } catch {
    return null;
  }
}