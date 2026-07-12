import Link from "next/link";
import RevenueCalculator from "@/components/RevenueCalculator";
import FAQSchema from "@/components/SEO/FAQSchema";

type LandingPageProps = {
  title: string;
  heading: string;
  description: string;
  aboutTitle: string;
  aboutDescription: string;
};

export default function LandingPage({
  title,
  heading,
  description,
  aboutTitle,
  aboutDescription,
}: LandingPageProps) {
  return (
    <main className="min-h-screen bg-gray-50">

      <FAQSchema />

      {/* Hero */}
      <section className="bg-gradient-to-r from-red-600 via-red-500 to-red-700 text-white">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <h1 className="text-5xl md:text-6xl font-extrabold">
            {heading}
          </h1>

          <p className="mt-6 max-w-3xl text-xl text-red-100 leading-8">
            {description}
          </p>

        </div>

      </section>

      {/* Calculator */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <RevenueCalculator />

      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-10">

          <h2 className="text-3xl font-bold text-gray-900">
            {aboutTitle}
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-8">
            {aboutDescription}
          </p>

        </div>

      </section>

      {/* Related Pages */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Related Calculators
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <Link
            href="/youtube-money-calculator"
            className="bg-white border rounded-2xl p-6 hover:border-red-600 hover:shadow-lg transition"
          >
            💰 Money Calculator
          </Link>

          <Link
            href="/youtube-rpm-calculator"
            className="bg-white border rounded-2xl p-6 hover:border-red-600 hover:shadow-lg transition"
          >
            📈 RPM Calculator
          </Link>

          <Link
            href="/youtube-cpm-calculator"
            className="bg-white border rounded-2xl p-6 hover:border-red-600 hover:shadow-lg transition"
          >
            📊 CPM Calculator
          </Link>

          <Link
            href="/"
            className="bg-white border rounded-2xl p-6 hover:border-red-600 hover:shadow-lg transition"
          >
            🏠 Home
          </Link>

        </div>

      </section>

    </main>
  );
}