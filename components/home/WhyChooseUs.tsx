import {
  ShieldCheck,
  BarChart3,
  Clock3,
  BadgeDollarSign,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Reliable YouTube Analytics",
    description:
      "Get accurate channel statistics using trusted public YouTube data and industry-standard calculations.",
  },
  {
    icon: BarChart3,
    title: "Accurate Revenue Estimates",
    description:
      "Estimate YouTube earnings using RPM and CPM values to understand your channel's earning potential.",
  },
  {
    icon: Clock3,
    title: "Instant Channel Analysis",
    description:
      "Analyze any public YouTube channel in seconds without creating an account.",
  },
  {
    icon: BadgeDollarSign,
    title: "100% Free Creator Tools",
    description:
      "Access revenue calculators, keyword research, analytics and download tools completely free.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="font-bold uppercase tracking-widest text-red-600">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Everything a YouTube Creator Needs
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Creator Toolkit provides free YouTube creator tools to analyze
            channels, estimate revenue, research keywords, compare creators and
            grow your YouTube channel faster.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50">

                  <Icon
                    size={30}
                    className="text-red-600"
                  />

                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}