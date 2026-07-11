import { motion } from "framer-motion";
import { PROCESS } from "@/lib/data";

export function Process() {
  return (
    <section id="process" className="relative py-28 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">Process</p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">How I work</h2>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {PROCESS.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group glass rounded-2xl p-6 transition-colors hover:border-primary"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="font-display text-2xl font-bold gradient-text">
                  {String(p.step).padStart(2, "0")}
                </span>
                <span className="h-1 w-1 rounded-full bg-primary transition-all group-hover:w-10" />
              </div>
              <h3 className="font-display text-base font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
