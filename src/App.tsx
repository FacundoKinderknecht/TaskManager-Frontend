import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.tsx";
import Login from "./pages/login.tsx";
import Register from "./pages/login.tsx";
import Dashboard from "./pages/dashboard.tsx";
import EditTask from "./pages/editTask.tsx";

const App = () => {
  return (
    <Router basename="/"> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/edit-task/:id" element={<EditTask />} />
      </Routes>
    </Router>
  );
};

export default App;
