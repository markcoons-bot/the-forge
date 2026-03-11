import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "From the Studios — A Gallery of Making",
  description:
    "Process, objects, and studio life from the makers of Form & Element.",
};

export default function GalleryPage() {
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
        <GalleryGrid items={galleryItems} />
      </section>

      <Footer />
    </>
  );
}
