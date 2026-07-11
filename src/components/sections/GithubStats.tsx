import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { motion } from "framer-motion";
import { getGithubStats } from "@/lib/github.functions";
import { SOCIALS } from "@/lib/data";

export function GithubStats() {
  const fn = useServerFn(getGithubStats);
  const { data, isLoading } = useQuery({
    queryKey: ["github-stats"],
    queryFn: () => fn(),
    staleTime: 10 * 60 * 1000,
  });

  return (
    <section id="github" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">GitHub</p>
            <h2 className="font-display text-4xl font-bold md:text-5xl">Open source activity</h2>
          </div>
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline"
          >
            @JonYang0108 ↗
          </a>
        </div>

        {isLoading && (
          <div className="grid gap-4 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="glass h-28 animate-pulse rounded-2xl" />
            ))}
          </div>
        )}

        {data && (
          <div className="grid gap-4 md:grid-cols-3">
            <Stat label="Public Repos" value={data.user?.public_repos ?? 0} />
            <Stat label="Followers" value={data.user?.followers ?? 0} />
            <Stat label="Following" value={data.user?.following ?? 0} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 md:col-span-1"
            >
              <h3 className="mb-4 text-sm uppercase tracking-widest text-muted-foreground">
                Top Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.topLanguages.length > 0 ? (
                  data.topLanguages.map((l) => (
                    <span
                      key={l.name}
                      className="rounded-full border border-border bg-surface-glass px-3 py-1 text-xs"
                    >
                      {l.name} <span className="text-muted-foreground">·{l.count}</span>
                    </span>
                  ))
                ) : (
                  <span className="text-xs text-muted-foreground">Data unavailable</span>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 md:col-span-2"
            >
              <h3 className="mb-4 text-sm uppercase tracking-widest text-muted-foreground">
                Recent Activity
              </h3>
              <ul className="space-y-2.5">
                {data.recentRepos.length > 0 ? (
                  data.recentRepos.map((r) => (
                    <li key={r.name}>
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-wrap items-baseline justify-between gap-2 rounded-lg p-2 -mx-2 hover:bg-white/5"
                      >
                        <span className="font-mono text-sm text-foreground">{r.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {r.language ?? "—"} · {new Date(r.pushed).toLocaleDateString()}
                        </span>
                      </a>
                    </li>
                  ))
                ) : (
                  <li className="text-xs text-muted-foreground">Recent activity unavailable.</li>
                )}
              </ul>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-2xl p-6"
    >
      <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="mt-2 font-display text-4xl font-bold gradient-text tabular-nums">{value}</p>
    </motion.div>
  );
}
