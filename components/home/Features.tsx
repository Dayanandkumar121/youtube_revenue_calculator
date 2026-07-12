import {
  Gauge,
  Search,
  Shield,
  Sparkles,
  Cpu,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Gauge,
    title: "Lightning Fast",
    description: "Optimized for instant calculations.",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description: "Generate SEO-friendly content and estimates.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "No login required. No personal data collected.",
  },
  {
    icon: Cpu,
    title: "Modern Technology",
    description: "Built with Next.js and modern web technologies.",
  },
  {
    icon: Clock,
    title: "Always Available",
    description: "Use the tools anytime, anywhere.",
  },
  {
    icon: Sparkles,
    title: "Growing Platform",
    description: "New creator tools added regularly.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-widest text-red-600 font-bold">
            Features
          </span>

          <h2 className="mt-3 text-5xl font-black text-slate-900">
            Built For Modern Creators
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border bg-white p-8 hover:shadow-xl transition"
              >
                <Icon className="text-red-600" size={32} />

                <h3 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {item.description}
                </p>

              </div>
            );

          })}

        </div>

      </div>
    </section>
  );
}