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
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ color: "#f4efe8", fontSize: 64 }}>
            Form & Element
          </div>
          <div style={{ color: "#f4efe880", fontSize: 20, marginTop: 24 }}>
            Handmade objects by makers who chose this life
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
