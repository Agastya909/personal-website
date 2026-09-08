import Image from "next/image";
import SocialBtn from "./components/socialBtn";
import WorkHistoryCard from "./components/workHistoryCard";
import Nav from "./components/nav";
import ProjectShowcase from "./components/projectShowcase";
import Divider from "./components/divider";
import SkillsList from "./components/skillsList";

const TIMELINE_DATA = [
  {
    role: "Product Engineer",
    company: "Shurutech",
    start_date: "JUNE 2024",
    end_date: "PRESENT",
    link: "https://shurutech.com/",
    current: true,
    stack: [
      "Golang",
      "Kubernetes",
      "RabbitMQ",
      "Python",
      "Django",
      "Postgres",
      "AWS",
      "Airflow",
    ],
    work: [
      "Building a payments platform in Go on Kubernetes, using a microservice architecture designed for reliability and horizontal scale.",
      "Offloading long-running and heavy tasks from the main API onto RabbitMQ-backed workers to keep request latency low.",
      "Previously built a B2B credit-scoring product with Django and Airflow for use by financial institutions.",
      "Designed and ran data pipelines feeding that product using Python and Airflow.",
    ],
  },
  {
    role: "Software Engineer",
    company: "PickMyWork",
    start_date: "FEB 2023",
    end_date: "MAY 2024",
    link: "https://www.pickmywork.com/",
    stack: ["React Native", "ReactJS", "Node.js", "ExpressJS", "MySQL", "AWS"],
    work: [
      "Built push notifications from scratch using FCM.",
      "Upgraded the app's Node runtime from v14 to v18.",
      "Built reusable mobile components including a story viewer and a side navigation bar.",
      "Improved API performance with Redis caching and better DB schema design.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "PickMyWork",
    start_date: "JULY 2022",
    end_date: "OCT 2022",
    link: "https://www.pickmywork.com/",
    stack: ["Node.js", "ExpressJS", "MySQL", "Redis"],
    work: ["Worked on Redis-based API caching and performance optimization."],
  },
];

const PROJECT = {
  title: "Workout Tracker",
  tagline: "workout.agastya-rajawat.in",
  description:
    "A workout tracking app I built and actually use myself — build routines, log sessions in real time, and see progress over time. Open to the public with its own sign up.",
  features: [
    "Routine builder",
    "Live logger with pre-filled sets",
    "Backfill past workouts",
    "Per-exercise progress charts",
    "Consistency heatmap",
    "Global & per-routine streaks",
  ],
  link: "https://workout.agastya-rajawat.in",
  cover_img: "/workout-tracker-home.png",
};

const SKILLS = [
  {
    group: "Languages",
    items: ["Golang", "TypeScript", "Python"],
  },
  {
    group: "Frameworks",
    items: ["Express", "Django"],
  },
  {
    group: "Web & Mobile",
    items: ["React Native", "Next.js", "HTML", "Tailwind"],
  },
  {
    group: "Databases",
    items: ["Postgres", "MySQL", "Redis"],
  },
  {
    group: "Cloud & Infra",
    items: ["AWS", "Firebase", "Docker"],
  },
];

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="mb-1 text-xs font-medium uppercase tracking-widest text-accent">
        {eyebrow}
      </p>
      <h2 className="font-display text-2xl font-semibold tablet:text-3xl">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <div id="top" className="mx-auto max-w-3xl px-6 pb-24 tablet:px-10">
      <Nav />

      <section className="animate-fade-up">
        <p className="mb-3 text-sm font-medium text-muted">Hi, I&apos;m</p>
        <h1 className="font-display text-4xl font-semibold tracking-tight tablet:text-5xl">
          Agastya Rajawat
        </h1>
        <div className="mt-4 flex items-center gap-2 text-sm text-muted">
          <Image
            src="/location.png"
            alt=""
            width={16}
            height={16}
            className="dark:invert opacity-70"
          />
          Jaipur, India
        </div>
        <p className="mt-6 max-w-xl text-lg text-muted-strong">
          Backend, frontend, and mobile developer with 2+ years building
          products end to end.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <SocialBtn
            alt="GitHub"
            href="https://github.com/agastya909"
            src="/github.png"
            invert
          />
          <SocialBtn
            alt="LinkedIn"
            href="https://www.linkedin.com/in/agastya-rajawat/"
            src="/linkedin.png"
          />
          <SocialBtn
            alt="Email"
            href="mailto:agastyarajawat909@gmail.com"
            src="/email.png"
            invert
          />
        </div>
      </section>

      <section id="work" className="mt-24 scroll-mt-24">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />
        <div>
          {TIMELINE_DATA.map((data, index) => (
            <WorkHistoryCard key={index} {...data} />
          ))}
        </div>
      </section>

      <section id="projects" className="mt-24 scroll-mt-24">
        <SectionHeading eyebrow="Projects" title="Something I've shipped" />
        <Divider />
        <div className="mt-10">
          <ProjectShowcase {...PROJECT} />
        </div>
      </section>

      <section id="skills" className="mt-24 scroll-mt-24">
        <SectionHeading eyebrow="Skills" title="Tools I reach for" />
        <Divider />
        <div className="mt-2">
          <SkillsList groups={SKILLS} />
        </div>
      </section>

      <footer className="mt-24 border-t border-border pt-8 text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} Agastya Rajawat.</p>
      </footer>
    </div>
  );
}
