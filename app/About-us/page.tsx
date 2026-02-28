export default function About() {
  return (
    <main className="bg-gray-50">

    {/* HERO SECTION */}
<section className="relative flex items-center justify-center bg-black ">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-contain bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/Global-Logistics.jpg')",
      backgroundSize: "130%",   // 🔥 increase this for more broadness
    }}
  ></div>

  {/* Optional Dark Overlay */}
 <div className="absolute inset-0 bg-black/60"></div>
  {/* Content */}
  <div className="relative z-10 text-white text-center py-40 px-6">
    <h1 className="text-4xl md:text-5xl font-bold">
      About Our Company
    </h1>

    <p className="max-w-2xl mx-auto text-lg text-gray-200">
      We provide reliable and professional logistics solutions
      designed to help businesses grow efficiently.
    </p>
  </div>

</section>


      {/* ABOUT SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Who We Are
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            We are a professional web development company focused on delivering
            high-quality digital solutions. Our team specializes in creating
            responsive, user-friendly websites using modern technologies.
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

      {/* ✅ NEW SECTION ADDED BELOW CONTACT BUTTON */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-teal-900">About </span>
            <span className="text-red-600">
              Era Marya Global Logistics Pvt. Ltd.
            </span>
          </h2>

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">

            <p>
              At Era Marya Global Logistics Pvt. Ltd., we are dedicated to
              providing top-notch logistics solutions to businesses of all sizes.
              We are driven by a passion for excellence and a commitment to
              delivering outstanding service to our customers.
            </p>

            <p>
              Our team of experts has extensive knowledge and experience in the
              logistics industry, and we use this expertise to design customized
              solutions that meet the unique needs of each of our clients. From
              global coverage with local presence, to competitive pricing and
              on-time delivery, we are committed to helping our clients achieve
              their goals and grow their businesses.
            </p>

            <p>
              Our dedication to quality is reflected in every aspect of our
              service, from our exceptional safety standards, to highly skilled
              and motivated workforce, we can deliver your cargo with ease and
              efficiently, leveraging our knowledge of the shortest and most
              efficient routes.
            </p>

            <p>
              At Era Marya Global Logistics Pvt. Ltd., we believe that success is
              all about building strong relationships with our clients. That's why
              we are dedicated to building long-lasting partnerships based on
              trust, reliability, and mutual success.
            </p>

          </div>

          {/* IMAGE */}
          <div className="mt-10">
            <div className="mt-10">
  <iframe
    className="w-full h-[400px] rounded-xl shadow-lg"
    src="https://www.youtube.com/embed/https://youtu.be/YqtisSTPqsc"
    title="YouTube video"
    allowFullScreen
  ></iframe>
</div>
          </div>

        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">
            Our Mission & Vision
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4 text-orange-600">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To deliver innovative and reliable solutions that empower
                businesses to grow and succeed in the digital world.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4 text-orange-600">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To become a trusted technology partner worldwide by providing
                exceptional service and digital experiences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4 text-orange-600">
                Our Values
              </h3>
              <p className="text-gray-600">
                Integrity, innovation, quality, and customer satisfaction
                are at the core of everything we do.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}