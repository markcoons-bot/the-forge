"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Navigation() {
  const [visible, setVisible] = useState(false);
  const locked = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (locked.current) return;

      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (scrollY > viewportHeight * 0.85) {
        setVisible(true);
        locked.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`nav-container fixed top-0 left-0 right-0 z-50 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <div className="bg-forge-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-mono text-xs tracking-[0.15em] uppercase text-forge-accent hover:text-forge-paper transition-colors duration-300"
          >
            The Forge
          </Link>
          <div className="flex items-center gap-8">
            <Link
              href="/#makers"
              className="font-mono text-xs tracking-[0.08em] text-forge-muted hover:text-forge-paper transition-colors duration-300"
            >
              Makers
            </Link>
            <Link
              href="/shop"
              className="font-mono text-xs tracking-[0.08em] text-forge-muted hover:text-forge-paper transition-colors duration-300"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="font-mono text-xs tracking-[0.08em] text-forge-muted hover:text-forge-paper transition-colors duration-300"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
