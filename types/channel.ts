export interface Channel {
  id: string;
  title: string;
  handle: string;
  description: string;
  subscribers: number;
  views: number;
  videos: number;
  country: string;
  logo: string;
  banner: string;
  publishedAt: string;

  recentVideos: {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
}[];
}
