"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NAV_LINK } from "@/lib/typography";

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Body scroll lock when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className="nav-container fixed top-0 left-0 right-0 z-50 opacity-100 translate-y-0"
      >
        <div className="bg-forge-dark/80 backdrop-blur-md border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-opacity duration-300"
            >
              <svg width="28" height="28" viewBox="0 0 400 400" fill="none" aria-hidden="true">
                <circle cx="200" cy="200" r="175" stroke="#ffffff" strokeWidth="5"/>
                <circle cx="200" cy="200" r="158" stroke="#ffffff" strokeWidth="2.5"/>
                <text x="200" y="225" fill="#ffffff" fontSize="105" fontWeight="500" fontFamily="Georgia, serif" textAnchor="middle" letterSpacing="4">F&amp;E</text>
              </svg>
              <span className="hidden md:inline font-serif text-[15px] font-normal tracking-[0.16em] uppercase text-forge-paper">
                Form &amp; Element
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/makers" className={`${NAV_LINK} text-forge-paper hover:text-forge-paper/70 transition-colors duration-300`}>
                Makers
              </Link>
              <Link href="/gallery" className={`${NAV_LINK} text-forge-paper hover:text-forge-paper/70 transition-colors duration-300`}>
                Gallery
              </Link>
              <Link href="/shop" className={`${NAV_LINK} text-forge-paper hover:text-forge-paper/70 transition-colors duration-300`}>
                Shop
              </Link>
              <Link href="/about" className={`${NAV_LINK} text-forge-paper hover:text-forge-paper/70 transition-colors duration-300`}>
                About
              </Link>
              <span className="w-px h-4 bg-forge-paper/15" />
              <Link
                href="/apply"
                className={`${NAV_LINK} text-forge-paper hover:text-forge-paper/70 transition-colors duration-300`}
              >
                For Makers &rarr;
              </Link>
            </div>

            {/* Hamburger button — mobile only */}
            <button
              className="md:hidden relative w-8 h-8 flex items-center justify-center"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span
                className={`absolute h-px w-5 bg-forge-paper transition-all duration-300 ease-out ${
                  menuOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute h-px w-5 bg-forge-paper transition-all duration-300 ease-out ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute h-px w-5 bg-forge-paper transition-all duration-300 ease-out ${
                  menuOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen mobile overlay */}
      <div
        className={`fixed inset-0 bg-forge-dark z-40 flex flex-col items-center justify-center transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-6">
          <Link
            href="/makers"
            onClick={() => setMenuOpen(false)}
            className="font-serif text-[32px] font-normal text-forge-paper/90 hover:text-forge-paper transition-colors duration-300"
          >
            Makers
          </Link>
          <Link
            href="/gallery"
            onClick={() => setMenuOpen(false)}
            className="font-serif text-[32px] font-normal text-forge-paper/90 hover:text-forge-paper transition-colors duration-300"
          >
            Gallery
          </Link>
          <Link
            href="/shop"
            onClick={() => setMenuOpen(false)}
            className="font-serif text-[32px] font-normal text-forge-paper/90 hover:text-forge-paper transition-colors duration-300"
          >
            Shop
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="font-serif text-[32px] font-normal text-forge-paper/90 hover:text-forge-paper transition-colors duration-300"
          >
            About
          </Link>
          <div className="w-8 h-px bg-forge-paper/20 my-2" />
          <Link
            href="/apply"
            onClick={() => setMenuOpen(false)}
            className={`${NAV_LINK} text-forge-paper/50 hover:text-forge-paper transition-colors duration-300`}
          >
            For Makers &rarr;
          </Link>
        </nav>
      </div>
    </>
  );
}
