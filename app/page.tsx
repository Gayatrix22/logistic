"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useRef } from "react";

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

{/* SERVICES */}
<section className="py-20 bg-gray-100 px-4 sm:px-6 md:px-10">

  {/* TITLE */}
  <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800">
    Our Core Services
  </h2>

  {/* GRID */}
  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

    {/* CARD */}
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
      
      <img src="/ship1.jpg" className="w-full h-48 object-cover" />

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
    </div>

    {/* CARD */}
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
      
      <img src="/air.jpg" className="w-full h-48 object-cover" />

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
    </div>

    {/* CARD */}
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
      
      <img src="/c2.jpg" className="w-full h-48 object-cover" />

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
    </div>

    {/* CARD */}
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
      
      <img src="/odc.jpg" className="w-full h-48 object-cover" />

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
    </div>

    {/* CARD */}
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
      
      <img src="/project.jpg" className="w-full h-48 object-cover" />

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
    </div>

    {/* CARD */}
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
      
      <img src="/warehouse.jpg" className="w-full h-48 object-cover" />

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
    </div>

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
            className="feature-card"
            style={{
              backgroundImage: `url(${item.img})`,
            }}
          >
            <div className="overlay"></div>
            <span>{`0${i + 1}`}</span>
            <h3>{item.title}</h3>
          </div>

        ))}

      </section>
      {/* ABOUT SECTION */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
            Providing World-Class
          </h2> 
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-800 mb-6 sm:mb-8">
            Logistics Solution
          </h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
           Era Marya Global Logistics Pvt. Ltd. is a privately owned Independent freight forwarder established with the concept of providing our customers with a comprehensive partnership, to enhance every aspect of their Forwarding requirement. This has been achieved through our sustained practice of adapting our services to meet the requirements of our clients and continuing confirm to their individual needs.
          </p>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
            Our goal is to help businesses establish a strong online presence
            and achieve long-term success.
          </p>

          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg shadow-md hover:bg-orange-500 transition duration-300 text-sm sm:text-base"
          >
            Contact Us
          </a>

        </div>
      </section>
      
      {/* CSS */}
      <style jsx>{`


/* FEATURE CARDS */

.feature-card{
  height:500px;
  background-size:cover;
  background-position:center;
  position:relative;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  padding:30px;
  color:white;
  overflow:hidden;
  transition:transform 0.5s ease;
}

/* Image zoom effect */
.feature-card:hover{
  transform:scale(1.05);
}

/* Overlay */
.overlay{
  position:absolute;
  inset:0;
  background:rgba(0,0,0,0.4);
  transition:background 0.4s ease;
}

.feature-card:hover .overlay{
  background:rgba(0,0,0,0.6);
}

/* Number */
.feature-card span{
  font-size:32px;
  font-weight:700;
  position:relative;
  z-index:2;
  transition:all 0.4s ease;
}

/* Title */
.feature-card h3{
  font-size:18px;
  margin-top:10px;
  position:relative;
  z-index:2;
  transition:all 0.4s ease;
}

/* Hover text animation */
.feature-card:hover span{
  color:#facc15;
  transform:scale(1.2);
}

.feature-card:hover h3{
  color:#38bdf8;
  transform:translateY(-6px);
}

/* Bottom strip */
.bottom-strip{
  width:100%;
  height:60px;
  background:linear-gradient(90deg,#ea580c,#f97316);
  transform:skewY(-3deg);
}

`}</style>
    </main>
  );
}