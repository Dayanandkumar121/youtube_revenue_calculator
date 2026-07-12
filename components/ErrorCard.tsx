type ErrorCardProps = {
  message: string;
  onRetry: () => void;
};

export default function ErrorCard({
  message,
  onRetry,
}: ErrorCardProps) {
  return (
    <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-6 shadow-sm">

      <div className="flex items-center gap-4">

        <div className="text-5xl">
          ⚠️
        </div>

        <div>

          <h3 className="text-xl font-bold text-red-700">
            Something went wrong
          </h3>

          <p className="text-gray-600 mt-1">
            {message}
          </p>

        </div>

      </div>

      <button
        onClick={onRetry}
        className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition"
      >
        🔄 Try Again
      </button>

    </div>
  );
}