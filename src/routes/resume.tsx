import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, PageHeader } from "@/components/reveal";
import { SOCIAL } from "@/lib/profile";
import { ArrowUpRight, Download, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Keerthanasri A M" },
      { name: "description", content: "Career highlights, project highlights, and leadership at a glance." },
      { property: "og:title", content: "Resume — Keerthanasri A M" },
      { property: "og:description", content: "Career highlights, project highlights, and leadership at a glance." },
      { property: "og:url", content: "/resume" },
    ],
    links: [{ rel: "canonical", href: "/resume" }],
  }),
  component: Resume,
});

const CAREER = [
  "Pre-final year B.Tech in Artificial Intelligence & Data Science at Sri Eshwar College of Engineering, Coimbatore.",
  "Software Engineering Intern at BeDefine, where I delivered a full-stack MERN platform for academy operations.",
  "Solved 1000+ algorithmic problems across SkillRack, LeetCode, and CodeChef.",
  "Selected for the PayPal Career Academy program.",
];
const PROJECTS = [
  "BeDefine — full-stack MERN dance academy platform delivered during internship.",
  "Virtual Travel Guide — Python, Google Places API, and JavaScript.",
  "Smart Quiz System — Python, Tkinter, and web-based learning experience.",
];
const LEAD = [
  "Placement Coordinator — coordinated process, communication, and people.",
  "Student Mentor — DSA, projects, and interview prep for juniors.",
  "Hackathon Participant — Google Girl Hackathon (Round 2), Creathon, GreatLearning AI Challenge.",
];

function Resume() {
  return (
    <>
      <PageHeader
        eyebrow="Resume"
        title="A concise professional summary for hiring teams and recruiters."
        lede="Review my experience, project highlights, and leadership contributions in one place."
      />

      <section className="container-editorial pb-24 md:pb-32 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-6">
          <Reveal>
            <div className="rounded-2xl border hairline overflow-hidden bg-[var(--paper-elevated)] aspect-[4/5] relative">
              <iframe
                src={`https://drive.google.com/embeddedfolderview?id=1SX215UQ9ft1Xf-_hrOxuUj6BD5Kwmj19#list`}
                title="Resume preview"
                className="w-full h-full"
              />
            </div>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            <a href={SOCIAL.resume} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 rounded-full text-sm">
              <Download className="size-4" /> Download resume
            </a>
            <a href={SOCIAL.resume} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border hairline px-5 py-3 rounded-full text-sm hover:border-foreground/40">
              <ExternalLink className="size-4" /> Open in Drive
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm text-muted-foreground hover:text-foreground">
              Or get in touch <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>

        <aside className="lg:col-span-5 space-y-10">
          <Block title="Career highlights" items={CAREER} />
          <Block title="Project highlights" items={PROJECTS} />
          <Block title="Leadership highlights" items={LEAD} />
        </aside>
      </section>
    </>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <Reveal>
      <div className="text-xs font-mono uppercase tracking-[0.22em] text-accent mb-4">{title}</div>
      <ul className="space-y-3">
        {items.map((i, idx) => (
          <li key={i} className="flex gap-3 text-foreground/90">
            <span className="font-mono text-xs text-muted-foreground mt-1.5">0{idx + 1}</span>
            <span className="text-pretty">{i}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}