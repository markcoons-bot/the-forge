import Link from "next/link";
import Image from "next/image";
import HeroVideo from "@/components/HeroVideo";
import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";
import ProductShowcase from "@/components/ProductShowcase";
import StudioFeed from "@/components/StudioFeed";
import Footer from "@/components/Footer";
import { getHomepageMakers } from "@/data/makers";
import { getProductsByMaker } from "@/data/products";
import {
  SECTION_LABEL,
  SECTION_LABEL_DARK,
} from "@/lib/typography";

export default function Home() {
  const homepageMakers = getHomepageMakers();

  return (
    <>
      <Navigation />

      {/* ═══════════════════════════════════════════════
          ACT ONE — Cold Open
          ═══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-10 overflow-hidden">
        {/* Hero video */}
        <HeroVideo />
        <div className="absolute inset-0 bg-forge-dark/70" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-shadow-hero">
          <ScrollReveal immediate delay={100}>
            <h1
              className="font-serif font-light leading-[1.15] tracking-[-0.01em] text-forge-paper mb-3"
              style={{ fontSize: "clamp(36px, 5.5vw, 72px)" }}
            >
              Everything here was made{" "}
              <em className="italic">by hand.</em>
            </h1>
          </ScrollReveal>
          <ScrollReveal immediate delay={250}>
            <p
              className="font-serif italic font-light text-forge-paper/90 mb-8"
              style={{ fontSize: "clamp(16px, 2.5vw, 24px)" }}
            >
              A curated marketplace for handmade objects and the people who make them.
            </p>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <ScrollReveal variant="fade-in" immediate delay={1000} className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className={`${SECTION_LABEL} text-forge-paper/50`}>
            Scroll
          </span>
          <div className="w-px h-12 bg-forge-paper/20 animate-scroll-line" />
        </ScrollReveal>
      </section>

      {/* ═══════════════════════════════════════════════
          STATEMENT + PRODUCT SHOWCASE — warm paper zone
          ═══════════════════════════════════════════════ */}
      {/*
        SAVED FOR LATER USE (e.g. About page):
        "What is the most beautiful thing you have ever ruined?"
        Sub-line: "Toil. Frustration. Mistakes. That ultimately craft the work."
      */}
      <section className="bg-forge-paper pt-16 md:pt-24">
        <div className="text-center px-6 md:px-10">
          <ScrollReveal>
            <p className="font-serif text-[20px] md:text-[26px] font-light italic leading-[1.8] text-forge-text/[0.7] max-w-2xl mx-auto mb-12 md:mb-16">
              By someone who chose this life. Who chose time over speed. Who works
              with clay from dirt, glass from sand and heat, wood from trees that
              lived longer than the maker.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <p className="font-serif text-[32px] md:text-[52px] font-normal leading-[1.2] text-forge-text">
              The work speaks for itself.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="fade-in">
          <div className="flex justify-center py-12">
            <div className="w-20 h-px bg-forge-text/20" />
          </div>
        </ScrollReveal>

        <ProductShowcase />

        <ScrollReveal variant="fade-in">
          <nav className="flex items-center justify-center gap-4 md:gap-6 pt-2 md:pt-4 pb-14 md:pb-20">
            <Link href="/shop" className="font-mono text-[13px] font-normal tracking-[0.15em] uppercase text-forge-text/75 hover:text-[#A0785A] transition-colors duration-300">
              Browse the Shop &rarr;
            </Link>
            <span className="text-forge-text/20 text-[13px]">&middot;</span>
            <Link href="/gallery" className="font-mono text-[13px] font-normal tracking-[0.15em] uppercase text-forge-text/75 hover:text-[#A0785A] transition-colors duration-300">
              Explore the Gallery &rarr;
            </Link>
            <span className="text-forge-text/20 text-[13px]">&middot;</span>
            <Link href="/makers" className="font-mono text-[13px] font-normal tracking-[0.15em] uppercase text-forge-text/75 hover:text-[#A0785A] transition-colors duration-300">
              Meet the Makers &rarr;
            </Link>
          </nav>
        </ScrollReveal>
      </section>

      {/* ═══════════════════════════════════════════════
          THE MAKERS — portrait cards
          ═══════════════════════════════════════════════ */}
      <section id="makers">
        <ScrollReveal variant="fade-in" className="text-center py-10">
          <span className={`${SECTION_LABEL_DARK} label-line`}>
            The Makers
          </span>
        </ScrollReveal>

        <div className="flex flex-col gap-[2px]">
          {homepageMakers.map((maker, index) => {
            const makerProducts = getProductsByMaker(maker.slug).slice(0, 3);

            return (
              <Link
                key={maker.slug}
                href={`/makers/${maker.slug}`}
                className="group relative block"
                style={{ height: "82vh", minHeight: "500px" }}
              >
                {/* Portrait background */}
                <div
                  className="absolute inset-0"
                  style={{ background: maker.portraitGradient }}
                />
                <Image
                  src={maker.portraitImage}
                  alt={`${maker.name} at work in the studio, ${maker.medium.toLowerCase()}, ${maker.location}`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={index < 2}
                />
                <div className="maker-portrait-overlay absolute inset-0" />

                {/* Content */}
                <div
                  className={`relative z-10 h-full flex flex-col justify-end p-5 md:p-16 pb-10 md:pb-16 text-shadow-image ${
                    index % 2 === 0 ? "items-start" : "items-start md:items-end"
                  }`}
                >
                  <ScrollReveal delay={index * 150}>
                    <div className={`max-w-xl ${index % 2 === 0 ? "" : "md:text-right"}`}>
                      <p className={`${SECTION_LABEL} text-forge-paper/75 mb-4`}>
                        {maker.medium} &mdash; {maker.location}
                      </p>
                      <blockquote className="font-serif text-[24px] md:text-[38px] font-light italic leading-[1.3] text-forge-paper mb-6">
                        &ldquo;{maker.quote}&rdquo;
                      </blockquote>
                      <div className="flex items-center gap-4">
                        <span className="font-sans text-[18px] md:text-[24px] font-normal text-white">
                          {maker.name}
                        </span>
                        <span className="font-sans text-[14px] font-normal tracking-[0.04em] text-forge-paper/70 group-hover:text-forge-paper transition-all duration-500 ease-forge">
                          Enter studio &rarr;
                        </span>
                      </div>

                      {/* Product thumbnails */}
                      {makerProducts.length > 0 && (
                        <div className={`hidden md:flex gap-3 mt-5 ${index % 2 === 0 ? "" : "md:justify-end"}`}>
                          {makerProducts.map((product) => (
                            <div
                              key={product.slug}
                              className="relative w-16 h-20 md:w-20 md:h-24 overflow-hidden opacity-70 group-hover:opacity-100 transition-opacity duration-500 ring-1 ring-white/20"
                            >
                              <div
                                className="absolute inset-0"
                                style={{ background: product.bgGradient }}
                              />
                              <Image
                                src={product.image}
                                alt={`${product.name} by ${maker.name} — handmade ${maker.medium.toLowerCase()}`}
                                fill
                                className="object-cover"
                                sizes="96px"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </ScrollReveal>
                </div>
              </Link>
            );
          })}
        </div>

      </section>

      {/* Transition — after maker portraits */}
      <section className="bg-forge-paper pt-14 md:pt-20 pb-7 md:pb-10 px-6 md:px-10">
        <ScrollReveal variant="fade-in" className="text-center">
          <p className="font-serif text-[26px] font-normal italic leading-[1.4] text-forge-text/[0.85] mb-6">
            Every maker here was invited. Every object was chosen.
          </p>
          <Link
            href="/shop"
            className="font-sans text-[15px] font-light text-forge-text/60 hover:text-forge-text hover:underline underline-offset-4 transition-all duration-300"
          >
            Shop the collection &rarr;
          </Link>
        </ScrollReveal>
      </section>

      {/*
        SAVED FOR LATER USE:
        "In a world that chose speed, they chose time."
      */}

      {/* Divider — before studios */}
      <div className="bg-forge-paper flex justify-center">
        <div className="w-20 h-px bg-forge-text/[0.12]" />
      </div>

      {/* ═══════════════════════════════════════════════
          FROM THE STUDIOS
          ═══════════════════════════════════════════════ */}
      <StudioFeed />

      <Footer />
    </>
  );
}
