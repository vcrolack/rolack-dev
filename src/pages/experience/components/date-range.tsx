// src/components/experience/DateRange.tsx
import { rangeLabel } from "../utils/date";
export function DateRange({ start, end }: { start: string; end?: string }) {
  return <time className="xp__dates">{rangeLabel(start, end)}</time>;
}
