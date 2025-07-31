import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import series from "../data/series";
import { Link } from "react-router-dom";

function Dashboard() {
  const usuario = localStorage.getItem("usuario");
  const navigate = useNavigate();

  useEffect(() => {
    if (!usuario) {
      navigate("/login");
    }
  }, [usuario, navigate]);

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h2 style={{ color: "#b6ffb6", fontSize: "28px", marginBottom: "10px" }}>
        Bienvenido a My-TV
      </h2>
      <h3
        style={{ color: "white", marginBottom: "30px", fontWeight: "normal" }}
      >
        Explora nuestras series:
      </h3>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {series.map((serie) => (
          <Link
            to={`/detalle/${serie.id}`}
            key={serie.id}
            style={{ textDecoration: "none", color: "white" }}
          >
            <div
              style={{
                backgroundColor: "#1a1a1a",
                borderRadius: "10px",
                padding: "15px",
                width: "200px",
                boxShadow: "0 0 15px green",
                transition: "transform 0.2s",
              }}
            >
              <img
                src={serie.imagen}
                alt={serie.titulo}
                style={{ width: "100%", borderRadius: "5px" }}
              />
              <h4 style={{ marginTop: "10px", color: "#b6ffb6" }}>
                {serie.titulo}
              </h4>
              <p style={{ fontSize: "14px", marginTop: "5px" }}>
                {serie.descripcion}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
