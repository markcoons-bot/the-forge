"use client";

import { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { makers } from "@/data/makers";
import { SECTION_LABEL_LIGHT } from "@/lib/typography";

export default function ProductShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const formatPrice = (price: number, currency: string) => {
    const symbols: Record<string, string> = { USD: "$", GBP: "£", EUR: "€" };
    return `${symbols[currency] || currency}${price.toLocaleString()}`;
  };

  // Staggered entrance animation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          itemRefs.current.forEach((el, i) => {
            if (el) {
              setTimeout(() => {
                el.classList.add("revealed");
              }, i * 100);
            }
          });
          observer.unobserve(container);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const scroll = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = window.innerWidth >= 768 ? 312 : 252; // card + gap
    el.scrollBy({
      left: direction === "right" ? cardWidth * 2 : -cardWidth * 2,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="bg-forge-paper py-16 md:py-20" ref={containerRef}>
      {/* Header row */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-end justify-between mb-8">
        <div>
          <span className={`${SECTION_LABEL_LIGHT} label-line mb-2`}>
            Recently Added
          </span>
          <p className="font-sans text-[16px] font-light text-forge-text/60 mt-2">
            From the studios of our makers
          </p>
        </div>

        {/* Arrow buttons — desktop only */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-9 h-9 rounded-full border border-forge-text/15 flex items-center justify-center text-forge-text/40 hover:text-forge-text/70 hover:border-forge-text/30 transition-all duration-300"
            aria-label="Scroll left"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M8.5 3L4.5 7L8.5 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-9 h-9 rounded-full border border-forge-text/15 flex items-center justify-center text-forge-text/40 hover:text-forge-text/70 hover:border-forge-text/30 transition-all duration-300"
            aria-label="Scroll right"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5.5 3L9.5 7L5.5 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hidden showcase-scroll px-6 md:px-10"
      >
        <div className="flex gap-3 w-max">
          {products.map((product, index) => {
            const maker = makers.find((m) => m.slug === product.makerSlug);

            return (
              <div
                key={product.slug}
                ref={(el) => { itemRefs.current[index] = el; }}
                className="reveal reveal--from-right"
              >
                <Link
                  href={`/shop/${product.slug}`}
                  className="group block shrink-0 w-[240px] md:w-[300px]"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <div
                      className="absolute inset-0"
                      style={{ background: product.bgGradient }}
                    />
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 240px, 300px"
                    />

                    {/* Maker name on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                      <p className="font-mono text-[13px] font-normal tracking-[0.12em] uppercase text-white/80">
                        {maker?.name}
                      </p>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="mt-3 flex items-start justify-between gap-3">
                    <p className="font-serif text-[16px] md:text-[18px] font-medium text-forge-text leading-tight">
                      {product.name}
                    </p>
                    <p className="font-sans text-[16px] font-medium text-forge-text shrink-0">
                      {formatPrice(product.price, product.currency)}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
