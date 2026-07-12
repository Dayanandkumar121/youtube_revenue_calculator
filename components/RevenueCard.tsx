import { formatMoney } from "../utils/format";
import { RevenueCardProps } from "./RevenueChart";

export default function RevenueCard({
  showRevenue,
  minRevenue,
  avgRevenue,
  maxRevenue,
  dailyRevenue,
  monthlyRevenue,
  yearlyRevenue,
  country,
  setCountry,
  category,
  setCategory,
}: RevenueCardProps) {
  if (!showRevenue) return null;

  return (
    <div className="mt-10 bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">

      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-gray-900">
        💰 Estimated Revenue
      </h2>

      <p className="text-center text-gray-500 mt-3">
        Select your audience country and channel category for a more accurate revenue estimate.
      </p>

      {/* Selectors */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">

        {/* Country */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            🌍 Audience Country
          </label>

          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
          >
            <option>United States</option>
            <option>India</option>
            <option>United Kingdom</option>
            <option>Canada</option>
            <option>Australia</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            📂 Channel Category
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          >
            <option>Entertainment</option>
            <option>Gaming</option>
            <option>Finance</option>
            <option>Business</option>
            <option>Technology</option>
            <option>Education</option>
            <option>Health</option>
            <option>Travel</option>
            <option>Music</option>
          </select>
        </div>

      </div>

      {/* Revenue Range */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

        <div className="bg-red-50 rounded-2xl p-6 text-center shadow hover:shadow-lg transition">

          <div className="text-5xl">📉</div>

          <p className="mt-3 text-gray-500 font-medium">
            Minimum Revenue
          </p>

          <h3 className="text-3xl font-bold text-red-600 mt-3">
            ${formatMoney(minRevenue)}
          </h3>

        </div>

        <div className="bg-green-50 rounded-2xl p-6 text-center shadow hover:shadow-lg transition">

          <div className="text-5xl">💰</div>

          <p className="mt-3 text-gray-500 font-medium">
            Average Revenue
          </p>

          <h3 className="text-3xl font-bold text-green-600 mt-3">
            ${formatMoney(avgRevenue)}
          </h3>

        </div>

        <div className="bg-blue-50 rounded-2xl p-6 text-center shadow hover:shadow-lg transition">

          <div className="text-5xl">🚀</div>

          <p className="mt-3 text-gray-500 font-medium">
            Maximum Revenue
          </p>

          <h3 className="text-3xl font-bold text-blue-600 mt-3">
            ${formatMoney(maxRevenue)}
          </h3>

        </div>

      </div>

      {/* Daily Monthly Yearly */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

        <div className="bg-gray-50 rounded-2xl p-6 text-center border">

          <div className="text-4xl">📅</div>

          <h3 className="text-lg font-semibold mt-3">
            Daily Revenue
          </h3>

          <p className="text-2xl font-bold mt-3 text-gray-800">
            ${formatMoney(dailyRevenue)}
          </p>

        </div>

        <div className="bg-gray-50 rounded-2xl p-6 text-center border">

          <div className="text-4xl">📆</div>

          <h3 className="text-lg font-semibold mt-3">
            Monthly Revenue
          </h3>

          <p className="text-2xl font-bold mt-3 text-gray-800">
            ${formatMoney(monthlyRevenue)}
          </p>

        </div>

        <div className="bg-gray-50 rounded-2xl p-6 text-center border">

          <div className="text-4xl">📈</div>

          <h3 className="text-lg font-semibold mt-3">
            Yearly Revenue
          </h3>

          <p className="text-2xl font-bold mt-3 text-gray-800">
            ${formatMoney(yearlyRevenue)}
          </p>

        </div>

      </div>

      {/* Note */}
      <div className="mt-8 text-center bg-yellow-50 border border-yellow-200 rounded-xl p-4">
        <p className="text-sm text-gray-700">
          ⚠️ Revenue is an estimate based on country RPM and channel category.
          Actual earnings depend on CPM, audience quality, niche, watch time,
          advertiser demand, and YouTube policies.
        </p>
      </div>

    </div>
  );
}