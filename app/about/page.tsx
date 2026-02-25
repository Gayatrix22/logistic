import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <main className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="container">
          <h1>About Our Company</h1>
          <p>
            We build modern, scalable and high-performance digital solutions
            that help businesses grow and succeed online.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section container">
        <div className="about-grid">

          {/* IMAGE */}
          <div className="about-image">
            <Image
              src="/about.jpg"
              alt="About Us"
              width={600}
              height={400}
            />
          </div>

          {/* CONTENT */}
          <div className="about-content">
            <h2>Who We Are</h2>
            <p>
              We are a passionate team of developers and designers dedicated
              to delivering professional digital experiences.
            </p>

            <p>
              From startups to enterprises, we provide complete IT solutions
              including web development, UI/UX design and digital consulting.
            </p>

            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>

        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mission-section">
        <div className="container">
          <h2 className="section-title">Our Mission & Vision</h2>

          <div className="mission-grid">

            <div className="card">
              <h3>Our Mission</h3>
              <p>
                To empower businesses with innovative technology
                solutions that accelerate growth and efficiency.
              </p>
            </div>

            <div className="card">
              <h3>Our Vision</h3>
              <p>
                To become a trusted global technology partner delivering
                world-class digital experiences.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}