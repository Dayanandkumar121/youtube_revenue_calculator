type Props = {
  result: any;
};

export default function KeywordResults({ result }: Props) {
  if (!result) return null;

  function copyText(text: string) {
    navigator.clipboard.writeText(text);
    alert("Copied Successfully!");
  }

  return (
    <div className="mt-10 space-y-8">

      {/* Header */}
      <div className="rounded-2xl border bg-white p-6 shadow">

        <h2 className="text-3xl font-bold text-slate-900">
          {result.keyword}
        </h2>

        <p className="mt-4 text-slate-600 leading-7">
          <span className="font-semibold text-slate-900">
            Search Intent:
          </span>{" "}
          {result.searchIntent}
        </p>

      </div>

      {/* Related Keywords */}
      <div className="rounded-2xl border bg-white p-6 shadow">

        <div className="mb-5 flex items-center justify-between">

          <h3 className="text-2xl font-bold">
            Related Keywords
          </h3>

          <button
            onClick={() =>
              copyText(result.relatedKeywords.join(", "))
            }
            className="rounded-lg bg-red-600 px-5 py-2 text-white transition hover:bg-red-700"
          >
            📋 Copy
          </button>

        </div>

        <div className="flex flex-wrap gap-3">

          {result.relatedKeywords?.map(
            (item: string, index: number) => (
              <span
                key={index}
                className="rounded-full bg-red-100 px-4 py-2 text-red-600 font-medium"
              >
                {item}
              </span>
            )
          )}

        </div>

      </div>

      {/* Long Tail Keywords */}

      <div className="rounded-2xl border bg-white p-6 shadow">

        <div className="mb-5 flex items-center justify-between">

          <h3 className="text-2xl font-bold">
            Long Tail Keywords
          </h3>

          <button
            onClick={() =>
              copyText(result.longTailKeywords.join("\n"))
            }
            className="rounded-lg bg-red-600 px-5 py-2 text-white transition hover:bg-red-700"
          >
            📋 Copy
          </button>

        </div>

        <ul className="space-y-3">

          {result.longTailKeywords?.map(
            (item: string, index: number) => (
              <li
                key={index}
                className="rounded-lg bg-slate-50 p-3"
              >
                {item}
              </li>
            )
          )}

        </ul>

      </div>

      {/* Question Keywords */}

      <div className="rounded-2xl border bg-white p-6 shadow">

        <div className="mb-5 flex items-center justify-between">

          <h3 className="text-2xl font-bold">
            Question Keywords
          </h3>

          <button
            onClick={() =>
              copyText(result.questionKeywords.join("\n"))
            }
            className="rounded-lg bg-red-600 px-5 py-2 text-white transition hover:bg-red-700"
          >
            📋 Copy
          </button>

        </div>

        <ul className="space-y-3">

          {result.questionKeywords?.map(
            (item: string, index: number) => (
              <li
                key={index}
                className="rounded-lg bg-slate-50 p-3"
              >
                {item}
              </li>
            )
          )}

        </ul>

      </div>

    </div>
  );
}