import { InputHTMLAttributes } from "react";

export default function TextInput(
  props: InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <input
      {...props}
      className={`w-full rounded-xl border-2 border-gray-300
      p-4 text-lg
      focus:border-red-500
      focus:ring-4 focus:ring-red-100
      outline-none transition
      ${props.className ?? ""}`}
    />
  );
}