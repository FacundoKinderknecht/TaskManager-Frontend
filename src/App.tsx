import { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "./services/api";

interface Task {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Cargar las tareas al montar el componente
  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  // Agregar una nueva tarea
  const handleAddTask = async () => {
    const newTask = await createTask(title, description);
    setTasks([...tasks, newTask]); // Agrega la nueva tarea a la lista
    setTitle("");
    setDescription("");
  };

  // Marcar tarea como completada
  const handleToggleComplete = async (id: string, completed: boolean) => {
    const updatedTask = await updateTask(id, { completed: !completed });
    setTasks(tasks.map(task => (task._id === id ? updatedTask : task)));
  };

  // Eliminar una tarea
  const handleDeleteTask = async (id: string) => {
    await deleteTask(id);
    setTasks(tasks.filter(task => task._id !== id)); // Filtra las tareas eliminadas
  };

  return (
    <div>
      <h1>Task Manager</h1>
      
      {/* Formulario para agregar tareas */}
      <div>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleAddTask}>Agregar Tarea</button>
      </div>

      {/* Listado de tareas */}
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Estado: {task.completed ? "✅ Completada" : "❌ Pendiente"}</p>
            <button onClick={() => handleToggleComplete(task._id, task.completed)}>
              {task.completed ? "Desmarcar" : "Completar"}
            </button>
            <button onClick={() => handleDeleteTask(task._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
