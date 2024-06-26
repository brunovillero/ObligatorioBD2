import axios from "axios";
import { toast } from "react-toastify";

class JugadorService {
  async getJugadorById(id: string): Promise<any> {
    try {
      const response = await axios.get(`http://localhost:3008/players/${id}`);
      return response.data[0];
    } catch (error) {
      toast.error("Error al obtener el jugador");
    }
  }
}

export default JugadorService;
