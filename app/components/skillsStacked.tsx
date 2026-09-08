export default function SkillsStacked({
  groups,
}: {
  groups: { group: string; items: string[] }[];
}) {
  return (
    <div className="flex flex-col divide-y divide-border">
      {groups.map((group) => (
        <div key={group.group} className="py-6 tablet:py-7">
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
            {group.group}
          </p>
          <p className="mt-2 font-display text-2xl font-medium leading-snug tablet:text-3xl">
            {group.items.join(", ")}
          </p>
        </div>
      ))}
    </div>
  );
}
