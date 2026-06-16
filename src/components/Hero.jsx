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
  [4.616124, -74.062951],
  [4.616142, -74.06306],
  [4.616149, -74.063083],
  [4.616163, -74.063129],
  [4.616126, -74.063139],
  [4.616124, -74.06313],
  [4.616117, -74.063106],
  [4.616109, -74.063075],
  [4.616109, -74.063075],
  [4.616074, -74.063092],
  [4.616074, -74.063092],
  [4.616079, -74.063114],
  [4.616079, -74.063114],
  [4.616086, -74.063141],
  [4.616087, -74.063148],
  [4.616088, -74.06315],
  [4.616013, -74.063171],
  [4.616013, -74.063171],
  [4.616008, -74.063147],
  [4.616005, -74.063131],
  [4.615992, -74.063048],
  [4.615918, -74.063103],
  [4.615966, -74.063289],
  [4.615999, -74.063413],
  [4.616159, -74.06403],
  [4.616777, -74.066242],
  [4.617467, -74.066057],
  [4.61875, -74.065676],
  [4.618824, -74.065654],
  [4.619255, -74.065516],
  [4.619715, -74.065351],
  [4.619974, -74.065216],
  [4.619723, -74.065006],
  [4.619509, -74.064844],
  [4.619288, -74.064608],
  [4.619042, -74.06433],
  [4.618824, -74.064046],
  [4.618811, -74.064029],
  [4.618703, -74.063872],
  [4.618466, -74.06358],
  [4.618257, -74.063346],
  [4.618028, -74.06309],
  [4.61778, -74.062848],
  [4.617769, -74.062828],
  [4.61772, -74.062747],
  [4.617675, -74.062659],
  [4.617657, -74.062623],
  [4.617638, -74.062629],
  [4.617599, -74.06264],
  [4.617539, -74.062654],
  [4.617496, -74.062668],
  [4.617483, -74.062672],
  [4.617453, -74.062682],
  [4.617366, -74.062708],
  [4.617323, -74.06272],
  [4.617319, -74.062703],
  [4.617303, -74.062636],
  [4.61729, -74.06258],
  [4.617273, -74.06251],
  [4.617266, -74.062479],
  [4.617245, -74.062391],
  [4.617124, -74.062455],
  [4.617127, -74.062472],
  [4.617142, -74.06254],
  [4.617111, -74.062553],
  [4.617108, -74.062554],
  [4.617069, -74.06257],
  [4.617028, -74.062587],
  [4.617024, -74.062589],
  [4.616986, -74.062604],
  [4.616975, -74.062563],
  [4.616968, -74.062537],
  [4.616929, -74.062561],
  [4.616934, -74.062579],
  [4.616945, -74.062619],
  [4.616964, -74.062691],
  [4.616956, -74.062693],
  [4.61692, -74.0627],
  [4.616907, -74.062652],
  [4.616865, -74.062668],
  [4.616791, -74.062667],
  [4.616764, -74.062668],
  [4.616726, -74.062669],
  [4.616649, -74.062628],
  [4.616569, -74.062623],
  [4.616124, -74.062951],
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
          center={[4.6178, -74.0641]}
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