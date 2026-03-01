"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { makers } from "@/data/makers";
import { getProductsByMaker } from "@/data/products";
import {
  H1_PAGE,
  BODY,
  SECTION_LABEL,
  SECTION_LABEL_LIGHT,
} from "@/lib/typography";

const mediums = [
  "All",
  "Clay",
  "Glass",
  "Wood",
] as const;

export default function MakersPageContent() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredMakers =
    activeFilter === "All"
      ? makers
      : makers.filter((m) => m.medium === activeFilter);

  return (
    <section className="bg-forge-paper min-h-screen pt-32 md:pt-40 pb-24 md:pb-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16 md:mb-20">
            <span className={`${SECTION_LABEL_LIGHT} label-line mb-4`}>
              The Makers
            </span>
            <h1 className={`${H1_PAGE} text-forge-text mb-4`}>
              The people behind the work
            </h1>
            <p className={`${BODY} text-forge-text/60 max-w-lg`}>
              Every maker here was invited. Every story is real. The work
              speaks for itself.
            </p>
          </div>
        </ScrollReveal>

        {/* Filters */}
        <ScrollReveal className="mb-12 md:mb-16">
          <div className="overflow-x-auto -mx-6 md:mx-0">
            <div className="flex gap-2 px-6 md:px-0 w-max md:w-auto md:flex-wrap">
              {mediums.map((medium) => (
                <button
                  key={medium}
                  onClick={() => setActiveFilter(medium)}
                  className={`shrink-0 font-mono text-[13px] font-normal tracking-[0.1em] uppercase px-5 py-3 md:py-2.5 border transition-all duration-300 ${
                    activeFilter === medium
                      ? "bg-forge-text text-forge-paper border-forge-text underline underline-offset-4"
                      : "text-forge-text/60 hover:text-forge-text/80 bg-transparent border-forge-text/20"
                  }`}
                >
                  {medium}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Maker Rows */}
        <div className="flex flex-col gap-16 md:gap-20">
          {filteredMakers.map((maker, index) => {
            const makerProducts = getProductsByMaker(maker.slug).slice(0, 3);

            return (
              <ScrollReveal key={maker.slug} delay={index * 80}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
                  {/* Portrait — left 5 cols */}
                  <Link
                    href={`/makers/${maker.slug}`}
                    className="md:col-span-5 group"
                  >
                    <div className="relative aspect-[5/3] md:aspect-[3/4] overflow-hidden">
                      <div
                        className="absolute inset-0"
                        style={{ background: maker.portraitGradient }}
                      />
                      <Image
                        src={maker.portraitImage}
                        alt={`${maker.name} — ${maker.medium}`}
                        fill
                        className="object-cover transition-transform duration-700 ease-forge group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 42vw"
                      />
                    </div>
                  </Link>

                  {/* Details — right 7 cols */}
                  <div className="md:col-span-7 flex flex-col justify-center">
                    <p className={`${SECTION_LABEL} text-forge-text/60 mb-3`}>
                      {maker.medium} &mdash; {maker.location}
                    </p>
                    <h2 className="font-serif text-[28px] md:text-[32px] font-light leading-[1.3] text-forge-text mb-4">
                      {maker.name}
                    </h2>
                    <blockquote className="font-serif text-[18px] md:text-[20px] font-light italic leading-[1.3] text-forge-text/70 mb-4">
                      &ldquo;{maker.quote}&rdquo;
                    </blockquote>
                    <p className="font-sans text-[16px] font-light leading-[1.9] text-forge-text/70 line-clamp-3 mb-6">
                      {maker.story[0].replace(/\*([^*]+)\*/g, "$1")}
                    </p>

                    {/* Product thumbnails — larger */}
                    {makerProducts.length > 0 && (
                      <div className="overflow-x-auto -mx-6 md:mx-0 mb-6">
                        <div className="flex gap-3 px-6 md:px-0">
                          {makerProducts.map((product) => (
                            <Link
                              key={product.slug}
                              href={`/shop/${product.slug}`}
                              className="relative w-[100px] h-[125px] md:w-[140px] md:h-[175px] shrink-0 overflow-hidden hover:opacity-90 transition-opacity duration-300"
                            >
                              <div
                                className="absolute inset-0"
                                style={{ background: product.bgGradient }}
                              />
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                                sizes="160px"
                              />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    <Link
                      href={`/makers/${maker.slug}`}
                      className="font-sans text-[14px] font-normal tracking-[0.04em] text-forge-text/60 hover:text-forge-text underline underline-offset-4 decoration-forge-text/30 transition-colors duration-300"
                    >
                      View full profile &rarr;
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {filteredMakers.length === 0 && (
          <div className="text-center py-20">
            <p className={`${BODY} text-forge-text/40`}>
              No makers in this medium yet. Check back soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
