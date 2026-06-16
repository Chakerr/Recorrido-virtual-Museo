const datosUrbanos = [
  { label: "Área del barrio", valor: "~18 ha" },
  { label: "Estrato", valor: "2 – 3" },
  { label: "Localidad", valor: "Santa Fe" },
  { label: "Año fundación", valor: "1912" },
];

const usosSuelo = [
  {
    num: "01", uso: "Residencial", porcentaje: 55,
    desc: "Predominio de vivienda unifamiliar y bifamiliar en manzanas de trazado irregular condicionado por la ladera.",
  },
  {
    num: "02", uso: "Comercial", porcentaje: 25,
    desc: "Comercio de proximidad en planta baja, concentrado en la Plaza Distrital de Mercado y sus bordes.",
  },
  {
    num: "03", uso: "Institucional", porcentaje: 12,
    desc: "Equipamientos educativos, religiosos y culturales que articulan la vida comunitaria del barrio.",
  },
  {
    num: "04", uso: "Turístico", porcentaje: 8,
    desc: "Uso emergente vinculado a la Plaza de Mercado y la proximidad con el Museo Nacional y el Parque de la Independencia.",
  },
];

const equipamientos = [
  { nombre: "Plaza Distrital La Perseverancia", tipo: "Comercio / Patrimonio", dist: "Interna" },
  { nombre: "Museo Nacional de Colombia", tipo: "Cultura", dist: "~400 m" },
  { nombre: "Planetario de Bogotá", tipo: "Ciencia / Educación", dist: "~600 m" },
  { nombre: "Parque de la Independencia", tipo: "Espacio público", dist: "~500 m" },
  { nombre: "Torres del Parque", tipo: "Referente urbano", dist: "~350 m" },
];

const analisis = [
  {
    num: "01", titulo: "Morfología urbana",
    desc: "Trama de manzanas irregulares condicionada por los Cerros Orientales. Pendientes del 5–15% generan secciones viales estrechas y perfiles escalonados que caracterizan la imagen urbana.",
  },
  {
    num: "02", titulo: "Usos del suelo",
    desc: "Predominio residencial con fuerte presencia comercial de proximidad. El uso turístico y gastronómico se concentra en la Plaza de Mercado y sus bordes.",
  },
  {
    num: "03", titulo: "Espacio público",
    desc: "Red de parques de bolsillo y la Plaza Distrital conforman el sistema de espacio público, conectado al eje verde del Parque de la Independencia y los Cerros.",
  },
  {
    num: "04", titulo: "Movilidad",
    desc: "Acceso vehicular restringido por topografía. Alta permeabilidad peatonal hacia el Centro Internacional. La pendiente condiciona la movilidad interna del barrio.",
  },
];

export default function Territorio() {
  return (
    <div style={{
      minHeight: "100vh",
      padding: "6rem 1.25rem 4rem",
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
            Análisis urbano compartido
          </p>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(48px, 12vw, 96px)",
            lineHeight: 0.9,
            color: "var(--texto)",
          }}>
            TERRI-<br />TORIO
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
          Ladera Cerros Orientales<br />
          Pendiente 5 – 15%<br />
          Bogotá D.C.
        </div>
      </div>
      {/* Datos urbanos */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
        borderTop: "0.5px solid var(--borde)",
        marginBottom: "3rem",
      }}>
        {datosUrbanos.map((d) => (
          <div key={d.label} style={{
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
              {d.label}
            </div>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "24px",
              letterSpacing: "0.05em",
              color: "var(--texto)",
            }}>
              {d.valor}
            </div>
          </div>
        ))}
      </div>

      {/* Imagen Plaza de Mercado */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "3rem" }}>
        <div style={{
          padding: "6px",
          background: "#ffffff",
          display: "inline-block",
          width: "50%",
        }}>
          <img
            src={`${import.meta.env.BASE_URL}fotos/plaza-mercado.png`}
            alt="Plaza de Mercado La Perseverancia"
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              objectPosition: "center 30%",
              display: "block",
            }}
          />
        </div>
      </div>

      {/* Usos del suelo */}
      <div style={{
        borderTop: "0.5px solid var(--borde)",
        marginBottom: "3rem",
      }}>
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "13px",
          letterSpacing: "0.2em",
          color: "var(--rojo)",
          padding: "1.5rem 0 1rem",
        }}>
          Usos del suelo
        </div>

        {/* Barra proporcional */}
        <div style={{ display: "flex", height: "4px", marginBottom: "2rem", gap: "2px" }}>
          {usosSuelo.map((u) => (
            <div key={u.uso} style={{
              flex: u.porcentaje,
              background: u.uso === "Residencial" ? "var(--texto)"
                : u.uso === "Comercial" ? "var(--rojo)"
                  : u.uso === "Institucional" ? "#555" : "#333",
            }} />
          ))}
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          borderTop: "0.5px solid var(--borde)",
        }}>
          {usosSuelo.map((u) => (
            <div key={u.num} style={{
              padding: "1.5rem 1rem",
              borderRight: "0.5px solid var(--borde)",
              borderBottom: "0.5px solid var(--borde)",
            }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: "0.5rem",
              }}>
                <div style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "18px",
                  letterSpacing: "0.08em",
                  color: "var(--texto)",
                }}>
                  {u.uso}
                </div>
                <div style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "24px",
                  color: "var(--rojo)",
                }}>
                  {u.porcentaje}%
                </div>
              </div>
              <div style={{
                fontSize: "12px",
                color: "var(--texto-secundario)",
                lineHeight: 1.6,
              }}>
                {u.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Análisis urbano */}
      <div style={{
        borderTop: "0.5px solid var(--borde)",
        marginBottom: "3rem",
      }}>
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "13px",
          letterSpacing: "0.2em",
          color: "var(--rojo)",
          padding: "1.5rem 0 1rem",
        }}>
          Reconocimiento urbano
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          borderTop: "0.5px solid var(--borde)",
        }}>
          {analisis.map((a) => (
            <div key={a.num} style={{
              padding: "1.5rem 1rem",
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
                {a.num}
              </div>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "18px",
                letterSpacing: "0.08em",
                color: "var(--texto)",
                marginBottom: "0.5rem",
              }}>
                {a.titulo}
              </div>
              <div style={{
                fontSize: "12px",
                color: "var(--texto-secundario)",
                lineHeight: 1.6,
              }}>
                {a.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Equipamientos */}
      <div style={{ borderTop: "0.5px solid var(--borde)" }}>
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "13px",
          letterSpacing: "0.2em",
          color: "var(--rojo)",
          padding: "1.5rem 0 1rem",
        }}>
          Equipamientos y referencias urbanas
        </div>
        <div style={{ borderTop: "0.5px solid var(--borde)" }}>
          {equipamientos.map((eq, i) => (
            <div key={eq.nombre} style={{
              display: "grid",
              gridTemplateColumns: "1fr auto auto",
              alignItems: "center",
              gap: "1rem",
              padding: "1rem 0.5rem",
              borderBottom: i < equipamientos.length - 1 ? "0.5px solid var(--borde)" : "none",
            }}>
              <div style={{ fontSize: "13px", color: "var(--texto)" }}>
                {eq.nombre}
              </div>
              <div style={{
                fontSize: "10px",
                color: "var(--texto-secundario)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}>
                {eq.tipo}
              </div>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "14px",
                color: "var(--rojo)",
                letterSpacing: "0.08em",
                whiteSpace: "nowrap",
                textAlign: "right",
                minWidth: "55px",
              }}>
                {eq.dist}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}