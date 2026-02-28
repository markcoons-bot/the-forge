import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";
import { makers } from "@/data/makers";

interface ProductCardProps {
  product: Product;
  variant?: "dark" | "light";
}

export default function ProductCard({
  product,
  variant = "light",
}: ProductCardProps) {
  const maker = makers.find((m) => m.slug === product.makerSlug);
  const isDark = variant === "dark";

  const formatPrice = (price: number, currency: string) => {
    const symbols: Record<string, string> = { USD: "$", GBP: "£", EUR: "€" };
    return `${symbols[currency] || currency} ${price}`;
  };

  return (
    <Link href={`/shop/${product.slug}`} className="product-card group block">
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden mb-4">
        <div
          className="absolute inset-0"
          style={{ background: product.bgGradient }}
        />
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="product-card-image object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Status badge */}
        <div className="absolute top-4 left-4 z-10">
          <span
            className={`font-mono text-[10px] tracking-[0.1em] uppercase px-2 py-1 ${
              isDark
                ? "text-forge-paper/60 bg-forge-dark/40"
                : "text-forge-text/60 bg-forge-paper/60"
            } backdrop-blur-sm`}
          >
            {product.status}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3
            className={`font-serif text-lg font-light ${
              isDark ? "text-forge-paper" : "text-forge-text"
            }`}
          >
            {product.name}
          </h3>
          {maker && (
            <p
              className={`font-sans text-sm font-extralight mt-0.5 ${
                isDark ? "text-forge-paper/40" : "text-forge-text/50"
              }`}
            >
              {maker.name}
            </p>
          )}
        </div>
        <p
          className={`font-mono text-sm shrink-0 ${
            isDark ? "text-forge-accent" : "text-forge-text/70"
          }`}
        >
          {formatPrice(product.price, product.currency)}
        </p>
      </div>
    </Link>
  );
}
