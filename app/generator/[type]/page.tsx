type Props = {
  params: Promise<{
    type: string;
  }>;
};

export default async function GeneratorPage({
  params,
}: Props) {
  const { type } = await params;

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">

      <h1 className="text-center text-5xl font-black">
        {type.replace("-", " ").toUpperCase()}
      </h1>

      <p className="mt-5 text-center text-slate-600">
        AI {type.replace("-", " ")} Generator
      </p>

    </main>
  );
}