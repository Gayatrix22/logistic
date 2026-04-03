"use client";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";


export default function About() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="bg-gray-50 w-full overflow-x-hidden">

     <section className="relative w-full h-[35vh] sm:h-[40vh] md:h-[50vh] lg:h-[45vh] flex items-center justify-center text-white text-center overflow-hidden">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/Global-Logistics.jpg')" }}
  ></div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10 px-4">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
      About Our Company
    </h1>

    <p className="mt-2 text-sm sm:text-base md:text-lg">
      Home <span className="text-red-500">»</span> About
    </p>
  </div>

</section>


      {/* ABOUT SECTION */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl lg:max-w-5xl mx-auto text-center" data-aos="fade-up">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Providing World-Class
          </h2>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-700 mt-2 mb-6">
            Logistics Solution
          </h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
            Era Marya Global Logistics Pvt. Ltd. is a privately owned Independent
            freight forwarder established with the concept of providing our
            customers with a comprehensive partnership, to enhance every aspect
            of their Forwarding requirement.
          </p>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
            Our goal is to help businesses establish a strong logistics network
            and achieve long-term operational success.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 md:px-8 py-3 rounded-lg shadow-md hover:bg-orange-500 transition"
          >
            Contact Us
          </Link>

        </div>
      </section>


      {/* MISSION SECTION */}
      <section className="bg-gray-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">

          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-gray-800"
            data-aos="fade-up"
          >
            Our Mission & Vision
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

            <div
              className="bg-white p-6 md:p-8 rounded-2xl shadow hover:shadow-xl transition"
              data-aos="flip-left"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-orange-600">
                Our Mission
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                To deliver innovative and reliable logistics solutions that
                empower global trade.
              </p>
            </div>

            <div
              className="bg-white p-6 md:p-8 rounded-2xl shadow hover:shadow-xl transition"
              data-aos="flip-up"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-orange-600">
                Our Vision
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                To become a trusted logistics partner worldwide through
                technology and service excellence.
              </p>
            </div>

            <div
              className="bg-white p-6 md:p-8 rounded-2xl shadow hover:shadow-xl transition"
              data-aos="flip-right"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-orange-600">
                Our Values
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Integrity, transparency, innovation, and customer satisfaction
                guide everything we do.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* COMPANY DETAILS SECTION */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
            data-aos="fade-right"
          >
            <span className="text-teal-900">About </span>
            <span className="text-red-600">
              Era Marya Global Logistics Pvt. Ltd.
            </span>
          </h2>

          <div
            className="space-y-5 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl"
            data-aos="fade-left"
          >
            <p>
              At Era Marya Global Logistics Pvt. Ltd., we are dedicated to
              providing top-notch logistics solutions to businesses across the
              globe.
            </p>

            <p>
              Our team of experts has extensive knowledge and experience in the
              logistics industry, enabling us to design customized and efficient
              supply chain solutions.
            </p>

            <p>
              Our dedication to quality is reflected in every aspect of our
              service, ensuring safe and timely delivery.
            </p>

            <p>
              We believe success comes from building strong relationships with
              our clients and consistently exceeding their expectations.
            </p>
          </div>

          {/* VIDEO */}
          <div className="mt-10" data-aos="zoom-in">
            <iframe
              className="w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[500px] rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/YqtisSTPqsc"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>

        </div>
      </section>

    </main>
  );
}