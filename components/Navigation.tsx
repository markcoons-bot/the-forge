"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NAV_LINK, NAV_LINK_MUTED } from "@/lib/typography";

export default function Navigation() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const locked = useRef(false);

  // Show nav on scroll (homepage) or immediately (other pages)
  useEffect(() => {
    if (!isHomepage) {
      setVisible(true);
      locked.current = true;
      return;
    }

    const handleScroll = () => {
      if (locked.current) return;

      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (scrollY > viewportHeight * 0.85) {
        setVisible(true);
        locked.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomepage]);

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
        className={`nav-container fixed top-0 left-0 right-0 z-50 ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-forge-dark/80 backdrop-blur-md border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
            <Link
              href="/"
              className={`${NAV_LINK} tracking-[0.15em] uppercase text-forge-paper/90 hover:text-forge-paper transition-colors duration-300`}
            >
              The Forge
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/makers" className={NAV_LINK_MUTED}>
                Makers
              </Link>
              <Link href="/gallery" className={NAV_LINK_MUTED}>
                Gallery
              </Link>
              <Link href="/shop" className={NAV_LINK_MUTED}>
                Shop
              </Link>
              <Link href="/about" className={NAV_LINK_MUTED}>
                About
              </Link>
              <span className="w-px h-4 bg-forge-paper/15" />
              <Link
                href="/apply"
                className={`${NAV_LINK} text-forge-paper/80 hover:text-forge-paper transition-colors duration-300`}
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
        <nav className="flex flex-col items-center gap-8">
          <Link
            href="/makers"
            onClick={() => setMenuOpen(false)}
            className="font-serif text-[28px] font-light text-forge-paper/90 hover:text-forge-paper transition-colors duration-300"
          >
            Makers
          </Link>
          <Link
            href="/gallery"
            onClick={() => setMenuOpen(false)}
            className="font-serif text-[28px] font-light text-forge-paper/90 hover:text-forge-paper transition-colors duration-300"
          >
            Gallery
          </Link>
          <Link
            href="/shop"
            onClick={() => setMenuOpen(false)}
            className="font-serif text-[28px] font-light text-forge-paper/90 hover:text-forge-paper transition-colors duration-300"
          >
            Shop
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="font-serif text-[28px] font-light text-forge-paper/90 hover:text-forge-paper transition-colors duration-300"
          >
            About
          </Link>
          <div className="w-8 h-px bg-forge-paper/20 my-2" />
          <Link
            href="/apply"
            onClick={() => setMenuOpen(false)}
            className={`${NAV_LINK} text-forge-paper/80 hover:text-forge-paper transition-colors duration-300`}
          >
            For Makers &rarr;
          </Link>
        </nav>
      </div>
    </>
  );
}
