import { ShieldCheck, Zap, Globe, Users } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Reliable Data",
    desc: "Powered by YouTube Data API",
  },
  {
    icon: Zap,
    title: "Fast Results",
    desc: "Get analytics in seconds",
  },
  {
    icon: Globe,
    title: "Worldwide",
    desc: "Supports creators globally",
  },
  {
    icon: Users,
    title: "Creator Focused",
    desc: "Built for YouTubers",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-white py-12 border-y border-slate-200">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 p-6 text-center transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Icon
                size={34}
                className="mx-auto text-red-600"
              />

              <h3 className="mt-4 font-bold">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}