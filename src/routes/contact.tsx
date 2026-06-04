import { createFileRoute } from "@tanstack/react-router";
import { Reveal, PageHeader } from "@/components/reveal";
import { Portrait } from "@/components/portrait";
import { SOCIAL } from "@/lib/profile";
import { useState } from "react";
import { Check, Copy, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Keerthanasri A M" },
      { name: "description", content: "Have a role, a team, or a problem worth solving? Let's talk." },
      { property: "og:title", content: "Contact — Keerthanasri A M" },
      { property: "og:description", content: "Have a role, a team, or a problem worth solving? Let's talk." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const LINKS = [
  { k: "LinkedIn", v: SOCIAL.linkedin },
  { k: "GitHub", v: SOCIAL.github },
  { k: "LeetCode", v: SOCIAL.leetcode },
  { k: "CodeChef", v: SOCIAL.codechef },
  { k: "HackerRank", v: SOCIAL.hackerrank },
  { k: "Resume", v: SOCIAL.resume },
];

function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SOCIAL.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {/* noop */}
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something worth remembering."
        lede="I'm open to full-time roles, internships, and meaningful collaborations across software, data, and AI."
      />

      <section className="container-editorial pb-24 md:pb-32 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-8">
          <Reveal>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border hairline bg-[var(--paper-elevated)] max-w-sm">
              <Portrait priority />
            </div>
          </Reveal>
          <Reveal>
            <div className="text-xs font-mono uppercase tracking-[0.22em] text-accent mb-2">Email</div>
            <a href={`mailto:${SOCIAL.email}`} className="font-display text-2xl md:text-3xl break-all underline underline-offset-[6px] decoration-foreground/20 hover:decoration-accent hover:text-accent transition-colors">
              {SOCIAL.email}
            </a>
            <div className="mt-5 flex items-center gap-3 flex-wrap">
              <a
                href={`mailto:${SOCIAL.email}`}
                className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 rounded-full text-sm hover:opacity-90 transition"
              >
                Email me
              </a>
              <button
                onClick={copy}
                className="inline-flex items-center gap-2 text-xs border hairline px-3 py-1.5 rounded-full hover:border-foreground/40 transition-colors"
              >
                {copied ? <><Check className="size-3.5" /> Copied</> : <><Copy className="size-3.5" /> Copy address</>}
              </button>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <div className="rounded-2xl border hairline bg-[var(--paper-elevated)] p-6 md:p-10">
              <div className="text-xs font-mono uppercase tracking-[0.22em] text-accent mb-6">Channels</div>
              <ul className="divide-y hairline">
                {LINKS.map((l) => (
                  <li key={l.k}>
                    <a
                      href={l.v}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between py-5 first:pt-0 last:pb-0 hover:text-accent transition-colors"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground w-24">{l.k}</span>
                        <span className="font-display text-xl md:text-2xl tracking-tight break-all">{shortLabel(l.v)}</span>
                      </span>
                      <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent shrink-0 ml-4" />
                    </a>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground mt-8">
                The fastest way to reach me is <a href={`mailto:${SOCIAL.email}`} className="underline underline-offset-4 hover:text-accent">{SOCIAL.email}</a>. I typically reply within a day.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function shortLabel(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}