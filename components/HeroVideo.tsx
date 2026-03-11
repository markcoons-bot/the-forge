"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const HERO_IMAGES = [
  "/images/Glassblowinghero.webp",
  "/images/clayhero.jpg",
  "/images/handplanehero.webp",
  "/images/HMhands.webp",
  "/images/Leathertoolshero.jpeg",
  "/images/NCHero.jpeg",
];

const VIDEO_DURATION = 8000; // 8s on the video
const IMAGE_DURATION = 6000; // 6s per image
const TOTAL_SLIDES = HERO_IMAGES.length + 1; // images + video
const VIDEO_INDEX = HERO_IMAGES.length; // video plays last

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  // 0..N-1 = images, N = video
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  useEffect(() => {
    const isVideo = activeSlide === VIDEO_INDEX;
    const duration = isVideo ? VIDEO_DURATION : IMAGE_DURATION;

    if (isVideo && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }

    const timer = setTimeout(() => {
      setActiveSlide((activeSlide + 1) % TOTAL_SLIDES);
    }, duration);

    return () => clearTimeout(timer);
  }, [activeSlide]);

  return (
    <>
      {/* Video layer */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out"
        style={{ opacity: activeSlide === VIDEO_INDEX ? 1 : 0 }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Image layers — stacked with crossfade */}
      {HERO_IMAGES.map((src, index) => {
        const isActive = activeSlide === index;
        return (
          <div
            key={src}
            className="absolute inset-0 overflow-hidden transition-opacity duration-[1500ms] ease-in-out"
            style={{ opacity: isActive ? 1 : 0 }}
          >
            <Image
              src={src}
              alt=""
              fill
              className={`object-cover transition-transform duration-[7000ms] ease-out ${
                isActive ? "scale-[1.05]" : "scale-100"
              }`}
              sizes="100vw"
              priority={index < 2}
            />
          </div>
        );
      })}
    </>
  );
}
