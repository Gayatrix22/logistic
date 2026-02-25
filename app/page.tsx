export default function Hero() {
  return (
    <section className="w-full pt-24 pb-28 bg-[#0c0f16] text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        
        {/* LEFT CONTENT */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Powering the Future of Digital Experiences.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl">
            Modern neon-tech powered interfaces crafted for speed, clarity, 
            and next-generation productivity.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#"
              className="px-6 py-3 bg-gradient-to-r from-[#4b3bff] to-[#8d5cff]
              rounded-lg text-base font-medium shadow-[0_0_20px_#7c5cff66]
              hover:shadow-[0_0_35px_#7c5cff99] transition-all"
            >
              Get Started
            </a>

            <a
              href="#"
              className="px-6 py-3 border border-white/20 rounded-lg 
              text-base font-medium hover:bg-white/5 transition"
            >
              Learn More
            </a>
          </div>

          {/* SOCIAL PROOF */}
          <div className="mt-10 flex items-center gap-4 text-sm text-gray-400">
            ⭐⭐⭐⭐⭐ <span>Trusted by leading innovative teams</span>
          </div>
        </div>

        {/* RIGHT ILLUSTRATION */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-md rounded-3xl overflow-hidden 
          shadow-[0_0_60px_#7c5cff55] border border-white/10 bg-white/5 backdrop-blur-xl">
            <img
              src="/3D.png"
              alt="Neon Tech Dashboard"
              className="w-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}