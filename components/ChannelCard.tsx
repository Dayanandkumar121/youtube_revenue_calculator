import Image from "next/image";
import { formatNumber } from "../utils/format";

type ChannelCardProps = {
  showChannel: boolean;
  channelName: string;
  subscribers: string;
  views: string;
  videos: string;
  thumbnail: string;
};

export default function ChannelCard({
  showChannel,
  channelName,
  subscribers,
  views,
  videos,
  thumbnail,
}: ChannelCardProps) {
  if (!showChannel) return null;

  return (
    <div className="mt-10 bg-white rounded-3xl shadow-xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300">

      {/* Thumbnail */}
      <div className="flex justify-center">
        <div className="relative w-32 h-32">
          <Image
            src={thumbnail}
            alt={channelName}
            fill
            className="rounded-full border-4 border-red-600 object-cover shadow-lg"
            unoptimized
          />
        </div>
      </div>

      {/* Channel Name */}
      <div className="text-center mt-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 break-words">
          {channelName}
        </h2>

        <p className="text-gray-500 mt-2">
          📺 YouTube Channel
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

        {/* Subscribers */}
        <div className="bg-red-50 rounded-2xl p-6 text-center border border-red-100">

          <div className="text-5xl">👥</div>

          <p className="text-gray-500 mt-3">
            Subscribers
          </p>

          <h3 className="text-2xl font-bold text-red-600 mt-2">
            {formatNumber(subscribers)}
          </h3>

        </div>

        {/* Views */}
        <div className="bg-blue-50 rounded-2xl p-6 text-center border border-blue-100">

          <div className="text-5xl">👀</div>

          <p className="text-gray-500 mt-3">
            Total Views
          </p>

          <h3 className="text-2xl font-bold text-blue-600 mt-2">
            {formatNumber(views)}
          </h3>

        </div>

        {/* Videos */}
        <div className="bg-green-50 rounded-2xl p-6 text-center border border-green-100">

          <div className="text-5xl">🎥</div>

          <p className="text-gray-500 mt-3">
            Videos
          </p>

          <h3 className="text-2xl font-bold text-green-600 mt-2">
            {formatNumber(videos)}
          </h3>

        </div>

      </div>

      {/* Footer */}
      <div className="mt-10 flex justify-center">

        <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold shadow-sm">
          ✅ Live Data from YouTube API
        </span>

      </div>

    </div>
  );
}