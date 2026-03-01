import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery — The Forge",
  description:
    "The work, the process, the studio. A visual journey through the hands of our makers.",
};

export default function GalleryPage() {
  return (
    <>
      <Navigation />

      {/* Header */}
      <section className="bg-forge-paper pt-32 md:pt-40 pb-10 md:pb-14 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.2] text-forge-text mb-4">
              Gallery
            </h1>
            <p className="font-sans text-[18px] font-light leading-[1.9] text-forge-text/70">
              The work, the process, the studio. Click anything that stops you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="bg-forge-paper pb-24 md:pb-32 px-[5px] md:px-4 lg:px-6">
        <GalleryGrid items={galleryItems} />
      </section>

      <Footer />
    </>
  );
}
