import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";
import MakerProductGrid from "@/components/MakerProductGrid";
import Footer from "@/components/Footer";
import { makers, getMaker } from "@/data/makers";
import { getProductsByMaker } from "@/data/products";
import { getGalleryItemsByMaker } from "@/data/gallery";
import GalleryGrid from "@/components/GalleryGrid";
import {
  SECTION_LABEL,
  SECTION_LABEL_DARK,
  SECTION_LABEL_LIGHT,
} from "@/lib/typography";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return makers.map((maker) => ({ slug: maker.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const maker = getMaker(params.slug);
  if (!maker) return { title: "Maker Not Found — Form & Element" };

  return {
    title: `${maker.name} — ${maker.medium} — Form & Element`,
    description: maker.story[0],
  };
}

function renderWithEmphasis(text: string) {
  const parts = text.split(/\*([^*]+)\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <em key={i} className="italic">{part}</em> : part
  );
}

function FullBleedImageWithCaption({
  src,
  alt,
  caption,
  position = "right",
}: {
  src: string;
  alt: string;
  caption: string;
  position?: "left" | "right";
}) {
  const isRight = position === "right";
  const gradient = "linear-gradient(to top, rgba(26,24,22,0.75) 0%, rgba(26,24,22,0.4) 25%, rgba(26,24,22,0.08) 45%, transparent 55%)";

  return (
    <ScrollReveal variant="scale-in">
      <div
        className="relative min-h-[70vh] md:min-h-[80vh] overflow-hidden"
        style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover story-image-inner"
          sizes="100vw"
        />
        {caption && (
          <>
            <div className="absolute inset-0" style={{ background: gradient }} />
            <blockquote
              className={`absolute bottom-10 ${
                isRight ? "right-8 md:right-16 text-right" : "left-8 md:left-16 text-left"
              } font-serif italic text-[20px] md:text-[26px] leading-[1.4] text-white/80 max-w-xs md:max-w-sm`}
            >
              &ldquo;{caption}&rdquo;
            </blockquote>
          </>
        )}
      </div>
    </ScrollReveal>
  );
}

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */
export default function MakerPage({ params }: PageProps) {
  const maker = getMaker(params.slug);
  if (!maker) notFound();

  const makerProducts = getProductsByMaker(maker.slug);
  const heroImage = maker.profileHeroImage || maker.portraitImage;

  // Gallery images for "From the Studio" — exclude images already used on the page
  const usedImages = new Set(
    [
      maker.portraitImage,
      maker.profileHeroImage,
      ...maker.storyImages,
      maker.materialsImage,
      ...makerProducts.map((p) => p.image),
      ...makerProducts.flatMap((p) => p.alternateImages || []),
    ].filter(Boolean)
  );
  const studioGalleryItems = getGalleryItemsByMaker(maker.slug)
    .filter((item) => !usedImages.has(item.src))
    .slice(0, 9);

  return (
    <>
      <Navigation />

      {/* ═══════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-end">
        <div
          className="absolute inset-0"
          style={{ background: maker.portraitGradient }}
        />
        <Image
          src={heroImage}
          alt={`${maker.name} — ${maker.medium}`}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="maker-portrait-overlay absolute inset-0" />

        <div className="relative z-10 p-5 md:p-16 pb-12 md:pb-24 text-shadow-hero">
          <p className={`${SECTION_LABEL} text-forge-paper/75 mb-6`}>
            {maker.medium} &mdash; {maker.location}
          </p>
          <h1
            className="font-serif font-light leading-[1.2] text-forge-paper mb-8"
            style={{ fontSize: "clamp(36px, 10vw, 80px)" }}
          >
            {maker.name}
          </h1>
          <div className="relative max-w-2xl overflow-hidden">
            <span className="font-serif text-[80px] md:text-[200px] leading-none text-forge-paper/[0.3] absolute -top-[40px] md:-top-[110px] left-0 md:-left-[20px] select-none pointer-events-none" aria-hidden="true">
              &ldquo;
            </span>
            <blockquote className="font-serif text-[20px] md:text-[28px] font-light italic leading-[1.3] text-forge-paper relative z-10">
              &ldquo;{maker.quote}&rdquo;
            </blockquote>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <div className="w-px h-10 bg-forge-paper/20 animate-scroll-line" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          OPENING STATEMENT
          ═══════════════════════════════════════════════ */}
      {maker.openingStatement && (
        <section className="bg-forge-paper pb-2 md:pb-3 pt-8 md:pt-12 px-6 md:px-10">
          <div className="max-w-[680px] mx-auto">
            <ScrollReveal>
              <p className="font-serif text-[20px] md:text-[26px] font-normal italic leading-[1.5] text-forge-text/[0.75] text-center">
                {maker.openingStatement}
              </p>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════
          THE FORMS — product grid
          ═══════════════════════════════════════════════ */}
      {makerProducts.length > 0 && (
        <section className="bg-forge-paper pt-10 md:pt-14 pb-10 md:pb-14 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <span className={`${SECTION_LABEL_LIGHT} label-line mb-14`}>
                The Forms
              </span>
            </ScrollReveal>

            <MakerProductGrid products={makerProducts} />
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════
          NARRATIVE
          ═══════════════════════════════════════════════ */}
      <section className="bg-forge-paper">
        <div className="max-w-[600px] mx-auto px-6 pt-8 md:pt-10 pb-16 md:pb-20">
          <ScrollReveal>
            {maker.story.map((paragraph, index) => (
              <p
                key={index}
                className={`font-sans text-[17px] md:text-[19px] font-light leading-[1.85] text-forge-text/80${
                  index < maker.story.length - 1 ? " mb-8" : ""
                }`}
              >
                {renderWithEmphasis(paragraph)}
              </p>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FULL-BLEED IMAGES WITH PULL QUOTES
          ═══════════════════════════════════════════════ */}
      {maker.storyImages[0] && (
        <FullBleedImageWithCaption
          src={maker.storyImages[0]}
          alt={`${maker.name} — process`}
          caption={maker.storyImageCaptions?.[0] || ""}
          position="right"
        />
      )}
      {maker.storyImages[1] && (
        <FullBleedImageWithCaption
          src={maker.storyImages[1]}
          alt={`${maker.name} — craft`}
          caption={maker.storyImageCaptions?.[1] || ""}
          position="left"
        />
      )}

      {/* ═══════════════════════════════════════════════
          FROM THE STUDIO
          ═══════════════════════════════════════════════ */}
      {studioGalleryItems.length > 0 && (
        <section className="bg-forge-dark pt-16 md:pt-24 pb-0 px-6 md:px-10">
          <div className="max-w-7xl mx-auto pb-12">
            <ScrollReveal>
              <span className={`${SECTION_LABEL_DARK} label-line mb-10`}>
                From the Studio
              </span>
            </ScrollReveal>
            <GalleryGrid items={studioGalleryItems} columns={3} />
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════
          BACK NAVIGATION
          ═══════════════════════════════════════════════ */}
      <section className="bg-forge-dark border-t border-forge-paper/[0.08] pt-16 pb-16 md:pt-20 md:pb-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-4">
          <Link
            href="/"
            className="font-mono text-[13px] tracking-[0.15em] uppercase text-forge-paper/40 hover:text-forge-paper/80 transition-colors duration-300"
          >
            &larr; Back to Home
          </Link>
          <Link
            href="/shop"
            className="font-mono text-[13px] tracking-[0.15em] uppercase text-forge-paper/40 hover:text-forge-paper/80 transition-colors duration-300"
          >
            Visit the shop &rarr;
          </Link>
        </div>
      </section>

      <Footer hideBorder />
    </>
  );
}
