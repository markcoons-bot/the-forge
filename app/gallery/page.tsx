import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";
import { galleryItems, GalleryItem } from "@/data/gallery";
import { fetchAllMakers, fetchAllProducts } from "@/sanity/lib/fetchers";

export const metadata: Metadata = {
  title: "From the Studios — A Gallery of Making",
  description:
    "Process, objects, and studio life from the makers of Form & Element.",
};

function shuffle<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function formatPrice(price: number, currency: string): string {
  const symbols: Record<string, string> = { USD: "$", GBP: "£", EUR: "€" };
  return `${symbols[currency] || currency}${price.toLocaleString()}`;
}

export default async function GalleryPage() {
  const [makers, products] = await Promise.all([
    fetchAllMakers(),
    fetchAllProducts(),
  ]);

  // Build dynamic gallery items from Sanity data (with local fallback)
  const items: GalleryItem[] = [];
  const seen = new Set<string>();

  // Maker portraits → studio tiles
  for (const maker of makers) {
    if (maker.portraitImage && !seen.has(maker.portraitImage)) {
      seen.add(maker.portraitImage);
      items.push({
        id: `dyn-${maker.slug}-portrait`,
        src: maker.portraitImage,
        maker: maker.name,
        medium: maker.medium,
        makerSlug: maker.slug,
        type: "studio",
        aspect: "3/4",
      });
    }
    // Story / studio images → process tiles
    for (const img of maker.storyImages || []) {
      if (!seen.has(img)) {
        seen.add(img);
        items.push({
          id: `dyn-${maker.slug}-story-${seen.size}`,
          src: img,
          maker: maker.name,
          medium: maker.medium,
          makerSlug: maker.slug,
          type: "process",
          aspect: "4/3",
        });
      }
    }
  }

  // Product images → product tiles
  for (const product of products) {
    const maker = makers.find((m) => m.slug === product.makerSlug);
    if (product.image && !seen.has(product.image)) {
      seen.add(product.image);
      items.push({
        id: `dyn-product-${product.slug}`,
        src: product.image,
        maker: maker?.name || "",
        medium: maker?.medium || "",
        makerSlug: product.makerSlug,
        type: "product",
        aspect: "3/4",
        productName: product.name,
        productPrice: formatPrice(product.price, product.currency),
        productSlug: product.slug,
      });
    }
    // Gallery / alternate images → extra product tiles
    for (const img of [...(product.galleryImages || []), ...(product.alternateImages || [])]) {
      if (!seen.has(img)) {
        seen.add(img);
        items.push({
          id: `dyn-product-${product.slug}-${seen.size}`,
          src: img,
          maker: maker?.name || "",
          medium: maker?.medium || "",
          makerSlug: product.makerSlug,
          type: "product",
          aspect: "4/3",
          productName: product.name,
          productSlug: product.slug,
        });
      }
    }
  }

  // Fill in any local-only gallery items not already covered
  for (const local of galleryItems) {
    if (!seen.has(local.src)) {
      seen.add(local.src);
      items.push(local);
    }
  }

  const shuffled = shuffle(items);

  return (
    <>
      <Navigation />

      {/* Header */}
      <section className="pt-32 md:pt-40 pb-10 md:pb-14 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h1 className="font-serif text-[32px] md:text-[44px] font-normal leading-[1.2] text-forge-paper mb-4">
              Gallery
            </h1>
            <p className="font-serif text-[18px] font-normal leading-[1.8] text-forge-paper">
              Form, process, studio. Click anything that stops you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="pb-12 px-[5px] md:px-4 lg:px-6">
        <GalleryGrid items={shuffled} />
      </section>

      <Footer />
    </>
  );
}
