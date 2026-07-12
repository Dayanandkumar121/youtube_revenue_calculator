import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 py-24">

      <div className="mx-auto max-w-5xl px-6 text-center">

        <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-bold uppercase tracking-widest text-white">
          Free YouTube Creator Tools
        </span>

        <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
          Start Growing Your YouTube Channel Today
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-red-100">
          Analyze YouTube channels, estimate revenue, calculate RPM & CPM,
          compare creators, download thumbnails and access powerful creator
          tools — completely free.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            href="/channel"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-red-600 shadow-lg transition hover:scale-105"
          >
            Analyze Channel
            <ArrowRight size={20} />
          </Link>

          <Link
            href="/youtube-revenue-calculator"
            className="inline-flex items-center justify-center rounded-2xl border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-red-600"
          >
            Revenue Calculator
          </Link>

        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm font-medium text-red-100">

          <span>✅ 100% Free</span>

          <span>✅ No Login Required</span>

          <span>✅ Instant Results</span>

        </div>

      </div>

    </section>
  );
}