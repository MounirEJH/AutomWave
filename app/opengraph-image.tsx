import { ImageResponse } from "next/og";

export const alt = "AutomWave · Diseño web y automatización en Barcelona";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Dynamically generated social preview image (no static asset needed).
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background:
            "linear-gradient(150deg,#0a1613,#0f2a22 55%,#123a2e)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo + Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
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
            }}
          />

          <div
            style={{
              display: "flex",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            AutomWave
          </div>
        </div>

        {/* Main headline */}
        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            maxWidth: 900,
          }}
        >
          Tu negocio, funcionando{" "}
          <span
            style={{
              display: "flex",
              color: "#7fd9c1",
            }}
          >
            solo
          </span>{" "}
          mientras tú creces.
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 30,
            color: "rgba(255,255,255,0.72)",
          }}
        >
          Diseño web y automatización · Barcelona
        </div>
      </div>
    ),
    {
      width: size.width,
      height: size.height,
    }
  );
}