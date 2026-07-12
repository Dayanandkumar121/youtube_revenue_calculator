import express from "express";
import { channel } from "../controllers/youtubeController.js";

const router = express.Router();

router.get("/channel", channel);

export default router;