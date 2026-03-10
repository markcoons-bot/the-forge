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
        {/* Circle logo */}
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            border: "2.5px solid #f4efe8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <span
            style={{
              color: "#f4efe8",
              fontSize: 38,
              fontFamily: "Georgia, serif",
              fontWeight: 500,
              letterSpacing: 2,
            }}
          >
            F&E
          </span>
        </div>

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
