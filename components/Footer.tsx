"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "duplicate" | "error">("idle");

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  useEffect(() => {
    if (!modalOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [modalOpen, closeModal]);

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
    <>
      <footer className="bg-forge-dark border-t border-forge-paper/[0.12]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            {/* Brand */}
            <div>
              <p className="font-mono text-[18px] font-bold tracking-[0.2em] uppercase text-forge-paper mb-4">
                The Forge
              </p>
              <p className="font-sans text-[16px] font-light leading-[1.7] text-forge-paper/[0.65] max-w-[320px]">
                A curated marketplace for handmade objects and the people who make
                them. Every object has a maker, a method, and a reason it exists.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="font-mono text-[14px] font-medium tracking-[0.15em] uppercase text-forge-paper/80 mb-6">
                Navigate
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/makers"
                  className="font-sans text-[16px] font-normal text-forge-paper/[0.65] hover:text-forge-paper transition-colors duration-300"
                >
                  The Makers
                </Link>
                <Link
                  href="/gallery"
                  className="font-sans text-[16px] font-normal text-forge-paper/[0.65] hover:text-forge-paper transition-colors duration-300"
                >
                  Gallery
                </Link>
                <Link
                  href="/shop"
                  className="font-sans text-[16px] font-normal text-forge-paper/[0.65] hover:text-forge-paper transition-colors duration-300"
                >
                  The Shop
                </Link>
                <Link
                  href="/about"
                  className="font-sans text-[16px] font-normal text-forge-paper/[0.65] hover:text-forge-paper transition-colors duration-300"
                >
                  About The Forge
                </Link>
                <Link
                  href="/legal"
                  className="font-sans text-[16px] font-normal text-forge-paper/[0.65] hover:text-forge-paper transition-colors duration-300"
                >
                  Legal
                </Link>
              </div>
            </div>

            {/* Connect */}
            <div>
              <p className="font-mono text-[14px] font-medium tracking-[0.15em] uppercase text-forge-paper/80 mb-6">
                Connect
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  className="font-sans text-[16px] font-normal text-forge-paper/[0.65] hover:text-forge-paper transition-colors duration-300"
                >
                  Instagram
                </a>
                <button
                  onClick={() => setModalOpen(true)}
                  className="font-sans text-[16px] font-normal text-forge-paper/[0.65] hover:text-forge-paper transition-colors duration-300 text-left"
                >
                  Newsletter
                </button>
                <a
                  href="#"
                  className="font-sans text-[16px] font-normal text-forge-paper/[0.65] hover:text-forge-paper transition-colors duration-300"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-forge-paper/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-mono text-[13px] font-normal tracking-[0.08em] text-forge-paper/[0.45]">
              &copy; {new Date().getFullYear()} The Forge. All rights reserved.
            </p>
            <p className="font-mono text-[14px] font-normal tracking-[0.1em] text-forge-paper/[0.55]">
              Made with intention
            </p>
          </div>
        </div>
      </footer>

      {/* Newsletter Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div className="absolute inset-0 bg-[#1a1816]/85" />

          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-forge-paper/60 hover:text-forge-paper text-[20px] transition-colors duration-300 z-10"
          >
            &#10005;
          </button>

          <div
            className="relative z-10 text-center px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-serif text-[36px] font-normal text-forge-paper/[0.95]">
              Stay in the loop.
            </p>
            <p className="font-sans text-[16px] font-normal text-forge-paper/[0.55] mt-3">
              One email a month. New makers, new work, nothing else.
            </p>

            <div className="mt-8">
              {status === "success" ? (
                <p className="font-sans text-[16px] font-normal text-forge-paper/80">
                  You&apos;re in. We&apos;ll be in touch.
                </p>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex items-center justify-center gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === "error" || status === "duplicate") setStatus("idle");
                    }}
                    placeholder="Your email"
                    className="bg-transparent border-b border-forge-paper/40 text-forge-paper font-sans text-[16px] outline-none py-1.5 placeholder:text-forge-paper/40 w-[320px] transition-colors duration-300 focus:border-forge-paper/60"
                    autoFocus
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="text-forge-paper/[0.65] hover:text-forge-paper transition-colors duration-300 text-lg shrink-0 disabled:opacity-50"
                  >
                    {status === "loading" ? "..." : "\u2192"}
                  </button>
                </form>
              )}
              {status === "duplicate" && (
                <p className="font-sans text-[16px] font-normal text-forge-paper/70 mt-4">
                  You&apos;re already subscribed.
                </p>
              )}
              {status === "error" && (
                <p className="font-sans text-[16px] font-normal text-forge-paper/70 mt-4">
                  Something went wrong. Try again.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
