import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">Skills</p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">My technical toolkit</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: ci * 0.05 }}
              className="glass rounded-2xl p-6 transition-transform hover:-translate-y-1"
            >
              <h3 className="font-display text-lg font-semibold">{cat.category}</h3>
              <div className="mt-5 space-y-4">
                {cat.items.map((it, i) => (
                  <div key={it.name}>
                    <div className="mb-1.5 flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">{it.name}</span>
                      <span className="tabular-nums text-foreground">{it.level}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${it.level}%` }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1, delay: 0.2 + i * 0.08, ease: "easeOut" }}
                        className="h-full rounded-full bg-[image:var(--gradient-primary)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
