"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";
import {
  SECTION_LABEL_LIGHT,
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

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState("");

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.includes("@") || !formData.email.includes("."))
      newErrors.email = "Please enter a valid email.";
    if (!formData.country) newErrors.country = "Please select your country.";
    if (!formData.medium) newErrors.medium = "Please select your medium.";
    if (!formData.years) newErrors.years = "Please select years of experience.";
    if (!formData.about.trim()) newErrors.about = "Please tell us about your work.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setSubmitStatus("loading");
    setSubmitError("");

    const { error } = await supabase.from("maker_applications").insert({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || null,
      website: formData.website || null,
      instagram: formData.instagram || null,
      country: formData.country,
      medium: formData.medium,
      years_practicing: formData.years,
      about_work: formData.about,
      how_heard: formData.referral || null,
    });

    if (error) {
      setSubmitStatus("error");
      setSubmitError("Something went wrong. Please try again.");
    } else {
      setSubmitStatus("success");
    }
  };

  if (submitStatus === "success") {
    return (
      <>
        <Navigation />
        <section className="bg-forge-paper pt-32 md:pt-44 pb-32 md:pb-44 px-6 md:px-10">
          <div className="max-w-prose mx-auto text-center">
            <h1 className="font-serif text-[28px] font-normal leading-[1.3] text-forge-text mb-4">
              Application received.
            </h1>
            <p className="font-sans text-[17px] font-light leading-[1.7] text-forge-text/70">
              We read every application personally. You&apos;ll hear from us soon.
            </p>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="bg-forge-paper pt-32 md:pt-44 pb-16 md:pb-20 px-6 md:px-10">
        <div className="max-w-prose mx-auto">
          <ScrollReveal>
            <span className={`${SECTION_LABEL_LIGHT} label-line mb-8`}>
              For Makers
            </span>
            <h1 className="font-serif text-[32px] md:text-[44px] font-normal leading-[1.2] text-forge-text">
              If you make things by hand, we want to hear from you.
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-forge-paper pb-16 md:pb-20 px-6 md:px-10">
        <div className="max-w-[680px] mx-auto">
          <ScrollReveal>
            <p className="font-sans text-[19px] font-light leading-[1.8] text-forge-text/[0.85]">
              The Forge is invitation-only, but we are always looking. If your
              work meets our standards — if you shape raw materials into finished
              objects with <em className="italic">your own hands</em> and you are
              proud of what you make — we would like to see it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What it costs */}
      <section className="bg-forge-paper pb-16 md:pb-20 px-6 md:px-10">
        <div className="max-w-prose mx-auto">
          <ScrollReveal>
            <span className={`${SECTION_LABEL_LIGHT} label-line mb-8`}>
              What It Costs
            </span>
            <p className="font-serif text-[26px] md:text-[32px] font-normal leading-[1.3] text-forge-text mb-6">
              12% commission + 3% payment processing.
            </p>
            <p className="font-sans text-[19px] font-light leading-[1.8] text-forge-text/[0.85] mb-6">
              That&apos;s it. No listing fees. No monthly subscription. No
              hidden costs. No surprise deductions.
            </p>
            <p className="font-sans text-[19px] font-light leading-[1.8] text-forge-text/[0.85] mb-6">
              On a $250 bowl, you keep $212.50. On a $1,600 vase, you keep
              $1,360. We make money when you make money — and only when you
              make money.
            </p>
            <p className="font-sans text-[16px] font-light leading-[1.8] text-forge-text/60">
              For context: Etsy takes 20–30% when you add up their transaction
              fees, processing fees, and mandatory advertising. 1stDibs charges
              a monthly subscription plus 15–30% per sale. We think the maker
              should keep more of what they earn.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-forge-paper pb-20 md:pb-24 px-6 md:px-10">
        <div className="max-w-prose mx-auto">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={benefit.title} delay={index * 60}>
              <div className="py-6 border-b border-forge-text/[0.12]">
                <p className="font-sans text-[18px] font-semibold text-forge-text mb-1.5">
                  {benefit.title}
                </p>
                <p className="font-sans text-[17px] font-light leading-[1.8] text-forge-text/80">
                  {benefit.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="bg-forge-paper flex justify-center py-4">
        <div className="w-20 h-px bg-forge-text/[0.15]" />
      </div>

      {/* Application Form */}
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
                  className="block font-mono text-[12px] font-normal tracking-[0.15em] uppercase text-forge-text/50 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: "" });
                  }}
                  className="w-full bg-transparent border-b border-forge-text/[0.15] focus:border-forge-text/60 outline-none py-3 font-sans text-[17px] font-light text-forge-text transition-colors duration-300"
                />
                {errors.name && (
                  <p className="font-sans text-[13px] mt-1.5" style={{ color: "#a05050" }}>{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-[12px] font-normal tracking-[0.15em] uppercase text-forge-text/50 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: "" });
                  }}
                  className="w-full bg-transparent border-b border-forge-text/[0.15] focus:border-forge-text/60 outline-none py-3 font-sans text-[17px] font-light text-forge-text transition-colors duration-300"
                />
                {errors.email && (
                  <p className="font-sans text-[13px] mt-1.5" style={{ color: "#a05050" }}>{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block font-mono text-[12px] font-normal tracking-[0.15em] uppercase text-forge-text/50 mb-2"
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
                  className="w-full bg-transparent border-b border-forge-text/[0.15] focus:border-forge-text/60 outline-none py-3 font-sans text-[17px] font-light text-forge-text placeholder:text-forge-text/[0.35] transition-colors duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="website"
                  className="block font-mono text-[12px] font-normal tracking-[0.15em] uppercase text-forge-text/50 mb-2"
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
                  className="w-full bg-transparent border-b border-forge-text/[0.15] focus:border-forge-text/60 outline-none py-3 font-sans text-[17px] font-light text-forge-text placeholder:text-forge-text/[0.35] transition-colors duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="instagram"
                  className="block font-mono text-[12px] font-normal tracking-[0.15em] uppercase text-forge-text/50 mb-2"
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
                  className="w-full bg-transparent border-b border-forge-text/[0.15] focus:border-forge-text/60 outline-none py-3 font-sans text-[17px] font-light text-forge-text placeholder:text-forge-text/[0.35] transition-colors duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="block font-mono text-[12px] font-normal tracking-[0.15em] uppercase text-forge-text/50 mb-2"
                >
                  Country
                </label>
                <div className="relative">
                  <select
                    id="country"
                    value={formData.country}
                    onChange={(e) => {
                      setFormData({ ...formData, country: e.target.value });
                      if (errors.country) setErrors({ ...errors, country: "" });
                    }}
                    className="w-full bg-transparent border-b border-forge-text/[0.15] focus:border-forge-text/60 outline-none py-3 pr-10 font-sans text-[17px] font-light text-forge-text transition-colors duration-300 cursor-pointer appearance-none"
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
                {errors.country && (
                  <p className="font-sans text-[13px] mt-1.5" style={{ color: "#a05050" }}>{errors.country}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="medium"
                  className="block font-mono text-[12px] font-normal tracking-[0.15em] uppercase text-forge-text/50 mb-2"
                >
                  Medium
                </label>
                <div className="relative">
                  <select
                    id="medium"
                    value={formData.medium}
                    onChange={(e) => {
                      setFormData({ ...formData, medium: e.target.value });
                      if (errors.medium) setErrors({ ...errors, medium: "" });
                    }}
                    className="w-full bg-transparent border-b border-forge-text/[0.15] focus:border-forge-text/60 outline-none py-3 pr-10 font-sans text-[17px] font-light text-forge-text transition-colors duration-300 cursor-pointer appearance-none"
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
                {errors.medium && (
                  <p className="font-sans text-[13px] mt-1.5" style={{ color: "#a05050" }}>{errors.medium}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="years"
                  className="block font-mono text-[12px] font-normal tracking-[0.15em] uppercase text-forge-text/50 mb-2"
                >
                  Years practicing your craft
                </label>
                <div className="relative">
                  <select
                    id="years"
                    value={formData.years}
                    onChange={(e) => {
                      setFormData({ ...formData, years: e.target.value });
                      if (errors.years) setErrors({ ...errors, years: "" });
                    }}
                    className="w-full bg-transparent border-b border-forge-text/[0.15] focus:border-forge-text/60 outline-none py-3 pr-10 font-sans text-[17px] font-light text-forge-text transition-colors duration-300 cursor-pointer appearance-none"
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
                {errors.years && (
                  <p className="font-sans text-[13px] mt-1.5" style={{ color: "#a05050" }}>{errors.years}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="about"
                  className="block font-mono text-[12px] font-normal tracking-[0.15em] uppercase text-forge-text/50 mb-2"
                >
                  Tell us about your work
                </label>
                <textarea
                  id="about"
                  rows={4}
                  value={formData.about}
                  onChange={(e) => {
                    setFormData({ ...formData, about: e.target.value });
                    if (errors.about) setErrors({ ...errors, about: "" });
                  }}
                  placeholder="What do you make? How long have you been making it? What matters to you about the work?"
                  className="w-full bg-transparent border border-forge-text/[0.15] focus:border-forge-text/60 outline-none p-4 font-sans text-[17px] font-light text-forge-text placeholder:text-forge-text/[0.35] transition-colors duration-300 resize-none"
                />
                {errors.about && (
                  <p className="font-sans text-[13px] mt-1.5" style={{ color: "#a05050" }}>{errors.about}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="referral"
                  className="block font-mono text-[12px] font-normal tracking-[0.15em] uppercase text-forge-text/50 mb-2"
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
                  className="w-full bg-transparent border-b border-forge-text/[0.15] focus:border-forge-text/60 outline-none py-3 font-sans text-[17px] font-light text-forge-text placeholder:text-forge-text/[0.35] transition-colors duration-300"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={submitStatus === "loading"}
                  className="w-full py-4 bg-forge-text text-forge-paper font-sans text-[14px] font-normal tracking-[0.1em] uppercase cursor-pointer transition-all duration-400 hover:bg-[#3a3530] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {submitStatus === "loading" ? "SUBMITTING..." : "Submit Application \u2192"}
                </button>

                {submitStatus === "error" && (
                  <p className="font-sans text-[14px] font-light mt-3" style={{ color: "#a05050" }}>
                    {submitError}
                  </p>
                )}
              </div>

              <p className="font-sans text-[14px] font-light text-forge-text/50 pt-2">
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
