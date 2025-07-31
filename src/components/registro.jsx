import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../assets/logo.png";

function Registro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const manejarRegistro = (e) => {
    e.preventDefault();

    if (localStorage.getItem(email)) {
      toast.error("El usuario ya está registrado");
      return;
    }

    const datos = { email, password };
    localStorage.setItem(email, JSON.stringify(datos));
    toast.success("¡Registro exitoso!");
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  const estilos = {
    contenedor: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#111",
      color: "white",
    },
    logo: {
      width: "80px",
      marginBottom: "20px",
    },
    formulario: {
      backgroundColor: "#1c1c1c",
      padding: "40px",
      borderRadius: "10px",
      textAlign: "center",
      boxShadow: "0px 0px 15px rgba(0, 255, 0, 0.2)",
      width: "320px",
    },
    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "15px",
      borderRadius: "5px",
      border: "none",
      fontSize: "14px",
    },
    boton: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#007f00",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "14px",
    },
  };

  return (
    <div style={estilos.contenedor}>
      <img src={logo} alt="Logo" style={estilos.logo} />
      <div style={estilos.formulario}>
        <h2>Registro</h2>
        <form onSubmit={manejarRegistro}>
          <input
            style={estilos.input}
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            style={estilos.input}
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button style={estilos.boton} type="submit">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registro;
