import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import aiRoutes from "./routes/aiRoutes.js";
import keywordRoutes from "./routes/keywordRoutes.js";
import youtubeRoutes from "./routes/youtubeRoutes.js";
import downloadRoutes from "./routes/downloadRoutes.js";

dotenv.config();

const app = express();

/* ---------------- Security ---------------- */

app.use(helmet());

const allowedOrigins = [
  "http://localhost:3000",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (Postman, server-to-server)
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

/* ---------------- Rate Limiter ---------------- */

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: "Too many requests. Please try again later.",
  },
});

app.use(limiter);

/* ---------------- Middleware ---------------- */

app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));

/* ---------------- Health Check ---------------- */

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Creator Toolkit API Running",
  });
});

/* ---------------- Routes ---------------- */

app.use("/api", youtubeRoutes);
app.use("/api/keyword", keywordRoutes);
app.use("/api/download", downloadRoutes);
app.use("/api/ai", aiRoutes);

/* ---------------- 404 ---------------- */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

/* ---------------- Global Error Handler ---------------- */

app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

/* ---------------- Server ---------------- */

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});