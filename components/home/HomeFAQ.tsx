"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much does YouTube pay per 1,000 views?",
    answer:
      "YouTube earnings depend on RPM, CPM, audience location, niche, and watch time. Our calculator provides an estimated revenue range.",
  },
  {
    question: "Is this YouTube Revenue Calculator free?",
    answer:
      "Yes. All revenue calculations and analytics tools are completely free to use.",
  },
  {
    question: "How accurate is the revenue estimate?",
    answer:
      "The calculator estimates earnings using industry RPM averages. Actual revenue may vary based on audience and content niche.",
  },
  {
    question: "Can I analyze any YouTube channel?",
    answer:
      "Yes. You can analyze any public YouTube channel by entering its handle or URL.",
  },
  {
    question: "Does this tool use the official YouTube API?",
    answer:
      "Yes. Public channel information is retrieved using the YouTube Data API.",
  },
];

export default function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-black">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-slate-600">
            Everything you need to know about our YouTube tools.
          </p>
        </div>

        <div className="space-y-4">

          {faqs.map((faq, index) => (

            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-slate-200"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >

                <span className="text-lg font-semibold">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {open === index && (

                <div className="border-t border-slate-200 bg-slate-50 px-6 py-5 text-slate-600">
                  {faq.answer}
                </div>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}