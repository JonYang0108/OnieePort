import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import type { Project } from "@/lib/data";

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[80] bg-background/80 backdrop-blur-md"
      />
      <motion.div
        key="modal"
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.96 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-x-4 top-[5vh] z-[90] mx-auto max-h-[90vh] max-w-3xl overflow-y-auto rounded-3xl glass shadow-[var(--shadow-elegant)]"
      >
        <div className="relative aspect-[16/8] overflow-hidden bg-surface">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full glass p-2 hover:bg-white/20"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-6 p-7 md:p-10">
          <div>
            <h3 className="font-display text-3xl font-bold">{project.title}</h3>
            <p className="mt-2 text-muted-foreground">{project.tagline}</p>
          </div>

          <Section title="Project Overview">{project.overview}</Section>
          <Section title="Problem">{project.problem}</Section>
          <Section title="Solution">{project.solution}</Section>

          <div>
            <h4 className="mb-2 text-xs uppercase tracking-widest text-primary">Key Features</h4>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {project.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-primary">›</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-2 text-xs uppercase tracking-widest text-primary">Tech Stack</h4>
            <dl className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-3">
              <div>
                <dt className="text-foreground">Frontend</dt>
                <dd>{project.stack.frontend}</dd>
              </div>
              <div>
                <dt className="text-foreground">Backend</dt>
                <dd>{project.stack.backend}</dd>
              </div>
              <div>
                <dt className="text-foreground">Database</dt>
                <dd>{project.stack.database}</dd>
              </div>
            </dl>
          </div>

          <Section title="Future Improvements">{project.future}</Section>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[image:var(--gradient-primary)] px-5 py-2 text-sm font-medium text-primary-foreground"
              >
                Live Demo
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full glass px-5 py-2 text-sm"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-2 text-xs uppercase tracking-widest text-primary">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{children}</p>
    </div>
  );
}
