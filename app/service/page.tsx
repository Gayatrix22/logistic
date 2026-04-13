"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import { Truck, Plane, FileText, Settings, Package, Warehouse } from "lucide-react";

const services = [
  { 
    id: 1, 
    title: "Sea Freight Forwarding", 
    desc: "Cost-effective global shipping solutions via sea routes.",
    icon: <Truck size={22} />,
    image: "/ship1.jpg", 
    link: "/service/sea-freight"
  },
  { 
    id: 2, 
    title: "Air Freight Forwarding", 
    desc: "Fast and reliable air cargo services worldwide.",
    icon: <Plane size={22} />,
    image: "/air.jpg", 
    link: "/service/air-freight"
  },
  { 
    id: 3, 
    title: "Custom Clearance", 
    desc: "Smooth and hassle-free customs documentation & compliance.",
    icon: <FileText size={22} />,
    image: "/c2.jpg", 
    link: "/service/custom-clearance"
  },
  { 
    id: 4, 
    title: "ODC Logistics Support", 
    desc: "Specialized handling of over-dimensional cargo shipments.",
    icon: <Settings size={22} />,
    image: "/odc.jpg", 
    link: "/service/odc-logistics"
  },
  { 
    id: 5, 
    title: "Project Shipments", 
    desc: "End-to-end logistics for complex industrial projects.",
    icon: <Package size={22} />,
    image: "/project.jpg", 
    link: "/service/project-shipments"
  },
  { 
    id: 6, 
    title: "Warehousing", 
    desc: "Smart storage and inventory management solutions.",
    icon: <Warehouse size={22} />,
    image: "/warehouse.jpg", 
    link: "/service/warehousing"
  },
];

export default function Services() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">

    

      {/* TITLE */}
      <section className="py-14 text-center" data-aos="fade-up">
        <p className="text-orange-500 font-semibold uppercase tracking-widest">
          What We Offer
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
          Smart Logistics Solutions
        </h2>
      </section>

      {/* GRID */}
      <section className="pb-20 px-4 max-w-7xl mx-auto">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <Link key={service.id} href={service.link}>

              <div
                data-aos="fade-up"
                className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >

                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="absolute bottom-0 p-6 text-white w-full">

                  {/* ICON BADGE */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-orange-500 p-2 rounded-full">
                      {service.icon}
                    </span>
                    <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
                      Logistics
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold">
                    {service.title}
                  </h3>

                  {/* NEW: DESCRIPTION */}
                  <p className="text-sm text-gray-200 mt-2 opacity-0 group-hover:opacity-100 transition duration-500">
                    {service.desc}
                  </p>

                  {/* BUTTON */}
                  <div className="mt-4 flex items-center gap-2 text-sm group-hover:text-orange-300 transition">
                    <span>Explore Service</span>
                    <span className="group-hover:translate-x-1 transition">→</span>
                  </div>

                </div>

              </div>

            </Link>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 flex justify-center">
        <div className="max-w-3xl bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-3xl p-10 text-center shadow-2xl">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Custom Logistics Solution?
          </h2>

          <p className="mb-6 text-gray-300">
            We provide tailored logistics strategies to match your business needs.
          </p>

          <Link
            href="/contact"
            className="bg-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Contact Us →
          </Link>

        </div>
      </section>

    </main>
  );
}