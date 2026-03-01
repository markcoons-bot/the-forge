"use client";

import { useEffect, useRef, ReactNode } from "react";

type RevealVariant = "fade-up" | "fade-in" | "scale-in" | "from-right";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  variant?: RevealVariant;
  /** If true, animate immediately on mount (no scroll trigger) */
  immediate?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.15,
  variant = "fade-up",
  immediate = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (immediate) {
      setTimeout(() => {
        el.classList.add("revealed");
      }, delay);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("revealed");
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [delay, threshold, immediate]);

  const variantClass =
    variant === "fade-up"
      ? "reveal"
      : `reveal reveal--${variant}`;

  return (
    <div ref={ref} className={`${variantClass} ${className}`}>
      {children}
    </div>
  );
}
