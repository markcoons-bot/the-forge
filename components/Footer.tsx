"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "duplicate" | "error">("idle");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.includes("@") || !email.includes(".")) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    const { error } = await supabase
      .from("newsletter_signups")
      .insert({ email });

    if (error) {
      if (error.code === "23505") {
        setStatus("duplicate");
      } else {
        setStatus("error");
      }
    } else {
      setStatus("success");
      setEmail("");
    }
  };

  return (
    <footer className="bg-forge-dark border-t border-forge-paper/[0.12]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {/* Brand */}
          <div>
            <p className="font-mono text-[18px] font-bold tracking-[0.2em] uppercase text-forge-paper/[0.95] mb-4">
              The Forge
            </p>
            <p className="font-sans text-[16px] font-light leading-[1.7] text-forge-paper/60 max-w-[320px]">
              A curated marketplace for handmade objects and the people who make
              them. Every object has a maker, a method, and a reason it exists.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-[14px] font-medium tracking-[0.15em] uppercase text-forge-paper/70 mb-6">
              Navigate
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="/makers"
                className="font-sans text-[16px] font-normal text-forge-paper/[0.55] hover:text-forge-paper/90 transition-colors duration-300"
              >
                The Makers
              </Link>
              <Link
                href="/gallery"
                className="font-sans text-[16px] font-normal text-forge-paper/[0.55] hover:text-forge-paper/90 transition-colors duration-300"
              >
                Gallery
              </Link>
              <Link
                href="/shop"
                className="font-sans text-[16px] font-normal text-forge-paper/[0.55] hover:text-forge-paper/90 transition-colors duration-300"
              >
                The Shop
              </Link>
              <Link
                href="/about"
                className="font-sans text-[16px] font-normal text-forge-paper/[0.55] hover:text-forge-paper/90 transition-colors duration-300"
              >
                About The Forge
              </Link>
              <Link
                href="/legal"
                className="font-sans text-[16px] font-normal text-forge-paper/[0.55] hover:text-forge-paper/90 transition-colors duration-300"
              >
                Legal
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="font-mono text-[14px] font-medium tracking-[0.15em] uppercase text-forge-paper/70 mb-6">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="font-sans text-[16px] font-normal text-forge-paper/[0.55] hover:text-forge-paper/90 transition-colors duration-300"
              >
                Instagram
              </a>
              <span className="font-sans text-[16px] font-normal text-forge-paper/[0.55]">
                Newsletter
              </span>
              <a
                href="#"
                className="font-sans text-[16px] font-normal text-forge-paper/[0.55] hover:text-forge-paper/90 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter signup strip */}
        <div className="mt-10 pt-10 pb-10 border-t border-forge-paper/[0.08]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="font-serif text-[22px] font-normal text-forge-paper/80">
                Stay in the loop.
              </p>
              <p className="font-sans text-[14px] font-normal text-forge-paper/[0.45] mt-1">
                One email a month. New makers, new work, nothing else.
              </p>
            </div>
            <div className="w-full md:w-auto">
              {status === "success" ? (
                <p className="font-sans text-[14px] font-normal text-forge-paper/70">
                  You&apos;re in. We&apos;ll be in touch.
                </p>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === "error" || status === "duplicate") setStatus("idle");
                    }}
                    placeholder="Your email"
                    className="bg-transparent border-b border-forge-paper/30 text-forge-paper font-sans text-[15px] outline-none py-1.5 placeholder:text-forge-paper/[0.35] w-full md:w-[280px] transition-colors duration-300 focus:border-forge-paper/60"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="text-forge-paper/50 hover:text-forge-paper/90 transition-colors duration-300 text-lg shrink-0 disabled:opacity-50"
                  >
                    {status === "loading" ? "..." : "\u2192"}
                  </button>
                </form>
              )}
              {status === "duplicate" && (
                <p className="font-sans text-[14px] font-normal text-forge-paper/70 mt-2">
                  You&apos;re already subscribed.
                </p>
              )}
              {status === "error" && (
                <p className="font-sans text-[14px] font-normal text-forge-paper/70 mt-2">
                  Something went wrong. Try again.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-forge-paper/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[13px] font-normal tracking-[0.08em] text-forge-paper/40">
            &copy; {new Date().getFullYear()} The Forge. All rights reserved.
          </p>
          <p className="font-mono text-[14px] font-normal tracking-[0.1em] text-forge-paper/[0.45]">
            Made with intention
          </p>
        </div>
      </div>
    </footer>
  );
}
