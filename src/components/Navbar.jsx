// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="My-TV Logo" style={styles.logoImg} />
        <span style={styles.logoText}>My-TV</span>
      </div>
      <div>
        <Link to="/" style={styles.link}>
          Inicio
        </Link>
        <Link to="/registro" style={styles.link}>
          Registro
        </Link>
        <Link to="/login" style={styles.link}>
          Login
        </Link>
        <Link to="/dashboard" style={styles.link}>
          Series
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: "#2e7d32",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logoImg: {
    width: "40px",
    height: "40px",
    marginRight: "10px",
  },
  logoText: {
    fontWeight: "bold",
    fontSize: "20px",
    color: "#fff",
  },
  link: {
    margin: "0 10px",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Navbar;
