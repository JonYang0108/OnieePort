import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import profile from "@/assets/profile.jpg";
import { MagneticButton } from "@/components/ui/MagneticButton";

const TAGLINES = [
  "Full Stack Web Developer",
  "Frontend Engineer",
  "Backend Builder",
  "Student & Lifelong Learner",
];

function Typer() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = TAGLINES[idx];
    const speed = deleting ? 40 : 80;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIdx((i) => (i + 1) % TAGLINES.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  return (
    <span className="gradient-text">
      {text}
      <span
        className="ml-0.5 inline-block w-0.5 animate-blink bg-primary align-middle"
        style={{ height: "1em" }}
      />
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* Floating blobs */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-1/4 h-72 w-72 rounded-full bg-primary/30 blur-[120px] animate-float" />
        <div
          className="absolute right-[15%] top-1/3 h-96 w-96 rounded-full bg-primary-glow/20 blur-[140px] animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_10px] shadow-green-400" />
            Available for opportunities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl font-bold leading-[1.05] md:text-7xl"
          >
            Hello, I'm
            <br />
            <span className="gradient-text">Jonie Quirino</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 font-display text-2xl font-semibold md:text-3xl"
          >
            <Typer />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg"
          >
            I'm a student Full Stack Web Developer passionate about creating modern, responsive, and
            interactive web applications — turning ideas into functional digital experiences while
            continuously learning and growing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <MagneticButton href="#projects" variant="primary">
              View Projects
            </MagneticButton>
            <MagneticButton href="/cv.pdf" download variant="secondary">
              Download CV
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              Contact Me
            </MagneticButton>
          </motion.div>
        </div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 -m-6 rounded-full bg-[image:var(--gradient-primary)] opacity-30 blur-3xl animate-glow-pulse" />
          <div className="relative h-72 w-72 overflow-hidden rounded-full border border-border md:h-80 md:w-80">
            <img
              src={profile}
              alt="Jonie Quirino — Full Stack Web Developer"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 -m-3 rounded-full border border-dashed border-primary/40"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#tech"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        aria-label="Scroll"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.a>
    </section>
  );
}
