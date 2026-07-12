import { generateKeywordData } from "../services/keywordService.js";

export async function generateKeywordResearch(req, res) {
  try {
    // Debug logs
    console.log("Request Body:", req.body);

    const { keyword } = req.body;

    console.log("Keyword:", keyword);

    if (!keyword || keyword.trim() === "") {
      return res.status(400).json({
        success: false,
        error: "Keyword is required.",
      });
    }

    const result = await generateKeywordData(keyword);

    res.json({
      success: true,
      result,
    });

  } catch (error) {
    console.error("Keyword API Error:", error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}