import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ArticleCTA() {
  return (
    <section className="mt-16 rounded-3xl bg-gradient-to-r from-red-600 to-orange-500 p-10 text-center text-white">

      <h2 className="text-4xl font-black">
        Ready to Analyze Your Channel?
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-red-100">
        Use our free YouTube tools to estimate revenue,
        analyze any creator and compare channels.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">

        <Link
          href="/channel"
          className="rounded-xl bg-white px-7 py-4 font-bold text-red-600"
        >
          Analyze Channel
        </Link>

        <Link
          href="/compare"
          className="rounded-xl border border-white px-7 py-4 font-bold"
        >
          Compare Channels
        </Link>

      </div>

    </section>
  );
}