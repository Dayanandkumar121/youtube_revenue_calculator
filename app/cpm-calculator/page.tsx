import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YouTube CPM Calculator",
  description:
    "Free YouTube CPM Calculator to estimate earnings from CPM and views.",
};

export default function CPMCalculatorPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">

      <h1 className="text-center text-5xl font-black">
        YouTube CPM Calculator
      </h1>

      <p className="mt-4 text-center text-slate-600">
        Calculate estimated earnings based on CPM and total views.
      </p>

      <div className="mt-12 rounded-3xl border bg-white p-10 shadow">

        <p className="text-center text-slate-500">
          🚀 CPM Calculator coming in the next step.
        </p>

      </div>

    </main>
  );
}