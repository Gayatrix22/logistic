"use client";

import Image from "next/image";
import Link from "next/link";

export default function Warehousing() {
  return (
    <main className="bg-gradient-to-b from-white to-orange-50">

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* CENTER IMAGE */}
        <div className="flex justify-center mb-10">
          <div className="relative w-full md:w-[80%] h-[350px] rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-200">
            <Image
              src="/warehousing2.jpg"
              alt="Warehousing"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Smart & Scalable{" "}
            <span className="text-orange-500">Warehousing Solutions</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Efficient warehousing is the backbone of a strong supply chain. Our smart and scalable warehousing solutions are designed to provide secure storage, optimized inventory management, and seamless distribution for businesses of all sizes.

            We combine advanced technology with flexible infrastructure to ensure your goods are stored safely and delivered efficiently—whenever and wherever needed.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          {/* CARD 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-orange-400">
            <h5 className="text-xl font-semibold mb-2 text-orange-600">
              🛡️ Secure Storage Infrastructure
            </h5>
            <p className="text-gray-600">
              Our modern warehouses are equipped with 24/7 surveillance, fire safety systems, and advanced protection measures to ensure complete safety of your goods.
              We follow strict security protocols, controlled access systems, and regular monitoring to prevent any risk of damage, theft, or loss during storage.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-orange-400">
            <h5 className="text-xl font-semibold mb-2 text-orange-600">
              📊 Real-Time Inventory Tracking
            </h5>
            <p className="text-gray-600">
              Smart inventory management systems provide real-time visibility of your stock, enabling better decision-making and operational control.
              With automated tracking, reporting, and analytics, businesses can reduce errors, optimize stock levels, and improve overall supply chain efficiency.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-orange-400">
            <h5 className="text-xl font-semibold mb-2 text-orange-600">
              🚚 Order Fulfillment & Distribution
            </h5>
            <p className="text-gray-600">
              From picking and packing to dispatch and last-mile delivery, our end-to-end fulfillment services ensure fast and accurate order processing.
              We help businesses streamline operations, reduce delivery time, and enhance customer satisfaction through efficient distribution networks.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-orange-400">
            <h5 className="text-xl font-semibold mb-2 text-orange-600">
              🌡️ Temperature-Controlled Warehousing
            </h5>
            <p className="text-gray-600">
              We offer specialized temperature-controlled storage solutions for sensitive goods such as pharmaceuticals, food products, and chemicals.
              Our facilities maintain consistent environmental conditions to preserve product quality, safety, and compliance with industry standards.
            </p>
          </div>

          {/* CARD 5 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-orange-400">
            <h5 className="text-xl font-semibold mb-2 text-orange-600">
              📦 Packaging & Cargo Handling
            </h5>
            <p className="text-gray-600">
              Our expert team provides professional packaging, labeling, and cargo handling services to ensure goods remain protected during storage and transit.
              We use high-quality materials and standardized processes to minimize damage and maintain product integrity throughout the logistics cycle.
            </p>
          </div>

          {/* CARD 6 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-orange-400">
            <h5 className="text-xl font-semibold mb-2 text-orange-600">
              📈 Flexible & Scalable Solutions
            </h5>
            <p className="text-gray-600">
              Our warehousing solutions are designed to be flexible and scalable, adapting to your business needs and seasonal demands.
              Whether you require short-term storage or long-term logistics support, we provide customized solutions that grow with your business.
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
        </div>

      </div>

    </main>
  );
}