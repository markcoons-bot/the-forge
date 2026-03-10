import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Form & Element — Handmade Objects by Makers Who Chose This Life";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1a1816",
        }}
      >
        {/* SVG circle logo */}
        <svg
          width="140"
          height="140"
          viewBox="0 0 400 400"
          fill="none"
          style={{ marginBottom: 44 }}
        >
          <circle cx="200" cy="200" r="175" stroke="#f4efe8" strokeWidth="5" />
          <circle cx="200" cy="200" r="158" stroke="#f4efe8" strokeWidth="2.5" />
          <text
            x="200"
            y="225"
            fill="#f4efe8"
            fontSize="105"
            fontWeight="500"
            fontFamily="Georgia, serif"
            textAnchor="middle"
            letterSpacing="4"
          >
            F&amp;E
          </text>
        </svg>

        {/* Brand name */}
        <span
          style={{
            color: "#f4efe8",
            fontSize: 32,
            fontFamily: "Georgia, serif",
            letterSpacing: 8,
            opacity: 0.9,
            textTransform: "uppercase" as const,
          }}
        >
          Form & Element
        </span>

        {/* Tagline */}
        <span
          style={{
            color: "#f4efe8",
            fontSize: 16,
            fontFamily: "sans-serif",
            letterSpacing: 4,
            opacity: 0.45,
            marginTop: 16,
            textTransform: "uppercase" as const,
          }}
        >
          Handmade objects by makers who chose this life
        </span>
      </div>
    ),
    { ...size }
  );
}
