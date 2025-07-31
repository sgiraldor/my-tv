import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const manejarLogin = (e) => {
    e.preventDefault();

    const usuarioGuardado = localStorage.getItem(email);

    if (!usuarioGuardado) {
      toast.error("Usuario no encontrado");
      return;
    }

    const datos = JSON.parse(usuarioGuardado);

    if (datos.password !== password) {
      toast.error("Contraseña incorrecta");
      return;
    }

    // Guardar sesión activa
    localStorage.setItem("usuario", email);
    toast.success("Inicio de sesión exitoso");

    // Redireccionar al dashboard después de un pequeño retraso
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#111",
      }}
    >
      <form
        onSubmit={manejarLogin}
        style={{
          backgroundColor: "#1e1e1e",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 0 15px green",
          width: "300px",
        }}
      >
        <h2
          style={{
            color: "#b6ffb6",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Iniciar Sesión
        </h2>

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
            border: "none",
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
            marginBottom: "20px",
            borderRadius: "5px",
            border: "none",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default Login;
