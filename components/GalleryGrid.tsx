"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { GalleryItem } from "@/data/gallery";

interface GalleryGridProps {
  items: GalleryItem[];
  columns?: 2 | 3;
}

export default function GalleryGrid({ items, columns = 3 }: GalleryGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger based on position in the observed batch
            const el = entry.target as HTMLElement;
            const idx = parseInt(el.dataset.index || "0", 10);
            setTimeout(() => {
              el.classList.add("revealed");
            }, (idx % 6) * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 100px 0px" }
    );

    const elements = gridRef.current.querySelectorAll(".gallery-item");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [items]);

  const colClass =
    columns === 2
      ? "columns-2"
      : "columns-2 lg:columns-3";

  return (
    <div
      ref={gridRef}
      className={colClass}
      style={{ columnGap: "5px" }}
    >
      {items.map((item, index) => {
        const href = item.productSlug
          ? `/shop/${item.productSlug}`
          : `/makers/${item.makerSlug}`;

        return (
          <Link
            key={item.id}
            href={href}
            data-index={index}
            className="gallery-item reveal reveal--fade-in group relative block mb-[5px] overflow-hidden cursor-pointer"
            style={{ breakInside: "avoid" }}
          >
            <div
              className="relative w-full"
              style={{ aspectRatio: item.aspect }}
            >
              <Image
                src={item.src}
                alt={`${item.maker} — ${item.medium}`}
                fill
                className="object-cover"
                sizes={
                  columns === 3
                    ? "(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
                    : "50vw"
                }
              />

              {/* Persistent bottom overlay — mobile */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 md:hidden">
                <p className="font-serif text-[15px] font-light text-white leading-tight">{item.maker}</p>
                <p className="font-mono text-[12px] font-normal tracking-[0.1em] uppercase text-white/70">{item.medium}</p>
              </div>

              {/* Hover overlay — desktop only */}
              <div className="hidden md:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-col items-center justify-center text-center p-4">
                <p className="font-serif text-[18px] font-light text-white">
                  {item.maker}
                </p>
                <p className="font-mono text-[13px] font-normal tracking-[0.12em] uppercase text-white/70 mt-1">
                  {item.medium}
                </p>
                {item.productName && (
                  <>
                    <p className="font-sans text-[15px] font-light text-white/80 mt-3">
                      {item.productName}
                    </p>
                    {item.productPrice && (
                      <p className="font-sans text-[15px] font-medium text-white/70 mt-1">
                        {item.productPrice}
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
