import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  H1_PAGE,
  SECTION_LABEL_LIGHT,
} from "@/lib/typography";

export const metadata: Metadata = {
  title: "Legal — The Forge",
  description:
    "Terms of Service, Privacy Policy, and Maker Agreement for The Forge.",
};

const sectionHeadingClass =
  "font-serif text-[32px] font-normal leading-[1.3] text-forge-text mb-8";

const subHeadingClass =
  "font-sans text-[18px] font-semibold text-forge-text mt-8 mb-3";

const bodyClass =
  "font-sans text-[17px] font-light leading-[1.75] text-forge-text/[0.85] mb-6";

export default function LegalPage() {
  return (
    <>
      <Navigation />

      {/* Header */}
      <section className="bg-forge-paper pt-32 md:pt-44 pb-10 md:pb-14 px-6 md:px-10">
        <div className="max-w-[720px] mx-auto">
          <span className={`${SECTION_LABEL_LIGHT} label-line mb-8`}>
            Legal
          </span>
          <h1 className={`${H1_PAGE} text-forge-text mb-4`}>
            Terms, Privacy &amp; Maker Agreement
          </h1>
          <p className="font-sans text-[16px] font-light italic text-forge-text/[0.55]">
            These documents are drafts under review. Last updated: March 2026.
          </p>

          {/* Quick nav */}
          <div className="flex items-center gap-3 mt-6 flex-wrap">
            <a
              href="#terms"
              className="font-sans text-[14px] font-normal text-forge-text/[0.55] hover:text-forge-text hover:underline underline-offset-4 transition-all duration-300"
            >
              Terms of Service
            </a>
            <span className="text-forge-text/20">|</span>
            <a
              href="#privacy"
              className="font-sans text-[14px] font-normal text-forge-text/[0.55] hover:text-forge-text hover:underline underline-offset-4 transition-all duration-300"
            >
              Privacy Policy
            </a>
            <span className="text-forge-text/20">|</span>
            <a
              href="#maker-agreement"
              className="font-sans text-[14px] font-normal text-forge-text/[0.55] hover:text-forge-text hover:underline underline-offset-4 transition-all duration-300"
            >
              Maker Agreement
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          TERMS OF SERVICE
          ═══════════════════════════════════════════════ */}
      <section id="terms" className="bg-forge-paper pt-10 md:pt-16 pb-10 md:pb-16 px-6 md:px-10">
        <div className="max-w-[720px] mx-auto">
          <h2 className={sectionHeadingClass}>Terms of Service</h2>

          <h3 className={subHeadingClass}>1. The Platform</h3>
          <p className={bodyClass}>
            The Forge is a curated online marketplace connecting buyers with
            independent makers of handmade objects. We are not a manufacturer,
            distributor, or retailer. Each product listed on the Site is made by
            an independent maker (&ldquo;Maker&rdquo;) who is solely responsible
            for the creation, quality, and fulfillment of their products.
          </p>

          <h3 className={subHeadingClass}>2. Accounts</h3>
          <p className={bodyClass}>
            You may browse the Site without creating an account. To make a
            purchase, you will provide your name, email address, and shipping
            address at checkout. You agree to provide accurate, complete, and
            current information.
          </p>

          <h3 className={subHeadingClass}>3. Purchases and Payment</h3>
          <p className={bodyClass}>
            All prices are listed in US Dollars. Payment is processed securely
            through Stripe. We do not store, access, or handle your credit card
            information &mdash; all payment data is processed directly by Stripe
            in accordance with PCI-DSS security standards. When you place an
            order, you are entering into a purchase agreement directly with the
            Maker. The Forge facilitates this transaction but is not a party to
            the sale.
          </p>

          <h3 className={subHeadingClass}>4. Products</h3>
          <p className={bodyClass}>
            Products on The Forge are handmade by independent Makers. Because
            these objects are made by hand, slight variations in color, texture,
            dimension, and finish are normal and expected. These variations are a
            feature of handmade work, not a defect. Products marked
            &ldquo;Made to Order&rdquo; are produced after your order is placed.
            Products marked &ldquo;Ready to Ship&rdquo; are available for
            immediate fulfillment.
          </p>

          <h3 className={subHeadingClass}>5. Shipping</h3>
          <p className={bodyClass}>
            Shipping is handled directly by each Maker. The Forge is not
            responsible for shipping delays, lost packages, or damage during
            transit, though we will work with the Maker to resolve any issues.
            Currently, we offer shipping within the United States only.
          </p>

          <h3 className={subHeadingClass}>6. Returns and Refunds</h3>
          <p className={bodyClass}>
            Ready to Ship items may be returned within 14 days of delivery if
            the item arrives damaged or is materially different from its
            description. Made to Order items are generally non-refundable unless
            they arrive damaged or are materially different from their
            description. If your item arrives damaged, contact us within 7 days
            of delivery with photographs. Refunds are processed through Stripe
            to the original payment method within 5&ndash;10 business days.
          </p>

          <h3 className={subHeadingClass}>7. Intellectual Property</h3>
          <p className={bodyClass}>
            All content on the Site &mdash; including text, photographs, design,
            and editorial content &mdash; is owned by The Forge or licensed from
            our Makers and is protected by copyright and intellectual property
            laws.
          </p>

          <h3 className={subHeadingClass}>8. Limitation of Liability</h3>
          <p className={bodyClass}>
            The Forge acts as a marketplace facilitator. To the fullest extent
            permitted by law, The Forge shall not be liable for any indirect,
            incidental, special, consequential, or punitive damages arising from
            your use of the Site or purchase of any product.
          </p>

          <h3 className={subHeadingClass}>9. Governing Law</h3>
          <p className={bodyClass}>
            These Terms are governed by the laws of the State of California. Any
            disputes shall be resolved in the courts of San Diego County,
            California.
          </p>

          <h3 className={subHeadingClass}>10. Contact</h3>
          <p className={bodyClass}>
            Questions about these Terms? Contact us at hello@theforge.com.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-forge-paper flex justify-center py-6">
        <div className="w-20 h-px bg-forge-text/[0.15]" />
      </div>

      {/* ═══════════════════════════════════════════════
          PRIVACY POLICY
          ═══════════════════════════════════════════════ */}
      <section id="privacy" className="bg-forge-paper pt-10 md:pt-16 pb-10 md:pb-16 px-6 md:px-10">
        <div className="max-w-[720px] mx-auto">
          <h2 className={sectionHeadingClass}>Privacy Policy</h2>

          <h3 className={subHeadingClass}>1. Information We Collect</h3>
          <p className={bodyClass}>
            When you make a purchase, we collect your name, email address,
            shipping address, and phone number (if provided). We do NOT collect
            or store credit card numbers or payment details &mdash; these are
            processed exclusively by Stripe. When you sign up for our
            newsletter, we collect your email address only. When you apply as a
            Maker, we collect your name, email, website, Instagram handle,
            location, and craft details.
          </p>

          <h3 className={subHeadingClass}>2. How We Use Your Information</h3>
          <p className={bodyClass}>
            We use your information to process and fulfill orders, send order
            confirmations and shipping updates, respond to your questions, send
            our newsletter (if you opted in), and improve the Site. We do not
            sell, rent, or trade your personal information to third parties for
            marketing purposes.
          </p>

          <h3 className={subHeadingClass}>3. Third-Party Services</h3>
          <p className={bodyClass}>
            We use Stripe for payment processing, Supabase for database hosting,
            and Vercel for website hosting. All traffic is served over HTTPS.
            Your payment information is handled exclusively by Stripe and never
            touches our servers.
          </p>

          <h3 className={subHeadingClass}>4. Data Shared with Makers</h3>
          <p className={bodyClass}>
            When you purchase a product, we share your name, shipping address,
            and email with the Maker for order fulfillment only. Makers are
            prohibited from using this information for marketing or sharing it
            with third parties.
          </p>

          <h3 className={subHeadingClass}>5. Your Rights</h3>
          <p className={bodyClass}>
            You may request access to, correction of, or deletion of your
            personal information at any time by emailing hello@theforge.com.
            California residents have additional rights under the CCPA.
          </p>

          <h3 className={subHeadingClass}>6. Cookies</h3>
          <p className={bodyClass}>
            We use only essential cookies required for the Site to function. We
            do not use advertising or tracking cookies.
          </p>

          <h3 className={subHeadingClass}>7. Security</h3>
          <p className={bodyClass}>
            We use HTTPS encryption, secure database hosting with encryption at
            rest, and secure payment processing through Stripe.
          </p>

          <h3 className={subHeadingClass}>8. Contact</h3>
          <p className={bodyClass}>
            Questions? Contact us at hello@theforge.com.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-forge-paper flex justify-center py-6">
        <div className="w-20 h-px bg-forge-text/[0.15]" />
      </div>

      {/* ═══════════════════════════════════════════════
          MAKER AGREEMENT
          ═══════════════════════════════════════════════ */}
      <section id="maker-agreement" className="bg-forge-paper pt-10 md:pt-16 pb-20 md:pb-28 px-6 md:px-10">
        <div className="max-w-[720px] mx-auto">
          <h2 className={sectionHeadingClass}>Maker Agreement</h2>

          <h3 className={subHeadingClass}>1. Acceptance and Curation</h3>
          <p className={bodyClass}>
            The Forge is invitation-only. Acceptance is at our sole discretion
            based on craft quality, material honesty, and design integrity. We
            reserve the right to decline or remove any Maker or product at any
            time.
          </p>

          <h3 className={subHeadingClass}>2. Commission and Fees</h3>
          <p className={bodyClass}>
            The Forge charges 12% commission plus 3% payment processing
            (Stripe). No listing fees, monthly subscriptions, or hidden costs.
            Commission is deducted automatically at the time of sale through
            Stripe Connect.
          </p>

          <h3 className={subHeadingClass}>3. Pricing</h3>
          <p className={bodyClass}>
            You set your own prices. The Forge does not run sales or offer
            discount codes. We will never change your prices without your
            consent.
          </p>

          <h3 className={subHeadingClass}>4. Products and Quality</h3>
          <p className={bodyClass}>
            All products must be handmade by you. Mass-produced items, resold
            goods, or items made primarily by machines are not permitted.
          </p>

          <h3 className={subHeadingClass}>5. Fulfillment and Shipping</h3>
          <p className={bodyClass}>
            You are responsible for fulfilling all orders. Ready to Ship items
            must ship within 5 business days. Made to Order items must be
            fulfilled within the stated lead time. You are responsible for
            secure, professional packaging.
          </p>

          <h3 className={subHeadingClass}>6. Buyer Information</h3>
          <p className={bodyClass}>
            Buyer data shared with you (name, shipping address, email) is for
            order fulfillment only. You may not add buyers to marketing lists or
            share their information with third parties.
          </p>

          <h3 className={subHeadingClass}>7. Content and Editorial</h3>
          <p className={bodyClass}>
            The Forge creates editorial content for your profile. You review and
            approve all content before publication. The Forge retains the right
            to display approved content on the Site and in marketing materials.
          </p>

          <h3 className={subHeadingClass}>8. Intellectual Property</h3>
          <p className={bodyClass}>
            You retain ownership of your product designs and original images. You
            grant The Forge a non-exclusive, royalty-free license to use your
            images, name, and likeness on the Site. Editorial content created by
            The Forge is owned by The Forge but may be used by you with
            attribution.
          </p>

          <h3 className={subHeadingClass}>9. Termination</h3>
          <p className={bodyClass}>
            Either party may terminate with 30 days written notice. Pending
            orders must still be fulfilled. The Forge may terminate immediately
            for violations or quality concerns.
          </p>

          <h3 className={subHeadingClass}>10. Governing Law</h3>
          <p className={bodyClass}>
            This Agreement is governed by the laws of the State of California.
          </p>

          <h3 className={subHeadingClass}>11. Contact</h3>
          <p className={bodyClass}>
            Questions? Contact us at hello@theforge.com.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
