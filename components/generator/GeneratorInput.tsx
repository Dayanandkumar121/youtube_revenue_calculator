type Props = {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

export default function GeneratorInput({
  label,
  value,
  placeholder,
  onChange,
}: Props) {
  return (
    <div>
      <label className="block mb-2 font-semibold text-gray-700">
        {label}
      </label>

      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border-2 border-gray-300 p-4
        focus:border-red-500 focus:ring-4 focus:ring-red-100
        outline-none transition"
      />
    </div>
  );
}