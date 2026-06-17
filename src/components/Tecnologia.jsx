const topologiaRed = [
  {
    zona: "Piso 1 · Entrada y Espacio Público",
    switch: "SW-ENTRADA · 192.168.1.10",
    puntos: "3 puntos",
    dispositivos: "Control acceso RFID (192.168.1.11), Cámara IP (192.168.1.12), Access Point WiFi (192.168.1.13), Sensor movimiento (192.168.1.14)",
    cable: "UTP Cat 6A · ≤ 30 m",
  },
  {
    zona: "Piso 2 · Historia y Memoria Oral",
    switch: "SW-PISO2 · 192.168.1.20",
    puntos: "3 puntos",
    dispositivos: "Pantalla línea de tiempo (192.168.1.21), ESP32 cabinas de voz (192.168.1.22), Cámara IP (192.168.1.23), DFPlayer Mini audio (192.168.1.24)",
    cable: "UTP Cat 6A · ≤ 60 m",
  },
  {
    zona: "Piso 3 · Inmersión 360° y Gastronomía",
    switch: "SW-PISO3 · 192.168.1.30",
    puntos: "4 puntos",
    dispositivos: "Proyector 360° BenQ (192.168.1.31), Pantalla gastronomía (192.168.1.32), Cámara IP (192.168.1.33), Control LED dimerizable (192.168.1.34)",
    cable: "UTP Cat 6A · ≤ 90 m",
  },
  {
    zona: "Azotea · Terraza",
    switch: "SW-AZOTEA · 192.168.1.40",
    puntos: "2 puntos",
    dispositivos: "Sensor ambiental Temp/Humedad (192.168.1.41), Cámara perimetral (192.168.1.42), Panel solar monitoreo (192.168.1.43), Grifo inteligente XT Elec L (192.168.1.44)",
    cable: "UTP Cat 6A · ≤ 90 m",
  },
  {
    zona: "Rack · Cuarto de Telecomunicaciones",
    switch: "RACK PRINCIPAL · 192.168.1.2",
    puntos: "Central",
    dispositivos: "Router Cisco 4331 (192.168.1.1), Switch 2960-24TT (192.168.1.2), Patch Panel 24p, UPS 1000VA, ISP entrada",
    cable: "Backbone vertical · fibra óptica OS2",
  },
];

const etapasCableado = [
  {
    num: "01",
    titulo: "Diagnóstico de necesidades",
    desc: "Identificación de sistemas que requieren conectividad: domótica (mecatrónica), cámaras IP de seguridad, WiFi público, sistema de sonido, control de acceso RFID y dispositivos interactivos de las salas. Total estimado: 17 puntos de red activos.",
  },
  {
    num: "02",
    titulo: "Diseño de topología estrella jerárquica",
    desc: "Esquema de conexión bajo normativa TIA/EIA-568. Topología estrella jerárquica con backbone vertical entre pisos. Cuarto de telecomunicaciones (MDF) en piso 1. Cada piso tiene su propio IDF (Intermediate Distribution Frame) con switch de acceso Cisco 2960-8TT.",
  },
  {
    num: "03",
    titulo: "Especificaciones de cableado",
    desc: "Cable UTP Cat 6A (ANSI/TIA-568.2-D) para soportar 10 Gbps a 500 MHz. Distancia máxima horizontal: 90 m por tramo. Conectores RJ-45 Cat 6A con blindaje individual. Patch cords Cat 6A de 1 m en rack. Etiquetado según TIA-606-B.",
  },
  {
    num: "04",
    titulo: "Documento técnico",
    desc: "Especificaciones completas incluyendo: materiales, distancias por tramo, direccionamiento IP (rango 192.168.1.0/24), etiquetado TIA-606-B, pruebas de certificación con fluke y criterios de mantenimiento preventivo semestral.",
  },
];

const especificacionesRack = [
  { param: "Router", valor: "Cisco 4331", ip: "192.168.1.1" },
  { param: "Switch principal", valor: "Cisco 2960-24TT", ip: "192.168.1.2" },
  { param: "Switch piso 1", valor: "Cisco 2960-8TT", ip: "192.168.1.10" },
  { param: "Switch piso 2", valor: "Cisco 2960-8TT", ip: "192.168.1.20" },
  { param: "Switch piso 3", valor: "Cisco 2960-8TT", ip: "192.168.1.30" },
  { param: "Switch azotea", valor: "Cisco 2960-8TT", ip: "192.168.1.40" },
  { param: "Patch panel", valor: "24 puertos Cat 6A", ip: "—" },
  { param: "UPS", valor: "1000 VA / 700 W", ip: "—" },
];

const tecnologiasEspacios = [
  {
    num: "01",
    titulo: "Cabinas de memoria oral",
    desc: "Cabinas insonorizadas con sistema de grabación y reproducción. El visitante puede escuchar testimonios de habitantes y grabar el suyo. Componentes: ESP32, módulo DFPlayer Mini, memory card, audífonos de diadema. Conectado vía UTP Cat 6A al SW-PISO2.",
    tag: "Mecatrónica",
  },
  {
    num: "02",
    titulo: "Proyecciones 360°",
    desc: "Sala de inmersión con proyectores BenQ de alto lumen montados en techo. Reproduce escenas históricas del barrio con audio envolvente 5.1. Controlada desde el rack central vía red Cat 6A. IP asignada: 192.168.1.31.",
    tag: "Audiovisual",
  },
  {
    num: "03",
    titulo: "Control de acceso RFID",
    desc: "Sistema de identificación por radiofrecuencia en la entrada. Módulo RFID-RC522 integrado al ESP32 conectado al SW-ENTRADA. Permite registro de visitantes y activación personalizada del recorrido. IP: 192.168.1.11. Protocolo: TCP/IP sobre Cat 6A.",
    tag: "Domótica",
  },
  {
    num: "04",
    titulo: "Iluminación inteligente",
    desc: "Luces dimerizables controladas por sensores de movimiento y proximidad. Reduce el consumo energético hasta un 40% respecto a sistemas convencionales. Integrado al ESP32 vía red. Normativa: Ley 1715 de 2014 y RETIE.",
    tag: "Eficiencia energética",
  },
];

const normativaEnergetica = [
  { label: "Cableado estructurado", valor: "ANSI/TIA-568.2-D" },
  { label: "Etiquetado de red", valor: "TIA-606-B" },
  { label: "Cuarto de telecom.", valor: "TIA-569-D" },
  { label: "Energías renovables", valor: "Ley 1715 / 2014" },
  { label: "Transición energética", valor: "Ley 2099 / 2021" },
  { label: "Regulación eléctrica", valor: "RETIE" },
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
            INFRAES-<br />TRUCTURA
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
          ANSI/TIA-568.2-D<br />
          Topología estrella jerárquica
        </div>
      </div>

      {/* Aporte desde Sistemas — justificación */}
      <div style={{
        borderTop: "0.5px solid var(--borde)",
        borderLeft: "2px solid var(--rojo)",
        padding: "1.5rem 1.5rem",
        marginBottom: "3rem",
        background: "rgba(175,4,4,0.04)",
      }}>
        <p style={{
          fontSize: "11px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--rojo)",
          marginBottom: "0.75rem",
        }}>
          Aporte desde Ingeniería de Sistemas
        </p>
        <p style={{
          fontSize: "14px",
          color: "var(--texto-secundario)",
          lineHeight: 1.85,
          maxWidth: "780px",
        }}>
          El aporte de Ingeniería de Sistemas al Museo Inteligente La Perseverancia es el diseño de la infraestructura de red que soporta la totalidad de los dispositivos del museo. Esto incluye los sistemas domóticos propuestos por Mecatrónica (ESP32, RFID-RC522, DFPlayer Mini, sensores ambientales, iluminación inteligente y grifo electrónico), las cámaras IP de seguridad, el sistema de WiFi público y los dispositivos interactivos de cada sala. El diseño sigue la normativa <strong style={{ color: "var(--texto)", fontWeight: 600 }}>ANSI/TIA-568.2-D</strong> con topología estrella jerárquica, cable <strong style={{ color: "var(--texto)", fontWeight: 600 }}>UTP Cat 6A</strong> capaz de soportar hasta <strong style={{ color: "var(--texto)", fontWeight: 600 }}>10 Gbps</strong>, y un cuarto de telecomunicaciones centralizado en el primer piso que conecta los cuatro niveles del edificio mediante backbone vertical.
        </p>
      </div>

      {/* Diagrama de topología */}
      <div style={{ borderTop: "0.5px solid var(--borde)", marginBottom: "3rem" }}>
        <p style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "13px",
          letterSpacing: "0.2em",
          color: "var(--rojo)",
          padding: "1.5rem 0 1rem",
        }}>
          Diagrama de topología de red · TIA/EIA-568
        </p>
        <div style={{
          background: "#ffffff",
          padding: "1rem",
          borderRadius: "2px",
          border: "0.5px solid var(--borde)",
          overflowX: "auto",
        }}>
          <img
            src={`${import.meta.env.BASE_URL}fotos/topologia-red.svg`}
            alt="Diagrama de topología de red Museo Inteligente La Perseverancia"
            style={{
              width: "100%",
              minWidth: "600px",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>
        <p style={{
          fontSize: "10px",
          color: "var(--texto-secundario)",
          letterSpacing: "0.08em",
          marginTop: "0.5rem",
        }}>
          Topología estrella jerárquica · Cisco 2960 · UTP Cat 6A · Rango 192.168.1.0/24
        </p>
      </div>

      {/* Etapas del cableado */}
      <div style={{ borderTop: "0.5px solid var(--borde)", marginBottom: "3rem" }}>
        <p style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "13px",
          letterSpacing: "0.2em",
          color: "var(--rojo)",
          padding: "1.5rem 0 1rem",
        }}>
          Metodología de diseño · Cableado estructurado
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
                lineHeight: 1.7,
              }}>
                {e.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Topología por zona — tabla detallada */}
      <div style={{ borderTop: "0.5px solid var(--borde)", marginBottom: "3rem" }}>
        <p style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "13px",
          letterSpacing: "0.2em",
          color: "var(--rojo)",
          padding: "1.5rem 0 1rem",
        }}>
          Distribución de red por zona
        </p>
        <div style={{ borderTop: "0.5px solid var(--borde)" }}>
          {topologiaRed.map((t, i) => (
            <div key={t.zona} style={{
              padding: "1.25rem 1rem",
              borderBottom: i < topologiaRed.length - 1 ? "0.5px solid var(--borde)" : "none",
              borderLeft: t.zona.includes("Rack") ? "2px solid var(--rojo)" : "2px solid transparent",
              paddingLeft: "1rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr auto",
              gap: "1rem",
              alignItems: "start",
            }}>
              <div>
                <div style={{
                  fontFamily: t.zona.includes("Rack") ? "'Bebas Neue', sans-serif" : "'DM Sans', sans-serif",
                  fontSize: "13px",
                  color: t.zona.includes("Rack") ? "var(--texto)" : "var(--texto-secundario)",
                  letterSpacing: t.zona.includes("Rack") ? "0.05em" : "normal",
                  marginBottom: "0.3rem",
                }}>
                  {t.zona}
                </div>
                <div style={{
                  fontSize: "10px",
                  color: "var(--rojo)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}>
                  {t.switch}
                </div>
              </div>
              <div style={{
                fontSize: "11px",
                color: "var(--texto-secundario)",
                lineHeight: 1.6,
              }}>
                {t.dispositivos}
              </div>
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "4px",
                flexShrink: 0,
              }}>
                <div style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "13px",
                  color: t.zona.includes("Rack") ? "var(--rojo)" : "var(--texto-secundario)",
                  letterSpacing: "0.08em",
                  whiteSpace: "nowrap",
                }}>
                  {t.puntos}
                </div>
                <div style={{
                  fontSize: "9px",
                  color: "var(--texto-secundario)",
                  letterSpacing: "0.06em",
                  whiteSpace: "nowrap",
                }}>
                  {t.cable}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Equipos del rack */}
      <div style={{ borderTop: "0.5px solid var(--borde)", marginBottom: "3rem" }}>
        <p style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "13px",
          letterSpacing: "0.2em",
          color: "var(--rojo)",
          padding: "1.5rem 0 1rem",
        }}>
          Equipos · Rack principal y switches de acceso
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          borderTop: "0.5px solid var(--borde)",
        }}>
          {especificacionesRack.map((e) => (
            <div key={e.param} style={{
              padding: "1.25rem 1rem",
              borderRight: "0.5px solid var(--borde)",
              borderBottom: "0.5px solid var(--borde)",
            }}>
              <div style={{
                fontSize: "9px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--texto-secundario)",
                marginBottom: "0.4rem",
              }}>
                {e.param}
              </div>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "16px",
                letterSpacing: "0.05em",
                color: "var(--texto)",
                lineHeight: 1.2,
                marginBottom: "0.2rem",
              }}>
                {e.valor}
              </div>
              <div style={{
                fontSize: "10px",
                color: "var(--rojo)",
                letterSpacing: "0.06em",
                fontFamily: "monospace",
              }}>
                {e.ip}
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
          Dispositivos integrados · Domótica y experiencia
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

      {/* Marco normativo */}
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