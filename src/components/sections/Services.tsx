import { motion } from "framer-motion";
import type { ReactElement } from "react";
import { SERVICES } from "@/lib/data";

const ICONS: Record<string, ReactElement> = {
  code: <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />,
  layers: (
    <>
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14a9 3 0 0 0 18 0V5" />
      <path d="M3 12a9 3 0 0 0 18 0" />
    </>
  ),
  wrench: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-7 7 2 2 7-7a4 4 0 0 0 5.4-5.4l-3 3-2-2 3-3z" />,
  plug: (
    <>
      <path d="M9 2v6M15 2v6M5 10h14v4a7 7 0 0 1-14 0v-4zM12 21v-3" />
    </>
  ),
};

export function Services() {
  return (
    <section id="services" className="relative py-28 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">Services</p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">What I can build for you</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group glass rounded-2xl p-7 transition-shadow hover:shadow-[var(--shadow-glow)]"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {ICONS[s.icon]}
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
