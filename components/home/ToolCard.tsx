import Link from "next/link";
import { LucideIcon, ArrowRight } from "lucide-react";

type Props = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export default function ToolCard({
  title,
  description,
  href,
  icon: Icon,
}: Props) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-2xl"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
        <Icon size={28} />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-8 flex items-center gap-2 font-semibold text-red-600">
        Explore
        <ArrowRight
          size={18}
          className="transition group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}