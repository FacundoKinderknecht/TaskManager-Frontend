import { Link, useNavigate } from "react-router-dom";
import { logout, isAuthenticated } from "../services/auth";
import "../styles/header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">TaskManager</Link>
      </div>
      <nav className="nav-links">
        {isAuthenticated() ? (
          <>
            <Link to="/dashboard">📋 Dashboard</Link>
            <button className="logout-btn" onClick={handleLogout}>🚪 Cerrar sesión</button>
          </>
        ) : (
          <>
            <Link to="/login">🔑 Iniciar sesión</Link>
            <Link to="/register">📝 Registrarse</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
