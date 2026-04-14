"use client";

import Image from "next/image";

export default function ProjectShipments() {
  return (
    <main className="bg-gradient-to-b from-white to-orange-50">

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* CENTER IMAGE */}
        <div className="flex justify-center mb-10">
          <div className="relative w-full md:w-[70%] h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-200">
            <Image
              src="/project-cargo.jpg"
              alt="Project Shipments"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            End-to-End{" "}
            <span className="text-orange-500">
              Project Cargo Solutions
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Managing project cargo requires detailed planning, coordination, and execution. Our end-to-end project cargo solutions are designed to handle complex, large-scale shipments from start to finish with complete efficiency and reliability.

We provide a single-window solution for all your project logistics needs, ensuring seamless movement of cargo across every stage of the supply chain. 
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-orange-400">
            <h3 className="text-xl font-semibold mb-2 text-orange-600">
              🏗️ Large Scale Cargo Handling
            </h3>
            <p className="text-gray-600">
              Comprehensive logistics solutions for transporting large and complex cargo used in infrastructure and industrial projects.
              We ensure safe handling of oversized shipments with precision and advanced equipment.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-orange-400">
            <h3 className="text-xl font-semibold mb-2 text-orange-600">
              📊 Project Planning & Coordination
            </h3>
            <p className="text-gray-600">
              Detailed logistics planning and coordination for multi-stage cargo movement.
              Our experts manage timelines, resources, and execution to ensure seamless project delivery.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-orange-400">
            <h3 className="text-xl font-semibold mb-2 text-orange-600">
              🚛 Heavy Lift Transportation
            </h3>
            <p className="text-gray-600">
              Specialized lifting and transportation using cranes, hydraulic trailers, and heavy-duty equipment.
              We handle extremely heavy and oversized cargo with maximum safety standards.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-orange-400">
            <h3 className="text-xl font-semibold mb-2 text-orange-600">
              🌍 Global Freight Management
            </h3>
            <p className="text-gray-600">
              Seamless coordination across sea, air, and land transportation.
              Our global network ensures timely and efficient movement of project cargo worldwide.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-orange-400">
            <h3 className="text-xl font-semibold mb-2 text-orange-600">
              📑 Customs & Regulatory Support
            </h3>
            <p className="text-gray-600">
              Complete assistance with documentation, customs clearance, and compliance.
              We ensure smooth approvals and avoid delays in project cargo shipments.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-orange-400">
            <h3 className="text-xl font-semibold mb-2 text-orange-600">
              🔗 End-to-End Project Logistics
            </h3>
            <p className="text-gray-600">
              Full-service logistics management from origin to final delivery.
              Dedicated project managers ensure transparency, real-time tracking, and timely completion.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}