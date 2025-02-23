import { useState } from "react";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook de navegación

  const handleLogin = async () => {
    setError(""); // Limpiar errores previos
    const data = await login(username, password);

    if (data.token) {
      console.log("Login exitoso, redirigiendo..."); // Verifica si esto se muestra en la consola
      navigate("/dashboard"); // Redirige al Dashboard
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="p-8 bg-gray-800 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
        {error && <p className="text-red-500 mb-3">{error}</p>}
        <input
          type="text"
          className="w-full p-2 mb-3 border border-gray-700 rounded bg-gray-700 text-white"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="w-full p-2 mb-3 border border-gray-700 rounded bg-gray-700 text-white"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded"
        >
          Entrar
        </button>
      </div>
    </div>
  );
}

export default Login;
