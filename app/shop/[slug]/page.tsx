import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";
import ProductCard from "@/components/ProductCard";
import ProductImageGallery from "@/components/ProductImageGallery";
import Footer from "@/components/Footer";
import { products as localProducts } from "@/data/products";
import { fetchAllProducts, fetchProductBySlug, fetchProductsByMaker, fetchMakerBySlug } from "@/sanity/lib/fetchers";
import {
  SECTION_LABEL_LIGHT,
} from "@/lib/typography";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const products = await fetchAllProducts();
  if (products.length > 0) {
    return products.map((product) => ({ slug: product.slug }));
  }
  return localProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = await fetchProductBySlug(params.slug);
  if (!product) return { title: "Product Not Found — Form & Element" };

  const maker = await fetchMakerBySlug(product.makerSlug);
  return {
    title: `${product.name} by ${maker?.name || "Unknown"} — Form & Element`,
    description: product.curatorNote,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const product = await fetchProductBySlug(params.slug);
  if (!product) notFound();

  const maker = await fetchMakerBySlug(product.makerSlug);
  const moreFromMaker = (await fetchProductsByMaker(product.makerSlug)).filter(
    (p) => p.slug !== product.slug
  );

  const allImages = [product.image, ...(product.galleryImages || []), ...(product.alternateImages || [])].filter(Boolean);

  const formatPrice = (price: number, currency: string) => {
    const symbols: Record<string, string> = { USD: "$", GBP: "£", EUR: "€" };
    return `${symbols[currency] || currency}${price.toLocaleString()}`;
  };

  const statusLabel: Record<string, string> = {
    ready_to_ship: "Ready to Ship",
    ready_to_ship_low: "Ready to Ship — Low Stock",
    ready_to_ship_sold_out: "Sold Out",
    made_to_order: "Made to Order",
    made_to_order_sold_out: "Made to Order — Sold Out",
    coming_soon: "Coming Soon",
  };

  const isSoldOut = product.status === "ready_to_ship_sold_out" || product.status === "made_to_order_sold_out";
  const isComingSoon = product.status === "coming_soon";
  const isDisabled = isSoldOut || isComingSoon;

  return (
    <>
      <Navigation />

      <section className="bg-forge-paper pt-24 md:pt-32 pb-24 lg:pb-0 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Back link */}
          <ScrollReveal variant="fade-in" className="mb-12">
            <Link
              href="/shop"
              className="font-sans text-[14px] font-normal text-forge-text hover:text-forge-text transition-colors duration-300"
            >
              &larr; Back to shop
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Images — 7 of 12 columns (58%) */}
            <ScrollReveal variant="scale-in" className="lg:col-span-7">
              <ProductImageGallery
                images={allImages}
                alt={`${product.name} by ${maker?.name || "unknown maker"} — handmade ${maker?.medium.toLowerCase() || "object"}`}
                bgGradient={product.bgGradient}
              />
            </ScrollReveal>

            {/* Details — 5 of 12 columns */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <ScrollReveal delay={100}>
                <p className="font-sans text-[13px] font-normal tracking-[0.15em] uppercase text-forge-text mb-4">
                  {statusLabel[product.status] || product.status}
                  {product.status === "made_to_order" && product.leadTime && (
                    <span>
                      {" "}
                      &mdash; {product.leadTime}
                    </span>
                  )}
                </p>

                <h1 className="font-serif text-[32px] md:text-[40px] font-normal leading-[1.2] text-forge-text mb-2">
                  {product.name}
                </h1>

                {maker && (
                  <p className="font-sans text-[16px] font-normal text-forge-text mb-6">
                    From the studio of{" "}
                    <Link
                      href={`/makers/${maker.slug}`}
                      className="hover:text-forge-text hover:underline underline-offset-4 transition-all duration-300"
                    >
                      {maker.name}
                    </Link>
                  </p>
                )}

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
                  <p className="font-serif text-[18px] font-normal leading-[1.8] text-forge-text">
                    {product.curatorNote}
                  </p>
                </div>
              </ScrollReveal>

              {/* Specs */}
              <ScrollReveal delay={350}>
                <div className="space-y-0 mb-10">
                  <div className="flex items-start gap-6 py-4 border-b border-forge-text/10">
                    <span className="font-sans text-[12px] font-normal tracking-[0.1em] uppercase text-forge-text w-24 shrink-0 pt-0.5">
                      Materials
                    </span>
                    <p className="font-sans text-[16px] font-normal text-forge-text">
                      {product.materials}
                    </p>
                  </div>
                  <div className="flex items-start gap-6 py-4 border-b border-forge-text/10">
                    <span className="font-sans text-[12px] font-normal tracking-[0.1em] uppercase text-forge-text w-24 shrink-0 pt-0.5">
                      Dimensions
                    </span>
                    <p className="font-sans text-[16px] font-normal text-forge-text">
                      {product.dimensions}
                    </p>
                  </div>
                  <div className="flex items-start gap-6 py-4 border-b border-forge-text/10">
                    <span className="font-sans text-[12px] font-normal tracking-[0.1em] uppercase text-forge-text w-24 shrink-0 pt-0.5">
                      Care
                    </span>
                    <p className="font-sans text-[16px] font-normal text-forge-text">
                      {product.care}
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* The Making */}
              {product.process_note && (
                <ScrollReveal delay={375}>
                  <div className="mb-6">
                    <div className="border-b border-forge-text/10 mb-4" />
                    <p className="font-sans text-[12px] font-normal tracking-[0.15em] uppercase text-forge-text mb-3">
                      The Making
                    </p>
                    <p className="font-serif italic text-[18px] font-normal leading-[1.8] text-forge-text">
                      {product.process_note}
                    </p>
                  </div>
                </ScrollReveal>
              )}

              {/* Status signal + Add to Cart — desktop */}
              <ScrollReveal delay={400}>
                <p className="font-sans text-[12px] font-normal tracking-[0.1em] uppercase text-[#A0785A] mb-4">
                  {product.status === "ready_to_ship" && "Ready to ship — 2 business days"}
                  {product.status === "ready_to_ship_low" && (
                    product.stockRemaining != null
                      ? `Only ${product.stockRemaining} remaining`
                      : "Almost gone"
                  )}
                  {product.status === "ready_to_ship_sold_out" && "Sold out"}
                  {product.status === "made_to_order" && (
                    product.leadTime
                      ? `Made to order — ships in ${product.leadTime}`
                      : "Made to order"
                  )}
                  {product.status === "made_to_order_sold_out" && "Made to order — currently unavailable"}
                  {product.status === "coming_soon" && "Coming soon"}
                </p>

                {isDisabled ? (
                  <div>
                    <button disabled className="hidden lg:inline-flex items-center justify-center w-full md:w-auto px-12 py-[18px] bg-forge-text/40 text-forge-paper font-sans text-[14px] font-normal tracking-[0.1em] uppercase cursor-not-allowed">
                      {isComingSoon ? "Coming soon" : "Sold out"}
                    </button>
                    {product.status === "ready_to_ship_sold_out" && product.notifyWhenAvailable && (
                      <Link
                        href="mailto:orders@form-element.com"
                        className="hidden lg:block mt-3 font-sans text-[13px] font-normal tracking-[0.05em] text-[#A0785A] hover:text-forge-text transition-colors duration-300"
                      >
                        Notify me when available &rarr;
                      </Link>
                    )}
                  </div>
                ) : (
                  <button className="hidden lg:inline-flex items-center justify-center w-full md:w-auto px-12 py-[18px] bg-forge-text text-forge-paper font-sans text-[14px] font-normal tracking-[0.1em] uppercase cursor-pointer transition-all duration-400 hover:bg-[#3a3530]">
                    Add to cart
                  </button>
                )}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Add to Cart — mobile/tablet only */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-forge-paper/95 backdrop-blur-md border-t border-forge-text/10 px-6 py-4">
        {isDisabled ? (
          <div>
            <button disabled className="w-full py-[18px] bg-forge-text/40 text-forge-paper font-sans text-[14px] font-normal tracking-[0.1em] uppercase cursor-not-allowed">
              {isComingSoon ? "Coming soon" : "Sold out"}
            </button>
            {product.status === "ready_to_ship_sold_out" && product.notifyWhenAvailable && (
              <Link
                href="mailto:orders@form-element.com"
                className="block text-center mt-2 font-sans text-[13px] font-normal tracking-[0.05em] text-[#A0785A]"
              >
                Notify me when available &rarr;
              </Link>
            )}
          </div>
        ) : (
          <button className="w-full py-[18px] bg-forge-text text-forge-paper font-sans text-[14px] font-normal tracking-[0.1em] uppercase cursor-pointer transition-all duration-400 hover:bg-[#3a3530]">
            Add to cart &mdash; {formatPrice(product.price, product.currency)}
          </button>
        )}
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

            {/* Mobile: 2-col grid */}
            <div className="md:hidden">
              <div className="grid grid-cols-2 gap-3">
                {moreFromMaker.slice(0, 3).map((p) => (
                  <div key={p.slug}>
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
