import { notFound } from "next/navigation";
import type { Metadata } from "next";
import HashtagGenerator from "@/components/tools/HashtagGenerator";
import TitleGenerator from "@/components/tools/TitleGenerator";
import DescriptionGenerator from "@/components/tools/DescriptionGenerator";

import LandingPage from "@/components/LandingPage";
import ThumbnailDownloader from "@/components/ThumbnailDownloader";
import TagGenerator from "@/components/tools/TagGenerator";

import { landingPages } from "@/data/landingPages";
import { tools } from "@/data/tools";
import VideoIdExtractor from "@/components/tools/VideoIdExtractor";

type Props = {
  params: Promise<{
    tool: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { tool } = await params;

  // SEO Landing Pages
  if (landingPages[tool]) {
    return {
      title: landingPages[tool].title,
      description: landingPages[tool].description,
    };
  }

  // Tool Pages
  if (tools[tool]) {
    return {
      title: tools[tool].title,
      description: tools[tool].description,
    };
  }

  return {
    title: "Page Not Found",
  };
}

export default async function ToolPage({
  params,
}: Props) {
  const { tool } = await params;

  // ---------- Landing Pages ----------
  if (landingPages[tool]) {
    const page = landingPages[tool];

    return (
      <LandingPage
        title={page.title}
        heading={page.heading}
        description={page.description}
        aboutTitle={page.aboutTitle}
        aboutDescription={page.aboutDescription}
      />
    );
  }

  // ---------- Tools ----------
  if (tools[tool]) {
    switch (tools[tool].component) {
      case "thumbnail":
        return (
          <main className="min-h-screen bg-gray-50 py-16 px-6">
            <ThumbnailDownloader />
          </main>
        );

      case "tags":
        return (
          <main className="min-h-screen bg-gray-50 py-16 px-6">
            <TagGenerator />
          </main>
        );

      case "hashtags":
        return (
          <main className="min-h-screen bg-gray-50 py-16 px-6">
            <HashtagGenerator />
          </main>
        );

        case "titles":
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <TitleGenerator />
    </main>
  );

  case "descriptions":
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <DescriptionGenerator />
    </main>
  );
    
    case "videoid":
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <VideoIdExtractor />
    </main>
  );

      default:
        notFound();
    }
  }

  notFound();
}