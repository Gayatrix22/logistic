"use client";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import { motion } from "framer-motion";
import { Target, Eye, Gem } from "lucide-react";


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


   <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

    {/* LEFT CONTENT */}
    <div data-aos="fade-right">

      <p className="text-sm uppercase tracking-widest text-orange-600 font-semibold mb-3">
        Global Logistics
      </p>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-800">
        Smart & Reliable
        <span className="block text-orange-600">
          Logistics Solutions
        </span>
      </h2>

      <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
        Era Marya Global Logistics Pvt. Ltd. delivers end-to-end freight
        solutions designed to simplify complex supply chains and ensure
        timely delivery across the globe.
      </p>

      <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8">
        We combine industry expertise with advanced logistics strategies
        to help your business grow faster and operate smarter.
      </p>

      <Link
        href="/contact"
        className="inline-block bg-orange-500 text-white px-7 py-3 rounded-md font-medium hover:bg-orange-600 transition duration-300 shadow-md"
      >
        Get in Touch
      </Link>

    </div>

    
  {/* RIGHT SIDE CARD */}
<div data-aos="fade-left" className="relative perspective-1000">

  <motion.div
    whileHover={{
      rotateX: 8,
      rotateY: -8,
      scale: 1.04,
    }}
    transition={{ type: "spring", stiffness: 180, damping: 12 }}
    className="relative bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 p-8 rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
  >

    {/* Glow Effect */}
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-300/30 to-transparent blur-2xl"></div>
    </div>

    {/* Content */}
    <div className="relative z-10">

      <h3 className="text-xl font-semibold mb-6 text-gray-800">
        Why Choose Us?
      </h3>

      <ul className="space-y-4 text-gray-600">

        <li className="flex items-start gap-3">
          <span className="text-orange-500 font-bold">✔</span>
          Fast & Secure Delivery Worldwide
        </li>

        <li className="flex items-start gap-3">
          <span className="text-orange-500 font-bold">✔</span>
          End-to-End Supply Chain Solutions
        </li>

        <li className="flex items-start gap-3">
          <span className="text-orange-500 font-bold">✔</span>
          Experienced Logistics Team
        </li>

        <li className="flex items-start gap-3">
          <span className="text-orange-500 font-bold">✔</span>
          Cost-Effective & Scalable Services
        </li>

      </ul>

    </div>

  </motion.div>
</div>

  </div>
</section>

     <section className="bg-gradient-to-b from-gray-100 to-gray-200 py-16 sm:py-20 md:py-24 px-4 sm:px-6">

  <div className="max-w-7xl mx-auto text-center">

    {/* Heading */}
    <h2
      className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-gray-800"
      data-aos="fade-up"
    >
      Our Mission & Vision
    </h2>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">



      {/* MISSION */}
     <div
  className="group relative bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl transition duration-300 overflow-hidden"
  data-aos="flip-left"
>

  {/* 🔥 Glow Effect ADD HERE */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-300/40 to-transparent blur-2xl animate-pulse"></div>
  </div>

  {/* CONTENT */}
  <div className="relative z-10">

    <div className="flex justify-center mb-5">
      <div className="bg-orange-100 p-4 rounded-full group-hover:scale-110 transition">
        <Target className="text-orange-600" size={28} />
      </div>
    </div>

    <h3 className="text-xl font-semibold mb-4 text-gray-800">
      Our Mission
    </h3>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      To deliver innovative and reliable logistics solutions that
      empower global trade.
    </p>

  </div>

</div>

     {/* Our Vision */}
<div
  className="group relative bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl transition duration-300 overflow-hidden hover:-translate-y-2"
  data-aos="flip-up"
>

  {/* Glow Effect */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-300/40 to-transparent blur-2xl animate-pulse"></div>
  </div>

  {/* Content */}
  <div className="relative z-10">

    <div className="flex justify-center mb-5">
      <div className="bg-orange-100 p-4 rounded-full group-hover:scale-110 transition">
        <Eye className="text-orange-600" size={28} />
      </div>
    </div>

    <h3 className="text-xl font-semibold mb-4 text-gray-800">
      Our Vision
    </h3>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      To become a trusted logistics partner worldwide through
      technology and service excellence.
    </p>

  </div>

</div>

      {/* VALUES */}
    <div
  className="group relative bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl transition duration-300 overflow-hidden hover:-translate-y-2"
  data-aos="flip-right"
>

  {/* Glow Effect */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-300/40 to-transparent blur-2xl animate-pulse"></div>
  </div>

  {/* Content */}
  <div className="relative z-10">

    <div className="flex justify-center mb-5">
      <div className="bg-orange-100 p-4 rounded-full group-hover:scale-110 transition">
        <Gem className="text-orange-600" size={28} />
      </div>
    </div>

    <h3 className="text-xl font-semibold mb-4 text-gray-800">
      Our Values
    </h3>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Integrity, transparency, innovation, and customer satisfaction
      guide everything we do.
    </p>

  </div>

</div>

    </div>
  </div>
  </section>

{ /* Company detail section */}

      <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden">

  {/* Background Shape */}
  <div className="absolute top-0 right-0 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-30"></div>

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div data-aos="fade-right">

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
        <span className="text-gray-800">About </span>
        <span className="text-orange-600">
          Era Marya Global Logistics Pvt. Ltd.
        </span>
      </h2>

      {/* Divider */}
      <div className="w-20 h-1 bg-orange-500 mb-6 rounded-full"></div>

     <div className="space-y-5 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">

  <p>
    At Era Marya Global Logistics Pvt. Ltd., we specialize in delivering
    comprehensive logistics and freight forwarding solutions tailored to
    meet the evolving needs of global businesses.
  </p>

  <p>
    From air freight and sea freight to warehousing and distribution,
    our services are designed to ensure seamless movement of goods across
    international borders with maximum efficiency and reliability.
  </p>

  <p>
    Our experienced team leverages advanced logistics strategies,
    real-time tracking systems, and strong global partnerships to
    optimize supply chain operations and reduce transit time.
  </p>

  <p>
    We are committed to providing secure handling, timely delivery,
    and cost-effective solutions that help businesses scale faster
    in a competitive global market.
  </p>

  <p>
    With a customer-centric approach and industry expertise,
    we build long-term partnerships by consistently exceeding
    expectations and delivering excellence in every shipment.
  </p>

</div>

    </div>
   
   {/* RIGHT SIDE UNIQUE DESIGN */}

  <div
  className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-3xl p-8 shadow-xl space-y-6"
  data-aos="fade-left"
>

  {/* Item 1 */}
  <div className="flex items-start gap-4 group p-4 rounded-xl hover:bg-orange-50 transition duration-300">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 text-xl font-bold group-hover:scale-110 transition">
      🚚
    </div>
    <div>
      <h4 className="text-lg font-semibold text-gray-800">
        Fast Transportation
      </h4>
      <p className="text-gray-600 text-sm">
        Quick and secure delivery services across global destinations.
      </p>
    </div>
  </div>

  {/* Item 2 */}
  <div className="flex items-start gap-4 group p-4 rounded-xl hover:bg-orange-50 transition duration-300">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 text-xl font-bold group-hover:scale-110 transition">
      🌍
    </div>
    <div>
      <h4 className="text-lg font-semibold text-gray-800">
        Global Network
      </h4>
      <p className="text-gray-600 text-sm">
        Strong international presence with trusted global partners.
      </p>
    </div>
  </div>

  {/* Item 3 */}
  <div className="flex items-start gap-4 group p-4 rounded-xl hover:bg-orange-50 transition duration-300">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 text-xl font-bold group-hover:scale-110 transition">
      📦
    </div>
    <div>
      <h4 className="text-lg font-semibold text-gray-800">
        Secure Packaging
      </h4>
      <p className="text-gray-600 text-sm">
        Ensuring safety and protection of goods during transit.
      </p>
    </div>
  </div>

  {/* Item 4 */}
  <div className="flex items-start gap-4 group p-4 rounded-xl hover:bg-orange-50 transition duration-300">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 text-xl font-bold group-hover:scale-110 transition">
      ⏱️
    </div>
    <div>
      <h4 className="text-lg font-semibold text-gray-800">
        24/7 Support
      </h4>
      <p className="text-gray-600 text-sm">
        Dedicated support team available anytime for your needs.
      </p>
    </div>
  </div>

</div>

  </div>
</section>

      {/* VIDEO SECTION */}
<section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-white">

  <div className="max-w-7xl mx-auto text-center">

    {/* Heading */}
    <h2
      className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4"
      data-aos="fade-up"
    >
      See Our Logistics In Action
    </h2>

    <p
      className="text-gray-600 text-sm sm:text-base md:text-lg mb-10"
      data-aos="fade-up"
    >
      Watch how we deliver fast, secure, and reliable logistics solutions worldwide.
    </p>

    {/* Video Card */}
    <div
      className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
      data-aos="zoom-in"
    >

      {/* Glow Border */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 via-transparent to-orange-200/30 blur-xl opacity-60"></div>

      {/* Video */}
      <iframe
        className="relative w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[500px]"
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