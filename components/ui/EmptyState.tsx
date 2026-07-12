type Props = {
  text: string;
};

export default function EmptyState({
  text,
}: Props) {
  return (
    <div className="rounded-2xl border-2 border-dashed border-gray-300 p-10 text-center text-gray-500">
      {text}
    </div>
  );
}