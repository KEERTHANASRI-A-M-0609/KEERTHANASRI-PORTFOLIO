import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Portrait } from "@/components/portrait";
import { Reveal, PageHeader } from "@/components/reveal";
import { ArrowUpRight, Sprout } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Keerthanasri A M" },
      { name: "description", content: "The story, the mission, and what I'm building next." },
      { property: "og:title", content: "About — Keerthanasri A M" },
      { property: "og:description", content: "The story, the mission, and what I'm building next." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const JOURNEY = [
  { y: "Now", t: "B.Tech — AI & Data Science", d: "Pre-final year undergrad at Sri Eshwar College of Engineering, Coimbatore." },
  { y: "2025", t: "Internship — BeDefine", d: "Built a full-stack MERN platform for a dance academy as an intern." },
  { y: "2025", t: "Student Mentor", d: "Helping juniors with DSA, projects, and interview preparation." },
  { y: "2024", t: "Full-stack & MERN", d: "Got comfortable across React, Node, Express, and MongoDB through coursework and projects." },
  { y: "2023", t: "Algorithms at depth", d: "Crossed 1000+ DSA problems across SkillRack, LeetCode and CodeChef." },
  { y: "Start", t: "First lines of code", d: "Fell in love with the craft — and never looked back." },
];

const DRIVES = [
  { t: "Craft", d: "I obsess over the small details that compound into great software." },
  { t: "Curiosity", d: "Every project is an excuse to learn a new domain end-to-end." },
  { t: "People", d: "Engineering is a team sport. I optimize for trust and clarity." },
  { t: "Purpose", d: "I want the work I do to be useful — not just shipped." },
];

function About() {
  const [showHobbies, setShowHobbies] = useState(false);
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A disciplined engineer focused on building reliable software and data systems."
        lede="I am a pre-final year B.Tech student in Artificial Intelligence & Data Science at Sri Eshwar College of Engineering, Coimbatore. I apply engineering rigor to full-stack development, problem solving, and data-driven delivery."
      />

      <section className="container-editorial pb-24 md:pb-32 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <div className="sticky top-24">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border hairline bg-[var(--paper-elevated)]">
              <Portrait priority />
            </div>
            <div className="mt-4 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
              Coimbatore, India · Open to relocate
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 space-y-12 text-lg leading-relaxed text-foreground/90">
          <Reveal as="p" className="text-pretty">
            I grew up in a farming family — patient work, long seasons, and a quiet respect for things that are built well.
            I bring that mindset to software, with a focus on quality, clarity, and practical solutions.
          </Reveal>
          <Reveal as="p" delay={0.05} className="text-pretty">
            I am pursuing a B.Tech in Artificial Intelligence & Data Science at Sri Eshwar College of Engineering.
            I have delivered a full-stack MERN platform during my internship at BeDefine, solved 1000+ algorithmic problems,
            participated in national hackathons, and supported juniors as a Placement Coordinator and Student Mentor.
            Today, I am looking for opportunities where I can continue growing with strong engineering teams.
          </Reveal>

          <Reveal>
            <div className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground mb-6">My journey</div>
            <ol className="relative border-l hairline pl-8 space-y-10">
              {JOURNEY.map((s, i) => (
                <Reveal as="li" key={s.y} delay={i * 0.05} className="relative">
                  <span className="absolute -left-[37px] top-1.5 size-2.5 rounded-full bg-accent ring-4 ring-background" />
                  <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.y}</div>
                  <div className="font-display text-2xl mt-1">{s.t}</div>
                  <p className="text-base text-muted-foreground mt-2 text-pretty">{s.d}</p>
                </Reveal>
              ))}
            </ol>
          </Reveal>

          <div>
            <div className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground mb-6">What drives me</div>
            <div className="grid sm:grid-cols-2 gap-px bg-[var(--hairline)] border hairline rounded-2xl overflow-hidden">
              {DRIVES.map((d, i) => (
                <Reveal key={d.t} delay={i * 0.04} className="bg-background p-6">
                  <div className="font-display text-xl">{d.t}</div>
                  <p className="text-sm text-muted-foreground mt-2">{d.d}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <div className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground mb-4">Future vision</div>
            <p className="text-lg text-pretty">
              I want to grow into a strong product-minded engineer — building software that's reliable,
              thoughtful, and genuinely useful to the people who depend on it.
            </p>
          </Reveal>

          <div className="flex flex-wrap gap-3">
            <Link to="/projects" className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 rounded-full text-sm">
              See what I've built <ArrowUpRight className="size-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 border hairline px-5 py-3 rounded-full text-sm hover:border-foreground/40">
              Contact me <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <Reveal>
            <div className="mt-12 rounded-2xl border hairline bg-[var(--paper-elevated)] p-6 md:p-8">
              <div className="flex items-start justify-between gap-6 flex-wrap">
                <div className="max-w-xl">
                  <div className="text-xs font-mono uppercase tracking-[0.22em] text-accent mb-2">Off the keyboard</div>
                  <p className="text-base text-foreground/90 text-pretty">
                    There's a whole other side to me — one that grows things, bakes things, and quietly
                    keeps creating.
                  </p>
                </div>
                <button
                  onClick={() => setShowHobbies((v) => !v)}
                  className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 rounded-full text-sm hover:opacity-90 transition"
                >
                  <Sprout className="size-4" />
                  {showHobbies ? "Hide" : "See my interests"}
                </button>
              </div>

              {showHobbies && (
                <div className="mt-8 grid sm:grid-cols-2 gap-px bg-[var(--hairline)] border hairline rounded-2xl overflow-hidden">
                  {HOBBIES.map((h) => (
                    <div key={h.t} className="bg-background p-6">
                      <div className="font-display text-xl">{h.t}</div>
                      <p className="text-sm text-muted-foreground mt-2 text-pretty">{h.d}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

const HOBBIES = [
  {
    t: "Healthy baking",
    d: "I bake from scratch — never a copy-paste recipe. I experiment with fusion flours (millet, ragi, almond, jowar) and keep iterating, even when a bake fails. Each one teaches me something new.",
  },
  {
    t: "Cooking",
    d: "Cooking is my favourite way to slow down and think clearly. I love trying small variations and discovering quiet, unexpected flavour combinations.",
  },
  {
    t: "Gardening",
    d: "A few plants on the windowsill, a few in the soil. Gardening keeps me patient — growth happens on its own time, not mine.",
  },
  {
    t: "Farming roots",
    d: "Born and brought up in a farming background. It shaped my appreciation for steady work, honest craft, and showing up every single day.",
  },
];