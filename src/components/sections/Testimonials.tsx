import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "center" });
  const [idx, setIdx] = useState(0);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setIdx(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <section id="testimonials" className="relative py-28 bg-surface/40">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">Testimonials</p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">What people say</h2>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                className="min-w-0 shrink-0 grow-0 basis-full px-4"
                initial={{ opacity: 0.4 }}
                animate={{ opacity: idx === i ? 1 : 0.4 }}
              >
                <div className="glass mx-auto max-w-2xl rounded-3xl p-10 text-center">
                  <div className="mb-4 flex justify-center gap-1 text-primary">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <svg key={j} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-display text-lg leading-relaxed text-foreground md:text-xl">
                    "{t.feedback}"
                  </p>
                  <p className="mt-5 text-sm text-muted-foreground">— {t.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => embla?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-1.5 bg-white/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
