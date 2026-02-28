"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f3f6f7] pt-16">
      <footer
  className="pt-16 bg-cover bg-center bg-no-repeat relative"
  style={{ backgroundImage: "url('/footer-bg.jpg')" }}
></footer>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 md:grid-cols-2 gap-12">

        {/* Company Info */}
        <div>
          <div className="flex items-start gap-3 mb-4">
            <Image
              src="/logo.png"
              alt="Era Marya Logistics"
              width={70}
              height={70}
              className="object-contain"
            />

            <h2 className="font-bold text-[20px] leading-5 text-[#222]">
              <span className="text-[#e53935]">ERA MARYA</span>
              <br />
              GLOBAL LOGISTICS
              <br />
              PRIVATE LIMITED
            </h2>
          </div>

          <p className="text-gray-600 text-[14px] leading-6">
            Era Marya Global Logistics Pvt. Ltd. is ambitious freight
            forwarding and Logistics Company in India, eager to make a
            positive impact in the industry with innovative logistics
            solutions. we are determined to build strong relationships
            with our clients and work tirelessly to support and grow
            with them.
          </p>
        </div>

        {/* Sitemap */}
        <div>
          <h3 className="font-semibold text-[18px] mb-4 text-[#1b3c44]">
            Sitemap
          </h3>

          <ul className="space-y-3 text-gray-700">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Industry */}
        <div>
          <h3 className="font-semibold text-[18px] mb-4 text-[#1b3c44]">
            Industry Sectors
          </h3>

          <ul className="space-y-3 text-gray-700">
            <li>Sea Freight Forwarding</li>
            <li>Air Freight Forwarding</li>
            <li>Custom Clearance</li>
            <li>ODC Logistics Support</li>
            <li>Project Shipments</li>
            <li>Warehousing</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-[18px] mb-4 text-[#1b3c44]">
            Get In Touch
          </h3>

          <p className="text-gray-700 mb-4">
            Location: Vadodara, Gujarat - India
          </p>

          <div className="border-t pt-3 text-gray-700 text-sm">
            <p>Contact: +91-9909928018</p>
            <p>Email: info@eramarya.com</p>
          </div>

          <div className="border-t pt-3 text-gray-700 text-sm mt-3">
            <p>Contact: +91-8866841444</p>
            <p>Email: sales@eramarya.com</p>
          </div>

          <div className="border-t pt-3 text-gray-700 text-sm mt-3">
            Website: www.eramarya.com
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
     <div className="bg-[#083a3f] text-center text-white mt-12 py-4 text-sm">
  Copyright © 2026{" "}
  <span className="text-[#ff6a00] font-medium">
    Era Marya Global Logistics Pvt. Ltd.
  </span>{" "}
  Designed by <span className="text-white">TechStrota</span>
</div>

    </footer>
  );
}