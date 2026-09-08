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
    <div className="relative border-l border-border pb-10 pl-8 last:pb-0">
      <span
        className={`absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full border-2 border-background ${
          current ? "bg-accent" : "bg-muted"
        }`}
      />
      <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted">
        {start_date} — {end_date}
      </p>
      <div className="flex flex-wrap items-baseline gap-x-2">
        <p className="text-lg font-semibold">{role}</p>
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
      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map((item, index) => (
          <span
            key={index}
            className="rounded-full border border-border px-2.5 py-1 text-xs font-medium text-muted-strong"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
