import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminService from "../Services/AdminService";
import { logout } from "../Services/AuthService";
import "./Admin.css";

interface Partido {
  id: number;
  equipo1: string;
  equipo2: string;
  verdaderoResultadoEquipo1: number | null;
  verdaderoResultadoEquipo2: number | null;
  fecha: string;
  hora: string;
  estadio: string;
  etapa: string;
}

const Admin: React.FC = () => {
  const [partidos, setPartidos] = useState<Partido[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPartidos = async () => {
      const adminService = new AdminService();
      const data = await adminService.getAllPartidos();
      if (data) {
        const formattedData = data.map((partido: any) => ({
          id: partido.id,
          equipo1: partido.pais1,
          equipo2: partido.pais2,
          verdaderoResultadoEquipo1: partido.golesPais1,
          verdaderoResultadoEquipo2: partido.golesPais2,
          fecha: new Date(partido.fecha).toLocaleDateString("en-CA"),
          hora: new Date(partido.fecha).toLocaleTimeString("en-GB", {
            hour12: false,
          }),
          estadio: partido.estadio,
          etapa: partido.etapa,
        }));
        setPartidos(formattedData);
      }
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

  const handleUpdate = async (partido: Partido) => {
    const adminService = new AdminService();
    const fechaHora = `${partido.fecha} ${partido.hora}`; // Combina fecha y hora
    await adminService.updatePartido(
      partido.id,
      partido.estadio,
      partido.equipo1,
      partido.equipo2,
      partido.verdaderoResultadoEquipo1!,
      partido.verdaderoResultadoEquipo2!,
      fechaHora,
      partido.etapa
    );
    console.log("Resultado actualizado:", partido);
  };

  const handleLogout = () => {
    logout();
    navigate("/login"); // Redirigir a la página de login después del logout
  };

  return (
    <div className="admin">
      <h1>Gestionador de Resultados</h1>
      <div className="logout-container">
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
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
            <th>Etapa</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {partidos.map((partido) => (
            <tr key={partido.id}>
              <td>{partido.equipo1}</td>
              <td>
                <input
                  type="number"
                  value={
                    partido.verdaderoResultadoEquipo1 !== null
                      ? partido.verdaderoResultadoEquipo1
                      : ""
                  }
                  onChange={(e) =>
                    handleResultadoChange(
                      partido.id,
                      "verdaderoResultadoEquipo1",
                      parseInt(e.target.value)
                    )
                  }
                />
              </td>
              <td>{partido.equipo2}</td>
              <td>
                <input
                  type="number"
                  value={
                    partido.verdaderoResultadoEquipo2 !== null
                      ? partido.verdaderoResultadoEquipo2
                      : ""
                  }
                  onChange={(e) =>
                    handleResultadoChange(
                      partido.id,
                      "verdaderoResultadoEquipo2",
                      parseInt(e.target.value)
                    )
                  }
                />
              </td>
              <td>{partido.fecha}</td>
              <td>{partido.hora}</td>
              <td>{partido.estadio}</td>
              <td>{partido.etapa}</td>
              <td>
                <button
                  type="button"
                  className="update-button"
                  onClick={() => handleUpdate(partido)}
                >
                  Actualizar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
