import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

export async function generateText(prompt) {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Full Error:");
    console.error(error);

    throw error;
  }
}