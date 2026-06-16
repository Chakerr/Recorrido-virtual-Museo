import { useState, useEffect } from "react";

const caracteristicas = [
  { label: "Tipología", valor: "Esquinera curva" },
  { label: "Área del lote", valor: "350 m²" },
  { label: "Altura actual", valor: "3 pisos + azotea" },
  { label: "Altura permitida", valor: "3 – 4 pisos (máx. 12 m)" },
  { label: "Índice ocupación", valor: "70% del lote" },
  { label: "Año estimado", valor: "~1940" },
];

const normativa = [
  {
    num: "01",
    titulo: "Uso principal",
    desc: "Área destinada a uso residencial y habitacional. Protege los barrios tradicionales y las viviendas patrimoniales del sector.",
  },
  {
    num: "02",
    titulo: "Uso secundario",
    desc: "Actividades de bajo impacto sin necesidad de grandes aforos ni parqueo masivo. Compatible con uso cultural y museístico.",
  },
  {
    num: "03",
    titulo: "Edificabilidad",
    desc: "El predio se rige por el PEMP del Centro Histórico (Resolución 088 de 2021). Alturas permitidas entre 3 y 4 pisos, máximo 9 a 12 metros.",
  },
  {
    num: "04",
    titulo: "Fachadas",
    desc: "Respeto del alineamiento de fachada original de la manzana. Se regulan materiales de acabado exterior, vanos de ventanas de proporción vertical y colores coherentes con la memoria patrimonial.",
  },
];

export default function Lugar() {
  const [hover, setHover] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      padding: "4rem 1.25rem",
      borderTop: "0.5px solid var(--borde)",
    }}>

      {/* Header */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: "1rem",
        marginBottom: "4rem",
      }}>
        <div>
          <p style={{
            fontSize: "11px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--rojo)",
            marginBottom: "0.75rem",
          }}>
            Lectura de territorio
          </p>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(48px, 12vw, 96px)",
            lineHeight: 0.9,
            color: "var(--texto)",
          }}>
            EL<br />LUGAR
          </h2>
        </div>
        <div style={{
          fontSize: "11px",
          color: "var(--texto-secundario)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          textAlign: "right",
          lineHeight: 2,
        }}>
          Cra 4D #31-77<br />
          Barrio La Perseverancia<br />
          Localidad Santa Fe
        </div>
      </div>

      {/* Imagen con animación de transición */}
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
          marginBottom: "3rem",
          touchAction: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Fachada actual con anotaciones */}
        <img
          src={`${import.meta.env.BASE_URL}fotos/museo-fachada-actual-sin-fondo.png`}
          alt="Estado actual"
          style={{
            position: "absolute",
            width: "80%",
            height: "90%",
            objectFit: "contain",
            opacity: hover ? 0 : 1,
            transform: hover ? "scale(0.92) translateY(10px)" : "scale(1) translateY(0px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
            filter: hover ? "blur(4px)" : "blur(0px)",
          }}
        />

        {/* Render propuesta sin fondo */}
        <img
          src={`${import.meta.env.BASE_URL}fotos/Museo-render-sin-fondo3.png`}
          alt="Propuesta museo"
          style={{
            position: "absolute",
            width: "80%",
            height: "90%",
            objectFit: "contain",
            opacity: hover ? 1 : 0,
            transform: hover ? "scale(1) translateY(0px)" : "scale(1.08) translateY(-10px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
            filter: hover ? "blur(0px)" : "blur(4px)",
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
            {hover ? "MUSEO INTELIGENTE" : "ESTADO ACTUAL"}
          </div>
          <div style={{
            fontSize: "10px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: hover ? "var(--rojo-vivo)" : "var(--texto-secundario)",
            marginTop: "4px",
            transition: "color 0.4s",
          }}>
            {hover ? "Propuesta de intervención · 2026" : "Cra 4D #31-77 · Sin intervención"}
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

      {/* Características del lote */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
        borderTop: "0.5px solid var(--borde)",
        marginBottom: "3rem",
      }}>
        {caracteristicas.map((c) => (
          <div key={c.label} style={{
            padding: "1.5rem 1rem",
            borderRight: "0.5px solid var(--borde)",
            borderBottom: "0.5px solid var(--borde)",
          }}>
            <div style={{
              fontSize: "9px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--texto-secundario)",
              marginBottom: "0.5rem",
            }}>
              {c.label}
            </div>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "18px",
              letterSpacing: "0.05em",
              color: "var(--texto)",
              lineHeight: 1.2,
            }}>
              {c.valor}
            </div>
          </div>
        ))}
      </div>

      {/* Render normativa + lista */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        borderTop: "0.5px solid var(--borde)",
        marginBottom: "3rem",
      }}>
        {/* Imagen normativa POT */}
        <div style={{
          borderRight: "0.5px solid var(--borde)",
          borderBottom: "0.5px solid var(--borde)",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}>
          <p style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "13px",
            letterSpacing: "0.2em",
            color: "var(--rojo)",
          }}>
            POT · Decreto 555/2021
          </p>
          <img
            src={`${import.meta.env.BASE_URL}fotos/museo-render-zonificacion.png`}
            alt="Normativa POT"
            style={{
              width: "100%",
              objectFit: "contain",
              background: "#ffffff",
              padding: "1rem",
            }}
          />
        </div>

        {/* Normativa */}
        <div style={{ borderBottom: "0.5px solid var(--borde)" }}>
          <p style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "13px",
            letterSpacing: "0.2em",
            color: "var(--rojo)",
            padding: "2rem 1.5rem 1rem",
          }}>
            Normativa aplicable
          </p>
          {normativa.map((n) => (
            <div key={n.num} style={{
              display: "flex",
              gap: "1rem",
              padding: "1rem 1.5rem",
              borderTop: "0.5px solid var(--borde)",
            }}>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "13px",
                color: "var(--borde)",
                flexShrink: 0,
                paddingTop: "2px",
              }}>
                {n.num}
              </div>
              <div>
                <div style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "16px",
                  letterSpacing: "0.08em",
                  color: "var(--texto)",
                  marginBottom: "0.3rem",
                }}>
                  {n.titulo}
                </div>
                <div style={{
                  fontSize: "12px",
                  color: "var(--texto-secundario)",
                  lineHeight: 1.6,
                }}>
                  {n.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Parámetros estructurales */}
      <div style={{ borderTop: "0.5px solid var(--borde)" }}>
        <p style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "13px",
          letterSpacing: "0.2em",
          color: "var(--rojo)",
          padding: "1.5rem 0 1rem",
        }}>
          Parámetros estructurales · NRS-10
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          borderTop: "0.5px solid var(--borde)",
        }}>
          {[
            { label: "Grupo de uso", valor: "3 · Coef. 1.25" },
            { label: "Carga mínima de diseño", valor: "5 kPa" },
            { label: "Protección incendios", valor: "C2" },
            { label: "Tipo de suelo", valor: "B/C · Roca blanda" },
            { label: "Cimentación recomendada", valor: "Pilotes / Zapatas" },
            { label: "Amenaza sísmica", valor: "Intermedia" },
          ].map((p) => (
            <div key={p.label} style={{
              padding: "1.5rem 1rem",
              borderRight: "0.5px solid var(--borde)",
              borderBottom: "0.5px solid var(--borde)",
            }}>
              <div style={{
                fontSize: "9px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--texto-secundario)",
                marginBottom: "0.5rem",
              }}>
                {p.label}
              </div>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "18px",
                letterSpacing: "0.05em",
                color: "var(--texto)",
                lineHeight: 1.2,
              }}>
                {p.valor}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}