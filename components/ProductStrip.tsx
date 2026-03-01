"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";
import { SECTION_LABEL_LIGHT } from "@/lib/typography";

interface ProductStripProps {
  products: Product[];
}

export default function ProductStrip({ products }: ProductStripProps) {
  if (products.length === 0) return null;

  const formatPrice = (price: number, currency: string) => {
    const symbols: Record<string, string> = { USD: "$", GBP: "£", EUR: "€" };
    return `${symbols[currency] || currency}${price.toLocaleString()}`;
  };

  return (
    <section className="bg-forge-paper py-10 md:py-14">
      <div className="px-6 md:px-10 mb-6">
        <span className={`${SECTION_LABEL_LIGHT} label-line`}>
          The Work
        </span>
      </div>

      <div className="studio-feed-scroll overflow-x-auto pb-4 px-6 md:px-10">
        <div className="flex gap-4 w-max">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/shop/${product.slug}`}
              className="group block shrink-0 w-[70vw] md:w-[220px]"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-3">
                <div
                  className="absolute inset-0"
                  style={{ background: product.bgGradient }}
                />
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-forge group-hover:scale-[1.04]"
                  sizes="220px"
                />
              </div>
              <p className="font-serif text-[16px] font-light text-forge-text/90 group-hover:text-forge-text transition-colors duration-300">
                {product.name}
              </p>
              <p className="font-mono text-[15px] text-forge-text/80 mt-1">
                {formatPrice(product.price, product.currency)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
