export function generateTags(title: string, keyword: string): string[] {
  const words = `${title} ${keyword}`
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/)
    .filter(Boolean);

  const uniqueWords = [...new Set(words)];

  const tags = [
    keyword,
    title,
    ...uniqueWords,
    `${keyword} tutorial`,
    `${keyword} tips`,
    `${keyword} guide`,
    `${keyword} 2026`,
    `${keyword} youtube`,
    `${keyword} viral`,
    `${keyword} seo`,
  ];

  return [...new Set(tags)].filter(tag => tag.trim() !== "");
}