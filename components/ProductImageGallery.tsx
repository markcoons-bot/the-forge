"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductImageGalleryProps {
  images: string[];
  alt: string;
  bgGradient: string;
}

export default function ProductImageGallery({
  images,
  alt,
  bgGradient,
}: ProductImageGalleryProps) {
  const [current, setCurrent] = useState(0);
  const hasMultiple = images.length > 1;

  return (
    <div>
      {/* Main image */}
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: bgGradient }}
        />
        {images.map((img, index) => (
          <Image
            key={img}
            src={img}
            alt={`${alt}${index > 0 ? `, view ${index + 1}` : ""}`}
            fill
            className={`object-cover transition-opacity duration-200 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 1024px) 100vw, 58vw"
            priority={index === 0}
          />
        ))}

        {/* Left arrow */}
        {hasMultiple && current > 0 && (
          <button
            onClick={() => setCurrent((i) => i - 1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-white/50 hover:text-white transition-colors duration-200"
            aria-label="Previous image"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="13 4 7 10 13 16" />
            </svg>
          </button>
        )}

        {/* Right arrow */}
        {hasMultiple && current < images.length - 1 && (
          <button
            onClick={() => setCurrent((i) => i + 1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-white/50 hover:text-white transition-colors duration-200"
            aria-label="Next image"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="7 4 13 10 7 16" />
            </svg>
          </button>
        )}
      </div>

      {/* Dot indicators */}
      {hasMultiple && (
        <div className="flex justify-center gap-2 mt-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                index === current
                  ? "bg-forge-text"
                  : "bg-forge-text/25"
              }`}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
