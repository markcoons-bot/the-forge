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
  BODY_DARK,
  SECTION_LABEL_DARK,
  NAV_LINK_DARK,
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

      <section className="pt-24 md:pt-32 pb-24 lg:pb-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Back link */}
          <ScrollReveal variant="fade-in" className="mb-12">
            <Link
              href="/shop"
              className={NAV_LINK_DARK}
            >
              &larr; Back to shop
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Images */}
            <ScrollReveal variant="scale-in">
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
                <p className="font-mono text-[13px] font-normal tracking-[0.15em] uppercase text-forge-paper/75 mb-4">
                  {product.status}
                  {product.leadTime && (
                    <span className="text-forge-paper/60">
                      {" "}
                      &mdash; {product.leadTime}
                    </span>
                  )}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <h1 className="font-serif text-[32px] md:text-[40px] font-light leading-[1.2] text-forge-paper mb-2">
                  {product.name}
                </h1>
              </ScrollReveal>

              {maker && (
                <ScrollReveal delay={200}>
                  <Link
                    href={`/makers/${maker.slug}`}
                    className="font-sans text-[15px] font-light text-forge-paper/70 hover:text-forge-paper transition-colors duration-300 mb-6 inline-block"
                  >
                    From the studio of {maker.name}
                  </Link>
                </ScrollReveal>
              )}

              <ScrollReveal delay={250}>
                <p className="font-serif text-[26px] md:text-[28px] font-light text-forge-paper mb-10">
                  {formatPrice(product.price, product.currency)}
                </p>
              </ScrollReveal>

              {/* Curator's note */}
              <ScrollReveal delay={300}>
                <div className="mb-10">
                  <p className="font-mono text-[13px] font-normal tracking-[0.15em] uppercase text-forge-paper/75 label-line mb-3">
                    Curator&apos;s Note
                  </p>
                  <p className="font-serif text-[17px] md:text-[19px] italic leading-[1.75] text-forge-paper/[0.92]">
                    {product.curatorNote}
                  </p>
                </div>
              </ScrollReveal>

              {/* Specs */}
              <ScrollReveal delay={350}>
                <div className="space-y-0 mb-10">
                  <div className="flex items-start gap-6 py-4 border-b border-white/[0.08]">
                    <span className="font-mono text-[13px] font-normal tracking-[0.1em] uppercase text-forge-paper/75 w-24 shrink-0 pt-0.5">
                      Materials
                    </span>
                    <p className="font-sans text-[16px] font-light text-forge-paper/[0.92]">
                      {product.materials}
                    </p>
                  </div>
                  <div className="flex items-start gap-6 py-4 border-b border-white/[0.08]">
                    <span className="font-mono text-[13px] font-normal tracking-[0.1em] uppercase text-forge-paper/75 w-24 shrink-0 pt-0.5">
                      Dimensions
                    </span>
                    <p className="font-sans text-[16px] font-light text-forge-paper/[0.92]">
                      {product.dimensions}
                    </p>
                  </div>
                  <div className="flex items-start gap-6 py-4 border-b border-white/[0.08]">
                    <span className="font-mono text-[13px] font-normal tracking-[0.1em] uppercase text-forge-paper/75 w-24 shrink-0 pt-0.5">
                      Care
                    </span>
                    <p className="font-sans text-[16px] font-light text-forge-paper/[0.92]">
                      {product.care}
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Add to Cart — inline on desktop */}
              <ScrollReveal delay={400}>
                <button className="btn-forge w-full md:w-auto hidden lg:inline-flex">
                  Add to cart
                </button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Add to Cart — mobile/tablet only */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-forge-dark/95 backdrop-blur-md border-t border-white/[0.08] px-6 py-4">
        <button className="btn-forge-solid w-full">
          Add to cart &mdash; {formatPrice(product.price, product.currency)}
        </button>
      </div>

      {/* More from this maker */}
      {moreFromMaker.length > 0 && (
        <section className="py-16 md:py-24 px-6 md:px-10 border-t border-white/[0.08]">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="mb-12 md:mb-16">
                <span className={`${SECTION_LABEL_DARK} label-line mb-3`}>
                  More from {maker?.name}
                </span>
              </div>
            </ScrollReveal>

            {/* Mobile: horizontal scroll */}
            <div className="md:hidden overflow-x-auto -mx-6">
              <div className="flex gap-4 w-max px-6">
                {moreFromMaker.slice(0, 3).map((p) => (
                  <div key={p.slug} className="w-[200px] shrink-0">
                    <ProductCard product={p} variant="dark" />
                  </div>
                ))}
              </div>
            </div>

            {/* Tablet/desktop: grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
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
        <section className="py-16 md:py-24 px-6 md:px-10 border-t border-white/[0.08]">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <span className={`${SECTION_LABEL_DARK} label-line mb-6`}>
                About the Maker
              </span>
              <p className={`${BODY_DARK} mb-6`}>
                {maker.bio || maker.story[0]}
              </p>
              <Link
                href={`/makers/${maker.slug}`}
                className={NAV_LINK_DARK}
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
