import { ImageResponse } from "next/og";

export const alt =
  "Decision Desk — Ask the company. See the evidence. Decide faster.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "62px 72px",
        color: "#f2f0e7",
        background: "#17231e",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
          fontSize: 25,
          fontWeight: 650,
        }}
      >
        <div
          style={{
            width: 54,
            height: 54,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#17231e",
            background: "#cbe879",
            borderRadius: 13,
            fontSize: 30,
            fontFamily: "serif",
          }}
        >
          D
        </div>
        Decision Desk
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            maxWidth: 960,
            fontFamily: "serif",
            fontSize: 82,
            lineHeight: 0.98,
            letterSpacing: "-3px",
          }}
        >
          Ask the company. See the evidence. Decide faster.
        </div>
        <div
          style={{
            marginTop: 30,
            color: "#b8c2bc",
            fontSize: 24,
          }}
        >
          A synthetic AI company-brain sandbox by Matthes Schramm.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#cbe879",
          fontSize: 17,
          letterSpacing: "1px",
          textTransform: "uppercase",
        }}
      >
        <span>Every claim cited</span>
        <span>Built with AI coding agents</span>
      </div>
    </div>,
    size,
  );
}
