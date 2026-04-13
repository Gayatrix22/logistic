"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Footer() {
  return (
    <footer
      className="relative pt-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/footer-bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 md:grid-cols-2 gap-10 relative z-10"
      >
        
        {/* Company Info */}
        <motion.div variants={fadeUp}>
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
            solutions.
          </p>
        </motion.div>

        {/* Sitemap */}
        <motion.div variants={fadeUp}>
          <h3 className="font-semibold text-[25px] mb-4 text-white">
            Sitemap
          </h3>

          <ul className="space-y-3 text-white">
            <li><Link href="/" className="hover:text-[#ff6a00] transition duration-300">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#ff6a00] transition duration-300">About us</Link></li>
            <li><Link href="/service" className="hover:text-[#ff6a00] transition duration-300">Service</Link></li>
            <li><Link href="/blog" className="hover:text-[#ff6a00] transition duration-300">Blog</Link></li>
            <li><Link href="/gallery" className="hover:text-[#ff6a00] transition duration-300">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-[#ff6a00] transition duration-300">Contact Us</Link></li>
          </ul>
        </motion.div>

        {/* Industry */}
        <motion.div variants={fadeUp}>
          <h3 className="font-semibold text-[25px] mb-4 text-white">
            Industry Sectors
          </h3>

          <ul className="space-y-3 text-white">
            <li><Link href="/service/sea-freight" className="hover:text-[#ff6a00] transition duration-300">Sea Freight Forwarding</Link></li>
            <li><Link href="/service/air-freight" className="hover:text-[#ff6a00] transition duration-300">Air Freight Forwarding</Link></li>
            <li><Link href="/service/custom-clearance" className="hover:text-[#ff6a00] transition duration-300">Custom Clearance</Link></li>
            <li><Link href="/service/odc-logistics" className="hover:text-[#ff6a00] transition duration-300">ODC Logistics Support</Link></li>
            <li><Link href="/service/project-shipments" className="hover:text-[#ff6a00] transition duration-300">Project Shipments</Link></li>
            <li><Link href="/service/warehousing" className="hover:text-[#ff6a00] transition duration-300">Warehousing</Link></li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={fadeUp}>
          <h3 className="font-semibold text-[25px] mb-4 text-white">
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
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-[#083a3f] text-center text-white mt-12 py-4 text-sm relative z-10"
      >
        Copyright © 2026{" "}
        <span className="text-[#ff6a00] font-medium">
          Era Marya Global Logistics Pvt. Ltd.
        </span>{" "}
        Designed by <span className="text-white">TechStrota</span>
      </motion.div>
    </footer>
  );
}