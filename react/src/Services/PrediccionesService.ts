import axios from "axios";
import { toast } from "react-toastify";

class PrediccionesService {
  async getPredicciones(): Promise<any> {
    try {
      const response = await axios.get("http://localhost:3008/predictions");
      return response.data;
    } catch (error) {
      toast.error("Error al obtener predicciones");
    }
  }

  async createPrediccion(
    idPersona: string,
    puntosPais1: number,
    puntosPais2: number,
    idPartido: number
  ): Promise<any> {
    try {
      const response = await axios.post("http://localhost:3008/predictions", {
        idPersona,
        puntosPais1,
        puntosPais2,
        idPartido,
      });
      if (response.status === 201) {
        toast.success("Predicción creada");
        return true;
      }
      return false;
    } catch (error) {
      toast.error("Error al crear predicción");
      return false;
    }
  }
}

export default PrediccionesService;