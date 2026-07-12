import {
  Calculator,
  Users,
  Globe,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    number: "10+",
    label: "Creator Tools",
    icon: Calculator,
  },
  {
    number: "24/7",
    label: "Free Access",
    icon: Users,
  },
  {
    number: "190+",
    label: "Countries",
    icon: Globe,
  },
  {
    number: "Fast",
    label: "Performance",
    icon: Sparkles,
  },
];

export default function PlatformStats() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.label}
                className="rounded-3xl border border-slate-200 p-8 text-center transition hover:-translate-y-2 hover:shadow-xl"
              >

                <Icon
                  className="mx-auto text-red-600"
                  size={34}
                />

                <h2 className="mt-5 text-5xl font-black text-slate-900">

                  {item.number}

                </h2>

                <p className="mt-3 text-slate-500">

                  {item.label}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}