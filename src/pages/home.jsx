// src/pages/home.jsx
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h1>Bienvenido a My-TV</h1>
      <p>Disfruta de tus series favoritas</p>
      <div>
        <Link to="/registro">Registrarse</Link> |
        <Link to="/login"> Iniciar sesión</Link>
      </div>
    </div>
  );
}

export default Home;
