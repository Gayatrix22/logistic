"use client";

import Image from "next/image";
import Link from "next/link";

export default function ODCLogistics() {
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
          <h1 className="text-4xl font-bold">Offered Solutions</h1>
          <p className="mt-3">
            Home <span className="text-red-500">»</span> ODC Logistics Support
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
                src="/odc2.jpg"
                alt="ODC Logistics Support"
                fill
                className="object-cover"
              />
            </div>

            {/* TITLE */}
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              ODC Logistics Support
            </h2>

            {/* CONTENT */}
            <div className="space-y-6 text-gray-700 leading-7">

              <div>
                <h4 className="font-semibold text-lg">Over Dimensional Cargo Handling</h4>
                <p>
                  Specialized logistics solutions for transporting oversized and
                  heavy cargo that exceeds standard container dimensions.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">Route Survey & Planning</h4>
                <p>
                  Detailed route surveys and transport planning to ensure safe
                  movement of heavy and oversized cargo through complex routes.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">Heavy Equipment Transport</h4>
                <p>
                  Efficient handling and transportation of heavy industrial
                  equipment, machinery, and project cargo with specialized vehicles.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">Permit & Documentation</h4>
                <p>
                  Complete assistance with permits, clearances, and documentation
                  required for transporting ODC cargo across different regions.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">Safe Loading & Unloading</h4>
                <p>
                  Professional handling using cranes, trailers, and specialized
                  equipment to ensure safe loading and unloading of heavy cargo.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">
                  End-to-End Project Coordination
                </h4>
                <p>
                  Dedicated logistics experts coordinate every stage of the
                  transportation process to ensure timely and safe delivery.
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