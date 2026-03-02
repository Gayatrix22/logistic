export default function Home() {
  return (
    <main className="w-full">

      {/* HERO SECTION (ERAMARYA STYLE) */}
      <section
        className="relative h-[90vh] w-full bg-cover bg-center flex items-center"
        style={{
          backgroundImage: "homepagebg.jpeg",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16">

          {/* Orange Title */}
          <p className="text-orange-500 font-semibold tracking-wide text-lg mb-3">
            ERA MARYA GLOBAL LOGISTICS PVT. LTD.
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-xl">
            Innovating logistics <br /> for a better tomorrow
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl drop-shadow">
            Facilitating Sea and Air Freight Forwarding and Custom Clearance
            Across the Globe.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="px-8 py-3 bg-red-600 text-white rounded-lg text-lg font-medium shadow-lg hover:bg-red-700 transition"
            >
              Get a Quote
            </a>

            <a
              href="/services"
              className="px-8 py-3 border border-white/40 text-white rounded-lg text-lg font-medium hover:bg-white/10 transition"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Bottom Slanted Shape */}
        <div className="absolute bottom-0 w-full">
          <svg
            viewBox="0 0 1440 320"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path fill="#ff4d00" d="M0,288L1440,224L1440,320L0,320Z"></path>
            <path fill="#ffffff" d="M0,320L1440,320L1440,280L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* ABOUT PREVIEW SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
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
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            Our Core Services
          </h2>

          
        </div>
      </section>
    </main>
  );
}