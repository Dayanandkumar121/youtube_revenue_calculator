import CopyButton from "./CopyButton";

type Props = {
  title: string;
  items: string[];
};

export default function GeneratorResult({
  title,
  items,
}: Props) {
  if (items.length === 0) return null;

  return (
    <div className="mt-10">

      <div className="flex justify-between items-center">

        <h2 className="text-2xl font-bold">
          {title}
        </h2>

        <CopyButton text={items.join("\n")} />

      </div>

      <div className="grid gap-3 mt-6">

        {items.map((item) => (
          <div
            key={item}
            className="rounded-xl border bg-gray-50 p-4"
          >
            {item}
          </div>
        ))}

      </div>

    </div>
  );
}