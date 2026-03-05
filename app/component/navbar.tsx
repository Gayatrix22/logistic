"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Logistics</div>

      <ul style={styles.menu}>
        <li>
          <Link href="/">Home</Link>
        </li>

        {/* Services Dropdown */}
        <li
          style={styles.dropdown}
          onClick={() => setOpen(!open)}
        >
          Service▾

          {open && (
            <ul style={styles.dropdownMenu}>/
              <li>
                <Link href="/services/sea-freight">Sea Freight</Link>
              </li>
              <li>
                <Link href="/services/air-freight">Air Freight</Link>
              </li>
              <li>
                <Link href="/services/custom-clearance">
                  Custom Clearance
                </Link>
              </li>
              <li>
                <Link href="/services/warehousing">
                  Warehousing
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

const styles: any = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 40px",
    background: "#0a2d70",
    color: "white",
    alignItems: "center",
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
  },
  menu: {
    display: "flex",
    listStyle: "none",
    gap: "25px",
    position: "relative",
  },
  dropdown: {
    cursor: "pointer",
    position: "relative",
  },
  dropdownMenu: {
    position: "absolute",
    top: "35px",
    left: 0,
    background: "white",
    color: "black",
    listStyle: "none",
    padding: "10px 0",
    width: "200px",
    borderRadius: "6px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
  },
};