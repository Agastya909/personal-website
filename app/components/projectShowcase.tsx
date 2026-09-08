import Image from "next/image";

export default function ProjectShowcase({
  title,
  tagline,
  description,
  features,
  link,
  cover_img,
}: {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  link: string;
  cover_img: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <span className="flex items-center gap-1.5 text-xs font-medium text-accent">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          Live
        </span>
      </div>
      <div className="mt-8 grid grid-cols-1 items-center gap-10 tablet:grid-cols-5 tablet:gap-8">
        <div className="tablet:order-2 tablet:col-span-3">
          <div className="overflow-hidden rounded-lg border border-border shadow-2xl shadow-black/10 tablet:-rotate-1">
            <div className="flex items-center gap-1.5 border-b border-border bg-surface px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-muted/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted/40" />
              <span className="ml-2 truncate rounded-full bg-background px-3 py-0.5 text-xs text-muted">
                {tagline}
              </span>
            </div>
            <div className="relative aspect-[16/10] bg-[#0b0b0a]">
              <Image
                src={cover_img}
                alt={`${title} preview`}
                fill
                sizes="(min-width: 720px) 60vw, 100vw"
                className="object-contain object-top"
              />
            </div>
          </div>
        </div>

        <div className="tablet:order-1 tablet:col-span-2">
          <p className="text-sm leading-relaxed text-muted-strong">
            {description}
          </p>
          <ul className="mt-5 flex flex-col gap-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-xs text-muted"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3 w-3 shrink-0 text-accent"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
          >
            Visit {tagline}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
