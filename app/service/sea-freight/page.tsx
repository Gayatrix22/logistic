"use client";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function SeaFreightPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="bg-gray-100">
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
            <span className="text-red-500">»</span> Sea-freight Forwarding
          </p>
        </div>
      </section>


      {/* INTRO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Comprehensive Ocean Freight Solutions</h2>
        <p className="text-gray-700 leading-7">
          Our Sea Freight services provide reliable and economical solutions for international cargo transportation. 
          We manage everything from documentation and customs clearance to final delivery, ensuring smooth and hassle-free shipping operations.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-500"
            data-aos="fade-up"
          >
            <div className="relative h-52">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-6">{service.description}</p>
            </div>
          </div>
        ))}

      </section>

    </main>
  );
}

const services = [
  {
    title: "Container Freight Station (CFS) Loads",
    image: "/cfs.jpg",
    description:
      "Efficient container loading and unloading services at designated CFS facilities including cargo stuffing, de-stuffing, palletization, and documentation support.",
  },
  {
    title: "FCL & LCL Consolidation",
    image: "/container.jpg",
    description:
      "Flexible Full Container Load (FCL) and Less than Container Load (LCL) shipping solutions designed for cost optimization and global coverage.",
  },
  {
    title: "Dry Bulk Shipments",
    image: "/bulk.jpg",
    description:
      "Specialized handling of dry bulk commodities such as grains, cement, and industrial materials with moisture protection and secure transit.",
  },
  {
    title: "ODC & Project Cargo",
    image: "/odc.jpg",
    description:
      "Expert management of over-dimensional cargo and heavy machinery shipments with route planning and heavy lift coordination.",
  },
  {
    title: "Refrigerated (Reefer) Services",
    image: "/reefer.jpg",
    description:
      "Temperature-controlled shipping solutions for perishable goods including pharmaceuticals, dairy products, and frozen foods.",
  },
  {
    title: "Freight Insurance & Tracking",
    image: "/tracking.jpg",
    description:
      "Comprehensive freight insurance and real-time cargo tracking system to ensure safety, transparency, and peace of mind.",
  },
];
