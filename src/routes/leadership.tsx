import { createFileRoute } from "@tanstack/react-router";
import { Reveal, PageHeader } from "@/components/reveal";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership — Keerthanasri A M" },
      { name: "description", content: "Programs, mentorship, hackathons, and the people I built alongside." },
      { property: "og:title", content: "Leadership — Keerthanasri A M" },
      { property: "og:description", content: "Programs, mentorship, hackathons, and the people I built alongside." },
      { property: "og:url", content: "/leadership" },
    ],
    links: [{ rel: "canonical", href: "/leadership" }],
  }),
  component: Leadership,
});

const ROLES = [
  {
    title: "Placement Coordinator",
    body: "Bridged students, faculty, and recruiters. Coordinated process, communicated clearly under pressure, and quietly made hundreds of small things go right.",
  },
  {
    title: "Student Mentor",
    body: "Helped juniors navigate DSA, projects, and interviews. The best part of leadership is watching someone else succeed because of work you did off-stage.",
  },
  {
    title: "Hackathon Lead",
    body: "Led teams through 24–48 hour sprints — scoping ruthlessly, dividing work cleanly, and shipping something demoable when sleep didn't help.",
  },
];

const PROGRAMS = [
  { t: "PayPal Career Academy", d: "Selected for an industry-grade program focused on engineering, product, and career craft." },
  { t: "Alstom Scholarship Recipient", d: "Recognised through Alstom's competitive scholarship program for engineering students." },
  { t: "Google Girl Hackathon — Round 2 Participant", d: "Participated in Google's hackathon and advanced through to Round 2." },
  { t: "GreatLearning AI Challenge", d: "Participated in a team-based AI/ML challenge." },
  { t: "Creathon", d: "Participated in a creative hackathon focused on cross-disciplinary teams." },
];

function Leadership() {
  return (
    <>
      <PageHeader
        eyebrow="Leadership"
        title="Quiet leadership. Loud outcomes."
        lede="I lead the way I write software — with clarity, ownership, and a bias for shipping."
      />
      <section className="container-editorial pb-20 md:pb-24 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="text-xs font-mono uppercase tracking-[0.22em] text-accent mb-6 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-accent" /> Roles
            </div>
          </Reveal>
          <h2 className="font-display text-3xl md:text-4xl leading-[1.05] mb-8 text-balance">
            The rooms I show up in — and the people I show up for.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-px bg-[var(--hairline)] border hairline rounded-2xl overflow-hidden">
          {ROLES.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.05} className="bg-background p-6 md:p-8">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                <div>
                  <div className="font-display text-2xl">{r.title}</div>
                  <p className="text-muted-foreground mt-2 text-pretty">{r.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-editorial pb-24 md:pb-32 border-t hairline pt-16">
        <div className="text-xs font-mono uppercase tracking-[0.22em] text-accent mb-6 flex items-center gap-3">
          <span className="inline-block w-8 h-px bg-accent" /> Programs & recognitions
        </div>
        <h2 className="font-display text-3xl md:text-4xl leading-[1.05] mb-10 max-w-3xl">
          Selected programs that shaped how I think about engineering and teams.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--hairline)] border hairline rounded-2xl overflow-hidden">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.04} className="bg-background p-6 md:p-8 min-h-[180px] flex flex-col">
              <div className="text-xs font-mono text-muted-foreground mb-2">0{i + 1}</div>
              <div className="font-display text-xl mb-2">{p.t}</div>
              <p className="text-sm text-muted-foreground text-pretty">{p.d}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}