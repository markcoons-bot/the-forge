import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import {
  H1_PAGE,
  SECTION_LABEL_LIGHT,
} from "@/lib/typography";

export const metadata: Metadata = {
  title: "The Promise — Form & Element",
  description:
    "Shipping, returns, and what to expect when you buy a handmade object from Form & Element.",
};

export default function PromisePage() {
  return (
    <>
      <Navigation />

      {/* Header */}
      <section className="bg-forge-paper pt-32 md:pt-44 pb-16 md:pb-20 px-6 md:px-10">
        <div className="max-w-[680px] mx-auto">
          <ScrollReveal>
            <span className={`${SECTION_LABEL_LIGHT} label-line mb-8`}>
              The Promise
            </span>
            <h1 className={`${H1_PAGE} text-forge-text`}>
              The Promise
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Subhead pull quote */}
      <section className="bg-forge-paper py-16 md:py-24 px-6 md:px-10">
        <ScrollReveal variant="fade-in">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-10 md:mb-12">
              <div className="w-[60px] h-px bg-forge-text/[0.15]" />
            </div>
            <blockquote className="font-serif text-[26px] md:text-[38px] font-light leading-[1.3] text-forge-text">
              &ldquo;Every object here was made by hand. We think that deserves
              to be said plainly — what it means to buy one, what to expect,
              and what we will do if something goes wrong.&rdquo;
            </blockquote>
            <div className="flex justify-center mt-10 md:mt-12">
              <div className="w-[60px] h-px bg-forge-text/[0.15]" />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Shipping */}
      <section className="bg-forge-paper pt-20 md:pt-24 pb-16 md:pb-20 px-6 md:px-10">
        <div className="max-w-[680px] mx-auto">
          <ScrollReveal>
            <span className={`${SECTION_LABEL_LIGHT} label-line mb-14`}>
              Shipping
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="font-serif text-[18px] md:text-[19px] font-normal leading-[1.8] text-forge-text mb-8">
              Ready to ship objects leave the maker&apos;s studio within two
              business days of your order. You will receive a tracking number
              when they do.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-serif text-[18px] md:text-[19px] font-normal leading-[1.8] text-forge-text mb-8">
              Made to order objects are built after you buy them. The lead time
              is listed on each product page. We will not ask a maker to rush.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="font-serif text-[18px] md:text-[19px] font-normal leading-[1.8] text-forge-text">
              Shipping costs are calculated at checkout based on the size and
              weight of the object and your location. We do not offer free
              shipping. Handmade objects require real packaging, and real
              packaging costs money. We think that is worth paying for.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Returns */}
      <section className="bg-forge-paper pt-20 md:pt-24 pb-16 md:pb-20 px-6 md:px-10">
        <div className="max-w-[680px] mx-auto">
          <ScrollReveal>
            <span className={`${SECTION_LABEL_LIGHT} label-line mb-14`}>
              Returns
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="font-serif text-[18px] md:text-[19px] font-normal leading-[1.8] text-forge-text mb-8">
              These are not mass-produced objects. Slight variations in glaze,
              grain, and form are not defects — they are evidence of the hand
              that made them. We ask that you buy with that in mind.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-serif text-[18px] md:text-[19px] font-normal leading-[1.8] text-forge-text mb-8">
              <strong className="font-medium">Ready to ship:</strong> If you
              are unsatisfied with your purchase, contact us within 14 days of
              delivery. We will discuss it with you directly. Returns are
              considered case by case — we are not a platform, and we do not
              process returns automatically.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="font-serif text-[18px] md:text-[19px] font-normal leading-[1.8] text-forge-text mb-8">
              <strong className="font-medium">Made to order:</strong> We do not
              accept returns on made to order objects except in the case of
              damage or significant misrepresentation.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="font-serif text-[18px] md:text-[19px] font-normal leading-[1.8] text-forge-text">
              <strong className="font-medium">Damaged on arrival:</strong> If
              your object arrives damaged, contact us within 48 hours with
              photographs. We will make it right. No exceptions, no arguments.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-forge-paper pt-20 md:pt-24 pb-20 md:pb-24 px-6 md:px-10">
        <div className="max-w-[680px] mx-auto">
          <ScrollReveal>
            <span className={`${SECTION_LABEL_LIGHT} label-line mb-14`}>
              Contact
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="font-serif text-[18px] md:text-[19px] font-normal leading-[1.8] text-forge-text">
              For any question about an order, write to{" "}
              <a
                href="mailto:orders@form-element.com"
                className="underline underline-offset-4 decoration-forge-text/30 hover:decoration-forge-text/60 transition-colors duration-300"
              >
                orders@form-element.com
              </a>
              . A person will read it and respond.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
