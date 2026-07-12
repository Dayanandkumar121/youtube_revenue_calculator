const {
  extractChannelIdentifier,
  getChannelIdFromHandle,
  getChannelDetails,
} = require("../services/youtubeService");

async function getChannel(req, res) {
  try {
    const { url } = req.query;

    if (!url) {
      return res.status(400).json({
        success: false,
        message: "Please provide a YouTube URL.",
      });
    }

    // Extract channel identifier
    const result = extractChannelIdentifier(url);

    if (!result) {
      return res.status(400).json({
        success: false,
        message: "Invalid YouTube URL.",
      });
    }

    let channelId;

    // Handle @username URLs
    if (result.type === "handle") {
      channelId = await getChannelIdFromHandle(result.value);

      if (!channelId) {
        return res.status(404).json({
          success: false,
          message: "Channel not found.",
        });
      }
    }

    // Handle /channel/ URLs
    else if (result.type === "channelId") {
      channelId = result.value;
    }

    // Get real channel details
    const channel = await getChannelDetails(channelId);

    if (!channel) {
      return res.status(404).json({
        success: false,
        message: "Unable to fetch channel details.",
      });
    }

    return res.json({
      success: true,
      channel,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

module.exports = {
  getChannel,
};