"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { SECTION_LABEL_LIGHT, NAV_LINK } from "@/lib/typography";
import type { Maker } from "@/data/makers";
import type { Product } from "@/data/products";

interface StudioTile {
  image: string;
  makerName: string;
  medium: string;
  caption: string;
  href: string;
}

interface StudioFeedProps {
  makers: Maker[];
  products: Product[];
}

function shuffle<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function buildTiles(makers: Maker[], products: Product[]): StudioTile[] {
  const tiles: StudioTile[] = [];
  const seen = new Set<string>();

  // Studio tiles from maker images (portrait, storyImages)
  for (const maker of makers) {
    if (maker.portraitImage && !seen.has(maker.portraitImage)) {
      seen.add(maker.portraitImage);
      tiles.push({
        image: maker.portraitImage,
        makerName: maker.name,
        medium: maker.medium,
        caption: `${maker.name}'s studio`,
        href: `/makers/${maker.slug}`,
      });
    }
    for (const img of maker.storyImages || []) {
      if (!seen.has(img)) {
        seen.add(img);
        tiles.push({
          image: img,
          makerName: maker.name,
          medium: maker.medium,
          caption: `${maker.medium} making process`,
          href: `/makers/${maker.slug}`,
        });
      }
    }
  }

  // Product tiles from product images
  for (const product of products) {
    if (product.image && !seen.has(product.image)) {
      seen.add(product.image);
      const maker = makers.find((m) => m.slug === product.makerSlug);
      tiles.push({
        image: product.image,
        makerName: maker?.name || "",
        medium: maker?.medium || "",
        caption: product.name,
        href: `/shop/${product.slug}`,
      });
    }
  }

  return tiles;
}

export default function StudioFeed({ makers, products }: StudioFeedProps) {
  const tiles = useMemo(
    () => shuffle(buildTiles(makers, products)).slice(0, 14),
    [makers, products]
  );

  return (
    <section className="bg-forge-paper pt-6 md:pt-10 pb-20 md:pb-28">
      {/* Header */}
      <div className="px-6 md:px-10 max-w-7xl mx-auto mb-8">
        <ScrollReveal>
          <div className="flex items-end justify-between">
            <div>
              <span className={`${SECTION_LABEL_LIGHT} label-line mb-3`}>
                From the Studios
              </span>
              <p className="font-sans text-[16px] font-normal text-forge-text">
                Unfinished work. Open kilns. Quiet mornings. The moments between the moments.
              </p>
            </div>
            <a
              href="/makers"
              className={`hidden md:inline-flex items-center gap-2 ${NAV_LINK} text-forge-text hover:text-forge-text transition-colors duration-300 shrink-0`}
            >
              See all makers <span>&rarr;</span>
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Scrolling tiles */}
      <ScrollReveal>
        <div className="studio-feed-scroll overflow-x-auto pb-4 px-6 md:px-10">
          <div className="flex gap-3 w-max">
            {tiles.map((tile, index) => (
              <Link
                key={index}
                href={tile.href}
                className="group relative w-[260px] md:w-[300px] aspect-square shrink-0 overflow-hidden"
              >
                {/* Photo */}
                <Image
                  src={tile.image}
                  alt={`${tile.makerName} — ${tile.medium.toLowerCase()}`}
                  fill
                  className="object-cover transition-transform duration-700 ease-forge group-hover:scale-[1.06]"
                  sizes="300px"
                />

                {/* Persistent bottom caption — mobile */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-forge-dark/70 to-transparent px-3 py-2 md:hidden">
                  <p className="font-sans text-[14px] font-normal text-forge-paper truncate">{tile.caption}</p>
                  <p className="font-sans text-[12px] font-normal tracking-[0.1em] uppercase text-forge-paper">{tile.medium}</p>
                </div>

                {/* Hover overlay — desktop */}
                <div className="absolute inset-0 bg-forge-dark/0 group-hover:bg-forge-dark/60 transition-all duration-500 ease-forge" />

                {/* Hover content — centered, desktop */}
                <div className="absolute inset-0 hidden md:flex flex-col items-center justify-center text-center p-5 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-forge translate-y-2 group-hover:translate-y-0">
                  <p className="font-sans text-[13px] font-normal tracking-[0.12em] uppercase text-forge-paper mb-2">
                    {tile.medium}
                  </p>
                  <p className="font-sans text-[15px] font-normal text-forge-paper">
                    {tile.makerName}
                  </p>
                  <p className="font-sans text-[15px] font-normal text-forge-paper mt-1.5">
                    {tile.caption}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Mobile "Follow" link */}
      <div className="px-6 md:hidden mt-6">
        <a
          href="/makers"
          className={`inline-flex items-center gap-2 ${NAV_LINK} text-forge-text hover:text-forge-text transition-colors duration-300`}
        >
          See all makers <span>&rarr;</span>
        </a>
      </div>
    </section>
  );
}
