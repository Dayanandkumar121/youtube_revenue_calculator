import { generateText } from "./aiService.js";

export async function generateKeywordData(keyword) {

  const prompt = `
You are a professional YouTube SEO Expert.

Keyword:
"${keyword}"

Return ONLY valid JSON.

{
  "keyword":"",
  "searchIntent":"",
  "relatedKeywords":[],
  "longTailKeywords":[],
  "questionKeywords":[],
  "videoIdeas":[],
  "titles":[],
  "tags":[],
  "hashtags":[]
}

Requirements:

- 20 related keywords
- 20 long-tail keywords
- 20 question keywords
- 10 video ideas
- 10 YouTube titles
- 30 SEO tags
- 20 hashtags

Do NOT return markdown.

Only JSON.
`;

const response = await generateText(prompt);

// Remove markdown if Gemini returns it
const cleaned = response
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

// Convert JSON string → Object
return JSON.parse(cleaned);

  return response;
}