const API_URL = import.meta.env.VITE_API_URL;


// Obtener todas las tareas
export async function getTasks() {
    const response = await fetch(`${API_URL}/tasks`);
    return response.json();
}

// Crear una nueva tarea
export async function createTask(title: string, description: string) {
    const response = await fetch(`${API_URL}/tasks`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ title, description}),
    });
    return response.json();
}

// Actualizar una tarea
interface TaskUpdate {
    title?: string;
    description?: string;
    completed?: boolean;
  }

export async function updateTask(id: string, updatedTask: TaskUpdate) {
    const response = await fetch(`${API_URL}/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTask),
    });
    return response.json();
  }

  // Eliminar una tarea
export async function deleteTask(id: string) {
    const response = await fetch(`${API_URL}/tasks/${id}`, {
      method: "DELETE",
    });
    return response.json();
  }