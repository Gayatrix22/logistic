"use client";

export default function Home() {

  const title = ["Innovating logistics", "for a better tomorrow"];
  const company = "ERA MARYA GLOBAL LOGISTICS PVT. LTD.";

  return (
    <main className="w-full">

      {/* HERO SECTION */}
      <section
        className="hero-section"
        style={{
          position: "relative",
          minHeight: "100vh",
          width: "100%",
          backgroundImage: "url('/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >

        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
          }}
        ></div>

        {/* HERO CONTENT */}
        <div className="hero-content">

          {/* Company */}
          <p className="company">
            {company.split("").map((letter, i) => (
              <span key={i} style={{ animationDelay: `${i * 0.02}s` }}>
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </p>

          {/* Title */}
          <h1 className="title">
  {title.map((line, index) => (
    <div key={index}>
      {line.split("").map((letter, i) => (
        <span key={i} style={{ animationDelay: `${i * 0.05}s` }}>
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </div>
  ))}
</h1>



          {/* Description */}
<p className="desc text-animate">
  Facilitating Sea and Air Freight Forwarding and Custom Clearance
  Across the Globe.
</p>


          {/* Buttons */}
          <div className="buttons">

            <a href="/contact" className="btn-primary">
              Get a Quote
            </a>

            <a href="/service" className="btn-outline">
              Explore Services
            </a>

          </div>

        </div>

        {/* WAVE */}
        <svg viewBox="0 0 1440 320" className="wave">
          <path fill="#ff4d00" d="M0,288L1440,224L1440,320L0,320Z"></path>
          <path fill="#ffffff" d="M0,320L1440,320L1440,280L0,320Z"></path>
        </svg>

      </section>


      {/* ABOUT */}
      <section className="py-20 bg-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          Global Logistics, Delivered With Excellence
        </h2>

        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          We are a leading logistics and supply chain company committed to
          delivering seamless, safe, and cost-effective transport solutions
          across the world.
        </p>
      </section>


      {/* SERVICES */}
      <section className="py-20 bg-gray-100 px-6">

        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800">
          Our Core Services
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          <div className="service-card">
            <img src="/air.png" className="w-20 mx-auto mb-4" />
            <h3>Air Freight</h3>
            <p>
              Fast & reliable air cargo services ensuring timely deliveries
              across global destinations.
            </p>
          </div>

          <div className="service-card">
            <img src="/ship.png" className="w-20 mx-auto mb-4" />
            <h3>Ocean Freight</h3>
            <p>
              Cost-effective sea freight services connecting worldwide ports
              with reliability.
            </p>
          </div>

          <div className="service-card">
            <img src="/truck.png" className="w-20 mx-auto mb-4" />
            <h3>Road Transport</h3>
            <p>
              Safe & efficient road cargo movement with real-time tracking.
            </p>
          </div>

        </div>

      </section>


      {/* FEATURE SECTION */}
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

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


      {/* BOTTOM STRIP */}
      <div className="bottom-strip"></div>


      {/* CSS */}
      <style jsx>{`

.hero-content{
  position:relative;
  z-index:2;
  max-width:700px;
  margin-left:8%;
}

/* HERO TEXT */

.company{
  color:#ff4d00;
  font-size:20px;
  font-weight:700;
}

.title{
  font-size:48px;
  font-weight:800;
  color:white;
  margin:20px 0;
  line-height:1.2;
}

.desc{
  color:white;
  font-size:20px;
  max-width:650px;
}

/* BUTTONS */

.buttons{
  margin-top:30px;
  display:flex;
  gap:15px;
  flex-wrap:wrap;
}

.btn-primary{
  padding:12px 28px;
  background:#ff4d00;
  color:white;
  border-radius:8px;
  font-weight:600;
  text-decoration:none;
  display:inline-block;
}

.btn-outline{
  padding:12px 28px;
  border:2px solid white;
  color:white;
  border-radius:8px;
  text-decoration:none;
  display:inline-block;
}

/* HERO WAVE */

.wave{
  position:absolute;
  bottom:-40px;
  width:100%;
}

/* TEXT ANIMATION */

.title span,
.company span{
  opacity:0;
  display:inline-block;
  transform:translateY(20px);
  animation:letterReveal .5s forwards;
}

@keyframes letterReveal{
  to{
    opacity:1;
    transform:translateY(0);
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
}

.feature-card span{
  font-size:28px;
  font-weight:700;
}

.feature-card h3{
  font-size:18px;
  margin-top:10px;
}

.overlay{
  position:absolute;
  inset:0;
  background:rgba(0,0,0,.4);
}

.bottom-strip{
  width:100%;
  height:60px;
  background:linear-gradient(90deg,#ea580c,#f97316);
  transform:skewY(-3deg);
}

/* ========================= */
/* RESPONSIVE DESIGN */
/* ========================= */

/* Tablet */

@media(max-width:1024px){

.hero-content{
  margin-left:5%;
  max-width:600px;
}

.title{
  font-size:40px;
}

.desc{
  font-size:18px;
}

.feature-card{
  height:420px;
}

}
@keyframes fadeSlideUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.text-animate {
  animation: fadeSlideUp 1.5s ease forwards;
}
/* Mobile */

@media(max-width:768px){

.hero-content{
  margin-left:5%;
  margin-right:5%;
  max-width:100%;
}

.title{
  font-size:32px;
}

.company{
  font-size:16px;
}

.desc{
  font-size:16px;
}

.buttons{
  flex-direction:column;
  width:220px;
}

.btn-primary,
.btn-outline{
  width:100%;
  text-align:center;
}

.feature-card{
  height:350px;
}

}

/* Small Mobile */

@media(max-width:480px){

.title{
  font-size:26px;
}

.company{
  font-size:14px;
}

.desc{
  font-size:15px;
}

.service-card{
  padding:20px;
}

.feature-card{
  height:300px;
  padding:20px;
}

}

`}</style>
    </main>
  );
}