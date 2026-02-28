import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { makers, getMaker } from "@/data/makers";
import { getProductsByMaker } from "@/data/products";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return makers.map((maker) => ({ slug: maker.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const maker = getMaker(params.slug);
  if (!maker) return { title: "Maker Not Found — The Forge" };

  return {
    title: `${maker.name} — ${maker.medium} — The Forge`,
    description: maker.story[0],
  };
}

function renderWithEmphasis(text: string) {
  const parts = text.split(/\*([^*]+)\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <em key={i} className="italic">{part}</em> : part
  );
}

export default function MakerPage({ params }: PageProps) {
  const maker = getMaker(params.slug);
  if (!maker) notFound();

  const makerProducts = getProductsByMaker(maker.slug);

  // Insert story images between paragraphs (after 1st, 3rd paragraphs)
  const storyImagePositions = [1, 3];

  return (
    <>
      <Navigation />

      {/* ═══════════════════════════════════════════════
          HERO PORTRAIT
          ═══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-end">
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
          priority
        />
        <div className="maker-portrait-overlay absolute inset-0" />

        {/* Content */}
        <div className="relative z-10 p-8 md:p-16 pb-16 md:pb-24">
          <p
            className="font-mono text-[11px] tracking-[0.15em] uppercase mb-6"
            style={{ color: maker.accentColor }}
          >
            {maker.medium} &mdash; {maker.location}
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-forge-paper mb-8">
            {maker.name}
          </h1>
          <blockquote className="font-serif text-xl md:text-2xl font-light italic text-forge-paper/[0.85] max-w-2xl">
            &ldquo;{maker.quote}&rdquo;
          </blockquote>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <div className="w-px h-10 bg-forge-accent/30 animate-scroll-line" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          THE STORY
          ═══════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-6 md:px-10">
        <div className="max-w-prose mx-auto">
          {maker.story.map((paragraph, index) => {
            const imageIndex = storyImagePositions.indexOf(index);
            const storyImage =
              imageIndex !== -1 && maker.storyImages[imageIndex]
                ? maker.storyImages[imageIndex]
                : null;

            return (
              <ScrollReveal key={index} delay={index * 80}>
                {/* Insert story image before this paragraph */}
                {storyImage && (
                  <div className="relative w-full aspect-[16/9] my-16 -mx-0 md:-mx-20 md:w-[calc(100%+10rem)] overflow-hidden">
                    <Image
                      src={storyImage}
                      alt={`${maker.name} studio`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 900px"
                    />
                  </div>
                )}

                {index === 2 ? (
                  <>
                    {/* Pull quote inserted after second paragraph */}
                    <blockquote className="font-serif text-2xl md:text-3xl font-light italic leading-[1.4] text-forge-accent my-16 pl-6 border-l-2 border-forge-accent/30">
                      {maker.pullQuote}
                    </blockquote>
                    <p className="font-sans text-[17px] font-extralight leading-[2] text-forge-paper/[0.88] mb-8">
                      {renderWithEmphasis(paragraph)}
                    </p>
                  </>
                ) : (
                  <p className="font-sans text-[17px] font-extralight leading-[2] text-forge-paper/[0.88] mb-8">
                    {renderWithEmphasis(paragraph)}
                  </p>
                )}
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          THE METHOD
          ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-prose mx-auto">
          <ScrollReveal>
            <h2 className="font-mono text-[11px] tracking-[0.2em] uppercase text-forge-accent/70 mb-12">
              The Method
            </h2>
          </ScrollReveal>

          <div className="space-y-0">
            {maker.method.map((step, index) => (
              <ScrollReveal key={index} delay={index * 60}>
                <div className="flex items-start gap-6 py-5 border-b border-white/5">
                  <span className="font-mono text-[11px] text-forge-accent/40 pt-0.5 shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="font-sans text-[15px] font-extralight text-forge-paper/[0.8]">
                    {step}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={100} className="mt-10">
            <p className="font-mono text-[11px] tracking-[0.05em] text-forge-paper/50">
              Materials: {maker.materials}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          THE WORK
          ═══════════════════════════════════════════════ */}
      {makerProducts.length > 0 && (
        <section className="bg-forge-paper py-24 md:py-32 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="mb-16 md:mb-20">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-forge-text/40 block mb-4">
                  The Work
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-light text-forge-text">
                  Available pieces by {maker.name}
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
              {makerProducts.map((product, index) => (
                <ScrollReveal key={product.slug} delay={index * 100}>
                  <ProductCard product={product} variant="light" />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════
          BACK NAVIGATION
          ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-xs tracking-[0.08em] text-forge-paper/40 hover:text-forge-accent transition-colors duration-300"
          >
            &larr; Back to The Forge
          </Link>
          <Link
            href="/shop"
            className="font-mono text-xs tracking-[0.08em] text-forge-paper/40 hover:text-forge-accent transition-colors duration-300"
          >
            Visit the shop &rarr;
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
