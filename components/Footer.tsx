"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Play } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Channel", href: "/channel" },
  { name: "Compare", href: "/compare" },
  { name: "Blog", href: "/blog" },
  { name: "Tools", href: "/tools" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-xl bg-red-600 p-2 text-white">
            <Play size={24} />
          </div>

          <div>
            <h1 className="text-lg font-black text-slate-900">
              TubeToolkit
            </h1>

            <p className="text-xs text-slate-500">
              Creator Analytics
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-slate-600 transition hover:text-red-600"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/channel"
            className="rounded-xl bg-red-600 px-5 py-2 font-semibold text-white transition hover:bg-red-700"
          >
            Analyze Channel
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="flex flex-col p-4">

            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-slate-700 hover:bg-slate-100"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/channel"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-xl bg-red-600 px-4 py-3 text-center font-semibold text-white"
            >
              Analyze Channel
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}