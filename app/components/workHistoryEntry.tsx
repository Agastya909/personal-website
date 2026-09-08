import { formatDuration, formatMonthYear, type MonthYear } from "../lib/dates";

export default function WorkHistoryEntry({
  role,
  company,
  start,
  end,
  link,
  stack,
  work,
  current,
}: {
  start: MonthYear;
  end: MonthYear | null;
  role: string;
  company: string;
  link: string;
  stack: string[];
  work: string[];
  current?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 gap-2 border-t border-border py-6 first:border-t-0 first:pt-0 tablet:grid-cols-[8rem_1fr] tablet:gap-8 tablet:py-8">
      <div className="text-left tablet:text-right">
        <p className="text-sm text-muted">
          {formatMonthYear(start)} — {current ? "Present" : formatMonthYear(end!)}
        </p>
        <p className="mt-0.5 text-xs text-muted/70">
          {formatDuration(start, end)}
        </p>
        {current && (
          <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-accent tablet:justify-end">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Current
          </p>
        )}
      </div>
      <div>
        <div className="flex flex-wrap items-baseline gap-x-2">
          <h3 className="text-lg font-semibold">{role}</h3>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            @ {company}
          </a>
        </div>
        <ul className="mt-3 space-y-1.5">
          {work.map((item, index) => (
            <li
              key={index}
              className="flex gap-2 text-sm leading-relaxed text-muted-strong"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-muted">{stack.join(" · ")}</p>
      </div>
    </div>
  );
}
