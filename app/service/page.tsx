"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";

const services = [
  { id: 1, title: "Sea Freight Forwarding", image: "/ship1.jpg", link: "/service/sea-freight"},
  { id: 2, title: "Air Freight Forwarding", image: "/air.jpg", link: "/service/air-freight"},
  { id: 3, title: "Custom Clearance", image: "/c2.jpg", link: "/service/custom-clearance"},
  { id: 4, title: "ODC Logistics Support", image: "/odc.jpg", link: "/service/odc-logistics"},
  { id: 5, title: "Project Shipments", image: "/project.jpg", link: "/service/project-shipments"},
  { id: 6, title: "Warehousing", image: "/warehouse.jpg", link: "/service/warehousing"},
];

export default function Services() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="bg-gray-100 overflow-hidden">

    <section className="relative w-full h-[35vh] sm:h-[40vh] md:h-[45vh] flex items-center justify-center text-center text-white overflow-hidden">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/Global-Logistics.jpg')" }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10">
    <h1 className="text-4xl md:text-5xl font-bold">
      Service
    </h1>

    <p className="mt-2">
      Home <span className="text-orange-500">»</span> Service
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
            
            <Link key={service.id} href={service.link}>

              <div
                data-aos="fade-up"
                className="group relative bg-blue-700 active:bg-orange-500 md:hover:bg-orange-500 rounded-xl overflow-hidden shadow-lg md:hover:shadow-2xl transition-all duration-500 transform md:hover:-translate-y-3 md:hover:scale-105 cursor-pointer"
              >

                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 sm:h-52 md:h-60 object-cover transition-transform duration-700 md:group-hover:scale-110"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5 md:p-6 text-white relative">

                  <h3 className="text-lg md:text-xl font-semibold mb-6">
                    {service.title}
                  </h3>

                  {/* Read More */}
                  <div className="px-4 py-2 border border-white rounded-full flex items-center gap-2 w-fit group-hover:bg-white group-hover:text-teal-900 transition-all duration-300">

                    <span className="text-sm md:text-base font-medium">
                      Read More
                    </span>

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>

                  </div>

                  {/* Number */}
                  <span className="absolute bottom-4 right-5 text-white/20 text-4xl md:text-5xl font-bold">
                    {service.id}
                  </span>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>

    </main>
  );
}