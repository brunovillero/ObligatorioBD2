import axios from "axios";
import { toast } from "react-toastify";

class PrediccionesService {
  async getPredicciones(): Promise<any> {
    try {
      const response = await axios.get("http://localhost:3008/predicciones");
      return response.data;
    } catch (error) {
      toast.error("Error al obtener predicciones");
    }
  }

  async createPrediccion(
    email: string,
    predicciones: string
  ): Promise<any> {
    try {
      const response = await axios.post("http://localhost:3008/predicciones", {
        email,
        predicciones,
      });
      if (response.data.success) {
        toast.success("Predicción creada");
      }
      return response.data.success;
    } catch (error) {
      toast.error("Error al crear predicción");
    }
  }
}