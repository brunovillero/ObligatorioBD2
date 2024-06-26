import React, { useState, useEffect } from "react";
import PartidoService from "../Services/PartidoService";
import PrediccionesService from "../Services/PrediccionesService";
import JugadorService from "../Services/JugadorService";
import "./Predicciones.css";
import PartidoCard from "./PartidoCard";
import { logout } from "../Services/AuthService";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

interface Partido {
  id: number;
  equipo1: string;
  equipo2: string;
  resultadoEquipo1: number | null;
  resultadoEquipo2: number | null;
  fase: string;
  verdaderoResultadoEquipo1: number | null;
  verdaderoResultadoEquipo2: number | null;
  fecha: string;
  hora: string;
  estadio: string;
}

interface Jugador {
  id: string;
  nombre: string;
  puntajeActual: number;
  campeon: string;
  subcampeon: string;
}

const Predicciones: React.FC = () => {
  const [partidos, setPartidos] = useState<Partido[]>([]);
  const [jugador, setJugador] = useState<Jugador | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPartidos = async () => {
      const partidoService = new PartidoService();
      const data = await partidoService.getPartidos();
      if (data) {
        const formattedData = data.map((partido: any) => ({
          id: partido.id,
          equipo1: partido.pais1,
          equipo2: partido.pais2,
          resultadoEquipo1: partido.puntosPais1,
          resultadoEquipo2: partido.puntosPais2,
          fase: partido.etapa,
          verdaderoResultadoEquipo1: null,
          verdaderoResultadoEquipo2: null,
          fecha: new Date(partido.fecha).toLocaleDateString(),
          hora: new Date(partido.fecha).toLocaleTimeString(),
          estadio: partido.estadio,
        }));
        setPartidos(formattedData);
      }
    };

    const fetchJugador = async () => {
      const jugadorService = new JugadorService();
      const token = localStorage.getItem("token"); 
      if (token) {

        const decoded = jwtDecode<{ id: string }>(token); 
        const data = await jugadorService.getJugadorById(decoded.id); 
        if (data) {
          setJugador({
            id: data.id,
            nombre: data.nombre,
            puntajeActual: data.puntaje,
            campeon: data.campeon,
            subcampeon: data.subcampeon,
          });
        }
      }
    };

    fetchPartidos();
    fetchJugador();
  }, []);

  const handleResultadoChange = (
    id: number,
    equipo: string,
    resultado: number
  ) => {
    setPartidos((prevPartidos) =>
      prevPartidos.map((partido) =>
        partido.id === id ? { ...partido, [equipo]: resultado } : partido
      )
    );
  };

  const handleSubmit = async (partido: Partido) => {
    if (!jugador) return;
    console.log("Predicción enviada:", partido);
    const prediccionesService = new PrediccionesService();
    const success = await prediccionesService.createPrediccion(
      jugador.id,
      partido.resultadoEquipo1!,
      partido.resultadoEquipo2!,
      partido.id
    );
    if (success) {
      const resultadoReal = {
        verdaderoResultadoEquipo1: Math.floor(Math.random() * 5),
        verdaderoResultadoEquipo2: Math.floor(Math.random() * 5),
      };

      setPartidos((prevPartidos) =>
        prevPartidos.map((p) =>
          p.id === partido.id ? { ...p, ...resultadoReal } : p
        )
      );
    }
  };

  const renderPartidosPorFase = (fase: string) => (
    <div className="fase-container">
      <h2>{fase}</h2>
      <div className="partidos-container">
        {partidos
          .filter((partido) => partido.fase === fase)
          .map((partido) => (
            <PartidoCard
              key={partido.id}
              partido={partido}
              onResultadoChange={handleResultadoChange}
              onSubmit={handleSubmit}
            />
          ))}
      </div>
    </div>
  );

  if (!jugador) {
    return <div>Loading...</div>;
  }

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="predicciones">
      <h1>Copa América 2024</h1>
      <div className="jugador-info">
        <h3>Jugador: {jugador.nombre}</h3>
        <p>Puntaje Actual: {jugador.puntajeActual}</p>
        <p>Campeón: {jugador.campeon}</p>
        <p>Subcampeón: {jugador.subcampeon}</p>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
      {renderPartidosPorFase("Fase de Grupos")}
      {renderPartidosPorFase("Cuartos de Final")}
      {renderPartidosPorFase("Semifinal")}
      {renderPartidosPorFase("Tercer y Cuarto Puesto")}
      {renderPartidosPorFase("Final")}
    </div>
  );
};
export default Predicciones;
