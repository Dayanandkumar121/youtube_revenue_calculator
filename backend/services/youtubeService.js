import axios from "axios";

export async function getChannelByHandle(handle) {
  const API_KEY = process.env.YOUTUBE_API_KEY;

  // Validate handle
  if (!handle || typeof handle !== "string") {
    throw new Error("Invalid YouTube handle.");
  }

  // Clean handle
  handle = handle.replace("@", "").trim();

  console.log("Searching Handle:", handle);

  // Search Channel
  const search = await axios.get(
    "https://www.googleapis.com/youtube/v3/search",
    {
      params: {
        part: "snippet",
        type: "channel",
        q: handle,
        maxResults: 5,
        key: API_KEY,
      },
    }
  );

  console.log("Search Result:", search.data);

  if (!search.data.items || search.data.items.length === 0) {
    throw new Error("Channel not found.");
  }

  // First result
  const channelId = search.data.items[0].id.channelId;

  // Channel Details
  const channel = await axios.get(
    "https://www.googleapis.com/youtube/v3/channels",
    {
      params: {
        part: "snippet,statistics,brandingSettings,contentDetails",
        id: channelId,
        key: API_KEY,
      },
    }
  );

  if (!channel.data.items || channel.data.items.length === 0) {
    throw new Error("Channel details not found.");
  }

  const item = channel.data.items[0];

  // Upload Playlist
  const uploadsPlaylist =
    item.contentDetails.relatedPlaylists.uploads;

  // Recent Videos
  const uploads = await axios.get(
    "https://www.googleapis.com/youtube/v3/playlistItems",
    {
      params: {
        part: "snippet",
        playlistId: uploadsPlaylist,
        maxResults: 6,
        key: API_KEY,
      },
    }
  );

  const recentVideos = uploads.data.items.map((video) => ({
    id: video.snippet.resourceId.videoId,
    title: video.snippet.title,
    thumbnail: video.snippet.thumbnails.high.url,
    publishedAt: video.snippet.publishedAt,
  }));

  return {
    id: item.id,
    title: item.snippet.title,
    handle: item.snippet.customUrl
      ? `@${item.snippet.customUrl}`
      : "",
    description: item.snippet.description,
    subscribers: Number(item.statistics.subscriberCount),
    views: Number(item.statistics.viewCount),
    videos: Number(item.statistics.videoCount),
    country: item.snippet.country || "Unknown",
    logo: item.snippet.thumbnails.high.url,
    banner:
      item.brandingSettings.image?.bannerExternalUrl || "",
    publishedAt: item.snippet.publishedAt,
    recentVideos,
  };
}