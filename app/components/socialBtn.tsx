"use client";
import Image from "next/image";
export default function SocialBtn({
  href,
  src,
  alt,
  invert = false,
}: {
  href: string;
  src: string;
  alt: string;
  invert?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
    >
      <Image
        src={src}
        alt={alt}
        width={16}
        height={16}
        className={invert ? "dark:invert" : ""}
      />
      {alt}
    </a>
  );
}
