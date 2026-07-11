import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 bg-surface/40">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">Experience</p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">Where I've worked</h2>
        </div>

        <div className="relative pl-8">
          <div className="absolute left-2.5 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />
          {EXPERIENCE.map((e, i) => (
            <motion.div
              key={e.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative mb-8 last:mb-0"
            >
              <div className="absolute -left-[26px] top-2 h-3 w-3 rounded-full bg-[image:var(--gradient-primary)] shadow-[var(--shadow-glow)]" />
              <div className="glass rounded-2xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold">{e.role}</h3>
                  <span className="text-xs text-muted-foreground">{e.duration}</span>
                </div>
                <p className="text-sm text-primary">{e.company}</p>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  {e.responsibilities.map((r) => (
                    <li key={r} className="flex gap-2">
                      <span className="text-primary">›</span>
                      {r}
                    </li>
                  ))}
                </ul>
                {e.achievements.length > 0 && (
                  <div className="mt-3 border-t border-border pt-3">
                    {e.achievements.map((a) => (
                      <p key={a} className="text-xs text-muted-foreground">
                        <span className="text-primary">★</span> {a}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
