const channels = [
  {
    name: "MrBeast",
    category: "Entertainment",
    subscribers: "500M+",
    image: "https://yt3.googleusercontent.com/ytc-placeholder",
  },
  {
    name: "T-Series",
    category: "Music",
    subscribers: "300M+",
    image: "https://yt3.googleusercontent.com/ytc-placeholder",
  },
  {
    name: "CarryMinati",
    category: "Gaming",
    subscribers: "45M+",
    image: "https://yt3.googleusercontent.com/ytc-placeholder",
  },
  {
    name: "TechBurner",
    category: "Technology",
    subscribers: "15M+",
    image: "https://yt3.googleusercontent.com/ytc-placeholder",
  },
];

export default function TrendingChannels() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-gray-900">
            Trending YouTube Channels
          </h2>

          <p className="mt-4 text-gray-600">
            Explore some of the world's most popular YouTube creators.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {channels.map((channel) => (

            <div
              key={channel.name}
              className="bg-gray-50 rounded-2xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-2 transition-all"
            >

              <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center text-4xl mx-auto">
                📺
              </div>

              <h3 className="text-2xl font-bold text-center mt-6">
                {channel.name}
              </h3>

              <p className="text-center text-gray-500 mt-2">
                {channel.category}
              </p>

              <p className="text-center mt-4 text-red-600 font-bold">
                {channel.subscribers} Subscribers
              </p>

              <button className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition">
                View Channel
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}