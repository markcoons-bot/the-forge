import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Form & Element — Handmade Objects by Makers Who Chose This Life";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const font = await fetch(
    "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hiA.woff2"
  ).then((res) => res.arrayBuffer());

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
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            color: "#f4efe8",
            fontSize: 56,
            fontWeight: 300,
            letterSpacing: 6,
          }}
        >
          Form & Element
        </div>
        <div
          style={{
            color: "#f4efe8",
            fontSize: 18,
            fontWeight: 300,
            letterSpacing: 3,
            marginTop: 24,
            opacity: 0.4,
          }}
        >
          Handmade objects by makers who chose this life
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: font,
          style: "normal",
          weight: 300,
        },
      ],
    }
  );
}
