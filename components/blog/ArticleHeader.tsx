import { Calendar, Clock, User } from "lucide-react";
import { BlogPost } from "@/types/blog";

type Props = {
  post: BlogPost;
};

export default function ArticleHeader({ post }: Props) {
  return (
    <header className="mb-16">

      <span className="inline-flex rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
        {post.category}
      </span>

      <h1 className="mt-6 text-5xl font-black leading-tight text-slate-900 md:text-6xl">
        {post.title}
      </h1>

      <p className="mt-6 max-w-3xl text-xl text-slate-600">
        {post.description}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-6 text-slate-500">

        <div className="flex items-center gap-2">
          <User size={18} />
          {post.author}
        </div>

        <div className="flex items-center gap-2">
          <Calendar size={18} />
          {post.publishedAt}
        </div>

        <div className="flex items-center gap-2">
          <Clock size={18} />
          {post.readTime}
        </div>

      </div>

    </header>
  );
}