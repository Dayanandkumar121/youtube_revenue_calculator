import Image from "next/image";
import { Globe, Calendar, Download } from "lucide-react";
import { Channel } from "@/types/channel";

type Props = {
  channel: Channel;
};

export default function ChannelHero({ channel }: Props) {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

      {/* Banner */}
      <div className="relative h-64 w-full bg-gradient-to-r from-red-600 via-red-500 to-orange-500">
        {channel.banner && (
          <Image
            src={channel.banner}
            alt={channel.title}
            fill
            unoptimized
            className="object-cover opacity-90"
          />
        )}

        <div className="absolute inset-0 bg-black/25"></div>

        {/* Download Banner Button */}
        {channel.banner && (
          <a
            href={channel.banner}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-semibold text-white shadow-lg transition hover:bg-red-700"
          >
            <Download size={18} />
            Download Banner
          </a>
        )}
      </div>

      {/* Content */}
      <div className="relative px-8 pb-10">

        {/* Logo */}
        <div className="-mt-16 mb-6 flex items-end gap-6">

          <Image
            src={channel.logo}
            alt={channel.title}
            width={140}
            height={140}
            unoptimized
            className="rounded-full border-4 border-white bg-white shadow-xl"
          />

          {/* Download Logo Button */}
          <a
            href={channel.logo}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-3 flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-black"
          >
            <Download size={18} />
            Download Logo
          </a>

        </div>

        <div className="flex flex-col gap-3">

          <h1 className="text-4xl font-black text-slate-900">
            {channel.title}
          </h1>

          <p className="text-lg text-slate-500">
            {channel.handle}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-slate-600">

            <div className="flex items-center gap-2">
              <Globe size={18} />
              <span>{channel.country || "Unknown"}</span>
            </div>

            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>
                Joined{" "}
                {new Date(channel.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}
              </span>
            </div>

          </div>

          <p className="mt-4 max-w-4xl leading-8 text-slate-600">
            {channel.description.length > 250
              ? channel.description.substring(0, 250) + "..."
              : channel.description}
          </p>

        </div>

      </div>
    </section>
  );
}