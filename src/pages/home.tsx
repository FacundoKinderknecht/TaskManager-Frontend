import "../styles/home.css";
import Layout from "../components/layout";
const Home = () => {
  return (
    <Layout>
      <div className="home-container">
        <section className="hero">
          <h1>Organiza tus tareas de forma eficiente</h1>
          <p>TaskManager te ayuda a gestionar tus pendientes de manera rápida y sencilla.</p>
        </section>

        <section className="features">
          <div className="feature-card">
            <h2>📅 Planificación</h2>
            <p>Organiza tus tareas diarias con una interfaz intuitiva y moderna.</p>
          </div>
          <div className="feature-card">
            <h2>🔔 Recordatorios</h2>
            <p>Recibe notificaciones para no olvidar ninguna tarea importante.</p>
          </div>
          <div className="feature-card">
            <h2>🔐 Seguridad</h2>
            <p>Tus datos están protegidos con autenticación segura.</p>
          </div>
        </section>

        <section className="cta">
          <h2>¡Comienza ahora!</h2>
          <p>Regístrate y mejora tu productividad con TaskManager.</p>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
