import React, { useEffect, useState } from "react";

/* ✅ REQUIRED FOR GITHUB PAGES */
const BASE = import.meta.env.BASE_URL;

export default function App() {
  /* HERO IMAGES */
  const heroImages = [
    `${BASE}images/chai1.jpg`,
    `${BASE}images/chai2.jpg`,
    `${BASE}images/chai3.jpg`,
    `${BASE}images/chai4.jpg`,
    `${BASE}images/chai5.jpg`,
    `${BASE}images/chai6.jpg`,
    `${BASE}images/chai7.jpg`,
    `${BASE}images/chai8.jpg`,
    `${BASE}images/chai9.jpg`,
    `${BASE}images/chai10.jpg`,
  ];

  const [hero, setHero] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHero((h) => (h + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
        background: "#fff6e9",
        color: "#2b1b12",
      }}
    >
      {/* ================= HERO ================= */}
      <header
        style={{
          height: "75vh",
          background: `linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)),url(${heroImages[hero]}) center/cover`,
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
          Malgudis Amrutha Chai ☕
        </h1>

        <p style={{ fontSize: "1.15rem", maxWidth: "720px" }}>
          Vijayanagar’s Favorite Evening Chai Adda <br />
          Fresh Chai • Filter Coffee • Bun Maska • Good Conversations
        </p>

        <div
          style={{
            marginTop: "25px",
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noreferrer"
            style={buttonPrimary}
          >
            📍 Get Directions
          </a>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            style={buttonSecondary}
          >
            💬 WhatsApp Order
          </a>
        </div>
      </header>

      {/* ================= WHY US ================= */}
      <section style={{ padding: "60px 20px", background: "white" }}>
        <h2 style={sectionTitle}>Why Malgudi Chai?</h2>

        <div style={cardGrid}>
          {[
            "☕ Fresh chai brewed all day",
            "🍞 Famous Bun Maska & snacks",
            "👨‍👩‍👧 Family-friendly seating",
            "📍 Vijayanagar’s favorite chai adda",
          ].map((text) => (
            <div key={text} style={infoCard}>
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section style={{ padding: "60px 20px" }}>
        <h2 style={sectionTitle}>Popular Items ☕</h2>

        <div style={cardGrid}>
          {[
            ["Special Chai", "chai8.jpg"],
            ["Masala Chai", "chai9.jpg"],
            ["Filter Coffee", "chai10.jpg"],
            ["Bun Maska", "chai11.jpg"],
          ].map(([name, img]) => (
            <div key={name} style={productCard}>
              <img
                src={`${BASE}images/${img}`}
                alt={name}
                style={{ width: "100%", height: "180px", objectFit: "cover" }}
              />
              <h3 style={{ padding: "15px", color: "#6f4e37" }}>{name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section style={{ padding: "60px 20px", background: "#fff" }}>
        <h2 style={sectionTitle}>Chai Moments 📸</h2>

        <div
          style={{
            maxWidth: "1100px",
            margin: "30px auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "15px",
          }}
        >
          {[
            "chai1",
            "chai2",
            "chai3",
            "chai4",
            "chai5",
            "chai6",
            "chai7",
            "chai8",
          ].map((img) => (
            <img
              key={img}
              src={`${BASE}images/${img}.jpg`}
              alt="Malgudi Chai"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "14px",
                boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
              }}
            />
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer
        style={{
          background: "#2b1b12",
          color: "white",
          textAlign: "center",
          padding: "18px",
          fontSize: "0.9rem",
        }}
      >
        © {new Date().getFullYear()} Malgudis Amrutha Chai • Vijayanagar, Bengaluru
      </footer>
    </div>
  );
}

/* ================= STYLES ================= */

const sectionTitle = {
  textAlign: "center",
  color: "#6f4e37",
  marginBottom: "35px",
};

const cardGrid = {
  maxWidth: "1000px",
  margin: "auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "25px",
};

const infoCard = {
  background: "#fff6e9",
  padding: "25px",
  borderRadius: "15px",
  textAlign: "center",
  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  fontWeight: 600,
};

const productCard = {
  background: "white",
  borderRadius: "15px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  textAlign: "center",
  overflow: "hidden",
};

const buttonPrimary = {
  background: "#c97c3d",
  color: "white",
  padding: "12px 25px",
  borderRadius: "30px",
  fontWeight: "bold",
  textDecoration: "none",
};

const buttonSecondary = {
  background: "white",
  color: "#6f4e37",
  padding: "12px 25px",
  borderRadius: "30px",
  fontWeight: "bold",
  textDecoration: "none",
};