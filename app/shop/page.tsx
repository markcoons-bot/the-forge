"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { makers } from "@/data/makers";
import {
  H1_PAGE,
  BODY,
  SECTION_LABEL_LIGHT,
} from "@/lib/typography";

const mediums = [
  "All",
  "Clay",
  "Glass",
  "Wood",
] as const;

export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((p) => {
          const maker = makers.find((m) => m.slug === p.makerSlug);
          return maker?.medium === activeFilter;
        });

  return (
    <>
      <Navigation />

      <section className="bg-forge-paper min-h-screen pt-32 md:pt-40 pb-24 md:pb-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <span className={`${SECTION_LABEL_LIGHT} label-line mb-4`}>
                The Shop
              </span>
              <h1 className={`${H1_PAGE} text-forge-text mb-4`}>
                Objects worth owning
              </h1>
              <p className={`${BODY} text-forge-text/60 max-w-lg`}>
                Every object here was chosen. Every maker was invited. The work
                deserves to be seen properly.
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

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {filteredProducts.map((product, index) => (
              <ScrollReveal key={product.slug} delay={index * 80}>
                <ProductCard product={product} variant="light" />
              </ScrollReveal>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className={`${BODY} text-forge-text/40`}>
                No objects in this medium yet. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
