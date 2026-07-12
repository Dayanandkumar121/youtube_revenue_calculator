export function generateDescription(keyword: string): string {
  if (!keyword.trim()) return "";

  return `🚀 Welcome to this ${keyword} video!

In this video you'll learn everything about ${keyword} step by step.

✅ Easy explanation
✅ Beginner friendly
✅ Practical examples

👍 Like the video
❤️ Subscribe for more tutorials
💬 Leave your questions in the comments.

#${keyword.replace(/\s+/g, "").toLowerCase()} #youtube #tutorial #YouTube
#YouTubeRevenueCalculator#YouTubeMoneyCalculator#YouTubeEarnings
#YouTubeIncome #YouTubeMonetization#YouTubeSEO
#YouTubeTips#YouTubeGrowth#ContentCreator#YouTuber#CPM
`;}