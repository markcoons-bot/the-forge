import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  variant?: "dark" | "light";
  showMaker?: boolean;
  makerName?: string;
  makerMedium?: string;
}

export default function ProductCard({
  product,
  variant = "light",
  showMaker = true,
  makerName,
  makerMedium,
}: ProductCardProps) {
  const maker = showMaker ? { name: makerName, medium: makerMedium } : null;
  const isDark = variant === "dark";

  const formatPrice = (price: number, currency: string) => {
    const symbols: Record<string, string> = { USD: "$", GBP: "£", EUR: "€" };
    return `${symbols[currency] || currency}${price.toLocaleString()}`;
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
          alt={`${product.name} by ${makerName || "unknown maker"} — handmade ${makerMedium?.toLowerCase() || "object"}`}
          fill
          className="product-card-image object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Status badge */}
        <div className="absolute top-4 left-4 z-10">
          <span
            className={`font-sans text-[12px] md:text-[13px] font-normal tracking-[0.1em] uppercase px-2 py-1 ${
              isDark
                ? "text-forge-paper bg-forge-dark/40"
                : "text-forge-text bg-forge-paper/60"
            } backdrop-blur-sm`}
          >
            {product.status}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="flex items-start justify-between gap-2 md:gap-4">
        <div>
          <h3
            className={`font-serif text-[15px] md:text-[18px] font-medium ${
              isDark ? "text-forge-paper" : "text-forge-text"
            }`}
          >
            {product.name}
          </h3>
          {maker && (
            <p
              className={`font-sans text-[15px] font-normal mt-0.5 ${
                isDark ? "text-forge-paper" : "text-forge-text"
              }`}
            >
              {maker.name}
            </p>
          )}
        </div>
        <p
          className={`font-sans text-[14px] md:text-[16px] font-medium shrink-0 ${
            isDark ? "text-forge-paper" : "text-forge-text"
          }`}
        >
          {formatPrice(product.price, product.currency)}
        </p>
      </div>
    </Link>
  );
}
