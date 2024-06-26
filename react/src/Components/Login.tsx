import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Services/AuthService";
import "./Login.css";
import { toast } from "react-toastify";

interface ILogin {
  mail: string;
  contrasena: string;
}

export const Login = () => {
  const [loginData, setLoginData] = useState<ILogin>({
    mail: "",
    contrasena: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response  = await login(loginData.mail, loginData.contrasena);
      localStorage.setItem("token", response.token);
      toast("Login successful");
      navigate("/predicciones");
    } catch (err) {
      console.error(err);
      alert("Error logging in");
    }
  };

  return (
    <div className="login">
      <div>
        <h1 className="login-title">Ingresar</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mail">Email</label>
        <div className="login-input">
          <input
            id="mail"
            type="email"
            placeholder="Email"
            value={loginData.mail}
            onChange={(e) =>
              setLoginData({ ...loginData, mail: e.target.value })
            }
          />
        </div>
        <label htmlFor="contrasena">Contraseña</label>
        <div className="login-input">
          <input
            id="contrasena"
            type="password"
            placeholder="Contraseña"
            value={loginData.contrasena}
            onChange={(e) =>
              setLoginData({ ...loginData, contrasena: e.target.value })
            }
          />
        </div>
        <button type="submit">Ingresar</button>
        <Link to="/register" className="my-link">
          Registrarse
        </Link>
      </form>
    </div>
  );
};

export default Login;
