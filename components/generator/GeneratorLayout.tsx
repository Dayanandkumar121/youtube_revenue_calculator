import { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function GeneratorLayout({
  title,
  description,
  children,
}: Props) {
  return (
    <main className="max-w-6xl mx-auto py-16">

      <div className="bg-white rounded-3xl border shadow-xl p-10">

        <h1 className="text-5xl font-black text-center">

          {title}

        </h1>

        <p className="text-center text-gray-500 mt-4">

          {description}

        </p>

        <div className="mt-10">

          {children}

        </div>

      </div>

    </main>
  );
}