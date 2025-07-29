import React, { useState } from "react";
import logo from "../assets/logo.png";

function Registro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const manejarRegistro = (e) => {
    e.preventDefault();

    // Crear objeto usuario
    const nuevoUsuario = {
      email,
      password,
    };

    // Guardar en localStorage como string
    localStorage.setItem("usuario", JSON.stringify(nuevoUsuario));

    // Confirmación visual
    alert("¡Registro exitoso!");

    // Reiniciar campos (opcional)
    setEmail("");
    setPassword("");
  };

  return (
    <div style={estilos.fondo}>
      <div style={estilos.caja}>
        <div style={estilos.logo}>
          <img src={logo} alt="Logo" style={{ width: "40px" }} />
          <span
            style={{ marginLeft: "10px", fontWeight: "bold", color: "#58a149" }}
          >
            MY-TV
          </span>
        </div>
        <h2 style={estilos.titulo}>Registro</h2>
        <form onSubmit={manejarRegistro}>
          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={estilos.input}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={estilos.input}
          />
          <button type="submit" style={estilos.boton}>
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}

const estilos = {
  fondo: {
    backgroundColor: "#111",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  caja: {
    backgroundColor: "#1c1c1c",
    padding: "40px",
    borderRadius: "10px",
    textAlign: "center",
    width: "300px",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
  },
  titulo: {
    color: "#ccc",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "none",
    fontSize: "14px",
  },
  boton: {
    backgroundColor: "#007f00",
    color: "white",
    border: "none",
    padding: "10px",
    width: "100%",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Registro;
