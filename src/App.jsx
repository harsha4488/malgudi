import React, { useState, useEffect } from "react";

export default function App() {
  // HERO SLIDESHOW IMAGES
  const heroImages = [
    "/images/chai7.jpg",
    "/images/chai6.jpg",
    "/images/chai4.jpg",
    "/images/chai1.jpg",
    "/images/chai2.jpg",
    "/images/chai3.jpg",
    "/images/chai4.jpg",
  ];

  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 3500); // change every 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontFamily: "system-ui", background: "#fff6e9", color: "#2b1b12" }}>
      
      {/* HERO SLIDESHOW */}
      <header
        style={{
          height: "70vh",
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${heroImages[currentHero]}') center/cover`,
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
          Malgudi Amruta Chai
        </h1>
        <p>Vijayanagar • Ondu Sala Savidhu Nodi</p>
      </header>

      {/* NAV */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          background: "#6f4e37",
          padding: "12px",
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          color: "white",
          fontWeight: "bold",
          zIndex: 10,
        }}
      >
        <a href="#about" style={{ color: "white", textDecoration: "none" }}>About</a>
        <a href="#menu" style={{ color: "white", textDecoration: "none" }}>Menu</a>
        <a href="#gallery" style={{ color: "white", textDecoration: "none" }}>Gallery</a>
        <a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
      </nav>

      {/* ABOUT */}
      <section id="about" style={{ padding: "60px 20px", maxWidth: "1000px", margin: "auto" }}>
        <h2 style={{ color: "#6f4e37", textAlign: "center" }}>Our Story</h2>
        <p style={{ textAlign: "center", fontSize: "18px", marginTop: "15px" }}>
          Malgudi Chai Shop in Vijayanagar is your everyday chai adda.
          Fresh chai, strong filter coffee, crispy snacks, and great conversations.
        </p>
      </section>

      {/* MENU */}
      <section id="menu" style={{ background: "white", padding: "60px 20px" }}>
        <h2 style={{ color: "#6f4e37", textAlign: "center" }}>Menu</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            maxWidth: "900px",
            margin: "30px auto",
          }}
        >
          {[
            ["Special Chai", "₹15"],
            ["Ginger Chai", "₹20"],
            ["Masala Chai", "₹20"],
            ["Filter Coffee", "₹25"],
            ["Bun Maska", "₹30"],
            ["Samosa", "₹20"],
          ].map(([name, price]) => (
            <div
              key={name}
              style={{
                background: "#fff6e9",
                padding: "20px",
                borderRadius: "15px",
                textAlign: "center",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              }}
            >
              <h3>{name}</h3>
              <p style={{ color: "#c97c3d", fontWeight: "bold" }}>{price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY (ALL PHOTOS) */}
      <section id="gallery" style={{ padding: "60px 20px" }}>
        <h2 style={{ color: "#6f4e37", textAlign: "center" }}>
          Chai Moments
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "15px",
            maxWidth: "1100px",
            margin: "30px auto",
          }}
        >
          {[
            "/images/chai5.jpg",
            "/images/chai6.jpg",
            "/images/chai7.jpg",
            "/images/chai1.jpg",
            "/images/chai2.jpg",
            "/images/chai3.jpg",
            "/images/chai4.jpg",
            
    ,
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Malgudi Chai Shop"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "15px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
              }}
            />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: "60px 20px",
          textAlign: "center",
          background: "#6f4e37",
          color: "white",
        }}
      >
        <h2>Visit Us</h2>
        <p>
          Vijayanagar, Bengaluru <br />
          Open: 6:30 AM – 10:30 PM
        </p>

        <a
          href="https://wa.me/91XXXXXXXXXX"
          style={{
            display: "inline-block",
            marginTop: "20px",
            background: "white",
            color: "#6f4e37",
            padding: "12px 25px",
            borderRadius: "30px",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Order on WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "15px",
          background: "#2b1b12",
          color: "white",
        }}
      >
        © {new Date().getFullYear()} Malgudi Chai Shop – Vijayanagar
      </footer>
    </div>
  );
}