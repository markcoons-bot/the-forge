import Link from "next/link";
import Image from "next/image";
import HeroVideo from "@/components/HeroVideo";
import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";
import ProductCard from "@/components/ProductCard";
import StudioFeed from "@/components/StudioFeed";
import Footer from "@/components/Footer";
import { makers } from "@/data/makers";
import { products, getProductsByMaker } from "@/data/products";
import {
  H2_SECTION,
  BODY_LIGHT,
  QUOTE_LARGE,
  SECTION_LABEL,
  SECTION_LABEL_DARK,
  SECTION_LABEL_LIGHT,
  NAV_LINK,
} from "@/lib/typography";

export default function Home() {
  const featuredProducts = products.slice(0, 6);

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
          <h1
            className="font-serif font-light leading-[1.15] tracking-[-0.01em] text-forge-paper mb-8"
            style={{ fontSize: "clamp(36px, 5.5vw, 72px)" }}
          >
            Everything here was made{" "}
            <em className="italic">by hand.</em>
          </h1>
          <p className="font-sans text-[18px] font-light leading-[1.9] text-forge-paper/80 max-w-2xl mx-auto">
            By someone who chose this life. Who chose time over speed. Who works
            with clay from dirt, lumber from trees, metal from fire, glass from
            sand and heat.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className={`${SECTION_LABEL} text-[10px] text-forge-paper/40`}>
            Scroll
          </span>
          <div className="w-px h-12 bg-forge-paper/20 animate-scroll-line" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          THE QUESTION
          ═══════════════════════════════════════════════ */}
      <section className="bg-forge-paper py-24 md:py-36 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <blockquote className={`${QUOTE_LARGE} text-forge-text`}>
              &ldquo;What is the most beautiful thing you have ever ruined?&rdquo;
            </blockquote>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="font-sans text-[20px] font-light leading-[1.6] text-forge-text/70 mt-6 max-w-md mx-auto tracking-wide">
              Toil. Frustration. Mistakes. That ultimately craft <em className="italic">the work.</em>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          TRANSITION — Question to Makers
          ═══════════════════════════════════════════════ */}
      <section className="py-20 md:py-20 px-6 md:px-10">
        <ScrollReveal className="text-center">
          <p className="font-serif text-[22px] md:text-[24px] font-light italic leading-[1.3] text-forge-paper/70">
            These are the people who know.
          </p>
        </ScrollReveal>
      </section>

      {/* ═══════════════════════════════════════════════
          ACT TWO — The Makers
          ═══════════════════════════════════════════════ */}
      <section id="makers">
        <ScrollReveal className="text-center py-10">
          <span className={`${SECTION_LABEL_DARK} label-line`}>
            The Makers
          </span>
        </ScrollReveal>

        <div className="flex flex-col gap-[2px]">
          {makers.map((maker, index) => {
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
                  className={`relative z-10 h-full flex flex-col justify-end p-8 md:p-16 text-shadow-image ${
                    index % 2 === 0 ? "items-start" : "items-start md:items-end"
                  }`}
                >
                  <div className={`max-w-xl ${index % 2 === 0 ? "" : "md:text-right"}`}>
                    <p className={`${SECTION_LABEL} text-[12px] tracking-[0.15em] text-forge-paper mb-4`}>
                      {maker.medium} &mdash; {maker.location}
                    </p>
                    <blockquote className="font-serif text-[32px] md:text-[38px] font-light italic leading-[1.3] text-forge-paper mb-6">
                      &ldquo;{maker.quote}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <span className="font-sans text-[22px] md:text-[24px] font-normal text-white">
                        {maker.name}
                      </span>
                      <span className="font-mono text-[13px] tracking-[0.05em] text-forge-paper/70 group-hover:text-forge-paper transition-all duration-500 ease-forge">
                        Enter studio &rarr;
                      </span>
                    </div>

                    {/* Product thumbnails */}
                    {makerProducts.length > 0 && (
                      <div className={`flex gap-3 mt-5 ${index % 2 === 0 ? "" : "md:justify-end"}`}>
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
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          ACT THREE — Why We Built This
          ═══════════════════════════════════════════════ */}
      <section className="bg-forge-paper py-24 md:py-36 px-6 md:px-10">
        <div className="max-w-prose mx-auto">
          <ScrollReveal>
            <h2 className={`${H2_SECTION} text-forge-text mb-12`}>
              Every object here has a maker, a method, and a reason it exists.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className={`${BODY_LIGHT} mb-8`}>
              This is a marketplace. But not the kind you&apos;re used to. No algorithm
              decides what you see. No discount banner interrupts the work. No
              infinite scroll of <em className="italic">indistinguishable options</em>. Just makers, their
              objects, and the stories that connect them.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className={`${BODY_LIGHT} mb-8`}>
              The materials here are elemental. Clay pulled from the ground,
              shaped on a wheel, and <em className="italic">transformed by fire</em>. Lumber salvaged from
              trees that lived longer than the maker. Metal heated until it
              glows, then bent to a will that took decades to develop. Glass
              gathered as a molten drop and blown into form with <em className="italic">a single breath</em>.
              Thread spun from wool that grew on an animal, dyed with plants
              foraged from a hillside.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className={`${BODY_LIGHT} mb-8`}>
              Every object here represents years of practice. Decades, in most
              cases. And if you asked the maker, they would tell you <em className="italic">it could
              always be better</em>. That the glaze didn&apos;t break the way they
              imagined. That the joint isn&apos;t as tight as last time. That the
              color shifted in the kiln, or the wood moved overnight, or the
              glass had a mind of its own. Working with raw materials, it&apos;s
              almost never perfect.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="font-serif text-2xl md:text-3xl font-light italic text-forge-text/60 leading-[1.3] mt-12">
              Perfectly imperfect.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          DIVIDER
          ═══════════════════════════════════════════════ */}
      <div className="py-4 flex justify-center">
        <div className="w-10 h-px bg-forge-paper/20" />
      </div>

      {/* ═══════════════════════════════════════════════
          THE SHOP Preview
          ═══════════════════════════════════════════════ */}
      <section className="bg-forge-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16 md:mb-20">
              <span className={`${SECTION_LABEL_LIGHT} label-line mb-4`}>
                The Shop
              </span>
              <h2 className={`${H2_SECTION} text-forge-text`}>
                Objects worth owning
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {featuredProducts.map((product, index) => (
              <ScrollReveal key={product.slug} delay={index * 100}>
                <ProductCard product={product} variant="light" />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-16 md:mt-20">
            <Link
              href="/shop"
              className={`inline-flex items-center gap-2 ${NAV_LINK} text-forge-text/60 hover:text-forge-text transition-colors duration-300`}
            >
              View all objects <span>&rarr;</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CLOSING
          ═══════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-6 md:px-10">
        <ScrollReveal className="max-w-3xl mx-auto text-center">
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
