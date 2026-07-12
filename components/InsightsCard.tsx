type InsightsCardProps = {
  show: boolean;
  totalViews: number;
  totalVideos: number;
  country: string;
};

export default function InsightsCard({
  show,
  totalViews,
  totalVideos,
  country,
}: InsightsCardProps) {
  if (!show) return null;

  const averageViews =
    totalVideos > 0 ? Math.round(totalViews / totalVideos) : 0;

  const dailyViews = Math.round(averageViews / 365);

  const rpmMap: Record<string, number> = {
    "United States": 4,
    India: 0.6,
    Canada: 3.5,
    Australia: 4.2,
    "United Kingdom": 3.8,
  };

  const rpm = rpmMap[country] || 4;

  return (
    <div className="mt-10 bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-3xl font-bold text-center mb-10">
        Revenue Insights
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-red-50 rounded-2xl p-6 text-center">
          <h3 className="font-semibold">💵 RPM</h3>

          <p className="text-3xl font-bold text-red-600 mt-3">
            ${rpm}
          </p>
        </div>

        <div className="bg-blue-50 rounded-2xl p-6 text-center">
          <h3 className="font-semibold">
            📺 Avg Views / Video
          </h3>

          <p className="text-3xl font-bold text-blue-600 mt-3">
            {averageViews.toLocaleString()}
          </p>
        </div>

        <div className="bg-green-50 rounded-2xl p-6 text-center">
          <h3 className="font-semibold">
            📈 Daily Views
          </h3>

          <p className="text-3xl font-bold text-green-600 mt-3">
            {dailyViews.toLocaleString()}
          </p>
        </div>

        <div className="bg-yellow-50 rounded-2xl p-6 text-center">
          <h3 className="font-semibold">
            🌍 Country
          </h3>

          <p className="text-xl font-bold text-yellow-700 mt-3">
            {country}
          </p>
        </div>

      </div>

    </div>
  );
}