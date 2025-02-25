import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Asegurar que el deploy en Render funcione bien
  server: {
    port: 5173,
  },
});
