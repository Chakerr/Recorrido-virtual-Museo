const topologiaRed = [
  {
    zona: "Azotea / Terraza",
    puntos: "2 puntos de red",
    dispositivos: "Sensores ambientales, cámara perimetral",
  },
  {
    zona: "Sala 3 · Inmersión 360°",
    puntos: "4 puntos de red",
    dispositivos: "Proyectores 360°, control de iluminación",
  },
  {
    zona: "Sala 2 · Memoria Oral",
    puntos: "3 puntos de red",
    dispositivos: "Cabinas de voz, reproductores de audio",
  },
  {
    zona: "Sala 1 · Historia",
    puntos: "3 puntos de red",
    dispositivos: "Pantallas interactivas, línea de tiempo digital",
  },
  {
    zona: "Sala 4 · Gastronomía",
    puntos: "2 puntos de red",
    dispositivos: "Mapa gastronómico digital, pantallas",
  },
  {
    zona: "Entrada / Espacio público",
    puntos: "3 puntos de red",
    dispositivos: "Control de acceso RFID, cámaras, WiFi público",
  },
  {
    zona: "Rack · Cuarto de telecomunicaciones",
    puntos: "Central",
    dispositivos: "Switch principal, patch panel, router, UPS",
  },
];

const etapasCableado = [
  {
    num: "01",
    titulo: "Diagnóstico de necesidades",
    desc: "Identificación de sistemas que requieren red: domótica, cámaras de seguridad, WiFi público, sistema de sonido, control de acceso y dispositivos de las salas interactivas.",
  },
  {
    num: "02",
    titulo: "Topología de red",
    desc: "Diseño del esquema de conexión punto a punto bajo normativa TIA/EIA-568. Topología estrella con backbone vertical entre pisos y cuarto de telecomunicaciones central.",
  },
  {
    num: "03",
    titulo: "Plano de cableado",
    desc: "Definición de cuarto de telecomunicaciones por piso y puntos de red por sala. Cable UTP Cat 6A para garantizar velocidades de hasta 10 Gbps y soporte para dispositivos domóticos.",
  },
  {
    num: "04",
    titulo: "Documento técnico",
    desc: "Especificaciones bajo normativa TIA/EIA-568 incluyendo materiales, distancias máximas, etiquetado, pruebas de certificación y criterios de mantenimiento preventivo.",
  },
];

const tecnologiasEspacios = [
  {
    num: "01",
    titulo: "Cabinas de memoria oral",
    desc: "Cabinas insonorizadas con sistema de grabación y reproducción. El visitante puede escuchar testimonios de habitantes y grabar el suyo. Componentes: ESP32, módulo DFPlayer Mini, memory card, audífonos de diadema.",
    tag: "Mecatrónica",
  },
  {
    num: "02",
    titulo: "Proyecciones 360°",
    desc: "Sala de inmersión con proyectores BenQ de alto lumen montados en techo. Reproduce escenas históricas del barrio con audio envolvente. Controlada desde el rack central vía red.",
    tag: "Audiovisual",
  },
  {
    num: "03",
    titulo: "Control de acceso RFID",
    desc: "Sistema de identificación por radiofrecuencia en la entrada. Módulo RFID-RC522 integrado al ESP32. Permite registro de visitantes y activación personalizada del recorrido.",
    tag: "Domótica",
  },
  {
    num: "04",
    titulo: "Iluminación inteligente",
    desc: "Luces dimerizables controladas por sensores de movimiento y proximidad. Reduce el consumo energético hasta un 40% respecto a sistemas convencionales. Normativa: Ley 1715 de 2014 y RETIE.",
    tag: "Eficiencia energética",
  },
];

const normativaEnergetica = [
  { label: "Marco normativo", valor: "Ley 1715 de 2014" },
  { label: "Transición energética", valor: "Ley 2099 de 2021" },
  { label: "Regulación eléctrica", valor: "Normativa CREG" },
  { label: "Código eléctrico", valor: "RETIE" },
  { label: "Cableado estructurado", valor: "TIA/EIA-568" },
  { label: "Sismorresistencia", valor: "NRS-10" },
];

export default function Tecnologia() {
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
            Ingeniería de sistemas
          </p>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(48px, 12vw, 96px)",
            lineHeight: 0.9,
            color: "var(--texto)",
          }}>
            TECNO-<br />LOGÍA
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
          Cableado estructurado<br />
          TIA/EIA-568<br />
          Domótica integrada
        </div>
      </div>

      {/* Cableado estructurado — etapas */}
      <div style={{ borderTop: "0.5px solid var(--borde)", marginBottom: "3rem" }}>
        <p style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "13px",
          letterSpacing: "0.2em",
          color: "var(--rojo)",
          padding: "1.5rem 0 1rem",
        }}>
          Cableado estructurado · Infraestructura de red
        </p>
        <p style={{
          fontSize: "14px",
          color: "var(--texto-secundario)",
          lineHeight: 1.8,
          marginBottom: "2rem",
          maxWidth: "700px",
        }}>
          Diseño técnico de la red de datos que soportará la operación del museo: conectividad, seguridad y los dispositivos domóticos integrados al espacio. Normativa TIA/EIA-568 con topología estrella y backbone vertical entre pisos.
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          borderTop: "0.5px solid var(--borde)",
        }}>
          {etapasCableado.map((e) => (
            <div key={e.num} style={{
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
                {e.num}
              </div>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "16px",
                letterSpacing: "0.08em",
                color: "var(--texto)",
                marginBottom: "0.5rem",
              }}>
                {e.titulo}
              </div>
              <div style={{
                fontSize: "12px",
                color: "var(--texto-secundario)",
                lineHeight: 1.6,
              }}>
                {e.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Topología por zona */}
      <div style={{ borderTop: "0.5px solid var(--borde)", marginBottom: "3rem" }}>
        <p style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "13px",
          letterSpacing: "0.2em",
          color: "var(--rojo)",
          padding: "1.5rem 0 1rem",
        }}>
          Topología por zona
        </p>
        <div style={{ borderTop: "0.5px solid var(--borde)" }}>
          {topologiaRed.map((t, i) => (
            <div key={t.zona} style={{
              display: "grid",
              gridTemplateColumns: "1fr auto auto",
              alignItems: "center",
              gap: "1rem",
              padding: "1rem 0.5rem",
              borderBottom: i < topologiaRed.length - 1 ? "0.5px solid var(--borde)" : "none",
              borderLeft: t.zona.includes("Rack") ? "2px solid var(--rojo)" : "2px solid transparent",
              paddingLeft: "1rem",
            }}>
              <div style={{
                fontSize: "13px",
                color: t.zona.includes("Rack") ? "var(--texto)" : "var(--texto-secundario)",
                fontFamily: t.zona.includes("Rack") ? "'Bebas Neue', sans-serif" : "'DM Sans', sans-serif",
                letterSpacing: t.zona.includes("Rack") ? "0.05em" : "normal",
              }}>
                {t.zona}
              </div>
              <div style={{
                fontSize: "10px",
                color: "var(--texto-secundario)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                display: "none",
              }}
                className="hide-mobile"
              >
                {t.dispositivos}
              </div>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "13px",
                color: t.zona.includes("Rack") ? "var(--rojo)" : "var(--texto-secundario)",
                letterSpacing: "0.08em",
                whiteSpace: "nowrap",
                textAlign: "right",
                minWidth: "80px",
              }}>
                {t.puntos}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tecnologías en los espacios */}
      <div style={{ borderTop: "0.5px solid var(--borde)", marginBottom: "3rem" }}>
        <p style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "13px",
          letterSpacing: "0.2em",
          color: "var(--rojo)",
          padding: "1.5rem 0 1rem",
        }}>
          Tecnología en los espacios
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          borderTop: "0.5px solid var(--borde)",
        }}>
          {tecnologiasEspacios.map((t) => (
            <div key={t.num} style={{
              padding: "1.75rem 1.25rem",
              borderRight: "0.5px solid var(--borde)",
              borderBottom: "0.5px solid var(--borde)",
            }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "0.75rem",
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
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--rojo)",
                  border: "0.5px solid rgba(175,4,4,0.3)",
                  padding: "3px 8px",
                }}>
                  {t.tag}
                </div>
              </div>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "18px",
                letterSpacing: "0.08em",
                color: "var(--texto)",
                marginBottom: "0.5rem",
              }}>
                {t.titulo}
              </div>
              <div style={{
                fontSize: "12px",
                color: "var(--texto-secundario)",
                lineHeight: 1.7,
              }}>
                {t.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Normativa */}
      <div style={{ borderTop: "0.5px solid var(--borde)" }}>
        <p style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "13px",
          letterSpacing: "0.2em",
          color: "var(--rojo)",
          padding: "1.5rem 0 1rem",
        }}>
          Marco normativo
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          borderTop: "0.5px solid var(--borde)",
        }}>
          {normativaEnergetica.map((n) => (
            <div key={n.label} style={{
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
                {n.label}
              </div>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "16px",
                letterSpacing: "0.05em",
                color: "var(--texto)",
                lineHeight: 1.2,
              }}>
                {n.valor}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}