export default function SkillsList({
  groups,
}: {
  groups: { group: string; items: string[] }[];
}) {
  return (
    <div className="flex flex-col divide-y divide-border">
      {groups.map((group) => (
        <div
          key={group.group}
          className="grid grid-cols-1 gap-2 py-5 tablet:grid-cols-[10rem_1fr] tablet:gap-6"
        >
          <p className="text-sm font-medium text-muted">{group.group}</p>
          <p className="text-base leading-relaxed text-muted-strong">
            {group.items.map((item, index) => (
              <span key={item}>
                <span className="transition-colors hover:text-foreground">
                  {item}
                </span>
                {index < group.items.length - 1 && (
                  <span className="text-muted"> · </span>
                )}
              </span>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}
