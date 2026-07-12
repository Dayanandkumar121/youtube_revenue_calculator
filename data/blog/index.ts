import { monetizationPosts } from "./monetization";
import { seoPosts } from "./seo";
import { growthPosts } from "./growth";

export const blogPosts = [
  ...monetizationPosts,
  ...seoPosts,
  ...growthPosts,
];