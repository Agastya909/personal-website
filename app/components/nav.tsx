"use client";
import ThemeToggle from "./themeToggle";

const LINKS = [
  { href: "#work", name: "Work" },
  { href: "#projects", name: "Projects" },
  { href: "#skills", name: "Skills" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-40 -mx-6 mb-12 flex items-center justify-between border-b border-border bg-background/80 px-6 py-4 backdrop-blur-md tablet:-mx-10 tablet:px-10">
      <a
        href="#top"
        className="font-display text-lg font-semibold tracking-tight"
      >
        AR
      </a>
      <div className="flex items-center gap-1">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full px-2 py-1.5 text-xs font-medium text-muted transition-colors hover:text-foreground tablet:px-3 tablet:text-sm"
          >
            {link.name}
          </a>
        ))}
        <div className="ml-2">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
