import React from "react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./Login.css";

interface IRegister {
  name: string;
  email: string;
  password: string;
  document: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Nombre es requerido"),
  email: yup
    .string()
    .email("Email no es válido")
    .required("Email es requerido"),
  password: yup
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("Contraseña es requerida"),
  document: yup.string().required("CI es requerido"),
});

export const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IRegister> = (data) => {
    console.log(data);
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
        <button type="submit">Ingresar</button>
        <Link to="/login" className="my-link">
          Ya estoy registrado
        </Link>
      </form>
    </div>
  );
};

export default Register;
