import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { blogPosts } from "@/data/blog";

import Breadcrumb from "@/components/blog/Breadcrumb";
import ArticleHeader from "@/components/blog/ArticleHeader";
import FeaturedImage from "@/components/blog/FeaturedImage";
import ArticleContent from "@/components/blog/ArticleContent";
import RelatedPosts from "@/components/blog/RelatedPosts";
import Newsletter from "@/components/blog/Newsletter";
import ArticleCTA from "@/components/blog/ArticleCTA";




type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: [
      post.title,
      "YouTube Revenue Calculator",
      "YouTube Analytics",
      "Creator Toolkit",
    ],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
  };
}

export default async function BlogPage({
  params,
}: Props) {
  const { slug } = await params;

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-slate-50 min-h-screen">
      <article className="mx-auto max-w-4xl px-6 py-20">

        <Breadcrumb title={post.title} />

        <ArticleHeader post={post} />

        <FeaturedImage
          src={post.image}
          alt={post.title}
        />

        <ArticleContent
          content={post.content}
        />

        <RelatedPosts
          currentSlug={post.slug}
        />

        <Newsletter />

        <ArticleCTA />

      </article>
    </main>
  );
}