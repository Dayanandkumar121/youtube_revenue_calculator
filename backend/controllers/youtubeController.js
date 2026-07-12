import { getChannelByHandle } from "../services/youtubeService.js";

export async function channel(req, res) {
  console.log("Query:", req.query);
  console.log("URL:", req.originalUrl);

  try {
    const handle = req.query.handle;

    if (!handle) {
      return res.status(400).json({
        error: "Handle is missing",
      });
    }

    const data = await getChannelByHandle(handle);

    res.json(data);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message,
    });
  }
}