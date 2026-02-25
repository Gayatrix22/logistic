export default function Home() {
  return (
    <div style={{ margin: "0", fontFamily: "'Poppins', sans-serif" }}>

      {/* ====================== NAVIGATION BAR ====================== */}
      <nav
        style={{
          width: "100%",
          padding: "15px 5%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#ffffff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontSize: "1.4rem",
            fontWeight: 700,
            color: "#ff5200",
          }}
        >
          ERA MARYA LOGISTICS
        </div>

        {/* Menu */}
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "35px",
            margin: 0,
            padding: 0,
          }}
        >
          <li><a href="#home" style={menuLink}>Home</a></li>
          <li><a href="#about" style={menuLink}>About</a></li>
          <li><a href="#services" style={menuLink}>Services</a></li>
          <li><a href="#blog" style={menuLink}>Blog</a></li>
          <li><a href="#gallery" style={menuLink}>Gallery</a></li>
          <li><a href="#contact" style={menuLink}>Contact</a></li>
        </ul>
      </nav>

      {/* ====================== HERO HEADER ====================== */}
      <header
        id="home"
        style={{
          position: "relative",
          width: "100%",
          height: "90vh",
          background: "url('/your-image.jpg') center/cover no-repeat",
          display: "flex",
          alignItems: "center",
          paddingLeft: "6%",
          color: "white",
          marginTop: "70px",
        }}
      >

        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.45)",
          }}
        ></div>

        <div style={{ position: "relative", zIndex: 2, maxWidth: "650px" }}>
          <h4
            style={{
              color: "#ff5200",
              fontWeight: 600,
              letterSpacing: "1px",
              marginBottom: "15px",
            }}
          >
            ERA MARYA GLOBAL LOGISTICS PVT. LTD.
          </h4>

          <h1
            style={{
              fontSize: "3.8rem",
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: "20px",
            }}
          >
            Innovating logistics <br /> for a better tomorrow
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              marginBottom: "30px",
              opacity: 0.9,
            }}
          >
            Facilitating Sea and Air Freight Forwarding and Custom Clearance
            Across the Globe.
          </p>

          <a
            href="#services"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.background = "#d84400")}
            onMouseOut={(e) => (e.target.style.background = "#ff5200")}
          >
            Explore Services
          </a>
        </div>
      </header>
    </div>
  );
}

/* 🔵 Inline reusable styles */
const menuLink = {
  textDecoration: "none",
  color: "#333",
  fontSize: "1rem",
  fontWeight: 500,
};

const buttonStyle = {
  display: "inline-block",
  padding: "12px 30px",
  background: "#ff5200",
  color: "#fff",
  fontSize: "1.1rem",
  borderRadius: "6px",
  textDecoration: "none",
  transition: "0.3s",
};