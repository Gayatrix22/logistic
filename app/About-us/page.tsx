"use client";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="bg-gray-50">

      {/* HERO SECTION */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center text-white text-center px-4">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Global-Logistics.jpg')" }}
        ></div>

        <div className="absolute inset-0 bg-black/60"></div>

        <div 
          className="relative z-10"
          data-aos="fade-up"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
           About Our Company
          </h1>
          <p className="mt-3 text-xs sm:text-sm md:text-base">
             Home <span className="text-red-500">»</span> About Us
          </p>
        </div>
      </section>


      {/* ABOUT SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">

          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Providing World-Class
          </h2> 
          <h2 className="text-4xl font-bold text-orange-800 mb-8">
            Logistics Solution
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
           Era Marya Global Logistics Pvt. Ltd. is a privately owned Independent freight forwarder established with the concept of providing our customers with a comprehensive partnership, to enhance every aspect of their Forwarding requirement. This has been achieved through our sustained practice of adapting our services to meet the requirements of our clients and continuing confirm to their individual needs.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Our goal is to help businesses establish a strong online presence
            and achieve long-term success.
          </p>

          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-orange-500 transition duration-300"
          >
            Contact Us
          </a>

        </div>
      </section>
   {/* MISSION SECTION */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 
            className="text-3xl font-bold mb-12 text-gray-800"
            data-aos="fade-up"
          >
            Our Mission & Vision
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            
            <div 
              className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
              data-aos="flip-left"
            >
              <h3 className="text-xl font-semibold mb-4 text-orange-600">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To deliver innovative and reliable solutions.
              </p>
            </div>

            <div 
              className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
              data-aos="flip-up"
            >
              <h3 className="text-xl font-semibold mb-4 text-orange-600">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To become a trusted technology partner worldwide.
              </p>
            </div>

            <div 
              className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
              data-aos="flip-right"
            >
              <h3 className="text-xl font-semibold mb-4 text-orange-600">
                Our Values
              </h3>
              <p className="text-gray-600">
                Integrity, innovation, and customer satisfaction.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* COMPANY DETAILS SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <h2 
            className="text-4xl md:text-5xl font-bold mb-8"
            data-aos="fade-right"
          >
            <span className="text-teal-900">About </span>
            <span className="text-red-600">
              Era Marya Global Logistics Pvt. Ltd.
            </span>
          </h2>

          <div 
            className="space-y-6 text-gray-700 text-lg leading-relaxed"
            data-aos="fade-left"
          >
            <p>
              At Era Marya Global Logistics Pvt. Ltd., we are dedicated to
              providing top-notch logistics solutions to businesses.
            </p>

            <p>
              Our team of experts has extensive knowledge and experience in the
              logistics industry, and we use this expertise to design customized
              solutions.
            </p>

            <p>
              Our dedication to quality is reflected in every aspect of our
              service, ensuring efficient delivery.
            </p>

            <p>
              We believe that success is all about building strong relationships
              with our clients.
            </p>
          </div>

          {/* VIDEO */}
          <div className="mt-10" data-aos="zoom-in">
            <iframe
              className="w-full h-[400px] rounded-xl shadow-lg"
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