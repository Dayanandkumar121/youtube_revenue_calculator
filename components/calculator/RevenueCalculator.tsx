"use client";

import { useMemo, useState } from "react";

const countries = [
  { name: "Australia", cpm: 7 },
  { name: "Bangladesh", cpm: 0.4 },
  { name: "Brazil", cpm: 1.5 },
  { name: "Canada", cpm: 6 },
  { name: "France", cpm: 5 },
  { name: "Germany", cpm: 6 },
  { name: "India", cpm: 0.8 },
  { name: "Indonesia", cpm: 0.7 },
  { name: "Ireland", cpm: 6 },
  { name: "Italy", cpm: 4 },
  { name: "Japan", cpm: 5 },
  { name: "Malaysia", cpm: 1.8 },
  { name: "Mexico", cpm: 1.8 },
  { name: "Nepal", cpm: 0.35 },
  { name: "Netherlands", cpm: 6 },
  { name: "New Zealand", cpm: 6 },
  { name: "Norway", cpm: 8 },
  { name: "Pakistan", cpm: 0.5 },
  { name: "Philippines", cpm: 0.8 },
  { name: "Saudi Arabia", cpm: 5 },
  { name: "Singapore", cpm: 6 },
  { name: "South Africa", cpm: 1.6 },
  { name: "South Korea", cpm: 5 },
  { name: "Spain", cpm: 4 },
  { name: "Sri Lanka", cpm: 0.5 },
  { name: "Sweden", cpm: 7 },
  { name: "Switzerland", cpm: 8 },
  { name: "Thailand", cpm: 1.5 },
  { name: "United Arab Emirates", cpm: 6 },
  { name: "United Kingdom", cpm: 7 },
  { name: "United States", cpm: 8 },
  { name: "Vietnam", cpm: 0.8 },
];
const niches = [
  { name: "Gaming", multiplier: 0.8 },
  { name: "Entertainment", multiplier: 1 },
  { name: "Education", multiplier: 1.3 },
  { name: "Technology", multiplier: 1.5 },
  { name: "Finance", multiplier: 2.2 },
];

export default function RevenueCalculator() {
  const [views, setViews] = useState(100000);
  const [country, setCountry] = useState(countries[0]);
  const [niche, setNiche] = useState(niches[0]);

  const result = useMemo(() => {
    const cpm = country.cpm * niche.multiplier;

    const monthly = (views / 1000) * cpm;

    return {
      cpm,
      rpm: cpm * 0.55,
      daily: monthly / 30,
      weekly: monthly / 4,
      monthly,
      yearly: monthly * 12,
    };
  }, [views, country, niche]);

  const card =
    "rounded-2xl border bg-white p-6 shadow text-center";

  return (
    <>

      <div className="rounded-3xl border bg-white p-8 shadow">

        <div className="grid gap-6 md:grid-cols-3">

          <div>
            <label className="mb-2 block font-semibold">
              Monthly Views
            </label>

            <input
              type="number"
              value={views}
              onChange={(e) =>
                setViews(Number(e.target.value))
              }
              className="w-full rounded-xl border p-4"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Country
            </label>

            <select
              className="w-full rounded-xl border p-4"
              value={country.name}
              onChange={(e) =>
                setCountry(
                  countries.find(
                    (c) => c.name === e.target.value
                  )!
                )
              }
            >
              {countries.map((c) => (
                <option key={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Niche
            </label>

            <select
              className="w-full rounded-xl border p-4"
              value={niche.name}
              onChange={(e) =>
                setNiche(
                  niches.find(
                    (n) => n.name === e.target.value
                  )!
                )
              }
            >
              {niches.map((n) => (
                <option key={n.name}>
                  {n.name}
                </option>
              ))}
            </select>
          </div>

        </div>

      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">

        <div className={card}>
          <p>Estimated CPM</p>
          <h2 className="mt-3 text-4xl font-black">
            ${result.cpm.toFixed(2)}
          </h2>
        </div>

        <div className={card}>
          <p>Estimated RPM</p>
          <h2 className="mt-3 text-4xl font-black">
            ${result.rpm.toFixed(2)}
          </h2>
        </div>

        <div className={card}>
          <p>Daily Revenue</p>
          <h2 className="mt-3 text-4xl font-black text-green-600">
            ${result.daily.toFixed(2)}
          </h2>
        </div>

        <div className={card}>
          <p>Monthly Revenue</p>
          <h2 className="mt-3 text-4xl font-black text-blue-600">
            ${result.monthly.toFixed(2)}
          </h2>
        </div>

        
        <div className={card}>
          <p>Yearly Revenue</p>
          <h2 className="mt-3 text-4xl font-black text-purple-600">
            ${result.yearly.toFixed(2)}
          </h2>
        </div>

      </div>
    </>
  );
}