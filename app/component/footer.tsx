"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="pt-16 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/footer-bg.jpg')" }}
    >

      {/* Light Overlay */}
     

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 md:grid-cols-2 gap-30 relative z-10">
        
        {/* Company Info */}
        <div>
          <div className="flex items-start gap-3 mb-4">
            <Image
              src="/logo.png"
              alt="Era Marya Logistics"
              width={80}
              height={80}
              className="object-contain"
            />

              <h2 className="font-bold text-[20px] leading-5 text-white">
  <span className="text-[#e53935]">ERA MARYA</span>
  <br />
  <span className="whitespace-nowrap">GLOBAL LOGISTICS</span>
  <br />
  PRIVATE LIMITED
</h2>
            </div>

          <p className="text-white text-[14px] leading-6">
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
          <h3 className="font-semibold text-[25px] mb-4 text-[#ffff] gap-20">
            Sitemap
          </h3>

          <ul className="space-y-3 text-white">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/service">Service</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Industry */}
        <div>
          <h3 className="font-semibold text-[25px] mb-4 text-[#ffff]">
            Industry Sectors
          </h3>

          <ul className="space-y-3 text-white">
            <li><Link href="/service/sea-freight">Sea Freight Forwarding</Link></li>
            <li><Link href="/service/air-freight">Air Freight Forwarding</Link></li>
            <li><Link href="/service/custom-clearance">Custom Clearance</Link></li>
            <li><Link href="/service/odc-logistics">ODC Logistics Support</Link></li>
            <li><Link href="/service/project-shipments">Project Shipments</Link></li>
            <li><Link href="/service/warehousing">Warehousing</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-[25px] mb-4 text-[#ffff]">
            Get In Touch
          </h3>

          <p className="text-white mb-4">
            Location: Vadodara, Gujarat - India
          </p>

          <div className="border-t pt-3 text-white text-sm">
            <p>Contact: +91-9909928018</p>
            <p>Email: info@eramarya.com</p>
          </div>

          <div className="border-t pt-3 text-white text-sm mt-3">
            <p>Contact: +91-8866841444</p>
            <p>Email: sales@eramarya.com</p>
          </div>

          <div className="border-t pt-3 text-white text-sm mt-3">
            Website: www.eramarya.com
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-[#083a3f] text-center text-white mt-12 py-4 text-sm relative z-10">
        Copyright © 2026{" "}
        <span className="text-[#ff6a00] font-medium">
          Era Marya Global Logistics Pvt. Ltd.
        </span>{" "}
        Designed by <span className="text-white">TechStrota</span>
      </div>

    </footer>
  );
}