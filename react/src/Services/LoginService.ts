import axios from "axios";
import { toast } from "react-toastify";

class LoginService {
  async login(email: string, password: string): Promise<any> {
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
      if (response.data.success) {
        toast.success("Login exitoso");
      }
    } catch (error) {
      toast.error("Login fallido");
      return false;
    }
  }

  async register(
    email: string,
    password: string,
    name: string,
    ci: string
  ): Promise<any> {
    try {
      const response = await axios.post("http://localhost:8000/register", {
        email,
        password,
        name,
        ci,
      });
      if (response.data.success) {
        toast.success("Registro exitoso");
      }
      return response.data.success;
    } catch (error) {
      toast.error("Registro fallido");
      return false;
    }
  }
}

export default LoginService;
