import Link from "next/link";

const tools = [
  {
    title: "YouTube Revenue Calculator",
    href: "/youtube-revenue-calculator",
    description: "Estimate YouTube earnings instantly.",
  },
  {
    title: "YouTube Keyword Research",
    href: "/keyword-research",
    description: "Find high-ranking YouTube keywords.",
  },
  {
    title: "YouTube RPM Calculator",
    href: "/youtube-rpm-calculator",
    description: "Calculate estimated RPM.",
  },
  {
    title: "YouTube CPM Calculator",
    href: "/youtube-cpm-calculator",
    description: "Estimate CPM based earnings.",
  },
  {
    title: "YouTube Income Calculator",
    href: "/youtube-income-calculator",
    description: "Calculate daily, monthly and yearly income.",
  },
  {
    title: "YouTube Shorts Calculator",
    href: "/youtube-shorts-money-calculator",
    description: "Estimate Shorts revenue.",
  },
];

export default function RelatedTools() {
  return (
    <section className="py-20 bg-white">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold">
          Related Tools
        </h2>

        <p className="mt-4 text-center text-gray-600">
          Explore more free YouTube tools.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {tools.map((tool) => (

            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-2xl border bg-white p-6 shadow transition hover:shadow-xl hover:-translate-y-1"
            >

              <h3 className="text-xl font-bold">
                {tool.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {tool.description}
              </p>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}