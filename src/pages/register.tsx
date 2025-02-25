import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/auth";
import "../styles/register.css";
import Layout from "../components/layout";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await register({ username, email, telefono, password });
      if (response.error) {
        setError(response.error);
      } else {
        navigate("/login"); // Redirigir al login después de registrarse
      }
    } catch (err) {
      console.log(err);
      setError("Hubo un error al registrarse");
    }
  };

  return (
    <Layout>
      <div className="register-container">
        <h2>Crear Cuenta</h2>
        <form onSubmit={handleSubmit} className="register-form">
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
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Teléfono</label>
            <input
              type="tel"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
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
          <button type="submit" className="register-btn">Registrarse</button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
