import express from "express";
import { generateKeywordResearch } from "../controllers/keywordController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Keyword API Working 🚀",
  });
});

router.post("/", generateKeywordResearch);

export default router;