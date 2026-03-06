"use client";
export default function Home() {

  return (
    <main className="w-full">
 
      {/* HERO SECTION */}
      <section
  style={{
    position: "relative",
    minHeight: "100vh",
    width: "100%",
    backgroundImage: "url('/bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
          }}
        ></div>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            animation: "slideInRight 1.5s ease forwards",
            opacity: 0,
          }}
        >
          <p
            style={{
              color: "#ff4d00",
              fontWeight: 700,
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >
            ERA MARYA GLOBAL LOGISTICS PVT. LTD.
          </p>

          <h1
            style={{
              fontSize: "48px",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "20px",
            }}
          >
            Innovating logistics <br /> for a better tomorrow
          </h1>

          <p
            style={{
              color: "white",
              fontSize: "20px",
              maxWidth: "650px",
            }}
          >
            Facilitating Sea and Air Freight Forwarding and Custom Clearance
            Across the Globe.
          </p>

          <div style={{ marginTop: "30px", display: "flex", gap: "15px" }}>
            <a
              href="/contact"
              style={{
                padding: "12px 28px",
                background: "#ff4d00",
                color: "#fff",
                borderRadius: "8px",
                fontSize: "18px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Get a Quote
            </a>

            <a
              href="/service"
              style={{
                padding: "12px 28px",
                border: "2px solid white",
                color: "#fff",
                borderRadius: "8px",
                fontSize: "18px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Explore Services
            </a>
          </div>
        </div>

        <svg
          viewBox="0 0 1440 320"
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            zIndex: 1,
          }}
        >
          <path fill="#ff4d00" d="M0,288L1440,224L1440,320L0,320Z"></path>
          <path fill="#ffffff" d="M0,320L1440,320L1440,280L0,320Z"></path>
        </svg>

        {/* RESPONSIVE CSS */}
        <style>
          {`
            @keyframes slideInRight {
              from { opacity: 0; transform: translateX(100px); }
              to { opacity: 1; transform: translateX(0); }
            }

            /* Make hero background responsive */
           @media (max-width:768px){
        section[style*="backgroundImage"]{
background-position: top center !important;
}
}
            /* Responsive Hero Text */
            @media (max-width: 768px) {
              h1 { font-size: 32px !important; line-height: 1.3 !important; }
              p { font-size: 16px !important; }
              a { font-size: 16px !important; padding: 10px 20px !important; }
            }

            /* CTA Buttons Stack on Mobile */
            @media (max-width: 500px) {
              section div[style*="display: flex"] {
                flex-direction: column !important;
                align-items: center;
              }

              section a {
                width: 100% !important;
                text-align: center;
              }
            }
          `}
        </style>
      </section>
      
      {/* ABOUT SECTION */}
      <section className="py-20 bg-white fade-in">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Global Logistics, Delivered With Excellence
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            We are a leading logistics and supply chain company committed to
            delivering seamless, safe, and cost-effective transport solutions
            across the world.
          </p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-gray-100 fade-in">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800">
            Our Core Services
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Service 1 */}
            <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2 service-card">
              <img src="/air.png" className="w-20 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-center">Air Freight</h3>
              <p className="text-gray-500 text-center mt-3">
                Fast & reliable air cargo services ensuring timely deliveries
                across global destinations.
              </p>
            </div>

            {/* Service 2 */}
            <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2 service-card">
              <img src="/ship.png" className="w-20 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-center">Ocean Freight</h3>
              <p className="text-gray-500 text-center mt-3">
                Cost-effective sea freight services connecting worldwide ports
                with reliability.
              </p>
            </div>

            {/* Service 3 */}
            <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2 service-card">
              <img src="/truck.png" className="w-20 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-center">Road Transport</h3>
              <p className="text-gray-500 text-center mt-3">
                Safe & efficient road cargo movement with real-time tracking
                capabilities.
              </p>
            </div>
          </div>
        </div>

        {/* SERVICE RESPONSIVE CSS */}
        <style>
          {`
            @media (max-width: 640px) {
              .service-card { padding: 20px !important; }
              .service-card img { width: 60px !important; }
              .service-card h3 { font-size: 18px !important; }
              .service-card p { font-size: 14px !important; }
            }

            .fade-in {
              opacity: 0;
              animation: fadeIn 1s ease forwards;
            }

            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(20px); }
              to   { opacity: 1; transform: translateY(0); }
            }
          `}
        </style>
      </section>


      {/* FEATURE SECTION ADDED HERE  */}
    <section className="w-full grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4">
  
  {/* Card 1 */}
  <div
    className="feature-card relative h-[500px] flex flex-col justify-end p-6 text-white cursor-pointer"
    style={{
      backgroundImage: "url('/img1.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      animationDelay: "0.2s",
    }}
  >
    <div className="absolute inset-0 bg-black/40 hover:bg-black/60 transition-all"></div>
    <span className="relative text-2xl font-bold opacity-80">01</span>
    <h3 className="relative text-lg font-semibold mt-2">
      Global Coverage Local Presence
    </h3>
  </div>

  {/* Card 2 */}
  <div
    className="feature-card relative h-[500px] flex flex-col justify-end p-6 text-white cursor-pointer"
    style={{
      backgroundImage: "url('/img2.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      animationDelay: "0.4s",
    }}
  >
    <div className="absolute inset-0 bg-black/40 hover:bg-black/60 transition-all"></div>
    <span className="relative text-2xl font-bold opacity-80">02</span>
    <h3 className="relative text-lg font-semibold mt-2">
      Safe & Secure Transportation
    </h3>
  </div>

  {/* Card 3 */}
  <div
    className="feature-card relative h-[500px] flex flex-col justify-end p-6 text-white cursor-pointer"
    style={{
      backgroundImage: "url('/img3.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      animationDelay: "0.6s",
    }}
  >
    <div className="absolute inset-0 bg-black/40 hover:bg-black/60 transition-all"></div>
    <span className="relative text-2xl font-bold opacity-80">03</span>
    <h3 className="relative text-lg font-semibold mt-2">
      Extensive Network of Partners & Carriers
    </h3>
  </div>

  {/* Card 4 */}
  <div
    className="feature-card relative h-[500px] flex flex-col justify-end p-6 text-white cursor-pointer"
    style={{
      backgroundImage: "url('/img4.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      animationDelay: "0.8s",
    }}
  >
    <div className="absolute inset-0 bg-black/40 hover:bg-black/60 transition-all"></div>
    <span className="relative text-2xl font-bold opacity-80">04</span>
    <h3 className="relative text-lg font-semibold mt-2">
      Expert Support & Customer Service
    </h3>
  </div>

</section>

{/* ANIMATION CSS */}
<style>
{`
  .feature-card {
    opacity: 0;
    transform: translateY(40px);
    animation: fadeSlideUp 1s ease forwards;
  }

  @keyframes fadeSlideUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`}
</style>
      {/* BOTTOM ORANGE ANGLED SEPARATOR */}
      <div className="w-full h-14 bg-gradient-to-r from-orange-600 to-orange-500 transform -skew-y-3"></div>

    </main>
  );
}