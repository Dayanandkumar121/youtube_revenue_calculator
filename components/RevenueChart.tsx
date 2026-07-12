"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

type RevenueChartProps = {
  show: boolean;
  dailyRevenue: number;
  monthlyRevenue: number;
  yearlyRevenue: number;
};

export default function RevenueChart({
  show,
  dailyRevenue,
  monthlyRevenue,
  yearlyRevenue,
}: RevenueChartProps) {
  if (!show) return null;

  const data = {
    labels: ["Daily", "Monthly", "Yearly"],
    datasets: [
      {
        label: "Revenue ($)",
        data: [
          dailyRevenue,
          monthlyRevenue,
          yearlyRevenue,
        ],
        backgroundColor: [
          "#22c55e",
          "#3b82f6",
          "#f59e0b",
        ],
        borderRadius: 10,
      },
    ],
  };

  return (
    <div className="mt-10 bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-3xl font-bold text-center mb-8">
        Revenue Chart
      </h2>

      <Bar data={data} />

    </div>
  );
}
export type RevenueCardProps = {
  showRevenue: boolean;

  minRevenue: number;
  avgRevenue: number;
  maxRevenue: number;

  dailyRevenue: number;
  monthlyRevenue: number;
  yearlyRevenue: number;

  country: string;
  setCountry: (country: string) => void;

  category: string;
  setCategory: (category: string) => void;
};
