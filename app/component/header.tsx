"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Home, Info, Wrench, BookOpen, Image, Phone } from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  // ✅ FIX: Added missing state
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const menuLinks = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/about" },
    { name: "Service", link: "/service" },
    { name: "Blog", link: "/blog" },
    { name: "Gallery", link: "/gallery" },
    { name: "Contact", link: "/contact" },
  ];

  // ✅ MOBILE ICON NAV (ADDED - like your image)
  const mobileNav = [
    { name: "Home", link: "/", icon: Home },
    { name: "About", link: "/about", icon: Info },
    { name: "Service", link: "/service", icon: Wrench },
    { name: "Blog", link: "/blog", icon: BookOpen },
    { name: "Gallery", link: "/gallery", icon: Image },
    { name: "Contact", link: "/contact", icon: Phone },
  ];

  return (
    <>
      {/* HEADER - CENTERED NAV */}
      <header className="w-full bg-gradient-to-r from-orange-600 to-orange-200 py-3 lg:py-5 sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-5">

          <div className="bg-white rounded-[20px] px-4 py-2 lg:px-6 lg:py-4 flex items-center shadow-md">

            {/* LEFT: LOGO */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <img src="/logo.png" alt="Logo" className="w-[60px] h-[60px] object-contain" />
              <div className="leading-tight">
                <h2 className="text-[18px] font-bold text-orange-600 uppercase">
                  ERA MARYA
                </h2>
                <h3 className="text-[14px] font-semibold uppercase">
                  GLOBAL LOGISTICS
                </h3>
                <span className="text-[12px] text-gray-500 uppercase">
                  Private Limited
                </span>
              </div>
            
            </div>
            
            

            {/* CENTER: NAVIGATION */}
            <div className="flex-1 flex justify-center">
              <nav className="hidden lg:block">
                <ul className="flex gap-8 text-[16px] font-semibold text-gray-700 items-center">
                  {menuLinks.map((item) => {
                    if (item.name === "Service") {
                      return (
                        <li key={item.name} className="relative group">
                          <div className="flex items-center gap-1 relative">
                            <Link
                              href="/service"
                              className="hover:text-orange-600 transition relative"
                            >
                              {item.name}
                              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                            <svg
                              className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180 cursor-pointer"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>

                          {/* DROPDOWN */}
                          <div className="absolute left-1/2 -translate-x-1/2 mt-6 w-[750px] bg-white rounded-2xl shadow-2xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                            <div className="grid grid-cols-3">
                              <div className="col-span-1 bg-gradient-to-br from-red-600 to-orange-400 text-white p-6 flex flex-col justify-between">
                                <div>
                                  <h3 className="text-xl font-bold mb-3">Our Services</h3>
                                  <p className="text-sm text-white/80">
                                    We provide end-to-end logistics solutions tailored for your business needs.
                                  </p>
                                </div>
                                <Link
                                  href="/service"
                                  className="group mt-6 inline-flex items-center gap-2 bg-white text-red-600 px-5 py-2 rounded-md text-sm font-semibold shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
                                >
                                  View All →
                                </Link>
                              </div>
                              <div className="col-span-2 p-6 grid grid-cols-2 gap-6">
                                {[
                                  { name: "Sea Freight", link: "/service/sea-freight" },
                                  { name: "Air Freight", link: "/service/air-freight" },
                                  { name: "Custom Clearance", link: "/service/custom-clearance" },
                                  { name: "ODC Logistics", link: "/service/odc-logistics" },
                                  { name: "Project Shipments", link: "/service/project-shipments" },
                                  { name: "Warehousing", link: "/service/warehousing" },
                                ].map((s) => (
                                  <div key={s.name} className="hover:-translate-y-2 hover:scale-105 transition-all duration-300">
                                    <Link href={s.link} className="flex flex-col p-3 rounded-lg bg-gray-50 hover:bg-white">
                                      <span className="font-semibold hover:text-red-600">{s.name}</span>
                                    </Link>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    }
                    return (
                      <li key={item.name}>
                        <Link href={item.link} className="hover:text-orange-600 transition">
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4 flex-shrink-0">
           {/* CTA */}
            <a
              href="tel:+918866841444"
              className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-600"
            >
              📞 Call
            </a>
              
            </div>

          </div>
        </div>
      </header>

      {/* ✅ MOBILE ICON NAVBAR (NEW ADD) */}
      <div className="lg:hidden bg-white border-b flex justify-between items-center px-2 py-2">
        {mobileNav.map((item) => {
          const isActive = pathname === item.link;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.link}
              className={`flex flex-col items-center text-[11px] flex-1 ${
                isActive ? "text-orange-500" : "text-gray-500"
              }`}
            >
              <Icon size={20} />
              <span>{item.name}</span>

              {isActive && (
                <div className="w-5 h-[2px] bg-orange-500 mt-1"></div>
              )}
            </Link>
          );
        })}
      </div>

      {/* MOBILE DRAWER */}
      <div className={`fixed top-0 left-0 h-screen w-[280px] bg-white shadow-2xl transition-transform duration-500 z-50 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-6">
          <button onClick={() => setMenuOpen(false)} className="text-3xl mb-6">✕</button>

          {menuLinks.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              onClick={() => setMenuOpen(false)}
              className="block py-4 border-b text-lg font-semibold hover:text-orange-600"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}
    </>
  );
}