// src/components/experience/date.utils.ts
export const isCurrent = (end?: string) => !end;

export function formatMonth(iso: string) {
  const [y, m] = iso.split("-");
  const d = new Date(Number(y), Number(m) - 1, 1);
  return d.toLocaleString(undefined, { month: "short", year: "numeric" });
}

export const rangeLabel = (start: string, end?: string) =>
  `${formatMonth(start)} — ${end ? formatMonth(end) : "current"}`;
