import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-forge-dark border-t border-forge-paper/[0.15]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand */}
          <div>
            <p className="font-mono text-[16px] font-bold tracking-[0.2em] uppercase text-forge-paper/90 mb-4">
              The Forge
            </p>
            <p className="font-sans text-[15px] font-light leading-[1.7] text-forge-paper/70">
              A curated marketplace for handmade objects and the people who make
              them. Every object has a maker, a method, and a reason it exists.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-[13px] font-medium tracking-[0.15em] uppercase text-forge-paper/60 mb-6">
              Navigate
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="/makers"
                className="font-sans text-[15px] font-normal text-forge-paper/65 hover:text-forge-paper/90 transition-colors duration-300"
              >
                The Makers
              </Link>
              <Link
                href="/gallery"
                className="font-sans text-[15px] font-normal text-forge-paper/65 hover:text-forge-paper/90 transition-colors duration-300"
              >
                Gallery
              </Link>
              <Link
                href="/shop"
                className="font-sans text-[15px] font-normal text-forge-paper/65 hover:text-forge-paper/90 transition-colors duration-300"
              >
                The Shop
              </Link>
              <Link
                href="/about"
                className="font-sans text-[15px] font-normal text-forge-paper/65 hover:text-forge-paper/90 transition-colors duration-300"
              >
                About The Forge
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-[13px] font-medium tracking-[0.15em] uppercase text-forge-paper/60 mb-6">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="font-sans text-[15px] font-normal text-forge-paper/65 hover:text-forge-paper/90 transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="#"
                className="font-sans text-[15px] font-normal text-forge-paper/65 hover:text-forge-paper/90 transition-colors duration-300"
              >
                Newsletter
              </a>
              <a
                href="#"
                className="font-sans text-[15px] font-normal text-forge-paper/65 hover:text-forge-paper/90 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-forge-paper/[0.15] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[13px] font-normal tracking-[0.08em] text-forge-paper/50">
            &copy; {new Date().getFullYear()} The Forge. All rights reserved.
          </p>
          <p className="font-mono text-[14px] font-normal tracking-[0.1em] text-forge-paper/50">
            Made with intention
          </p>
        </div>
      </div>
    </footer>
  );
}
