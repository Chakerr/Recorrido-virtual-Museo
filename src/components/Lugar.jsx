import { useState, useEffect } from "react";

export default function Lugar() {
  const [hover, setHover] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ minHeight: "100vh", padding: "2rem 1.25rem" }}>

      <div style={{
        marginBottom: "2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: "1rem",
      }}>
        <div>
          <h1 style={{
            fontSize: "clamp(48px, 12vw, 96px)",
            lineHeight: 0.9,
            color: "var(--texto)",
          }}>
            EL<br />LUGAR
          </h1>
          <p style={{
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--rojo)",
            marginTop: "0.75rem",
          }}>
            Análisis digital · Barrio La Perseverancia · 2026
          </p>
        </div>
        <div style={{
          fontSize: "11px",
          color: "var(--texto-secundario)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          textAlign: "right",
          lineHeight: 1.8,
        }}>
          <span style={{ color: "var(--texto)" }}>Cra 4 # 31-76</span><br />
          3 pisos + azotea<br />
          Esquinera curva<br />
          Est. ~1940
        </div>
      </div>

      {/* Imagen */}
      <div
        onTouchEnd={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setHover((prev) => !prev);
        }}
        onMouseEnter={() => !isMobile && setHover(true)}
        onMouseLeave={() => !isMobile && setHover(false)}
        style={{
          position: "relative",
          width: "100%",
          height: "60vh",
          cursor: "crosshair",
          overflow: "hidden",
          background: "#111111",
          touchAction: "none",
        }}
      >
        <img
          src={`${import.meta.env.BASE_URL}fotos/antes.jpg`}
          alt="Estado actual"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "center",
            opacity: hover ? 0 : 1,
            transition: "opacity 0.8s ease",
          }}
        />
        <img
          src={`${import.meta.env.BASE_URL}fotos/despues.jpg`}
          alt="Propuesta museo"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "center",
            opacity: hover ? 1 : 0,
            transition: "opacity 0.8s ease",
          }}
        />

        {/* Label inferior */}
        <div style={{
          position: "absolute",
          bottom: "1rem",
          left: "1rem",
          zIndex: 10,
        }}>
          <div style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(18px, 4vw, 32px)",
            letterSpacing: "0.1em",
            color: "#fff",
            lineHeight: 1,
          }}>
            {hover ? "MUSEO COMUNITARIO" : "ESTADO ACTUAL"}
          </div>
          <div style={{
            fontSize: "10px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: hover ? "var(--rojo-vivo)" : "var(--texto-secundario)",
            marginTop: "4px",
            transition: "color 0.4s",
          }}>
            {hover ? "Rehabilitación y puesta en valor" : "Sin intervención · Cra 4 # 31-76"}
          </div>
        </div>

        {/* Label superior */}
        <div style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          zIndex: 10,
          fontSize: "10px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.4)",
        }}>
          {hover ? "← volver" : isMobile ? "toca → propuesta" : "pasa el cursor →"}
        </div>
      </div>

      {/* Datos rápidos */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        gap: "1rem",
        marginTop: "1.5rem",
        borderTop: "0.5px solid var(--borde)",
        paddingTop: "1.25rem",
      }}>
        {[
          { label: "Tipología", valor: "Esquinera curva" },
          { label: "Área estimada", valor: "~280 m²" },
          { label: "Accesos", valor: "3 identificados" },
          { label: "Cobertura 4G", valor: "Confirmada" },
          { label: "Presencia digital", valor: "Inexistente" },
        ].map((item) => (
          <div key={item.label}>
            <div style={{
              fontSize: "9px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--texto-secundario)",
              marginBottom: "4px",
            }}>
              {item.label}
            </div>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "16px",
              letterSpacing: "0.05em",
              color: "var(--texto)",
            }}>
              {item.valor}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}