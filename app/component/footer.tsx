"use client";
import { useState } from "react";
import Link from "next/link";


export default function Footer() {
  const [email, setEmail] = useState("");

 const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    alert("Subscribed Successfully");
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2 className="logo">LogistiX</h2>
          <p>
            Fast and reliable logistics services for businesses worldwide.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Air Freight</li>
            <li>Road Transport</li>
            <li>Ocean Cargo</li>
            <li>Warehousing</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Newsletter</h3>

          <form onSubmit={handleSubscribe} className="newsletter">
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Subscribe</button>
          </form>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 LogistiX. All rights reserved.
      </div>
    </footer>
  );
}