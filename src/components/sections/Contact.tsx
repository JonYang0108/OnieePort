import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { toast } from "sonner";
import { CONTACT, SOCIALS } from "@/lib/data";

const schema = z.object({
  name: z.string().min(2, "Name is too short").max(80),
  email: z.email("Invalid email"),
  subject: z.string().min(2, "Subject is too short").max(120),
  message: z.string().min(10, "Message is too short").max(2000),
});

const SocialLink = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => {
  if (!href) {
    return (
      <span
        title="Coming soon"
        aria-label={`${label} (coming soon)`}
        className="glass flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-full text-muted-foreground opacity-50"
      >
        {children}
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-all hover:scale-110 hover:text-foreground"
    >
      {children}
    </a>
  );
};

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    toast.success("Message received — I'll get back to you soon.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">Contact</p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Let's build something together
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass space-y-4 rounded-3xl p-7 md:p-8"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <Field name="name" label="Name" />
              <Field name="email" type="email" label="Email" />
            </div>
            <Field name="subject" label="Subject" />
            <Field name="message" label="Message" textarea />
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-[filter] hover:brightness-110 disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Send Message"}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <InfoCard label="Email" value={CONTACT.email} href={`mailto:${CONTACT.email}`} />
            <InfoCard label="Phone" value={CONTACT.phone} href={`tel:${CONTACT.phone}`} />
            <InfoCard label="Location" value={CONTACT.location} />

            <div className="glass rounded-2xl p-6">
              <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Social</p>
              <div className="flex gap-2">
                <SocialLink href={SOCIALS.github} label="GitHub">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2.9-.3 2-.4 3-.4s2.1.1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.3 2.9.2 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.4 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
                  </svg>
                </SocialLink>
                <SocialLink href={SOCIALS.linkedin} label="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                  </svg>
                </SocialLink>
                <SocialLink href={SOCIALS.facebook} label="Facebook">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12z" />
                  </svg>
                </SocialLink>
                <SocialLink href={SOCIALS.instagram} label="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.5 1s.8.9 1 1.5c.2.4.3 1.1.4 2.3.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-1 1.5s-.9.8-1.5 1c-.4.2-1.1.3-2.3.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.5-1s-.8-.9-1-1.5c-.2-.4-.3-1.1-.4-2.3-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.2-1.9.4-2.3.2-.6.5-1 1-1.5s.9-.8 1.5-1c.4-.2 1.1-.3 2.3-.4 1.2-.1 1.6-.1 4.8-.1zm0 5.8a4 4 0 100 8 4 4 0 000-8zm5.2-.3a.9.9 0 11-1.8 0 .9.9 0 011.8 0zM12 14.6a2.6 2.6 0 110-5.2 2.6 2.6 0 010 5.2z" />
                  </svg>
                </SocialLink>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  textarea = false,
}: {
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
}) {
  const cls =
    "w-full rounded-xl border border-border bg-surface-glass px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          rows={5}
          className={cls}
          placeholder={`Your ${label.toLowerCase()}…`}
          required
        />
      ) : (
        <input
          name={name}
          type={type}
          className={cls}
          placeholder={`Your ${label.toLowerCase()}…`}
          required
        />
      )}
    </label>
  );
}

function InfoCard({ label, value, href }: { label: string; value: string; href?: string }) {
  const inner = (
    <div className="glass rounded-2xl p-5 transition-colors hover:border-primary">
      <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="mt-1 font-display text-base text-foreground">{value}</p>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
