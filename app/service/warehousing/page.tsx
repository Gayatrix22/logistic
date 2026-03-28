"use client";

import Image from "next/image";
import Link from "next/link";

export default function Warehousing() {
  return (
    <main className="bg-gray-100">

      {/* HERO */}
      <section className="relative w-full h-[50vh] flex items-center justify-center text-white text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Global-Logistics.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold">Warehousing</h1>
          <p className="mt-3">
            Home <span className="text-red-500">»</span> Offered Solutions
            <span className="text-red-500">»</span> Warehousing
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* SIDEBAR */}
          <aside className="bg-white rounded-xl shadow-md p-6 h-fit">
            <h3 className="text-xl font-bold text-blue-900 mb-6">
              All Services
            </h3>

            <div className="space-y-4">
              <ServiceLink href="/service/sea-freight" title="Sea Freight Forwarding" />
              <ServiceLink href="/service/air-freight" title="Air Freight Forwarding" />
              <ServiceLink href="/service/custom-clearance" title="Custom Clearance" />
              <ServiceLink href="/service/odc-logistics" title="ODC Logistics Support" />
              <ServiceLink href="/service/project-shipments" title="Project Shipments" />
              <ServiceLink href="/service/warehousing" title="Warehousing" />
            </div>
          </aside>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-3">

            {/* IMAGE */}
            <div className="relative w-full h-[350px] rounded-xl overflow-hidden mb-6">
              <Image
                src="/warehousing2.jpg"
                alt="Warehousing"
                fill
                className="object-cover"
              />
            </div>

            {/* TITLE */}
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Warehousing
            </h2>

            {/* CONTENT */}
            <div className="space-y-6 text-gray-700 leading-7">

              <div>
                <h5 className="font-bold text-lg">Secure Storage Facilities</h5>
                <p>
                  Modern warehousing facilities with advanced security systems
                  ensuring safe storage of goods for short-term and long-term needs.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-lg">Inventory Management</h5>
                <p>
                  Efficient inventory control systems that help businesses track
                  stock levels, manage orders, and streamline warehouse operations.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-lg">Distribution & Fulfillment</h5>
                <p>
                  Complete distribution solutions including order processing,
                  packaging, and delivery to customers or retail locations.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-lg">Temperature Controlled Storage</h5>
                <p>
                  Specialized storage facilities for sensitive goods such as
                  pharmaceuticals, food products, and other temperature-sensitive items.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-lg">Cargo Handling & Packaging</h5>
                <p>
                  Professional handling, packaging, and labeling services to ensure
                  goods remain protected during storage and transportation.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-lg">
                  Flexible Storage Solutions
                </h5>
                <p>
                  Scalable warehousing services tailored to meet the changing
                  logistics needs of businesses across different industries.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}


/* ServiceLink Component */
function ServiceLink({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  return (
    <Link
      href={href}
      className="block border border-gray-200 rounded-lg px-4 py-3 hover:bg-blue-900 hover:text-white transition"
    >
      {title} →
    </Link>
  );
}