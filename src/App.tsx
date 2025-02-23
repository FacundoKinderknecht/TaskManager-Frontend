import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { isAuthenticated } from "./services/auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta pública (Login) */}
        <Route path="/" element={<Login />} />

        {/* Ruta privada (Dashboard) */}
        <Route
          path="/dashboard"
          element={isAuthenticated() ? <Dashboard /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
