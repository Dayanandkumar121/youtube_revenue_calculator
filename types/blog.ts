export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  date: string;

  image: string;

  tags: string[];

  content: string;

  featured: boolean;
}