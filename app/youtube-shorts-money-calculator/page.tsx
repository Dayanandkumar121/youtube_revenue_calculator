import type { Metadata } from "next";
import RevenueCalculator from "@/components/RevenueCalculator";
import FAQ from "@/components/FAQ";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "YouTube Shorts Money Calculator",
  description:
    "Estimate your YouTube Shorts earnings using our free YouTube Shorts Money Calculator.",
};

export default function ShortsMoneyCalculatorPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <RevenueCalculator />
      <FAQ />
      <RelatedTools />
    </main>
  );
}