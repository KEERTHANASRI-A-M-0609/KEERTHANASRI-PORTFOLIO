import { Link } from "@tanstack/react-router";
import { SOCIAL } from "@/lib/profile";

export function SiteFooter() {
  return (
    <footer className="border-t hairline mt-24">
      <div className="container-editorial py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5 space-y-4">
          <div className="font-display text-2xl tracking-tight">Keerthanasri A M</div>
          <p className="text-muted-foreground max-w-sm text-pretty">
            Building intelligent software products through engineering, data, and AI.
          </p>
          <a href={`mailto:${SOCIAL.email}`} className="inline-block text-sm underline underline-offset-4 hover:text-accent">
            {SOCIAL.email}
          </a>
        </div>
        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">Explore</div>
          <ul className="space-y-2 text-sm">
            {[
              ["/about","About"],["/projects","Projects"],["/experience","Experience"],
              ["/leadership","Leadership"],["/achievements","Achievements"],
              ["/resume","Resume"],["/contact","Contact"],
            ].map(([to,label]) => (
              <li key={to}><Link to={to} className="text-foreground/80 hover:text-foreground">{label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">Elsewhere</div>
          <ul className="space-y-2 text-sm">
            <li><a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">LinkedIn ↗</a></li>
            <li><a href={SOCIAL.github} target="_blank" rel="noreferrer" className="hover:text-accent">GitHub ↗</a></li>
            <li><a href={SOCIAL.leetcode} target="_blank" rel="noreferrer" className="hover:text-accent">LeetCode ↗</a></li>
            <li><a href={SOCIAL.codechef} target="_blank" rel="noreferrer" className="hover:text-accent">CodeChef ↗</a></li>
            <li><a href={SOCIAL.hackerrank} target="_blank" rel="noreferrer" className="hover:text-accent">HackerRank ↗</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t hairline">
        <div className="container-editorial py-6 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Keerthanasri A M. Crafted with care.</div>
          <div className="font-mono">Software · Data · AI</div>
        </div>
      </div>
    </footer>
  );
}