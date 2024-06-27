import axios from "axios";

interface IRegister {
  name: string;
  email: string;
  password: string;
  document: string;
  usuario: string;
  carrera: string;
  campeon: string;
  subcampeon: string;
}

export const login = async (mail: string, contrasena: string) => {
  try {
    const response = await axios.post("http://localhost:3008/auth/login", {
      mail,
      contrasena,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getCurrentUser = () => {
  return localStorage.getItem("token");
};

export const registerUser = async (data: IRegister) => {
  try {
    const response = await axios.post("http://localhost:3008/auth/register", {
      nombre: data.name,
      mail: data.email,
      contrasena: data.password,
      id: data.document,
      usuario: data.usuario,
      carrera: data.carrera,
      campeon: data.campeon,
      subcampeon: data.subcampeon,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
