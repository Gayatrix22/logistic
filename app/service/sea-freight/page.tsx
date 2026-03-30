"use client";

import Image from "next/image";
import Link from "next/link";

export default function SeaFreight() {
  return (
    <main className="bg-gray-100">

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
     Sea Freight Forwarding
    </h1>

    <p className="mt-2">
      Home <span className="text-orange-500">»</span> Offered Solution
       <span className="text-red-500">»</span> Sea Freight Forwarding
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

            <div className="relative w-full h-[350px] rounded-xl overflow-hidden mb-6">
              <Image
                src="/sff.jpg"
                alt="Sea Freight Forwarding"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Sea Freight Forwaeding
            </h2>

            <div className="space-y-6 text-gray-700 leading-7">

              <div>
                <h5 className="font-bold text-lg">CFS Loads</h5>
                <p>
                  We offer Container Freight Station (CFS) services to ensure
                  efficient and secure loading and unloading of containers.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-lg">Consolidation Services</h5>
                <p>
                  FCL and LCL shipping solutions ensuring cost-effective
                  reliable global transportation.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-lg">Dry Bulk Shipments</h5>
                <p>
                  Handling grains, cement, fertilizers and industrial commodities
                  with moisture-controlled protection.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-lg">ODC & Project Cargo</h5>
                <p>
                  Specialized solutions for oversized and heavy cargo including
                  route planning and heavy lift coordination.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-lg">Refrigerated Services</h5>
                <p>
                  Temperature-controlled containers for pharmaceuticals,
                  frozen foods and perishables.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-lg">
                  Freight Insurance & Tracking
                </h5>
                <p>
                  Cargo insurance coverage and real-time shipment tracking for
                  full transparency.
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