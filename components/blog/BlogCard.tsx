import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogPost } from "@/types/blog";

type Props = {
  post: BlogPost;
};

export default function BlogCard({ post }: Props) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="h-56 bg-gradient-to-br from-red-500 to-orange-400" />

      <div className="p-8">

        <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
          {post.category}
        </span>

        <h2 className="mt-5 text-2xl font-bold text-slate-900">
          {post.title}
        </h2>

        <p className="mt-4 text-slate-600 leading-7">
          {post.description}
        </p>

        <div className="mt-6 flex items-center gap-6 text-sm text-slate-500">

          <div className="flex items-center gap-2">
            <Calendar size={16} />
            {post.publishedAt}
          </div>

          <div className="flex items-center gap-2">
            <Clock size={16} />
            {post.readTime}
          </div>

        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-8 inline-flex items-center gap-2 font-semibold text-red-600"
        >
          Read Article
          <ArrowRight size={18} />
        </Link>

      </div>

    </article>
  );
}