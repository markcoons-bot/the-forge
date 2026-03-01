import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { products, getProduct, getProductsByMaker } from "@/data/products";
import { getMaker } from "@/data/makers";
import {
  SECTION_LABEL_LIGHT,
} from "@/lib/typography";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const product = getProduct(params.slug);
  if (!product) return { title: "Product Not Found — The Forge" };

  const maker = getMaker(product.makerSlug);
  return {
    title: `${product.name} by ${maker?.name || "Unknown"} — The Forge`,
    description: product.curatorNote,
  };
}

export default function ProductPage({ params }: PageProps) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const maker = getMaker(product.makerSlug);
  const moreFromMaker = getProductsByMaker(product.makerSlug).filter(
    (p) => p.slug !== product.slug
  );

  const allImages = [product.image, ...(product.alternateImages || [])];

  const formatPrice = (price: number, currency: string) => {
    const symbols: Record<string, string> = { USD: "$", GBP: "£", EUR: "€" };
    return `${symbols[currency] || currency}${price.toLocaleString()}`;
  };

  return (
    <>
      <Navigation />

      <section className="bg-forge-paper pt-24 md:pt-32 pb-24 lg:pb-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Back link */}
          <ScrollReveal variant="fade-in" className="mb-12">
            <Link
              href="/shop"
              className="font-sans text-[14px] font-normal text-forge-text/[0.55] hover:text-forge-text/[0.85] transition-colors duration-300"
            >
              &larr; Back to shop
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Images — 7 of 12 columns (58%) */}
            <ScrollReveal variant="scale-in" className="lg:col-span-7">
              <div className="space-y-3">
                {allImages.map((img, index) => (
                  <div key={index} className="relative aspect-[4/5] w-full overflow-hidden">
                    <div
                      className="absolute inset-0"
                      style={{ background: product.bgGradient }}
                    />
                    <Image
                      src={img}
                      alt={`${product.name}${index > 0 ? ` — view ${index + 1}` : ""}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Details — 5 of 12 columns */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <ScrollReveal delay={100}>
                <p className="font-mono text-[13px] font-normal tracking-[0.15em] uppercase text-forge-text/50 mb-4">
                  {product.status}
                  {product.leadTime && (
                    <span>
                      {" "}
                      &mdash; {product.leadTime}
                    </span>
                  )}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <h1 className="font-serif text-[32px] md:text-[40px] font-normal leading-[1.2] text-forge-text mb-2">
                  {product.name}
                </h1>
              </ScrollReveal>

              {maker && (
                <ScrollReveal delay={200}>
                  <p className="font-sans text-[16px] font-light text-forge-text/[0.55] mb-6">
                    From the studio of{" "}
                    <Link
                      href={`/makers/${maker.slug}`}
                      className="hover:text-forge-text hover:underline underline-offset-4 transition-all duration-300"
                    >
                      {maker.name}
                    </Link>
                  </p>
                </ScrollReveal>
              )}

              <ScrollReveal delay={250}>
                <p className="font-serif text-[28px] font-normal text-forge-text mb-10">
                  {formatPrice(product.price, product.currency)}
                </p>
              </ScrollReveal>

              {/* Curator's note */}
              <ScrollReveal delay={300}>
                <div className="mb-10">
                  <p className={`${SECTION_LABEL_LIGHT} label-line mb-3`}>
                    Curator&apos;s Note
                  </p>
                  <p className="font-sans text-[17px] font-light leading-[1.75] text-forge-text/80">
                    {product.curatorNote}
                  </p>
                </div>
              </ScrollReveal>

              {/* Specs */}
              <ScrollReveal delay={350}>
                <div className="space-y-0 mb-10">
                  <div className="flex items-start gap-6 py-4 border-b border-forge-text/10">
                    <span className="font-mono text-[12px] font-normal tracking-[0.1em] uppercase text-forge-text/[0.45] w-24 shrink-0 pt-0.5">
                      Materials
                    </span>
                    <p className="font-sans text-[16px] font-light text-forge-text/80">
                      {product.materials}
                    </p>
                  </div>
                  <div className="flex items-start gap-6 py-4 border-b border-forge-text/10">
                    <span className="font-mono text-[12px] font-normal tracking-[0.1em] uppercase text-forge-text/[0.45] w-24 shrink-0 pt-0.5">
                      Dimensions
                    </span>
                    <p className="font-sans text-[16px] font-light text-forge-text/80">
                      {product.dimensions}
                    </p>
                  </div>
                  <div className="flex items-start gap-6 py-4 border-b border-forge-text/10">
                    <span className="font-mono text-[12px] font-normal tracking-[0.1em] uppercase text-forge-text/[0.45] w-24 shrink-0 pt-0.5">
                      Care
                    </span>
                    <p className="font-sans text-[16px] font-light text-forge-text/80">
                      {product.care}
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Add to Cart — desktop */}
              <ScrollReveal delay={400}>
                <button className="hidden lg:inline-flex items-center justify-center w-full md:w-auto px-12 py-[18px] bg-forge-text text-forge-paper font-mono text-[14px] font-normal tracking-[0.1em] uppercase cursor-pointer transition-all duration-400 hover:bg-[#3a3530]">
                  Add to cart
                </button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Add to Cart — mobile/tablet only */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-forge-paper/95 backdrop-blur-md border-t border-forge-text/10 px-6 py-4">
        <button className="w-full py-[18px] bg-forge-text text-forge-paper font-mono text-[14px] font-normal tracking-[0.1em] uppercase cursor-pointer transition-all duration-400 hover:bg-[#3a3530]">
          Add to cart &mdash; {formatPrice(product.price, product.currency)}
        </button>
      </div>

      {/* More from this maker */}
      {moreFromMaker.length >= 2 && (
        <section className="bg-forge-paper pb-20 md:pb-28 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            {/* Divider */}
            <div className="flex justify-center py-10">
              <div className="w-20 h-px bg-forge-text/[0.15]" />
            </div>

            <ScrollReveal>
              <span className={`${SECTION_LABEL_LIGHT} label-line mb-12`}>
                More from {maker?.name}
              </span>
            </ScrollReveal>

            {/* Mobile: horizontal scroll */}
            <div className="md:hidden overflow-x-auto -mx-6">
              <div className="flex gap-4 w-max px-6">
                {moreFromMaker.slice(0, 3).map((p) => (
                  <div key={p.slug} className="w-[200px] shrink-0">
                    <ProductCard product={p} variant="light" showMaker={false} />
                  </div>
                ))}
              </div>
            </div>

            {/* Tablet/desktop: grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
              {moreFromMaker.slice(0, 3).map((p, index) => (
                <ScrollReveal key={p.slug} delay={index * 100}>
                  <ProductCard product={p} variant="light" showMaker={false} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
