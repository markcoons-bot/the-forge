import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Forge — Handmade Objects by Makers Who Chose This Life",
  description:
    "A curated marketplace for handmade objects. Clay from dirt, lumber from trees, metal from fire, glass from sand and heat. Every object has a maker, a method, and a reason it exists.",
  openGraph: {
    title: "The Forge — Handmade Objects by Makers Who Chose This Life",
    description:
      "A curated marketplace for handmade objects. Every object has a maker, a method, and a reason it exists.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${outfit.variable} ${jetbrains.variable} font-sans antialiased`}
      >
        <div className="film-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
