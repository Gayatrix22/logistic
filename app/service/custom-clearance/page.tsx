"use client";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function CustomClearancePage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="bg-gray-100 overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative h-[45vh] sm:h-[50vh] md:h-[60vh] flex items-center justify-center text-white text-center px-4">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Global-Logistics.jpg')" }}
        ></div>

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-3xl" data-aos="fade-up">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            Custom Clearance Services
          </h1>
          <p className="mt-3 text-xs sm:text-sm md:text-base">
            Home <span className="text-red-500">»</span> Offered Solutions
            <span className="text-red-500"> » </span> Custom Clearance
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-16 text-center md:text-left" data-aos="fade-up">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-4">
          Smooth & Hassle-Free Customs Processing
        </h2>
        <p className="text-gray-700 text-sm sm:text-base leading-7">
          We provide complete customs clearance solutions ensuring smooth import
          and export operations. Our experienced team manages documentation,
          duty assessment, regulatory compliance, and coordination with customs
          authorities to minimize delays and ensure fast cargo release.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 md:pb-20">
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-500 transform hover:-translate-y-2"
              data-aos="fade-up"
            >
              <div className="relative h-44 sm:h-48 md:h-52">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-blue-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-6">
                  {service.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-blue-900 text-white text-center py-10 px-4" data-aos="fade-up">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
          Need Fast & Reliable Custom Clearance?
        </h3>
        <p className="text-sm sm:text-base mb-6">
          Contact our experts today for smooth and compliant cargo clearance.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full text-sm sm:text-base font-medium">
          Get Clearance Quote
        </button>
      </section>

    </main>
  );
}

const services = [
  {
    title: "Import & Export Documentation",
    image: "/custom1.jpg",
    description:
      "Preparation and verification of shipping bills, invoices, packing lists, bills of entry, and other essential documents.",
  },
  {
    title: "Duty & Tax Assessment",
    image: "/custom2.jpg",
    description:
      "Accurate calculation of customs duties, GST, and applicable taxes to ensure regulatory compliance.",
  },
  {
    title: "HS Code Classification",
    image: "/custom3.jpg",
    description:
      "Correct classification of goods under HS codes to prevent shipment delays and penalties.",
  },
  {
    title: "Regulatory Compliance Handling",
    image: "/custom4.jpg",
    description:
      "Management of permits, licenses, certifications, and compliance requirements.",
  },
  {
    title: "Port & Airport Clearance",
    image: "/custom5.jpg",
    description:
      "Efficient clearance coordination at ports and airports for faster cargo release.",
  },
  {
    title: "Custom Consultancy & Advisory",
    image: "/custom6.jpg",
    description:
      "Expert advisory services on international trade regulations and compliance updates.",
  },
];