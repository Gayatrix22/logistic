export default function About() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="container">
          <h1>About Our Company</h1>
          <p>
            We are passionate about building modern, responsive, and
            high-performing websites that help businesses grow online.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            
            {/* IMAGE */}
            <div className="about-image">
              <img src="/about.jpg" alt="About Us" />
            </div>

            {/* CONTENT */}
            <div className="about-content">
              <h2>Who We Are</h2>
              <p>
                We are a professional web development company focused on
                delivering high-quality digital solutions. Our team specializes
                in creating responsive, user-friendly websites using modern
                technologies.
              </p>
              <p>
                Our goal is to help businesses establish a strong online
                presence and achieve long-term success.
              </p>

              <a href="/contact" className="btn-primary">
                Contact Us
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="mission-section">
        <div className="container">
          <h2 className="section-title">Our Mission & Vision</h2>

          <div className="mission-grid">
            
            <div className="card">
              <h3>Our Mission</h3>
              <p>
                To deliver innovative and reliable web solutions that empower
                businesses to grow and succeed in the digital world.
              </p>
            </div>

            <div className="card">
              <h3>Our Vision</h3>
              <p>
                To become a trusted technology partner for businesses worldwide
                by providing exceptional digital experiences.
              </p>
            </div>

            <div className="card">
              <h3>Our Values</h3>
              <p>
                Integrity, innovation, quality, and customer satisfaction are
                at the core of everything we do.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}