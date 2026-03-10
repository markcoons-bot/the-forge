"use client";

import { useState } from "react";
import { Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";

export default function MakerProductGrid({ products }: { products: Product[] }) {
  const [page, setPage] = useState(0);
  const pageSize = 3;
  const totalPages = Math.ceil(products.length / pageSize);
  const visible = products.slice(page * pageSize, page * pageSize + pageSize);
  const hasMore = totalPages > 1;

  return (
    <div className="relative">
      {hasMore && page > 0 && (
        <button
          onClick={() => setPage(page - 1)}
          className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 font-sans text-[13px] text-forge-text/30 hover:text-forge-text/60 transition-colors duration-300 z-10"
          aria-label="Previous products"
        >
          &larr;
        </button>
      )}

      <div className="grid grid-cols-3 gap-x-3 md:gap-x-8">
        {visible.map((product, index) => (
          <ScrollReveal key={product.slug} delay={index * 100}>
            <ProductCard product={product} variant="light" showMaker={false} />
          </ScrollReveal>
        ))}
      </div>

      {hasMore && page < totalPages - 1 && (
        <button
          onClick={() => setPage(page + 1)}
          className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 font-sans text-[13px] text-forge-text/30 hover:text-forge-text/60 transition-colors duration-300 z-10"
          aria-label="More products"
        >
          &rarr;
        </button>
      )}
    </div>
  );
}
