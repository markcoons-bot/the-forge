import { Metadata } from "next";
import ShopPageContent from "@/components/ShopPageContent";
import { fetchAllProducts, fetchAllMakers } from "@/sanity/lib/fetchers";

export const metadata: Metadata = {
  title: "Shop Handmade Objects",
  description:
    "Handmade ceramics, glass, wood and textile objects by independent studio makers. Made to order and ready to ship.",
};

export default async function ShopPage() {
  const [products, makers] = await Promise.all([
    fetchAllProducts(),
    fetchAllMakers(),
  ]);

  return <ShopPageContent products={products} makers={makers} />;
}
