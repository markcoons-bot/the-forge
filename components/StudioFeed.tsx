"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { SECTION_LABEL_DARK, NAV_LINK } from "@/lib/typography";

interface StudioTile {
  image: string;
  makerName: string;
  medium: string;
  caption: string;
}

const tiles: StudioTile[] = [
  {
    image: "/images/FGextra.webp",
    makerName: "Florian Gadsby",
    medium: "Clay",
    caption: "Kiln opening, 6am",
  },
  {
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400&h=400&fit=crop&q=80",
    makerName: "Hana Miura",
    medium: "Glass",
    caption: "Gathering from the furnace",
  },
  {
    image: "/images/FGProcess2.webp",
    makerName: "Florian Gadsby",
    medium: "Clay",
    caption: "Glaze testing, batch 34",
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop&q=80",
    makerName: "Elias Brandt",
    medium: "Wood",
    caption: "White oak, air-dried two years",
  },
  {
    image: "https://images.unsplash.com/photo-1518893063132-36e46dbe2428?w=400&h=400&fit=crop&q=80",
    makerName: "Hana Miura",
    medium: "Glass",
    caption: "Annealing oven, overnight",
  },
  {
    image: "https://images.unsplash.com/photo-1531310197839-ccf54634509e?w=400&h=400&fit=crop&q=80",
    makerName: "Maren Loft",
    medium: "Fiber",
    caption: "Crowberry dye bath",
  },
  {
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=400&fit=crop&q=80",
    makerName: "Reva Solis",
    medium: "Metal",
    caption: "Coal forge at dusk",
  },
  {
    image: "https://images.unsplash.com/photo-1605433246452-258b9e8a2e05?w=400&h=400&fit=crop&q=80",
    makerName: "Elias Brandt",
    medium: "Wood",
    caption: "Dovetail, hand-cut",
  },
  {
    image: "https://images.unsplash.com/photo-1602178506166-9a3d87917922?w=400&h=400&fit=crop&q=80",
    makerName: "Reva Solis",
    medium: "Metal",
    caption: "Bronze pour, 1,100°C",
  },
  {
    image: "/images/Potterytools.webp",
    makerName: "Florian Gadsby",
    medium: "Clay",
    caption: "Tools of the trade",
  },
  {
    image: "https://images.unsplash.com/photo-1473188588951-666fce8e7c68?w=400&h=400&fit=crop&q=80",
    makerName: "Maren Loft",
    medium: "Fiber",
    caption: "Warp threads, morning light",
  },
];

export default function StudioFeed() {
  return (
    <section className="py-20 md:py-28">
      {/* Header */}
      <div className="px-6 md:px-10 max-w-7xl mx-auto mb-8">
        <ScrollReveal>
          <div className="flex items-end justify-between">
            <div>
              <span className={`${SECTION_LABEL_DARK} block mb-3`}>
                From the Studios
              </span>
              <p className="font-sans text-[14px] font-light text-forge-paper/40">
                Unfinished work. Open kilns. Quiet mornings. The moments between the moments.
              </p>
            </div>
            <a
              href="#"
              className={`hidden md:inline-flex items-center gap-2 ${NAV_LINK} text-forge-paper/40 hover:text-forge-paper/70 transition-colors duration-300 shrink-0`}
            >
              Follow the makers <span>&rarr;</span>
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Scrolling tiles */}
      <ScrollReveal>
        <div className="studio-feed-scroll overflow-x-auto pb-4 px-6 md:px-10">
          <div className="flex gap-3 w-max">
            {tiles.map((tile, index) => (
              <div
                key={index}
                className="group relative w-[260px] md:w-[300px] aspect-square shrink-0 overflow-hidden cursor-pointer"
              >
                {/* Photo */}
                <Image
                  src={tile.image}
                  alt={tile.caption}
                  fill
                  className="object-cover transition-transform duration-700 ease-forge group-hover:scale-[1.06]"
                  sizes="300px"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-forge-dark/0 group-hover:bg-forge-dark/60 transition-all duration-500 ease-forge" />

                {/* Hover content — centered */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-5 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-forge translate-y-2 group-hover:translate-y-0">
                  <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-forge-paper/60 mb-2">
                    {tile.medium}
                  </p>
                  <p className="font-sans text-[14px] font-light text-forge-paper">
                    {tile.makerName}
                  </p>
                  <p className="font-sans text-[13px] font-light text-forge-paper/50 mt-1.5">
                    {tile.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Mobile "Follow" link */}
      <div className="px-6 md:hidden mt-6">
        <a
          href="#"
          className={`inline-flex items-center gap-2 ${NAV_LINK} text-forge-paper/40 hover:text-forge-paper/70 transition-colors duration-300`}
        >
          Follow the makers <span>&rarr;</span>
        </a>
      </div>
    </section>
  );
}
