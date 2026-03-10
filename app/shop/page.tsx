import { Metadata } from "next";
import ShopPageContent from "@/components/ShopPageContent";

export const metadata: Metadata = {
  title: "Shop Handmade Objects",
  description:
    "Handmade ceramics, glass, wood and textile objects by independent studio makers. Made to order and ready to ship.",
};

export default function ShopPage() {
  return <ShopPageContent />;
}
