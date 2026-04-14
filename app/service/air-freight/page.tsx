"use client";

import Image from "next/image";
import Link from "next/link";

export default function AirFreight() {
  return (
    <main className="bg-gradient-to-b from-white to-orange-50">

      {/* MAIN */}
      <div className="max-w-6xl mx-auto px-4 py-14">

        {/* CENTER IMAGE */}
        <div className="flex justify-center mb-10">
          <div className="relative w-full md:w-[80%] h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-200">
            <Image
              src="/air-freight.jpg"
              alt="Air Freight"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Fast & Reliable{" "}
            <span className="text-orange-500">Air Freight Solutions</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our air freight services are designed for speed, reliability, and efficiency. 
            We provide time-critical logistics solutions with global connectivity, ensuring 
            your shipments reach their destination quickly and securely.
          </p>
        </div>

        {/* 6 CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-orange-400">
            <h3 className="text-xl font-semibold mb-2 text-orange-600">
              🚀 Express Air Shipping
            </h3>
            <p className="text-gray-600">
              Ultra-fast air cargo solutions for urgent and time-sensitive shipments worldwide.
              We ensure priority handling, quick transit, and reliable delivery timelines.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-orange-400">
            <h3 className="text-xl font-semibold mb-2 text-orange-600">
              🌍 Global Air Network
            </h3>
            <p className="text-gray-600">
              Strong airline partnerships ensure seamless global connectivity and faster delivery.
              We operate across major international airports with efficient coordination.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-orange-400">
            <h3 className="text-xl font-semibold mb-2 text-orange-600">
              🚚 Door-to-Door Delivery
            </h3>
            <p className="text-gray-600">
              Complete logistics handling from pickup to final destination delivery.
              We manage every step for a smooth and hassle-free shipping experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-orange-400">
            <h3 className="text-xl font-semibold mb-2 text-orange-600">
              ❄️ Perishable Cargo Handling
            </h3>
            <p className="text-gray-600">
              Temperature-controlled shipping for food, pharma, and sensitive goods.
              Ensuring freshness and safety throughout the journey.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-orange-400">
            <h3 className="text-xl font-semibold mb-2 text-orange-600">
              🏗️ Heavy & Project Cargo
            </h3>
            <p className="text-gray-600">
              Specialized solutions for oversized, high-value, and critical cargo shipments.
              Expert handling with advanced equipment and planning.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-orange-400">
            <h3 className="text-xl font-semibold mb-2 text-orange-600">
              📡 Real-Time Tracking
            </h3>
            <p className="text-gray-600">
              Monitor your shipments with advanced tracking systems and full visibility.
              Stay updated at every stage of delivery.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}