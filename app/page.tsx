import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";
import ProductCard from "@/components/ProductCard";
import StudioFeed from "@/components/StudioFeed";
import Footer from "@/components/Footer";
import { makers } from "@/data/makers";
import { products } from "@/data/products";

export default function Home() {
  const featuredProducts = products.slice(0, 6);

  return (
    <>
      <Navigation />

      {/* ═══════════════════════════════════════════════
          ACT ONE — Cold Open
          ═══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-10 overflow-hidden">
        {/* Hero image */}
        <Image
          src="https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=1920&q=80"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-forge-dark/60" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-[1.15] tracking-[-0.01em] text-forge-paper mb-8">
            Everything here was made{" "}
            <em className="italic">by hand.</em>
          </h1>
          <p className="font-sans text-[17px] md:text-lg font-extralight leading-relaxed text-forge-paper/[0.8] max-w-2xl mx-auto">
            By someone who chose this life. Who chose time over speed. Who works
            with clay from dirt, lumber from trees, metal from fire, glass from
            sand and heat.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-forge-paper/30">
            Scroll
          </span>
          <div className="w-px h-12 bg-forge-accent/30 animate-scroll-line" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          THE QUESTION
          ═══════════════════════════════════════════════ */}
      <section className="py-32 md:py-48 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <blockquote className="font-serif text-3xl md:text-5xl font-light italic leading-[1.3] text-forge-accent">
              &ldquo;What is the most beautiful thing you have ever ruined?&rdquo;
            </blockquote>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="font-sans text-[15px] font-extralight text-forge-paper/70 mt-8 max-w-md mx-auto">
              Toil. Frustration. Mistakes. That ultimately craft beauty.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          ACT TWO — The Makers
          ═══════════════════════════════════════════════ */}
      <section>
        <ScrollReveal className="text-center py-16">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-forge-accent/70">
            The Makers
          </span>
        </ScrollReveal>

        <div className="flex flex-col gap-[2px]">
          {makers.map((maker, index) => (
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
                className={`relative z-10 h-full flex flex-col justify-end p-8 md:p-16 ${
                  index % 2 === 0 ? "items-start" : "items-start md:items-end"
                }`}
              >
                <div className={`max-w-xl ${index % 2 === 0 ? "" : "md:text-right"}`}>
                  <p className="font-mono text-[11px] tracking-[0.15em] uppercase mb-4" style={{ color: maker.accentColor }}>
                    {maker.medium} &mdash; {maker.location}
                  </p>
                  <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl font-light italic leading-[1.3] text-forge-paper/90 mb-6">
                    &ldquo;{maker.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <span className="font-sans text-[19px] font-light text-white">
                      {maker.name}
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.05em] text-forge-paper/0 group-hover:text-forge-accent transition-all duration-500 ease-forge">
                      Enter studio &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          ACT THREE — Why We Built This
          ═══════════════════════════════════════════════ */}
      <section className="bg-forge-paper py-32 md:py-48 px-6 md:px-10">
        <div className="max-w-prose mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl font-light leading-[1.3] text-forge-text mb-12">
              Every object here has a maker, a method, and a reason it exists.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="font-sans text-[17px] font-light leading-[2] text-forge-text/[0.85] mb-8">
              This is a marketplace. But not the kind you&apos;re used to. No algorithm
              decides what you see. No discount banner interrupts the work. No
              infinite scroll of <em className="italic">indistinguishable options</em>. Just makers, their
              objects, and the stories that connect them.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-sans text-[17px] font-light leading-[2] text-forge-text/[0.85] mb-8">
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
            <p className="font-sans text-[17px] font-light leading-[2] text-forge-text/[0.85] mb-8">
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
            <p className="font-serif text-2xl md:text-3xl font-light italic text-forge-accent leading-[1.4] mt-12">
              Perfectly imperfect.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          DIVIDER
          ═══════════════════════════════════════════════ */}
      <div className="py-8 flex justify-center">
        <div className="w-10 h-px bg-forge-accent/50" />
      </div>

      {/* ═══════════════════════════════════════════════
          THE SHOP Preview
          ═══════════════════════════════════════════════ */}
      <section className="bg-forge-paper py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16 md:mb-20">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-forge-text/40 block mb-4">
                The Shop
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-forge-text">
                Objects worth owning
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {featuredProducts.map((product, index) => (
              <ScrollReveal key={product.slug} delay={index * 100}>
                <ProductCard product={product} variant="light" />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-16 md:mt-20">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.08em] text-forge-text/60 hover:text-forge-text transition-colors duration-300"
            >
              View all objects <span>&rarr;</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CLOSING
          ═══════════════════════════════════════════════ */}
      <section className="py-32 md:py-48 px-6 md:px-10">
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <blockquote className="font-serif text-3xl md:text-5xl font-light italic leading-[1.3] text-forge-paper/[0.92]">
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
