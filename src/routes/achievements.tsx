import { createFileRoute } from "@tanstack/react-router";
import { Reveal, PageHeader } from "@/components/reveal";
import { SOCIAL } from "@/lib/profile";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — Keerthanasri A M" },
      { name: "description", content: "Milestones across problem solving, programs, and shipped work." },
      { property: "og:title", content: "Achievements — Keerthanasri A M" },
      { property: "og:description", content: "Milestones across problem solving, programs, and shipped work." },
      { property: "og:url", content: "/achievements" },
    ],
    links: [{ rel: "canonical", href: "/achievements" }],
  }),
  component: Achievements,
});

const TIMELINE = [
  { y: "2025", t: "1000+ DSA problems solved", d: "Crossed 1000+ across SkillRack, 230+ on CodeChef, and 100+ on LeetCode." },
  { y: "2025", t: "Internship at BeDefine", d: "Built a full-stack MERN platform for the dance academy during my internship." },
  { y: "2025", t: "PayPal Career Academy", d: "Selected into an industry-grade engineering & product program." },
  { y: "2024", t: "Google Girl Hackathon — Round 2 Participant", d: "Participated in Google's hackathon and progressed up to Round 2." },
  { y: "2024", t: "GreatLearning AI Challenge & Creathon", d: "Participated in team-based, time-boxed innovation challenges." },
  { y: "2024", t: "HackerRank certifications", d: "Verified skills in Problem Solving, SQL, and C++." },
];

const PROFILES = [
  { k: "SkillRack", v: "1000+ Problems Solved", href: undefined },
  { k: "LeetCode", v: "100+ Problems Solved", href: SOCIAL.leetcode },
  { k: "CodeChef", v: "230+ Problems Solved", href: SOCIAL.codechef },
  { k: "HackerRank", v: "Problem Solving · SQL · C++", href: SOCIAL.hackerrank },
];

function Achievements() {
  return (
    <>
      <PageHeader
        eyebrow="Achievements"
        title="A wall of milestones, in chronological order."
        lede="Less about trophies, more about the consistent practice that shows up under deadlines."
      />

      <section className="container-editorial pb-20 md:pb-24">
        <ol className="relative border-l hairline pl-8 md:pl-12 space-y-12">
          {TIMELINE.map((s, i) => (
            <Reveal as="li" key={s.t} delay={i * 0.04} className="relative">
              <span className="absolute -left-[37px] md:-left-[49px] top-2 size-3 rounded-full bg-accent ring-4 ring-background" />
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.y}</div>
              <div className="font-display text-2xl md:text-3xl mt-1">{s.t}</div>
              <p className="text-muted-foreground mt-2 text-pretty max-w-2xl">{s.d}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="container-editorial pb-24 md:pb-32 border-t hairline pt-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.22em] text-accent mb-4 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-accent" /> Coding profiles
            </div>
            <h2 className="font-display text-3xl md:text-4xl leading-[1.05]">Where the practice lives.</h2>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--hairline)] border hairline rounded-2xl overflow-hidden">
          {PROFILES.map((p, i) => (
            <Reveal key={p.k} delay={i * 0.05} className="bg-background p-6 md:p-8 flex flex-col justify-between min-h-[180px] group">
              <div>
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">Platform</div>
                <div className="font-display text-2xl mt-2">{p.k}</div>
                <div className="text-sm text-muted-foreground mt-1">{p.v}</div>
              </div>
              {p.href ? (
                <a href={p.href} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm hover:text-accent">
                  View profile <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ) : (
                <div className="mt-6 text-xs text-muted-foreground font-mono">institutional account</div>
              )}
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}