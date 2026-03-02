"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

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
    { name: "About us", link: "/About-us" },
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
        borderBottom: "3px solid #e5e5e5",
        padding: "15px 0",
        position: "sticky",
        top: 0,
        zIndex: 999,
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
            style={{ width: "80px", height: "80px", objectFit: "contain" }}
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
            className="menu-list"
            style={{
              display: "flex",
              gap: "30px",
              listStyle: "none",
              margin: 0,
              padding: 0,
              fontSize: "18px",
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

        {/* Hamburger button (small screens) */}
        <div
          className="hamburger"
          onClick={() => setOpenMenu(!openMenu)}
          style={{
            fontSize: "30px",
            display: "none",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          ☰
        </div>
      </div>

      {/* Mobile dropdown */}
      {openMenu && (
        <div
          className="mobile-menu"
          style={{
            display: "none",
            flexDirection: "column",
            width: "100%",
            padding: "15px 0",
            background: "#fff",
            borderTop: "1px solid #ddd",
            gap: "15px",
            alignItems: "center",
          }}
        >
          {menuLinks.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              style={{
                textDecoration: "none",
                color: "#000",
                fontSize: "18px",
                fontWeight: "600",
              }}
              onClick={() => setOpenMenu(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

      {/* Responsive CSS */}
      <style jsx>{`
        @media (max-width: 900px) {
          .menu-list {
            gap: 15px !important;
            font-size: 16px !important;
          }
        }

        @media (max-width: 700px) {
          .menu-list {
            display: none !important;
          }
          .hamburger {
            display: block !important;
          }
          .mobile-menu {
            display: flex !important;
          }
        }

        @media (max-width: 500px) {
          img {
            width: 60px !important;
            height: 60px !important;
          }
        }
      `}</style>
    </header>
  );
}