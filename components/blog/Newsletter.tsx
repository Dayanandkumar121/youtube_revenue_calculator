export default function Newsletter() {
  return (
    <section className="mt-24 rounded-[36px] bg-gradient-to-r from-red-600 to-red-500 p-12 text-center">

      <h2 className="text-4xl font-black text-white">
        Stay Updated
      </h2>

      <p className="mt-5 text-red-100">
        Get new YouTube growth guides and creator tips.
      </p>

      <div className="mt-8 flex flex-col gap-4 md:flex-row">

        <input
          placeholder="Enter your email"
          className="flex-1 rounded-xl px-5 py-4 outline-none"
        />

        <button className="rounded-xl bg-white px-8 py-4 font-bold text-red-600 transition hover:scale-105">
          Subscribe
        </button>

      </div>

    </section>
  );
}