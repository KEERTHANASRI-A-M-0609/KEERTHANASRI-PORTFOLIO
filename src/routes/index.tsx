import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Portrait } from "@/components/portrait";
import { Reveal } from "@/components/reveal";
import { NAME, STATEMENT } from "@/lib/profile";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Keerthanasri A M — Software, Data & AI Engineer" },
      { name: "description", content: STATEMENT },
      { property: "og:title", content: "Keerthanasri A M — Software, Data & AI Engineer" },
      { property: "og:description", content: STATEMENT },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Keerthanasri A M",
        jobTitle: "Software, Data & AI Engineer",
        description: STATEMENT,
        sameAs: [
          "https://www.linkedin.com/in/a-m-keerthanasri",
          "https://github.com/KEERTHANASRI-A-M-0609",
        ],
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhyHire />
      <FeaturedWork />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="container-editorial pt-12 md:pt-20 pb-16 md:pb-24">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
        <div className="lg:col-span-7 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground flex items-center gap-3 mb-8"
          >
            <span className="inline-block size-1.5 rounded-full bg-accent animate-pulse" />
            Available for full-time roles · 2026
          </motion.div>

          <h1 className="font-display text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95] tracking-tight text-balance">
            <RevealLine delay={0.0}>{NAME}.</RevealLine>
            <RevealLine delay={0.12} className="text-muted-foreground">
              Building intelligent
            </RevealLine>
            <RevealLine delay={0.22}>
              products through <em className="not-italic text-accent">software</em>,
            </RevealLine>
            <RevealLine delay={0.32}>
              <span className="text-muted-foreground">data</span> & <em className="not-italic text-accent">AI</em>.
            </RevealLine>
          </h1>

          <Reveal delay={0.5} as="p" className="mt-10 text-lg text-muted-foreground max-w-xl text-pretty">
            Software, Product, Data & AI Engineer. I transform ideas into meaningful digital products
            by combining engineering discipline, data-driven thinking, and intelligent systems.
          </Reveal>

          <Reveal delay={0.6} className="mt-10 flex flex-wrap gap-3">
            <Link to="/projects" className="group inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 rounded-full text-sm hover:opacity-90 transition">
              Explore projects
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link to="/resume" className="inline-flex items-center gap-2 border hairline px-5 py-3 rounded-full text-sm hover:border-foreground/40 transition">
              View resume
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm text-muted-foreground hover:text-foreground transition">
              Let's connect <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent/15 via-transparent to-foreground/5 blur-2xl" />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border hairline bg-[var(--paper-elevated)] shadow-[0_30px_80px_-30px_oklch(0.165_0.012_60_/_0.25)]">
              <Portrait priority />
              <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5 rounded-2xl pointer-events-none" />
            </div>
            <div className="mt-4 flex items-center justify-end text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
              <span>Engineer · Builder · Learner</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function RevealLine({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
        className={`block ${className}`}
      >
        {children}
      </motion.span>
    </span>
  );
}

const STATS = [
  { k: "1000+", v: "Problems on SkillRack" },
  { k: "230+", v: "CodeChef Problems" },
  { k: "100+", v: "LeetCode Problems" },
  { k: "Full-Stack", v: "MERN · Python · AI" },
  { k: "Hackathons", v: "Google Girl · Creathon" },
  { k: "Leader", v: "Placement Coordinator" },
];

function TrustBar() {
  return (
    <section className="border-y hairline bg-[var(--paper-elevated)]">
      <div className="container-editorial py-10">
        <div className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground mb-6">By the numbers</div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-6">
          {STATS.map((s, i) => (
            <Reveal key={s.v} delay={i * 0.04}>
              <div className="font-display text-3xl md:text-4xl tracking-tight">{s.k}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const REASONS = [
  { t: "Product Thinking", d: "Ship outcomes, not features. I obsess over the why before the how." },
  { t: "Strong Problem Solving", d: "1000+ DSA problems across SkillRack, LeetCode, and CodeChef." },
  { t: "AI Application Development", d: "Practical ML, NLP and LLM systems wired into real products." },
  { t: "Full Stack Engineering", d: "MERN, Python, Flask. Comfortable across the entire surface area." },
  { t: "Leadership", d: "Placement Coordinator, hackathon lead, and mentor to peers." },
  { t: "Fast Learner", d: "I pick up stacks, domains, and tools at startup speed." },
  { t: "Collaboration", d: "I build with empathy across design, product, and engineering." },
  { t: "Communication", d: "Clear writing, calm demos, and useful documentation." },
];

function WhyHire() {
  return (
    <section className="container-editorial py-24 md:py-32">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <Reveal>
            <div className="text-xs font-mono uppercase tracking-[0.22em] text-accent mb-6 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-accent" />
              Why teams hire me
            </div>
          </Reveal>
          <Reveal delay={0.05} as="h2" className="font-display text-4xl md:text-5xl leading-[1.05] text-balance">
            The qualities that ship products — and the people who build them.
          </Reveal>
        </div>
        <div className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-[var(--hairline)] border hairline rounded-2xl overflow-hidden">
          {REASONS.map((r, i) => (
            <Reveal key={r.t} delay={i * 0.03} className="bg-background p-6 md:p-8 group">
              <div className="flex items-start gap-3">
                <span className="font-mono text-xs text-muted-foreground mt-1">0{i + 1}</span>
                <div>
                  <div className="font-display text-xl mb-2">{r.t}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{r.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const FEATURED = [
  { n: "01", t: "BeDefine — Dance Academy Platform", tag: "MERN · Internship", d: "Full-stack MERN platform built during my internship to manage students, attendance, and classes." },
  { n: "02", t: "Virtual Travel Guide", tag: "Python · Google Places", d: "Destination discovery, itinerary planning, and budget forecasting." },
  { n: "03", t: "Smart Quiz System", tag: "Python · Web", d: "An adaptive quiz platform with authentication, difficulty progression, and leaderboards." },
];

function FeaturedWork() {
  return (
    <section className="border-t hairline">
      <div className="container-editorial py-24 md:py-32">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.22em] text-accent mb-4 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-accent" /> Selected work
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">A small body of considered work.</h2>
          </div>
          <Link to="/projects" className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            All projects <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="divide-y hairline border-y hairline">
          {FEATURED.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.05}>
              <Link
                to="/projects"
                className="group grid grid-cols-12 gap-6 items-baseline py-8 md:py-10 px-2 hover:bg-[var(--paper-elevated)] transition-colors"
              >
                <div className="col-span-2 md:col-span-1 font-mono text-xs text-muted-foreground">{p.n}</div>
                <div className="col-span-10 md:col-span-7">
                  <div className="font-display text-2xl md:text-4xl tracking-tight">{p.t}</div>
                </div>
                <div className="hidden md:block col-span-3 text-sm text-muted-foreground">{p.tag}</div>
                <div className="col-span-12 md:col-span-1 flex md:justify-end">
                  <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="container-editorial py-24 md:py-32">
      <div className="rounded-3xl border hairline bg-[var(--paper-elevated)] p-10 md:p-16 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-8">
          <Reveal as="h2" className="font-display text-4xl md:text-5xl leading-[1.05] text-balance">
            Have a role, a team, or a problem worth solving?
          </Reveal>
          <Reveal delay={0.05} as="p" className="mt-5 text-muted-foreground max-w-xl">
            I'm looking for engineering opportunities where craft, product thinking, and AI come together.
          </Reveal>
        </div>
        <div className="md:col-span-4 flex md:justify-end">
          <Link to="/contact" className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-4 rounded-full text-sm">
            Start a conversation <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
