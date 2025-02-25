import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth";
import "../styles/login.css";
import Layout from "../components/layout";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await login(username, password);
      if (response.error) {
        setError(response.error);
      } else {
        navigate("/dashboard"); // Redirigir al dashboard después de iniciar sesión
      }
    } catch (err) {
      console.log(err);
      setError("Hubo un error al iniciar sesión");
    }
  };

  return (
    <Layout>
      <div className="login-container">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label>Usuario</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="login-btn">Iniciar Sesión</button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
