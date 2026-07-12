import Link from "next/link";
import { blogPosts } from "@/data/blog";

type Props = {
  currentSlug: string;
};

export default function RelatedPosts({ currentSlug }: Props) {
  const posts = blogPosts
    .filter((p) => p.slug !== currentSlug)
    .slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="mt-20">

      <h2 className="text-3xl font-bold text-slate-900">
        Related Articles
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-3">

        {posts.map((post) => (

          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >

            <span className="text-sm font-semibold text-red-600">
              {post.category}
            </span>

            <h3 className="mt-3 text-xl font-bold">
              {post.title}
            </h3>

          </Link>

        ))}

      </div>

    </section>
  );
}