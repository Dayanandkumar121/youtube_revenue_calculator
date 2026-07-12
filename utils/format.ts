export function formatMoney(value: number): string {
  return value.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function formatNumber(value: number | string): string {
  const num = Number(value);

  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(2) + "B";
  }

  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(2) + "M";
  }

  if (num >= 1_000) {
    return (num / 1_000).toFixed(2) + "K";
  }

  return num.toString();
}