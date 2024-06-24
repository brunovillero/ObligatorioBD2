import React, { useState, useEffect } from "react";
import "./Predicciones.css";
import PartidoCard from "./PartidoCard";

interface Partido {
  id: number;
  equipo1: string;
  equipo2: string;
  resultadoEquipo1: number;
  resultadoEquipo2: number;
  fase: string;
  verdaderoResultadoEquipo1: number | null;
  verdaderoResultadoEquipo2: number | null;
  fecha: string;
  hora: string;
  estadio: string;
}

interface Jugador {
  nombre: string;
  puntajeActual: number;
}

const Predicciones: React.FC = () => {
  const [partidos, setPartidos] = useState<Partido[]>([]);
  const [jugador, setJugador] = useState<Jugador>({
    nombre: "Nombre del Jugador",
    puntajeActual: 0,
  });

  useEffect(() => {
    const fetchPartidos = async () => {
      const data: Partido[] = [
        {
          id: 1,
          equipo1: "Argentina",
          equipo2: "Canada",
          resultadoEquipo1: 0,
          resultadoEquipo2: 0,
          fase: "Fase de grupos",
          verdaderoResultadoEquipo1: 1,
          verdaderoResultadoEquipo2: 2,
          fecha: "24/06",
          hora: "18:00",
          estadio: "Estadio 1",
        },
        {
          id: 2,
          equipo1: "Equipo 3",
          equipo2: "Equipo 4",
          resultadoEquipo1: 0,
          resultadoEquipo2: 0,
          fase: "Fase de grupos",
          verdaderoResultadoEquipo1: 0,
          verdaderoResultadoEquipo2: 0,
          fecha: "24/06",
          hora: "21:00",
          estadio: "Estadio 2",
        },
        {
          id: 3,
          equipo1: "Equipo 1",
          equipo2: "Equipo 3",
          resultadoEquipo1: 0,
          resultadoEquipo2: 0,
          fase: "Fase de grupos",
          verdaderoResultadoEquipo1: 1,
          verdaderoResultadoEquipo2: 1,
          fecha: "25/06",
          hora: "18:00",
          estadio: "Estadio 3",
        },
        {
          id: 4,
          equipo1: "Equipo 2",
          equipo2: "Equipo 4",
          resultadoEquipo1: 0,
          resultadoEquipo2: 0,
          fase: "Fase de grupos",
          verdaderoResultadoEquipo1: 2,
          verdaderoResultadoEquipo2: 2,
          fecha: "25/06",
          hora: "21:00",
          estadio: "Estadio 4",
        },
        {
          id: 5,
          equipo1: "Equipo 1",
          equipo2: "Equipo 4",
          resultadoEquipo1: 0,
          resultadoEquipo2: 0,
          fase: "Fase de grupos",
          verdaderoResultadoEquipo1: null,
          verdaderoResultadoEquipo2: null,
          fecha: "26/06",
          hora: "18:00",
          estadio: "Estadio 5",
        },
        {
          id: 6,
          equipo1: "Equipo 2",
          equipo2: "Equipo 3",
          resultadoEquipo1: 0,
          resultadoEquipo2: 0,
          fase: "Fase de grupos",
          verdaderoResultadoEquipo1: 4,
          verdaderoResultadoEquipo2: 4,
          fecha: "26/06",
          hora: "21:00",
          estadio: "Estadio 6",
        },
        {
          id: 7,
          equipo1: "Equipo 5",
          equipo2: "Equipo 6",
          resultadoEquipo1: 0,
          resultadoEquipo2: 0,
          fase: "Fase de grupos",
          verdaderoResultadoEquipo1: 1,
          verdaderoResultadoEquipo2: 1,
          fecha: "27/06",
          hora: "18:00",
          estadio: "Estadio 1",
        },
        {
          id: 8,
          equipo1: "Equipo 7",
          equipo2: "Equipo 8",
          resultadoEquipo1: 0,
          resultadoEquipo2: 0,
          fase: "Fase de grupos",
          verdaderoResultadoEquipo1: 2,
          verdaderoResultadoEquipo2: 2,
          fecha: "27/06",
          hora: "21:00",
          estadio: "Estadio 2",
        },
        {
          id: 9,
          equipo1: "Equipo 5",
          equipo2: "Equipo 7",
          resultadoEquipo1: 0,
          resultadoEquipo2: 0,
          fase: "Fase de grupos",
          verdaderoResultadoEquipo1: 3,
          verdaderoResultadoEquipo2: 3,
          fecha: "28/06",
          hora: "18:00",
          estadio: "Estadio 3",
        },
        {
          id: 10,
          equipo1: "Equipo 6",
          equipo2: "Equipo 8",
          resultadoEquipo1: 0,
          resultadoEquipo2: 0,
          fase: "Fase de grupos",
          verdaderoResultadoEquipo1: 4,
          verdaderoResultadoEquipo2: 4,
          fecha: "28/06",
          hora: "21:00",
          estadio: "Estadio 4",
        },
        {
          id: 11,
          equipo1: "Equipo 5",
          equipo2: "Equipo 8",
          resultadoEquipo1: 0,
          resultadoEquipo2: 0,
          fase: "Fase de grupos",
          verdaderoResultadoEquipo1: 1,
          verdaderoResultadoEquipo2: 1,
          fecha: "29/06",
          hora: "18:00",
          estadio: "Estadio 5",
        },
        {
          id: 12,
          equipo1: "Equipo 6",
          equipo2: "Equipo 7",
          resultadoEquipo1: 0,
          resultadoEquipo2: 0,
          fase: "Fase de grupos",
          verdaderoResultadoEquipo1: 2,
          verdaderoResultadoEquipo2: 2,
          fecha: "29/06",
          hora: "21:00",
          estadio: "Estadio 6",
        },
        {
          id: 13,
          equipo1: "Equipo 9",
          equipo2: "Equipo 10",
          resultadoEquipo1: 0,
          resultadoEquipo2: 0,
          fase: "Fase de grupos",
          verdaderoResultadoEquipo1: 1,
          verdaderoResultadoEquipo2: 1,
          fecha: "30/06",
          hora: "18:00",
          estadio: "Estadio 1",
        },
        {
          id: 14,
          equipo1: "Equipo 11",
          equipo2: "Equipo 12",
          resultadoEquipo1: 0,
          resultadoEquipo2: 0,
          fase: "Fase de grupos",
          verdaderoResultadoEquipo1: 2,
          verdaderoResultadoEquipo2: 2,
          fecha: "30/06",
          hora: "21:00",
          estadio: "Estadio 2",
        },
        {
          id: 15,
          equipo1: "Equipo 9",
          equipo2: "Equipo 11",
          resultadoEquipo1: 0,
          resultadoEquipo2: 0,
          fase: "Fase de grupos",
          verdaderoResultadoEquipo1: 3,
          verdaderoResultadoEquipo2: 3,
          fecha: "01/07",
          hora: "18:00",
          estadio: "Estadio 3",
        },
        {
          id: 16,
          equipo1: "Equipo 10",
          equipo2: "Equipo 12",
          resultadoEquipo1: 0,
          resultadoEquipo2: 0,
          fase: "Fase de grupos",
          verdaderoResultadoEquipo1: 4,
          verdaderoResultadoEquipo2: 4,
          fecha: "01/07",
          hora: "21:00",
          estadio: "Estadio 4",
        },
        {
          id: 17,
          equipo1: "Equipo 9",
          equipo2: "Equipo 12",
          resultadoEquipo1: 0,
          resultadoEquipo2: 0,
          fase: "Fase de grupos",
          verdaderoResultadoEquipo1: 1,
          verdaderoResultadoEquipo2: 1,
          fecha: "02/07",
          hora: "18:00",
          estadio: "Estadio 5",
        },
        {
          id: 18,
          equipo1: "Equipo 10",
          equipo2: "Equipo 11",
          resultadoEquipo1: 0,
          resultadoEquipo2: 0,
          fase: "Fase de grupos",
          verdaderoResultadoEquipo1: 2,
          verdaderoResultadoEquipo2: 2,
          fecha: "02/07",
          hora: "21:00",
          estadio: "Estadio 6",
        },
        {
          id: 19,
          equipo1: "Equipo 13",
          equipo2: "Equipo 14",
          resultadoEquipo1: 0,
          resultadoEquipo2: 0,
          fase: "Fase de grupos",
          verdaderoResultadoEquipo1: 1,
          verdaderoResultadoEquipo2: 1,
          fecha: "03/07",
          hora: "18:00",
          estadio: "Estadio 1",
        },
        {
          id: 20,
          equipo1: "Equipo 15",
          equipo2: "Equipo 16",
          resultadoEquipo1: 0,
          resultadoEquipo2: 0,
          fase: "Fase de grupos",
          verdaderoResultadoEquipo1: 2,
          verdaderoResultadoEquipo2: 2,
          fecha: "03/07",
          hora: "21:00",
          estadio: "Estadio 2",
        },
        {
          id: 21,
          equipo1: "Equipo 13",
          equipo2: "Equipo 15",
          resultadoEquipo1: 0,
          resultadoEquipo2: 0,
          fase: "Fase de grupos",
          verdaderoResultadoEquipo1: 3,
          verdaderoResultadoEquipo2: 3,
          fecha: "04/07",
          hora: "18:00",
          estadio: "Estadio 3",
        },
        {
          id: 22,
          equipo1: "Equipo 14",
          equipo2: "Equipo 16",
          resultadoEquipo1: 0,
          resultadoEquipo2: 0,
          fase: "Fase de grupos",
          verdaderoResultadoEquipo1: 4,
          verdaderoResultadoEquipo2: 4,
          fecha: "04/07",
          hora: "21:00",
          estadio: "Estadio 4",
        },
        {
          id: 23,
          equipo1: "Equipo 13",
          equipo2: "Equipo 16",
          resultadoEquipo1: 0,
          resultadoEquipo2: 0,
          fase: "Fase de grupos",
          verdaderoResultadoEquipo1: 1,
          verdaderoResultadoEquipo2: 1,
          fecha: "05/07",
          hora: "18:00",
          estadio: "Estadio 5",
        },
        {
          id: 24,
          equipo1: "Equipo 14",
          equipo2: "Equipo 15",
          resultadoEquipo1: 0,
          resultadoEquipo2: 0,
          fase: "Fase de grupos",
          verdaderoResultadoEquipo1: 2,
          verdaderoResultadoEquipo2: 2,
          fecha: "05/07",
          hora: "21:00",
          estadio: "Estadio 6",
        },
        {
          id: 25,
          equipo1: "Equipo A",
          equipo2: "Equipo B",
          resultadoEquipo1: 0,
          resultadoEquipo2: 0,
          fase: "Cuartos de final",
          verdaderoResultadoEquipo1: 1,
          verdaderoResultadoEquipo2: 0,
          fecha: "10/07",
          hora: "18:00",
          estadio: "Estadio 7",
        },
        {
          id: 26,
          equipo1: "Equipo C",
          equipo2: "Equipo D",
          resultadoEquipo1: 0,
          resultadoEquipo2: 0,
          fase: "Cuartos de final",
          verdaderoResultadoEquipo1: 2,
          verdaderoResultadoEquipo2: 1,
          fecha: "10/07",
          hora: "21:00",
          estadio: "Estadio 8",
        },
        {
          id: 27,
          equipo1: "Equipo E",
          equipo2: "Equipo F",
          resultadoEquipo1: 0,
          resultadoEquipo2: 0,
          fase: "Semifinal",
          verdaderoResultadoEquipo1: 1,
          verdaderoResultadoEquipo2: 1,
          fecha: "15/07",
          hora: "18:00",
          estadio: "Estadio 9",
        },
        {
          id: 28,
          equipo1: "Equipo G",
          equipo2: "Equipo H",
          resultadoEquipo1: 0,
          resultadoEquipo2: 0,
          fase: "Semifinal",
          verdaderoResultadoEquipo1: 3,
          verdaderoResultadoEquipo2: 2,
          fecha: "15/07",
          hora: "21:00",
          estadio: "Estadio 10",
        },
        {
          id: 29,
          equipo1: "Equipo I",
          equipo2: "Equipo J",
          resultadoEquipo1: 0,
          resultadoEquipo2: 0,
          fase: "Final",
          verdaderoResultadoEquipo1: 2,
          verdaderoResultadoEquipo2: 2,
          fecha: "20/07",
          hora: "20:00",
          estadio: "Estadio 11",
        },
      ];
      setPartidos(data);
    };

    fetchPartidos();
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
    console.log("Predicción enviada:", partido);
    // Simulamos la llamada al backend para obtener el resultado verdadero
    const resultadoReal = {
      verdaderoResultadoEquipo1: Math.floor(Math.random() * 5), // Simulación de resultado real
      verdaderoResultadoEquipo2: Math.floor(Math.random() * 5), // Simulación de resultado real
    };

    setPartidos((prevPartidos) =>
      prevPartidos.map((p) =>
        p.id === partido.id ? { ...p, ...resultadoReal } : p
      )
    );
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

  return (
    <div className="predicciones">
      <h1>Copa América 2024</h1>
      <div className="jugador-info">
        <h3>Jugador: {jugador.nombre}</h3>
        <p>Puntaje Actual: {jugador.puntajeActual}</p>
      </div>
      {renderPartidosPorFase("Fase de grupos")}
      {renderPartidosPorFase("Cuartos de final")}
      {renderPartidosPorFase("Semifinal")}
      {renderPartidosPorFase("Final")}
    </div>
  );
};

export default Predicciones;
