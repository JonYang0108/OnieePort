import { TECH_STACK } from "@/lib/data";
import { TechIcon, getTechLabel, type TechName } from "@/components/ui/TechIcons";

// Cast for TS — TECH_STACK keys match TechIcon's union
const items = [...TECH_STACK, ...TECH_STACK] as TechName[];

export function TechCarousel() {
  return (
    <section id="tech" aria-label="Tech stack" className="relative border-y border-border py-10">
      <div className="marquee-wrap relative overflow-hidden">
        <div className="marquee-track gap-12 pr-12">
          {items.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex shrink-0 items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
            >
              <TechIcon name={name} className="h-8 w-8" />
              <span className="font-display text-sm font-medium uppercase tracking-wider">
                {getTechLabel(name)}
              </span>
            </div>
          ))}
        </div>
        {/* Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}
