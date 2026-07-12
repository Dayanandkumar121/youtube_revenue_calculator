export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-red-50 via-white to-red-100 py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center bg-red-100 text-red-600 px-5 py-2 rounded-full font-semibold">
          🚀 Free YouTube Revenue Calculator
        </div>

        {/* Main Heading */}
        <h1 className="mt-8 text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
          Estimate
          <span className="text-red-600"> YouTube Earnings </span>
          Instantly
        </h1>

        {/* Description */}
        <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto">
          Analyze any YouTube channel using live public data.
          Estimate daily, monthly and yearly YouTube revenue in seconds.
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <a
            href="#calculator"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-5 rounded-xl text-lg shadow-lg transition duration-300 hover:scale-105"
          >
            🔴 Calculate Revenue
          </a>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-4xl font-bold text-red-600">
              100K+
            </h2>

            <p className="mt-3 text-gray-600">
              Monthly Visitors
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-4xl font-bold text-red-600">
              195+
            </h2>

            <p className="mt-3 text-gray-600">
              Countries Supported
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-4xl">
              ⭐⭐⭐⭐⭐
            </h2>

            <p className="mt-3 text-gray-600">
              Trusted by Creators
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}