export type MonthYear = { year: number; month: number };

const MONTH_ABBR = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function formatMonthYear({ year, month }: MonthYear): string {
  return `${MONTH_ABBR[month - 1]} '${String(year).slice(2)}`;
}

function totalMonthsBetween(start: MonthYear, end: MonthYear | null): number {
  const endResolved = end ?? {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  };
  const months =
    (endResolved.year - start.year) * 12 + (endResolved.month - start.month) + 1;
  return Math.max(months, 1);
}

export function formatDuration(start: MonthYear, end: MonthYear | null): string {
  const totalMonths = totalMonthsBetween(start, end);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (months > 0) parts.push(`${months} mo`);
  return parts.join(" ");
}

export function yearsOfExperience(start: MonthYear): number {
  const totalMonths = totalMonthsBetween(start, null);
  return Math.floor(totalMonths / 12);
}
