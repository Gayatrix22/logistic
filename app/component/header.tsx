"use client";

import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

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
      {/* HEADER */}
      <header className="w-full bg-white border-b border-gray-200 py-3 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-between">

  {/* LOGO */}
  <div className="flex items-center gap-2">
    <img src="/logo.png" alt="Logo" className="w-[70px] h-[70px] object-contain" />
    <div className="leading-tight">
      <h2 className="text-[18px] md:text-[20px] font-bold text-red-600 uppercase">
        ERA MARYA
      </h2>
      <h3 className="text-[14px] md:text-[16px] font-semibold uppercase">
        GLOBAL LOGISTICS
      </h3>
      <span className="text-[12px] md:text-[14px] text-gray-500 uppercase">
        Private Limited
      </span>
    </div>
  </div>

  {/* RIGHT SIDE */}
  <div className="flex items-center gap-4">

    {/* DESKTOP MENU */}
    <nav className="hidden lg:block">
      <ul className="flex gap-8 text-[16px] md:text-[18px] font-semibold text-gray-700">
        {menuLinks.map((item) => (
          <li key={item.name}>
            <Link
              href={item.link}
              className="relative group hover:text-red-600 transition"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>

    {/* WHATSAPP BUTTON */}
    <a
      href="https://wa.me/918866841444"
      target="_blank"
      className="hidden sm:flex items-center justify-center w-20 h-10 bg-green-500 text-white rounded-full shadow-md hover:scale-110 transition"
    >
      <FaWhatsapp size={20} />
    </a>

    {/* HAMBURGER */}
    <div
      onClick={() => setMenuOpen(true)}
      className="w-8 h-8 flex flex-col justify-center gap-[5px] cursor-pointer lg:hidden"
    >
      <span className="w-full h-[3px] bg-black rounded"></span>
      <span className="w-full h-[3px] bg-black rounded"></span>
      <span className="w-full h-[3px] bg-black rounded"></span>
    </div>

  </div>
</div>
      </header>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 left-0 h-screen w-[260px] bg-white shadow-xl transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5">

          {/* CLOSE BUTTON */}
          <div className="flex justify-end">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-2xl"
            >
              ✕
            </button>
          </div>

          {/* MENU LINKS */}
          <div className="mt-6 flex flex-col">
            {menuLinks.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                onClick={() => setMenuOpen(false)}
                className="py-3 px-2 font-semibold border-b border-gray-200 hover:text-red-600 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        ></div>
      )}
    </>
  );
}