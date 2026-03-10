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
          gap: 20,
        }}
      >
        <div
          style={{
            color: "#f4efe8",
            fontSize: 48,
            fontWeight: 400,
            letterSpacing: 10,
          }}
        >
          FORM & ELEMENT
        </div>
        <div
          style={{
            color: "#f4efe8",
            fontSize: 16,
            letterSpacing: 4,
            opacity: 0.45,
          }}
        >
          HANDMADE OBJECTS BY MAKERS WHO CHOSE THIS LIFE
        </div>
      </div>
    ),
    { ...size }
  );
}
