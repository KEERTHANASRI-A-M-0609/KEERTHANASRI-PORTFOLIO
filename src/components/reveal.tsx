import { motion, type MotionProps } from "framer-motion";
import type { ReactNode, ElementType } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "h1" | "h2" | "p" | "span" | "li";
} & MotionProps;

export function Reveal({ children, delay = 0, y = 16, className, as = "div", ...rest }: RevealProps) {
  const Comp = (motion as unknown as Record<string, ElementType>)[as];
  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  );
}

export function PageHeader({ eyebrow, title, lede }: { eyebrow: string; title: string; lede?: string }) {
  return (
    <section className="container-editorial pt-20 pb-12 md:pt-32 md:pb-16">
      <Reveal>
        <div className="text-xs font-mono uppercase tracking-[0.22em] text-accent mb-6 flex items-center gap-3">
          <span className="inline-block w-8 h-px bg-accent" />
          {eyebrow}
        </div>
      </Reveal>
      <Reveal delay={0.05} as="h1" className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-balance max-w-5xl">
        {title}
      </Reveal>
      {lede && (
        <Reveal delay={0.1} as="p" className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty">
          {lede}
        </Reveal>
      )}
    </section>
  );
}