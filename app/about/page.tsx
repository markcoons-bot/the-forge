import { Metadata } from "next";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  H1_PAGE,
  BODY,
  SECTION_LABEL_LIGHT,
} from "@/lib/typography";

export const metadata: Metadata = {
  title: "About — The Forge",
  description:
    "Why The Forge exists. A marketplace built by a maker, for makers.",
};

{/*
  SAVED FOR LATER USE:
  "The process is the beauty. The object is just proof that the process happened."
*/}

const standards = [
  {
    title: "Craft Quality",
    description:
      "Every object is evaluated on construction, finish, and durability. We look for the kind of quality that reveals itself over years, not minutes. The work has to hold up — to use, to time, to scrutiny.",
  },
  {
    title: "Material Honesty",
    description:
      "The materials are what they are. No veneers pretending to be solid wood. No resin pretending to be stone. If it is stoneware, it was dug from the earth and fired. If it is walnut, you can see the grain and know the tree.",
  },
  {
    title: "Design Integrity",
    description:
      "Form follows function, but beauty is not optional. We look for objects where every decision — the curve of a handle, the weight of a base, the depth of a glaze — was made with intention. Nothing arbitrary. Nothing decorative for its own sake.",
  },
  {
    title: "Process & Authorship",
    description:
      "We need to understand how it was made and who made it. The process matters as much as the product. If a maker cannot walk us through every step from raw material to finished object, it does not belong here.",
  },
  {
    title: "Small-Batch Reality",
    description:
      "We do not work with makers who outsource production or manufacture at scale. Every object on The Forge is made by the hands listed on the page. If the maker takes a vacation, production stops. That is the point.",
  },
  {
    title: "Built to Last",
    description:
      "These objects are not disposable. We look for work that gets better with age — a patina that deepens, a handle that wears smooth, a glaze that tells time. The things on The Forge are meant to be used daily, for years, and to be better for it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />

      {/* Header */}
      <section className="bg-forge-paper pt-32 md:pt-44 pb-16 md:pb-20 px-6 md:px-10">
        <div className="max-w-[680px] mx-auto">
          <ScrollReveal>
            <span className={`${SECTION_LABEL_LIGHT} label-line mb-8`}>
              About
            </span>
            <h1 className={`${H1_PAGE} text-forge-text`}>
              Why The Forge Exists
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Prose */}
      <section className="bg-forge-paper pb-0 px-6 md:px-10">
        <div className="max-w-[680px] mx-auto">
          <ScrollReveal>
            <p className="font-sans text-[19px] font-light leading-[1.8] text-forge-text/[0.85] mb-8">
              I built The Forge because I needed it to exist. I am a
              woodworker — not a famous one, not a fast one — and I have spent
              enough years in a shop to know what it costs to make something
              real. Not the price on the tag. The years of failed joints before
              your hands learn what your eyes already know.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <p className="font-sans text-[19px] font-light leading-[1.8] text-forge-text/[0.85]">
              The problem is not that people don&apos;t care about craft. They
              do. The problem is that the places where craft is sold treat
              handmade objects the same way they treat everything else.
              Thumbnail grids. Discount codes. A vase that took three weeks to
              make sits next to a factory replica that took three minutes — and
              the platform does not know the difference.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Big quote break */}
      <section className="bg-forge-paper py-12 md:py-20 px-6 md:px-10">
        <ScrollReveal variant="fade-in">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-10 md:mb-12">
              <div className="w-[60px] h-px bg-forge-text/[0.15]" />
            </div>
            <blockquote className="font-serif text-[26px] md:text-[34px] font-light italic leading-[1.3] text-forge-text/70">
              &ldquo;The experience should feel like walking into a gallery
              where someone you trust says: here, look at this.&rdquo;
            </blockquote>
            <div className="flex justify-center mt-10 md:mt-12">
              <div className="w-[60px] h-px bg-forge-text/[0.15]" />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Paragraph 3 */}
      <section className="bg-forge-paper pb-0 px-6 md:px-10">
        <div className="max-w-[680px] mx-auto">
          <ScrollReveal>
            <p className="font-sans text-[19px] font-light leading-[1.8] text-forge-text/[0.85]">
              The Forge is the opposite of that. Every maker here was invited.
              Every object was chosen. The stories are real. This is a
              marketplace, and the makers here need to make a living. But the
              experience should never feel transactional.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Full-bleed image break */}
      <section className="bg-forge-paper px-0">
        <div className="mt-16 mb-16 relative w-full h-[40vh] md:h-[50vh]">
          <Image
            src="/images/FGhands.webp"
            alt="Hands shaping clay on the wheel"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Our Standards */}
      <section className="bg-forge-paper py-20 md:py-24 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <span className={`${SECTION_LABEL_LIGHT} label-line mb-14`}>
              Our Standards
            </span>
          </ScrollReveal>

          <div>
            {standards.map((standard, index) => (
              <ScrollReveal key={standard.title} delay={index * 80}>
                <div className="py-7 border-b border-forge-text/10">
                  <h3 className="font-serif text-[24px] md:text-[28px] font-normal leading-[1.3] text-forge-text mb-3">
                    {standard.title}
                  </h3>
                  <p className={`${BODY} text-forge-text/60 max-w-2xl`}>
                    {standard.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* For Makers — warm paper */}
      <section className="bg-forge-paper py-20 md:py-24 px-6 md:px-10 border-t border-forge-text/10">
        <div className="max-w-prose mx-auto">
          <ScrollReveal>
            <span className={`${SECTION_LABEL_LIGHT} label-line mb-6`}>
              For Makers
            </span>
            <h3 className="font-serif text-[28px] md:text-[32px] font-normal leading-[1.3] text-forge-text mb-6">
              If you&apos;re a maker, we&apos;d like to hear from you.
            </h3>
            <Link
              href="/apply"
              className="font-sans text-[15px] font-light text-forge-text/60 hover:text-forge-text hover:underline underline-offset-4 transition-all duration-300"
            >
              Learn about joining The Forge &rarr;
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Closing quote — dark */}
      <section className="py-16 px-6 md:px-10">
        <ScrollReveal variant="fade-in" className="max-w-3xl mx-auto text-center">
          <blockquote className="font-serif text-[30px] font-normal italic leading-[1.3] text-forge-paper/[0.85]">
            &ldquo;The work is the thing. Everything else is just making sure
            the work gets seen.&rdquo;
          </blockquote>
        </ScrollReveal>
      </section>

      <Footer />
    </>
  );
}
