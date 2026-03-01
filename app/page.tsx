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
  QUOTE_LARGE,
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
              className="font-serif font-light leading-[1.15] tracking-[-0.01em] text-forge-paper mb-8"
              style={{ fontSize: "clamp(36px, 5.5vw, 72px)" }}
            >
              Everything here was made{" "}
              <em className="italic">by hand.</em>
            </h1>
          </ScrollReveal>
          <ScrollReveal immediate delay={400}>
            <p className="font-sans text-[18px] font-light leading-[1.9] text-forge-paper/80 max-w-2xl mx-auto">
              By someone who chose this life. Who chose time over speed. Who works
              with clay from dirt, glass from sand and heat, wood from trees that
              lived longer than the maker.
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
          THE QUESTION — cinematic image moment
          ═══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-10 overflow-hidden">
        <Image
          src="/images/FGProcess2.webp"
          alt="Pottery studio — shelves of handmade ceramics"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55))" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <blockquote
              className="font-serif text-[30px] md:text-[44px] font-light italic leading-[1.3] text-forge-paper"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
            >
              &ldquo;What is the most beautiful thing you have ever ruined?&rdquo;
            </blockquote>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p
              className="font-sans text-[18px] font-light leading-[1.6] text-forge-paper/80 mt-6 max-w-md mx-auto"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
            >
              Toil. Frustration. Mistakes. That ultimately craft the work.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          TRANSITION — Question to Makers
          ═══════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 px-6 md:px-10">
        <ScrollReveal variant="fade-in" className="text-center">
          <p className="font-serif text-[28px] md:text-[32px] font-light italic leading-[1.3] text-forge-paper/[0.88]">
            These are the people who know.
          </p>
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
                  alt={`${maker.name} — ${maker.medium}`}
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
                  <ScrollReveal delay={100}>
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
                                alt={product.name}
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

        {/* Transition — after maker portraits */}
        <div className="py-10 md:py-14 px-6 md:px-10">
          <ScrollReveal variant="fade-in" className="text-center">
            <p className="font-serif text-[26px] font-light italic leading-[1.4] text-forge-paper/[0.88] mb-6">
              Every maker here was invited. Every object was chosen.
            </p>
            <Link
              href="/makers"
              className="font-sans text-[15px] font-light text-forge-paper/70 hover:text-forge-paper hover:underline underline-offset-4 transition-all duration-300"
            >
              See all makers &rarr;
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PRODUCT SHOWCASE — horizontal scroll strip
          ═══════════════════════════════════════════════ */}
      <ProductShowcase />

      {/* ═══════════════════════════════════════════════
          CLOSING
          ═══════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-6 md:px-10">
        <ScrollReveal variant="fade-in" className="max-w-3xl mx-auto text-center">
          <blockquote className={`${QUOTE_LARGE} text-forge-paper/90`}>
            &ldquo;In a world that chose speed, they chose time.&rdquo;
          </blockquote>
        </ScrollReveal>
      </section>

      {/* ═══════════════════════════════════════════════
          FROM THE STUDIOS
          ═══════════════════════════════════════════════ */}
      <StudioFeed />

      <Footer />
    </>
  );
}
