export default function WorkHistoryCard({
  end_date,
  role,
  company,
  start_date,
  link,
  stack,
  work,
  current,
}: {
  start_date: string;
  end_date: string;
  role: string;
  company: string;
  link: string;
  stack: string[];
  work: string[];
  current?: boolean;
}) {
  return (
    <div className="border-t border-border py-6 first:border-t-0 first:pt-0 tablet:py-8">
      <div className="flex items-center gap-2">
        <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
          {start_date} — {end_date}
        </p>
        {current && (
          <span className="flex items-center gap-1.5 text-xs font-medium text-accent">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Current
          </span>
        )}
      </div>
      <div className="mt-2 flex flex-wrap items-baseline gap-x-2">
        <h3 className="font-display text-xl font-semibold tablet:text-2xl">
          {role}
        </h3>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-muted transition-colors hover:text-accent"
        >
          @ {company}
        </a>
      </div>
      <ul className="mt-4 space-y-1.5">
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
      <p className="mt-4 font-mono text-sm text-muted">{stack.join(", ")}</p>
    </div>
  );
}
