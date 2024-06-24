import React from "react";
import "./PartidoCard.css";

export interface Partido {
  id: number;
  equipo1: string;
  equipo2: string;
  resultadoEquipo1: number;
  resultadoEquipo2: number;
  fase: string;
  verdaderoResultadoEquipo1: number | null; // Puede ser null hasta que se obtenga del backend
  verdaderoResultadoEquipo2: number | null; // Puede ser null hasta que se obtenga del backend
  fecha: string;
  hora: string;
  estadio: string;
}

interface PartidoCardProps {
  partido: Partido;
  onResultadoChange: (id: number, equipo: string, resultado: number) => void;
  onSubmit: (partido: Partido) => void;
}

const PartidoCard: React.FC<PartidoCardProps> = ({
  partido,
  onResultadoChange,
  onSubmit,
}) => {
  const getColor = () => {
    const {
      resultadoEquipo1,
      resultadoEquipo2,
      verdaderoResultadoEquipo1,
      verdaderoResultadoEquipo2,
    } = partido;
    if (
      verdaderoResultadoEquipo1 === null ||
      verdaderoResultadoEquipo2 === null
    ) {
      return ""; // No hay resultado verdadero aún
    }
    if (
      resultadoEquipo1 === verdaderoResultadoEquipo1 &&
      resultadoEquipo2 === verdaderoResultadoEquipo2
    ) {
      return "green";
    } else if (
      resultadoEquipo1 - resultadoEquipo2 ===
      verdaderoResultadoEquipo1 - verdaderoResultadoEquipo2
    ) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <div className={`partido-card ${getColor()}`}>
      <div className="partido-info">
        <div className="partido-header">
          <span className="fase">{`#${partido.id} - ${partido.fase} - ${partido.fecha}`}</span>
        </div>
        <div className="partido-body">
          <div className="equipo">
            <span>{partido.equipo1}</span>
            <div className="input-container">
              <input
                type="number"
                value={partido.resultadoEquipo1}
                onChange={(e) =>
                  onResultadoChange(
                    partido.id,
                    "resultadoEquipo1",
                    parseInt(e.target.value)
                  )
                }
                className="input-goles"
              />
            </div>
          </div>
          <div className="vs">VS</div>
          <div className="equipo">
            <span>{partido.equipo2}</span>
            <div className="input-container">
              <input
                type="number"
                value={partido.resultadoEquipo2}
                onChange={(e) =>
                  onResultadoChange(
                    partido.id,
                    "resultadoEquipo2",
                    parseInt(e.target.value)
                  )
                }
                className="input-goles"
              />
            </div>
          </div>
        </div>
        <div className="partido-footer">
          <span>{partido.hora}</span>
          <span>{partido.estadio}</span>
        </div>
      </div>
      <button className="submit-button" onClick={() => onSubmit(partido)}>
        Enviar Predicción
      </button>
    </div>
  );
};

export default PartidoCard;
