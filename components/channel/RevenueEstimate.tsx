import { DollarSign, TrendingUp } from "lucide-react";
import DownloadReport from "@/components/DownloadReport";

import { Channel } from "@/types/channel";

type Props = {
  channel: Channel;
};

export default function RevenueEstimate({ channel }: Props) {
  const views = channel.views; 

  // Estimated monthly views (simple estimate)
  const monthlyViews = Math.round(views * 0.03);

  // RPM Range
  const minRPM = 1;
  const maxRPM = 5;

  const monthlyMin = (monthlyViews / 1000) * minRPM;
  const monthlyMax = (monthlyViews / 1000) * maxRPM;

  const yearlyMin = monthlyMin * 12;
  const yearlyMax = monthlyMax * 12;

  const money = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);

  const cards = [
    {
      title: "Estimated Monthly Revenue",
      value: `${money(monthlyMin)} - ${money(monthlyMax)}`,
      icon: DollarSign,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Estimated Yearly Revenue",
      value: `${money(yearlyMin)} - ${money(yearlyMax)}`,
      icon: TrendingUp,
      color: "bg-blue-50 text-blue-600",
    },
  ];

  return (
    <section className="mt-10">
      <h2 className="mb-6 text-3xl font-black text-slate-900">
        Revenue Estimate
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div
                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${card.color}`}
              >
                <Icon size={30} />
              </div>

              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                {card.title}
              </p>

              <h3 className="mt-4 text-3xl font-black text-slate-900">
                {card.value}
              </h3>

              <p className="mt-3 text-sm text-slate-500">
                Estimated using a default RPM range of $1–$5.
              </p>
            </div>
          );
        })}
      </div>


   <DownloadReport
  show={true}
  logo={channel.logo}
  banner={channel.banner}
  monthlyRevenue={`${money(monthlyMin)} - ${money(monthlyMax)}`}
  yearlyRevenue={`${money(yearlyMin)} - ${money(yearlyMax)}`}
/>
    </section>
  );
}