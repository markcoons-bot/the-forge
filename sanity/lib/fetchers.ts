import { client } from "./client";
import { urlFor } from "./image";
import {
  allMakersQuery,
  makerBySlugQuery,
  featuredMakersQuery,
  allProductsQuery,
  productBySlugQuery,
  productsByMakerQuery,
} from "./queries";
import type { Maker } from "@/data/makers";
import type { Product } from "@/data/products";

// Local data as fallback
import { makers as localMakers, getMaker as localGetMaker, getHomepageMakers as localGetHomepageMakers } from "@/data/makers";
import { products as localProducts, getProduct as localGetProduct, getProductsByMaker as localGetProductsByMaker } from "@/data/products";

// ── Sanity response types ─────────────────────────────────────

interface SanityMaker {
  _id: string;
  name: string;
  slug: string;
  medium: string;
  location: string;
  quote: string;
  bio: string;
  featured: boolean;
  portrait?: any;
  studioImages?: any[];
  products?: SanityProduct[];
}

interface SanityProduct {
  _id: string;
  title: string;
  slug: string;
  price: number;
  status: string;
  medium: string;
  image?: any;
  gallery?: any[];
  curator_note: string;
  process_note?: string;
  materials?: string;
  dimensions?: string;
  care?: string;
  stock_status?: string;
  stock_remaining?: number;
  lead_time?: string;
  notify_when_available?: boolean;
  featured: boolean;
  maker?: {
    _id: string;
    name: string;
    slug: string;
    medium: string;
    location: string;
    quote?: string;
    bio?: string;
    portrait?: any;
  };
}

// ── Mappers ───────────────────────────────────────────────────

function capitalizeMedium(m: string): "Clay" | "Wood" | "Metal" | "Glass" | "Leather" | "Stone" | "Fiber" {
  const map: Record<string, any> = { clay: "Clay", glass: "Glass", wood: "Wood" };
  return map[m] || (m.charAt(0).toUpperCase() + m.slice(1)) as any;
}

function mapSanityMakerToLocal(sm: SanityMaker): Maker {
  // Find matching local maker for image fallback
  const local = localMakers.find((m) => m.slug === sm.slug);

  // Resolve portrait image: Sanity first, then local fallback
  const portraitImage = sm.portrait
    ? urlFor(sm.portrait).width(800).url()
    : local?.portraitImage || "";

  // Resolve studio/story images: Sanity first, then local fallback
  const storyImages = sm.studioImages && sm.studioImages.length > 0
    ? sm.studioImages.map((img: any) => urlFor(img).width(1200).url())
    : local?.storyImages || [];

  return {
    slug: sm.slug,
    name: sm.name,
    medium: capitalizeMedium(sm.medium),
    location: sm.location,
    quote: sm.quote,
    // Map bio back to story array (paragraphs split by double newlines)
    story: sm.bio ? sm.bio.split(/\n\n+/) : local?.story || [],
    pullQuote: local?.pullQuote || "",
    method: local?.method || [],
    materials: local?.materials || "",
    accentColor: local?.accentColor || "#888",
    portraitGradient: local?.portraitGradient || "linear-gradient(145deg, #333 0%, #222 100%)",
    portraitImage,
    storyImages,
    // Carry forward all local-only fields
    ...(local?.profileHeroImage && { profileHeroImage: local.profileHeroImage }),
    ...(local?.storyImagePositions && { storyImagePositions: local.storyImagePositions }),
    ...(local?.storyImageCaptions && { storyImageCaptions: local.storyImageCaptions }),
    ...(local?.materialsImage && { materialsImage: local.materialsImage }),
    ...(local?.materialsCaption && { materialsCaption: local.materialsCaption }),
    ...(local?.openingStatement && { openingStatement: local.openingStatement }),
    ...(local?.bio && { bio: local.bio }),
    ...(local?.profileIntro && { profileIntro: local.profileIntro }),
    ...(local?.craft && { craft: local.craft }),
    ...(local?.storyLayout && { storyLayout: local.storyLayout }),
    homepage: sm.featured ?? local?.homepage,
  };
}

function statusDisplay(status: string): "Ready to Ship" | "Made to Order" {
  return status === "made_to_order" ? "Made to Order" : "Ready to Ship";
}

function mapSanityProductToLocal(sp: SanityProduct): Product {
  const local = localProducts.find((p) => p.slug === sp.slug);

  // Resolve product image: Sanity first, then local fallback
  const image = sp.image
    ? urlFor(sp.image).width(800).url()
    : local?.image || "";

  return {
    slug: sp.slug,
    name: sp.title,
    makerSlug: sp.maker?.slug || local?.makerSlug || "",
    price: sp.price,
    currency: local?.currency || "USD",
    status: statusDisplay(sp.status),
    ...(sp.lead_time && { leadTime: sp.lead_time }),
    ...(!sp.lead_time && local?.leadTime && { leadTime: local.leadTime }),
    curatorNote: sp.curator_note || local?.curatorNote || "",
    materials: sp.materials || local?.materials || "",
    dimensions: sp.dimensions || local?.dimensions || "",
    care: sp.care || local?.care || "",
    bgGradient: local?.bgGradient || "linear-gradient(145deg, #888 0%, #666 100%)",
    image,
    ...(local?.alternateImages && { alternateImages: local.alternateImages }),
    ...(sp.gallery && sp.gallery.length > 0 && {
      galleryImages: sp.gallery.map((img: any) => urlFor(img).width(1200).url()),
    }),
    ...(sp.process_note && { process_note: sp.process_note }),
    ...(!sp.process_note && local?.process_note && { process_note: local.process_note }),
    stockStatus: (sp.stock_status as Product["stockStatus"]) || local?.stockStatus || "available",
    ...(sp.stock_remaining != null && { stockRemaining: sp.stock_remaining }),
    ...(sp.stock_remaining == null && local?.stockRemaining != null && { stockRemaining: local.stockRemaining }),
    ...(sp.notify_when_available != null && { notifyWhenAvailable: sp.notify_when_available }),
  };
}

// ── Public fetchers ───────────────────────────────────────────

export async function fetchAllMakers(): Promise<Maker[]> {
  try {
    const sanityMakers: SanityMaker[] = await client.fetch(allMakersQuery);
    if (sanityMakers && sanityMakers.length > 0) {
      return sanityMakers.map(mapSanityMakerToLocal);
    }
  } catch (e) {
    console.warn("Sanity fetch failed for allMakers, using local data:", e);
  }
  return localMakers;
}

export async function fetchMakerBySlug(slug: string): Promise<Maker | undefined> {
  try {
    const sm: SanityMaker | null = await client.fetch(makerBySlugQuery, { slug });
    if (sm) return mapSanityMakerToLocal(sm);
  } catch (e) {
    console.warn(`Sanity fetch failed for maker "${slug}", using local data:`, e);
  }
  return localGetMaker(slug);
}

export async function fetchHomepageMakers(): Promise<Maker[]> {
  try {
    const sanityMakers: SanityMaker[] = await client.fetch(featuredMakersQuery);
    if (sanityMakers && sanityMakers.length > 0) {
      const mapped = sanityMakers.map(mapSanityMakerToLocal);
      // Preserve the homepage order from local data
      const order = ["nathan-coons", "hana-miura", "florian-gadsby"];
      return order
        .map((slug) => mapped.find((m) => m.slug === slug))
        .filter((m): m is Maker => m !== undefined);
    }
  } catch (e) {
    console.warn("Sanity fetch failed for featuredMakers, using local data:", e);
  }
  return localGetHomepageMakers();
}

export async function fetchAllProducts(): Promise<Product[]> {
  try {
    const sanityProducts: SanityProduct[] = await client.fetch(allProductsQuery);
    if (sanityProducts && sanityProducts.length > 0) {
      return sanityProducts.map(mapSanityProductToLocal);
    }
  } catch (e) {
    console.warn("Sanity fetch failed for allProducts, using local data:", e);
  }
  return localProducts;
}

export async function fetchProductBySlug(slug: string): Promise<Product | undefined> {
  try {
    const sp: SanityProduct | null = await client.fetch(productBySlugQuery, { slug });
    if (sp) return mapSanityProductToLocal(sp);
  } catch (e) {
    console.warn(`Sanity fetch failed for product "${slug}", using local data:`, e);
  }
  return localGetProduct(slug);
}

export async function fetchProductsByMaker(makerSlug: string): Promise<Product[]> {
  try {
    const sanityProducts: SanityProduct[] = await client.fetch(productsByMakerQuery, { makerSlug });
    if (sanityProducts && sanityProducts.length > 0) {
      return sanityProducts.map(mapSanityProductToLocal);
    }
  } catch (e) {
    console.warn(`Sanity fetch failed for products by maker "${makerSlug}", using local data:`, e);
  }
  return localGetProductsByMaker(makerSlug);
}

// Re-export Maker type for convenience
export type { Maker } from "@/data/makers";
export type { Product } from "@/data/products";
