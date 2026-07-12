type StatsCardProps = {
  show: boolean;
  subscribers: string;
  views: string;
  videos: string;
};

export default function StatsCard({
  show,
  subscribers,
  views,
  videos,
}: StatsCardProps) {
  if (!show) return null;

  const stats = [
    {
      title: "Subscribers",
      value: subscribers,
      icon: "👥",
    },
    {
      title: "Total Views",
      value: views,
      icon: "👀",
    },
    {
      title: "Videos",
      value: videos,
      icon: "🎥",
    },
  ];

  return (
    <div className="mt-10">

      <h2 className="text-3xl font-bold text-center mb-8">
        Channel Statistics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {stats.map((stat) => (

          <div
            key={stat.title}
            className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition"
          >

            <div className="text-5xl">
              {stat.icon}
            </div>

            <h3 className="mt-4 text-xl font-semibold">
              {stat.title}
            </h3>

            <p className="mt-4 text-3xl font-bold text-red-600">
              {stat.value}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}