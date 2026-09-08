export default function SkillsStacked({
  groups,
}: {
  groups: { group: string; items: string[] }[];
}) {
  return (
    <div className="flex flex-col divide-y divide-border">
      {groups.map((group) => (
        <div key={group.group} className="py-5 tablet:py-6">
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
            {group.group}
          </p>
          <p className="mt-2 font-mono text-base leading-relaxed text-muted-strong tablet:text-lg">
            {group.items.join(", ")}
          </p>
        </div>
      ))}
    </div>
  );
}
