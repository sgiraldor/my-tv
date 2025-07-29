import React, { useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const manejarLogin = (e) => {
    e.preventDefault();

    // Obtener datos registrados (simulación con localStorage)
    const usuarioRegistrado = JSON.parse(localStorage.getItem("usuario"));

    if (
      usuarioRegistrado &&
      usuarioRegistrado.email === email &&
      usuarioRegistrado.password === password
    ) {
      alert("Inicio de sesión exitoso");
      navigate("/dashboard"); // o la ruta que desees
    } else {
      alert("Correo o contraseña incorrectos");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#111",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#1c1c1c",
          padding: "30px",
          borderRadius: "10px",
          width: "350px",
          textAlign: "center",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{ height: "40px", marginBottom: "15px" }}
        />
        <h2 style={{ color: "#fff", marginBottom: "20px" }}>Iniciar sesión</h2>
        <form onSubmit={manejarLogin}>
          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "5px",
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#008000",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
