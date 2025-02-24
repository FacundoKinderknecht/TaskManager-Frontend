import { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "../services/api";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";
import Layout from "../components/layout";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "../styles/confirmAlert.css";


interface Task {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
}

const Dashboard = () => {
  
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const data: Task[] = await getTasks(); // Asegura que los datos son del tipo Task[]
      setTasks(data);
    } catch (error) {
      console.error("Error al obtener las tareas:", error);
    }
  };
  

  const handleAddTask = async () => {
    if (!newTitle.trim() || !newDescription.trim()) {
      alert("El título y la descripción no pueden estar vacíos");
      return;
    }

    try {
      await createTask(newTitle, newDescription);
      fetchTasks();
      setNewTitle("");
      setNewDescription("");
    } catch (error) {
      console.error("Error al agregar la tarea:", error);
    }
  };

  const handleDeleteTask = async (id: string) => {
    confirmAlert({
      title: "¿Estás seguro?",
      message: "Esta acción no se puede deshacer.",
      buttons: [
        {
          label: "Sí, eliminar",
          onClick: async () => {
            try {
              await deleteTask(id);
              setTasks(tasks.filter(task => task._id !== id)); // Actualiza el estado eliminando la tarea
            } catch (error) {
              console.error("Error al eliminar la tarea", error);
            }
          },
        },
        {
          label: "Cancelar",
        },
      ],
    });
  };
  

  const handleEditTask = (id: string) => {
    navigate(`/edit-task/${id}`);
  };

  const handleToggleComplete = async (id: string, completed: boolean) => {
    try {
      await updateTask(id, { completed: !completed });
      fetchTasks();
    } catch (error) {
      console.error("Error al actualizar la tarea:", error);
    }
  };

  return (
    <Layout>
      <div className="dashboard-container">
        <h2>Mis Tareas</h2>

        <div className="add-task-form">
          <input
            type="text"
            placeholder="Título de la tarea"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Descripción de la tarea"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleAddTask}>Agregar</button>
        </div>

        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="no-tasks">No tienes tareas aún.</p>
          ) : (
            tasks.map((task) => (
              <div key={task._id} className={`task-item ${task.completed ? "completed" : ""}`}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <div className="task-actions">
                  <button onClick={() => handleToggleComplete(task._id, task.completed)}>
                    {task.completed ? "✅ Completada" : "⬜ Marcar como completada"}
                  </button>
                  <button onClick={() => handleEditTask(task._id)}>✏️ Editar</button>
                  <button onClick={() => handleDeleteTask(task._id)}>🗑 Eliminar</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
