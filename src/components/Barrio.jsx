import { useState, useEffect } from "react";

const historiaParrafos = [
  "El 7 de marzo de 1912, Leo Kopp —fundador de la Cervecería Bavaria— escrituró los primeros lotes del barrio obrero que llevaría el nombre de La Perseverancia. La iniciativa nació del compromiso entre el empresario y sus trabajadores: viviendas financiadas por la fábrica, construidas por quienes las habitarían.",
  "La iglesia del barrio, levantada entre 1930 y 1934, es el símbolo más claro de esa construcción colectiva. No fue un encargo institucional: la edificaron los propios vecinos, ladrillo a ladrillo, durante cuatro años. Ese gesto fundacional define hasta hoy la identidad del barrio.",
  "La chicha fue durante décadas el motor económico y cultural de La Perse. Las chicherías —lugares de producción, venta y reunión— articulaban la vida comunitaria. Su prohibición en los años cuarenta golpeó la economía popular del barrio, pero no borró la memoria de esa cultura fermentada que persiste en la gastronomía y la celebración.",
];

const pilares = [
  {
    num: "01",
    titulo: "Gastronomía popular",
    desc: "La chicha, el masato y la cocina de olla son patrimonio vivo. Las chicherías históricas y las plazas de mercado concentran una gastronomía que no existe igual en ningún otro sector de Bogotá.",
  },
  {
    num: "02",
    titulo: "Murales y arte urbano",
    desc: "Las fachadas del barrio son un museo abierto. Murales de gran formato narran la historia obrera, las festividades y los personajes que forjaron la identidad de La Perseverancia.",
  },
  {
    num: "03",
    titulo: "Organización comunitaria",
    desc: "Las juntas de acción comunal y los colectivos culturales mantienen activa una red de participación que data de los primeros años del barrio. La comunidad gestiona, decide y transforma su territorio.",
  },
  {
    num: "04",
    titulo: "Festividades",
    desc: "El Festival de la Chicha, la Changua y el Mute convoca más de 560.000 visitantes al año y reivindica la memoria de los saberes populares frente a la prohibición histórica.",
  },
];

const datosFundacion = [
  { label: "Fundación", valor: "7 Mar 1912" },
  { label: "Fundador", valor: "Leo Kopp" },
  { label: "Origen", valor: "Barrio obrero" },
  { label: "Empresa", valor: "Cía. Bavaria" },
];

const datosComunidad = [
  { label: "Población estimada 2025", valor: "8.500", unidad: "hab." },
  { label: "Tasa de empleo", valor: "62,9%" },
  { label: "Actividades de servicios", valor: "45,8%" },
  { label: "Comercio local", valor: "35,3%" },
  { label: "Afluencia turística", valor: "563K", unidad: "visit./año" },
  { label: "Clasificación socioecon.", valor: "2 – 3", unidad: "estrato" },
];

export default function Barrio() {
  const [paraActivo, setParaActivo] = useState(0);
  const [pausado, setPausado] = useState(false);

  useEffect(() => {
    if (pausado) return;
    const intervalo = setInterval(() => {
      setParaActivo((prev) =>
        prev === historiaParrafos.length - 1 ? 0 : prev + 1
      );
    }, 7000);
    return () => clearInterval(intervalo);
  }, [pausado]);

  const anterior = () => {
    setPausado(true);
    setParaActivo((prev) => (prev === 0 ? historiaParrafos.length - 1 : prev - 1));
    setTimeout(() => setPausado(false), 8000);
  };

  const siguiente = () => {
    setPausado(true);
    setParaActivo((prev) => (prev === historiaParrafos.length - 1 ? 0 : prev + 1));
    setTimeout(() => setPausado(false), 8000);
  };

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
            Contexto histórico y cultural
          </p>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(48px, 12vw, 96px)",
            lineHeight: 0.9,
            color: "var(--texto)",
          }}>
            EL<br />BARRIO
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
          Bogotá D.C.<br />
          Localidad Santa Fe<br />
          Cerros Orientales
        </div>
      </div>

      {/* Datos de fundación */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
        borderTop: "0.5px solid var(--borde)",
        marginBottom: "3rem",
      }}>
        {datosFundacion.map((d) => (
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
              fontSize: "20px",
              letterSpacing: "0.05em",
              color: "var(--texto)",
            }}>
              {d.valor}
            </div>
          </div>
        ))}
      </div>

      {/* Historia + Identidad */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        borderTop: "0.5px solid var(--borde)",
        marginBottom: "3rem",
      }}>

        {/* Historia */}
        <div
          onMouseEnter={() => setPausado(true)}
          onMouseLeave={() => setPausado(false)}
          style={{
            padding: "2rem 2rem 2rem 0",
            borderRight: "0.5px solid var(--borde)",
          }}
        >
          <div style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "13px",
            letterSpacing: "0.2em",
            color: "var(--rojo)",
            marginBottom: "1.25rem",
          }}>
            Historia
          </div>

          {/* Indicadores + botones */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1rem",
          }}>
            <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
              {historiaParrafos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setPausado(true);
                    setParaActivo(i);
                    setTimeout(() => setPausado(false), 8000);
                  }}
                  style={{
                    width: i === paraActivo ? "20px" : "6px",
                    height: "2px",
                    border: "none",
                    background: i === paraActivo ? "var(--rojo)" : "var(--borde)",
                    cursor: "pointer",
                    padding: 0,
                    transition: "all 0.3s",
                  }}
                />
              ))}
            </div>

            {/* Botones anterior / siguiente */}
            <div style={{ display: "flex", gap: "6px" }}>
              <button
                onClick={anterior}
                style={{
                  background: "none",
                  border: "0.5px solid var(--borde)",
                  color: "var(--texto-secundario)",
                  cursor: "pointer",
                  padding: "3px 10px",
                  fontSize: "12px",
                }}
              >
                ←
              </button>
              <button
                onClick={siguiente}
                style={{
                  background: "none",
                  border: "0.5px solid var(--borde)",
                  color: "var(--texto-secundario)",
                  cursor: "pointer",
                  padding: "3px 10px",
                  fontSize: "12px",
                }}
              >
                →
              </button>
            </div>
          </div>

          <p style={{
            fontSize: "14px",
            color: "var(--texto-secundario)",
            lineHeight: 1.8,
          }}>
            {historiaParrafos[paraActivo]}
          </p>

          {/* Imagen con marco blanco */}
          <div style={{
            marginTop: "1.5rem",
            padding: "6px",
            background: "#ffffff",
            display: "inline-block",
            width: "100%",
          }}>
            <img
              src={`${import.meta.env.BASE_URL}fotos/Barrio.png`}
              alt="Vista aérea La Perseverancia"
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>

        {/* Identidad y cultura */}
        <div style={{ padding: "2rem 0 2rem 2rem" }}>
          <div style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "13px",
            letterSpacing: "0.2em",
            color: "var(--rojo)",
            marginBottom: "1.25rem",
          }}>
            Identidad y cultura
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {pilares.map((p, i) => (
              <div key={p.num} style={{
                display: "flex",
                gap: "1rem",
                padding: "1rem 0",
                borderBottom: i < pilares.length - 1 ? "0.5px solid var(--borde)" : "none",
              }}>
                <div style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "13px",
                  color: "var(--borde)",
                  letterSpacing: "0.1em",
                  flexShrink: 0,
                  paddingTop: "2px",
                }}>
                  {p.num}
                </div>
                <div>
                  <div style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "16px",
                    letterSpacing: "0.08em",
                    color: "var(--texto)",
                    marginBottom: "0.3rem",
                  }}>
                    {p.titulo}
                  </div>
                  <div style={{
                    fontSize: "12px",
                    color: "var(--texto-secundario)",
                    lineHeight: 1.6,
                  }}>
                    {p.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comunidad en números */}
      <div style={{ borderTop: "0.5px solid var(--borde)" }}>
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "13px",
          letterSpacing: "0.2em",
          color: "var(--rojo)",
          padding: "1.5rem 0 1rem",
        }}>
          Comunidad en números
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          borderTop: "0.5px solid var(--borde)",
        }}>
          {datosComunidad.map((d) => (
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
                lineHeight: 1,
              }}>
                {d.valor}
                {d.unidad && (
                  <span style={{
                    fontSize: "11px",
                    color: "var(--rojo)",
                    marginLeft: "4px",
                  }}>
                    {d.unidad}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Línea de tiempo */}
      <div style={{ borderTop: "0.5px solid var(--borde)", marginBottom: "3rem" }}>
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "13px",
          letterSpacing: "0.2em",
          color: "var(--rojo)",
          padding: "1.5rem 0 1rem",
        }}>
          Cronología
        </div>

        <div style={{ borderTop: "0.5px solid var(--borde)" }}>
          {[
            { año: "1912", titulo: "Fundación del barrio", desc: "Leo Kopp escritura los primeros lotes. Nace el barrio obrero vinculado a la Cervecería Bavaria." },
            { año: "1912", titulo: "Plaza de Mercado", desc: "Se funda la Plaza Distrital de Mercado, corazón comercial y cultural del barrio desde sus inicios." },
            { año: "1930", titulo: "Construcción de la iglesia", desc: "Los propios vecinos inician la construcción colectiva de la iglesia del barrio, terminada en 1934." },
            { año: "1948", titulo: "Prohibición de la chicha", desc: "El gobierno prohíbe la producción y venta de chicha. La medida golpea la economía popular del barrio pero no borra su memoria cultural." },
            { año: "1990", titulo: "Organización comunitaria", desc: "Consolidación de las juntas de acción comunal y colectivos culturales que gestionan el territorio hasta hoy." },
            { año: "2004", titulo: "Festival de la Chicha", desc: "Nace el Festival de la Chicha, la Changua y el Mute, que hoy convoca más de 560.000 visitantes al año." },
            { año: "2026", titulo: "Intervención urbana", desc: "Proyecto interdisciplinar Universidad Piloto de Colombia. Dos propuestas de intervención en el lote Cra 4 # 31-76." },
          ].map((h, i, arr) => (
            <div key={h.año + h.titulo} style={{
              display: "grid",
              gridTemplateColumns: "80px 1px 1fr",
              gap: "0 1.5rem",
              borderBottom: i < arr.length - 1 ? "0.5px solid var(--borde)" : "none",
            }}>
              {/* Año */}
              <div style={{
                padding: "1.25rem 0",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-end",
              }}>
                <span style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "22px",
                  color: h.año === "2026" ? "var(--rojo)" : "var(--texto)",
                  letterSpacing: "0.05em",
                  lineHeight: 1,
                }}>
                  {h.año}
                </span>
              </div>

              {/* Línea vertical con punto */}
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
              }}>
                <div style={{
                  width: "1px",
                  flex: 1,
                  background: "var(--borde)",
                }} />
                <div style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: h.año === "2026" ? "var(--rojo)" : "var(--texto-secundario)",
                  flexShrink: 0,
                  position: "absolute",
                  top: "1.4rem",
                }} />
              </div>

              {/* Contenido */}
              <div style={{ padding: "1.25rem 0" }}>
                <div style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "16px",
                  letterSpacing: "0.08em",
                  color: "var(--texto)",
                  marginBottom: "0.3rem",
                }}>
                  {h.titulo}
                </div>
                <div style={{
                  fontSize: "12px",
                  color: "var(--texto-secundario)",
                  lineHeight: 1.6,
                }}>
                  {h.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}