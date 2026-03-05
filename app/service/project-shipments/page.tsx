"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProjectShipments() {
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
            Home <span className="text-red-500">»</span> Project Shipments
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
                src="/project-cargo.jpg"
                alt="Project Shipments"
                fill
                className="object-cover"
              />
            </div>

            {/* TITLE */}
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Project Shipments
            </h2>

            {/* CONTENT */}
            <div className="space-y-6 text-gray-700 leading-7">

              <div>
                <h4 className="font-semibold text-lg">Large Scale Cargo Handling</h4>
                <p>
                  Comprehensive logistics solutions for transporting large and
                  complex cargo required for infrastructure and industrial projects.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">Project Planning & Coordination</h4>
                <p>
                  Detailed logistics planning and coordination to ensure smooth
                  handling of multi-stage project cargo movements.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">Heavy Lift Transportation</h4>
                <p>
                  Specialized equipment and handling for lifting and transporting
                  oversized and heavy cargo safely and efficiently.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">Global Freight Management</h4>
                <p>
                  Seamless coordination of international freight including sea,
                  air, and land transportation for project shipments.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">Customs & Regulatory Support</h4>
                <p>
                  Assistance with documentation, customs clearance, and regulatory
                  compliance for project cargo shipments.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">
                  End-to-End Project Logistics
                </h4>
                <p>
                  Complete logistics management from origin to destination ensuring
                  safe and timely delivery of project cargo.
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