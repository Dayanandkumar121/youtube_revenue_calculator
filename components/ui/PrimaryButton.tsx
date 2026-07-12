import { ButtonHTMLAttributes } from "react";

export default function PrimaryButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      {...props}
      className={`rounded-xl bg-red-600 hover:bg-red-700
      text-white font-semibold px-6 py-3
      transition duration-300 shadow-md hover:shadow-lg
      ${props.className ?? ""}`}
    />
  );
}