"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import {
  BODY_DARK,
  SECTION_LABEL_DARK,
} from "@/lib/typography";

const mediums = [
  "Clay",
  "Wood",
  "Metal",
  "Glass",
  "Leather",
  "Stone",
  "Fiber",
  "Other",
];

const benefits = [
  {
    title: "Professional editorial",
    description:
      "We write your story. Studio visit, process photography direction, long-form profile. Your work presented the way it deserves.",
  },
  {
    title: "Premium pricing protected",
    description:
      "We do not run sales. We do not offer discount codes. Your prices are your prices, and we will never pressure you to lower them.",
  },
  {
    title: "You control production",
    description:
      "Made to order, ready to ship, limited runs — your pace, your capacity. We will never ask you to scale beyond what your hands can do.",
  },
];

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Japan",
  "Germany",
  "France",
  "Netherlands",
  "Sweden",
  "Denmark",
  "Norway",
  "Italy",
  "Spain",
  "Portugal",
  "Mexico",
  "South Korea",
  "New Zealand",
  "Ireland",
  "Belgium",
  "Switzerland",
  "Austria",
  "Other",
];

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    instagram: "",
    country: "",
    medium: "",
    years: "",
    about: "",
    referral: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Will connect to Supabase later
  };

  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-16 md:pb-20 px-6 md:px-10">
        <div className="max-w-prose mx-auto">
          <ScrollReveal>
            <span className={`${SECTION_LABEL_DARK} label-line mb-8`}>
              For Makers
            </span>
            <h1 className="font-serif text-[32px] md:text-[44px] lg:text-[56px] font-normal leading-[1.2] text-forge-paper">
              If you make things by hand, we want to hear from you.
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro */}
      <section className="pb-16 md:pb-20 px-6 md:px-10">
        <div className="max-w-prose mx-auto">
          <ScrollReveal>
            <p className={BODY_DARK}>
              The Forge is invitation-only, but we are always looking. If your
              work meets our standards — if you shape raw materials into finished
              objects with <em className="italic">your own hands</em> and you are
              proud of what you make — we would like to see it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What it costs */}
      <section className="pb-16 md:pb-20 px-6 md:px-10">
        <div className="max-w-prose mx-auto">
          <ScrollReveal>
            <span className={`${SECTION_LABEL_DARK} label-line mb-8`}>
              What It Costs
            </span>
            <p className="font-serif text-[26px] md:text-[32px] font-light leading-[1.3] text-forge-paper mb-6">
              12% commission + 3% payment processing.
            </p>
            <p className={`${BODY_DARK} mb-6`}>
              That&apos;s it. No listing fees. No monthly subscription. No
              hidden costs. No surprise deductions.
            </p>
            <p className={`${BODY_DARK} mb-6`}>
              On a $250 bowl, you keep $212.50. On a $1,600 vase, you keep
              $1,360. We make money when you make money — and only when you
              make money.
            </p>
            <p className="font-sans text-[16px] font-light leading-[1.8] text-forge-paper/70">
              For context: Etsy takes 20–30% when you add up their transaction
              fees, processing fees, and mandatory advertising. 1stDibs charges
              a monthly subscription plus 15–30% per sale. We think the maker
              should keep more of what they earn.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="pb-20 md:pb-24 px-6 md:px-10">
        <div className="max-w-prose mx-auto">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={benefit.title} delay={index * 60}>
              <div className="py-6 border-b border-white/[0.08]">
                <p className="font-sans text-[17px] font-medium text-forge-paper mb-1.5">
                  {benefit.title}
                </p>
                <p className="font-sans text-[16px] font-light leading-[1.8] text-forge-paper/70">
                  {benefit.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Application Form — warm paper */}
      <section className="bg-forge-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-prose mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-[26px] md:text-[32px] font-normal leading-[1.3] text-forge-text mb-10">
              Tell us about your work
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-mono text-[13px] font-normal tracking-[0.15em] uppercase text-forge-text/60 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-forge-text/20 focus:border-forge-text/60 outline-none py-3 font-sans text-[16px] font-light text-forge-text transition-colors duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-[13px] font-normal tracking-[0.15em] uppercase text-forge-text/60 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-forge-text/20 focus:border-forge-text/60 outline-none py-3 font-sans text-[16px] font-light text-forge-text transition-colors duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block font-mono text-[13px] font-normal tracking-[0.15em] uppercase text-forge-text/60 mb-2"
                >
                  Phone <span className="text-forge-text/30 normal-case tracking-normal">(optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-transparent border-b border-forge-text/20 focus:border-forge-text/60 outline-none py-3 font-sans text-[16px] font-light text-forge-text placeholder:text-forge-text/30 transition-colors duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="website"
                  className="block font-mono text-[13px] font-normal tracking-[0.15em] uppercase text-forge-text/60 mb-2"
                >
                  Website <span className="text-forge-text/30 normal-case tracking-normal">(optional)</span>
                </label>
                <input
                  type="url"
                  id="website"
                  value={formData.website}
                  onChange={(e) =>
                    setFormData({ ...formData, website: e.target.value })
                  }
                  placeholder="https://"
                  className="w-full bg-transparent border-b border-forge-text/20 focus:border-forge-text/60 outline-none py-3 font-sans text-[16px] font-light text-forge-text placeholder:text-forge-text/30 transition-colors duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="instagram"
                  className="block font-mono text-[13px] font-normal tracking-[0.15em] uppercase text-forge-text/60 mb-2"
                >
                  Instagram <span className="text-forge-text/30 normal-case tracking-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  id="instagram"
                  value={formData.instagram}
                  onChange={(e) =>
                    setFormData({ ...formData, instagram: e.target.value })
                  }
                  placeholder="@yourstudio"
                  className="w-full bg-transparent border-b border-forge-text/20 focus:border-forge-text/60 outline-none py-3 font-sans text-[16px] font-light text-forge-text placeholder:text-forge-text/30 transition-colors duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="block font-mono text-[13px] font-normal tracking-[0.15em] uppercase text-forge-text/60 mb-2"
                >
                  Country
                </label>
                <div className="relative">
                  <select
                    id="country"
                    required
                    value={formData.country}
                    onChange={(e) =>
                      setFormData({ ...formData, country: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-forge-text/20 focus:border-forge-text/60 outline-none py-3 pr-10 font-sans text-[16px] font-light text-forge-text transition-colors duration-300 cursor-pointer appearance-none"
                  >
                    <option value="" disabled>
                      Select your country
                    </option>
                    {countries.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-forge-text/40 text-lg" aria-hidden="true">&#9662;</span>
                </div>
              </div>

              <div>
                <label
                  htmlFor="medium"
                  className="block font-mono text-[13px] font-normal tracking-[0.15em] uppercase text-forge-text/60 mb-2"
                >
                  Medium
                </label>
                <div className="relative">
                  <select
                    id="medium"
                    required
                    value={formData.medium}
                    onChange={(e) =>
                      setFormData({ ...formData, medium: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-forge-text/20 focus:border-forge-text/60 outline-none py-3 pr-10 font-sans text-[16px] font-light text-forge-text transition-colors duration-300 cursor-pointer appearance-none"
                  >
                    <option value="" disabled>
                      Select your medium
                    </option>
                    {mediums.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-forge-text/40 text-lg" aria-hidden="true">&#9662;</span>
                </div>
              </div>

              <div>
                <label
                  htmlFor="years"
                  className="block font-mono text-[13px] font-normal tracking-[0.15em] uppercase text-forge-text/60 mb-2"
                >
                  Years practicing your craft
                </label>
                <div className="relative">
                  <select
                    id="years"
                    required
                    value={formData.years}
                    onChange={(e) =>
                      setFormData({ ...formData, years: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-forge-text/20 focus:border-forge-text/60 outline-none py-3 pr-10 font-sans text-[16px] font-light text-forge-text transition-colors duration-300 cursor-pointer appearance-none"
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="1-3">1–3 years</option>
                    <option value="3-5">3–5 years</option>
                    <option value="5-10">5–10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                  <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-forge-text/40 text-lg" aria-hidden="true">&#9662;</span>
                </div>
              </div>

              <div>
                <label
                  htmlFor="about"
                  className="block font-mono text-[13px] font-normal tracking-[0.15em] uppercase text-forge-text/60 mb-2"
                >
                  Tell us about your work
                </label>
                <textarea
                  id="about"
                  required
                  rows={4}
                  value={formData.about}
                  onChange={(e) =>
                    setFormData({ ...formData, about: e.target.value })
                  }
                  placeholder="What do you make? How long have you been making it? What matters to you about the work?"
                  className="w-full bg-transparent border border-forge-text/20 focus:border-forge-text/60 outline-none p-4 font-sans text-[16px] font-light text-forge-text placeholder:text-forge-text/30 transition-colors duration-300 resize-none"
                />
              </div>

              <div>
                <label
                  htmlFor="referral"
                  className="block font-mono text-[13px] font-normal tracking-[0.15em] uppercase text-forge-text/60 mb-2"
                >
                  How did you hear about us? <span className="text-forge-text/30 normal-case tracking-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  id="referral"
                  value={formData.referral}
                  onChange={(e) =>
                    setFormData({ ...formData, referral: e.target.value })
                  }
                  placeholder="Instagram, a friend, a search…"
                  className="w-full bg-transparent border-b border-forge-text/20 focus:border-forge-text/60 outline-none py-3 font-sans text-[16px] font-light text-forge-text placeholder:text-forge-text/30 transition-colors duration-300"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="btn-forge-solid w-full py-4 text-[13px] tracking-[0.08em]"
                >
                  Submit Application &rarr;
                </button>
              </div>

              <p className="font-mono text-[13px] font-normal tracking-[0.05em] text-forge-text/60 pt-2">
                We respond to every application personally.
              </p>
            </form>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
