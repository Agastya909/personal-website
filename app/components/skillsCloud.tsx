const SIZE_BY_WEIGHT: Record<number, string> = {
  5: "text-4xl tablet:text-5xl font-semibold",
  4: "text-3xl tablet:text-4xl font-semibold",
  3: "text-2xl tablet:text-3xl font-medium",
  2: "text-xl tablet:text-2xl font-medium text-muted-strong",
  1: "text-base tablet:text-lg font-normal text-muted",
};

export default function SkillsCloud({
  skills,
}: {
  skills: { name: string; weight: number }[];
}) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-3 font-display leading-none">
      {skills.map((skill) => (
        <span
          key={skill.name}
          className={`cursor-default transition-colors hover:text-accent ${
            SIZE_BY_WEIGHT[skill.weight] ?? SIZE_BY_WEIGHT[3]
          }`}
        >
          {skill.name}
        </span>
      ))}
    </div>
  );
}
