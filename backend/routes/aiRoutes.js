import express from "express";
import { generateContent } from "../controllers/aiController.js";
import { generateText } from "../services/aiService.js";

const router = express.Router();

// Test route
router.get("/", async (req, res) => {
  try {
    const result = await generateText(
      "Generate 5 YouTube titles about YouTube Revenue Calculator."
    );

    res.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// AI Generation
router.post("/", generateContent);

export default router;