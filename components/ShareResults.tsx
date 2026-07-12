"use client";

type ShareResultsProps = {
  show: boolean;
  channelName: string;
  yearlyRevenue: number;
};

export default function ShareResults({
  show,
  channelName,
  yearlyRevenue,
}: ShareResultsProps) {
  if (!show) return null;

  // Current website URL (localhost while developing)
  const website =
    typeof window !== "undefined"
      ? window.location.origin
      : "http://localhost:3000";

  const text = `I estimated ${channelName}'s YouTube revenue at approximately $${yearlyRevenue.toLocaleString(
    undefined,
    {
      maximumFractionDigits: 2,
    }
  )} using this YouTube Revenue Calculator.\n\n${website}`;

  function shareWhatsApp() {
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  }

  function shareTwitter() {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(website);
      alert("✅ Website link copied!");
    } catch {
      alert("❌ Unable to copy link.");
    }
  }

  return (
    <div className="mt-10 bg-white rounded-3xl shadow-xl p-8">
      <h2 className="text-3xl font-bold text-center">
        Share Results
      </h2>

      <p className="text-center text-gray-500 mt-3">
        Share this calculator with your friends.
      </p>

      <div className="flex flex-wrap justify-center gap-5 mt-8">

        <button
          onClick={shareWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl"
        >
          📱 WhatsApp
        </button>

        <button
          onClick={shareTwitter}
          className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl"
        >
          𝕏 Twitter
        </button>

        <button
          onClick={copyLink}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
        >
          🔗 Copy Link
        </button>

      </div>
    </div>
  );
}