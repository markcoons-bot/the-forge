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
import { getGalleryItemsByMaker } from "@/data/gallery";
import GalleryGrid from "@/components/GalleryGrid";
import {
  STORY_LIGHT,
  SECTION_LABEL,
  SECTION_LABEL_DARK,
  SECTION_LABEL_LIGHT,
  NAV_LINK_DARK,
  METHOD_STEP,
} from "@/lib/typography";

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

function renderDropLead(text: string) {
  const sentenceEnd = text.match(/^(.*?\.)\s([\s\S]*)$/);
  if (!sentenceEnd) {
    return renderWithEmphasis(text);
  }
  const [, first, rest] = sentenceEnd;
  return (
    <>
      <span className="font-sans text-[17px] md:text-[19px] font-normal leading-[1.75] text-forge-text">
        {renderWithEmphasis(first)}
      </span>{" "}
      {renderWithEmphasis(rest)}
    </>
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
        className="relative h-[50vh] md:h-[70vh] overflow-hidden"
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
            <div
              className={`absolute bottom-0 left-0 right-0 p-5 md:p-16 z-10 flex text-shadow-image ${
                isRight ? "justify-end" : "justify-start"
              }`}
            >
              <blockquote
                className={`max-w-[280px] md:max-w-md ${
                  isRight ? "text-right" : "text-left"
                }`}
              >
                <span className="font-serif text-[60px] md:text-[120px] leading-none text-forge-paper/[0.25] block mb-[-12px] md:mb-[-28px]">&ldquo;</span>
                <span className="font-serif text-[22px] md:text-[36px] font-light italic leading-[1.3] text-forge-paper">
                  {caption}
                </span>
              </blockquote>
            </div>
          </>
        )}
      </div>
    </ScrollReveal>
  );
}

/* ─────────────────────────────────────────────
   EDITORIAL LAYOUT — warm paper story with full-bleed images
   ───────────────────────────────────────────── */
function EditorialStory({
  maker,
}: {
  maker: ReturnType<typeof getMaker> & {};
}) {
  return (
    <>
      {/* ── THE STORY — warm paper ── */}
      <section className="bg-forge-paper pt-16 md:pt-24 pb-4 px-6 md:px-10">
        <div className="max-w-prose mx-auto">
          <ScrollReveal>
            <span className={`${SECTION_LABEL_LIGHT} label-line`}>
              The Story
            </span>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PARA 1 — warm paper ── */}
      <section className="bg-forge-paper py-10 md:py-16 px-6 md:px-10">
        <div className="max-w-prose mx-auto">
          <ScrollReveal>
            <p className={STORY_LIGHT}>
              {renderDropLead(maker.story[0])}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FULL-BLEED IMAGE 1 ── */}
      {maker.storyImages[0] && (
        <FullBleedImageWithCaption
          src={maker.storyImages[0]}
          alt={`${maker.name} in the studio`}
          caption={maker.storyImageCaptions?.[0] || ""}
          position="right"
        />
      )}

      {/* ── PARA 2 — warm paper ── */}
      <section className="bg-forge-paper py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-prose mx-auto">
          <ScrollReveal>
            <p className={STORY_LIGHT}>
              {renderWithEmphasis(maker.story[1])}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FULL-BLEED IMAGE 2 ── */}
      {maker.storyImages[1] && (
        <FullBleedImageWithCaption
          src={maker.storyImages[1]}
          alt={`${maker.name} at work`}
          caption={maker.storyImageCaptions?.[1] || ""}
          position="left"
        />
      )}

      {/* ── PARA 3 — warm paper ── */}
      <section className="bg-forge-paper py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-prose mx-auto">
          <ScrollReveal>
            <p className={STORY_LIGHT}>
              {renderWithEmphasis(maker.story[2])}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Materials image (full-bleed, before craft) ── */}
      {maker.materialsImage && (
        <FullBleedImageWithCaption
          src={maker.materialsImage}
          alt={`${maker.name} materials and tools`}
          caption={maker.materialsCaption || ""}
          position="right"
        />
      )}

      {/* ── THE CRAFT — warm paper ── */}
      {maker.craft && (
        <section className="bg-forge-paper py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-prose mx-auto">
            <ScrollReveal>
              <span className={`${SECTION_LABEL_LIGHT} label-line mb-12`}>
                The Craft
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className={STORY_LIGHT}>
                {renderWithEmphasis(maker.craft)}
              </p>
            </ScrollReveal>
          </div>
        </section>
      )}
    </>
  );
}

/* ─────────────────────────────────────────────
   DEFAULT LAYOUT — for makers without editorial
   ───────────────────────────────────────────── */
function DefaultStory({
  maker,
}: {
  maker: ReturnType<typeof getMaker> & {};
}) {
  const imagePositions = maker.storyImagePositions || [1, 3];

  return (
    <>
      {/* Story Header */}
      <section className="bg-forge-paper pt-16 md:pt-24 pb-4 px-6 md:px-10">
        <div className="max-w-prose mx-auto">
          <ScrollReveal>
            <span className={`${SECTION_LABEL_LIGHT} label-line`}>
              The Story
            </span>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="bg-forge-paper py-10 md:py-16">
        <div className="max-w-prose mx-auto px-6 md:px-10">
          {maker.story.map((paragraph, index) => {
            const imageIndex = imagePositions.indexOf(index);
            const storyImage =
              imageIndex !== -1 && maker.storyImages[imageIndex]
                ? maker.storyImages[imageIndex]
                : null;

            const isLastParagraph = index === maker.story.length - 1;

            return (
              <div key={index}>
                {storyImage && (
                  <FullBleedImageWithCaption
                    src={storyImage}
                    alt={`${maker.name} studio`}
                    caption=""
                    position={imageIndex % 2 === 0 ? "right" : "left"}
                  />
                )}

                <ScrollReveal delay={index * 80}>
                  <p
                    className={`${STORY_LIGHT} ${
                      isLastParagraph ? "" : "mb-8"
                    }`}
                  >
                    {index === 0 ? renderDropLead(paragraph) : renderWithEmphasis(paragraph)}
                  </p>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </section>

      {/* Materials image (full-bleed, before craft) */}
      {maker.materialsImage && (
        <FullBleedImageWithCaption
          src={maker.materialsImage}
          alt={`${maker.name} materials and tools`}
          caption={maker.materialsCaption || ""}
          position="right"
        />
      )}

      {/* Method + Materials (or Craft) */}
      {maker.craft ? (
        <section className="bg-forge-paper py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-prose mx-auto">
            <ScrollReveal>
              <span className={`${SECTION_LABEL_LIGHT} label-line mb-12`}>
                The Craft
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className={STORY_LIGHT}>
                {renderWithEmphasis(maker.craft)}
              </p>
            </ScrollReveal>
          </div>
        </section>
      ) : (
        <section className="bg-forge-paper py-16 md:py-24 px-6 md:px-10">
          <div className="max-w-prose mx-auto">
            <ScrollReveal>
              <span className={`${SECTION_LABEL_LIGHT} label-line mb-12`}>
                The Method
              </span>
            </ScrollReveal>

            <div className="space-y-0">
              {maker.method.map((step, index) => (
                <ScrollReveal key={index} delay={index * 60}>
                  <div className="flex items-start gap-6 py-5 border-b border-forge-text/10">
                    <span className="font-mono text-[13px] font-normal text-forge-text/50 pt-0.5 shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className={`${METHOD_STEP} text-forge-text/80`}>
                      {step}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={100} className="mt-10">
              <p className="font-mono text-[13px] font-normal tracking-[0.05em] text-forge-text/60">
                Materials: {maker.materials}
              </p>
            </ScrollReveal>
          </div>
        </section>
      )}
    </>
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
          INTRO
          ═══════════════════════════════════════════════ */}
      {maker.profileIntro && (
        <section className="bg-forge-paper pt-10 md:pt-16 pb-8 md:pb-12 px-6 md:px-10">
          <div className="max-w-[680px] mx-auto">
            <ScrollReveal>
              <p className="font-sans text-[14px] font-semibold uppercase tracking-[0.05em] text-forge-text mb-3">
                {maker.name}
              </p>
              <p className="font-sans text-[17px] md:text-[18px] font-light leading-[1.75] text-forge-text/[0.85] mb-3">
                {maker.profileIntro}
              </p>
              <p className="font-mono text-[13px] font-normal text-forge-text/[0.45]">
                {maker.medium} &mdash; {maker.location}
              </p>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════
          FULL PRODUCT GRID — warm paper
          ═══════════════════════════════════════════════ */}
      {makerProducts.length > 0 && (
        <section className="bg-forge-paper py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <span className={`${SECTION_LABEL_LIGHT} label-line mb-14`}>
                The Work
              </span>
            </ScrollReveal>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-6 md:gap-x-8 md:gap-y-10">
              {makerProducts.slice(0, 6).map((product, index) => (
                <ScrollReveal key={product.slug} delay={index * 100}>
                  <ProductCard product={product} variant="light" showMaker={false} />
                </ScrollReveal>
              ))}
            </div>

            {makerProducts.length > 6 && (
              <div className="text-center mt-10 mb-2">
                <Link
                  href="/shop"
                  className="font-sans text-[15px] font-normal text-forge-text/60 hover:text-forge-text hover:underline underline-offset-4 transition-all duration-300"
                >
                  View all pieces &rarr;
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════
          STORY + CRAFT
          ═══════════════════════════════════════════════ */}
      {maker.storyLayout === "editorial" ? (
        <EditorialStory maker={maker} />
      ) : (
        <DefaultStory maker={maker} />
      )}

      {/* ═══════════════════════════════════════════════
          FROM THE STUDIO
          ═══════════════════════════════════════════════ */}
      {studioGalleryItems.length > 0 && (
        <section className="py-16 md:py-24 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
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
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-4">
          <Link
            href="/"
            className={NAV_LINK_DARK}
          >
            &larr; Back to The Forge
          </Link>
          <Link
            href="/shop"
            className={NAV_LINK_DARK}
          >
            Visit the shop &rarr;
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
