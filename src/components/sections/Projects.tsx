import { lazy, Suspense, useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS, type Project } from "@/lib/data";

const ProjectModal = lazy(() =>
  import("./ProjectModal").then((m) => ({ default: m.ProjectModal })),
);

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
              Featured Projects
            </p>
            <h2 className="font-display text-4xl font-bold md:text-5xl">Selected work</h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              className="group glass overflow-hidden rounded-3xl transition-transform hover:-translate-y-1.5"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.tagline}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/5 px-2.5 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <button
                    onClick={() => setActive(p)}
                    className="rounded-full bg-[image:var(--gradient-primary)] px-4 py-1.5 text-xs font-medium text-primary-foreground transition-[filter] hover:brightness-110"
                  >
                    View Details
                  </button>
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full glass px-4 py-1.5 text-xs hover:bg-white/10"
                    >
                      Live Demo
                    </a>
                  )}
                  {p.repoUrl && (
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-border px-4 py-1.5 text-xs hover:bg-white/5"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <Suspense fallback={null}>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </Suspense>
    </section>
  );
}
