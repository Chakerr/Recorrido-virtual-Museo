import { useState } from "react";

const base = import.meta.env.BASE_URL;

const espacios = [
  {
    num: "01",
    nombre: "Salas de Trabajo y Coworking",
    desc: "En el nivel del sótano se ubican cuatro salas de trabajo y dos salas de coworking alrededor del núcleo de ascensores. Espacios flexibles para capacitaciones, asesorías y trabajo colaborativo, equipados con conectividad de alta velocidad bajo el estándar TIA/EIA 568.",
    img: `${base}fotos/coworking.png`,
  },
  {
    num: "02",
    nombre: "Teatro Comunitario",
    desc: "También en el sótano, el teatro es un espacio multipropósito para eventos, capacitaciones y actividades culturales del barrio. Con capacidad para reuniones barriales y proyecciones, es el corazón social del Nodo.",
    img: `${base}fotos/auditorio.png`,
  },
  {
    num: "03",
    nombre: "Zona Comercial",
    desc: "En el primer piso se ubican cuatro locales de comercio y dos cuartos técnicos. Aquí los emprendedores y comerciantes de La Perseverancia exhiben y venden sus productos, con acceso directo a la calle que conecta el Nodo con la vida cotidiana del barrio.",
    img: `${base}fotos/comercial.png`,
  },
  {
    num: "04",
    nombre: "Oficinas y Zona Verde",
    desc: "El segundo piso organiza seis oficinas alrededor de una zona verde central. Aquí se concentra la gestión operativa del Nodo: atención a emprendedores, alianzas institucionales y administración general.",
    img: `${base}fotos/Oficina.png`,
  },
  {
    num: "05",
    nombre: "Taller de Manualidades y Taller Gastronómico",
    desc: "En el tercer piso (N +7.60), dos talleres conectados por un puente: uno de manualidades y otro gastronómico. Inspirados en los oficios tradicionales de La Perseverancia y en la memoria culinaria de su Plaza de Mercado.",
    img: `${base}fotos/taller.png`,
  },
];

const emprendimientos = [
  {
    num: "01",
    nombre: "Tejidos La Persi",
    categoria: "Textil",
    desc: "Colectivo de mujeres del barrio que elabora tejidos artesanales a mano usando técnicas heredadas de generaciones anteriores. A través del Nodo accedieron a formación en marca y venta digital, y hoy sus productos llegan a ferias locales y mercados en línea.",
    img: `${base}fotos/tejidos.png`,
  },
  {
    num: "02",
    nombre: "Sabores de la Plaza",
    categoria: "Gastronomía",
    desc: "Emprendimiento familiar que rescata recetas tradicionales de la Plaza de Mercado de La Perseverancia. Con el acompañamiento del Nodo en gestión de costos y presentación de producto, ahora ofrece almuerzos comunitarios y catering para eventos del barrio.",
    img: `${base}fotos/comida.png`,
  },
  {
    num: "03",
    nombre: "Taller del Barrio",
    categoria: "Reparación",
    desc: "Servicio de reparación de electrodomésticos, bicicletas y muebles liderado por jóvenes del sector. Se formaron en el taller de oficios del Nodo y hoy generan ingresos atendiendo necesidades cotidianas de los vecinos.",
    img: `${base}fotos/tallerE.png`,
  },
  {
    num: "04",
    nombre: "Raíces Gráficas",
    categoria: "Diseño",
    desc: "Estudio de diseño gráfico comunitario que produce piezas visuales para negocios locales, rescatando la iconografía y la historia del barrio La Perseverancia, desde la chicha hasta la arquitectura obrera.",
    img: `${base}fotos/diseno.png`,
  },
];

const talleres = [
  {
    num: "01",
    titulo: "Costura y Moda Circular",
    fecha: "Julio 2026",
    duracion: "4 semanas · Martes y Jueves",
    cupos: "20 cupos",
    desc: "Aprende técnicas de corte, confección y reparación de ropa. Enfoque en moda sostenible y reutilización de materiales, en el taller de manualidades del tercer piso.",
    estado: "Próximo",
  },
  {
    num: "02",
    titulo: "Emprendimiento Digital",
    fecha: "Agosto 2026",
    duracion: "3 semanas · Sábados",
    cupos: "15 cupos",
    desc: "Taller práctico para digitalizar negocios locales: redes sociales, ventas en línea y herramientas básicas de gestión, dirigido a comerciantes y emprendedores del barrio.",
    estado: "Próximo",
  },
  {
    num: "03",
    titulo: "Educación Financiera para tu Negocio",
    fecha: "Septiembre 2026",
    duracion: "2 semanas · Fines de semana",
    cupos: "25 cupos",
    desc: "Introducción a presupuestos, flujo de caja y manejo de ingresos y gastos para microempresarios. Pensado para quienes operan su negocio de manera informal y quieren formalizarse.",
    estado: "Abierto",
  },
  {
    num: "04",
    titulo: "Cocina Tradicional de La Perseverancia",
    fecha: "Octubre 2026",
    duracion: "6 semanas · Lunes y Miércoles",
    cupos: "12 cupos",
    desc: "Recuperación de recetas y técnicas de la gastronomía del barrio, con énfasis en la memoria culinaria de la Plaza de Mercado. El proyecto final consiste en una muestra abierta a la comunidad.",
    estado: "Próximo",
  },
];

function Carrusel({ items }) {
  const [idx, setIdx] = useState(0);
  const item = items[idx];

  return (
    <div style={{ borderBottom: "0.5px solid var(--borde)" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "500px",
      }}
        className="carrusel-grid"
      >
        {/* Imagen */}
        <div style={{
          position: "relative",
          background: "#0d0d0d",
          borderRight: "0.5px solid var(--borde)",
          minHeight: "360px",
          overflow: "hidden",
        }}>
          {item.img ? (
            <img
              src={item.img}
              alt={item.nombre}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <div style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "0.5rem",
              minHeight: "360px",
            }}>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "64px",
                color: "rgba(255,255,255,0.05)",
                lineHeight: 1,
              }}>
                {item.num}
              </div>
              <div style={{
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--borde)",
              }}>
                Imagen por agregar
              </div>
            </div>
          )}

          {/* Controles */}
          <div style={{
            position: "absolute",
            bottom: "1.25rem",
            left: "1.25rem",
            display: "flex",
            gap: "0.5rem",
          }}>
            <button
              onClick={() => setIdx((idx - 1 + items.length) % items.length)}
              style={{
                width: "36px",
                height: "36px",
                background: "rgba(255,255,255,0.08)",
                border: "0.5px solid rgba(255,255,255,0.15)",
                color: "#fff",
                cursor: "pointer",
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "2px",
              }}
            >
              ←
            </button>
            <button
              onClick={() => setIdx((idx + 1) % items.length)}
              style={{
                width: "36px",
                height: "36px",
                background: "rgba(255,255,255,0.08)",
                border: "0.5px solid rgba(255,255,255,0.15)",
                color: "#fff",
                cursor: "pointer",
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "2px",
              }}
            >
              →
            </button>
          </div>

          {/* Contador */}
          <div style={{
            position: "absolute",
            top: "1.25rem",
            right: "1.25rem",
            fontSize: "10px",
            letterSpacing: "0.15em",
            color: "rgba(255,255,255,0.3)",
          }}>
            {String(idx + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </div>
        </div>

        {/* Info */}
        <div style={{
          padding: "3rem 2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}>
          <div>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: "var(--rojo)",
              marginBottom: "1rem",
            }}>
              {item.num} — {items.length > 0 && (item.categoria || "Espacio")}
            </div>
            <h3 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              letterSpacing: "0.04em",
              color: "var(--texto)",
              lineHeight: 1,
              marginBottom: "1.5rem",
            }}>
              {item.nombre}
            </h3>
            <p style={{
              fontSize: "14px",
              color: "var(--texto-secundario)",
              lineHeight: 1.8,
              maxWidth: "420px",
            }}>
              {item.desc}
            </p>
          </div>

          {/* Dots */}
          <div style={{
            display: "flex",
            gap: "6px",
            paddingTop: "2rem",
            borderTop: "0.5px solid var(--borde)",
            marginTop: "2rem",
          }}>
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                style={{
                  width: i === idx ? "24px" : "6px",
                  height: "6px",
                  borderRadius: "3px",
                  background: i === idx ? "var(--rojo)" : "var(--borde)",
                  border: "none",
                  cursor: "pointer",
                  transition: "width 0.3s ease, background 0.3s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GrupoCentro() {
  return (
    <div style={{ borderTop: "0.5px solid var(--borde)" }}>

      {/* Header */}
      <div style={{
        padding: "6rem 1.25rem 3rem",
        borderBottom: "0.5px solid var(--borde)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexWrap: "wrap",
        gap: "1rem",
      }}>
        <div>
          <p style={{
            fontSize: "11px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--texto-secundario)",
            marginBottom: "0.75rem",
          }}>
            Centro comunitario · La Perseverancia
          </p>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(48px, 12vw, 96px)",
            lineHeight: 0.9,
            color: "var(--texto)",
          }}>
            NACE:<br />NODO DE APOYO<br />COMUNITARIO Y<br />EMPRENDIMIENTO
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
          Cra. 4d # 31-77<br />
          La Perseverancia<br />
          Bogotá D.C.
        </div>
      </div>

      {/* Sección 1 — Qué hacemos */}
      <div style={{
        padding: "5rem 1.25rem",
        borderBottom: "0.5px solid var(--borde)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4rem",
        alignItems: "start",
      }}
        className="que-hacemos-grid"
      >
        <div>
          <p style={{
            fontSize: "11px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--rojo)",
            marginBottom: "1rem",
          }}>
            Nuestra misión
          </p>
          <h3 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(36px, 6vw, 64px)",
            lineHeight: 0.95,
            color: "var(--texto)",
          }}>
            ¿QUÉ HACEMOS<br />COMO NODO?
          </h3>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <p style={{
            fontSize: "15px",
            color: "var(--texto-secundario)",
            lineHeight: 1.8,
          }}>
            El Nodo de Apoyo Comunitario y Emprendimiento es un espacio para el barrio La Perseverancia que articula la formación en oficios, el acompañamiento a emprendedores locales y la cohesión social del territorio, sin perder la identidad histórica y cultural que distingue a este barrio.
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
          }}>
            {[
              { icono: "◈", titulo: "Formación", desc: "Talleres de oficios y habilidades para el trabajo." },
              { icono: "◉", titulo: "Emprendimiento", desc: "Acompañamiento y espacios para negocios locales." },
              { icono: "◌", titulo: "Comunidad", desc: "Punto de encuentro e integración barrial." },
              { icono: "◎", titulo: "Patrimonio", desc: "La identidad de la Plaza de Mercado y la Chicha." },
            ].map((p) => (
              <div key={p.titulo} style={{
                padding: "1.25rem",
                border: "0.5px solid var(--borde)",
                borderRadius: "var(--radio)",
              }}>
                <div style={{
                  fontSize: "18px",
                  color: "var(--rojo)",
                  marginBottom: "0.5rem",
                }}>
                  {p.icono}
                </div>
                <div style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "16px",
                  letterSpacing: "0.1em",
                  color: "var(--texto)",
                  marginBottom: "0.4rem",
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
            ))}
          </div>
        </div>
      </div>

      {/* Sección 2 — Carrusel Espacios */}
      <div>
        <div style={{
          padding: "3rem 1.25rem 2rem",
          borderBottom: "0.5px solid var(--borde)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "1rem",
        }}>
          <div>
            <p style={{
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--rojo)",
              marginBottom: "0.5rem",
            }}>
              Recorrido interior
            </p>
            <h3 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(32px, 5vw, 56px)",
              lineHeight: 0.95,
              color: "var(--texto)",
            }}>
              NUESTROS ESPACIOS
            </h3>
          </div>
          <p style={{
            fontSize: "12px",
            color: "var(--texto-secundario)",
            maxWidth: "320px",
            lineHeight: 1.7,
            textAlign: "right",
          }}>
            Cada espacio del Nodo fue diseñado para responder a una necesidad específica del barrio.
          </p>
        </div>
        <Carrusel items={espacios.map(e => ({ ...e, categoria: "Espacio" }))} />
      </div>

      {/* Sección 3 — Carrusel Emprendimientos */}
      <div>
        <div style={{
          padding: "3rem 1.25rem 2rem",
          borderBottom: "0.5px solid var(--borde)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "1rem",
        }}>
          <div>
            <p style={{
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--rojo)",
              marginBottom: "0.5rem",
            }}>
              Tejido económico local
            </p>
            <h3 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(32px, 5vw, 56px)",
              lineHeight: 0.95,
              color: "var(--texto)",
            }}>
              EMPRENDIMIENTOS<br />DESTACADOS
            </h3>
          </div>
          <p style={{
            fontSize: "12px",
            color: "var(--texto-secundario)",
            maxWidth: "320px",
            lineHeight: 1.7,
            textAlign: "right",
          }}>
            Iniciativas locales que el Nodo impulsa y acompaña en su crecimiento.
          </p>
        </div>
        <Carrusel items={emprendimientos} />
      </div>

      {/* Sección 4 — Futuros Talleres */}
      <div style={{ borderBottom: "0.5px solid var(--borde)" }}>
        <div style={{
          padding: "3rem 1.25rem 2rem",
          borderBottom: "0.5px solid var(--borde)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "1rem",
        }}>
          <div>
            <p style={{
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--rojo)",
              marginBottom: "0.5rem",
            }}>
              Agenda de formación
            </p>
            <h3 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(32px, 5vw, 56px)",
              lineHeight: 0.95,
              color: "var(--texto)",
            }}>
              FUTUROS<br />TALLERES
            </h3>
          </div>
          <p style={{
            fontSize: "12px",
            color: "var(--texto-secundario)",
            maxWidth: "320px",
            lineHeight: 1.7,
            textAlign: "right",
          }}>
            Programación de actividades formativas abiertas a toda la comunidad del barrio.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}>
          {talleres.map((t, i) => (
            <div key={t.num} style={{
              padding: "2.5rem 1.5rem",
              borderRight: i < talleres.length - 1 ? "0.5px solid var(--borde)" : "none",
              borderBottom: "0.5px solid var(--borde)",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}>
                <div style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "40px",
                  color: "var(--borde)",
                  lineHeight: 1,
                }}>
                  {t.num}
                </div>
                <div style={{
                  fontSize: "9px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: t.estado === "Abierto" ? "var(--rojo)" : "var(--texto-secundario)",
                  border: `0.5px solid ${t.estado === "Abierto" ? "var(--rojo)" : "var(--borde)"}`,
                  padding: "3px 8px",
                  borderRadius: "2px",
                }}>
                  {t.estado}
                </div>
              </div>

              <div>
                <div style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "22px",
                  letterSpacing: "0.05em",
                  color: "var(--texto)",
                  lineHeight: 1.1,
                  marginBottom: "0.75rem",
                }}>
                  {t.titulo}
                </div>
                <p style={{
                  fontSize: "13px",
                  color: "var(--texto-secundario)",
                  lineHeight: 1.7,
                }}>
                  {t.desc}
                </p>
              </div>

              <div style={{
                borderTop: "0.5px solid var(--borde)",
                paddingTop: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}>
                {[
                  { etiqueta: "Fecha", valor: t.fecha },
                  { etiqueta: "Horario", valor: t.duracion },
                  { etiqueta: "Cupos", valor: t.cupos },
                ].map((d) => (
                  <div key={d.etiqueta} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "11px",
                  }}>
                    <span style={{ color: "var(--borde)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                      {d.etiqueta}
                    </span>
                    <span style={{ color: "var(--texto-secundario)" }}>
                      {d.valor}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        padding: "3rem 1.25rem",
        borderTop: "0.5px solid var(--borde)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}>
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "13px",
          letterSpacing: "0.15em",
          color: "var(--texto-secundario)",
        }}>
          Nodo de Apoyo Comunitario y Emprendimiento
        </div>
        <div style={{
          fontSize: "11px",
          color: "var(--borde)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}>
          Universidad Piloto de Colombia
        </div>
      </div>
    </div>
  );
}