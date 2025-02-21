const API_URL = import.meta.env.VITE_API_URL;


export async function fetchTasks() {
    const response = await fetch(`${API_URL}/tasks`);
    return response.json();
}