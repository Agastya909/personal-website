import Image from "next/image";
import SocialBtn from "./components/socialBtn";
import WorkHistoryCard from "./components/workHistoryCard";
import Nav from "./components/nav";
import Chip from "./components/chip";

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

const PROJECTS = [
  {
    title: "Personal Website",
    description:
      "This site — open source, written in Next.js and Tailwind. Feel free to fork it.",
    link: "https://github.com/Agastya909/personal-website",
    techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
    cover_img: "/portfolio.png",
  },
  {
    title: "Workout Tracker",
    description:
      "A simple workout app built with React Native to log and track workouts.",
    link: "https://github.com/Agastya909/workoutTracker",
    techStack: ["TypeScript", "React Native", "Redux", "Firebase"],
    cover_img: "/workoutracker.png",
  },
  {
    title: "Coffee Shop UI",
    description: "A UI-only app for a shop selling drinks and coffee.",
    link: "https://github.com/Agastya909/coffeeHouse",
    techStack: ["TypeScript", "React Native", "Redux"],
    cover_img: "/coffeeui.png",
  },
  {
    title: "Video Streaming over Web",
    description:
      "A web app for uploading and streaming video, using Express and MySQL with local storage.",
    link: "https://github.com/Agastya909/natflux-web",
    techStack: ["TypeScript", "Next.js", "Express", "MySQL"],
    cover_img: "/natfluxweb.png",
  },
  {
    title: "Short-format Video App",
    description: "A mobile app for viewing short-format streaming video.",
    link: "https://github.com/Agastya909/natflux-android",
    techStack: ["TypeScript", "React Native", "Redux"],
    cover_img: "/natfluxmobile.png",
  },
];

const SKILLS = [
  {
    group: "Languages",
    items: [
      { name: "Golang", src: "/golang.png" },
      { name: "TypeScript", src: "/typescript.png" },
      { name: "Python", src: "/python.png" },
    ],
  },
  {
    group: "Frameworks",
    items: [
      { name: "Express", src: "/express.png", invert: true },
      { name: "Django", src: "/django.png" },
    ],
  },
  {
    group: "Web & Mobile",
    items: [
      { name: "React Native", src: "/react-native.png" },
      { name: "Next.js", src: "/nextjs.png", invert: true },
      { name: "HTML", src: "/html.png" },
      { name: "Tailwind", src: "/tailwind-css.png" },
    ],
  },
  {
    group: "Databases",
    items: [
      { name: "Postgres", src: "/postgres.png" },
      { name: "MySQL", src: "/mysql.png" },
      { name: "Redis", src: "/redis.png" },
    ],
  },
  {
    group: "Cloud & Infra",
    items: [
      { name: "AWS", src: "/aws.png" },
      { name: "Firebase", src: "/firebase.png" },
      { name: "Docker", src: "/docker.png" },
    ],
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

function ProjectCard({
  title,
  description,
  link,
  tech_stack,
  cover_img,
}: {
  title: string;
  description: string;
  link: string;
  tech_stack: string[];
  cover_img: string;
}) {
  return (
    <a
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <div className="relative aspect-video overflow-hidden border-b border-border">
        <Image
          src={cover_img}
          alt={title}
          fill
          sizes="(min-width: 720px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="font-medium">{title}</p>
        <p className="flex-1 text-sm text-muted">{description}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {tech_stack.map((tech, index) => (
            <span
              key={index}
              className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
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
        <SectionHeading eyebrow="Projects" title="Things I've built" />
        <div className="grid grid-cols-1 gap-5 tablet:grid-cols-2">
          {PROJECTS.map((item, index) => (
            <ProjectCard
              key={index}
              title={item.title}
              description={item.description}
              link={item.link}
              tech_stack={item.techStack}
              cover_img={item.cover_img}
            />
          ))}
        </div>
      </section>

      <section id="skills" className="mt-24 scroll-mt-24">
        <SectionHeading eyebrow="Skills" title="Tools I reach for" />
        <div className="flex flex-col gap-6">
          {SKILLS.map((group) => (
            <div key={group.group}>
              <p className="mb-3 text-sm font-medium text-muted">
                {group.group}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Chip
                    key={item.name}
                    name={item.name}
                    src={item.src}
                    invert={item.invert}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-24 border-t border-border pt-8 text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} Agastya Rajawat.</p>
      </footer>
    </div>
  );
}
