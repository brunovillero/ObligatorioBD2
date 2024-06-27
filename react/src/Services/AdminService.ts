import axios from "axios";
import { toast } from "react-toastify";

class AdminService {
  async getAllPartidos(): Promise<any> {
    try {
      const response = await axios.get("http://localhost:3008/matches");
      return response.data;
    } catch (error) {
      toast.error("Error al obtener los partidos");
    }
  }

  async updatePartido(
    id: number,
    estadio: string,
    pais1: string,
    pais2: string,
    golesPais1: number,
    golesPais2: number,
    fechaHora: string,
    etapa: string
  ): Promise<any> {
    try {
      await axios.put(`http://localhost:3008/matches/${id}`, {
        estadio,
        pais1,
        pais2,
        golesPais1,
        golesPais2,
        fecha: fechaHora,
        etapa
      });
      toast.success("Resultado actualizado");
      return true;
    } catch (error) {
      toast.error("Error al actualizar los resultados");
      return false;
    }
  }
}

export default AdminService;
