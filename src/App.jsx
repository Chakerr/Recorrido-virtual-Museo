import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Barrio from "./components/Barrio";
import Territorio from "./components/Territorio";
import Selector from "./components/Selector";
import GrupoMuseo from "./components/GrupoMuseo";
import GrupoCentro from "./components/GrupoCentro";

function Inicio() {
  return (
    <div>
      <section id="inicio"><Hero /></section>
      <section id="barrio"><Barrio /></section>

      {/* Separador Barrio → Territorio */}
      <div style={{
        padding: "4rem 1.25rem",
        borderTop: "0.5px solid var(--borde)",
        borderBottom: "0.5px solid var(--borde)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
      }}>
        <p style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(32px, 6vw, 64px)",
          color: "var(--texto)",
          lineHeight: 0.9,
          opacity: 0.08,
          margin: 0,
        }}>
          BOGOTÁ · LOCALIDAD SANTA FE · 2026
        </p>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "0.5rem",
        }}>
          <div style={{
            width: "40px",
            height: "0.5px",
            background: "var(--rojo)",
          }} />
          <p style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "11px",
            letterSpacing: "0.25em",
            color: "var(--rojo)",
            margin: 0,
          }}>
            ANÁLISIS URBANO
          </p>
        </div>
      </div>

      <section id="territorio"><Territorio /></section>
      <section id="proyectos"><Selector /></section>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/Recorrido-virtual-Museo">
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/museo" element={<GrupoMuseo />} />
        <Route path="/centro" element={<GrupoCentro />} />
      </Routes>
    </BrowserRouter>
  );
}