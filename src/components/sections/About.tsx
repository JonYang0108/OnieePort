import { motion } from "framer-motion";
import { Counter } from "@/components/ui/Counter";

const SKILL_CHIPS = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js",
  "Vite",
  "Tailwind CSS",
  "Node.js",
  "PHP",
  "MongoDB",
  "Supabase",
  "MySQL",
  "Git & GitHub",
  "Responsive Web Design",
  "REST APIs",
  "Database Design",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">About me</p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Building scalable, polished web experiences
          </h2>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>
              Hello! I'm <span className="text-foreground font-medium">Jonie Quirino</span>, a
              passionate Student Full Stack Web Developer dedicated to building modern, responsive,
              and user-friendly web applications. I enjoy transforming ideas into functional digital
              solutions by combining creative design with efficient backend development.
            </p>
            <p>
              I work across both frontend and backend technologies, handling the complete
              development process — from designing intuitive user interfaces to building powerful
              server-side systems and databases. I enjoy solving complex problems, learning new
              technologies, and turning challenges into opportunities for growth.
            </p>
            <p>
              I'm currently seeking opportunities to collaborate, learn, and contribute to
              innovative projects where I can apply my technical skills and grow as a professional
              Full Stack Developer.{" "}
              <span className="text-foreground font-medium">
                Let's build something amazing together.
              </span>
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              {SKILL_CHIPS.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-surface-glass px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            className="space-y-4"
          >
            <div className="glass rounded-2xl p-6">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Current Status
              </p>
              <p className="mt-2 font-display text-lg font-semibold">
                College Student · Freelancer · Developer
              </p>
            </div>

            <div className="glass rounded-2xl p-6">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Specialization
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {["Frontend", "Backend", "Database", "Cloud Services"].map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="text-primary">›</span> {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass rounded-2xl p-6">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Goals</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Build efficient, scalable, and user-friendly web applications that solve real-world
                problems while continuously learning modern technologies.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Counters */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mt-16 grid grid-cols-3 gap-4 rounded-3xl glass p-8 text-center"
        >
          <div>
            <Counter to={5} suffix="+" />
            <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Projects</p>
          </div>
          <div className="border-x border-border">
            <Counter to={15} suffix="+" />
            <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
              Technologies
            </p>
          </div>
          <div>
            <Counter to={1000} suffix="+" />
            <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
              Hours Coding
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
