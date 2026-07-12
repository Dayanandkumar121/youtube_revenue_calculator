import Link from "next/link";
import {
  DollarSign,
  BarChart3,
  Search,
  Download,
  Users,
  Calculator,
  PlaySquare,
} from "lucide-react";

const tools = [
  {
    title: "Revenue Calculator",
    description: "Estimate YouTube earnings instantly.",
    icon: DollarSign,
    href: "/youtube-revenue-calculator",
  },
  {
    title: "Channel Analytics",
    description: "Analyze any public YouTube channel.",
    icon: BarChart3,
    href: "/channel",
  },
  {
    title: "Compare Channels",
    description: "Compare subscribers, views and growth.",
    icon: Users,
    href: "/compare",
  },
  {
    title: "Banner Downloader",
    description: "Download YouTube channel banners.",
    icon: Download,
    href: "/banner-downloader",
  },
  {
    title: "Logo Downloader",
    description: "Download YouTube channel logos.",
    icon: Download,
    href: "/logo-downloader",
  },
  {
    title: "Thumbnail Downloader",
    description: "Download HD YouTube thumbnails.",
    icon: Download,
    href: "/thumbnail-downloader",
  },
  {
    title: "CPM Calculator",
    description: "Calculate YouTube CPM easily.",
    icon: Calculator,
    href: "/youtube-cpm-calculator",
  },
  {
    title: "RPM Calculator",
    description: "Estimate your YouTube RPM.",
    icon: Calculator,
    href: "/youtube-rpm-calculator",
  },
  {
    title: "Shorts Calculator",
    description: "Estimate YouTube Shorts earnings.",
    icon: PlaySquare,
    href: "/youtube-shorts-money-calculator",
  },
  {
    title: "Channel Search",
    description: "Search any YouTube creator instantly.",
    icon: Search,
    href: "/channel",
  },
];

export default function PopularTools() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="font-bold uppercase tracking-widest text-red-600">
            Creator Toolkit
          </span>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Popular YouTube Creator Tools
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            Explore our free YouTube tools for creators including revenue
            calculators, analytics, downloaders and SEO utilities.
          </p>

        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <Link
                key={tool.title}
                href={tool.href}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-2xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50">

                  <Icon
                    size={28}
                    className="text-red-600"
                  />

                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {tool.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {tool.description}
                </p>

              </Link>
            );
          })}

        </div>

      </div>
    </section>
  );
}