"use client";

import Image from "next/image";
import Link from "next/link";

export default function SeaFreight() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-gray-100">

    
  
  

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-14">

        {/* IMAGE CENTER */}
        <div className="flex justify-center mb-10">
          <div className="relative w-full md:w-[80%] h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/sff.jpeg"
              alt="Sea Freight"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* TITLE */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Global Sea Freight Solutions
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          We provide comprehensive and reliable sea freight services designed to support businesses in managing their international logistics with efficiency and confidence. Our solutions are built to handle shipments of all sizes, ensuring cost optimization, timely delivery, and complete transparency throughout the shipping process.
          </p>
        </div>

       {/* FEATURES GRID */}
<div className="grid gap-6 md:grid-cols-2">

  {/* CARD */}
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
    <h4 className="font-semibold text-lg text-gray-800">
     🚢 End-to-End Shipping
    </h4>
    <p className="text-gray-600 mt-2">
      Our end-to-end logistics solutions cover every stage of the shipping process — from cargo pickup and packaging to documentation, customs clearance, and final delivery.
    </p>
    <p className="text-gray-600 mt-2">
      We ensure seamless coordination between all stakeholders, reducing delays and ensuring that your shipments reach their destination safely and on time.
    </p>
  </div>

  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
    <h4 className="font-semibold text-lg text-gray-800">
    📦 FCL & LCL Services
    </h4>
    <p className="text-gray-600 mt-2">
      We offer both Full Container Load (FCL) and Less than Container Load (LCL) services to match your business needs.
    </p>
    <p className="text-gray-600 mt-2">
      Flexible options for large shipments or shared containers to optimize your logistics cost.
    </p>
  </div>

  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
    <h4 className="font-semibold text-lg text-gray-800">
      🌐 Global Network
    </h4>
    <p className="text-gray-600 mt-2">
      Our global partnerships ensure efficient shipping across major international routes.
    </p>
    <p className="text-gray-600 mt-2">
      We minimize delays and maintain high service quality worldwide.
    </p>
  </div>

  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
    <h4 className="font-semibold text-lg text-gray-800">
     🔒Secure Cargo Handling
    </h4>
    <p className="text-gray-600 mt-2">
      Advanced safety measures and secure packaging ensure cargo protection.
    </p>
    <p className="text-gray-600 mt-2">
      We handle all shipments with precision and care.
    </p>
  </div>

  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
    <h4 className="font-semibold text-lg text-gray-800">
     ⏱️ Real-Time Tracking & Visibility
    </h4>
    <p className="text-gray-600 mt-2">
      Stay informed at every step with our real-time shipment tracking system. We provide complete visibility into your cargo’s journey, allowing you to monitor progress, manage timelines, and make informed business decisions.
    </p>
  </div>
 
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
    <h4 className="font-semibold text-lg text-gray-800">
    💼 Customized Logistics Solutions
    </h4>
    <p className="text-gray-600 mt-2">
     Every business has unique shipping requirements. Our team works closely with clients to design customized logistics strategies that align with their operational goals, ensuring maximum efficiency and cost savings.
    </p>
  </div> 
</div>
       

      </div>

    </main>
  );
}