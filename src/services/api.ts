const API_URL = import.meta.env.VITE_API_URL;


export async function getTasks() {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No hay token disponible");

  const response = await fetch(`${API_URL}/tasks`, {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`  
      }
  });

  if (!response.ok) {
      throw new Error("Error al obtener las tareas");
  }

  return response.json();
}

export async function getTaskById(id: string) {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No hay token disponible");

  const response = await fetch(`${API_URL}/tasks/${id}`, { // <-- Corrección aquí
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Error al obtener la tarea");
  }

  return response.json();
}


export async function createTask(title: string, description: string) {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No hay token disponible");

  const response = await fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ title, description })
  });

  if (!response.ok) {
      throw new Error("Error al crear la tarea");
  }

  return response.json();
}



// Actualizar una tarea
export async function updateTask(id: string, updatedTask: { title?: string; description?: string; completed?: boolean }) {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updatedTask), // Se envían solo los campos modificados
  });

  if (!response.ok) {
    throw new Error("Error al actualizar la tarea");
  }

  return response.json();
}


  // Eliminar una tarea
  export async function deleteTask(id: string) {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No hay token disponible");
  
    const response = await fetch(`${API_URL}/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
  
    if (!response.ok) {
      throw new Error("Error al eliminar la tarea");
    }
  
    return response.json();
  }
  
  