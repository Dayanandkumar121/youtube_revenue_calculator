type SearchFormProps = {
  channelUrl: string;
  setChannelUrl: (value: string) => void;
  handleSearch: () => void;
};

export default function SearchForm({
  channelUrl,
  setChannelUrl,
  handleSearch,
}: SearchFormProps) {
  return (
    <div className="mt-10">

      <label className="block text-gray-900 font-semibold mb-2">
        YouTube Channel URL
      </label>

      <input
        type="text"
        placeholder="Paste YouTube Channel URL"
        value={channelUrl}
        onChange={(event) => setChannelUrl(event.target.value)}
        className="w-full p-4 border-2 border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-red-500"
      />

      <p className="mt-2 text-sm text-gray-500">
        Example: https://www.youtube.com/@MrBeast
      </p>

      <button
        onClick={handleSearch}
        className="w-full mt-8 bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-bold transition"
      >
        Search Channel
      </button>

    </div>
  );
}