const API_URL = import.meta.env.VITE_API_URL;

export const register = async (userData: {
  username: string;
  email: string;
  telefono: string;
  password: string;
}) => {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { error: errorData.error || "Error al registrar usuario" };
    }

    return await response.json();
  } catch (error) {
    console.error("Error en la petición:", error);
    return { error: "Error de conexión con el servidor" };
  }
};


export async function login(username: string, password: string) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  
  if (data.token) {
    localStorage.setItem("token", data.token);
  }

  return data;
}


export function logout() {
  localStorage.removeItem("token");
}

export function isAuthenticated() {
  return !!localStorage.getItem("token");
}
