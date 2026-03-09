"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuLinks = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/about" },
    { name: "Service", link: "/service" },
    { name: "Blog", link: "/blog" },
    { name: "Gallery", link: "/gallery" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      <header
        style={{
          width: "100%",
          background: "#ffffff",
          borderBottom: "1px solid #e5e5e5",
          padding: "12px 0",
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
          {/* LOGO */}
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <img
              src="/logo.png"
              alt="Logo"
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

          {/* HAMBURGER BUTTON */}
          <div
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(true)}
            style={{
              width: "35px",
              height: "35px",
              display: "none",
              flexDirection: "column",
              justifyContent: "center",
              gap: "6px",
              cursor: "pointer",
            }}
          >
            <span style={{ width: "100%", height: "4px", background: "#000", borderRadius: "5px" }} />
            <span style={{ width: "100%", height: "4px", background: "#000", borderRadius: "5px" }} />
            <span style={{ width: "100%", height: "4px", background: "#000", borderRadius: "5px" }} />
          </div>

          {/* DESKTOP NAV */}
          <nav>
            <ul
              className="menu-desktop"
              style={{
                display: "flex",
                gap: "30px",
                listStyle: "none",
                margin: 0,
                padding: 0,
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              {menuLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.link} style={{ color: "#000", textDecoration: "none" }}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* LEFT SIDE SLIDE MENU */}
      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <div className="drawer-content">
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              background: "none",
              border: "none",
              fontSize: "28px",
              cursor: "pointer",
              textAlign: "right",
              width: "100%",
            }}
          >
            ✕
          </button>

          {menuLinks.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: "15px 10px",
                display: "block",
                textDecoration: "none",
                color: "#000",
                fontWeight: "600",
                borderBottom: "1px solid #eee",
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* BACKDROP OVERLAY */}
      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.4)",
            zIndex: 998,
          }}
        />
      )}


      {/* RESPONSIVE STYLES */}
      <style>{`
        @media (max-width: 900px) {
          .mobile-menu-btn {
            display: flex !important;
          }
          .menu-desktop {
            display: none !important;
          }
        }

        /* DRAWER BASE */
        .mobile-drawer {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 260px;
          background: #fff;
          box-shadow: 4px 0 12px rgba(0,0,0,0.15);
          transform: translateX(-260px);
          transition: transform 0.3s ease;
          z-index: 999;
        }

        /* OPEN STATE */
        .mobile-drawer.open {
          transform: translateX(0);
        }

        .drawer-content {
          padding: 20px;
        }
      `}</style>
    </>
  );
}