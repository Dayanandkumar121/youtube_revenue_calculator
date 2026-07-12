import type { Metadata } from "next";
import { getChannel } from "@/services/api";
import { formatNumber } from "@/utils/format";
import Link from "next/link";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  return {
    title: `${slug} YouTube Revenue Calculator`,
    description: `Estimate ${slug}'s YouTube earnings, subscribers, views, videos and revenue using our free YouTube Revenue Calculator.`,
  };
}

export default async function ChannelPage({
  params,
}: Props) {
  const { slug } = await params;

  let channel = null;

  try {
    const data = await getChannel(slug);

    if (data.success) {
      channel = data.channel;
    }
  } catch (error) {
    console.error(error);
  }

  if (!channel) {
    return (
      <main className="max-w-6xl mx-auto py-20 px-6">
        <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
          <h1 className="text-5xl font-bold text-red-600">
            Channel Not Found
          </h1>

          <p className="mt-4 text-gray-600">
            We couldn't find this YouTube channel.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto py-20 px-6 space-y-10">

      {/* Hero Card */}
      <section className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-10">

        <div className="flex flex-col items-center">

          <img
            src={channel.thumbnail}
            alt={channel.channelName}
            className="w-40 h-40 rounded-full border-4 border-red-600 shadow-xl"
          />

          <h1 className="mt-8 text-5xl font-extrabold text-gray-900 text-center">
            {channel.channelName}
          </h1>

          <p className="mt-3 text-lg text-gray-500">
            📺 YouTube Channel Statistics
          </p>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

          <div className="bg-red-50 border border-red-100 rounded-2xl p-8 text-center hover:shadow-xl transition">

            <div className="text-5xl">👥</div>

            <h3 className="mt-4 text-xl font-bold text-red-600">
              Subscribers
            </h3>

            <p className="mt-4 text-3xl font-extrabold text-gray-900">
              {formatNumber(channel.subscribers)}
            </p>

          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center hover:shadow-xl transition">

            <div className="text-5xl">👀</div>

            <h3 className="mt-4 text-xl font-bold text-blue-600">
              Total Views
            </h3>

            <p className="mt-4 text-3xl font-extrabold text-gray-900 break-all">
              {formatNumber(channel.views)}
            </p>

          </div>

          <div className="bg-green-50 border border-green-100 rounded-2xl p-8 text-center hover:shadow-xl transition">

            <div className="text-5xl">🎥</div>

            <h3 className="mt-4 text-xl font-bold text-green-600">
              Videos
            </h3>

            <p className="mt-4 text-3xl font-extrabold text-gray-900">
              {formatNumber(channel.videos)}
            </p>

          </div>

        </div>

      </section>

      {/* About */}
      <section className="bg-white rounded-3xl shadow-xl border border-gray-200 p-10">

        <h2 className="text-3xl font-bold text-gray-900">
          About {channel.channelName}
        </h2>

        <p className="mt-6 text-lg text-gray-700 leading-8">
          <strong>{channel.channelName}</strong> currently has{" "}
          <strong>{formatNumber(channel.subscribers)}</strong>{" "}
          subscribers, more than{" "}
          <strong>{formatNumber(channel.views)}</strong>{" "}
          total views and{" "}
          <strong>{formatNumber(channel.videos)}</strong>{" "}
          published videos.

          <br />
          <br />

          This page provides an estimated overview of the channel's public
          statistics. Revenue estimates on our website are calculated using
          average RPM values, audience country, content category and publicly
          available YouTube statistics.

          <br />
          <br />

          Actual YouTube earnings may differ because they depend on audience
          location, CPM, advertiser demand, watch time, memberships,
          sponsorships, affiliate marketing and other monetization methods.
        </p>

      </section>

      {/* FAQ */}
      <section className="bg-white rounded-3xl shadow-xl border border-gray-200 p-10">

        <h2 className="text-3xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>

        <div className="space-y-8 mt-8">

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              How are YouTube earnings estimated?
            </h3>

            <p className="mt-3 text-gray-700 leading-7">
              We estimate earnings using average RPM values, public channel
              statistics and audience country. Actual revenue may vary.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Is this revenue 100% accurate?
            </h3>

            <p className="mt-3 text-gray-700 leading-7">
              No. Only the channel owner knows the exact earnings. These
              calculations are estimates based on publicly available data.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Why does RPM change?
            </h3>

            <p className="mt-3 text-gray-700 leading-7">
              RPM depends on audience country, niche, watch time,
              advertiser demand and seasonal trends.
            </p>
          </div>

        </div>

      </section>

      {/* Related Tools */}
      <section className="bg-white rounded-3xl shadow-xl border border-gray-200 p-10">

        <h2 className="text-3xl font-bold text-gray-900">
          Related Tools
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <div className="rounded-xl border border-gray-200 p-6 hover:border-red-500 transition">
            🎯 YouTube Revenue Calculator
          </div>

          <div className="rounded-xl border border-gray-200 p-6 hover:border-red-500 transition">
            💵 CPM Calculator
          </div>

          <div className="rounded-xl border border-gray-200 p-6 hover:border-red-500 transition">
            📈 RPM Calculator
          </div>

          <div className="rounded-xl border border-gray-200 p-6 hover:border-red-500 transition">
            📺 Channel Analytics
          </div>

        </div>

      </section>

    </main>
  );
}