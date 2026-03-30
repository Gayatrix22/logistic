"use client";

import Image from "next/image";
import Link from "next/link";

export default function CustomClearance() {
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
     Custom-Clearance
    </h1>

    <p className="mt-2">
      Home <span className="text-orange-500">»</span> Offered Solution
       <span className="text-red-500">»</span>  Custom-Clearance
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
                src="/custom.jpg"
                alt="Custom Clearance"
                fill
                className="object-cover"
              />
            </div>

            {/* TITLE */}
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Custom Clearance
            </h2>

            {/* CONTENT */}
            <div className="space-y-6 text-gray-700 leading-7">

              <div>
                <h5 className="font-bold text-lg">Import & Export Clearance</h5>
                <p>
                  Smooth and efficient customs clearance services for both
                  import and export shipments ensuring compliance with all
                  government regulations.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-lg">Documentation Handling</h5>
                <p>
                  Complete preparation and management of customs documentation
                  including invoices, packing lists, bills of lading, and other
                  regulatory paperwork.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-lg">Duty & Tax Consultation</h5>
                <p>
                  Professional guidance on customs duties, taxes, and applicable
                  regulations to help businesses reduce delays and unexpected costs.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-lg">Regulatory Compliance</h5>
                <p>
                  Ensuring that shipments meet all customs laws, trade policies,
                  and compliance standards for smooth cargo movement across borders.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-lg">Fast Processing</h5>
                <p>
                  Experienced customs specialists coordinate with authorities
                  to speed up clearance and minimize shipment delays.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-lg">
                  End-to-End Customs Support
                </h5>
                <p>
                  From documentation to final cargo release, we provide
                  complete customs clearance assistance for hassle-free logistics.
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