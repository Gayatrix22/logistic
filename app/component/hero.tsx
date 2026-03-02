"use client";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "90vh",
        width: "100%",
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
        }}
      ></div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          animation: "slideInRight 1.5s ease forwards",
          opacity: 0,
        }}
      >
        <p
          style={{
            color: "#ff4d00",
            fontWeight: 700,
            fontSize: "20px",
            marginBottom: "10px",
          }}
        >
          ERA MARYA GLOBAL LOGISTICS PVT. LTD.
        </p>

        <h1
          style={{
            fontSize: "48px",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.2,
            marginBottom: "20px",
          }}
        >
          Innovating logistics <br /> for a better tomorrow
        </h1>

        <p
          style={{
            color: "white",
            fontSize: "20px",
            maxWidth: "650px",
          }}
        >
          Facilitating Sea and Air Freight Forwarding and Custom Clearance
          Across the Globe.
        </p>

        <div style={{ marginTop: "30px", display: "flex", gap: "15px" }}>
          <a
            href="/contact"
            style={{
              padding: "12px 28px",
              background: "#ff4d00",
              color: "#fff",
              borderRadius: "8px",
              fontSize: "18px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Get a Quote
          </a>

          <a
            href="/services"
            style={{
              padding: "12px 28px",
              border: "2px solid white",
              color: "#fff",
              borderRadius: "8px",
              fontSize: "18px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Explore Services
          </a>
        </div>
      </div>

      <svg
        viewBox="0 0 1440 320"
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          zIndex: 1,
        }}
      >
        <path fill="#ff4d00" d="M0,288L1440,224L1440,320L0,320Z"></path>
        <path fill="#ffffff" d="M0,320L1440,320L1440,280L0,320Z"></path>
      </svg>

      <style>
        {`
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(100px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @media (max-width: 768px) {
            h1 { font-size: 32px !important; }
            p { font-size: 16px !important; }
            a { font-size: 16px !important; padding: 10px 20px !important; }
          }
        `}
      </style>
    </section>
  );
}