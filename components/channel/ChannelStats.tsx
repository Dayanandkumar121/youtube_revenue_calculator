import { Users, Eye, Video } from "lucide-react";
import { Channel } from "@/types/channel";
import { formatNumber } from "@/utils/formatNumber";

type Props = {
  channel: Channel;
};

export default function ChannelStats({ channel }: Props) {
  const stats = [
    {
      title: "Subscribers",
      value: formatNumber(channel.subscribers),
      subtitle: "People subscribed",
      icon: Users,
    },
    {
      title: "Total Views",
      value: formatNumber(channel.views),
      subtitle: "Lifetime views",
      icon: Eye,
    },
    {
      title: "Videos",
      value: formatNumber(channel.videos),
      subtitle: "Uploaded videos",
      icon: Video,
    },
  ];

  return (
    <section className="mt-10">
      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 transition group-hover:bg-red-500">
                <Icon
                  size={30}
                  className="text-red-600 group-hover:text-white"
                />
              </div>

              <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                {stat.title}
              </p>

              <h2 className="mt-3 text-4xl font-black text-slate-900">
                {stat.value}
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                {stat.subtitle}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}