import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const iconDefault = L.icon({ iconUrl, shadowUrl: iconShadow, iconAnchor: [12, 41] });

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

const limitesBarrio = [
  [4.6162464, -74.0663592],
  [4.6161107, -74.0658005],
  [4.6165916, -74.0656813],
  [4.6159307, -74.0632133],
  [4.6156334, -74.0622512],
  [4.6158841, -74.0617987],
  [4.6159164, -74.061728],
  [4.6159819, -74.0616623],
  [4.6161112, -74.0616035],
  [4.6164684, -74.0614212],
  [4.6166116, -74.0613484],
  [4.616757, -74.0613234],
  [4.6168736, -74.0613243],
  [4.6170025, -74.0613192],
  [4.6171313, -74.0612818],
  [4.6172681, -74.0612252],
  [4.6176291, -74.0609927],
  [4.6176129, -74.0611043],
  [4.6174363, -74.0614609],
  [4.6174504, -74.0615951],
  [4.6174834, -74.0617091],
  [4.6175408, -74.061974],
  [4.6175639, -74.0621446],
  [4.6175874, -74.0623744],
  [4.617781, -74.0628082],
  [4.6186676, -74.0637443],
  [4.61879, -74.0639272],
  [4.6191879, -74.0644983],
  [4.6188219, -74.0648496],
  [4.6186888, -74.0648813],
  [4.6188919, -74.0656211],
  [4.6186828, -74.0656916],
  [4.617578, -74.0659994],
  [4.6168935, -74.066179],
  [4.6162464, -74.0663592],
];

const equipamientosGeo = [
  { nombre: "Plaza Distrital La Perseverancia", tipo: "Comercio / Patrimonio distrital", coords: [4.616636, -74.066290] },
  { nombre: "Iglesia de La Perseverancia", tipo: "Patrimonio arquitectónico", coords: [4.617602, -74.064507] },
  { nombre: "Museo Nacional de Colombia", tipo: "Cultura", coords: [4.616250, -74.068393] },
  { nombre: "Planetario de Bogotá", tipo: "Ciencia / Educación", coords: [4.612352, -74.068929] },
  { nombre: "Parque de la Independencia", tipo: "Espacio público", coords: [4.612073, -74.068438] },
  { nombre: "Parque de La Perseverancia", tipo: "Espacio público", coords: [4.617254, -74.064520] },
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

      {/* Mapa de equipamientos */}
      <div style={{ borderTop: "0.5px solid var(--borde)", marginBottom: "3rem" }}>
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "13px",
          letterSpacing: "0.2em",
          color: "var(--rojo)",
          padding: "1.5rem 0 1rem",
        }}>
          Contexto urbano
        </div>

        <div style={{ position: "relative", height: "450px" }}>
          <div style={{
            position: "absolute",
            top: "1rem",
            left: "1.25rem",
            zIndex: 1000,
            fontSize: "9px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--texto-secundario)",
            background: "rgba(17,17,17,0.85)",
            padding: "4px 10px",
            pointerEvents: "none",
          }}>
            Equipamientos y referencias · La Perseverancia
          </div>

          <MapContainer
            center={[4.6172, -74.0645]}
            zoom={15}
            style={{ width: "100%", height: "100%" }}
            zoomControl={false}
            scrollWheelZoom={false}
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://carto.com/">CARTO</a>'
            />

            <Polygon
              positions={limitesBarrio}
              pathOptions={{
                color: "#AF0404",
                weight: 1.5,
                opacity: 0.7,
                fillColor: "#AF0404",
                fillOpacity: 0.08,
              }}
            />

            {equipamientosGeo.map((eq) => (
              <Marker key={eq.nombre} position={eq.coords} icon={iconDefault}>
                <Popup>
                  <strong>{eq.nombre}</strong><br />
                  {eq.tipo}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
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

      {/* Equipamientos y patrimonio */}
      <div style={{ borderTop: "0.5px solid var(--borde)" }}>
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "13px",
          letterSpacing: "0.2em",
          color: "var(--rojo)",
          padding: "1.5rem 0 1rem",
        }}>
          Equipamientos y patrimonio
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          borderTop: "0.5px solid var(--borde)",
        }}>
          {[
            {
              num: "01",
              nombre: "Plaza Distrital de Mercado",
              tipo: "Patrimonio distrital",
              dist: "Interna",
              desc: "Fundada en 1912 junto con el barrio, la Plaza de Mercado es el corazón comercial y cultural de La Perseverancia. Declarada patrimonio distrital de Bogotá, alberga más de 200 puestos de gastronomía popular, frutas y verduras. Es el escenario principal del Festival de la Chicha y punto de encuentro histórico de la comunidad.",
            },
            {
              num: "02",
              nombre: "Iglesia de La Perseverancia",
              tipo: "Patrimonio arquitectónico",
              dist: "Interna",
              desc: "Construida entre 1930 y 1934 por los propios vecinos del barrio, ladrillo a ladrillo, sin intervención institucional. Su construcción es el ejemplo más claro del espíritu colectivo que define La Perseverancia. Hoy es referente arquitectónico y símbolo de identidad comunitaria.",
            },
            {
              num: "03",
              nombre: "Edificaciones históricas Bavaria",
              tipo: "Patrimonio urbano",
              dist: "Interna",
              desc: "Las casas financiadas por la Cervecería Bavaria a principios del siglo XX conforman un conjunto arquitectónico de valor histórico único en Bogotá. Construidas para alojar a los trabajadores de la fábrica, definen la morfología y escala del barrio y testimonian su origen obrero.",
            },
            {
              num: "04",
              nombre: "Murales comunitarios",
              tipo: "Patrimonio inmaterial",
              dist: "Interna",
              desc: "Las fachadas del barrio conforman un museo abierto de arte urbano reconocido a nivel distrital. Los murales narran la historia obrera, la chicha, las festividades y los personajes que forjaron la identidad del barrio. Son expresión viva de la memoria colectiva y la resistencia cultural de La Perseverancia.",
            },
            {
              num: "05",
              nombre: "Museo Nacional de Colombia",
              tipo: "Cultura",
              dist: "~400 m",
              desc: "El museo más antiguo de Colombia, fundado en 1823 y ubicado en el edificio del Panóptico construido en 1874. Alberga más de 20.000 piezas que narran la historia del país desde la prehistoria hasta el siglo XX. Su proximidad al barrio lo posiciona como ancla cultural del sector.",
            },
            {
              num: "06",
              nombre: "Planetario de Bogotá",
              tipo: "Ciencia / Educación",
              dist: "~600 m",
              desc: "Inaugurado en 1969, el Planetario de Bogotá es uno de los centros de divulgación científica más importantes de Colombia. Forma parte del eje cultural que integra el Parque de la Independencia con el Centro Internacional, corredor estratégico para La Perseverancia.",
            },
            {
              num: "07",
              nombre: "Parque de la Independencia",
              tipo: "Espacio público",
              dist: "~500 m",
              desc: "Creado en 1910 para celebrar el centenario de la independencia de Colombia. Es uno de los parques históricos más importantes de Bogotá y constituye el límite verde occidental del barrio, conectando La Perseverancia con el Centro Internacional y los Cerros Orientales.",
            },
            {
              num: "08",
              nombre: "Torres del Parque",
              tipo: "Referente urbano",
              dist: "~350 m",
              desc: "Diseñadas por el arquitecto Rogelio Salmona entre 1965 y 1970, las Torres del Parque son uno de los conjuntos residenciales más reconocidos de la arquitectura colombiana del siglo XX. Su relación con el barrio y los Cerros Orientales las convierte en referente visual y urbano permanente desde La Perseverancia.",
            },
          ].map((p) => (
            <div key={p.num} style={{
              padding: "1.75rem 1.25rem",
              borderRight: "0.5px solid var(--borde)",
              borderBottom: "0.5px solid var(--borde)",
              borderLeft: p.dist === "Interna" ? "2px solid var(--rojo)" : "2px solid transparent",
            }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "0.75rem",
                gap: "0.5rem",
              }}>
                <div style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "40px",
                  color: "var(--borde)",
                  lineHeight: 1,
                  flexShrink: 0,
                }}>
                  {p.num}
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{
                    fontSize: "9px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: p.dist === "Interna" ? "var(--rojo)" : "var(--texto-secundario)",
                    border: `0.5px solid ${p.dist === "Interna" ? "rgba(175,4,4,0.3)" : "var(--borde)"}`,
                    padding: "3px 8px",
                    display: "inline-block",
                    marginBottom: "4px",
                  }}>
                    {p.tipo}
                  </div>
                  <div style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "14px",
                    color: p.dist === "Interna" ? "var(--rojo)" : "var(--texto-secundario)",
                    letterSpacing: "0.08em",
                    display: "block",
                  }}>
                    {p.dist}
                  </div>
                </div>
              </div>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "18px",
                letterSpacing: "0.08em",
                color: "var(--texto)",
                marginBottom: "0.6rem",
              }}>
                {p.nombre}
              </div>
              <div style={{
                fontSize: "12px",
                color: "var(--texto-secundario)",
                lineHeight: 1.7,
              }}>
                {p.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}