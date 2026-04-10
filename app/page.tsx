"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useRef } from "react";
import AOS from "aos";

export default function HomePage() {
  const [showText, setShowText] = useState(false);
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

  useEffect(() => {
  if (videoRef.current) {
    videoRef.current.playbackRate = 2;
  }
}, []);

useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);


  return (
    <main>

      {/* HERO */}
      <section className="relative h-[70vh] md:h-[90vh] w-full overflow-hidden">

  {/* VIDEO */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/video/logistics.mp4" type="video/mp4" />
  </video>

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* CONTENT */}
  <motion.div
    className="
      relative z-10 h-full w-full
      flex items-end md:items-center
      justify-center md:justify-end
      px-4 sm:px-6 md:px-16
      pb-8 md:pb-0
      text-center md:text-right
      bg-gradient-to-t from-black/70 via-black/30 to-transparent md:bg-none
    "
    variants={container}
    initial="hidden"
    animate="show"
  >
    <div className="max-w-xl text-white">

      {/* COMPANY */}
      <motion.h4
        variants={item}
        className="text-orange-500 text-[12px] sm:text-sm md:text-lg font-extrabold tracking-wider mb-2"
      >
        ERA MARYA GLOBAL LOGISTIC PVT. LTD.
      </motion.h4>

      {/* TITLE */}
      <motion.h1
        variants={item}
        className="text-[22px] sm:text-3xl md:text-5xl font-bold leading-tight"
      >
        Innovating logistics <br />
        for a better tomorrow
      </motion.h1>

      {/* DESCRIPTION */}
      <motion.p
        variants={item}
        className="mt-3 text-[13px] sm:text-sm md:text-base text-gray-200"
      >
        Facilitating Sea and Air Freight Forwarding and Custom Clearance Across the Globe.
      </motion.p>

      {/* BUTTONS */}
      <motion.div
        variants={item}
        className="
          mt-5 flex flex-col gap-3 items-center
          md:flex-row md:justify-end md:gap-4
        "
      >
        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          href="/contact"
          className="
            w-full max-w-[220px] md:w-auto
            bg-orange-500 px-5 py-2 rounded-md
            text-sm md:text-base
            shadow-lg hover:bg-orange-600 transition
          "
        >
          Contact
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          href="/service"
          className="
            w-full max-w-[220px] md:w-auto
            border border-white px-5 py-2 rounded-md
            text-sm md:text-base
            shadow-lg hover:bg-white hover:text-black transition
          "
        >
          Service
        </motion.a>
      </motion.div>

    </div>
  </motion.div>

</section>

{/* Aboutus */}
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

      <a
        href="/contact"
        className="inline-block bg-orange-500 text-white px-7 py-3 rounded-md font-medium hover:bg-orange-600 transition duration-300 shadow-md"
      >
        Get in Touch
      </a>

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
{/* SERVICES */}
<section className="py-20 bg-gray-100 px-4 sm:px-6 md:px-10">

  {/* TITLE */}
  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-3xl md:text-4xl font-extrabold text-center text-gray-800"
  >
    Our Core Services
  </motion.h2>

  {/* GRID */}
  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

    {/* CARD */}
    <motion.div
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  viewport={{ once: true }}
  whileHover={{ y: -10 }}
  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
>
      
      <img src="/ship1.jpg" className="w-full h-48 object-cover transition duration-500 group-hover:scale-110" />

      <div className="p-6 text-center">

        <h3 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-blue-600 transition">
          Sea Freight Forwarding
        </h3>

        <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
          Offering seamless and efficient sea freight forwarding solutions for all your import and export needs.
        </p>

        <a
          href="/service/sea-freight"
          className="inline-block mt-5 px-5 py-2 border border-blue-600 text-blue-600 rounded-full text-sm hover:bg-blue-600 hover:text-white transition"
        >
          Read More →
        </a>

      </div>
    </motion.div>

    {/* CARD */}
   <motion.div
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  viewport={{ once: true }}
  whileHover={{ y: -10 }}
  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
>
      
      <img src="/air.jpg" className="w-full h-48 object-cover transition duration-500 group-hover:scale-110" />

      <div className="p-6 text-center">

        <h3 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-blue-600 transition">
          Air Freight Forwarding
        </h3>

        <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
          Speed, reliability, and affordability – our air freight forwarding service guarantees a seamless experience.
        </p>

        <a
          href="/service/air-freight"
          className="inline-block mt-5 px-5 py-2 border border-blue-600 text-blue-600 rounded-full text-sm hover:bg-blue-600 hover:text-white transition"
        >
          Read More →
        </a>

      </div>
    </motion.div>

    {/* CARD */}
    <motion.div
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  viewport={{ once: true }}
  whileHover={{ y: -10 }}
  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
>
      
      <img src="/c2.jpg" className="w-full h-48 object-cover transition duration-500 group-hover:scale-110" />

      <div className="p-6 text-center">

        <h3 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-blue-600 transition">
          Custom Clearance
        </h3>

        <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
          Effortlessly navigate the customs clearance process with Era Marya Global Logistics Pvt. Ltd.
        </p>

        <a
          href="/service/custom-clearance"
          className="inline-block mt-5 px-5 py-2 border border-blue-600 text-blue-600 rounded-full text-sm hover:bg-blue-600 hover:text-white transition"
        >
          Read More →
        </a>

      </div>
    </motion.div>

    {/* CARD */}
  <motion.div
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  viewport={{ once: true }}
  whileHover={{ y: -10 }}
  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
>
      
      <img src="/odc.jpg" className="w-full h-48 object-cover transition duration-500 group-hover:scale-110" />

      <div className="p-6 text-center">

        <h3 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-blue-600 transition">
          ODC Logistics Support
        </h3>

        <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
          From heavy machinery to delicate equipment, our ODC logistics service ensures secure delivery.
        </p>

        <a
          href="/service/odc-logistics"
          className="inline-block mt-5 px-5 py-2 border border-blue-600 text-blue-600 rounded-full text-sm hover:bg-blue-600 hover:text-white transition"
        >
          Read More →
        </a>

      </div>
    </motion.div>

    {/* CARD */}
    <motion.div
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  viewport={{ once: true }}
  whileHover={{ y: -10 }}
  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
>
      
      <img src="/project.jpg" className="w-full h-48 object-cover transition duration-500 group-hover:scale-110" />

      <div className="p-6 text-center">

        <h3 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-blue-600 transition">
          Project Shipments
        </h3>

        <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
          Expert project shipment services providing customized solutions for challenging cargo.
        </p>

        <a
          href="/service/project-shipments"
          className="inline-block mt-5 px-5 py-2 border border-blue-600 text-blue-600 rounded-full text-sm hover:bg-blue-600 hover:text-white transition"
        >
          Read More →
        </a>

      </div>
    </motion.div>

    {/* CARD */}
    <motion.div
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  viewport={{ once: true }}
  whileHover={{ y: -10 }}
  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
>
      
      <img src="/warehouse.jpg" className="w-full h-48 object-cover transition duration-500 group-hover:scale-110" />

      <div className="p-6 text-center">

        <h3 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-blue-600 transition">
          Warehousing
        </h3>

        <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
          Secure and scalable warehousing services designed for modern supply chains.
        </p>

        <a
          href="/service/warehousing"
          className="inline-block mt-5 px-5 py-2 border border-blue-600 text-blue-600 rounded-full text-sm hover:bg-blue-600 hover:text-white transition"
        >
          Read More →
        </a>

      </div>
    </motion.div>

  </div>
</section>

{/* ABOUT */}
<section className="py-20 bg-white px-4">
  <div className="max-w-14xl mx-auto flex flex-col md:flex-row items-center gap-12">
    
    {/* LEFT SIDE IMAGE */}
    <div className="md:w-1/2">
      <img
        src="/global-delivery-model.jpg"
        alt="Global Delivery Model"
        className="w-full rounded-lg "
      />
    </div>

    {/* RIGHT SIDE TEXT */}
    <div className="md:w-1/2 text-center md:text-left">
      <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800">
        Global Logistics, Delivered With Excellence
      </h2>

      <p className="mt-4 text-2xl md:text-2xl text-gray-800">
        We are a leading logistics and supply chain company committed to
        delivering seamless, safe, and cost-effective transport solutions
        across the world. Our global delivery model ensures efficiency,
        innovation, and operational excellence for every shipment.
      </p>
    </div>

  </div>
</section>

      {/* FEATURE SECTION */}
<section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-5 bg-white mb-10 gap-1">

  {[
    { img: "/img1.jpg", title: "Global Coverage Local Presence" },
    { img: "/img2.jpg", title: "Safe & Secure Transportation" },
    { img: "/img3.jpg", title: "Extensive Network of Partners & Carriers" },
    { img: "/img4.jpg", title: "Expert Support & Customer Service" },
  ].map((item, i) => (

    <div
      key={i}
      className="relative h-[500px] bg-cover bg-center flex flex-col justify-end p-6 text-white overflow-hidden transition-transform duration-500 hover:scale-105 group"
      style={{ backgroundImage: `url(${item.img})` }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:bg-black/60"></div>

      {/* Content */}
      <span className="relative z-10 text-3xl font-bold transition-all duration-500 group-hover:text-yellow-400 group-hover:scale-125">
        {`0${i + 1}`}
      </span>

      <h3 className="relative z-10 text-lg mt-2 transition-all duration-500 group-hover:text-sky-400 group-hover:-translate-y-1">
        {item.title}
      </h3>

    </div>

  ))}

</section>
          
    </main>
  );
}