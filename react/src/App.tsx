import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import Predicciones from "./Components/Predicciones";
import Admin from "./Components/Admin";
import PrivateRoute from "./Components/PrivateRoute";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="/predicciones" element={<Predicciones />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
