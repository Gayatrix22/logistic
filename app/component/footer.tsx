"use client";
import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      alert("Enter email first");
      return;
    }
    alert("Subscribed Successfully 🚀");
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* Company */}
        <div className="footer-box">
          <h2 className="logo">Logistic</h2>
          <p>
            Smart logistics and transport solutions for businesses worldwide.
            Fast delivery and secure shipping services.
          </p>

          <div className="socials">
            <span>🌐</span>
            <span>📘</span>
            <span>📸</span>
            <span>💼</span>
          </div>
        </div>

        {/* Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-box">
          <h3>Services</h3>
          <ul>
            <li>Road Freight</li>
            <li>Air Freight</li>
            <li>Ocean Freight</li>
            <li>Warehousing</li>
            <li>Supply Chain</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-box">
          <h3>Newsletter</h3>
          <p>Get latest logistics updates.</p>

          <form onSubmit={handleSubscribe} className="newsletter">
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Join</button>
          </form>

          <div className="contact">
            <p>📍 India</p>
            <p>📞 +91 9876543210</p>
            <p>✉ support@logistix.com</p>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 LogistiX Logistics Company
      </div>
    </footer>
  );
}