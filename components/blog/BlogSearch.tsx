"use client";

import { useState } from "react";

type Props = {
  onSearch: (value: string) => void;
};

export default function BlogSearch({ onSearch }: Props) {
  const [value, setValue] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const text = e.target.value;
    setValue(text);
    onSearch(text);
  }

  return (
    <div className="mb-10">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search articles..."
        className="w-full rounded-2xl border border-slate-300 px-5 py-4 text-lg outline-none focus:border-red-600"
      />
    </div>
  );
}