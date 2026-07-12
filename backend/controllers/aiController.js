import { generateText } from "../services/aiService.js";

export async function generateContent(req, res) {
  try {
    const { type, topic } = req.body;

    if (!topic) {
      return res.status(400).json({
        error: "Topic is required",
      });
    }

    const prompts = {
      title: `Generate 10 SEO-friendly YouTube video titles about "${topic}". Return only the titles.`,
      description: `Write a professional YouTube video description about "${topic}" with emojis, keywords, and a call to action.`,
      tags: `Generate 30 comma-separated YouTube SEO tags for "${topic}".`,
      hashtags: `Generate 20 trending YouTube hashtags for "${topic}".`,
    };

    const prompt =
      prompts[type] ??
      `Generate useful content about "${topic}".`;

    const result = await generateText(prompt);

    res.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: "AI generation failed.",
    });
  }
}