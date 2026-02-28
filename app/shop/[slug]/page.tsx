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

      <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Back link */}
          <ScrollReveal className="mb-12">
            <Link
              href="/shop"
              className="font-mono text-xs tracking-[0.08em] text-forge-paper/40 hover:text-forge-accent transition-colors duration-300"
            >
              &larr; Back to shop
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Images */}
            <ScrollReveal>
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
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Details */}
            <div className="flex flex-col justify-center">
              <ScrollReveal delay={100}>
                <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-forge-accent mb-4">
                  {product.status}
                  {product.leadTime && (
                    <span className="text-forge-paper/30">
                      {" "}
                      &mdash; {product.leadTime}
                    </span>
                  )}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <h1 className="font-serif text-3xl md:text-4xl font-light text-forge-paper mb-2">
                  {product.name}
                </h1>
              </ScrollReveal>

              {maker && (
                <ScrollReveal delay={200}>
                  <Link
                    href={`/makers/${maker.slug}`}
                    className="font-sans text-sm font-extralight text-forge-paper/[0.6] hover:text-forge-accent transition-colors duration-300 mb-6 inline-block"
                  >
                    From the studio of {maker.name}
                  </Link>
                </ScrollReveal>
              )}

              <ScrollReveal delay={250}>
                <p className="font-serif text-2xl font-light text-forge-paper mb-10">
                  {formatPrice(product.price, product.currency)}
                </p>
              </ScrollReveal>

              {/* Curator's note */}
              <ScrollReveal delay={300}>
                <div className="mb-10">
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-forge-paper/40 mb-3">
                    Curator&apos;s Note
                  </p>
                  <p className="font-serif text-base italic leading-[1.9] text-forge-paper/[0.82]">
                    {product.curatorNote}
                  </p>
                </div>
              </ScrollReveal>

              {/* Specs */}
              <ScrollReveal delay={350}>
                <div className="space-y-0 mb-10">
                  <div className="flex items-start gap-6 py-4 border-b border-white/5">
                    <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-forge-paper/40 w-24 shrink-0 pt-0.5">
                      Materials
                    </span>
                    <p className="font-sans text-sm font-extralight text-forge-paper/[0.78]">
                      {product.materials}
                    </p>
                  </div>
                  <div className="flex items-start gap-6 py-4 border-b border-white/5">
                    <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-forge-paper/40 w-24 shrink-0 pt-0.5">
                      Dimensions
                    </span>
                    <p className="font-sans text-sm font-extralight text-forge-paper/[0.78]">
                      {product.dimensions}
                    </p>
                  </div>
                  <div className="flex items-start gap-6 py-4 border-b border-white/5">
                    <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-forge-paper/40 w-24 shrink-0 pt-0.5">
                      Care
                    </span>
                    <p className="font-sans text-sm font-extralight text-forge-paper/[0.78]">
                      {product.care}
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Add to Cart — subtle */}
              <ScrollReveal delay={400}>
                <button className="btn-forge w-full md:w-auto">
                  Add to cart
                </button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* More from this maker */}
      {moreFromMaker.length > 0 && (
        <section className="py-16 md:py-24 px-6 md:px-10 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="mb-12 md:mb-16">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-forge-accent/70 block mb-3">
                  More from {maker?.name}
                </span>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
              {moreFromMaker.slice(0, 3).map((p, index) => (
                <ScrollReveal key={p.slug} delay={index * 100}>
                  <ProductCard product={p} variant="dark" />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About the Maker */}
      {maker && (
        <section className="py-16 md:py-24 px-6 md:px-10 border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-forge-accent/70 block mb-6">
                About the Maker
              </span>
              <p className="font-sans text-[17px] font-extralight leading-[2] text-forge-paper/[0.78] mb-6">
                {maker.bio || maker.story[0]}
              </p>
              <Link
                href={`/makers/${maker.slug}`}
                className="font-mono text-xs tracking-[0.08em] text-forge-paper/40 hover:text-forge-accent transition-colors duration-300"
              >
                View full profile &rarr;
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
