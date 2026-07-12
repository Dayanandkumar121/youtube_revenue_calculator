type Props = {
  content: string;
};

export default function ArticleContent({ content }: Props) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
      <div className="mx-auto max-w-3xl">

        <p className="whitespace-pre-line text-lg leading-9 text-slate-700">
          {content}
        </p>

      </div>
    </section>
  );
}