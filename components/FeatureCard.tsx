const features = [
  {
    icon: "📊",
    title: "Live YouTube Statistics",
    description:
      "Get real-time subscribers, total views, videos and channel information using the YouTube Data API.",
  },
  {
    icon: "💰",
    title: "Revenue Estimation",
    description:
      "Estimate daily, monthly and yearly YouTube earnings with country-wise RPM values.",
  },
  {
    icon: "🌍",
    title: "Country-wise RPM",
    description:
      "Switch between countries like the United States, India, Canada, Australia and the UK.",
  },
  {
    icon: "⚡",
    title: "Lightning Fast",
    description:
      "Analyze any public YouTube channel within seconds using our optimized calculator.",
  },
];

export default function FeatureCard() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose Our Calculator?
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to estimate YouTube earnings accurately,
            quickly and completely free.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border border-gray-100"
            >

              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-5xl mx-auto">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}