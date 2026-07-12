export default function SearchBox() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-3xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold text-gray-900">
          Search Any YouTube Channel
        </h2>

        <p className="text-gray-600 mt-4">
          Paste your YouTube channel URL below.
        </p>

        <input
          type="text"
          placeholder="https://www.youtube.com/@MrBeast"
          className="w-full mt-8 p-4 border-2 border-gray-300 rounded-xl text-lg text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
        />

        <button className="mt-6 bg-red-600 hover:bg-red-700 hover:scale-105 transition duration-300 text-white px-8 py-4 rounded-xl font-semibold">
         Search Channel
        </button>

        <p className="mt-6 text-gray-500">
          Example: https://www.youtube.com/@MrBeast
        </p>

      </div>
    </section>
  );
}