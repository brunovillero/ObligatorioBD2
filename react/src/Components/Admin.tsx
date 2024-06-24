import React, { useState } from "react";
import './Admin.css';

interface Partido {
  id: number;
  equipo1: string;
  equipo2: string;
  verdaderoResultadoEquipo1: number | null;
  verdaderoResultadoEquipo2: number | null;
  fecha: string;
  hora: string;
  estadio: string;
}

const Admin: React.FC = () => {
  const [partidos, setPartidos] = useState<Partido[]>([
    { id: 1, equipo1: 'Argentina', equipo2: 'Chile', verdaderoResultadoEquipo1: null, verdaderoResultadoEquipo2: null, fecha: '24/06', hora: '18:00', estadio: 'Estadio Monumental' },
    { id: 2, equipo1: 'Uruguay', equipo2: 'Paraguay', verdaderoResultadoEquipo1: null, verdaderoResultadoEquipo2: null, fecha: '24/06', hora: '21:00', estadio: 'Estadio Centenario' },
    { id: 24, equipo1: 'Brasil', equipo2: 'Colombia', verdaderoResultadoEquipo1: null, verdaderoResultadoEquipo2: null, fecha: '29/06', hora: '21:00', estadio: 'Estadio Maracaná' },
  ]);

  const handleResultadoChange = (id: number, equipo: string, resultado: number) => {
    setPartidos(prevPartidos =>
      prevPartidos.map(partido =>
        partido.id === id ? { ...partido, [equipo]: resultado } : partido
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Resultados reales enviados:', partidos);
    // Aquí puedes agregar la lógica para enviar los resultados reales a un backend
  };

  return (
    <div className="admin">
      <h1>Gestionador de Resultados</h1>
      <form onSubmit={handleSubmit}>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Selección 1</th>
              <th>Resultado 1</th>
              <th>Selección 2</th>
              <th>Resultado 2</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Estadio</th>
            </tr>
          </thead>
          <tbody>
            {partidos.map(partido => (
              <tr key={partido.id}>
                <td>{partido.equipo1}</td>
                <td>
                  <input
                    type="number"
                    value={partido.verdaderoResultadoEquipo1 || ''}
                    onChange={(e) => handleResultadoChange(partido.id, 'verdaderoResultadoEquipo1', parseInt(e.target.value))}
                  />
                </td>
                <td>{partido.equipo2}</td>
                <td>
                  <input
                    type="number"
                    value={partido.verdaderoResultadoEquipo2 || ''}
                    onChange={(e) => handleResultadoChange(partido.id, 'verdaderoResultadoEquipo2', parseInt(e.target.value))}
                  />
                </td>
                <td>{partido.fecha}</td>
                <td>{partido.hora}</td>
                <td>{partido.estadio}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="submit" className="submit-button">Guardar Resultados</button>
      </form>
    </div>
  );
};

export default Admin;
