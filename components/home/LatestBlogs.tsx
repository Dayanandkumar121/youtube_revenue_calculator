import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";

export default function LatestBlogs() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <div>

            <span className="font-bold uppercase tracking-widest text-red-600">
              Latest Blog
            </span>

            <h2 className="mt-3 text-4xl font-black text-slate-900 md:text-5xl">
              Learn & Grow on YouTube
            </h2>

            <p className="mt-5 max-w-2xl text-lg text-slate-600">
              Read our latest guides about YouTube SEO, revenue,
              monetization, keyword research and creator growth.
            </p>

          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-semibold text-red-600 hover:text-red-700"
          >
            View All Articles
            <ArrowRight size={18} />
          </Link>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {latestPosts.map((post) => (

            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="h-52 bg-gradient-to-br from-red-500 via-red-400 to-orange-400"></div>

              <div className="p-8">

                <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
                  {post.category}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-slate-900 group-hover:text-red-600">
                  {post.title}
                </h3>

                <p className="mt-4 line-clamp-3 text-slate-600">
                  {post.description}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 font-semibold text-red-600">

                  Read Article

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}