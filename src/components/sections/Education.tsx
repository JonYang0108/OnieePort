import { motion } from "framer-motion";
import { EDUCATION, CERTIFICATIONS } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Education */}
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">Education</p>
            <h2 className="mb-8 font-display text-3xl font-bold md:text-4xl">
              Academic background
            </h2>
            <div className="space-y-4">
              {EDUCATION.map((ed, i) => (
                <motion.div
                  key={ed.school + i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass rounded-2xl p-6"
                >
                  <div className="flex flex-wrap justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold">{ed.degree}</h3>
                    <span className="text-xs text-muted-foreground">{ed.year}</span>
                  </div>
                  <p className="text-sm text-primary">{ed.school}</p>
                  <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                    {ed.achievements.map((a) => (
                      <li key={a} className="flex gap-2">
                        <span className="text-primary">★</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">Certifications</p>
            <h2 className="mb-8 font-display text-3xl font-bold md:text-4xl">Credentials</h2>
            <div className="space-y-3">
              {CERTIFICATIONS.map((c, i) => (
                <motion.a
                  key={c.name}
                  href={c.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="block glass rounded-2xl p-5 transition-transform hover:-translate-y-0.5 hover:border-primary"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-base font-semibold">{c.name}</h3>
                    <span className="text-xs text-muted-foreground">{c.date}</span>
                  </div>
                  <p className="text-sm text-primary">{c.issuer}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
