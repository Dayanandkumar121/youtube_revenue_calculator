import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Props = {
  title: string;
};

export default function Breadcrumb({ title }: Props) {
  return (
    <nav className="mb-8 flex items-center gap-2 text-sm text-slate-500">

      <Link
        href="/"
        className="hover:text-red-600"
      >
        Home
      </Link>

      <ChevronRight size={16} />

      <Link
        href="/blog"
        className="hover:text-red-600"
      >
        Blog
      </Link>

      <ChevronRight size={16} />

      <span className="font-medium text-slate-900">
        {title}
      </span>

    </nav>
  );
}