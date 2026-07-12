import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function FeaturedImage({
  src,
  alt,
}: Props) {
  return (
    <div className="relative mb-16 h-[450px] overflow-hidden rounded-3xl">

      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover"
      />

    </div>
  );
}