"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  title?: string;
  description?: string;
  faqs?: FAQItem[];
};

const defaultFaqs: FAQItem[] = [
  {
    question: "How accurate is this YouTube Revenue Calculator?",
    answer:
      "Our calculator provides estimated earnings based on public YouTube statistics and average RPM values. Actual earnings may vary.",
  },
  {
    question: "What is RPM?",
    answer:
      "RPM (Revenue Per Mille) is the estimated revenue earned per 1,000 views after YouTube's revenue share.",
  },
  {
    question: "Can I calculate Shorts revenue?",
    answer:
      "Yes. The calculator provides an estimate, but Shorts RPM is usually lower than long-form videos.",
  },
  {
    question: "Is this calculator free?",
    answer:
      "Yes. Our YouTube Revenue Calculator is completely free to use.",
  },
];

export default function FAQ({
  title = "Frequently Asked Questions",
  description = "Everything you need to know about our YouTube tools.",
  faqs = defaultFaqs,
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900">
          {title}
        </h2>

        <p className="text-center text-gray-600 mt-4">
          {description}
        </p>

        <div className="mt-12 space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="rounded-2xl bg-white shadow-md overflow-hidden"
            >

              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left"
              >

                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                <span className="text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>

              </button>

              {openIndex === index && (

                <div className="px-6 pb-6 text-gray-600 leading-7 border-t">

                  <p className="pt-5">
                    {faq.answer}
                  </p>

                </div>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}