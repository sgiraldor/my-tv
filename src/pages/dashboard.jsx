// src/pages/dashboard.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import series from "../data/series";

function Dashboard() {
  const navigate = useNavigate();

  // Verifica si el usuario está autenticado
  useEffect(() => {
    const usuario = localStorage.getItem("usuario");
    if (!usuario) {
      alert("Debes iniciar sesión para ver esta página.");
      navigate("/login");
    }
  }, [navigate]);

  const cerrarSesion = () => {
    localStorage.removeItem("usuario");
    alert("Sesión cerrada.");
    navigate("/");
  };

  return (
    <div>
      <h2>Bienvenido a My-TV</h2>
      <button onClick={cerrarSesion}>Cerrar sesión</button>
      <p>Explora nuestras series:</p>

      <div className="card-container">
        {series.map((serie) => (
          <div key={serie.id} className="card">
            <img src={serie.imagen} alt={serie.titulo} />
            <h4>{serie.titulo}</h4>
            <p style={{ fontSize: "14px" }}>{serie.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
