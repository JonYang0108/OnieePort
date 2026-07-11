import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SOCIALS, CONTACT } from "@/lib/data";

export function Footer() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative border-t border-border bg-surface/40 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3">
        <div>
          <a href="#hero" className="font-display text-xl font-bold tracking-tight">
            <span className="gradient-text">Jonie</span>
            <span>.dev</span>
          </a>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Student Full Stack Web Developer building modern, responsive web experiences.
          </p>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">
            Quick Links
          </p>
          <ul className="grid grid-cols-2 gap-y-1.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-muted-foreground hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">
            Get in touch
          </p>
          <p className="text-sm text-muted-foreground">{CONTACT.email}</p>
          <p className="text-sm text-muted-foreground">{CONTACT.location}</p>
          <div className="mt-3 flex gap-3 text-sm">
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href={SOCIALS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl items-center justify-between border-t border-border px-6 pt-6 text-xs text-muted-foreground">
        <p>© 2026 ITJVQ — All Rights Reserved.</p>
        <p>Built with React, TypeScript & Tailwind</p>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.a
            href="#hero"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </motion.a>
        )}
      </AnimatePresence>
    </footer>
  );
}
