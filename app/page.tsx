"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [showText, setShowText] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => setShowText(true), 1000);
  }, []);

  return (
    <main>

      {/* HERO */}
      <section className="hero">

        <video autoPlay muted loop playsInline className="video-bg">
          <source src="/video/logistics.mp4" type="video/mp4" />
        </video>

        <div className="overlay"></div>

        <div className={`hero-content ${showText ? "show" : ""}`}>
          <h4 className="company">
            ERA MARYA GLOBAL LOGISTIC PVT. LTD.
          </h4>

          <h1 className="title">
            Innovating logistics for a better tomorrow
          </h1>

          <p className="desc">
            Facilitating Sea and Air Freight Forwarding and Custom Clearance
            Across the Globe.
          </p>

         <div className="buttons">
  <button
    className="btn primary"
    onClick={() => router.push("/contact")}
  >
    Contact
  </button>

  <button
    className="btn secondary"
    onClick={() => router.push("/service")}
  >
    Services
  </button>
</div>
</div>

      </section>
      

{/* SERVICES */}
<section className="py-20 bg-gray-100 px-6">

  <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800">
    Our Core Services
  </h2>

  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

    
    {/* CARD */}
<div className="group bg-white rounded-lg overflow-hidden shadow-md transition-all duration-500 hover:bg-blue-600">

<img
src="/ship1.jpg"
className="w-full h-48 object-cover"
/>

<div className="p-8 text-center">

<h3 className="text-xl font-bold text-gray-800 group-hover:text-white transition">
Sea Freight Forwarding
</h3>

<p className="text-gray-600 mt-3 group-hover:text-white transition">
Offering seamless and efficient sea freight forwarding solutions for all your import and export needs.
</p>

<a
href="/service/sea-freight"
className="inline-block mt-6 px-5 py-2 border border-blue-600 text-blue-600 rounded-full group-hover:bg-white group-hover:text-blue-600 transition"
>
Read More →
</a>

</div>

</div>

  {/* CARD */}
<div className="group bg-white rounded-lg overflow-hidden shadow-md transition-all duration-500 hover:bg-blue-600">

<img
src="/air.jpg"
className="w-full h-48 object-cover"
/>

<div className="p-8 text-center">

<h3 className="text-xl font-bold text-gray-800 group-hover:text-white transition">
Air Freight Forwarding
</h3>

<p className="text-gray-600 mt-3 group-hover:text-white transition">
Speed, reliability, and affordability – our air freight forwarding service guarantees a seamless experience.
</p>

<a
href="/service/air-freight"
className="inline-block mt-6 px-5 py-2 border border-blue-600 text-blue-600 rounded-full group-hover:bg-white group-hover:text-blue-600 transition"
>
Read More →
</a>

</div>

</div>
   
{/* CARD */}
<div className="group bg-white rounded-lg overflow-hidden shadow-md transition-all duration-500 hover:bg-blue-600">

<img
src="/c2.jpg"
className="w-full h-48 object-cover"
/>

<div className="p-8 text-center">

<h3 className="text-xl font-bold text-gray-800 group-hover:text-white transition">
Custom Clearance
</h3>

<p className="text-gray-600 mt-3 group-hover:text-white transition">
Effortlessly navigate the customs clearance process with Era Marya Global Logistics Pvt. Ltd.
</p>

<a
href="/service/custom-clearance"
className="inline-block mt-6 px-5 py-2 border border-blue-600 text-blue-600 rounded-full group-hover:bg-white group-hover:text-blue-600 transition"
>
Read More →
</a>
</div>
</div>


    {/* CARD */}
    <div className="group bg-white rounded-lg overflow-hidden shadow-md transition-all duration-500 hover:bg-blue-600">

      <img
        src="/odc.jpg"
        className="w-full h-48 object-cover"
      />

      <div className="p-6 text-center">

        <h3 className="text-xl font-bold text-gray-800 group-hover:text-white transition">
          ODC Logistics Support
        </h3>

        <p className="text-gray-600 mt-3 group-hover:text-white transition">
          From heavy machinery to delicate equipment, our ODC logistics service ensures secure delivery.
        </p>

        <a
          href="/service/odc-logistics"
          className="inline-block mt-6 px-5 py-2 border border-blue-600 text-blue-600 rounded-full group-hover:bg-white group-hover:text-blue-600 transition"
        >
          Read More →
        </a>

      </div>
    </div>


    {/* CARD */}
    <div className="group bg-white rounded-lg overflow-hidden shadow-md transition-all duration-500 hover:bg-blue-600">

      <img
        src="/project.jpg"
        className="w-full h-48 object-cover"
      />

      <div className="p-6 text-center">

        <h3 className="text-xl font-bold text-gray-800 group-hover:text-white transition">
          Project Shipments
        </h3>

        <p className="text-gray-600 mt-3 group-hover:text-white transition">
          Expert project shipment services providing customized solutions for challenging cargo.
        </p>

        <a
          href="/service/project-shipments"
          className="inline-block mt-6 px-5 py-2 border border-blue-600 text-blue-600 rounded-full group-hover:bg-white group-hover:text-blue-600 transition"
        >
          Read More →
        </a>

      </div>
    </div>


    {/* CARD */}
    <div className="group bg-white rounded-lg overflow-hidden shadow-md transition-all duration-500 hover:bg-blue-600">

      <img
        src="/warehouse.jpg"
        className="w-full h-48 object-cover"
      />

      <div className="p-6 text-center">

        <h3 className="text-xl font-bold text-gray-800 group-hover:text-white transition">
          Warehousing
        </h3>

        <p className="text-gray-600 mt-3 group-hover:text-white transition">
          Secure and scalable warehousing services designed for modern supply chains.
        </p>

        <a
          href="/service/warehousing"
          className="inline-block mt-6 px-5 py-2 border border-blue-600 text-blue-600 rounded-full group-hover:bg-white group-hover:text-blue-600 transition"
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
/* HERO SECTION */
.hero {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

/* VIDEO */
.video-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* OVERLAY */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
}

/* CONTENT */
.hero-content {
  position: relative;
  z-index: 2;
  color: #fff;
  max-width: 700px;
  padding-left: 80px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s ease;
}

/* SHOW ANIMATION */
.hero-content.show {
  opacity: 1;
  transform: translateY(-50%);
}

.company {
  color: #ff4d00;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 15px;
}

.title {
  font-size: 56px;  
  font-weight: 800; 
  line-height: 1.2;
  color: white;
}

.desc {
  font-size: 20px;
  margin-top: 20px;
  color: #ddd;
  max-width: 600px;
}

/* BUTTONS */
.buttons {
  display: flex;
  gap: 15px;
}

.btn {
  padding: 12px 28px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
}

.primary {
  background: #ff3c00;
  color: #fff;
  border: none;
}

.secondary {
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
}

/* MOBILE RESPONSIVE */
@media (max-width: 768px) {
  .hero-content {
    padding: 20px;
    text-align: center;
  }

  .title {
    font-size: 28px;
  }

  .desc {
    font-size: 14px;
  }

  .buttons {
    justify-content: center;
    flex-direction: column;
  }
}
/* SERVICE CARDS */

.service-card{
  background:white;
  padding:30px;
  border-radius:10px;
  text-align:center;
  box-shadow:0 10px 20px rgba(0,0,0,.08);
}

.service-card h3{
  font-weight:700;
  margin-top:10px;
}

.service-card p{
  color:#666;
  margin-top:10px;
}

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