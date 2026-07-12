type Props = {
  text: string;
};

export default function CopyButton({ text }: Props) {
  async function copy() {
    await navigator.clipboard.writeText(text);
    alert("Copied!");
  }

  return (
    <button
      onClick={copy}
      className="bg-red-600 hover:bg-red-700
      text-white rounded-xl px-6 py-3
      font-semibold transition"
    >
      📋 Copy
    </button>
  );
}