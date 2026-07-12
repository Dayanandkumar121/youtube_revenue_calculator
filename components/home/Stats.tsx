import {
  Users,
  Calculator,
  Globe,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    title: "10+",
    subtitle: "Creator Tools",
    icon: Calculator,
  },
  {
    title: "Free",
    subtitle: "Forever",
    icon: ShieldCheck,
  },
  {
    title: "Worldwide",
    subtitle: "Access",
    icon: Globe,
  },
  {
    title: "Fast",
    subtitle: "Calculations",
    icon: Users,
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-20">

      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-4">

        {stats.map((item) => {

          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <Icon
                size={40}
                className="text-red-600"
              />

              <h2 className="mt-6 text-4xl font-black text-slate-900">
                {item.title}
              </h2>

              <p className="mt-2 text-slate-500">
                {item.subtitle}
              </p>

            </div>
          );
        })}

      </div>

    </section>
  );
}