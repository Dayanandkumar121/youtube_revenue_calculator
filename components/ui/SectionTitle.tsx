type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="text-center mb-10">

      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
        {title}
      </h1>

      {subtitle && (
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}

    </div>
  );
}