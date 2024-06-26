import axios from "axios";
import { toast } from "react-toastify";

class PartidoService {
  async getPartidos(): Promise<any> {
    try {
      const response = await axios.get("http://localhost:3008/matches");
      return response.data;
    } catch (error) {
      toast.error("Error al obtener partidos");
    }
  }
}

export default PartidoService;