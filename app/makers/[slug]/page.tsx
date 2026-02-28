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
  const gradient = "linear-gradient(to top, rgba(26,24,22,0.7) 0%, rgba(26,24,22,0.35) 25%, rgba(26,24,22,0.05) 45%, transparent 55%)";

  return (
    <ScrollReveal>
      <div
        className="relative h-[60vh] md:h-[70vh] overflow-hidden"
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
              className={`absolute bottom-0 left-0 right-0 p-8 md:p-16 z-10 flex ${
                isRight ? "justify-end" : "justify-start"
              }`}
            >
              <blockquote
                className={`max-w-xs md:max-w-md ${
                  isRight ? "text-right" : "text-left"
                }`}
              >
                <span className="font-serif text-[56px] md:text-[72px] leading-none text-forge-accent/60 block mb-[-8px] md:mb-[-12px]">&ldquo;</span>
                <span className="font-serif text-[20px] md:text-[26px] font-light italic leading-[1.45] text-forge-paper/[0.92]">
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
   EDITORIAL LAYOUT — alternating light/dark
   hero → light para → image → dark para →
   image+quote → light para → work → craft
   ───────────────────────────────────────────── */
function EditorialStory({
  maker,
  makerProducts,
}: {
  maker: ReturnType<typeof getMaker> & {};
  makerProducts: ReturnType<typeof getProductsByMaker>;
}) {
  return (
    <>
      {/* ── PARA 1 — Warm paper, dark text ── */}
      <section className="bg-forge-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-prose mx-auto">
          <ScrollReveal>
            <p className="font-sans text-[18px] md:text-[20px] font-extralight leading-[2] text-forge-text/[0.88]">
              {renderWithEmphasis(maker.story[0])}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FULL-BLEED IMAGE 1 — with side caption ── */}
      {maker.storyImages[0] && (
        <FullBleedImageWithCaption
          src={maker.storyImages[0]}
          alt={`${maker.name} in the studio`}
          caption="Before the glaze, before the kiln, before the fire decides — there is only the maker and the morning."
          position="right"
        />
      )}

      {/* ── PARA 2 — Dark background, warm white text ── */}
      <section className="py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-prose mx-auto">
          <ScrollReveal>
            <p className="font-sans text-[18px] md:text-[20px] font-extralight leading-[2] text-forge-paper/[0.92]">
              {renderWithEmphasis(maker.story[1])}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FULL-BLEED IMAGE 2 — pull quote on image, left side ── */}
      {maker.storyImages[1] && (
        <FullBleedImageWithCaption
          src={maker.storyImages[1]}
          alt={`${maker.name} at work`}
          caption="You cannot rush a kiln. You cannot argue with thermal shock. The clay remembers everything you did to it."
          position="left"
        />
      )}

      {/* ── PARA 3 — Warm paper again, flows into Work ── */}
      <section className="bg-forge-paper pt-20 md:pt-28 px-6 md:px-10">
        <div className="max-w-prose mx-auto">
          <ScrollReveal>
            <p className="font-sans text-[18px] md:text-[20px] font-extralight leading-[2] text-forge-text/[0.88]">
              {renderWithEmphasis(maker.story[2])}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── THE WORK — continues on warm paper ── */}
      {makerProducts.length > 0 && (
        <section className="bg-forge-paper pt-16 md:pt-20 pb-24 md:pb-32 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="mb-16 md:mb-20">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-forge-text/40 block mb-4">
                  The Work
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-light text-forge-text">
                  Available pieces
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

      {/* ── THE CRAFT — dark background ── */}
      {maker.craft && (
        <section className="py-24 md:py-36">
          {maker.materialsImage && (
            <FullBleedImageWithCaption
              src={maker.materialsImage}
              alt={`${maker.name} materials and tools`}
              caption="In the hands of a master, these are not tools. They are the last point of contact between intention and the irreversible."
              position="right"
            />
          )}

          <div className="h-20" />

          <div className="max-w-prose mx-auto px-6 md:px-10">
            <ScrollReveal>
              <h2 className="font-mono text-[11px] tracking-[0.2em] uppercase text-forge-accent/70 mb-12">
                The Craft
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="font-sans text-[18px] md:text-[20px] font-extralight leading-[2] text-forge-paper/[0.92]">
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
  makerProducts,
}: {
  maker: ReturnType<typeof getMaker> & {};
  makerProducts: ReturnType<typeof getProductsByMaker>;
}) {
  const imagePositions = maker.storyImagePositions || [1, 3];

  return (
    <>
      {/* Story */}
      <section className="py-24 md:py-36">
        <div className="max-w-prose mx-auto px-6 md:px-10">
          {maker.story.map((paragraph, index) => {
            const imageIndex = imagePositions.indexOf(index);
            const storyImage =
              imageIndex !== -1 && maker.storyImages[imageIndex]
                ? maker.storyImages[imageIndex]
                : null;

            const isLastParagraph = index === maker.story.length - 1;
            const showPullQuote = index === maker.story.length - 1;

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

                {showPullQuote && (
                  <ScrollReveal>
                    <blockquote className="font-serif text-[28px] md:text-[32px] font-light italic leading-[1.4] text-forge-accent my-16 md:my-20 pl-6 border-l-2 border-forge-accent/30">
                      {maker.pullQuote}
                    </blockquote>
                  </ScrollReveal>
                )}

                <ScrollReveal delay={index * 80}>
                  <p
                    className={`font-sans text-[18px] md:text-[20px] font-extralight leading-[2] text-forge-paper/[0.92] ${
                      isLastParagraph ? "" : "mb-8"
                    }`}
                  >
                    {renderWithEmphasis(paragraph)}
                  </p>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </section>

      {/* Work */}
      {makerProducts.length > 0 && (
        <section className="bg-forge-paper py-24 md:py-32 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="mb-16 md:mb-20">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-forge-text/40 block mb-4">
                  The Work
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-light text-forge-text">
                  Available pieces
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

      {/* Method + Materials (or Craft) */}
      {maker.craft ? (
        <section className="py-24 md:py-36">
          {maker.materialsImage && (
            <FullBleedImageWithCaption
              src={maker.materialsImage}
              alt={`${maker.name} materials and tools`}
              caption=""
              position="right"
            />
          )}

          <div className="h-20" />

          <div className="max-w-prose mx-auto px-6 md:px-10">
            <ScrollReveal>
              <h2 className="font-mono text-[11px] tracking-[0.2em] uppercase text-forge-accent/70 mb-12">
                The Craft
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="font-sans text-[18px] md:text-[20px] font-extralight leading-[2] text-forge-paper/[0.92]">
                {renderWithEmphasis(maker.craft)}
              </p>
            </ScrollReveal>
          </div>
        </section>
      ) : (
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
                    <p className="font-sans text-[15px] font-extralight text-forge-paper/[0.85]">
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
          <blockquote className="font-serif text-xl md:text-2xl font-light italic text-forge-paper/[0.9] max-w-2xl">
            &ldquo;{maker.quote}&rdquo;
          </blockquote>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <div className="w-px h-10 bg-forge-accent/30 animate-scroll-line" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          STORY + WORK + CRAFT
          ═══════════════════════════════════════════════ */}
      {maker.storyLayout === "editorial" ? (
        <EditorialStory maker={maker} makerProducts={makerProducts} />
      ) : (
        <DefaultStory maker={maker} makerProducts={makerProducts} />
      )}

      {/* ═══════════════════════════════════════════════
          CLOSING
          ═══════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-6 md:px-10">
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <blockquote className="font-serif text-2xl md:text-4xl font-light italic leading-[1.4] text-forge-accent">
            &ldquo;{maker.quote}&rdquo;
          </blockquote>
        </ScrollReveal>
      </section>

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
