"use client";

import { useState } from "react";

export default function RPMCalculatorPage() {
  const [views, setViews] = useState("");
  const [earnings, setEarnings] = useState("");
  const [rpm, setRpm] = useState<number | null>(null);

  function calculateRPM() {
    const totalViews = Number(views);
    const totalEarnings = Number(earnings);

    if (
      !totalViews ||
      !totalEarnings ||
      totalViews <= 0 ||
      totalEarnings < 0
    ) {
      alert("Please enter valid values.");
      return;
    }

    const result = (totalEarnings / totalViews) * 1000;
    setRpm(result);
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-center text-5xl font-black">
        YouTube RPM Calculator
      </h1>

      <p className="mt-4 text-center text-slate-600">
        Calculate your Revenue Per Mille (RPM) based on your earnings and views.
      </p>

      <div className="mt-12 rounded-3xl border bg-white p-8 shadow">
        <div className="space-y-6">

          <div>
            <label className="mb-2 block font-semibold">
              Total Views
            </label>

            <input
              type="number"
              value={views}
              onChange={(e) => setViews(e.target.value)}
              placeholder="100000"
              className="w-full rounded-xl border p-4"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Total Earnings ($)
            </label>

            <input
              type="number"
              value={earnings}
              onChange={(e) => setEarnings(e.target.value)}
              placeholder="250"
              className="w-full rounded-xl border p-4"
            />
          </div>

          <button
            onClick={calculateRPM}
            className="w-full rounded-xl bg-red-600 py-4 font-semibold text-white"
          >
            Calculate RPM
          </button>

          {rpm !== null && (
            <div className="rounded-2xl bg-green-50 p-6 text-center">
              <p className="text-lg text-slate-600">
                Estimated RPM
              </p>

              <h2 className="mt-3 text-5xl font-black text-green-600">
                ${rpm.toFixed(2)}
              </h2>

              <p className="mt-3 text-slate-500">
                Revenue earned per 1,000 views.
              </p>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}