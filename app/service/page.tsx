"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  { id: 1, title: "Sea Freight Forwarding", image: "/ship1.jpg"},
  { id: 2, title: "Air Freight Forwarding", image: "/air.jpg"},
  { id: 3, title: "Custom Clearance", image: "/c2.jpg"},
  { id: 4, title: "ODC Logistics Support", image: "/odc.jpg" },
  { id: 5, title: "Project Shipments", image: "/project.jpg" },
  { id: 6, title: "Warehousing", image: "/warehouse.jpg" },
];

export default function Services() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="bg-gray-100 overflow-hidden">

      {/* HERO */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center text-white text-center px-4">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Global-Logistics.jpg')" }}
        ></div>

        <div className="absolute inset-0 bg-black/60"></div>

        <div 
          className="relative z-10"
          data-aos="fade-up"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Offered Solutions
          </h1>
          <p className="mt-3 text-xs sm:text-sm md:text-base">
            Home <span className="text-red-500">»</span> Offered Solutions
          </p>
        </div>
      </section>

      {/* SECTION TITLE */}
      <section className="py-12 md:py-16 text-center px-4" data-aos="fade-up">
        <p className="text-red-600 font-semibold text-sm md:text-base">
          What we Offer
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-900 mt-2">
          Our Range of Solutions
        </h2>
      </section>

      {/* SERVICES GRID */}
      <section className="pb-16 md:pb-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.id}
              data-aos="fade-up"
              className="relative bg-blue-700 hover:bg-orange-500 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 sm:h-52 md:h-60 object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 md:p-6 text-white relative">
                <h3 className="text-lg md:text-xl font-semibold mb-6">
                  {service.title}
                </h3>

                {/* Arrow Button */}
                <Link href="#">
                  <div className="w-10 h-10 md:w-12 md:h-12 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-teal-900 transition-all duration-300 cursor-pointer hover:rotate-45">
                    →
                  </div>
                </Link>

                {/* Number */}
                <span className="absolute bottom-4 right-5 text-white/20 text-4xl md:text-5xl font-bold">
                  {service.id}
                </span>
              </div>
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}