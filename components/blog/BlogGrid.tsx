import { BlogPost } from "@/types/blog";
import BlogCard from "./BlogCard";

type Props = {
  posts: BlogPost[];
};

export default function BlogGrid({ posts }: Props) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogCard
          key={post.slug}
          post={post}
        />
      ))}
    </div>
  );
}