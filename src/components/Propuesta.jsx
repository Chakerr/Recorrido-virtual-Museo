const zonas = [
  {
    color: "#6B7FD4",
    nombre: "Azotea",
    desc: "Terraza accesible con visuales hacia los Cerros Orientales y el centro de Bogotá.",
  },
  {
    color: "#C4A882",
    nombre: "Sala 3 · Inmersión 360°",
    desc: "Proyecciones inmersivas de 360° que transportan al visitante a momentos históricos del barrio.",
  },
  {
    color: "#E8C547",
    nombre: "Sala 2 · Memoria Oral",
    desc: "Cabinas de voz donde los habitantes del barrio narran su historia en primera persona.",
  },
  {
    color: "#D4748C",
    nombre: "Sala 1 · Historia",
    desc: "Línea de tiempo de La Perseverancia desde 1912 hasta hoy. El punto de partida del recorrido.",
  },
  {
    color: "#E8A06B",
    nombre: "Sala 4 · Gastronomía",
    desc: "Historia de la Plaza de Mercado, cocina tradicional colombiana y mapa gastronómico del barrio.",
  },
  {
    color: "#7DB87D",
    nombre: "Ingreso / Espacio público",
    desc: "Esculturas, murales comunitarios y mercados artesanales. El barrio como museo vivo.",
  },
];

const referentes = [
  {
    num: "01",
    nombre: "Quartieri Spagnoli",
    lugar: "Nápoles, Italia",
    desc: "El barrio entendido como museo vivo, donde las calles, plazas y actividades cotidianas hacen parte de la experiencia cultural. De manera similar, el Museo Inteligente puede extenderse al espacio público de La Perseverancia.",
  },
  {
    num: "02",
    nombre: "MUDEC · Museo delle Culture",
    lugar: "Milán, Italia · David Chipperfield",
    desc: "Nace de la recuperación de una antigua zona industrial en el barrio de Tortona. Demuestra cómo un espacio con memoria histórica puede transformarse en un centro cultural contemporáneo, preservando su identidad y convirtiéndose en lugar de encuentro comunitario.",
  },
];

const datosFODA = [
  {
    titulo: "Fortalezas",
    color: "var(--texto)",
    items: [
      "Ubicación estratégica entre La Perseverancia y el Centro Internacional",
      "Cercanía a equipamientos culturales de escala metropolitana",
      "Fuerte identidad histórica, social y patrimonial del barrio",
      "Visuales privilegiadas hacia los Cerros Orientales",
    ],
  },
  {
    titulo: "Oportunidades",
    color: "var(--rojo)",
    items: [
      "Creación de un museo que fortalezca la memoria histórica y cultural",
      "Incorporación de tecnologías digitales para la difusión del patrimonio",
      "Integración con actividades educativas, comunitarias y de investigación",
      "Generar espacios accesibles e inclusivos usando medios tecnológicos",
    ],
  },
  {
    titulo: "Debilidades",
    color: "#666",
    items: [
      "Vías locales con secciones reducidas y limitaciones vehiculares",
      "Espacio público limitado en algunos sectores del entorno",
      "Posibles restricciones normativas del contexto patrimonial",
      "Escasez de áreas libres para futuras expansiones",
    ],
  },
  {
    titulo: "Amenazas",
    color: "#666",
    items: [
      "Transformación urbana que afecte la identidad tradicional del barrio",
      "Saturación de movilidad durante eventos o temporadas turísticas",
      "Deterioro de algunos espacios urbanos cercanos",
      "Pérdida progresiva de la memoria colectiva sin mecanismos de preservación",
    ],
  },
];

export default function Propuesta() {
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
            Programa arquitectónico
          </p>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(48px, 12vw, 96px)",
            lineHeight: 0.9,
            color: "var(--texto)",
          }}>
            LA<br />PROPUESTA
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
          Museo Inteligente<br />
          La Perseverancia<br />
          2026
        </div>
      </div>

      {/* Concepto */}
      <div style={{
        borderTop: "0.5px solid var(--borde)",
        marginBottom: "3rem",
        padding: "2rem 0",
      }}>
        <p style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "13px",
          letterSpacing: "0.2em",
          color: "var(--rojo)",
          marginBottom: "1.25rem",
        }}>
          Concepto
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "3rem",
        }}>
          <p style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(24px, 4vw, 40px)",
            lineHeight: 1.1,
            color: "var(--texto)",
          }}>
            "La historia de La Perseverancia contada por sus habitantes"
          </p>
          <p style={{
            fontSize: "14px",
            color: "var(--texto-secundario)",
            lineHeight: 1.8,
          }}>
            La idea es que el visitante no solo observe, sino que experimente el barrio. El museo se plantea como un espacio de preservación, visibilización y fortalecimiento de la identidad cultural, construido a partir de la memoria y la participación activa de su comunidad. Los habitantes son la base del museo: sus historias, prácticas y experiencias construyen el contenido que se busca preservar.
          </p>
        </div>
      </div>

      {/* Render zonificación + zonas */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        borderTop: "0.5px solid var(--borde)",
        marginBottom: "3rem",
      }}>
        {/* Render */}
        <div style={{
          padding: "2rem",
          borderRight: "0.5px solid var(--borde)",
          borderBottom: "0.5px solid var(--borde)",
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
            Zonificación por pisos
          </p>
          <img
            src={`${import.meta.env.BASE_URL}fotos/museo-render-general.png`}
            alt="Render zonificación"
            style={{
              width: "100%",
              objectFit: "contain",
              background: "#ffffff",
              padding: "1rem",
            }}
          />
        </div>

        {/* Lista de zonas */}
        <div style={{ borderBottom: "0.5px solid var(--borde)" }}>
          <p style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "13px",
            letterSpacing: "0.2em",
            color: "var(--rojo)",
            padding: "2rem 1.5rem 1rem",
          }}>
            Programa
          </p>
          {zonas.map((z, i) => (
            <div key={z.nombre} style={{
              display: "flex",
              gap: "1rem",
              padding: "1rem 1.5rem",
              borderTop: "0.5px solid var(--borde)",
              alignItems: "flex-start",
            }}>
              <div style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: z.color,
                flexShrink: 0,
                marginTop: "4px",
              }} />
              <div>
                <div style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "16px",
                  letterSpacing: "0.08em",
                  color: "var(--texto)",
                  marginBottom: "0.3rem",
                }}>
                  {z.nombre}
                </div>
                <div style={{
                  fontSize: "12px",
                  color: "var(--texto-secundario)",
                  lineHeight: 1.6,
                }}>
                  {z.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Referentes */}
      <div style={{
        borderTop: "0.5px solid var(--borde)",
        marginBottom: "3rem",
      }}>
        <p style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "13px",
          letterSpacing: "0.2em",
          color: "var(--rojo)",
          padding: "1.5rem 0 1rem",
        }}>
          Referentes
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          borderTop: "0.5px solid var(--borde)",
        }}>
          {referentes.map((r) => (
            <div key={r.num} style={{
              padding: "1.75rem 1.25rem",
              borderRight: "0.5px solid var(--borde)",
              borderBottom: "0.5px solid var(--borde)",
            }}>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "40px",
                color: "var(--borde)",
                lineHeight: 1,
                marginBottom: "0.5rem",
              }}>
                {r.num}
              </div>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "18px",
                letterSpacing: "0.08em",
                color: "var(--texto)",
                marginBottom: "0.2rem",
              }}>
                {r.nombre}
              </div>
              <div style={{
                fontSize: "9px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--rojo)",
                marginBottom: "0.75rem",
              }}>
                {r.lugar}
              </div>
              <div style={{
                fontSize: "12px",
                color: "var(--texto-secundario)",
                lineHeight: 1.7,
              }}>
                {r.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FODA */}
      <div style={{ borderTop: "0.5px solid var(--borde)" }}>
        <p style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "13px",
          letterSpacing: "0.2em",
          color: "var(--rojo)",
          padding: "1.5rem 0 1rem",
        }}>
          Análisis FODA
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          borderTop: "0.5px solid var(--borde)",
        }}>
          {datosFODA.map((f) => (
            <div key={f.titulo} style={{
              padding: "1.75rem 1.25rem",
              borderRight: "0.5px solid var(--borde)",
              borderBottom: "0.5px solid var(--borde)",
            }}>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "20px",
                letterSpacing: "0.08em",
                color: f.color,
                marginBottom: "1rem",
              }}>
                {f.titulo}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {f.items.map((item, i) => (
                  <div key={i} style={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "flex-start",
                  }}>
                    <div style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: f.color,
                      flexShrink: 0,
                      marginTop: "6px",
                      opacity: 0.6,
                    }} />
                    <p style={{
                      fontSize: "12px",
                      color: "var(--texto-secundario)",
                      lineHeight: 1.6,
                      margin: 0,
                    }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}