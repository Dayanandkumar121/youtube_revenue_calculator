type Props = {
  content: string;
};

export default function ArticleBody({ content }: Props) {
  return (
    <section className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">

      <div className="space-y-8 leading-8 text-slate-700 text-lg whitespace-pre-line">

        {content}

      </div>

    </section>
  );
}