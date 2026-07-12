export type ToolData = {
  slug: string;
  title: string;
  description: string;
  component: string;
};

export const tools: Record<string, ToolData> = {
  "youtube-thumbnail-downloader": {
    slug: "youtube-thumbnail-downloader",
    title: "YouTube Thumbnail Downloader",
    description:
      "Download YouTube thumbnails in HD, HQ and Max Resolution.",
    component: "thumbnail",
  },

  "youtube-tag-generator": {
    slug: "youtube-tag-generator",
    title: "YouTube Tag Generator",
    description:
      "Generate SEO-friendly YouTube tags instantly.",
    component: "tags",
  },

  "youtube-hashtag-generator": {
    slug: "youtube-hashtag-generator",
    title: "YouTube Hashtag Generator",
    description:
      "Generate trending YouTube hashtags.",
    component: "hashtags",
  },

  "youtube-title-generator": {
    slug: "youtube-title-generator",
    title: "YouTube Title Generator",
    description:
      "Generate viral YouTube titles.",
    component: "titles",
  },

  "youtube-description-generator": {
    slug: "youtube-description-generator",
    title: "YouTube Description Generator",
    description:
      "Generate SEO-optimized YouTube descriptions.",
    component: "descriptions",
  },

  "youtube-video-id-extractor": {
  slug: "youtube-video-id-extractor",
  title: "YouTube Video ID Extractor",
  description: "Extract YouTube Video IDs from any YouTube URL.",
  component: "videoid",
},

};