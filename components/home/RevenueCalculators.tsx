import Link from "next/link";
import {
  DollarSign,
  BarChart3,
  BadgeDollarSign,
  PlaySquare,
  ArrowRight,
} from "lucide-react";

const calculators = [
  {
    title: "YouTube Money Calculator",
    description:
      "Estimate YouTube earnings based on views, RPM and CPM.",
    href: "/youtube-money-calculator",
    icon: DollarSign,
  },
  {
    title: "YouTube RPM Calculator",
    description:
      "Calculate estimated RPM and revenue per 1,000 views.",
    href: "/youtube-rpm-calculator",
    icon: BarChart3,
  },
  {
    title: "YouTube CPM Calculator",
    description:
      "Estimate advertising CPM and YouTube ad revenue.",
    href: "/youtube-cpm-calculator",
    icon: BadgeDollarSign,
  },
  {
    title: "YouTube Shorts Calculator",
    description:
      "Estimate earnings from YouTube Shorts views.",
    href: "/youtube-shorts-money-calculator",
    icon: PlaySquare,
  },
];

export default function RevenueCalculators() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="font-bold uppercase tracking-widest text-red-600">
            Free Creator Tools
          </span>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Free YouTube Revenue Calculators
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Calculate YouTube revenue, RPM, CPM and Shorts earnings
            using our free creator tools.
          </p>

        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

          {calculators.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50">
                  <Icon className="text-red-600" size={30} />
                </div>

                <span className="mt-6 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                  FREE
                </span>

                <h3 className="mt-5 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-8 flex items-center gap-2 font-semibold text-red-600">
                  Try Calculator

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </Link>
            );
          })}

        </div>

      </div>

    </section>
  );
}