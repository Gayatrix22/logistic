"use client";

import Image from "next/image";

export default function ODCLogistics() {
  return (
    <main className="bg-gray-100">

   

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* CENTER IMAGE */}
        <div className="flex justify-center mb-10">
          <div className="relative w-full md:w-[70%] h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/odc-logistics-services.jpg"
              alt="ODC Logistics"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* TITLE */}
        <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Advanced ODC Logistics Solutions
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Handling Over Dimensional Cargo (ODC) requires expertise, precision, and specialized logistics planning. Our advanced ODC logistics solutions are designed to transport oversized and heavy cargo safely, efficiently, and without hassle.

From route surveys to final delivery, we manage every step with accuracy and care, ensuring your cargo reaches its destination securely.
        </p>
        </div>

        {/* 6 CARDS (2 COLUMN FIXED) */}
        <div className="grid grid-cols-2 gap-6">

          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">🚛 Over Dimensional Cargo Handling</h3>
            <p className="text-gray-600">
              Specialized logistics solutions for transporting oversized and heavy cargo that exceeds standard dimensions.
              We ensure secure movement using advanced equipment and expert handling techniques for maximum safety.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">🗺️ Route Survey & Planning</h3>
            <p className="text-gray-600">
              Detailed route surveys and planning to identify obstacles, road conditions, and clearances.
              This ensures smooth transportation of ODC cargo even through complex and challenging routes.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">🏗️ Heavy Equipment Transport</h3>
            <p className="text-gray-600">
              Safe and efficient transport of industrial machinery, turbines, and project cargo.
              We use specialized trailers and vehicles designed for handling extremely heavy loads.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">📑 Permits & Compliance</h3>
            <p className="text-gray-600">
              Complete assistance with permits, government approvals, and regulatory compliance.
              We handle all legal formalities required for interstate and international ODC transport.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">⚙️ Safe Loading & Unloading</h3>
            <p className="text-gray-600">
              Professional cargo handling using cranes, hydraulic trailers, and lifting equipment.
              Our team ensures damage-free loading and unloading of high-value heavy cargo.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">🔗 End-to-End Project Management</h3>
            <p className="text-gray-600">
              Dedicated project managers oversee the entire logistics process from planning to delivery.
              We ensure timely execution, real-time updates, and complete transparency at every stage.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}