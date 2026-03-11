import type { Metadata } from "next";
import { Cormorant_Garamond, Tenor_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal"],
  variable: "--font-cormorant",
  display: "swap",
});

const tenor = Tenor_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-tenor",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://formandelement.com"),
  title: {
    default: "Form & Element — Handmade Objects by Independent Makers",
    template: "%s | Form & Element",
  },
  description:
    "A curated marketplace for handmade objects. Every piece made by hand, by makers who have given their lives to a single pursuit.",
  keywords: [
    "handmade",
    "studio pottery",
    "handcrafted objects",
    "independent makers",
    "artisan marketplace",
    "handmade ceramics",
    "studio glass",
    "handmade woodwork",
  ],
  icons: { icon: "/images/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://formandelement.com",
    siteName: "Form & Element",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Form & Element — Handmade Objects by Independent Makers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Form & Element — Handmade Objects by Independent Makers",
    description:
      "A curated marketplace for handmade objects by independent makers.",
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large" as const,
    },
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
        className={`${cormorant.variable} ${tenor.variable} font-sans antialiased`}
      >
        <div className="film-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
