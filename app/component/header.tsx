"use client";

import Link from "next/link";

export default function Header() {
  const menuItemStyle: React.CSSProperties = {
    cursor: "pointer",
    transition: "transform 0.2s ease, color 0.2s ease",
  };

  const menuItemTouch = (e: any) => {
    e.target.style.transform = "scale(0.90)";
    setTimeout(() => {
      e.target.style.transform = "scale(1)";
    }, 150);
  };

  const menuLinks = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Blog", link: "/blog" },
    { name: "Gallery", link: "/gallery" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <header
      style={{
        width: "100%",
        background: "#ffffff",
        borderBottom: "1px solid #e5e5e5",
        padding: "10px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo + Title */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <img
            src="/logo.png"
            alt="Company Logo"
            style={{ width: "55px", height: "55px", objectFit: "contain" }}
          />

          <div style={{ lineHeight: "1.1" }}>
            <h2
              style={{
                margin: 0,
                fontSize: "20px",
                fontWeight: "700",
                color: "#d92c21",
                textTransform: "uppercase",
              }}
            >
              ERA MARYA
            </h2>

            <h3
              style={{
                margin: 0,
                fontSize: "16px",
                fontWeight: "600",
                color: "#000",
                textTransform: "uppercase",
              }}
            >
              GLOBAL LOGISTICS
            </h3>

            <span
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#555",
                textTransform: "uppercase",
              }}
            >
              Private Limited
            </span>
          </div>
        </div>

        {/* Navigation Right */}
        <nav>
          <ul
            style={{
              display: "flex",
              gap: "30px",
              listStyle: "none",
              margin: 0,
              padding: 0,
              fontSize: "16px",
              fontWeight: "600",
              color: "#000",
            }}
          >
            {menuLinks.map((item) => (
              <li key={item.name} style={menuItemStyle}>
                <Link
                  href={item.link}
                  style={{ textDecoration: "none", color: "#000" }}
                  onClick={menuItemTouch}
                  onTouchStart={menuItemTouch}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}