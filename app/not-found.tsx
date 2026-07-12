import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">

      <div className="max-w-xl text-center">

        <h1 className="text-7xl font-black text-red-600">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold text-slate-900">
          Page Not Found
        </h2>

        <p className="mt-4 text-lg text-slate-600">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-xl bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700"
        >
          Back to Home
        </Link>

      </div>

    </main>
  );
}