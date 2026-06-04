import { createFileRoute } from "@tanstack/react-router";
import { Reveal, PageHeader } from "@/components/reveal";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Keerthanasri A M" },
      { name: "description", content: "Case studies across AI, full-stack, and product engineering." },
      { property: "og:title", content: "Projects — Keerthanasri A M" },
      { property: "og:description", content: "Case studies across AI, full-stack, and product engineering." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

type CaseStudy = {
  n: string;
  name: string;
  tagline: string;
  challenge: string;
  approach: string;
  architecture: string;
  tech: string[];
  features: string[];
  lessons: string;
  future: string;
  link?: string;
};

const STUDIES: CaseStudy[] = [
  {
    n: "01",
    name: "BeDefine — Dance Academy Platform",
    tagline: "A full-stack MERN platform I built during my internship to run a dance academy end-to-end.",
    challenge: "The academy needed a single source of truth for students, attendance, and day-to-day operations.",
    approach: "Design a clean data model, ship a fast MERN app, and deploy it to a stable hosting target with low operational overhead.",
    architecture: "React frontend on Netlify, Node + Express API, MongoDB for persistence, REST endpoints between them.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    features: ["Student records & profiles", "Attendance tracking", "Class & operations management", "Deployed full-stack build on Netlify"],
    lessons: "Owning the full stack end-to-end made the trade-offs between data modeling, API design, and UX much more concrete.",
    future: "Add scheduling, payments, and a parent-facing portal with progress reports.",
    link: "https://bedefine-dance-academy.netlify.app/",
  },
  {
    n: "02",
    name: "Virtual Travel Guide",
    tagline: "Discovery, planning, and budgeting in one quiet, considered interface.",
    challenge: "Travel planning is fragmented across maps, blogs, and spreadsheets. People want a calm, single surface.",
    approach: "Combine Google Places data with personalized recommendations, itinerary generation, and a budgeting model.",
    architecture: "Python backend integrates with Google Places API. Frontend renders discovery feeds, day-by-day itineraries, and a forecasted budget breakdown.",
    tech: ["Python", "Google Places API", "JavaScript", "HTML", "CSS"],
    features: [
      "Destination discovery & ranking",
      "Day-wise itinerary builder",
      "Budget forecasting with category split",
      "Personalized travel preferences",
    ],
    lessons: "Editorial copy and calm UI matter more than feature count for trust.",
    future: "Move to a TypeScript backend, add collaborative trip planning, and integrate flights & stays.",
  },
  {
    n: "03",
    name: "Smart Quiz System",
    tagline: "An adaptive quiz platform that respects the learner.",
    challenge: "Static quizzes don't reflect learner skill. The system needed to adapt difficulty without feeling unfair.",
    approach: "Authentication, progressive difficulty, scoped hints, timers, review loops, and a leaderboard — all wrapped in a clear UX.",
    architecture: "Python core with both Tkinter desktop and HTML/CSS/JS web surfaces, sharing question banks and scoring logic.",
    tech: ["Python", "Tkinter", "HTML", "CSS", "JavaScript"],
    features: ["Authentication & profiles", "Adaptive difficulty progression", "Hints & timers", "Review & leaderboards"],
    lessons: "Subtle feedback loops change behavior more than gamification ever does.",
    future: "Move to a web-native stack with spaced-repetition scheduling and analytics for educators.",
  },
];

function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Selected Work"
        title="Case studies — not just screenshots."
        lede="A handful of projects where I practiced building software end-to-end — from data model to deployed UI."
      />
      <section className="container-editorial pb-24 md:pb-32 space-y-24 md:space-y-32">
        {STUDIES.map((s, i) => (
          <Reveal key={s.n} className="grid lg:grid-cols-12 gap-10 border-t hairline pt-12">
            <div className="lg:col-span-4 lg:sticky lg:top-24 self-start space-y-4">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Case study · {s.n}
              </div>
              <h2 className="font-display text-3xl md:text-4xl leading-[1.05] text-balance">{s.name}</h2>
              <p className="text-muted-foreground text-pretty">{s.tagline}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {s.tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-full border hairline bg-[var(--paper-elevated)]">{t}</span>
                ))}
              </div>
              {s.link && (
                <a href={s.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent">
                  Visit live deployment <ArrowUpRight className="size-4" />
                </a>
              )}
            </div>
            <div className="lg:col-span-8 space-y-10">
              <Block label="Challenge">{s.challenge}</Block>
              <Block label="Approach">{s.approach}</Block>
              <Block label="Architecture">{s.architecture}</Block>
              <div>
                <Label>Key Features</Label>
                <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                  {s.features.map((f, j) => (
                    <li key={f} className="flex gap-3 text-sm">
                      <span className="font-mono text-xs text-muted-foreground mt-1">0{j + 1}</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <Block label="Lessons learned">{s.lessons}</Block>
                <Block label="What's next">{s.future}</Block>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <div className="text-xs font-mono uppercase tracking-[0.22em] text-accent">{children}</div>;
}
function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <Label>{label}</Label>
      <p className="mt-3 text-base md:text-lg leading-relaxed text-foreground/90 text-pretty">{children}</p>
    </div>
  );
}