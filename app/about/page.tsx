import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — The Forge",
  description:
    "Why The Forge exists. A marketplace built by a maker, for makers.",
};

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
];

export default function AboutPage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-16 md:pb-20 px-6 md:px-10">
        <div className="max-w-prose mx-auto">
          <ScrollReveal>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-forge-accent/70 block mb-8">
              About
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.2] text-forge-paper">
              Why The Forge Exists
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Philosophy — personal story */}
      <section className="pb-20 md:pb-24 px-6 md:px-10">
        <div className="max-w-prose mx-auto">
          <ScrollReveal>
            <p className="font-sans text-[17px] font-light leading-[2] text-forge-paper/[0.88] mb-10">
              I built The Forge because I needed it to exist. I am a
              woodworker — not a famous one, not a fast one — and I have spent
              enough years in a shop to know <em className="italic">what it costs</em> to make something
              real. Not the price on the tag. The other cost. The years of
              failed joints before your hands learn what your eyes already know.
              The stock you ruin because you rushed a cut, or because you
              didn&apos;t, and <em className="italic">the wood moved anyway</em>. The mornings you walk into
              the shop and nothing goes right and you do it again tomorrow
              because this is what you chose.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <p className="font-sans text-[17px] font-light leading-[2] text-forge-paper/[0.88] mb-10">
              We live in a world that wants everything now. Instant. Overnight.
              Two-day shipping on a thing that was injection-molded in a factory
              and will break in a year. And that is fine for most things. But
              some things should not be made that way. A bowl that was thrown on
              a wheel and fired for fourteen hours is not the same as a bowl that
              was stamped from a mold. It is not better because it is handmade.
              It is <em className="italic">different</em>. It carries the evidence of a human decision at
              every point in its existence — the thickness of the wall, the pull
              of the glaze, the heat of the kiln. You can feel it when you hold
              it. You might not be able to name what you feel, but it is there.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="font-sans text-[17px] font-light leading-[2] text-forge-paper/[0.88] mb-10">
              The problem is not that people don&apos;t care about craft. They
              do. The problem is that the places where craft is sold — the
              marketplaces, the platforms — treat handmade objects the same way
              they treat everything else. Thumbnail grids. Discount codes.
              Suggested products. The work gets flattened. A vase that took
              three weeks to make sits next to a factory replica that took three
              minutes, and the platform does not know the difference. Or worse,
              it does, and it does not care.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <p className="font-sans text-[17px] font-light leading-[2] text-forge-paper/[0.88]">
              The Forge is the opposite of that. Every maker here was invited.
              Every object was chosen. The stories are real — we visit studios,
              we watch the process, we write about it honestly. This is a
              marketplace, and the makers here need to make a living, and the
              objects need to find homes. But the experience should feel like
              walking into a gallery where someone you trust says: <em className="italic">here, look at
              this</em>. Let me tell you who made it, and how, and why it matters.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pull quote */}
      <section className="py-20 md:py-24 px-6 md:px-10">
        <ScrollReveal>
          <blockquote className="font-serif text-2xl md:text-3xl font-light italic text-forge-accent leading-[1.4] max-w-3xl mx-auto text-center">
            The process is the beauty. The object is just proof that the
            process happened.
          </blockquote>
        </ScrollReveal>
      </section>

      {/* Accent divider */}
      <div className="py-[60px] flex justify-center">
        <div className="w-10 h-px bg-forge-accent" />
      </div>

      {/* Our Standards — LIGHT section */}
      <section className="bg-forge-paper py-20 md:py-24 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-forge-accent block mb-14">
              Our Standards
            </span>
          </ScrollReveal>

          <div>
            {standards.map((standard, index) => (
              <ScrollReveal key={standard.title} delay={index * 60}>
                <div className="py-7 border-b border-forge-text/10">
                  <h3 className="font-serif text-xl md:text-2xl font-light text-forge-text mb-3">
                    {standard.title}
                  </h3>
                  <p className="font-sans text-[16px] font-light leading-[2] text-forge-text/70 max-w-2xl">
                    {standard.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* For Makers — dark */}
      <section className="py-20 md:py-24 px-6 md:px-10">
        <div className="max-w-prose mx-auto">
          <ScrollReveal>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-forge-accent/70 block mb-6">
              For Makers
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-light text-forge-paper mb-10 leading-[1.3]">
              If you make things by hand, we want to hear from you.
            </h3>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <p className="font-sans text-[17px] font-light leading-[2] text-forge-paper/[0.88] mb-10">
              The Forge is invitation-only, but we are always looking. If your
              work meets our standards — if you shape raw materials into finished
              objects with <em className="italic">your own hands</em> and you are proud of what you make — we
              would like to see it.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <div className="my-10">
              {[
                ["12% commission", "Lower than the industry standard. No listing fees, no monthly subscription, no hidden costs."],
                ["Professional editorial", "We write your story. Studio visit, process photography direction, long-form profile. Your work presented the way it deserves."],
                ["Premium pricing protected", "We do not run sales. We do not offer discount codes. Your prices are your prices, and we will never pressure you to lower them."],
                ["You control production", "Made to order, ready to ship, limited runs — your pace, your capacity. We will never ask you to scale beyond what your hands can do."],
              ].map(([title, desc], index) => (
                <div key={index} className="flex items-start gap-6 py-5 border-b border-white/5">
                  <span className="font-mono text-[10px] text-forge-accent/50 pt-1 shrink-0 w-5 text-right">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-sans text-[17px] font-medium text-forge-paper mb-1">
                      {title}
                    </p>
                    <p className="font-sans text-[17px] font-light leading-[2] text-forge-paper/70">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <a
              href="#"
              className="font-sans text-[12px] font-light uppercase tracking-[0.15em] text-forge-accent underline underline-offset-4 decoration-forge-accent/40 hover:text-white hover:decoration-white/40 transition-colors duration-300"
            >
              Apply to The Forge &rarr;
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Closing quote */}
      <section className="pt-24 md:pt-28 pb-20 md:pb-24 px-6 md:px-10">
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <blockquote className="font-serif text-[28px] md:text-[32px] font-light italic leading-[1.3] text-forge-accent">
            &ldquo;The work is the thing. Everything else is just making sure
            the work gets seen.&rdquo;
          </blockquote>
        </ScrollReveal>
      </section>

      <Footer />
    </>
  );
}
