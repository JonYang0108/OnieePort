import { motion } from "framer-motion";
import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)] hover:brightness-110",
  secondary: "glass text-foreground hover:bg-white/10",
  ghost: "border border-border text-foreground hover:bg-white/5",
};

export function MagneticButton({
  children,
  variant = "primary",
  className,
  href,
  onClick,
  type,
  download,
  target,
  ariaLabel,
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  download?: boolean | string;
  target?: string;
  ariaLabel?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.25, y: y * 0.25 });
  };
  const reset = () => setPos({ x: 0, y: 0 });

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.3 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-[filter,background] cursor-pointer select-none",
        variants[variant],
        className,
      )}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        aria-label={ariaLabel}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {inner}
      </a>
    );
  }
  return (
    <button
      type={type ?? "button"}
      onClick={onClick}
      aria-label={ariaLabel}
      className="bg-transparent border-0 p-0"
    >
      {inner}
    </button>
  );
}
