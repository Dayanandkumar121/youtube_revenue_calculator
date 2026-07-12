import type { Metadata } from "next";
import RevenueCalculator from "@/components/calculator/RevenueCalculator";

export const metadata: Metadata = {
  title: "YouTube Revenue Calculator",
  description:
    "Free YouTube Revenue Calculator. Estimate daily, weekly, monthly and yearly YouTube earnings using views, CPM, country and niche.",
};

export default function RevenueCalculatorPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">

      <h1 className="text-center text-5xl font-black">
        YouTube Revenue Calculator
      </h1>

      <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-600">
        Estimate your YouTube earnings using views, country, CPM and niche.
      </p>

      <div className="mt-12">
        <RevenueCalculator />
      </div>

    </main>
  );
}