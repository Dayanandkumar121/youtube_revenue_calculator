"use client";

import { useMemo, useState } from "react";

import GeneratorLayout from "@/components/generator/GeneratorLayout";
import GeneratorInput from "@/components/generator/GeneratorInput";
import GeneratorResult from "@/components/generator/GeneratorResult";

import { generateTitles } from "@/utils/titleGenerator";

export default function TitleGenerator() {
  const [keyword, setKeyword] = useState("");

  const titles = useMemo(() => {
    return generateTitles(keyword);
  }, [keyword]);

  return (
    <GeneratorLayout
      title="🎬 YouTube Title Generator"
      description="Generate SEO-friendly YouTube titles instantly."
    >
      <GeneratorInput
        label="Main Keyword"
        value={keyword}
        placeholder="Enter your keyword..."
        onChange={setKeyword}
      />

      <GeneratorResult
        title="Generated Titles"
        items={titles}
      />
    </GeneratorLayout>
  );
}