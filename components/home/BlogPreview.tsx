import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";

export default function BlogPreview() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-black text-slate-900">
              Latest Articles
            </h2>

            <p className="mt-3 text-slate-600">
              Learn YouTube growth, monetization and creator strategies.
            </p>
          </div>

          <Link
            href="/blog"
            className="hidden rounded-xl border px-5 py-3 font-semibold hover:bg-white md:block"
          >
            View All
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {latestPosts.map((post) => (

            <article
              key={post.slug}
              className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="h-56 bg-gradient-to-r from-red-500 to-orange-400" />

              <div className="p-8">

                <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
                  {post.category}
                </span>

                <h3 className="mt-6 text-2xl font-black text-slate-900">
                  {post.title}
                </h3>

                <p className="mt-4 line-clamp-3 text-slate-600">
                  {post.description}
                </p>

                <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
                  <Calendar size={18} />
                  {post.date}
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-8 inline-flex items-center gap-2 font-bold text-red-600"
                >
                  Read Article
                  <ArrowRight size={18} />
                </Link>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}