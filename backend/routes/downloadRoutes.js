import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/image", async (req, res) => {
  try {
    const { url, name } = req.query;

    if (!url) {
      return res.status(400).json({
        error: "Image URL is required",
      });
    }

    const response = await axios.get(url, {
      responseType: "stream",
    });

    const fileName = name || "youtube-image.jpg";

    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${fileName}"`
    );

    res.setHeader(
      "Content-Type",
      response.headers["content-type"] || "image/jpeg"
    );

    response.data.pipe(res);

  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      error: "Unable to download image",
    });
  }
});

export default router;