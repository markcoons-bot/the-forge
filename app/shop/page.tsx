"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { makers } from "@/data/makers";

const mediums = [
  "All",
  "Clay",
  "Wood",
  "Metal",
  "Glass",
  "Leather",
  "Stone",
  "Fiber",
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
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-forge-text/40 block mb-4">
                The Shop
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-light text-forge-text mb-4">
                Objects worth owning
              </h1>
              <p className="font-sans text-base font-extralight text-forge-text/70 max-w-lg">
                Every object here was chosen. Every maker was invited. The work
                deserves to be seen properly.
              </p>
            </div>
          </ScrollReveal>

          {/* Filters */}
          <ScrollReveal className="mb-12 md:mb-16">
            <div className="flex flex-wrap gap-2">
              {mediums.map((medium) => (
                <button
                  key={medium}
                  onClick={() => setActiveFilter(medium)}
                  className={`font-mono text-[11px] tracking-[0.1em] uppercase px-4 py-2 transition-all duration-300 ${
                    activeFilter === medium
                      ? "bg-forge-text text-forge-paper"
                      : "text-forge-text/40 hover:text-forge-text/70 bg-transparent"
                  }`}
                >
                  {medium}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {filteredProducts.map((product, index) => (
              <ScrollReveal key={product.slug} delay={index * 60}>
                <ProductCard product={product} variant="light" />
              </ScrollReveal>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="font-sans text-base font-extralight text-forge-text/40">
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
