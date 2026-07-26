import { ImageResponse } from "next/og";

export const alt = "AutomWave · Diseño web y automatización en Barcelona";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

/**
 * Dynamically generated social preview image.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background:
            "linear-gradient(150deg, #0a1613, #0f2a22 55%, #123a2e)",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Logo section */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#0a1613",
              border: "2px solid #0ea47f",
              display: "flex",
            }}
          />

          <div
            style={{
              display: "flex",
              marginLeft: 20,
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            AutomWave
          </div>
        </div>

        {/* Main title */}
        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Tu negocio, funcionando solo mientras tú creces.
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 30,
            color: "#b8d8d0",
          }}
        >
          Diseño web y automatización · Barcelona
        </div>

        {/* Bottom brand */}
        <div
          style={{
            display: "flex",
            marginTop: 60,
            fontSize: 22,
            color: "#7fd9c1",
          }}
        >
          AUTOMWAVE.COM
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}