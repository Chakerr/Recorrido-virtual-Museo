import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Selector() {
  const navigate = useNavigate();
  const [hoverMuseo, setHoverMuseo] = useState(false);
  const [hoverCentro, setHoverCentro] = useState(false);
  const base = import.meta.env.BASE_URL;

  return (
    <div style={{
      minHeight: "100vh",
      padding: "6rem 1.25rem 4rem",
      borderTop: "0.5px solid var(--borde)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}>

      <div style={{ marginBottom: "4rem" }}>
        <p style={{
          fontSize: "11px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--rojo)",
          marginBottom: "0.75rem",
        }}>
          Propuestas de intervención
        </p>
        <h2 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(48px, 12vw, 96px)",
          lineHeight: 0.9,
          color: "var(--texto)",
        }}>
          DOS<br />PROYECTOS
        </h2>
        <p style={{
          fontSize: "13px",
          color: "var(--texto-secundario)",
          lineHeight: 1.7,
          marginTop: "1rem",
          maxWidth: "480px",
        }}>
          Dos equipos, dos visiones sobre el mismo lote.
          Explora cada propuesta de intervención para el
          barrio La Perseverancia.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "12px",
        borderTop: "0.5px solid var(--borde)",
        paddingTop: "2rem",
      }}>

        {/* Grupo 1 — Museo con imagen hover */}
        <div
          onMouseEnter={() => setHoverMuseo(true)}
          onMouseLeave={() => setHoverMuseo(false)}
          style={{
            cursor: "default",
            position: "relative",
            overflow: "hidden",
            borderRadius: "var(--radio)",
            height: "500px",
          }}
        >
          <img
            src={`${base}fotos/antes.jpg`}
            alt="Estado actual"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
              background: "#111",
              opacity: hoverMuseo ? 0 : 1,
              transition: "opacity 0.8s ease",
            }}
          />
          <img
            src={`${base}fotos/despues.jpg`}
            alt="Propuesta museo"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
              background: "#111",
              opacity: hoverMuseo ? 1 : 0,
              transition: "opacity 0.8s ease",
            }}
          />

          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.95), transparent)",
            padding: "3rem 1.25rem 1.25rem",
            zIndex: 10,
          }}>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: "var(--rojo)",
              marginBottom: "0.4rem",
            }}>
              Grupo 1 · Arquitectura + Sistemas
            </div>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "32px",
              letterSpacing: "0.05em",
              color: "#fff",
              lineHeight: 1,
              marginBottom: "0.5rem",
            }}>
              MUSEO<br />COMUNITARIO
            </div>
            <div style={{
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              display: "flex",
              justifyContent: "space-between",
              borderTop: "0.5px solid rgba(255,255,255,0.1)",
              paddingTop: "0.75rem",
              marginTop: "0.75rem",
            }}>
              <span>{hoverMuseo ? "Ver propuesta →" : "Pasar el cursor"}</span>
              <span>01</span>
            </div>
          </div>

          <div style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            fontSize: "10px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
            zIndex: 10,
          }}>
            {hoverMuseo ? "Propuesta" : "Estado actual"}
          </div>
        </div>

        {/* Grupo 2 — Centro con imagen hover */}
        <div
          onMouseEnter={() => setHoverCentro(true)}
          onMouseLeave={() => setHoverCentro(false)}
          onClick={() => navigate("/centro")}
          style={{
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
            borderRadius: "var(--radio)",
            height: "500px",
          }}
        >
          <img
            src={`${base}fotos/antes.jpg`}
            alt="Estado actual"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
              background: "#111",
              opacity: hoverCentro ? 0 : 1,
              transition: "opacity 0.8s ease",
            }}
          />
          <img
            src={`${base}fotos/despues-centro.png`}
            alt="Propuesta centro"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
              background: "#111",
              opacity: hoverCentro ? 1 : 0,
              transition: "opacity 0.8s ease",
            }}
          />

          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.95), transparent)",
            padding: "3rem 1.25rem 1.25rem",
            zIndex: 10,
          }}>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: "var(--rojo)",
              marginBottom: "0.4rem",
            }}>
              Grupo 2 · Arquitectura + Sistemas + Civil + Espacios + Negocios
            </div>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "32px",
              letterSpacing: "0.05em",
              color: "#fff",
              lineHeight: 1,
              marginBottom: "0.5rem",
            }}>
              NACE
            </div>
            <div style={{
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              display: "flex",
              justifyContent: "space-between",
              borderTop: "0.5px solid rgba(255,255,255,0.1)",
              paddingTop: "0.75rem",
              marginTop: "0.75rem",
            }}>
              <span>{hoverCentro ? "Ver propuesta →" : "Pasar el cursor"}</span>
              <span>02</span>
            </div>
          </div>

          <div style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            fontSize: "10px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
            zIndex: 10,
          }}>
            {hoverCentro ? "Propuesta" : "Estado actual"}
          </div>
        </div>
      </div>
    </div>
  );
}