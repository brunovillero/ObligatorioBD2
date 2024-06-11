import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

interface ILogin {
  email: string;
  password: string;
}

export const Login = () => {
  const [login, setLogin] = useState<ILogin>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(login);
  };

  return (
    <div className="login">
      <div>
        <h1 className="login-title">Ingresar</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <div className="login-input">
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={login.email}
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
          />
        </div>
        <label htmlFor="password">Contraseña</label>
        <div className="login-input">
          <input
            id="password"
            type="password"
            placeholder="Contraseña"
            value={login.password}
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
        </div>
        <button type="submit">Ingresar</button>
        <Link to="/register"  className="my-link">Registrarse</Link>
      </form>
    </div>
  );
};
