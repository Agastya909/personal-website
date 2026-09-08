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
    <div className="overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="relative aspect-video border-b border-border bg-background">
        <Image
          src={cover_img}
          alt={`${title} preview`}
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover object-top"
        />
      </div>
      <div className="p-6 tablet:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span className="flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Live
          </span>
        </div>
        <p className="mt-1 text-sm text-muted">{tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted-strong">
          {description}
        </p>
        <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2 tablet:grid-cols-2">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm text-muted-strong"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-0.5 h-4 w-4 shrink-0 text-accent"
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
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Visit live site
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M7 17 17 7M7 7h10v10" />
          </svg>
        </a>
      </div>
    </div>
  );
}
