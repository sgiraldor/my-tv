import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const navigate = useNavigate();
  const sesionActiva = localStorage.getItem("usuario");

  const cerrarSesion = () => {
    localStorage.removeItem("usuario");
    navigate("/login");
  };

  return (
    <nav
      style={{
        backgroundColor: "#2f7d2f",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          alt="My-TV Logo"
          style={{ width: "30px", marginRight: "10px" }}
        />
        <span
          style={{ color: "#b6ffb6", fontSize: "24px", fontWeight: "bold" }}
        >
          My-TV
        </span>
      </div>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link
          to="/"
          style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
        >
          Inicio
        </Link>
        {!sesionActiva && (
          <>
            <Link
              to="/registro"
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Registro
            </Link>
            <Link
              to="/login"
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Login
            </Link>
          </>
        )}
        <Link
          to="/dashboard"
          style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
        >
          Series
        </Link>
        {sesionActiva && (
          <button
            onClick={cerrarSesion}
            style={{
              backgroundColor: "#b6ffb6",
              color: "#2f7d2f",
              border: "none",
              padding: "5px 10px",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Cerrar sesión
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
