import { MapContainer, TileLayer, Marker, Polygon, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const iconDefault = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41],
});

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

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        padding: "80px 1.25rem 2rem",
        minHeight: "100vh",
        alignItems: "center",
      }}
      className="hero-grid"
    >
      {/* Columna izquierda — texto */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        paddingRight: "2rem",
      }}>
        <p style={{
          fontSize: "11px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--rojo)",
          marginBottom: "1rem",
        }}>
          Proyecto interdisciplinar · 2026
        </p>

        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(60px, 12vw, 180px)",
          lineHeight: 0.85,
          color: "var(--texto)",
          marginBottom: "2rem",
        }}>
          LA<br />PERSE-<br />VERANCIA
        </h1>
        <p style={{
          fontSize: "10px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--texto-secundario)",
          marginTop: "2rem",
          opacity: 0.5,
        }}>
          Universidad Piloto de Colombia
        </p>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}>
          <p style={{
            fontSize: "13px",
            color: "var(--texto-secundario)",
            lineHeight: 1.7,
            maxWidth: "420px",
            margin: 0,
          }}>
            Un barrio con historia, identidad y comunidad.
            Dos propuestas de intervención urbana.
          </p>

          <button
            onClick={() => scrollTo("barrio")}
            style={{
              background: "none",
              border: "0.5px solid var(--borde)",
              color: "var(--texto-secundario)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "10px 20px",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Explorar ↓
          </button>
        </div>
      </div>

      {/* Columna derecha — mapa */}
      <div style={{
        position: "relative",
        height: "100%",
        minHeight: "500px",
        borderLeft: "0.5px solid var(--borde)",
      }}>
        {/* Etiqueta */}
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
          Barrio La Perseverancia · Bogotá
        </div>

        <MapContainer
          center={[4.6175, -74.0638]}
          zoom={16}
          style={{ width: "100%", height: "100%", minHeight: "500px" }}
          zoomControl={false}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          />

          {/* Pin del lote */}
          <Marker position={[4.617501, -74.065869]} icon={iconDefault}>
            <Popup>Cra. 4d #31-77 · Lote de intervención</Popup>
          </Marker>

          {/* Polígono del barrio */}
          <Polygon
            positions={limitesBarrio}
            pathOptions={{
              color: "#AF0404",
              weight: 2,
              opacity: 0.9,
              fillColor: "#AF0404",
              fillOpacity: 0.1,
            }}
          />
        </MapContainer>
      </div>
    </div>
  );
}