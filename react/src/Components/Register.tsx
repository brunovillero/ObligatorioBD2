import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { registerUser } from "../Services/AuthService";
import "./Login.css";
import { toast } from "react-toastify";

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

const schema = yup.object().shape({
  name: yup.string().required("Nombre es requerido"),
  usuario: yup.string().required("Usuario es requerido"),
  email: yup
    .string()
    .email("Email no es válido")
    .required("Email es requerido"),
  password: yup
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("Contraseña es requerida"),
  document: yup.string().required("CI es requerido"),
  carrera: yup.string().required("Carrera es requerida"),
  campeon: yup.string().required("Campeón es requerido"),
  subcampeon: yup.string().required("Subcampeón es requerido"),
});

export const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IRegister> = async (data) => {
    try {
      const response = await registerUser(data);
      localStorage.setItem("token", response.token);
      toast("Registro exitoso");
      navigate("/predicciones");
    } catch (err) {
      console.error(err);
      alert("Error al registrar usuario");
    }
  };

  return (
    <div className="login">
      <div>
        <h1 className="login-title">Registrarse</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Nombre</label>
        <div className={`login-input ${errors.name ? "has-error" : ""}`}>
          <input
            id="name"
            type="text"
            placeholder="Nombre"
            {...register("name")}
          />
          {errors.name && (
            <p className="error-message">{errors.name.message}</p>
          )}
        </div>
        <label htmlFor="usuario">Usuario</label>
        <div className={`login-input ${errors.usuario ? "has-error" : ""}`}>
          <input
            id="usuario"
            type="text"
            placeholder="Usuario"
            {...register("usuario")}
          />
          {errors.usuario && (
            <p className="error-message">{errors.usuario.message}</p>
          )}
        </div>
        <label htmlFor="email">Email</label>
        <div className={`login-input ${errors.email ? "has-error" : ""}`}>
          <input
            id="email"
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>
        <label htmlFor="password">Contraseña</label>
        <div className={`login-input ${errors.password ? "has-error" : ""}`}>
          <input
            id="password"
            type="password"
            placeholder="Contraseña"
            {...register("password")}
          />
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
        </div>
        <label htmlFor="document">Cedula Identidad</label>
        <div className={`login-input ${errors.document ? "has-error" : ""}`}>
          <input
            id="document"
            type="text"
            placeholder="Documento"
            {...register("document")}
          />
          {errors.document && (
            <p className="error-message">{errors.document.message}</p>
          )}
        </div>
        <label htmlFor="carrera">Carrera</label>
        <div className={`login-input ${errors.carrera ? "has-error" : ""}`}>
          <input
            id="carrera"
            type="text"
            placeholder="Carrera"
            {...register("carrera")}
          />
          {errors.carrera && (
            <p className="error-message">{errors.carrera.message}</p>
          )}
        </div>
        <label htmlFor="campeon">Campeón</label>
        <div className={`login-input ${errors.campeon ? "has-error" : ""}`}>
          <input
            id="campeon"
            type="text"
            placeholder="Campeón"
            {...register("campeon")}
          />
          {errors.campeon && (
            <p className="error-message">{errors.campeon.message}</p>
          )}
        </div>
        <label htmlFor="subcampeon">Subcampeón</label>
        <div className={`login-input ${errors.subcampeon ? "has-error" : ""}`}>
          <input
            id="subcampeon"
            type="text"
            placeholder="Subcampeón"
            {...register("subcampeon")}
          />
          {errors.subcampeon && (
            <p className="error-message">{errors.subcampeon.message}</p>
          )}
        </div>
        <button type="submit">Ingresar</button>
        <Link to="/login" className="my-link">
          Ya estoy registrado
        </Link>
      </form>
    </div>
  );
};

export default Register;
