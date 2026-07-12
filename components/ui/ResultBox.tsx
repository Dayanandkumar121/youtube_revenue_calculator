import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ResultBox({
  children,
}: Props) {
  return (
    <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
      {children}
    </div>
  );
}