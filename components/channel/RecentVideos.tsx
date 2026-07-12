import Image from "next/image";
import { Channel } from "@/types/channel";

type Props = {
  channel: Channel;
};

export default function RecentVideos({ channel }: Props) {
  return (
    <section className="mt-12">

      <h2 className="mb-6 text-3xl font-black">
        Latest Videos
      </h2>

      <div className="grid gap-6 md:grid-cols-3">

        {channel.recentVideos.map((video) => (

          <div
            key={video.id}
            className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
          >

            <Image
              src={video.thumbnail}
              alt={video.title}
              width={500}
              height={300}
              unoptimized
              className="h-48 w-full object-cover"
            />

            <div className="p-5">

              <h3 className="line-clamp-2 font-bold">
                {video.title}
              </h3>

              <p className="mt-3 text-sm text-slate-500">
                {new Date(video.publishedAt).toLocaleDateString()}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}