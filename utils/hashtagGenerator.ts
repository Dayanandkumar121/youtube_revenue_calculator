export function generateHashtags(title: string, keyword: string): string[] {
  const words = `${title} ${keyword}`
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/)
    .filter(Boolean);

  const uniqueWords = [...new Set(words)];

  const hashtags = [
    keyword.replace(/\s+/g, ""),
    ...uniqueWords.map((w) => w.replace(/\s+/g, "")),
    "youtube",
    "youtubeshorts",
    "viral",
    "trending",
    "shorts",
    "creator",
    "youtubecreator",
    "subscribe",
  ];

  return [...new Set(hashtags)].filter(Boolean);
}