import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/leadership", label: "Leadership" },
  { to: "/achievements", label: "Achievements" },
  { to: "/resume", label: "Resume" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <>
      <ScrollProgress />
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-background/75 border-b hairline"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container-editorial flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-display text-lg tracking-tight">Keerthanasri<span className="text-accent">.</span></span>
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors relative"
                activeProps={{ className: "px-3 py-1.5 text-sm text-foreground relative" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 text-sm bg-foreground text-background px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              Get in touch
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden p-2 -mr-2"
              aria-label="Menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden border-t hairline bg-background">
            <div className="container-editorial py-4 flex flex-col">
              {NAV.concat([{ to: "/contact", label: "Contact" }] as never).map((i) => (
                <Link
                  key={i.to}
                  to={i.to}
                  className="py-3 text-base text-foreground border-b hairline last:border-0"
                >
                  {i.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none">
      <div className="h-full bg-accent" style={{ width: `${progress}%` }} />
    </div>
  );
}