"use client";

import Image from "next/image";
import Link from "next/link";

export default function AirFreight() {
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
          <h1 className="text-4xl font-bold">Air Freight Forwarding</h1>
          <p className="mt-3">
            Home <span className="text-red-500">»</span> Offered Solution 
              <span className="text-red-500">»</span> Air Freight Forwarding
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
                src="/air-freight.jpg"
                alt="Air Freight Forwarding"
                fill
                className="object-cover"
              />
            </div>

            {/* TITLE */}
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Air Freight Forwarding
            </h2>

            {/* CONTENT */}
            <div className="space-y-6 text-gray-700 leading-7">

              <div>
                <h5 className="font-bold text-lg">Express Air Shipments</h5>
                <p>
                  Fast and reliable air cargo solutions for urgent and
                  time-sensitive consignments across domestic and international destinations.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-lg">Airport-to-Airport Services</h5>
                <p>
                  Efficient airport handling with secure cargo movement ensuring
                  smooth coordination between origin and destination terminals.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-lg">Door-to-Door Delivery</h5>
                <p>
                  Complete logistics management including pickup, customs clearance,
                  air freight movement, and final delivery at consignee location.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-lg">Perishable & Pharma Cargo</h5>
                <p>
                  Temperature-controlled air freight solutions for pharmaceuticals,
                  medical supplies, food products and other sensitive goods.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-lg">Heavy & Project Cargo</h5>
                <p>
                  Specialized air charter and heavy cargo solutions for oversized,
                  high-value and critical project shipments.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-lg">
                  Cargo Insurance & Real-Time Tracking
                </h5>
                <p>
                  Comprehensive insurance coverage and advanced tracking systems
                  provide complete shipment visibility and maximum security.
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