const powerWords = [
  "Best",
  "Top",
  "Ultimate",
  "Amazing",
  "Complete",
  "Easy",
  "Pro",
  "Secret",
  "Powerful",
  "Fast",
];

const endings = [
  "in 2026",
  "Step by Step",
  "for Beginners",
  "That Actually Works",
  "Like a Pro",
  "You Must Know",
];

export function generateTitles(keyword: string): string[] {
  if (!keyword.trim()) return [];

  return powerWords.flatMap((word) =>
    endings.map((ending) => `${word} ${keyword} ${ending}`)
  );
}