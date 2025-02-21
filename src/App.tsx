import { useEffect, useState } from "react";
import { fetchTasks } from "./services/api";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() =>{
    fetchTasks().then((data) => setMessage(data.message));
  },[]);

  return (
    <div>
      <h1>Hola mundo</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;

