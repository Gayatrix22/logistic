"use client";

import Image from "next/image";
import Link from "next/link";

export default function CustomClearance() {
  return (
    <main className="bg-gradient-to-b from-white to-orange-50">

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* CENTER IMAGE */}
        <div className="flex justify-center mb-10">
          <div className="relative w-full md:w-[70%] h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-200">
            <Image
              src="/custom.jpg"
              alt="Custom Clearance"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Professional <span className="text-orange-500">Customs Clearance</span> Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Efficient customs clearance is essential for smooth and timely international trade. Our professional customs clearance services ensure that your shipments move across borders without delays, penalties, or compliance issues.
            We handle all documentation, regulations, and procedures required by customs authorities, allowing you to focus on your business while we manage the complexities.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-orange-400">
            <h3 className="text-xl font-semibold mb-2 text-orange-600">
              📄 Import & Export Clearance
            </h3>
            <p className="text-gray-600">
              Hassle-free clearance for both import and export shipments with full compliance to international regulations and standards.
              We streamline the entire customs process by coordinating with authorities and reducing paperwork complexity for faster approvals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-orange-400">
            <h3 className="text-xl font-semibold mb-2 text-orange-600">
              📝 Documentation Management
            </h3>
            <p className="text-gray-600">
              Accurate handling of invoices, packing lists, shipping bills, and all required legal documentation for smooth customs processing.
              Our experts ensure error-free paperwork, minimizing delays, rejections, and penalties.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-orange-400">
            <h3 className="text-xl font-semibold mb-2 text-orange-600">
              💰 Duty & Tax Optimization
            </h3>
            <p className="text-gray-600">
              Expert consultation to reduce duties and taxes while ensuring compliance with all government regulations.
              We analyze tariff structures and trade benefits to help optimize your logistics costs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-orange-400">
            <h3 className="text-xl font-semibold mb-2 text-orange-600">
              ⚖️ Regulatory Compliance
            </h3>
            <p className="text-gray-600">
              We ensure your cargo meets all legal and trade requirements, avoiding delays, penalties, and compliance risks.
              Our team stays updated with global trade laws to keep your shipments fully compliant.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-orange-400">
            <h3 className="text-xl font-semibold mb-2 text-orange-600">
              ⚡ Fast Clearance Process
            </h3>
            <p className="text-gray-600">
              Quick coordination with customs authorities to minimize delays and ensure faster cargo release.
              Our strong network enables quicker approvals and efficient shipment handling.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-orange-400">
            <h3 className="text-xl font-semibold mb-2 text-orange-600">
              🔗 End-to-End Support
            </h3>
            <p className="text-gray-600">
              Complete support from documentation to delivery, ensuring a smooth and stress-free logistics experience.
              We provide real-time updates and dedicated support throughout the shipment journey.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="/contact"
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-600 hover:scale-105 transition duration-300"
          >
            Get a Quote
          </Link>
        </div>s
      </div>

    </main>
  );
}