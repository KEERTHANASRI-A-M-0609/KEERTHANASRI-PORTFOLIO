import { createFileRoute } from "@tanstack/react-router";
import { Reveal, PageHeader } from "@/components/reveal";
import { ArrowUpRight } from "lucide-react";
import { SOCIAL } from "@/lib/profile";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Keerthanasri A M" },
      { name: "description", content: "Internship experience, responsibilities, and shipped impact." },
      { property: "og:title", content: "Experience — Keerthanasri A M" },
      { property: "og:description", content: "Internship experience, responsibilities, and shipped impact." },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: Experience,
});

const INTERNSHIPS = [
  {
    role: "MERN Stack Intern",
    org: "BeDefine — Dance Academy",
    period: "2025",
    note: "Internship facilitated through Sri Eshwar College of Engineering",
    summary: "Built a full-stack MERN platform for a dance academy as a college-sponsored intern — owning the frontend, backend, and deployment end-to-end.",
    responsibilities: [
      "Designed data models for students, classes, and attendance",
      "Built the React frontend and the Node + Express REST API",
      "Integrated MongoDB for persistence and deployed the app on Netlify",
    ],
    challenges: [
      "Owning the full stack end-to-end as a solo intern",
      "Translating the academy's day-to-day workflow into clean software",
    ],
    solutions: [
      "Kept the data model simple and the API surface small and consistent",
      "Iterated on UI flows with feedback from the academy's real operations",
    ],
    tools: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "Git", "Netlify"],
    deployment: "Deployed on Netlify with environment-scoped configuration.",
    impact: "Shipped a working full-stack platform that consolidated students, classes, and attendance into one place.",
    link: "https://bedefine-dance-academy.netlify.app/",
  },
];

const ROLES = [
  {
    role: "Student Mentor",
    org: "Sri Eshwar College of Engineering",
    period: "2024 – Present",
    summary: "Mentor juniors on soft skills, communication, and confidence — running structured activities, peer sessions, and interview practice.",
    responsibilities: [
      "Designed and led soft-skill activities — group discussions, presentations, and impromptu speaking drills",
      "Coached peers on interview communication, body language, and clarity of thought",
      "Held regular check-ins to track growth and personalize practice plans",
    ],
    challenges: [
      "Meeting students at very different skill and confidence levels",
      "Making mentorship sustainable alongside coursework and projects",
    ],
    solutions: [
      "Built small, repeatable activity templates that scaled to groups",
      "Shared notes and resources so guidance compounded beyond 1:1 sessions",
    ],
    tools: ["Soft Skills", "Communication", "Group Activities", "Interview Prep"],
    deployment: "—",
    impact: "Helped juniors grow in confidence, communication, and interview readiness.",
  },
];

type Role = (typeof ROLES)[number] & { note?: string; link?: string };

function Experience() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="An internship, a mentorship — and a habit of growing."
        lede="A snapshot of the work that has shaped my engineering practice so far — always building, always learning."
      />

      <SectionHeading
        eyebrow="Internship"
        title="Industry work — shipped, deployed, owned."
      />
      <RoleList roles={INTERNSHIPS as Role[]} />

      <SectionHeading
        eyebrow="Roles on campus"
        title="Mentoring juniors through soft-skill activities."
      />
      <RoleList roles={ROLES as Role[]} />

      <section className="container-editorial pb-24 md:pb-32">
        <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          See more on LinkedIn <ArrowUpRight className="size-4" />
        </a>
      </section>
    </>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <section className="container-editorial pt-12 md:pt-16 pb-6">
      <Reveal>
        <div className="text-xs font-mono uppercase tracking-[0.22em] text-accent mb-4 flex items-center gap-3">
          <span className="inline-block w-8 h-px bg-accent" /> {eyebrow}
        </div>
      </Reveal>
      <Reveal delay={0.05} as="h2" className="font-display text-3xl md:text-4xl leading-[1.05] max-w-3xl text-balance">
        {title}
      </Reveal>
    </section>
  );
}

function RoleList({ roles }: { roles: Role[] }) {
  return (
    <section className="container-editorial pb-8">
      <ol className="relative border-l hairline pl-8 md:pl-12 space-y-16">
        {roles.map((r, i) => (
          <Reveal as="li" key={r.role} delay={i * 0.05} className="relative">
            <span className="absolute -left-[37px] md:-left-[49px] top-2 size-3 rounded-full bg-accent ring-4 ring-background" />
            <div className="flex flex-wrap items-baseline gap-4 mb-4">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{r.period}</div>
              <h3 className="font-display text-3xl md:text-4xl">{r.role}</h3>
            </div>
            <div className="text-muted-foreground mb-2">{r.org}</div>
            {r.note && (
              <div className="text-xs font-mono uppercase tracking-[0.18em] text-accent mb-6">{r.note}</div>
            )}
            <p className="text-lg text-pretty max-w-3xl mb-6">{r.summary}</p>
            {r.link && (
              <a href={r.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent mb-10">
                Visit live deployment <ArrowUpRight className="size-4" />
              </a>
            )}

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 mt-4">
              <Col title="Responsibilities" items={r.responsibilities} />
              <Col title="Challenges" items={r.challenges} />
              <Col title="Solutions" items={r.solutions} />
              <div>
                <Label>Tools</Label>
                <div className="mt-3 flex flex-wrap gap-2">
                  {r.tools.map((t) => (
                    <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-full border hairline bg-[var(--paper-elevated)]">{t}</span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2 grid md:grid-cols-2 gap-x-12 gap-y-10">
                <div>
                  <Label>Deployment</Label>
                  <p className="mt-3 text-foreground/90 text-pretty">{r.deployment}</p>
                </div>
                <div>
                  <Label>Impact</Label>
                  <p className="mt-3 text-foreground/90 text-pretty">{r.impact}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <div className="text-xs font-mono uppercase tracking-[0.22em] text-accent">{children}</div>;
}
function Col({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <Label>{title}</Label>
      <ul className="mt-3 space-y-2 text-foreground/90">
        {items.map((i, idx) => (
          <li key={i} className="flex gap-3"><span className="font-mono text-xs text-muted-foreground mt-1.5">0{idx + 1}</span><span>{i}</span></li>
        ))}
      </ul>
    </div>
  );
}