import Image from "next/image";

export default function Chip({
  src,
  name,
  invert,
}: {
  src: string;
  name: string;
  invert?: boolean;
}) {
  return (
    <div className="flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3 py-2 transition-colors hover:border-accent">
      <Image
        src={src}
        alt={name}
        width={18}
        height={18}
        className={invert ? "dark:invert" : ""}
      />
      <p className="text-sm text-muted-strong">{name}</p>
    </div>
  );
}
