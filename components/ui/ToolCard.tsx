import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ToolCard({ children }: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl shadow-lg p-8 md:p-10">
      {children}
    </div>
  );
}