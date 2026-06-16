import { useState, useEffect } from "react";

const fotos = [
  {
    archivo: "museo-render-norma.png",
    titulo: "Componentes arquitectónicos",
    etiqueta: "Lectura de territorio",
    descripcion: "Fachada de ladrillo con esquinas curveadas, pintura verde y ventanería en aluminio. Elementos que se conservan en la nueva propuesta.",
  },
  {
    archivo: "museo-fachada-actual.png",
    titulo: "Render de propuesta",
    etiqueta: "Propuesta arquitectónica",
    descripcion: "Vista isométrica del modelo 3D del Museo Inteligente La Perseverancia. Tres pisos más azotea sobre el lote esquinero de Cra 4D #31-77.",
  },
  {
    archivo: "museo-render-general.png",
    titulo: "Zonificación por espacios",
    etiqueta: "Programa arquitectónico",
    descripcion: "Distribución de salas por piso: ingreso y espacio público, salas de historia, memoria oral, inmersión 360° y gastronomía, más azotea.",
  },
  {
    archivo: "museo-render-zonificacion.png",
    titulo: "Normativa POT",
    etiqueta: "Decreto 555/2021",
    descripcion: "Elementos de la fachada original conservados en la nueva propuesta. Esquinas curveadas y altura máxima 10.40 m según PEMP Centro Histórico.",
  },
  {
    archivo: "fachada-frontal.jpg",
    titulo: "Fachada principal",
    etiqueta: "Nodo de alta visibilidad",
    descripcion: "Fachada doble sobre dos vías. Desde sistemas, representa un nodo con exposición máxima al flujo urbano.",
  },
  {
    archivo: "esquina-curva.jpg",
    titulo: "Esquina curva",
    etiqueta: "Punto de confluencia",
    descripcion: "La curva del edificio actúa como concentrador de atención desde múltiples ángulos — ideal para señalética digital.",
  },
  {
    archivo: "interseccion.jpg",
    titulo: "Intersección vial",
    etiqueta: "Nodo de tráfico activo",
    descripcion: "Cruce con semáforo de alta frecuencia. Alto flujo peatonal y vehicular — potencial de impacto digital masivo.",
  },
  {
    archivo: "cableado.jpg",
    titulo: "Infraestructura de red",
    etiqueta: "Red existente confirmada",
    descripcion: "Cableado mixto eléctrico y de telecomunicaciones visible. Infraestructura base disponible para conectividad.",
  },
  {
    archivo: "calle-lateral.jpg",
    titulo: "Acceso lateral",
    etiqueta: "Entrada secundaria",
    descripcion: "Calle de bajo tráfico en el costado del edificio. Zona tranquila para acceso alternativo al museo.",
  },
  {
    archivo: "contexto-urbano.jpg",
    titulo: "Contraste urbano",
    etiqueta: "Zona de transición",
    descripcion: "Edificios modernos de 15+ pisos a media cuadra. El lote está en una zona de alta densidad y transformación urbana.",
  },
  {
    archivo: "via-principal.jpg",
    titulo: "Vía principal",
    etiqueta: "Corredor de flujo",
    descripcion: "Vía arterial con tráfico constante. Confirma la visibilidad del lugar desde el sistema vial de Bogotá.",
  },
];

const fotosExtendidas = [fotos[fotos.length - 1], ...fotos, fotos[0]];

export default function Galeria() {
  const [actual, setActual] = useState(0);
  const [pausado, setPausado] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (pausado) return;
    const intervalo = setInterval(() => {
      setActual((prev) => (prev === fotos.length - 1 ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(intervalo);
  }, [pausado]);

  const anterior = () => {
    setPausado(true);
    setActual((prev) => (prev === 0 ? fotos.length - 1 : prev - 1));
    setTimeout(() => setPausado(false), 6000);
  };

  const siguiente = () => {
    setPausado(true);
    setActual((prev) => (prev === fotos.length - 1 ? 0 : prev + 1));
    setTimeout(() => setPausado(false), 6000);
  };

  const getEstilo = (i) => {
    const diff = i - (actual + 1);
    if (diff === 0) {
      return {
        transform: "scale(1)",
        filter: "blur(0px)",
        opacity: 1,
        zIndex: 10,
        flex: isMobile ? "0 0 85%" : "0 0 55%",
      };
    } else if (Math.abs(diff) === 1) {
      return {
        transform: "scale(0.85)",
        filter: "blur(3px)",
        opacity: 0.4,
        zIndex: 5,
        flex: isMobile ? "0 0 10%" : "0 0 20%",
      };
    } else {
      return { opacity: 0, zIndex: 1, flex: "0 0 0%", pointerEvents: "none" };
    }
  };

  const fotoActual = fotos[actual];
  const base = import.meta.env.BASE_URL;

  return (
    <div style={{ minHeight: "100vh", padding: "2rem 0" }}>

      <div style={{
        padding: "0 1.25rem",
        marginBottom: "2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexWrap: "wrap",
        gap: "1rem",
      }}>
        <div>
          <h1 style={{
            fontSize: "clamp(48px, 12vw, 96px)",
            lineHeight: 0.9,
            color: "var(--texto)",
          }}>
            GALERÍA<br />DE CAMPO
          </h1>
          <p style={{
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--rojo)",
            marginTop: "0.75rem",
          }}>
            Registro fotográfico · 3 junio 2026
          </p>
        </div>
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(40px, 10vw, 80px)",
          color: "var(--borde)",
          lineHeight: 1,
        }}>
          {String(actual + 1).padStart(2, "0")}/{String(fotos.length).padStart(2, "0")}
        </div>
      </div>

      <div style={{ position: "relative", overflow: "hidden" }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          height: isMobile ? "45vh" : "70vh",
          padding: "0 0.5rem",
        }}>
          {fotosExtendidas.map((foto, i) => {
            const estilo = getEstilo(i);
            return (
              <div
                key={i}
                onClick={() => {
                  const indexReal = i - 1;
                  if (indexReal >= 0 && indexReal < fotos.length) {
                    setPausado(true);
                    setActual(indexReal);
                    setTimeout(() => setPausado(false), 6000);
                  }
                }}
                style={{
                  ...estilo,
                  height: "100%",
                  overflow: "hidden",
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: i !== actual + 1 ? "pointer" : "default",
                  position: "relative",
                  flexShrink: 0,
                }}
              >
                <img
                  src={`${base}fotos/${foto.archivo}`}
                  alt={foto.titulo}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    pointerEvents: "none",
                  }}
                />
                {i === actual + 1 && !isMobile && (
                  <div style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
                    padding: "3rem 1rem 1rem",
                    pointerEvents: "none",
                  }}>
                    <div style={{
                      fontSize: "10px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--rojo)",
                      marginBottom: "0.3rem",
                    }}>
                      {foto.etiqueta}
                    </div>
                    <div style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "clamp(18px, 4vw, 28px)",
                      letterSpacing: "0.08em",
                      color: "#fff",
                      marginBottom: "0.25rem",
                    }}>
                      {foto.titulo}
                    </div>
                    <p style={{
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.7)",
                      lineHeight: 1.5,
                      margin: 0,
                    }}>
                      {foto.descripcion}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <button onClick={anterior} style={{
          position: "absolute",
          left: "0.5rem",
          top: "50%",
          transform: "translateY(-50%)",
          background: "none",
          color: "rgba(255,255,255,0.5)",
          border: "0.5px solid rgba(255,255,255,0.2)",
          borderRadius: "50%",
          width: "36px",
          height: "36px",
          fontSize: "20px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 20,
        }}>‹</button>

        <button onClick={siguiente} style={{
          position: "absolute",
          right: "0.5rem",
          top: "50%",
          transform: "translateY(-50%)",
          background: "none",
          color: "rgba(255,255,255,0.5)",
          border: "0.5px solid rgba(255,255,255,0.2)",
          borderRadius: "50%",
          width: "36px",
          height: "36px",
          fontSize: "20px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 20,
        }}>›</button>
      </div>

      {isMobile && (
        <div style={{
          padding: "1rem 1.25rem 0",
          borderTop: "0.5px solid var(--borde)",
          marginTop: "1rem",
        }}>
          <div style={{
            fontSize: "10px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--rojo)",
            marginBottom: "0.3rem",
          }}>
            {fotoActual.etiqueta}
          </div>
          <div style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "22px",
            letterSpacing: "0.08em",
            color: "var(--texto)",
            marginBottom: "0.25rem",
          }}>
            {fotoActual.titulo}
          </div>
          <p style={{
            fontSize: "12px",
            color: "var(--texto-secundario)",
            lineHeight: 1.5,
            margin: 0,
          }}>
            {fotoActual.descripcion}
          </p>
        </div>
      )}

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "8px",
        marginTop: "1.25rem",
      }}>
        {fotos.map((_, i) => (
          <button
            key={i}
            onClick={() => { setPausado(true); setActual(i); setTimeout(() => setPausado(false), 6000); }}
            style={{
              width: i === actual ? "20px" : "6px",
              height: "2px",
              border: "none",
              background: i === actual ? "var(--rojo)" : "var(--borde)",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
}