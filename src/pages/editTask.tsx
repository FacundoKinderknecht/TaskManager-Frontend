import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updateTask } from "../services/api";
import "../styles/editTask.css";
import Layout from "../components/layout";

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({ title: "", description: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSave = async () => {
    try {
      if (!id) {
        console.error("❌ ID no válido al guardar la tarea");
        return;
      }
      await updateTask(id, task);
      navigate("/dashboard");
    } catch (error) {
      console.error("❌ Error al actualizar la tarea:", error);
    }
  };

  return (
    <Layout>
      <div className="edit-task-container">
        <div className="edit-task-card">
          <h2>✏️ Editar Tarea</h2>
          <input 
            type="text" 
            name="title" 
            value={task.title} 
            onChange={handleChange} 
            placeholder="Nuevo título"
          />
          <textarea 
            name="description" 
            value={task.description} 
            onChange={handleChange} 
            placeholder="Nueva descripción"
          ></textarea>
          <div className="button-group">
            <button className="save-btn" onClick={handleSave}>Guardar</button>
            <button className="cancel-btn" onClick={() => navigate("/dashboard")}>Cancelar</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EditTask;
