"use client";

import { useMemo, useState } from "react";

import GeneratorLayout from "@/components/generator/GeneratorLayout";
import GeneratorInput from "@/components/generator/GeneratorInput";
import CopyButton from "@/components/generator/CopyButton";

import { generateDescription } from "@/utils/descriptionGenerator";

export default function DescriptionGenerator() {
  const [keyword, setKeyword] = useState("");

  const description = useMemo(() => {
    return generateDescription(keyword);
  }, [keyword]);

  return (
    <GeneratorLayout
      title="📝 YouTube Description Generator"
      description="Generate SEO-friendly YouTube descriptions."
    >
      <GeneratorInput
        label="Main Keyword"
        value={keyword}
        placeholder="Enter your keyword..."
        onChange={setKeyword}
      />

      {description && (
        <div className="mt-10">

          <div className="flex justify-between items-center">

            <h2 className="text-2xl font-bold">
              Description
            </h2>

            <CopyButton text={description} />

          </div>

          <textarea
            readOnly
            value={description}
            className="w-full mt-6 h-80 rounded-xl border p-5 bg-gray-50"
          />

        </div>
      )}

    </GeneratorLayout>
  );
}