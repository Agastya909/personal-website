export default function Btn({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      className="inline-block rounded-full border border-accent px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-background"
    >
      {text}
    </a>
  );
}
