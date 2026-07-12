"use client";

import { useMemo, useState } from "react";

import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogSearch from "@/components/blog/BlogSearch";

import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  const [search, setSearch] = useState("");

  const filteredPosts = useMemo(() => {
    if (!search.trim()) return blogPosts;

    return blogPosts.filter((post) => {
      const keyword = search.toLowerCase();

      return (
        post.title.toLowerCase().includes(keyword) ||
        post.description.toLowerCase().includes(keyword) ||
        post.category.toLowerCase().includes(keyword)
      );
    });
  }, [search]);

  return (
    <main className="min-h-screen bg-slate-50">

      <BlogHero />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">

          <BlogSearch onSearch={setSearch} />

          <BlogGrid posts={filteredPosts} />

        </div>
      </section>

    </main>
  );
}